import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();

    // Basic server-side validation
    if (!data.name || !data.email || !data.service) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and service are required.' },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.WEBHOOK_URL;

    // Fallback if webhook is not configured to avoid crashing the frontend
    if (!webhookUrl) {
      console.warn('⚠️ No WEBHOOK_URL environment variable set. Simulating success.');
      return NextResponse.json({ success: true, simulated: true });
    }

    // Forward to webhook (e.g. Google Apps Script, Zapier, Make) with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Webhook responded with status: ${response.status}`);
      }
    } catch (fetchError) {
      clearTimeout(timeoutId);
      console.error('Webhook fetch error:', fetchError);
      // Even if webhook fails, we might want to return success to the user so they don't panic,
      // but for this implementation we return an error to trigger the UI error state.
      throw fetchError;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'There was an error submitting your request. Please try again or call us.' },
      { status: 500 }
    );
  }
}
