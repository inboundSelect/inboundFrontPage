/* Shared inline icon set.
 *
 * All icons are stroke-based on a 24-grid and inherit `currentColor`, so a
 * parent's colour is the only thing that decides how they look. Kept inline on
 * purpose — no icon package, and nothing that can 404 in production.
 */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const make = (path) =>
  function Icon({ size = 22, ...rest }) {
    return (
      <svg {...base} width={size} height={size} {...rest}>
        {path}
      </svg>
    );
  };

export const IconPhone = make(
  <path d="M5 3h3l1.5 5-2.2 1.6a12 12 0 0 0 6.6 6.6L15.5 15l5 1.5V20a1.6 1.6 0 0 1-1.7 1.6A17 17 0 0 1 3.4 6.7 1.6 1.6 0 0 1 5 5V3Z" />,
);

export const IconPhoneIn = make(
  <>
    <path d="M5 4h2.8l1.4 4.6-2 1.5a11 11 0 0 0 6.1 6.1l1.5-2 4.6 1.4V19a1.6 1.6 0 0 1-1.7 1.6A16 16 0 0 1 3.4 5.7 1.6 1.6 0 0 1 5 4Z" />
    <path d="M21 3l-5 5M16 3.4V8h4.6" />
  </>,
);

export const IconUsers = make(
  <>
    <circle cx="9" cy="8" r="3.4" />
    <path d="M2.6 20a6.4 6.4 0 0 1 12.8 0" />
    <path d="M17 6.6a3.4 3.4 0 0 1 0 6.6M18.4 20a6.5 6.5 0 0 0-2-4.4" />
  </>,
);

export const IconUser = make(
  <>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M5 20.5a7 7 0 0 1 14 0" />
  </>,
);

export const IconUserCheck = make(
  <>
    <circle cx="9.5" cy="8" r="3.6" />
    <path d="M3 20.5a6.9 6.9 0 0 1 11-5.5" />
    <path d="M15.5 17.5l2 2 4-4" />
  </>,
);

export const IconShield = make(
  <>
    <path d="M12 3l7.5 3v5.4c0 4.6-3.1 7.9-7.5 9.6-4.4-1.7-7.5-5-7.5-9.6V6L12 3Z" />
    <path d="M9 12l2.2 2.2L15.5 10" />
  </>,
);

export const IconLock = make(
  <>
    <rect x="4" y="10" width="16" height="11" rx="2.6" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <circle cx="12" cy="15.6" r="1.3" fill="currentColor" stroke="none" />
  </>,
);

export const IconChart = make(<path d="M4 19V11M10 19V5M16 19v-5M22 19H2" />);

export const IconTrend = make(
  <>
    <path d="M3 17l5.5-6 4 3.2L21 5" />
    <path d="M16.5 5H21v4.5" />
  </>,
);

