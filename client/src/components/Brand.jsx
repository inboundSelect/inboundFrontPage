import { COMPANY } from '../lib/site';

/* The brand lockup, replicated exactly from the dashboard app's logo section
 * (AgencyDashboard sidebar / auth pages): the same /assets image — whose
 * tallest chart bar doubles as the "I" — followed by "nbound" in Signal Blue
 * and "Select" in ink, with the slogan beneath. brand-mark.svg is a byte-for-
 * byte copy of the dashboard's inbound_logo.svg (renamed only because this
 * folder already holds a different Inbound_Logo.svg and the filesystem is
 * case-insensitive). Colours and fonts come from the same tokens the site
 * already uses — the dashboard's light-context logo colours are this site's
 * --blue-500 and ink. */

function Brand() {
  return (
    <span className="brand__lockup">
      <img src="/assets/brand-mark.svg" alt="" className="brand__mark" />
      <span className="brand__text">
        <span className="brand__word">
          <span className="brand__word-inbound">nbound</span>
          <span className="brand__word-select">Select</span>
        </span>
        <span className="brand__tagline">{COMPANY.tagline}</span>
      </span>
    </span>
  );
}

export default Brand;
