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
      tagline: 'Screening software plus World-Check data for governed compliance workflows.',
      description:
        'World-Check One combines purpose-built screening software with proprietary ' +
        'World-Check data. It supports customer and third-party screening, ongoing monitoring, ' +
        'case management, collaboration and audit-ready remediation workflows.',
      integrationPattern: 'Online platform with WC1 API, batch screening, Salesforce integration and Zero Footprint screening options.',
      reviewWorkflow: 'Built-in case management, collaboration tools, workflow optimisation, status tracking and date-stamped audit trail.',
      dataResidency: 'WC1 is hosted in the UK and Ireland and supports a global client base from that managed platform footprint.',
      typicalBuyers: [
        'Banks and fintechs needing screening plus governed review workflows',
        'Compliance teams that want a single environment for case handling and audit',
        'Firms with ongoing screening obligations and operational escalation paths',
        'Customers blending WC1 API submission with analyst-led decisioning'
      ],
      differentiators: [
        'Combines data, screening, workflow, audit and ongoing screening in one platform',
        'Supports both automated submission and analyst review operating models',
        'Built-in case handling reduces the need for separate compliance workflow tooling',
        'Ongoing screening and event management sit alongside initial screening'
      ],
      capabilities: {
        'overview': {
          summary: 'Broad screening and remediation platform combining World-Check data, screening software and governed review tooling.',
          keyPoints: [
            'Advanced name matching with secondary identifiers',
            'Sanctions, PEP and adverse media screening in one platform',
            'Ongoing monitoring and rescreening included',
            'Case management and collaboration tools for remediation'
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
            'Screening Resolution Service is available to reduce review burden'
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
          summary: 'Supports several operating models: direct platform use, WC1 API-led integration, batch processing and CRM-connected workflows.',
          keyPoints: [
            'WC1 API integration into onboarding systems and compliance workflows',
            'Batch screening and Zero Footprint WC1 API integration are available',
            'Salesforce integration supports connected onboarding and monitoring',
            'Multi-language user interface supports global analyst teams'
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
      tagline: 'API-first real-time risk intelligence for structured data access.',
      description:
        'World-Check On Demand provides structured, enriched, machine-readable risk ' +
        'intelligence data in real time. It is positioned as an API-first way to access ' +
        'World-Check content for faster onboarding, screening and payment-related workflows.',
      integrationPattern: 'API-first architecture for direct integration into in-house, cloud-based or third-party screening platforms.',
      reviewWorkflow: 'No built-in screening workflow, case management or ongoing screening operations.',
      dataResidency: 'Data-delivery model that supports customer-controlled downstream hosting and processing after delivery into the client or partner screening stack.',
      typicalBuyers: [
        'Teams that primarily need access to World-Check data',
        'Organisations with their own screening engine or partner platform',
        'Teams needing current structured risk data inside automated controls',
        'Users needing data access without full screening operations'
      ],
      differentiators: [
        'Focused on data access rather than operational workflow',
        'Useful where the requirement is structured data delivery into customer-owned screening operations, not end-to-end workflow',
        'Designed for organisations that want to power their own screening stack',
        'Can complement broader screening and workflow products'
      ],
      capabilities: {
        'overview': {
          summary: 'Real-time data delivery layer for organisations that want current World-Check intelligence inside their own platforms.',
          keyPoints: [
            'API-first solution for real-time risk intelligence access',
            'Structured, enriched, machine-readable data delivery',
            'Designed for faster onboarding and screening use cases',
            'No waiting for batch updates when records change'
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
          summary: 'No built-in case management, audit workflow or review queues.',
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
            'Future-ready architecture aligned with ISO 20022 and instant payments mandates',
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
      tagline: 'Cloud-native, stateless screening API for embedded KYC and internal-watchlist screening.',
      description:
        'World-Check Verify is a next-generation, cloud-native, stateless screening API ' +
        'designed for embedded use in onboarding and customer screening workflows. It delivers ' +
        'real-time screening against trusted World-Check data with low latency and in-region hosting options.',
      integrationPattern: 'Cloud-native API for frictionless embedding into onboarding, KYC, KYX and customer screening workflows.',
      reviewWorkflow: 'Customer-managed follow-up, with configurable screening parameters and optional auto-resolution capabilities.',
      dataResidency: 'Cloud-native AWS architecture with in-region hosting support in key EU and APAC markets for data sovereignty requirements.',
      typicalBuyers: [
        'Teams needing World-Check data plus straightforward name screening',
        'Customers combining World-Check screening with their own internal watchlists',
        'Customers that want screening without a full workflow platform',
        'Digital onboarding teams embedding screening into customer journeys',
        'Organisations that will manage case handling in their own environment'
      ],
      differentiators: [
        'Pairs World-Check data with name screening in a lighter operational model',
        'Supports World-Check plus internal-watchlist screening in one embedded API pattern',
        'Simpler fit where case management and audit workflow are not required',
        'Supports embedded screening experiences for digital channels',
        'Natural step up to World-Check One when workflow needs expand'
      ],
      capabilities: {
        'overview': {
          summary: 'Low-latency embedded screening API built for digital onboarding and event-driven customer screening at high availability.',
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
            'Supports screening against World-Check data and internal watchlists'
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
            'Manual review workload is reduced through lower-friction screening',
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
            'Flexible integration for modular adoption across onboarding and transaction-triggered screening moments'
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
      recommendedProducts: ['wcod', 'verify', 'wc1'],
      primaryProduct: 'wc1',
      rationale:
        'Verify supports low-latency KYC screening inside the onboarding journey. ' +
        'OnDemand supplies refreshed World-Check data into the PSP\'s own screening stack when ' +
        'the client needs immediate use of updated content for restrictive-measures controls and related customer-owned payment checks. WC1 fits ' +
        'the KYC and ongoing-screening operating model when the PSP also needs governed review, audit and remediation workflow.',
      keyQuestions: [
        'How quickly do you need to refresh PSU checks after new or amended restrictive measures enter into force?',
        'Do you run your own screening engine, or rely fully on a vendor workflow today?',
        'What is your target onboarding time for a standard low-risk retail customer?',
        'How are payer, payee and beneficiary checks handled before payment execution?',
        'How are restrictive-measures checks, verification of payee and payment-decision ownership split operationally today?'
      ],
      talkPoints: [
        'Verify gives you low-latency screening in the onboarding journey and supports screening against World-Check plus internal watchlists.',
        'OnDemand is relevant when you want current World-Check data feeding your own screening stack rather than a full vendor workflow.',
        'For EU instant payments, the regulatory conversation is not just transaction speed but also restrictive-measures controls and verification of payee.',
        'WC1 gives operations teams an audit-ready place to manage KYC and ongoing-screening cases rather than payment screening itself.'
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
      recommendedProducts: ['verify', 'wc1'],
      primaryProduct: 'wc1',
      rationale:
        'Verify fits the embedded screening moments in onboarding and transaction flows. ' +
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
        'and relevant intermediaries during client intake, offer progression, funds handling and completion. ' +
        'The core challenge is documenting ownership, escalating higher-risk parties and preserving a clear audit trail.',
      constraints: {
        volume: 'medium',
        reviewModel: 'analyst-review',
        integrationPreference: 'hybrid',
        regulatoryContext: 'AML / Sanctions / EDD',
        dataResidencyRequirement: true
      },
      recommendedProducts: ['wc1', 'verify'],
      primaryProduct: 'wc1',
      rationale:
        'WC1 is the natural centre of gravity when a property firm needs governed screening, review workflow, ' +
        'audit trail and documented escalation around higher-value transactions. Verify complements that by handling ' +
        'embedded upfront screening against World-Check and internal watchlists without pushing the firm toward a raw-data ' +
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
        'Verify can handle lightweight embedded screening at intake, while WC1 manages governed review, escalation and audit.',
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
      tags: ['hybrid', 'property', 'audit', 'screening']
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
      recommendedProducts: ['wc1', 'verify'],
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
      lsegProducts: ['verify', 'wc1'],
      description:
        'A social media platform runs a marketplace with buyers and sellers, card top-ups, ' +
        'wallet balances and payouts. World-Check Verify supports embedded screening during ' +
        'onboarding and transaction moments, while World-Check One manages ongoing screening, ' +
        'alerts, analyst review and audit-ready case handling.',
      phases: [
        { id: 1, title: 'Register',              desc: 'Buyer or seller submits onboarding details to the marketplace platform.',                              products: [] },
        { id: 2, title: 'KYC Screening',         desc: 'KYC screening at onboarding can be handled by Verify for low-latency embedded flows or by WC1 where governed review and workflow are needed.', products: ['verify', 'wc1'] },
        { id: 3, title: 'Auto-clear or Escalate', desc: 'Low-risk profiles cleared instantly. Matches routed to analyst review queue.',                       products: ['verify', 'wc1'] },
        { id: 4, title: 'Transaction Screening', desc: 'Screen payment counterparty before wallet top-up or payout is executed.',                             products: ['verify'] },
        { id: 5, title: 'Ongoing Monitoring',    desc: 'World-Check record changes trigger alerts for enrolled buyers and sellers.',                           products: ['wc1'] },
        { id: 6, title: 'Review & Action',       desc: 'Analyst records decision; account or wallet controls updated with full audit trail.',                  products: ['wc1'] }
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
      lsegProducts: ['wcod', 'verify', 'wc1'],
      description:
        'A midsized EU payments service provider needs fast onboarding and must refresh restrictive-measures controls immediately after list updates while keeping instant payments moving. ' +
        'World-Check OnDemand supplies real-time data updates into the PSP\'s own screening stack, ' +
        'World-Check Verify supports low-latency KYC screening against World-Check and internal watchlists, and World-Check One supports KYC and ongoing-screening workflow where governed review is needed.',
      phases: [
        { id: 1, title: 'Account Opening',       desc: 'Customer submits KYC and beneficiary data to the PSP.',                                               products: [] },
        { id: 2, title: 'KYC Screening - SaaS / Screening API', desc: 'If the PSP prefers a managed screening path, KYC screening can be handled by Verify for low-latency onboarding or by WC1 where governed review and workflow are needed from the start.', products: ['verify', 'wc1'] },
        { id: 3, title: 'KYC Screening - Customer Engine',      desc: 'If the PSP prefers to use its own screening engine, OnDemand can supply refreshed World-Check data into that customer-owned KYC screening stack.', products: ['wcod'] },
        { id: 4, title: 'Payment Controls',      desc: 'The PSP can use Verify for low-latency party-screening checkpoints or OnDemand to power its own payment controls, while restrictive-measures PSU checks are refreshed separately after list updates.', products: ['verify', 'wcod'] },
        { id: 5, title: 'Governed Review',       desc: 'Higher-risk customers routed to an audit-ready case workflow with queue and remediation path.',        products: ['wc1'] },
        { id: 6, title: 'Outcome & Monitoring',  desc: 'Case closed with audit trail; enrolled customers continue to be monitored for list changes.',          products: ['wc1'] }
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
      lsegProducts: ['wc1', 'verify'],
      description:
        'A real-estate business screens buyers, sellers, landlords, beneficial owners and key intermediaries ' +
        'during listing, offer acceptance and funds movement. World-Check Verify supports embedded upfront screening ' +
        'against World-Check and internal watchlists, while World-Check One provides the governed review, audit trail and ongoing monitoring layer.',
      phases: [
        { id: 1, title: 'Party Capture',         desc: 'Agent opens deal and captures buyer, seller and all intermediary details.',                            products: [] },
        { id: 2, title: 'Embedded Screening',    desc: 'Upfront check against World-Check and internal watchlists at point of submission.',                   products: ['verify'] },
        { id: 3, title: 'Escalation',            desc: 'Straightforward parties cleared; higher-risk records escalated to governed review.',                  products: ['verify', 'wc1'] },
        { id: 4, title: 'Analyst Review',        desc: 'Disposition recorded — clear, enhanced due diligence, hold or decline — with full audit trail.',      products: ['wc1'] },
        { id: 5, title: 'Ongoing Monitoring',    desc: 'Approved parties enrolled for monitoring until deal completion and post-close window.',                products: ['wc1'] },
        { id: 6, title: 'Deal Outcome',          desc: 'Audit-ready transaction record with complete chain of screening decisions.',                           products: ['wc1'] }
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
        description: 'Structuring and normalising input data before submission. Clean inputs reduce noise-driven matches.',
        productMapping: [
          { productId: 'wc1',    note: 'Structured screening inputs can flow straight into workflow, case handling and audit.' },
          { productId: 'verify', note: 'Structured data inputs improve name-screening precision in lightweight digital flows.' }
        ]
      },
      {
        id: 'structured-input',
        label: 'Structured Inputs',
        description: 'Separate name, DOB and identifier fields instead of free-text. Reduces ambiguous or partial matches.',
        productMapping: [
          { productId: 'wc1',    note: 'Structured fields support screening, routing and governed case creation.' },
          { productId: 'verify', note: 'API-led name screening performs best when name and reference data are structured.' }
        ]
      },
      {
        id: 'entity-classify',
        label: 'Entity Classification',
        description: 'Correctly classifying individuals vs entities before screening avoids cross-type false positives.',
        productMapping: [
          { productId: 'wc1',    note: 'Entity type controls improve screening precision before workflow begins.' },
          { productId: 'verify', note: 'Entity scoping keeps lightweight name-screening requests relevant.' }
        ]
      },
      {
        id: 'normalisation',
        label: 'Name Normalisation',
        description: 'Standardising formats, transliterations and special characters before submission.',
        productMapping: [
          { productId: 'wc1',    note: 'Normalisation supports consistent initial and ongoing screening outcomes.' },
          { productId: 'verify', note: 'Name normalisation improves match quality in embedded screening flows.' }
        ]
      }
    ],

    duringScreening: [
      {
        id: 'scope-control',
        label: 'Scope Control',
        description: 'Restricting which lists, categories and jurisdictions apply to a given screening population. Not every entity needs every list.',
        productMapping: [
          { productId: 'wc1',    note: 'Category and list controls help determine what enters workflow and ongoing monitoring.' },
          { productId: 'verify', note: 'Scope controls keep lightweight screening requests focused on the relevant risk types.' },
          { productId: 'wcod',   note: 'Data filters and categorisation help downstream platforms work with only the most relevant risk content.' }
        ]
      },
      {
        id: 'sensitivity',
        label: 'Match Sensitivity Tuning',
        description: 'Adjusting fuzzy matching thresholds. Lower sensitivity returns fewer, higher-confidence results.',
        productMapping: [
          { productId: 'wc1',    note: 'Sensitivity settings can be tuned alongside workflow and disposition outcomes.' },
          { productId: 'verify', note: 'Sensitivity controls support leaner digital-screening use cases.' }
        ]
      },
      {
        id: 'avoid-overscreen',
        label: 'Avoiding Overscreening',
        description: 'Screening only when required and only against relevant lists. Blanket screening against all categories drives unnecessary volume.',
        productMapping: [
          { productId: 'wc1',    note: 'Targeted scope reduces unnecessary alerts and review workload.' },
          { productId: 'verify', note: 'Appropriate list scoping avoids noisy screening responses in customer journeys.' },
          { productId: 'wcod',   note: 'Enhanced categorisation and filtered data delivery help reduce overscreening in customer-owned screening stacks.' }
        ]
      },
      {
        id: 'identifier-match',
        label: 'Identifier-Assisted Matching',
        description: 'Including national ID, passport number or LEI alongside name anchors matching to specific records.',
        productMapping: [
          { productId: 'wc1',    note: 'Identifiers strengthen triage and help analysts disposition cases faster.' },
          { productId: 'verify', note: 'Identifiers improve confidence in lighter-weight screening responses.' }
        ]
      }
    ],

    afterScreening: [
      {
        id: 'attributes',
        label: 'Use of Returned Attributes',
        description: 'DOB, nationality, gender and identifier fields returned per result support rapid programmatic or human dismissal.',
        productMapping: [
          { productId: 'wc1',    note: 'Full attribute payload supports routing, case creation and dismissal logic.' },
          { productId: 'verify', note: 'Returned attributes help customer systems suppress obvious non-matches.' },
          { productId: 'wcod',   note: 'Granular World-Check data fields strengthen downstream matching and manual corroboration.' }
        ]
      },
      {
        id: 'provenance',
        label: 'Provenance & Source Context',
        description: 'Knowing which source a match comes from helps assess materiality. Obscure or low-quality sources warrant less weight.',
        productMapping: [
          { productId: 'wc1',    note: 'Source category and list origin can drive workflow routing and review priority.' },
          { productId: 'verify', note: 'Source context helps customer teams decide which results need escalation.' },
          { productId: 'wcod',   note: 'Provenance-rich data delivery helps customer platforms and analysts understand why a record matters.' }
        ]
      },
      {
        id: 'post-processing-rules',
        label: 'Post-Processing Rules',
        description: 'Customer-side logic applied to results before routing — suppress, auto-clear or escalate based on attributes.',
        productMapping: [
          { productId: 'wc1',    note: 'Rules can route cases, suppress noise and support audit-ready decisioning.' },
          { productId: 'verify', note: 'Customer-defined rules can suppress low-risk results before escalation.' }
        ]
      },
      {
        id: 'routing',
        label: 'Routing & Suppression',
        description: 'Sending different result types to different queues; suppressing known-good entities from repeated review.',
        productMapping: [
          { productId: 'wc1',    note: 'Workflow queues and case-routing logic are built into the platform.' },
          { productId: 'verify', note: 'Routing remains customer-managed when using the lighter screening model.' }
        ]
      }
    ],

    inOperations: [
      {
        id: 'workflow-design',
        label: 'Workflow Design',
        description: 'Structuring review queues and SLAs to reduce re-work and improve consistency across the team.',
        productMapping: [
          { productId: 'wc1',    note: 'Configurable queues, SLA timers and escalation paths support managed compliance operations.' },
          { productId: 'verify', note: 'Operational workflow sits outside the product unless escalated into WC1.' }
        ]
      },
      {
        id: 'triage',
        label: 'Triage Practices',
        description: 'Analyst skills in rapidly dismissing non-matches using available data. Reduces average handling time.',
        productMapping: [
          { productId: 'wc1',    note: 'Match detail, workflow context and disposition history support rapid triage.' },
          { productId: 'verify', note: 'Attribute-rich responses support customer-side triage in lightweight deployments.' },
          { productId: 'wcod',   note: 'Detailed World-Check data supports manual corroboration when a reviewer needs deeper context.' }
        ]
      },
      {
        id: 'governance',
        label: 'Governance & Tuning Review',
        description: 'Periodic review of sensitivity settings, scope configuration and false positive rates to refine over time.',
        productMapping: [
          { productId: 'wc1',    note: 'Disposition outcomes, queues and alert volumes support tuning reviews over time.' },
          { productId: 'verify', note: 'Customers can review result volumes and escalation rates to refine settings.' }
        ]
      },
      {
        id: 'optimisation',
        label: 'Continuous Optimisation',
        description: 'Using match quality metrics and operational data to drive improvement in inputs, scope and thresholds.',
        productMapping: [
          { productId: 'wc1',    note: 'Operational and screening data support continuous optimisation across review workflows.' },
          { productId: 'verify', note: 'Response data supports lightweight optimisation of embedded screening journeys.' }
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
        response: 'That is a strong discovery point. Verify and World-Check One support internal watchlists in the screening conversation, while OnDemand is about delivering World-Check data into the customer’s own surrounding screening stack.'
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
  return {
    products:            products,
    scenarios:           scenarios,
    capabilityDomains:   capabilityDomains,
    solutionExamples:    solutionExamples,
    fpReductionLevers:   fpReductionLevers,
    salesTalkTrack:      salesTalkTrack,

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
