'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EstimateForm({ showSizeField = true }) {
  const [status, setStatus] = useState('idle');
  const [btnText, setBtnText] = useState('Send Magic Request ✦');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setBtnText('Sending...');
    setError('');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.sourcePage = window.location.pathname;
    data.submittedAt = new Date().toISOString();

    try {
      const res = await fetch('/api/submit-estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.error || 'Error');

      setStatus('success');
      setBtnText('✓ Request Sent!');
      e.target.reset();
      setTimeout(() => router.push('/thank-you'), 900);
    } catch {
      setStatus('error');
      setBtnText('Try Again');
      setError('Something went wrong. Please call us directly.');
    }
  };

  return (
    <div className="estimate-card">
      <h3>Request an Estimate</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="est-name">Full Name</label>
            <input
              id="est-name"
              type="text"
              name="name"
              placeholder="Jane Doe"
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="est-email">Email Address</label>
            <input
              id="est-email"
              type="email"
              name="email"
              placeholder="jane@example.com"
              required
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="est-service">Service Type</label>
          <select id="est-service" name="service" required className="form-input">
            <option value="" disabled>Select a service</option>
            <option value="deep-cleaning">Deep Cleaning</option>
            <option value="move-in-out">Move In / Out Cleaning</option>
            <option value="airbnb">Airbnb Cleaning</option>
            <option value="regular">Regular Maintenance</option>
          </select>
        </div>

        {showSizeField && (
          <div className="form-group">
            <label htmlFor="est-size">Property Size (Approx. Sq Ft)</label>
            <input
              id="est-size"
              type="number"
              name="size"
              placeholder="e.g. 1500"
              className="form-input"
            />
          </div>
        )}

        <button
          type="submit"
          className={`btn-submit${status === 'success' ? ' success' : ''}`}
          disabled={status === 'sending'}
        >
          {btnText}
        </button>

        {error && (
          <p style={{ color: '#dc2626', fontSize: '0.85rem', textAlign: 'center', marginTop: '0.75rem' }}>
            {error}
          </p>
        )}

        <p className="form-note">No obligation. Response within 2 hours.</p>
      </form>
    </div>
  );
}
