'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  async function submitBrief(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const project = String(data.get('project') || '');
    const budget = String(data.get('budget') || 'Not specified');
    const body = `Name: ${name}\nEmail: ${email}\nProject type: ${project}\nBudget: ${budget}`;
    try {
      await navigator.clipboard.writeText(body);
      setStatus('Brief copied. Connect your real business inbox before launch, then paste and send it there.');
    } catch {
      setStatus('Contact delivery is not connected yet. Add your real business email before launch.');
    }
  }

  return (
    <form className="brief-form" onSubmit={submitBrief}>
      <label>Name<input name="name" autoComplete="name" required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      <label>What are you building?<textarea name="project" rows={4} required /></label>
      <label>Estimated budget<select name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>Under ₹1 lakh</option><option>₹1–3 lakh</option><option>₹3–8 lakh</option><option>₹8 lakh+</option><option>Not sure yet</option></select></label>
      <button className="button button--dark" type="submit">Copy project brief <span className="arrow-icon" aria-hidden="true" /></button>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
