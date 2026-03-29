# PLANS.md
- build dynamic product recommendation output
- build rationale panel
- build basic sales talk track panel per scenario

### Acceptance checks
- presenters can switch scenarios easily
- changing constraints updates the recommendation view
- the UI explains why a product or combination fits

## Phase 4: Solution Examples
### Objective
Implement end-to-end visual flow pages.

### Scope
- build solution example selector
- build lane-based architecture/flow diagrams
- support step-by-step reveal or highlight interactions
- include at least these examples:
  - KYC onboarding with WC1 API
  - ongoing screening with webhooks
  - hybrid legal-firm workflow
- label actor, customer system, LSEG product and downstream workflow lanes
- label API calls, responses, webhook events and review steps

### Acceptance checks
- the diagrams are understandable without narration
- each example shows who interacts with what and in what order
- flows visually differentiate synchronous and asynchronous interactions

## Phase 5: Capability Explorer
### Objective
Implement product-centric and compare-mode exploration.

### Scope
- build product selector
- build capability domain tabs
- build product overview panels
- build compare view
- highlight differences across workflow, integration, matching and deployment style

### Acceptance checks
- presenters can explain product differences quickly
- the compare view complements, rather than duplicates, the scenario view

## Phase 6: False Positive Reduction view
### Objective
Make false positive reduction concrete and credible.

### Scope
- build a dedicated page or sub-view
- explain overscreening
- explain tuning and admin settings
- explain data preparation and cleaning
- explain post-processing using attributes
- explain provenance and source context
- explain workflow and triage contribution
- map each lever to product configuration, workflow design or customer-side decisioning

### Acceptance checks
- the app avoids vague messaging
- a presenter can explain how false positives may be reduced in practical terms

## Phase 7: Sales Talk Track and polish
### Objective
Make the application presenter-ready.

### Scope
- refine sales messaging
- add discovery questions
- add objection handling points
- add cross-sell and upsell signals
- apply branding cues
- refine spacing, hierarchy, animation and responsiveness
- add fallback brand lockup if no logos are present

### Acceptance checks
- the app looks polished on a laptop
- it is usable in a live presentation
- branding feels aligned without requiring internet access

## Working approach
For each phase:
1. read `AGENTS.md`
2. inspect relevant current files
3. summarize the intended changes
4. implement only the current phase unless asked otherwise
5. list any known gaps after implementation