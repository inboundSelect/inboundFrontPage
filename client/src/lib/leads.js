/* Every form on the site submits through here, so there is exactly one place
 * that knows the endpoint and one shape of result for the UI to handle.
 * The endpoint is the Express handler in ../../server.js. */

const ENDPOINT = '/api/waitlist';

export async function submitLead(fields) {
  const email = (fields.email || '').trim();
  if (!email) {
    return { ok: false, message: 'Please enter your email address so we can reply.' };
  }

  /* The server takes name / email / company / message. Anything else the form
   * collected is folded into the message so nothing a prospect typed is lost. */
  const extras = Object.entries(fields)
    .filter(([k, v]) => !['name', 'email', 'company', 'message'].includes(k) && String(v || '').trim())
    .map(([k, v]) => `${k}: ${v}`);

  const message = [fields.message, ...extras].filter(Boolean).join('\n');

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: (fields.name || '').trim(),
        email,
        company: (fields.company || '').trim(),
        message,
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (res.ok && data.success) {
      return { ok: true, message: data.message };
    }
    return {
      ok: false,
      message: data.message || 'Something went wrong on our side. Please try again.',
    };
  } catch {
    return {
      ok: false,
      message: 'We could not reach the server. Please check your connection and try again.',
    };
  }
}
