/* =============================================================
   data.js — local data model (Phase 2)
   All application data lives here. No network calls.
   ============================================================= */

var AppData = (function () {

  /* ── Products ─────────────────────────────────────────────────
     Three products: WC1 (full workflow), OnDemand (data only), Verify (data + screening).
     Each has a capabilities object keyed by capability-domain id.
     ──────────────────────────────────────────────────────────── */
  var products = [

    /* ── World-Check One ─────────────────────────────────────── */
    {
      id: 'wc1',
      name: 'World-Check One',
      shortName: 'WC1',
      badge: 'Platform',
      deploymentType: 'api',
      tagline: 'Managed screening, case workflow and audit for teams that need governed compliance operations.',
      description:
        'World-Check One combines screening, case workflow and audit-ready remediation in one managed ' +
        'operating model. It supports customer and third-party screening, ongoing monitoring, analyst ' +
        'review and documented decisioning for firms that need control after a match is found.',
      integrationPattern: 'Online platform with WC1 API, batch screening, Salesforce integration and Zero Footprint screening options.',
      reviewWorkflow: 'Built-in case management, collaboration tools, workflow optimisation, status tracking, admin controls and date-stamped audit trail.',
      dataResidency: 'WC1 is hosted in the UK and Ireland and supports a global client base from that managed platform footprint.',
      typicalBuyers: [
        'Banks and fintechs that need screening plus governed review workflow',
        'Compliance teams that want one place for case handling, audit and operational oversight',
        'Firms with ongoing screening obligations and defined escalation paths',
        'Customers blending API-led submission with analyst-led review and final decisioning'
      ],
      differentiators: [
        'Combines screening, workflow, audit and ongoing screening in one managed environment',
        'Supports both API-led submission and analyst-led review operating models',
        'Built-in case handling reduces the need for separate compliance workflow tooling',
        'Includes both an admin portal and an end-user portal for managed operations'
      ],
      capabilities: {
        'overview': {
          summary: 'Managed screening and remediation platform for firms that need review workflow, audit trail and ongoing monitoring, not just a screening response.',
          keyPoints: [
            'Advanced matching with secondary identifiers',
            'Sanctions, PEP and adverse media screening in one platform',
            'Ongoing monitoring and rescreening included',
            'Case management, analyst collaboration and portal-based operations'
          ]
        },
        'data-quality': {
          summary: 'Relies on structured World-Check content plus secondary identifiers to improve precision and analyst confidence.',
          keyPoints: [
            'Uses structured, aggregated and de-duplicated World-Check data',
            'Secondary identifiers help sharpen match precision',
            'Supports customer and third-party screening contexts',
            'Data captured in screening feeds remediation and audit steps'
          ]
        },
        'screening-matching': {
          summary: 'Offers configurable screening with advanced matching for KYC, client screening and ongoing-screening operating models.',
          keyPoints: [
            'Advanced name-matching algorithms with secondary identifiers',
            'PEP and sanctions screening',
            'Adverse media checks with AI-powered relevance filtering',
            'Supports customer and third-party screening plus internal watchlists'
          ]
        },
        'workflow-review': {
          summary: 'Designed for teams that need built-in remediation, routing and collaboration rather than only a screening response.',
          keyPoints: [
            'Case management and collaboration tools are built in',
            'Workflow optimisation includes routing, risk tagging and status tracking',
            'Every action is logged and date-stamped for audit trail needs',
            'Admin and end-user portal experiences support managed operational workflows'
          ]
        },
        'post-processing': {
          summary: 'Supports remediation and risk-based decisioning with configurable settings and analyst workflow context.',
          keyPoints: [
            'Configurable screening and matching settings support risk-based automation',
            'Filtering technology helps prioritise relevant alerts',
            'Case records preserve rationale and remediation history',
            'Clearer insight into sanctions, PEP, reputational and financial crime risk'
          ]
        },
        'integration': {
          summary: 'Supports direct platform use, API-led integration and hybrid workflows where customer systems and compliance teams share the process.',
          keyPoints: [
            'WC1 API integration into onboarding systems and compliance workflows',
            'Batch screening and Zero Footprint WC1 API integration are available',
            'Salesforce integration supports connected onboarding and monitoring',
            'Admin portal is available for managed workflow, and end-user portal access is available in WC1'
          ]
        },
        'false-positive': {
          summary: 'Aims to reduce false positives through secondary matching, configurable settings and relevance filtering backed by analyst workflow.',
          keyPoints: [
            'Secondary identifiers reduce ambiguous name-only matches',
            'Configurable matching and filtering technology trims noise',
            'AI-powered relevance filtering supports adverse media review',
            'Date-stamped remediation history improves consistency over time'
          ]
        }
      }
    },

    /* ── World-Check OnDemand ─────────────────────────────────── */
    {
      id: 'wcod',
      name: 'World-Check OnDemand',
      shortName: 'OnDemand',
      badge: 'Data API',
      deploymentType: 'api',
      tagline: 'Structured World-Check data delivery for customers that already own screening and decisioning.',
      description:
        'World-Check On Demand provides structured, machine-readable World-Check data for customers that want ' +
        'to feed their own screening engine, filtering layer or partner platform. It is a data-delivery model, ' +
        'not a managed screening workflow.',
      integrationPattern: 'API-first architecture for direct integration into in-house, cloud-based or third-party screening platforms.',
      reviewWorkflow: 'No built-in screening workflow, case management, end-user portal or ongoing screening operations.',
      dataResidency: 'Data-delivery model that supports customer-controlled downstream hosting and processing after delivery into the client or partner screening stack.',
      typicalBuyers: [
        'Teams that primarily need access to World-Check data',
        'Organisations with their own screening engine or partner platform',
        'Teams that want fresher data inside automated controls without replacing their stack',
        'Customers that do not want a vendor-managed workflow layer'
      ],
      differentiators: [
        'Focused on data access rather than operational workflow',
        'Useful where the requirement is structured data delivery into customer-owned screening operations',
        'Designed for organisations that want to power their own matching, routing and decisioning stack',
        'Includes admin access patterns but no end-user portal or managed case workflow'
      ],
      capabilities: {
        'overview': {
          summary: 'Data-delivery layer for organisations that want current World-Check intelligence inside their own platforms and workflows.',
          keyPoints: [
            'API-first solution for real-time risk intelligence access',
            'Structured, enriched, machine-readable data delivery',
            'Designed for faster onboarding, KYC and payment-control use cases',
            'Supports delta-style retrieval patterns when records change'
          ]
        },
        'data-quality': {
          summary: 'Emphasises structured, provenance-rich data that can be absorbed into customer or third-party workflows.',
          keyPoints: [
            'Single, consistent data model across sanctions, PEPs and adverse media',
            'Detailed classifications, granular fields and provenance tagging',
            'Structured, aggregated and de-duplicated World-Check data',
            'Tailorable data model aligned to customer risk appetite'
          ]
        },
        'screening-matching': {
          summary: 'Supports smarter screening indirectly by supplying richer data, filtering context and change visibility into customer-owned engines.',
          keyPoints: [
            'Built to supply current risk data into customer-owned screening and payment-control stacks',
            'Deep filtering and enhanced categorisation reduce screening noise',
            'Structured risk taxonomy sharpens focus on true risk indicators',
            'Transparent record change summaries highlight what changed'
          ]
        },
        'workflow-review': {
          summary: 'No built-in case management, audit workflow, end-user portal or review queues.',
          keyPoints: [
            'No native review queues',
            'No case disposition workflow',
            'No collaboration tooling for remediation',
            'Customer or partner must provide matching, decisioning, alert handling and workflow'
          ]
        },
        'post-processing': {
          summary: 'Best used where customer platforms will apply their own routing, sync and decision logic on top of the delivered data.',
          keyPoints: [
            'Metadata and provenance support downstream decision making',
            'Change summaries help keep internal systems in sync',
            'Data can be filtered to match compliance framework needs',
            'Operational decisioning remains in customer-controlled workflows'
          ]
        },
        'integration': {
          summary: 'API-first architecture is designed to slot into evolving compliance stacks and modern payment workflows.',
          keyPoints: [
            'Easily absorbed into in-house, cloud-based or third-party platforms',
            'Supports digital onboarding and customer-owned payment-control environments',
            'Admin portal access supports setup and administration',
            'Built to scale as regulations and risk landscapes change'
          ]
        },
        'false-positive': {
          summary: 'Reduces false positives mainly by improving the quality, structure and filterability of the data sent into screening workflows.',
          keyPoints: [
            'Deep filtering and categorisation reduce overscreening',
            'Granular fields and provenance sharpen matching context',
            'Tailored data outputs help focus only on relevant content',
            'Supports automated workflows that accelerate remediation'
          ]
        }
      }
    },

    /* ── World-Check Verify ──────────────────────────────────── */
    {
      id: 'verify',
      name: 'World-Check Verify',
      shortName: 'Verify',
      badge: 'Screening API',
      deploymentType: 'api',
      tagline: 'Cloud-native, stateless screening API for embedded KYC and customer-defined decision points.',
      description:
        'World-Check Verify is a cloud-native, stateless screening API designed for embedded use in onboarding ' +
        'and other customer-defined screening checkpoints. It delivers a fast screening response against trusted ' +
        'World-Check data and can also support client watchlist screening in the same embedded pattern.',
      integrationPattern: 'Cloud-native API for frictionless embedding into onboarding, KYC, KYX and customer screening workflows.',
      reviewWorkflow: 'Customer-managed follow-up, with configurable screening parameters and routing into customer-owned review workflow where needed.',
      dataResidency: 'Cloud-native AWS architecture with in-region hosting support in key EU and APAC markets for data sovereignty requirements.',
      typicalBuyers: [
        'Teams that need embedded screening without adopting a full workflow platform',
        'Customers combining World-Check screening with their own internal or client watchlists',
        'Digital onboarding teams that care about customer friction and response speed',
        'Organisations that will manage case handling in their own environment'
      ],
      differentiators: [
        'Pairs trusted World-Check data with fast embedded screening in a lighter operational model',
        'Supports World-Check plus client-watchlist screening in one embedded API pattern',
        'Simpler fit where case management and audit workflow are not required',
        'Supports embedded screening experiences for digital channels',
        'Includes admin access but no end-user portal or managed case workflow'
      ],
      capabilities: {
        'overview': {
          summary: 'Low-latency embedded screening API built for digital onboarding and other moments where the customer journey needs a fast risk decision.',
          keyPoints: [
            'Next-generation cloud-native screening API',
            'Embedded low-latency checks within onboarding and transaction-adjacent customer screening flows',
            'Useful at customer lifecycle checkpoints such as onboarding, account changes, beneficiary setup or payout release',
            'Stateless architecture designed for privacy-sensitive use cases',
            'High availability for digital platforms and neobanks'
          ]
        },
        'data-quality': {
          summary: 'Uses structured World-Check data and configurable matching inputs to improve precision in embedded screening scenarios.',
          keyPoints: [
            'Screens against structured, aggregated and de-duplicated World-Check data',
            'Supports secondary identifiers to refine name matching',
            'Coverage includes sanctions, PEPs, RCAs, adverse media, SOEs and SIEs',
            'Supports screening against World-Check data and client watchlists'
          ]
        },
        'screening-matching': {
          summary: 'Focused on fast, configurable screening where customer systems need a rapid response at key decision points.',
          keyPoints: [
            'Advanced multi-layered name-matching algorithms',
            'Configurable screening parameters and policy alignment options',
            'Flexible auto-resolution capabilities',
            'Core use cases include onboarding, KYC and transaction-triggered party screening workflows'
          ]
        },
        'workflow-review': {
          summary: 'Optimised for screening at the point of interaction rather than for built-in remediation case management.',
          keyPoints: [
            'No persistent customer data store in the product',
            'No built-in case management, audit workflow or ongoing screening layer',
            'Admin portal access supports configuration and administration',
            'Results can be routed into customer-managed review flows',
            'Can sit alongside broader workflow tooling when governed remediation is needed'
          ]
        },
        'post-processing': {
          summary: 'Designed to feed customer systems with fast screening outcomes that support automated routing and transaction-decision checkpoints.',
          keyPoints: [
            'Supports consistent screening across onboarding, account changes and transaction-triggered checkpoints',
            'Results can drive customer-side triage and escalation logic',
            'Low-latency responses reduce friction in customer journeys',
            'Decisioning policies remain configurable and customer-aligned'
          ]
        },
        'integration': {
          summary: 'Built for seamless integration, global scale and strong privacy posture in modern cloud environments.',
          keyPoints: [
            'Cloud-native AWS infrastructure engineered for global high availability',
            'Instant scalability and resilience under demand spikes',
            'In-region hosting supports sovereignty and privacy requirements',
            'Admin access supports setup and policy administration, while end-user portal access is not part of the model'
          ]
        },
        'false-positive': {
          summary: 'Positions false-positive reduction around advanced matching, configurability and rapid screening at the point where customer systems need a decision.',
          keyPoints: [
            'Advanced technology helps manage regional name-matching challenges',
            'Secondary identifiers improve confidence in relevant matches',
            'Configurable screening parameters reduce manual review noise',
            'Fewer false positives support shorter resolution times at onboarding and transaction decision points'
          ]
        }
      }
    },

    /* ── Custom App ──────────────────────────────────────────────── */
    {
      id: 'custom-app',
      name: 'Custom App',
      shortName: 'Custom App',
      badge: 'Client App',
      deploymentType: 'client',
      tagline: 'Client-side application built and operated by the customer.',
      description:
        'Represents the customer\'s own client-side application — a web app, mobile app or ' +
        'portal that drives the user journey, collects data and orchestrates calls to LSEG APIs.',
      integrationPattern: 'Customer-built front end or workflow layer that integrates LSEG screening APIs.',
      reviewWorkflow: 'Owned entirely by the customer — decisioning logic, UX and workflow routing are defined by the client application.',
      dataResidency: 'Data handling is the responsibility of the customer application and its hosting environment.',
      typicalBuyers: [],
      differentiators: [],
      capabilities: {}
    },

    /* ── Filter Partner ───────────────────────────────────────── */
    {
      id: 'filter-partner',
      name: 'Filter Partner',
      shortName: 'Filter Partner',
      badge: 'Partner Layer',
      deploymentType: 'client',
      tagline: 'Third-party screening or filtering layer operated outside the LSEG product stack.',
      description:
        'Represents a customer-selected partner layer that consumes World-Check data and applies ' +
        'partner-owned filtering, matching or orchestration before results return to the bank\'s own systems.',
      integrationPattern: 'Partner-managed screening, filtering or orchestration layer connected to customer-owned applications and LSEG data feeds.',
      reviewWorkflow: 'Workflow, filtering logic and operational handling are defined by the partner and the customer operating model.',
      dataResidency: 'Hosting and data handling depend on the partner environment and customer controls.',
      typicalBuyers: [],
      differentiators: [],
      capabilities: {}
    }
  ];

  /* ── Scenarios ────────────────────────────────────────────────
     Three blueprint demo scenarios plus the travel marketplace.
     Each has full rationale, key questions, talk points and
     objections for the Phase 3 recommendation and talk track panels.
     ──────────────────────────────────────────────────────────── */
  var scenarios = [

    /* ── 1. KYC onboarding ───────────────────────────────────── */
    {
      id: 'kyc-onboarding',
      title: 'EU PSP',
      subtitle: 'Payments — KYC and Instant Payments',
      industry: 'Payments / PSP',
      description:
        'An EU payments service provider needs digital KYC onboarding and must ' +
        'meet instant-payment obligations while keeping KYC, restrictive-measures controls and payment operations aligned. ' +
        'Speed, screening freshness, verification of payee and auditability all matter.',
      constraints: {
        volume: 'high',
        reviewModel: 'automated-first',
        integrationPreference: 'api',
        regulatoryContext: 'AML / KYC',
        dataResidencyRequirement: false
      },
      recommendedProducts: ['custom-app', 'wcod', 'verify', 'wc1'],
      primaryProduct: 'wc1',
      rationale:
        'Verify supports low-latency KYC screening inside the onboarding journey where the PSP wants a fast answer at the point of submission. ' +
        'OnDemand supplies current World-Check data into the PSP\'s own screening stack when the client already owns matching and payment controls. WC1 fits ' +
        'when the PSP also needs governed review, audit and ongoing-screening workflow after a hit is found.',
      keyQuestions: [
        'How quickly do you need to refresh PSU checks after new or amended restrictive measures enter into force?',
        'Do you run your own screening engine, or rely fully on a vendor workflow today?',
        'What is your target onboarding time for a standard low-risk retail customer?',
        'How are payer, payee and beneficiary checks handled before payment execution?',
        'How are restrictive-measures checks, verification of payee and payment-decision ownership split operationally today?'
      ],
      talkPoints: [
        'Verify helps reduce onboarding friction by returning a fast screening response inside the digital journey.',
        'OnDemand is relevant when you want current World-Check data feeding your own screening stack rather than a managed vendor workflow.',
        'For EU instant payments, the regulatory conversation is not just transaction speed but also restrictive-measures controls and verification of payee.',
        'WC1 gives operations teams an audit-ready place to manage KYC and ongoing-screening cases when alerts need human ownership.'
      ],
      objections: [
        {
          objection: 'Our current sanctions screening is already good enough.',
          response: 'The pressure point is often not basic coverage but how quickly you can reflect updated restrictive measures across your own screening stack, and how confidently you can operate instant payments and verification of payee together.'
        },
        {
          objection: 'We don\'t want another case management platform.',
          response: 'That is fine if your own workflow is strong. The fit depends on whether you only need screening responses or also need governed review, audit trail and escalation management.'
        }
      ],
      solutionExampleRef: 'eu-psp-instant-payments',
      tags: ['api', 'payments', 'instant-payments', 'kyc']
    },

    /* ── 2. Ongoing screening with webhooks ──────────────────── */
    {
      id: 'ongoing-screening',
      title: 'Social Media Marketplace',
      subtitle: 'Marketplace — KYC, OGS and Transaction Screening',
      industry: 'Social / Marketplace',
      description:
        'A social platform with marketplace buyers and sellers needs onboarding checks, ' +
        'ongoing screening, and transaction controls for money-in and money-out events ' +
        'without breaking the user experience.',
      constraints: {
        volume: 'high',
        reviewModel: 'event-driven',
        integrationPreference: 'api',
        regulatoryContext: 'AML / Sanctions',
        dataResidencyRequirement: false
      },
      recommendedProducts: ['custom-app', 'verify', 'wc1'],
      primaryProduct: 'wc1',
      rationale:
        'Verify fits the embedded screening moments in onboarding and transaction flows where the marketplace wants a fast yes-or-escalate answer. ' +
        'WC1 fits the operational layer for ongoing screening, alert handling, review and audit ' +
        'when buyers or sellers need to be restricted, monitored or offboarded.',
      keyQuestions: [
        'Do you need to screen buyers, sellers, or both?',
        'Which moments matter most: onboarding, wallet funding, payout, or all three?',
        'How quickly do trust-and-safety or payments teams need to act on new sanctions or adverse media hits?',
        'Do you already have separate tooling for transaction controls and account restrictions?',
        'What happens operationally when a seller is flagged after funds are already on platform?'
      ],
      talkPoints: [
        'You can screen quietly inside the user journey without adding visible compliance friction.',
        'WC1 ongoing screening means you are not relying only on the onboarding decision; you can react when a seller or buyer profile changes later, including adverse media developments.',
        'The operational question is what to do with money-in, money-out and account status once a sanctions, PEP or adverse media alert appears.'
      ],
      objections: [
        {
          objection: 'We are not a bank, so this feels excessive.',
          response: 'The issue is not just regulatory status. Marketplace exposure includes reputational risk, prohibited users, payment abuse and the operational challenge of handling funds already in motion.'
        },
        {
          objection: 'We only need onboarding checks, not ongoing screening.',
          response: 'That leaves a gap once users are live on platform. The harder operational problem often starts after onboarding, when a seller receives funds and later becomes higher risk.'
        }
      ],
      solutionExampleRef: 'social-marketplace-kyc-ogs-transactions',
      tags: ['api', 'marketplace', 'ogs', 'transaction-screening']
    },

    /* ── 3. Hybrid legal firm ─────────────────────────────────── */
    {
      id: 'legal-firm-hybrid',
      title: 'Real Estate',
      subtitle: 'Property — Buyer, Seller and Third-Party Screening',
      industry: 'Real Estate / Property',
      description:
        'A property firm handling higher-value transactions needs to screen buyers, sellers, beneficial owners ' +
        'and relevant intermediaries during client intake, offer progression, funds handling and completion, with embedded API screening at the point of submission. ' +
        'The core challenge is documenting ownership, escalating higher-risk parties and preserving a clear audit trail.',
      constraints: {
        volume: 'medium',
        reviewModel: 'analyst-review',
        integrationPreference: 'hybrid',
        regulatoryContext: 'AML / Sanctions / EDD',
        dataResidencyRequirement: true
      },
      recommendedProducts: ['custom-app', 'wc1', 'verify'],
      primaryProduct: 'wc1',
      rationale:
        'WC1 is the natural centre of gravity when a property firm needs governed screening, review workflow, ' +
        'audit trail and documented escalation around higher-value transactions. Verify complements that by handling embedded API-led ' +
        'upfront screening against World-Check and client watchlists without pushing the firm toward a raw-data ' +
        'operating model that is usually unnecessary at this volume. The wider compliance need is often not only name screening, ' +
        'but also documenting beneficial ownership, identifying higher-risk intermediaries and knowing when enhanced due diligence is required.',
      keyQuestions: [
        'Which parties need screening: buyer, seller, beneficial owner, broker, introducer, legal representative, or all of them?',
        'At which stages do you need controls: client intake, offer acceptance, funds receipt, exchange, or completion?',
        'How do you identify and document beneficial ownership, including layered entities or trusts?',
        'How often do higher-risk matters require enhanced due diligence, adverse media review or external research?',
        'Who owns the compliance decision when a party is flagged close to exchange or completion?',
        'Do you need source of funds or source of wealth checks alongside screening for higher-risk deals?'
      ],
      talkPoints: [
        'Verify can handle lightweight embedded API screening at intake, while WC1 manages governed review, escalation and audit.',
        'The key value is not only screening coverage but operational control when a property transaction is time-sensitive and high value.',
        'In property matters, beneficial ownership, intermediaries and source-of-funds context often matter as much as the initial name-screening result.',
        'For most property firms, WC1 plus Verify is a more realistic fit than building around raw data delivery.'
      ],
      objections: [
        {
          objection: 'We are not large enough to build a full compliance stack.',
          response: 'That is exactly why WC1 plus Verify is often the more practical fit. It gives you embedded screening, governed workflow and audit without expecting you to build matching and case handling around raw data.'
        },
        {
          objection: 'We only do a small number of complex deals.',
          response: 'That can strengthen the case for a workflow-led model. When each deal is material, documented review, beneficial-ownership clarity and clear escalation often matter more than pure screening volume.'
        }
      ],
      solutionExampleRef: 'real-estate-screening',
      tags: ['hybrid', 'property', 'audit', 'screening', 'api']
    },

    {
      id: 'tier1-bank-owned-stack',
      title: 'Tier 1 Bank',
      subtitle: 'Banking - Customer-Owned KYC and Payment Screening Stack',
      industry: 'Banking / Tier 1',
      description:
        'A Tier 1 bank already has custom KYC and payment-screening infrastructure, plus a filtering partner. ' +
        'The opportunity is not to replace that operating model, but to supply current World-Check data into it so the bank ' +
        'can improve screening quality, filtering precision and payment-control responsiveness without a workflow rip-and-replace.',
      constraints: {
        volume: 'high',
        reviewModel: 'customer-owned',
        integrationPreference: 'api',
        regulatoryContext: 'AML / Sanctions / Payments',
        dataResidencyRequirement: true
      },
      recommendedProducts: ['custom-app', 'filter-partner', 'wcod'],
      primaryProduct: 'wcod',
      rationale:
        'OnDemand is the natural fit when the bank already owns matching, filtering, payment controls, alert handling and case workflow. ' +
        'The client value is better data into an existing operating model: current World-Check content, structured attributes, provenance and filtering support that help the bank and its partner layer reduce noise without replacing core screening infrastructure. ' +
        'In this pattern, ongoing monitoring remains in the bank’s own engine or partner workflow unless the client chooses to add WC1.',
      keyQuestions: [
        'Which parts of the screening stack do you already own internally: matching, filtering, alert handling, case workflow, or all of them?',
        'Where does your filtering partner sit today: pre-screening enrichment, match suppression, routing, or all three?',
        'Is the bigger pain point data freshness, false positives, partner orchestration, or auditability across multiple internal systems?',
        'Do KYC and payment screening use the same data supply and filtering layer, or separate stacks?',
        'What would make the biggest commercial difference: less noise for analysts, better payment-control responsiveness, or easier integration into the bank\'s own architecture?'
      ],
      talkPoints: [
        'This is not a workflow replacement conversation; it is a data-and-operating-model fit conversation.',
        'OnDemand lets the bank keep its own engine, filtering partner and review workflow while improving the quality and freshness of the World-Check data feeding that stack.',
        'Ongoing monitoring can still exist in this model, but it remains customer-owned or partner-owned unless the bank chooses to add WC1.',
        'For large banks, the value is often better filtering precision, fewer avoidable false positives and faster use of updated content across KYC and payments.',
        'If the client already has a mature internal stack, data delivery is often more realistic than asking them to move into a vendor-managed workflow.'
      ],
      objections: [
        {
          objection: 'We already have a screening engine and filtering partner.',
          response: 'That can strengthen the OnDemand conversation. The opportunity is to improve the data feeding that stack, not to replace the parts the bank already considers strategic.'
        },
        {
          objection: 'We do not want another compliance platform.',
          response: 'That is exactly why OnDemand can fit. It lets the bank keep workflow, matching and decisioning where they are, while improving the quality and freshness of the World-Check content used by those systems.'
        }
      ],
      solutionExampleRef: 'tier1-bank-wcod-kyc-payments',
      tags: ['api', 'banking', 'payments', 'owned-stack']
    },

    /* ── 4. Global travel marketplace ────────────────────────── */
    {
      id: 'global-marketplace',
      title: 'Global Travel Marketplace',
      subtitle: 'Travel / Marketplace — Host & Partner Onboarding',
      industry: 'Travel / Marketplace',
      description:
        'A marketplace operator onboards hosts and partners across jurisdictions. ' +
        'Screening spans onboarding and transaction-related risk events. ' +
        'A blend of automation and selective manual review is required.',
      constraints: {
        volume: 'high',
        reviewModel: 'automated-first',
        integrationPreference: 'api',
        regulatoryContext: 'Sanctions / Enhanced Due Diligence',
        dataResidencyRequirement: false
      },
      recommendedProducts: ['custom-app', 'wc1', 'verify'],
      primaryProduct: 'wc1',
      rationale:
        'Verify supports embedded screening directly in the onboarding journey. ' +
        'WC1 adds workflow and ongoing screening where the marketplace needs governed escalation, ' +
        'auditability or follow-up handling across host and partner populations.',
      keyQuestions: [
        'Are you screening hosts, property managers, partners, or all of them?',
        'Is there an ongoing-screening or post-onboarding review requirement?',
        'What is the regulatory driver — sanctions compliance, platform safety, or both?',
        'Do you need to screen at host onboarding, listing creation, booking, or payout events?'
      ],
      talkPoints: [
        'Verify and WC1 can support screening inside onboarding and partner-management flows without creating visible compliance friction for hosts.',
        'WC1 ongoing screening means the marketplace can be alerted if a listed host or partner becomes higher risk after onboarding.',
        'Rich match attributes support customer-defined auto-clear and escalation rules, reducing unnecessary analyst effort.'
      ],
      objections: [
        {
          objection: 'Our legal team says we are not a regulated entity.',
          response: 'Many marketplaces screen for platform integrity and reputational risk, not only regulatory compliance. The business risk from hosting a sanctioned individual is real regardless of regulatory status.'
        },
        {
          objection: 'We only need onboarding checks for hosts.',
          response: 'That may be enough for some marketplaces, but the discovery question is what happens when a host or partner becomes higher risk after onboarding. That is where ongoing screening and governed follow-up can matter.'
        }
      ],
      solutionExampleRef: 'social-marketplace-kyc-ogs-transactions',
      tags: ['api', 'marketplace', 'sanctions', 'screening']
    }
  ];

  /* ── Capability domains ───────────────────────────────────────
     Used as tabs in Phase 5 Capability Explorer.
     ──────────────────────────────────────────────────────────── */
  var capabilityDomains = [
    {
      id: 'overview',
      label: 'Overview',
      description: 'What the product is and what problem it solves.'
    },
    {
      id: 'data-quality',
      label: 'Data & Input Quality',
      description: 'How input data quality affects screening results and what controls exist.'
    },
    {
      id: 'screening-matching',
      label: 'Screening & Matching',
      description: 'How the product screens, how it matches, and what controls are available.'
    },
    {
      id: 'workflow-review',
      label: 'Workflow & Review',
      description: 'How results are reviewed, dispositioned and escalated.'
    },
    {
      id: 'post-processing',
      label: 'Post-Processing & Decisioning',
      description: 'What happens after a result is returned — attributes, routing, suppression.'
    },
    {
      id: 'integration',
      label: 'Integration & Deployment',
      description: 'How the product is deployed and integrated into customer systems.'
    },
    {
      id: 'false-positive',
      label: 'False Positive Reduction',
      description: 'Specific controls this product offers to reduce false positive volume.'
    }
  ];

  /* ── Solution examples ────────────────────────────────────────
     Three mandatory blueprint examples.
     lanes: swim-lane actors for Phase 4 diagram rendering.
     steps: ordered events. type values:
       'user-action'   — human initiates something
       'process'       — system-side processing step
       'api-request'   — outbound API call (shows arrow)
       'api-response'  — inbound API response (shows return arrow)
       'webhook'       — asynchronous webhook event
       'decision'      — branch point
       'outcome'       — terminal state
     ──────────────────────────────────────────────────────────── */
  var solutionExamples = [

    /* ── 1. KYC onboarding with Verify + WC1 ─────────────────── */
    {
      id: 'social-marketplace-kyc-ogs-transactions',
      title: 'Social Media Marketplace',
      subtitle: 'Buyer and seller onboarding, money-in and money-out controls with escalation workflow',
      scenarioRef: 'global-marketplace',
      interactionType: 'mixed',
      lsegProducts: ['custom-app', 'verify', 'wc1'],
      description:
        'A social media platform runs a marketplace with buyers and sellers, card top-ups, ' +
        'wallet balances and payouts. World-Check Verify supports embedded screening during ' +
        'onboarding and transaction moments, while World-Check One manages ongoing screening, ' +
        'alerts, analyst review and audit-ready case handling.',
      phases: [
        { id: 1, title: 'Register',              desc: 'Buyer or seller submits onboarding details to the marketplace platform.',                              products: ['custom-app'] },
        { id: 2, title: 'KYC Screening',         desc: 'KYC screening at onboarding can be handled by Verify for low-latency embedded flows or by WC1 where governed review and workflow are needed.', products: ['custom-app', 'verify', 'wc1'] },
        { id: 3, title: 'Auto-clear or Escalate', desc: 'Low-risk profiles cleared instantly. Matches routed to analyst review queue.',                       products: ['custom-app', 'verify', 'wc1'] },
        { id: 4, title: 'Transaction Screening', desc: 'Screen payment counterparty before wallet top-up or payout is executed.',                             products: ['custom-app', 'verify'] },
        { id: 5, title: 'Ongoing Monitoring',    desc: 'World-Check record changes trigger alerts for enrolled buyers and sellers.',                           products: ['custom-app', 'wc1'] },
        { id: 6, title: 'Review & Action',       desc: 'Analyst records decision; account or wallet controls updated with full audit trail.',                  products: ['custom-app', 'wc1'] }
      ],
      lanes: [
        { id: 'user',            label: 'Buyer / Seller',                 type: 'actor' },
        { id: 'platform',        label: 'Marketplace Platform',           type: 'customer-system' },
        { id: 'verify',          label: 'World-Check Verify',             type: 'lseg-product' },
        { id: 'wc1',             label: 'World-Check One',                type: 'lseg-product' },
        { id: 'analyst',         label: 'Risk / Compliance Analyst',      type: 'actor' },
        { id: 'ops',             label: 'Payments / Trust Operations',    type: 'downstream' }
      ],
      steps: [
        { id: 1,  lane: 'user',     label: 'Seller or buyer registers and submits onboarding details', type: 'user-action' },
        { id: 2,  lane: 'platform', label: 'Platform validates and structures profile, geography and payment details', type: 'process' },
        { id: 3,  lane: 'platform', label: 'POST /verify-screening — initial KYC screening request', type: 'api-request', to: 'verify' },
        { id: 4,  lane: 'verify',   label: 'Embedded screening against World-Check data with low-latency response', type: 'process' },
        { id: 5,  lane: 'platform', label: '200 OK — scored results, attributes and provenance returned', type: 'api-response', from: 'verify' },
        { id: 6,  lane: 'platform', label: 'Auto-clear low-risk profiles and create WC1 cases for review-required matches', type: 'process' },
        { id: 7,  lane: 'platform', label: 'POST /cases — send escalated onboarding match to WC1 API', type: 'api-request', to: 'wc1', condition: 'match' },
        { id: 8,  lane: 'wc1',      label: 'Create case, route to analyst queue and enrol approved buyer or seller for ongoing screening', type: 'process' },
        { id: 9,  lane: 'user',     label: 'User funds wallet or initiates payout / withdrawal', type: 'user-action' },
        { id: 10, lane: 'platform', label: 'Run transaction screening before money-in or money-out is executed', type: 'process' },
        { id: 11, lane: 'platform', label: 'POST /verify-screening — transaction-party screening request', type: 'api-request', to: 'verify' },
        { id: 12, lane: 'verify',   label: 'Return low-latency screening outcome for payment release or hold decision', type: 'api-response', from: 'verify' },
        { id: 13, lane: 'ops',      label: 'Transaction released, held or referred based on screening policy', type: 'outcome' },
        { id: 14, lane: 'wc1',      label: 'World-Check record changes trigger ongoing screening alert for enrolled buyer or seller', type: 'process', note: 'Can occur after onboarding' },
        { id: 15, lane: 'wc1',      label: 'POST webhook event — alert sent to marketplace platform', type: 'webhook', to: 'platform' },
        { id: 16, lane: 'platform', label: 'Create or update trust-and-safety / payments case based on alert severity', type: 'process' },
        { id: 17, lane: 'analyst',  label: 'Analyst reviews alert in WC1, records rationale and decides restrict, allow or offboard', type: 'user-action' },
        { id: 18, lane: 'ops',      label: 'Account or wallet controls updated — payout blocked, monitored or released', type: 'outcome' }
      ]
    },

    /* ── 2. Ongoing screening with webhooks ──────────────────── */
    {
      id: 'eu-psp-instant-payments',
      title: 'EU PSP',
      subtitle: 'Customer onboarding plus immediate restrictive-measures refresh after list updates for instant payments',
      scenarioRef: 'ongoing-screening',
      interactionType: 'mixed',
      lsegProducts: ['custom-app', 'wcod', 'verify', 'wc1'],
      description:
        'A midsized EU payments service provider needs fast onboarding and must refresh restrictive-measures controls immediately after list updates while keeping instant payments moving. ' +
        'World-Check OnDemand supplies real-time data updates into the PSP\'s own screening stack, ' +
        'World-Check Verify supports low-latency KYC screening against World-Check and internal watchlists, and World-Check One supports KYC and ongoing-screening workflow where governed review is needed.',
      phases: [
        { id: 1, title: 'Account Opening',       desc: 'Customer submits KYC and beneficiary data to the PSP.',                                               products: ['custom-app'] },
        { id: 2, title: 'KYC Screening - SaaS / Screening API', desc: 'If the PSP prefers a managed screening path, KYC screening can be handled by Verify for low-latency onboarding or by WC1 where governed review and workflow are needed from the start.', products: ['custom-app', 'verify', 'wc1'] },
        { id: 3, title: 'KYC Screening - Customer Engine',      desc: 'If the PSP prefers to use its own screening engine, OnDemand can supply refreshed World-Check data into that customer-owned KYC screening stack.', products: ['custom-app', 'wcod'] },
        { id: 4, title: 'Payment Controls',      desc: 'The PSP can use Verify for low-latency party-screening checkpoints or OnDemand to power its own payment controls, while restrictive-measures PSU checks are refreshed separately after list updates.', products: ['custom-app', 'verify', 'wcod'] },
        { id: 5, title: 'Governed Review',       desc: 'Higher-risk customers routed to an audit-ready case workflow with queue and remediation path.',        products: ['custom-app', 'wc1'] },
        { id: 6, title: 'Outcome & Monitoring',  desc: 'Case closed with audit trail; enrolled customers continue to be monitored for list changes.',          products: ['custom-app', 'wc1'] }
      ],
      lanes: [
        { id: 'payer',         label: 'PSP Customer / Payer',          type: 'actor' },
        { id: 'psp',           label: 'PSP Core Platform',             type: 'customer-system' },
        { id: 'ondemand',      label: 'World-Check OnDemand',          type: 'lseg-product' },
        { id: 'screening',     label: 'PSP Screening Engine',          type: 'customer-system' },
        { id: 'verify',        label: 'World-Check Verify',            type: 'lseg-product' },
        { id: 'wc1',           label: 'World-Check One',               type: 'lseg-product' },
        { id: 'ops',           label: 'Payments Ops / Compliance',     type: 'actor' }
      ],
      steps: [
        { id: 1,  lane: 'payer',    label: 'Customer opens account or initiates beneficiary setup', type: 'user-action' },
        { id: 2,  lane: 'psp',      label: 'PSP collects structured KYC and beneficiary data', type: 'process' },
        { id: 3,  lane: 'psp',      label: 'POST /verify-screening — onboarding KYC screening request', type: 'api-request', to: 'verify' },
        { id: 4,  lane: 'verify',   label: 'Low-latency screening response against World-Check and internal watchlists supports fast onboarding decision', type: 'api-response', from: 'verify' },
        { id: 5,  lane: 'ondemand', label: 'World-Check data updated — new or amended sanctions record becomes available immediately', type: 'process', note: 'Data feed only — not the PSP screening engine' },
        { id: 6,  lane: 'ondemand', label: 'Deliver refreshed structured data into the PSP screening engine', type: 'api-response', from: 'screening' },
        { id: 7,  lane: 'screening', label: 'PSP-owned screening engine refreshes PSU checks and matching state immediately after the restrictive-measures update', type: 'process' },
        { id: 8,  lane: 'payer',    label: 'Customer submits instant payment', type: 'user-action' },
        { id: 9,  lane: 'psp',      label: 'Payment engine applies verification-of-payee and PSP-owned payment controls at execution time', type: 'process' },
        { id: 10, lane: 'screening', label: 'PSP-owned decisioning layer uses latest OnDemand-fed data and internal workflow rules where additional controls are required', type: 'process' },
        { id: 11, lane: 'ops',      label: 'Instant payment completed, held or blocked under PSP-owned controls', type: 'outcome' },
        { id: 12, lane: 'psp',      label: 'POST /cases — submit higher-risk customer record to WC1 API for KYC or ongoing-screening review', type: 'api-request', to: 'wc1', condition: 'review-required' },
        { id: 13, lane: 'wc1',      label: 'Create audit-ready KYC / OGS case with queue and remediation path', type: 'process', condition: 'review-required' },
        { id: 14, lane: 'wc1',      label: 'Customer remains enrolled for ongoing screening and alert management', type: 'process' },
        { id: 15, lane: 'ops',      label: 'Operations analyst reviews KYC or OGS case and records remediation outcome', type: 'user-action' },
        { id: 16, lane: 'ops',      label: 'Customer decision and audit trail captured in governed workflow', type: 'outcome' }
      ]
    },

    /* ── 3. Hybrid legal firm workflow ───────────────────────── */
    {
      id: 'real-estate-screening',
      title: 'Real Estate — Buyer, Seller and Third-Party Screening',
      subtitle: 'High-value property transactions with audit, escalation and ongoing monitoring',
      scenarioRef: 'legal-firm-hybrid',
      interactionType: 'mixed',
      lsegProducts: ['custom-app', 'wc1', 'verify'],
      description:
        'A real-estate business screens buyers, sellers, beneficial owners and key intermediaries ' +
        'during client intake, offer acceptance and funds movement. World-Check Verify as a screening API supports embedded upfront screening ' +
        'against World-Check and internal watchlists, while World-Check One provides the governed review, audit trail and ongoing monitoring layer.',
      phases: [
        { id: 1, title: 'Party Capture',         desc: 'Agent opens deal and captures buyer, seller and all intermediary details.',                            products: ['custom-app'] },
        { id: 2, title: 'Embedded Screening',    desc: 'Upfront API check against World-Check and internal watchlists at point of submission.',               products: ['custom-app', 'verify'] },
        { id: 3, title: 'Escalation',            desc: 'Straightforward parties cleared; higher-risk records escalated to governed review.',                  products: ['custom-app', 'verify', 'wc1'] },
        { id: 4, title: 'Analyst Review',        desc: 'Disposition recorded — clear, enhanced due diligence, hold or decline — with full audit trail.',      products: ['custom-app', 'wc1'] },
        { id: 5, title: 'Ongoing Monitoring',    desc: 'Approved parties enrolled for monitoring until deal completion and post-close window.',                products: ['custom-app', 'wc1'] },
        { id: 6, title: 'Deal Outcome',          desc: 'Audit-ready transaction record with complete chain of screening decisions.',                           products: ['custom-app', 'wc1'] }
      ],
      lanes: [
        { id: 'agent',         label: 'Agent / Case Manager',               type: 'actor' },
        { id: 'property',      label: 'Property Platform / CRM',            type: 'customer-system' },
        { id: 'verify',        label: 'World-Check Verify',                 type: 'lseg-product' },
        { id: 'wc1-screen',    label: 'World-Check One Screening',          type: 'lseg-product' },
        { id: 'wc1-workflow',  label: 'World-Check One Workflow',           type: 'lseg-product' },
        { id: 'analyst',       label: 'Compliance Analyst',                 type: 'actor' },
        { id: 'downstream',    label: 'Deal Progression / Escrow Outcome',  type: 'downstream' }
      ],
      steps: [
        { id: 1,  lane: 'agent',        label: 'Agent opens property deal and captures buyer, seller and intermediary details', type: 'user-action' },
        { id: 2,  lane: 'property',     label: 'CRM structures party, beneficial-owner and transaction-value data', type: 'process' },
        { id: 3,  lane: 'property',     label: 'POST /verify-screening — upfront screening for buyer, seller or intermediary', type: 'api-request', to: 'verify' },
        { id: 4,  lane: 'verify',       label: 'Return screening outcome against World-Check and internal watchlists', type: 'api-response', from: 'verify' },
        { id: 5,  lane: 'property',     label: 'Auto-clear straightforward parties and escalate higher-risk records into WC1', type: 'process' },
        { id: 6,  lane: 'property',     label: 'POST /screening — submit review-required parties to WC1 API for governed handling', type: 'api-request', to: 'wc1-screen', condition: 'match' },
        { id: 7,  lane: 'wc1-screen',   label: 'Screen against sanctions, PEP, adverse media and related risk datasets', type: 'process', condition: 'match' },
        { id: 8,  lane: 'property',     label: '200 OK — enriched results returned for workflow and disposition', type: 'api-response', from: 'wc1-screen', condition: 'match' },
        { id: 9,  lane: 'wc1-workflow', label: 'Case created for buyer, seller or intermediary requiring review', type: 'decision', condition: 'match' },
        { id: 10, lane: 'analyst',      label: 'Analyst reviews match detail, transaction context and prior disposition history', type: 'user-action' },
        { id: 11, lane: 'analyst',      label: 'Disposition recorded — clear, enhanced due diligence, hold or decline', type: 'user-action' },
        { id: 12, lane: 'wc1-workflow', label: 'Approved parties enrolled for ongoing screening until completion and post-close monitoring window', type: 'process' },
        { id: 13, lane: 'wc1-workflow', label: 'World-Check change alert or adverse event triggers follow-up review before exchange or completion', type: 'webhook', to: 'property' },
        { id: 14, lane: 'property',     label: 'Deal progression or escrow release is paused, approved or escalated based on review outcome', type: 'process' },
        { id: 15, lane: 'downstream',   label: 'Audit-ready property transaction outcome recorded', type: 'outcome' }
      ]
    },

    /* ── 4. Tier 1 bank with customer-owned screening stack ──── */
    {
      id: 'tier1-bank-wcod-kyc-payments',
      title: 'Tier 1 Bank — OnDemand for KYC and Payments',
      subtitle: 'World-Check data delivered into custom apps and a filtering partner for customer-owned screening controls',
      scenarioRef: 'kyc-onboarding',
      interactionType: 'mixed',
      lsegProducts: ['custom-app', 'filter-partner', 'wcod'],
      description:
        'A Tier 1 bank already operates its own KYC and payment-screening environment. World-Check OnDemand ' +
        'supplies structured World-Check data into the bank’s custom applications and filtering partner so the bank ' +
        'can control matching, filtering, routing, monitoring and payment decisioning inside its own operating model.',
      phases: [
        { id: 1, title: 'Client Intake',        desc: 'Bank-owned channels collect customer, account and payment party data.',                                                        products: ['custom-app'] },
        { id: 2, title: 'Data Delivery',        desc: 'OnDemand delivers structured World-Check data into the bank’s filtering partner and custom screening stack.',               products: ['wcod', 'filter-partner', 'custom-app'] },
        { id: 3, title: 'KYC Screening',        desc: 'The bank’s own KYC engine screens customers and related parties using OnDemand-fed data and customer-defined policies.',      products: ['custom-app', 'filter-partner', 'wcod'] },
        { id: 4, title: 'Payment Screening',    desc: 'The bank’s payment controls use the same OnDemand-fed data and partner filtering layer for pre-execution checks.',            products: ['custom-app', 'filter-partner', 'wcod'] },
        { id: 5, title: 'Triage, Routing & Monitoring', desc: 'Customer-owned rules and partner filtering suppress noise, prioritise likely matches and feed ongoing monitoring inside the bank’s own stack.', products: ['custom-app', 'filter-partner', 'wcod'] },
        { id: 6, title: 'Decision & Audit',     desc: 'The bank records disposition, monitoring outcome and payment decision in its own workflow environment.',                         products: ['custom-app', 'filter-partner'] }
      ],
      lanes: [
        { id: 'customer',      label: 'Customer / Counterparty',          type: 'actor' },
        { id: 'bank-app',      label: 'Bank Custom Apps',                 type: 'customer-system' },
        { id: 'ondemand',      label: 'World-Check OnDemand',             type: 'lseg-product' },
        { id: 'partner',       label: 'Filtering Partner',                type: 'customer-system' },
        { id: 'bank-engine',   label: 'Bank Screening Engine',            type: 'customer-system' },
        { id: 'ops',           label: 'Bank Compliance / Payments Ops',   type: 'actor' }
      ],
      steps: [
        { id: 1,  lane: 'customer',    label: 'Customer submits onboarding or payment instructions through bank-owned channels', type: 'user-action' },
        { id: 2,  lane: 'bank-app',    label: 'Bank custom apps structure customer, account and payment-party data', type: 'process' },
        { id: 3,  lane: 'ondemand',    label: 'World-Check data feed makes current structured risk content available to the bank environment', type: 'process', note: 'Data only — not the screening engine' },
        { id: 4,  lane: 'bank-app',    label: 'Bank custom apps pass screening payloads and policy context to the filtering partner', type: 'api-request', to: 'partner' },
        { id: 5,  lane: 'partner',     label: 'Filtering partner applies bank-defined filtering, enrichment and routing logic', type: 'process' },
        { id: 6,  lane: 'partner',     label: 'Partner forwards filtered screening request into the bank-owned screening engine with OnDemand-fed data references', type: 'api-request', to: 'bank-engine' },
        { id: 7,  lane: 'bank-engine', label: 'Bank-owned KYC or payment-screening engine evaluates parties using OnDemand data, bank rules and partner filtering output', type: 'process' },
        { id: 8,  lane: 'bank-engine', label: 'Return scored result, matched records and supporting attributes to bank apps and partner layer', type: 'api-response', from: 'bank-engine' },
        { id: 9,  lane: 'bank-app',    label: 'Low-risk items are auto-cleared; higher-risk alerts are routed into the bank’s own review and monitoring workflow', type: 'process' },
        { id: 10, lane: 'ops',         label: 'Bank compliance or payments operations review remaining alerts, monitoring events and record disposition', type: 'user-action' },
        { id: 11, lane: 'bank-app',    label: 'Bank-owned workflow records final customer, monitoring or payment decision with audit evidence', type: 'outcome' }
      ]
    }
  ];

  /* ── False positive reduction levers ─────────────────────────
     Each lever maps to a stage, has a description and lists which
     products / configuration options address it.
     ──────────────────────────────────────────────────────────── */
  var fpReductionLevers = {

    beforeScreening: [
      {
        id: 'data-prep',
        label: 'Data Preparation & Cleaning',
        description: 'Structuring and normalising input data before screening. Clean, well-formed inputs reduce noise-driven matches before they reach analysts or customer-facing journeys.',
        productMapping: [
          { productId: 'wc1',    note: 'Structured inputs improve screening quality before cases are created, helping analysts start with cleaner results and less avoidable noise.' },
          { productId: 'verify', note: 'Structured name and reference fields improve embedded screening precision in digital onboarding and trigger-based flows.' },
          { productId: 'wcod',   note: 'Structured World-Check data can be consumed by a customer-owned engine that also depends on clean input formatting and field discipline.' }
        ]
      },
      {
        id: 'structured-input',
        label: 'Structured Inputs',
        description: 'Separate name, DOB and identifier fields instead of free-text. Reduces ambiguous or partial matches.',
        productMapping: [
          { productId: 'wc1',    note: 'Structured fields support sharper matching, cleaner routing and more targeted governed case creation.' },
          { productId: 'verify', note: 'Verify performs best when name, DOB and reference data are sent as discrete fields rather than loose free text.' },
          { productId: 'wcod',   note: 'Customer-owned screening engines using OnDemand data typically depend on structured input and structured record attributes to improve matching quality.' }
        ]
      },
      {
        id: 'entity-classify',
        label: 'Entity Classification',
        description: 'Correctly classifying individuals vs entities before screening avoids cross-type false positives.',
        productMapping: [
          { productId: 'wc1',    note: 'Entity type controls improve precision before workflow begins, reducing poor-quality alerts that would otherwise enter review queues.' },
          { productId: 'verify', note: 'Entity scoping keeps lightweight name-screening requests relevant at the point of interaction.' },
          { productId: 'wcod',   note: 'Entity classifications and record taxonomy help customer-owned engines avoid mixing individual and organisation screening logic.' }
        ]
      },
      {
        id: 'normalisation',
        label: 'Name Normalisation',
        description: 'Standardising formats, transliterations and special characters before submission.',
        productMapping: [
          { productId: 'wc1',    note: 'Normalisation supports more consistent initial and ongoing screening outcomes across governed workflows.' },
          { productId: 'verify', note: 'Name normalisation improves match quality where screening must happen quickly inside customer journeys.' },
          { productId: 'wcod',   note: 'Customer-owned engines consuming OnDemand data still benefit from upstream normalisation to get the best value from rich structured content.' }
        ]
      }
    ],

    duringScreening: [
      {
        id: 'scope-control',
        label: 'Scope Control',
        description: 'Restricting which datasets, categories and jurisdictions apply to a given screening population. Not every entity needs every risk type every time.',
        productMapping: [
          { productId: 'wc1',    note: 'Category and list controls help determine what enters workflow and ongoing monitoring, reducing avoidable alert volume.' },
          { productId: 'verify', note: 'Scope controls keep embedded screening requests focused on the relevant risk types for that customer journey.' },
          { productId: 'wcod',   note: 'Data filters and categorisation help downstream screening platforms work with only the most relevant World-Check content.' }
        ]
      },
      {
        id: 'sensitivity',
        label: 'Match Sensitivity Tuning',
        description: 'Adjusting fuzzy matching thresholds. Lower sensitivity returns fewer, higher-confidence results.',
        productMapping: [
          { productId: 'wc1',    note: 'Sensitivity settings can be tuned alongside workflow outcomes and analyst dispositions, helping teams find a better noise-to-catch balance.' },
          { productId: 'verify', note: 'Sensitivity controls support leaner digital-screening use cases where fast, lower-noise responses matter.' }
        ]
      },
      {
        id: 'avoid-overscreen',
        label: 'Avoiding Overscreening',
        description: 'Screening only when required and only against relevant lists. Blanket screening against all categories drives unnecessary volume.',
        productMapping: [
          { productId: 'wc1',    note: 'Targeted scope reduces unnecessary alerts, queue build-up and analyst workload.' },
          { productId: 'verify', note: 'Appropriate list scoping avoids noisy responses in onboarding and trigger-based screening journeys.' },
          { productId: 'wcod',   note: 'Enhanced categorisation and filtered data delivery help customer-owned screening stacks avoid pulling in irrelevant content.' }
        ]
      },
      {
        id: 'identifier-match',
        label: 'Identifier-Assisted Matching',
        description: 'Including national ID, passport number or LEI alongside name anchors matching to specific records.',
        productMapping: [
          { productId: 'wc1',    note: 'Identifiers strengthen matching confidence and help analysts disposition cases faster with fewer ambiguous escalations.' },
          { productId: 'verify', note: 'Identifiers improve confidence in low-latency screening responses where the customer needs a fast decision.' },
          { productId: 'wcod',   note: 'Granular identifiers in OnDemand data can improve downstream customer-side matching and corroboration logic.' }
        ]
      }
    ],

    afterScreening: [
      {
        id: 'attributes',
        label: 'Use of Returned Attributes',
        description: 'DOB, nationality, gender and identifier fields returned per result support rapid programmatic or human dismissal.',
        productMapping: [
          { productId: 'wc1',    note: 'Returned attributes support routing, case creation, analyst corroboration and more confident dismissal logic.' },
          { productId: 'verify', note: 'Returned attributes help customer systems suppress obvious non-matches before unnecessary escalation.' },
          { productId: 'wcod',   note: 'Granular World-Check data fields strengthen downstream customer-side matching and manual corroboration.' }
        ]
      },
      {
        id: 'provenance',
        label: 'Provenance & Source Context',
        description: 'Knowing which source a match comes from helps assess materiality. Obscure or low-quality sources warrant less weight.',
        productMapping: [
          { productId: 'wc1',    note: 'Source category and list origin can drive workflow routing, review priority and analyst confidence.' },
          { productId: 'verify', note: 'Source context helps customer teams decide which results deserve escalation rather than automatic rejection or clearance.' },
          { productId: 'wcod',   note: 'Provenance-rich data delivery helps customer platforms and analysts understand why a record matters before they escalate it.' }
        ]
      },
      {
        id: 'post-processing-rules',
        label: 'Post-Processing Rules',
        description: 'Customer-side logic applied to results before routing — suppress, auto-clear or escalate based on attributes.',
        productMapping: [
          { productId: 'wc1',    note: 'Rules can route cases, suppress noise and support more consistent audit-ready decisioning.' },
          { productId: 'verify', note: 'Customer-defined rules can suppress low-risk results before escalation in embedded journeys.' },
          { productId: 'wcod',   note: 'OnDemand data can feed customer-owned post-processing logic that suppresses, prioritises or enriches results before review.' }
        ]
      },
      {
        id: 'routing',
        label: 'Routing & Suppression',
        description: 'Sending different result types to different queues; suppressing known-good entities from repeated review.',
        productMapping: [
          { productId: 'wc1',    note: 'Workflow queues, routing logic and remediation history are built into the platform.' },
          { productId: 'verify', note: 'Routing remains customer-managed when using the lighter screening model.' },
          { productId: 'wcod',   note: 'Customer-owned engines using OnDemand data can route alerts by category, source or severity inside their own workflow stack.' }
        ]
      }
    ],

    inOperations: [
      {
        id: 'workflow-design',
        label: 'Workflow Design',
        description: 'Structuring review queues and SLAs to reduce re-work and improve consistency across the team.',
        productMapping: [
          { productId: 'wc1',    note: 'Configurable queues, SLA timers and escalation paths support managed compliance operations and reduce repeated analyst handling.' },
          { productId: 'verify', note: 'Operational workflow sits outside the product unless escalated into WC1.' },
          { productId: 'wcod',   note: 'Customers using OnDemand must design this layer themselves or through a partner platform; good workflow design is critical to controlling noise.' }
        ]
      },
      {
        id: 'triage',
        label: 'Triage Practices',
        description: 'Analyst skills in rapidly dismissing non-matches using available data. Reduces average handling time.',
        productMapping: [
          { productId: 'wc1',    note: 'Match detail, workflow context and disposition history support faster, more consistent analyst triage.' },
          { productId: 'verify', note: 'Attribute-rich responses support customer-side triage in lightweight deployments.' },
          { productId: 'wcod',   note: 'Detailed World-Check data supports manual corroboration when a reviewer needs deeper context in a customer-owned stack.' }
        ]
      },
      {
        id: 'governance',
        label: 'Governance & Tuning Review',
        description: 'Periodic review of sensitivity settings, scope configuration and false positive rates to refine over time.',
        productMapping: [
          { productId: 'wc1',    note: 'Disposition outcomes, queues and alert volumes support tuning reviews over time.' },
          { productId: 'verify', note: 'Customers can review result volumes and escalation rates to refine settings in embedded flows.' },
          { productId: 'wcod',   note: 'Customers using OnDemand can review downstream alert volumes and tune their own engine, filters and routing rules against the delivered data.' }
        ]
      },
      {
        id: 'optimisation',
        label: 'Continuous Optimisation',
        description: 'Using match quality metrics and operational data to drive improvement in inputs, scope and thresholds.',
        productMapping: [
          { productId: 'wc1',    note: 'Operational and screening data support continuous optimisation across review workflows and ongoing-screening operations.' },
          { productId: 'verify', note: 'Response data supports lightweight optimisation of embedded screening journeys and decision checkpoints.' },
          { productId: 'wcod',   note: 'Delivered data, provenance and change detail help customers optimise their own matching, filtering and payment-control logic over time.' }
        ]
      }
    ]
  };

  var salesTalkTrack = {
    questionGroups: [
      {
        theme: 'Current state',
        questions: [
          'How are you currently screening customers and counterparties today?',
          'What systems do your compliance analysts use for review, escalation and case management?',
          'Do you already own a screening engine and workflow stack, or are those capabilities still missing?'
        ]
      },
      {
        theme: 'Scope & volume',
        questions: [
          'Are you screening at onboarding only, or also on an ongoing basis and at customer-defined trigger points?',
          'Are you screening individuals, entities or both — and do you also need internal watchlists, beneficial-owner screening or adverse media coverage?',
          'What is your current false positive rate, and how much analyst time or customer friction does that create?'
        ]
      },
      {
        theme: 'Integration & workflow',
        questions: [
          'How important is straight-through processing for low-risk cases?',
          'Do you have data residency or sovereignty requirements?',
          'How do you handle exceptions today — customer-managed rules, analyst queues, or a defined escalation and approval workflow?'
        ]
      },
      {
        theme: 'Regulatory triggers',
        questions: [
          'Which compliance drivers matter most right now: onboarding KYC, ongoing screening, payment-adjacent screening, adverse media review, or restrictive-measures controls?',
          'If you are in payments, do you need low-latency screening inside payment or beneficiary flows, or fresh data to power your own controls after list updates?',
          'Where do you need a full audit trail and governed review versus a fast embedded screening response?'
        ]
      }
    ],
    objectionHandling: [
      {
        objection: 'We already have a screening tool.',
        response: 'The conversation is about fit and operating model, not just whether a tool exists. The useful follow-up is where the current stack is falling short: data quality, latency, internal watchlists, adverse media coverage, false positives, ongoing screening, or governed review and audit.'
      },
      {
        objection: 'We only need the data, not the workflow.',
        response: 'That usually points to World-Check OnDemand if the customer already owns the surrounding screening engine, matching logic, workflow, alert handling and decisioning stack. If those capabilities are still missing, data alone is usually not the full answer.'
      },
      {
        objection: 'We are not ready to change our integration.',
        response: 'You do not need to replace everything at once. Some customers start with Verify in a narrow onboarding or payout flow, others use OnDemand to strengthen an existing stack, and others introduce World-Check One first for governed review and ongoing screening.'
      },
      {
        objection: 'We do not need a full workflow platform.',
        response: 'That may be right. If the need is low-latency screening inside an existing customer journey, Verify may fit better. If the customer already has the full surrounding stack and only needs trusted data, OnDemand may be the cleaner conversation.'
      },
      {
        objection: 'We need payment screening.',
        response: 'The first step is to separate the need. If the customer needs party screening at onboarding or customer-defined trigger points, Verify may fit. If they need fresh World-Check data to power their own payment-screening controls, OnDemand may fit. World-Check One is stronger for KYC, ongoing screening, review and audit, not as the payment-screening engine.'
      },
      {
        objection: 'We need an on-premises deployment.',
        response: 'The better discovery path is to understand the underlying requirement: data residency, local control, internal workflow ownership, or integration constraints. Once that is clear, we can map whether the customer needs data for its own stack, embedded screening, or a governed screening workflow.'
      },
      {
        objection: 'We need to reduce false positives.',
        response: 'That opens a broader opportunity discussion. The useful questions are whether the noise comes from poor inputs, broad screening scope, weak matching controls, missing internal watchlists, adverse media relevance challenges, or analyst workflow bottlenecks. Different answers can point to OnDemand, Verify, World-Check One, or a combination.'
      },
      {
        objection: 'We need internal watchlists as well as World-Check.',
        response: 'That is a strong discovery point. Verify and World-Check One fit the screening conversation, while OnDemand is about delivering World-Check data into the customer-owned surrounding stack. The next question is whether the client needs a fast screening response, a governed case workflow, or only better data feeding its own engine.'
      },
      {
        objection: 'We need beneficial-owner screening.',
        response: 'That is useful for narrowing fit. Verify should not be positioned as beneficial-owner screening. If beneficial ownership and governed review are core requirements, the conversation is usually better around World-Check One and the wider customer due-diligence workflow.'
      },
      {
        objection: 'We also care about adverse media, not just sanctions and PEPs.',
        response: 'That is an important discovery point. The next question is whether the customer only needs screening responses in a digital journey or also needs governed review of relevance, escalation and audit. Adverse media often increases the value of World-Check One when analyst review and operational handling matter.'
      }
    ]
  };

  /* ── Public API ───────────────────────────────────────────────
     Lookup helpers used by render.js and interactions.js.
     ──────────────────────────────────────────────────────────── */
  /* ── API Comparison data ──────────────────────────────────────── */
  var apiComparison = [
    {
      id: 'wcod',
      name: 'World-Check OnDemand',
      badge: 'Data API',
      badgeType: 'api',
      icon: '&#128190;',
      tagline: 'Structured World-Check data for customers that own screening, routing and decisioning.',
      valueStatement: 'WCOD is a data-delivery model, not a screening workflow. It fits customers that already have their own screening engine, payment controls, filtering partner or orchestration layer and want current World-Check data feeding that stack.',
      bestFor: 'Large banks, PSPs and mature compliance teams that already own matching, filtering, alert handling and case workflow outside the LSEG platform.',
      capabilities: [
        'Structured World-Check data delivery for customer-owned screening stacks',
        'Filter-based retrieval by entity type, jurisdiction, category and update date',
        'OAuth 2.0 client credentials for system-to-system access',
        'Admin portal supports setup and administration, but there is no end-user portal'
      ],
      diagramLabel: 'Data-led model — customer or partner owns screening logic',
      flowSteps: ['Your App', 'WCOD API', 'Structured Data', 'Your Screening Engine'],
      flowArrows: ['OAuth2 Pull', 'World-Check data', 'Match / Filter / Route'],
      comparison: {
        authentication:    'OAuth 2.0',
        screeningModel:    'Customer-built',
        caseManagement:    false,
        ongoingScreening:  false,
        auditTrail:        false,
        bulkOperations:    true,
        userManagement:    false,
        webhooks:          false,
        adminPortal:       true,
        endUserPortal:     false,
        dataResidency:     'Client / partner hosted',
        integrationEffort: 'High (build engine)'
      }
    },
    {
      id: 'wc1v2',
      name: 'WC1 API v2',
      badge: 'Case Mgmt API',
      badgeType: 'api',
      legacy: true,
      legacyNote: 'WC1 v2 is a legacy API. LSEG recommends migrating to WC1 v3 for all new and existing integrations.',
      icon: '&#128196;',
      tagline: 'Legacy managed case workflow API with built-in cases, audit and ongoing screening.',
      valueStatement: 'WC1 v2 is the legacy stateful World-Check One API. It fits customers that want screening to create and manage cases, audit trail and ongoing screening inside the WC1 operating model rather than in their own workflow stack.',
      bestFor: 'Existing customers with a live v2 integration. All new builds should target WC1 v3.',
      capabilities: [
        'Stateful case creation so screening results land directly into managed review workflow',
        'Ongoing screening and alert management inside the WC1 operating model',
        'Built-in audit trail and case history for governed review',
        'HMAC authentication with key / secret model',
        'Admin portal and end-user portal support managed workflow operations'
      ],
      diagramLabel: 'Managed workflow model — cases live inside WC1',
      flowSteps: ['Your App', 'WC1 v2 API', 'Case Created', 'Workflow / OGS / Audit'],
      flowArrows: ['HMAC Auth', 'Screen request', 'Case lifecycle'],
      comparison: {
        authentication:    'HMAC (key / secret)',
        screeningModel:    'Stateful / cases',
        caseManagement:    true,
        ongoingScreening:  true,
        auditTrail:        true,
        bulkOperations:    true,
        userManagement:    false,
        webhooks:          false,
        adminPortal:       true,
        endUserPortal:     true,
        dataResidency:     'EMEA',
        integrationEffort: 'Medium'
      }
    },
    {
      id: 'wc1v3',
      name: 'WC1 API v3',
      badge: 'Case Mgmt API',
      badgeType: 'api',
      icon: '&#9889;',
      tagline: 'The strategic WC1 API for customers that want managed cases, audit and ongoing screening.',
      valueStatement: 'WC1 v3 is the strategic World-Check One API. It fits customers that want screening, case management, audit trail and ongoing screening inside the WC1 platform, with a more modern OAuth 2.0 integration model than v2.',
      bestFor: 'All new integrations, and the recommended migration target for any existing WC1 v2 customers.',
      migrationReasons: [
        'OAuth 2.0 replaces HMAC, aligning better with modern bank and enterprise security standards',
        'Consistent REST design is easier for delivery teams to learn, support and maintain',
        'Strategic investment is going into v3; v2 is maintenance-only',
        'Cleaner bulk operations are better suited to high-volume screening programs',
        'Webhook and monitoring-event patterns reduce polling overhead for customer systems'
      ],
      capabilities: [
        'Managed case creation and workflow inside WC1',
        'Ongoing screening, audit trail and reporting in the same operating model',
        'Bulk screening support for higher-volume onboarding and remediation programs',
        'Monitoring-event and webhook-style integration patterns for customer notification',
        'OAuth 2.0 for modern identity and access patterns',
        'Admin portal is available today; user management is expected shortly; end-user portal is available in WC1'
      ],
      diagramLabel: 'Managed workflow model — strategic WC1 integration path',
      flowSteps: ['Your App', 'WC1 v3 API', 'Case Created', 'Workflow / OGS / Audit'],
      flowArrows: ['OAuth2', 'Screen request', 'Case / monitoring events'],
      comparison: {
        authentication:    'OAuth 2.0',
        screeningModel:    'Stateful / cases',
        caseManagement:    true,
        ongoingScreening:  true,
        auditTrail:        true,
        bulkOperations:    true,
        userManagement:    true,
        webhooks:          true,
        adminPortal:       true,
        endUserPortal:     true,
        dataResidency:     'EMEA',
        integrationEffort: 'Medium (recommended)'
      }
    },
    {
      id: 'verify',
      name: 'World-Check Verify',
      badge: 'Screening API',
      badgeType: 'api',
      icon: '&#128203;',
      tagline: 'Low-latency screening for onboarding and customer-defined decision points.',
      valueStatement: 'Verify is a stateless screening API for customers that want a fast screening response inside onboarding, beneficiary setup, payout release or similar decision points, without adopting a full case-management platform.',
      bestFor: 'Fintechs, digital banks, PSPs and onboarding platforms that need embedded screening and will handle triage or escalation in their own systems or a separate workflow layer.',
      capabilities: [
        'Stateless screening response suited to onboarding and event-driven screening checkpoints',
        'Returns match detail and supporting attributes in a single response',
        'Group-based configuration for sensitivity and policy alignment by use case',
        'Admin portal supports setup and administration, but there is no end-user portal'
      ],
      diagramLabel: 'Inline screening model — response goes back to your journey',
      flowSteps: ['Customer', 'Your App', '/screen call', 'Screening Result', 'Accept / Escalate'],
      flowArrows: ['Submit data', 'OAuth2 + payload', 'Low-latency response', 'Decision'],
      comparison: {
        authentication:    'OAuth 2.0',
        screeningModel:    'Stateless (one call)',
        caseManagement:    false,
        ongoingScreening:  false,
        auditTrail:        false,
        bulkOperations:    true,
        userManagement:    false,
        webhooks:          false,
        adminPortal:       true,
        endUserPortal:     false,
        dataResidency:     'EMEA / APAC',
        integrationEffort: 'Low'
      }
    }
  ];

  return {
    products:            products,
    scenarios:           scenarios,
    capabilityDomains:   capabilityDomains,
    solutionExamples:    solutionExamples,
    fpReductionLevers:   fpReductionLevers,
    salesTalkTrack:      salesTalkTrack,
    apiComparison:       apiComparison,

    getProduct: function (id) {
      return products.find(function (p) { return p.id === id; }) || null;
    },
    getScenario: function (id) {
      return scenarios.find(function (s) { return s.id === id; }) || null;
    },
    getSolutionExample: function (id) {
      return solutionExamples.find(function (e) { return e.id === id; }) || null;
    },
    getCapability: function (productId, domainId) {
      var product = this.getProduct(productId);
      if (!product) return null;
      return product.capabilities[domainId] || null;
    },
    getAllLevers: function () {
      var all = [];
      var fp = fpReductionLevers;
      ['beforeScreening', 'duringScreening', 'afterScreening', 'inOperations'].forEach(function (stage) {
        fp[stage].forEach(function (lever) {
          all.push(Object.assign({}, lever, { stage: stage }));
        });
      });
      return all;
    }
  };

}());
