// Shared lead-submission helper used by both the WaitlistModal and the
// ContactForm. Posts to the main PayPerCall backend's Inbound Select leads
// endpoint. Configure the base URL via VITE_API_BASE_URL (see .env.example).

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_PUBLIC_URL ||
  'https://paypercall-testingphase-backend-production-cf08.up.railway.app'
).trim().replace(/\/$/, '');

export const LEADS_ENDPOINT = `${API_BASE_URL}/api/inbound-select/leads`;

/**
 * Submit a lead to the Inbound Select backend.
 * @param {{name?:string,email:string,company?:string,message?:string,sourcePage?:string}} fields
 * @returns {Promise<{ok:boolean, success:boolean, message:string}>}
 */
export async function submitLead(fields) {
  const { sourcePage = 'website', ...rest } = fields;
  const res = await fetch(LEADS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...rest,
      source_page: sourcePage,
      source_url: typeof window !== 'undefined' ? window.location.href : '',
    }),
  });
  const data = await res.json().catch(() => ({}));
  return {
    ok: res.ok,
    success: Boolean(data.success),
    message: data.message || '',
  };
}