export const IconBolt = make(<path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12l1-8Z" />);

export const IconCheck = make(<path d="M4.5 12.5l4.5 4.5L19.5 6.5" />);

export const IconPlus = make(<path d="M12 5v14M5 12h14" />);

export const IconArrowRight = make(<path d="M4 12h15M13 6l6 6-6 6" />);

export const IconClock = make(
  <>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 7.2V12l3.2 2" />
  </>,
);

export const IconTag = make(
  <>
    <path d="M3.5 11.4V4.6a1.1 1.1 0 0 1 1.1-1.1h6.8a1 1 0 0 1 .75.32l8.1 8.1a1.1 1.1 0 0 1 0 1.55l-6.8 6.8a1.1 1.1 0 0 1-1.55 0l-8.1-8.1a1 1 0 0 1-.3-.77Z" />
    <circle cx="7.8" cy="7.8" r="1.4" />
  </>,
);

export const IconCard = make(
  <>
    <rect x="2.5" y="5" width="19" height="14" rx="2.6" />
    <path d="M2.5 9.6h19" />
  </>,
);

export const IconBuilding = make(
  <>
    <path d="M4 21V5.6A1.6 1.6 0 0 1 5.6 4h7.8A1.6 1.6 0 0 1 15 5.6V21" />
    <path d="M15 10.5h3.4A1.6 1.6 0 0 1 20 12.1V21M2.5 21h19" />
    <path d="M7.5 8h4M7.5 12h4M7.5 16h4" />
  </>,
);

export const IconSliders = make(
  <>
    <path d="M4 7h9M17.5 7H20M4 17h3M11.5 17H20" />
    <circle cx="15.2" cy="7" r="2.3" />
    <circle cx="9.2" cy="17" r="2.3" />
  </>,
);

export const IconList = make(
  <>
    <path d="M9 6h11M9 12h11M9 18h11" />
    <circle cx="4.6" cy="6" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="4.6" cy="12" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="4.6" cy="18" r="1.1" fill="currentColor" stroke="none" />
  </>,
);

export const IconDownload = make(
  <>
    <path d="M12 3.5v11M7.5 10.5 12 15l4.5-4.5" />
    <path d="M4 17.5v1.4A1.6 1.6 0 0 0 5.6 20.5h12.8A1.6 1.6 0 0 0 20 18.9v-1.4" />
  </>,
);

export const IconPlay = make(
  <>
    <circle cx="12" cy="12" r="8.8" />
    <path d="M10.2 8.8 15.4 12l-5.2 3.2V8.8Z" fill="currentColor" stroke="none" />
  </>,
);

export const IconMail = make(
  <>
    <rect x="2.5" y="4.8" width="19" height="14.4" rx="2.4" />
    <path d="m3.4 6.5 7.6 5.6a1.7 1.7 0 0 0 2 0l7.6-5.6" />
  </>,
);

export const IconPin = make(
  <>
    <path d="M12 21s7-5.6 7-11a7 7 0 0 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </>,
);

export const IconHeadset = make(
  <>
    <path d="M4 13.5a8 8 0 0 1 16 0" />
    <rect x="2.6" y="13" width="4.2" height="7" rx="1.8" />
    <rect x="17.2" y="13" width="4.2" height="7" rx="1.8" />
    <path d="M20 20v.6a2.4 2.4 0 0 1-2.4 2.4H14" />
  </>,
);

export const IconMegaphone = make(
  <>
    <path d="M3 10.6v2.8a1 1 0 0 0 1 1h2.2l5.6 4.2V5.4L6.2 9.6H4a1 1 0 0 0-1 1Z" />
    <path d="M15.4 8.4a5 5 0 0 1 0 7.2M18.4 5.6a9 9 0 0 1 0 12.8" />
  </>,
);

export const IconGrid = make(
  <>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.8" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.8" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.8" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.8" />
  </>,
);

export const IconRefresh = make(
  <>
    <path d="M20 11.5A8 8 0 0 0 6.3 6.3L4 8.5" />
    <path d="M4 4.5v4h4" />
    <path d="M4 12.5a8 8 0 0 0 13.7 5.2L20 15.5" />
    <path d="M20 19.5v-4h-4" />
  </>,
);

export const IconEye = make(
  <>
    <path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="3" />
  </>,
);

export const IconInfo = make(
  <>
    <circle cx="12" cy="12" r="8.8" />
    <path d="M12 11v5.4" />
    <circle cx="12" cy="7.9" r="1.05" fill="currentColor" stroke="none" />
  </>,
);

export const IconCalendar = make(
  <>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.4" />
    <path d="M3.5 9.8h17M8.2 2.8v4M15.8 2.8v4" />
  </>,
);

export const IconClose = make(<path d="M6 6l12 12M18 6 6 18" />);

export const IconChat = make(
  <path d="M4 5.6A1.6 1.6 0 0 1 5.6 4h12.8A1.6 1.6 0 0 1 20 5.6v8.8a1.6 1.6 0 0 1-1.6 1.6H9.4L5 19.6V5.6Z" />,
);

export const IconTarget = make(
  <>
    <circle cx="12" cy="12" r="8.6" />
    <circle cx="12" cy="12" r="4.4" />
    <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
  </>,
);

export const IconLayers = make(
  <>
    <path d="m12 3.2 8.4 4.2L12 11.6 3.6 7.4 12 3.2Z" />
    <path d="m3.6 12 8.4 4.2 8.4-4.2M3.6 16.6 12 20.8l8.4-4.2" />
  </>,
);
