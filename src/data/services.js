export const SERVICES = [
  {
    slug: 'dispatch',
    num: '01',
    title: 'Dispatch',
    card: {
      points: [
        'Load hunting and rate negotiation that protects your margin',
        'Route planning, check calls, and driver support on every shift',
        'Nights, weekends, and holidays covered — no dark hours',
        'Broker and shipper paperwork closed out same-day',
      ],
      foot: 'Your phone stops ringing at 3 a.m.',
    },
    page: {
      head: 'A dispatch desk that',
      headHl: 'never goes dark.',
      intro:
        'Your trucks don’t clock out at five. Neither do we. A dedicated coordinator learns your lanes, your drivers, and your rate floors — then runs the desk around the clock so nothing sits waiting on a callback.',
      chips: [
        'No forced dispatch',
        'You set the rate floor',
        'Escalations answered in minutes',
      ],
      includedTitle: "What's included",
      included: [
        'Load sourcing and rate negotiation across boards, brokers, and direct customers',
        'Trip planning built around hours, appointments, and fuel',
        'Check calls, tracking updates, and broker communication handled',
        'Detention, layover, and TONU claims filed the same day',
        'A live line for drivers — breakdowns, reroutes, dock disputes',
        'Nights, weekends, and holidays covered without surcharge drama',
      ],
      steps: [
        {
          t: 'Handoff',
          d: 'One call to map your lanes, equipment, and rate floors. You approve every load — we do the chasing.',
        },
        {
          t: 'Coverage',
          d: 'A named coordinator on your fleet, with a backup desk behind them. No voicemail, no dead air.',
        },
        {
          t: 'The loop',
          d: 'End-of-day recaps and a weekly margin report, so you always know what every unit earned.',
        },
      ],
    },
  },
  {
    slug: 'accounting',
    num: '02',
    title: 'Accounting',
    card: {
      points: [
        'Invoicing and settlements that go out on time, every time',
        'IFTA, HST, and fuel tax filings handled end to end',
        'Factoring paperwork and aging follow-ups off your plate',
        'A clean monthly P&L for every unit in the yard',
      ],
      foot: 'Know what every truck actually earns.',
    },
    page: {
      head: 'Books that close',
      headHl: 'themselves.',
      intro:
        'Revenue means nothing until it lands in the account. We run invoicing, settlements, and filings on a fixed cadence — so the money side of the fleet stops depending on your Sunday nights.',
      chips: [
        'Same-week invoicing',
        'No missed filing deadlines',
        'Paper trail on everything',
      ],
      includedTitle: "What's included",
      included: [
        'Invoicing with rate cons, BOLs, and PODs packaged right the first time',
        'Driver and owner-operator settlements out on schedule',
        'Factoring submissions and follow-ups handled end to end',
        'IFTA and fuel tax filings — every jurisdiction, every quarter',
        'HST returns and year-end packages your accountant will love',
        'Aging watched daily, slow payers chased politely but relentlessly',
      ],
      steps: [
        {
          t: 'Connect',
          d: 'We plug into your factoring company, TMS, and bank feeds. No new software for you to learn.',
        },
        {
          t: 'Cadence',
          d: 'Weekly settlements, same-week invoicing, monthly close. Fixed days, no surprises.',
        },
        {
          t: 'Clarity',
          d: 'A per-truck P&L every month that shows which units earn and which ones eat.',
        },
      ],
    },
  },
  {
    slug: 'safety-compliance',
    num: '03',
    title: 'Safety & Compliance',
    card: {
      points: [
        'Driver qualification files kept complete and audit-ready',
        'ELD and hours-of-service monitoring before violations happen',
        'CVOR / DOT audit prep and score management',
        'Drug & alcohol program administration, documented properly',
      ],
      foot: 'When the audit letter comes, you shrug.',
    },
    page: {
      head: 'Audit-ready as the',
      headHl: 'resting state.',
      intro:
        'Compliance isn’t a scramble you do when the letter arrives — it’s a file that was ready months before. We keep every driver, unit, and logbook inspection-proof, quietly, in the background.',
      chips: [
        'Mock audits included',
        'Violations caught before fines',
        'Every file, one binder',
      ],
      includedTitle: "What's included",
      included: [
        'Driver qualification files built, completed, and kept current',
        'ELD and hours-of-service monitoring with violation coaching',
        'CVOR / DOT profile management and score tracking',
        'Mock audits before the real ones find anything',
        'Drug & alcohol program administration — pools, tests, records',
        'Permits, renewals, and annual inspections tracked ahead of expiry',
      ],
      steps: [
        {
          t: 'Baseline',
          d: 'We audit your current files the way an inspector would, then fix what they would have found.',
        },
        {
          t: 'Watch',
          d: 'Logs, scores, and expiries monitored continuously. Problems get flagged as coaching, not fines.',
        },
        {
          t: 'The letter',
          d: 'When an audit or intervention comes, the binder is already built. You forward the email and get back to work.',
        },
      ],
    },
  },
]

export const serviceBySlug = (slug) => SERVICES.find((s) => s.slug === slug)
