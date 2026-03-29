# Product Blueprint

### Global Travel Marketplace
- host or partner onboarding
- cross-border operations
- onboarding plus transaction-related risk support
- blend of automation and review

### International Law Firm
- client onboarding
- matter opening
- third-party screening
- hybrid desktop and API model
- auditability and workflow emphasis

## Capability Explorer domains
- Overview
- Data and Input Quality
- Screening and Matching Controls
- Workflow and Review
- Post-Processing and Decisioning
- Integration and Deployment
- False Positive Reduction

## False positive reduction levers
### Before screening
- data preparation and cleaning
- structured inputs
- normalization
- better entity or individual classification

### During screening
- avoiding overscreening
- tuning and admin settings
- scope control
- match sensitivity concepts

### After screening
- use of returned data attributes
- provenance and source context
- post-processing rules
- routing and suppression logic

### In operations
- workflow
- triage
- governance
- optimisation

## Solution example requirements
Each solution example must show:
- actors
- customer system or portal
- LSEG interface or product touchpoint
- direction of data flow
- user interaction points
- downstream case or process updates

## Mandatory solution examples
### KYC onboarding with WC1 API
Flow should show a user entering data into a customer KYC or onboarding system, the customer system sending data to WC1 API, results returning to the customer system, optional analyst review, and final decisioning.

### Ongoing screening with webhooks
Flow should show records submitted for ongoing screening, an update or alert being triggered, webhook communication to the customer application, and customer-side follow-up workflow.

### Hybrid legal-firm workflow
Flow should show a matter opening or intake system interacting with API-driven screening while compliance analysts use WC1 desktop for deeper review and disposition.

## Branding guidance
- use LSEG Risk Intelligence naming prominently
- use official assets only if present locally
- otherwise use a text-based fallback lockup
- keep styling enterprise, modern and restrained

## Technical constraints
- static multi-file web app
- HTML, CSS and JavaScript only
- local relative references only
- no frameworks
- no external dependencies
- no network calls
- presentation friendly at laptop resolution