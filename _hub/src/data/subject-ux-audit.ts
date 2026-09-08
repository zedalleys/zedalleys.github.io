import type { Subject } from '../types';

/**
 * "UX Audit" — the practice of systematically evaluating an existing product
 * against usability heuristics, accessibility standards, and competitors,
 * then turning findings into a report stakeholders act on. Builds on the
 * Nielsen heuristics introduced in Interaction Design & Usability and the
 * standards covered in Accessibility Basics.
 */
export const uxAuditSubject: Subject = {
  id: 'ux-audit',
  title: 'UX Audit',
  description:
    'Systematically evaluating an existing product — heuristic evaluation, accessibility and competitive audits, severity ratings, and turning findings into a backlog stakeholders act on.',
  icon: '🔍',
  color: '#E76F51',
  levels: [
    {
      id: 'why-audit',
      title: 'Why Audit',
      steps: [
        {
          id: 'what-is-a-ux-audit',
          title: 'What Is a UX Audit?',
          summary:
            'A structured evaluation of an existing product against known usability principles — not a redesign, and not a matter of opinion.',
          content: [
            'A UX audit is a systematic review of an existing product\'s usability, conducted by someone applying established evaluation methods rather than personal taste. The distinction matters because "I don\'t like this screen" and "this screen violates the visibility-of-system-status heuristic, and here is the specific evidence" are very different kinds of feedback — only the second is actionable, defensible, and repeatable by someone else auditing the same product later.',
            'Audits are typically triggered by one of a few situations: a product has accumulated years of incremental changes with no one stepping back to look at the whole; a redesign is being scoped and the team needs a clear-eyed baseline of what is actually broken versus merely old-looking; a metric (support tickets, drop-off rate, NPS) has degraded and no one is sure why; or a new team has inherited a product and needs to understand its state before touching it.',
            'An audit is explicitly not a redesign exercise — the deliverable is a diagnosis, not a set of new mockups. Conflating the two is a common failure: an auditor who starts sketching solutions mid-audit tends to fixate on the first few problems found and rush past the rest of the product, producing a shallow, uneven review instead of a complete one. Solutions come after the full picture is documented, usually as a separate, later effort with its own process.',
            'A good audit produces evidence a stakeholder cannot easily dismiss: specific screens, specific heuristics violated, specific user impact, and where possible a severity rating (covered later in this subject). This is what separates an audit from a personal critique — it is built to survive the question "says who?"',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What distinguishes a UX audit finding from a personal opinion about a design?',
              options: [
                'An audit finding is always delivered by someone senior',
                'An audit finding cites a specific, established evaluation criterion (a heuristic, a standard) and concrete evidence, making it repeatable and defensible',
                'Audit findings are never negative',
                'There is no real distinction — both are equally valid',
              ],
              correctIndex: 1,
              explanation:
                'Grounding a finding in a named heuristic and specific evidence is what lets a different auditor reach the same conclusion independently — that repeatability is the whole point of auditing systematically.',
            },
            {
              id: 'q2',
              question: 'Why should an auditor avoid sketching redesign solutions in the middle of conducting an audit?',
              options: [
                'Sketching is only allowed in a separate design phase by law',
                'It tends to cause fixation on the first problems found, producing a shallow, uneven review instead of a complete diagnosis of the whole product',
                'Redesigns must always be done by a different person than the auditor',
                'It has no real downside; it just saves time',
              ],
              correctIndex: 1,
              explanation:
                'An audit\'s job is to fully document the current state first — jumping to solutions early biases attention toward whatever was found first and away from a thorough pass.',
            },
          ],
        },
        {
          id: 'types-of-ux-audits',
          title: 'Types of UX Audits',
          summary:
            'Heuristic, accessibility, and competitive audits ask different questions and need to be scoped separately.',
          content: [
            'A heuristic audit evaluates a product against a known set of usability principles — most commonly Nielsen\'s ten heuristics — looking for places the interface violates established, well-tested rules of thumb about how interfaces should behave. It asks "does this follow known good practice", independent of what any competitor does.',
            'An accessibility audit evaluates a product against a formal standard, typically WCAG, checking specific, testable success criteria — color contrast ratios, keyboard operability, screen reader compatibility, focus order — many of which have unambiguous pass/fail thresholds rather than a judgment call. This makes an accessibility audit more mechanically checkable than a heuristic one, and it is often partially automatable with tools, though automated tools only catch a fraction of real accessibility issues and manual review with assistive technology remains necessary.',
            'A competitive or comparative audit evaluates a product not against an abstract standard but against specific competitors, asking where the product falls behind or ahead on the same tasks. This type is useful for a different question than the other two: not "is this good" in isolation, but "is this good enough relative to what a switching user is comparing it against" — a product can pass every heuristic and accessibility check and still lose users to a competitor that solves the same task in three fewer steps.',
            'Most real audits combine two or three of these types, but scoping which ones up front matters: a stakeholder expecting a competitive audit will be confused by a report full of WCAG contrast ratios, and a stakeholder expecting an accessibility compliance check will be unsatisfied by a report that only compares screenshots to a competitor. Naming the audit type in the kickoff conversation avoids a mismatched deliverable later.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What question does a competitive (comparative) audit ask that a heuristic audit does not?',
              options: [
                'Whether the color contrast meets WCAG AA',
                'Whether the product is good enough relative to what a user comparing options would experience elsewhere, even if it passes usability heuristics on its own',
                'Whether the code is well structured',
                'Whether the product loads quickly',
              ],
              correctIndex: 1,
              explanation:
                'A product can be internally sound by heuristic standards and still lose to a competitor that completes the same task faster — the competitive audit is the one built to catch that.',
            },
            {
              id: 'q2',
              question: 'Why can accessibility audits be partially automated in a way heuristic audits usually cannot?',
              options: [
                'Accessibility issues are less important, so less rigor is needed',
                'Many WCAG success criteria (like specific contrast ratios) have unambiguous, mechanically checkable pass/fail thresholds, unlike broader usability heuristics',
                'Heuristics have no defined criteria at all',
                'Automated tools catch all accessibility issues, so manual review is unnecessary',
              ],
              correctIndex: 1,
              explanation:
                'Contrast ratios and similar criteria can be measured precisely by tooling; automated tools still only catch a subset of real issues, so manual testing with assistive technology remains part of a real accessibility audit.',
            },
          ],
        },
      ],
    },
    {
      id: 'heuristic-evaluation',
      title: 'Heuristic Evaluation',
      steps: [
        {
          id: 'nielsens-heuristics-in-audit-practice',
          title: "Nielsen's Heuristics in Audit Practice",
          summary:
            'The same ten heuristics used to evaluate designs also structure how an audit is scored and organized.',
          content: [
            'Jakob Nielsen\'s ten usability heuristics — visibility of system status, match between system and the real world, user control and freedom, consistency and standards, error prevention, recognition rather than recall, flexibility and efficiency of use, aesthetic and minimalist design, help users recognize and recover from errors, and help and documentation — were designed as a broad-strokes evaluation checklist, not an exhaustive one. In audit practice they function as categories: every finding gets tagged to the heuristic it violates, which is what turns a pile of individual observations into a structured report instead of a list of complaints.',
            'Nielsen\'s original recommendation, still followed in serious practice, is to have three to five evaluators independently review the product against the heuristics before comparing notes — a single evaluator, however experienced, reliably finds only a fraction of the real problems, and different evaluators tend to catch different issues. Pooling multiple independent passes before discussing findings prevents one evaluator\'s first impression from anchoring everyone else\'s review.',
            'Each evaluator should walk through realistic user tasks rather than randomly clicking through screens — reviewing a checkout flow means actually attempting to buy something, encountering the same friction a real user would, not just eyeballing the visual design of the page. This task-based walkthrough is what surfaces heuristic violations that only appear in sequence, like a confirmation step that contradicts information shown two screens earlier.',
            'A heuristic evaluation is a lightweight, cheap way to find a large share of a product\'s usability problems without recruiting real users, which is exactly why it works well as a first pass before a more expensive round of usability testing — heuristic evaluation catches known-pattern problems fast; usability testing (covered in Interaction Design & Usability) is still needed for the problems that only show up with a real, unscripted user.',
          ],
          quiz: [
            {
              id: 'q1',
              question: "Why does Nielsen recommend three to five independent evaluators for a heuristic evaluation, rather than one?",
              options: [
                'One evaluator is against professional standards',
                'A single evaluator, however skilled, reliably catches only a fraction of the real problems, and different evaluators tend to notice different issues',
                'Multiple evaluators are required to make the report look more credible, regardless of what they find',
                'It is faster to have one person review it, so more evaluators are used only when time allows',
              ],
              correctIndex: 1,
              explanation:
                "Nielsen's research found that coverage improves substantially by pooling several independent evaluations before discussing findings, since no single reviewer catches everything.",
            },
            {
              id: 'q2',
              question: 'Why should heuristic evaluators walk through realistic tasks (e.g. actually completing a checkout) rather than browsing screens at random?',
              options: [
                'Random browsing is faster and equally thorough',
                'Task-based walkthroughs surface sequence-dependent problems — like a later screen contradicting information shown earlier — that random screen review would miss',
                'Tasks are only relevant for usability testing with real users, not heuristic evaluation',
                'It has no real benefit; either approach finds the same issues',
              ],
              correctIndex: 1,
              explanation:
                'Some heuristic violations only exist in the relationship between steps in a flow, which random screen-by-screen review will not reveal but a realistic task walkthrough will.',
            },
          ],
        },
        {
          id: 'severity-ratings',
          title: 'Severity Ratings',
          summary:
            'Not every finding deserves the same urgency — a severity scale is what keeps a report from reading as one long undifferentiated list.',
          content: [
            'A severity rating combines two things: how often the problem occurs (does it affect every user or an edge case) and how serious the impact is when it does (a fatal blocker versus a minor annoyance). Nielsen\'s commonly used 0–4 scale runs from 0 (not a usability problem at all) through cosmetic, minor, major, and 4 (usability catastrophe — a problem serious enough to block release). Without a scale like this, a report reads as one long undifferentiated list, and a stakeholder cannot tell whether item 12 or item 40 needs attention first.',
            'Severity should be assigned consistently across an audit, which is harder than it sounds — the same auditor tends to rate the first few findings more generously and later findings more harshly (or the reverse) simply from fatigue and shifting calibration over a long review session. A useful discipline: write a one-sentence definition of each severity level before starting, and re-check the first several ratings after the full pass is done, once calibration has settled.',
            'Severity is not the same as effort to fix — a cosmetic misalignment might take five minutes to fix and a catastrophic broken checkout flow might take a sprint, but severity describes user impact, not implementation cost. Conflating the two in the rating itself removes information a stakeholder needs; better to report severity and estimated effort as two separate columns, letting prioritization frameworks (like RICE, covered in Product Management) combine them deliberately rather than having the auditor silently pre-decide the tradeoff.',
            'A report where every finding is rated "major" or "catastrophic" is as unhelpful as one with no ratings at all — it signals either genuine crisis or, more often, an uncalibrated auditor. A healthy severity distribution usually skews toward minor and cosmetic findings, with major and catastrophic findings reserved for the handful of issues that actually justify urgent attention.',
          ],
          quiz: [
            {
              id: 'q1',
              question: "What two factors combine to determine a finding's severity rating?",
              options: [
                'How expensive the finding is to fix, and who reported it',
                'How frequently the problem occurs, and how serious the impact is when it does occur',
                'How long the audit took, and how many screens were reviewed',
                'The auditor\'s job title and years of experience',
              ],
              correctIndex: 1,
              explanation:
                "Nielsen's severity model weighs frequency and impact together — a rare-but-catastrophic bug and a constant-but-minor annoyance can land at similar severity through different combinations of the two factors.",
            },
            {
              id: 'q2',
              question: 'Why should severity and fix effort be reported as separate columns rather than merged into one rating?',
              options: [
                'Because effort estimates are always inaccurate',
                'Because severity describes user impact and effort describes implementation cost — collapsing them into one number pre-decides a prioritization tradeoff that should be made deliberately, later',
                'Because stakeholders cannot understand two columns at once',
                'Because only engineers are allowed to estimate effort',
              ],
              correctIndex: 1,
              explanation:
                'Keeping the two separate preserves information — a low-effort, high-severity fix and a high-effort, low-severity one look identical if the auditor merges severity and cost into a single score.',
            },
          ],
        },
      ],
    },
    {
      id: 'beyond-heuristics',
      title: 'Beyond Heuristics',
      steps: [
        {
          id: 'accessibility-audits',
          title: 'Accessibility Audits',
          summary:
            'An accessibility audit checks specific, testable criteria — and automated tools only catch part of the picture.',
          content: [
            'An accessibility audit measures a product against WCAG (Web Content Accessibility Guidelines), organized around four principles — perceivable, operable, understandable, robust — and scored at Level A, AA, or AAA, with AA the most common compliance target for organizations and the level referenced in most accessibility law. Each success criterion under these principles is specific enough to test directly: a 4.5:1 contrast ratio for normal text, visible focus indicators, no keyboard traps, meaningful alt text on informative images.',
            'Automated scanning tools (axe, WAVE, Lighthouse) are a fast first pass and should always be run, but industry estimates consistently put their coverage at roughly 30–40% of WCAG success criteria — they catch missing alt attributes and contrast failures reliably, but cannot judge whether alt text is actually meaningful, whether a focus order makes logical sense, or whether an interaction pattern is genuinely operable by a screen reader user attempting a real task. A "clean" automated scan is not the same as an accessible product.',
            'Manual testing fills that gap: navigating the entire flow using only a keyboard, and separately using a screen reader (VoiceOver, NVDA, or JAWS) with a monitor turned off if possible, forces the auditor to experience the actual interaction rather than infer it from markup. This is the step most audits skip under time pressure, and it is the step that catches the majority of real-world accessibility failures — a form that scans clean but traps keyboard focus in a modal, for instance, only surfaces this way.',
            'An accessibility audit\'s findings should reference the specific WCAG success criterion violated (e.g. "1.4.3 Contrast (Minimum)") alongside the plain-language impact, because that reference number is what lets engineering look up the exact remediation guidance and what lets legal or compliance teams map findings to obligations — this is one of the places an audit report format genuinely differs from a heuristic-evaluation report.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Roughly what share of WCAG success criteria can automated scanning tools reliably catch on their own?',
              options: [
                'Nearly 100% — manual testing is rarely necessary',
                'Roughly 30–40% — enough to be a valuable first pass, but not a substitute for manual testing with a keyboard and a screen reader',
                '0% — automated tools cannot detect any accessibility issues',
                'Exactly 50%, by WCAG specification',
              ],
              correctIndex: 1,
              explanation:
                'Automated tools reliably catch things like missing alt attributes and contrast failures but cannot judge meaning, logical focus order, or real screen-reader operability — manual testing remains essential.',
            },
            {
              id: 'q2',
              question: 'Why should an accessibility finding cite the specific WCAG success criterion number (e.g. 1.4.3) rather than only a plain-language description?',
              options: [
                'It is required to make the report look more technical',
                'It lets engineering look up exact remediation guidance and lets compliance teams map findings to legal obligations, in a way a heuristic-evaluation finding does not need to',
                'WCAG numbers are more important than the actual user impact',
                'Plain-language descriptions are not allowed in accessibility reports',
              ],
              correctIndex: 1,
              explanation:
                'The criterion number is a precise, standardized reference — useful for remediation guidance and compliance tracking in a way a heuristic label (which is more of a category than a formal standard) is not.',
            },
          ],
        },
        {
          id: 'competitive-and-comparative-audits',
          title: 'Competitive & Comparative Audits',
          summary:
            'Benchmarking against competitors on the same task reveals gaps that an internal-only review cannot see.',
          content: [
            'A competitive audit selects a small number of real competitors — usually three to five, chosen for being genuine alternatives a user would actually consider switching to, not just any company in the same industry — and evaluates them side by side against the same specific tasks, not the whole product surface. Reviewing "onboarding" or "checkout" specifically, across every competitor, produces a much more useful comparison than a general impression of each product.',
            'A comparison matrix — tasks down one axis, competitors across the other, cells scored or annotated with specific observations — is the standard output, because it forces the same criteria to be applied consistently to every competitor rather than letting the auditor\'s attention drift toward whichever competitor happens to be more interesting to look at. Screenshots and step counts (how many taps or clicks a task takes in each product) are common concrete measures inside each cell.',
            'The risk specific to competitive audits is chasing whatever a competitor happens to have shipped without asking whether it actually serves your users — a feature a competitor has can be a genuine gap, or it can be a solution to a problem your users do not have, aimed at a different segment than yours. The audit\'s job is to surface the gap; deciding whether the gap matters for your specific product\'s users and strategy belongs to product prioritization, not to the audit itself.',
            'Competitive audits age faster than heuristic or accessibility ones, because competitors ship changes on their own schedule — a comparison done a year ago may no longer reflect a competitor\'s current product. This is a reason to scope competitive audits as a point-in-time snapshot explicitly dated in the report, rather than treating the findings as a permanent baseline the way accessibility compliance findings can more reasonably be treated.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why does a competitive audit typically compare specific tasks (like "checkout") across competitors, rather than each product as a whole?',
              options: [
                'Because reviewing whole products takes less time',
                'Because comparing the same specific task across every competitor produces a much more precise, apples-to-apples comparison than a general impression of each product',
                'Because whole-product reviews are illegal',
                'Because competitors never share the same feature set, so tasks cannot be compared',
              ],
              correctIndex: 1,
              explanation:
                'Fixing the task and varying only the competitor keeps the comparison controlled — a general "how good does each product feel" review is far more subjective and inconsistent.',
            },
            {
              id: 'q2',
              question: "What is the specific risk of a competitive audit that a heuristic or accessibility audit doesn't share?",
              options: [
                'It can lead a team to chase a feature a competitor shipped without checking whether it actually serves their own users and strategy',
                'It always takes longer than a heuristic audit',
                'It cannot be documented in a written report',
                'It is not allowed to reference specific competitor names',
              ],
              correctIndex: 0,
              explanation:
                "A competitor's feature reflects that competitor's users and bets, which may not match yours — the audit surfaces the gap, but whether it's worth closing is a separate, strategic judgment.",
            },
          ],
        },
      ],
    },
    {
      id: 'running-the-audit',
      title: 'Running the Audit',
      steps: [
        {
          id: 'audit-methodology',
          title: 'Audit Methodology',
          summary:
            'Scope, sampling, and process decided up front are what keep an audit consistent and defensible.',
          content: [
            'Scoping an audit means deciding, before starting, which flows and screens are in scope, which audit types apply (heuristic, accessibility, competitive, or some mix), which device classes and browsers will be tested, and roughly how much time the whole exercise should take. An unscoped audit tends to expand indefinitely, because there is always one more screen worth a look — a written scope is what lets an auditor say "this is out of scope for this pass" without it feeling arbitrary.',
            'Sampling matters when a full audit of every screen is not practical, which is most of the time for any product of real size. A common approach is to sample by task frequency (audit the screens most users actually pass through) and by risk (audit the screens where a failure would be most costly — checkout, account recovery, anything involving money or data), rather than sampling randomly or simply auditing whatever screens are easiest to reach.',
            'A consistent process across the audit — the same checklist or heuristic set applied to every screen, the same severity scale, the same documentation template — is what makes a report internally comparable. An audit where the first ten screens were reviewed against Nielsen\'s heuristics and the last ten were reviewed against "whatever felt off" produces a report that cannot be trusted section to section, even if every individual observation in it happens to be correct.',
            'Time-boxing each screen or flow, decided in advance, protects against the natural pull toward whichever part of the product the auditor finds most interesting or most broken. A flat, disciplined pace across the full scope — even if it means spending less time on a screen that clearly deserves more — produces a more complete and more trustworthy picture than an uneven one, and any screen that genuinely needs deeper attention can be flagged for a focused follow-up review rather than expanding the main audit\'s scope midstream.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why is a written scope decided before an audit begins important?',
              options: [
                'It is required for legal reasons in every organization',
                'Without a written scope, an audit tends to expand indefinitely, since there is always one more screen that could be reviewed',
                'Scoping only matters for accessibility audits',
                'It has no real effect on how the audit is conducted',
              ],
              correctIndex: 1,
              explanation:
                'A defined scope gives the auditor a legitimate basis to say a given screen is out of scope for this pass, preventing the audit from growing without limit.',
            },
            {
              id: 'q2',
              question: 'When a full audit of every screen is impractical, what is a sound sampling approach?',
              options: [
                'Audit whichever screens are visually easiest to review',
                'Sample by task frequency (screens most users pass through) and by risk (screens where failure is most costly, like checkout or account recovery)',
                'Audit screens in alphabetical order by name',
                'Audit only the screens the auditor personally finds most interesting',
              ],
              correctIndex: 1,
              explanation:
                'Frequency and risk-based sampling concentrates limited audit time on the screens where problems matter most, rather than an arbitrary or convenience-based selection.',
            },
          ],
        },
        {
          id: 'writing-the-audit-report',
          title: 'Writing the Audit Report',
          summary:
            'A report structured for a skimming stakeholder and a report structured for the team fixing issues are different documents that can share one file.',
          content: [
            'An audit report needs two audiences served at once: a busy stakeholder who will read an executive summary and skim the rest, and an implementer who needs the specific detail behind each finding to actually fix it. The common structure that serves both: an executive summary (top findings, overall health, recommended next steps) up front, followed by a detailed findings section organized by flow or by severity, with each finding documented consistently.',
            'Each individual finding should include: a clear title, the specific screen or flow it occurs in, a screenshot or recording, the heuristic or standard violated, the severity rating, the user impact in plain language, and — where useful, though this crosses into recommendation territory carefully — a suggested direction for a fix without fully designing the solution. Consistency in this structure across every finding is what makes the report scannable rather than a set of differently-shaped essays.',
            'The executive summary is the section stakeholders actually act on, and it is worth writing last, after every finding is documented — summarizing accurately requires knowing the full picture first. A good summary names the two or three findings that matter most, states the overall pattern behind them if one exists ("most major issues cluster in the checkout flow"), and is honest about what was and was not in scope, so the report is not mistaken for a complete guarantee of quality outside what was actually reviewed.',
            'A report that only lists problems, with no framing of what is working well, tends to be received defensively by the team that built the product being audited — which undermines the report\'s actual goal of getting the findings acted on. Naming genuine strengths alongside the findings is not softening the message, it is accurate reporting, and it makes the negative findings easier for a defensive audience to actually hear.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why is the executive summary usually written last, after all individual findings are documented?',
              options: [
                'Because stakeholders never read it anyway',
                'Because summarizing accurately — naming the patterns and the two or three findings that matter most — requires having the full picture first',
                'Because it is the shortest section and takes the least effort',
                'Report templates require sections to be written in reverse order',
              ],
              correctIndex: 1,
              explanation:
                'Writing the summary before the detail risks anchoring it on whatever was found first rather than what actually matters most across the complete set of findings.',
            },
            {
              id: 'q2',
              question: "Why does a good audit report include what's working well, not just problems?",
              options: [
                'To make the report longer',
                'A report that reads as entirely negative tends to be received defensively by the team that built the product, which undermines the goal of getting findings actually acted on',
                'Positive findings are required by most style guides',
                'It has no effect on how the report is received',
              ],
              correctIndex: 1,
              explanation:
                'Accurate, balanced reporting is more likely to be heard without defensiveness — and it is simply a more honest account of the product than an all-negative list would be.',
            },
          ],
        },
      ],
    },
    {
      id: 'from-findings-to-action',
      title: 'From Findings to Action',
      steps: [
        {
          id: 'presenting-findings-to-stakeholders',
          title: 'Presenting Findings to Stakeholders',
          summary:
            'How an audit is presented determines whether its findings become action items or get filed away.',
          content: [
            'A live readout, even a short one, tends to produce far more action than emailing a finished report and hoping it gets read — a document allows the reader to skim past uncomfortable findings without engaging, while a live conversation surfaces objections and questions in real time, when the auditor can still respond to them. Reserving time for questions and pushback during the readout, rather than treating it as a one-way presentation, is what actually resolves disagreements instead of letting them fester in inboxes afterward.',
            'Leading with the pattern rather than the pile of individual findings changes how a stakeholder receives the material — "checkout has 14 individual issues" is less persuasive and less memorable than "checkout consistently fails to tell users what happened after they take an action, across 14 different screens" — the second framing names a coherent problem a team can actually organize a fix around, rather than a list that reads as noise.',
            'Framing findings in terms of business impact, not just usability principle, is what gets resourcing allocated in most organizations — "this violates the error-prevention heuristic" moves fewer stakeholders than "this pattern is a plausible contributor to the 22% cart abandonment on this step," even when both statements describe the same underlying finding. Tying findings to a metric the organization already tracks, wherever honestly possible, translates the audit into language that competes successfully against other roadmap priorities.',
            'A presentation that ends without a clear ask — specific findings prioritized for the next planning cycle, a named owner, a rough timeline — leaves the audience impressed but the report unactioned. The final slide or paragraph of any audit presentation should propose a concrete next step, not just summarize what was found; an audit that stops at diagnosis, however excellent, has done half the job.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why does presenting audit findings live tend to produce more action than sending a written report alone?',
              options: [
                'Live presentations are legally required for audits',
                'A live conversation surfaces objections and questions in real time, while a document lets the reader skim past uncomfortable findings without engaging',
                'Written reports are less accurate than verbal ones',
                'It has no real effect on outcomes either way',
              ],
              correctIndex: 1,
              explanation:
                'Real-time back-and-forth resolves disagreement and confusion on the spot, whereas a document alone leaves room for findings to be skimmed, misread, or simply not engaged with.',
            },
            {
              id: 'q2',
              question: 'Why is framing a finding in terms of a tracked business metric (e.g. cart abandonment) often more persuasive than citing the heuristic alone?',
              options: [
                'Business metrics are always more accurate than heuristic evaluations',
                'It translates the finding into language that competes successfully for resourcing against other roadmap priorities, which a heuristic name alone rarely does on its own',
                'Heuristics are not considered valid evidence',
                'Stakeholders do not understand what heuristics are, so they must always be omitted',
              ],
              correctIndex: 1,
              explanation:
                'Most prioritization conversations run on business impact — connecting a usability finding to a number the organization already watches gives it a fighting chance against other priorities competing for the same resources.',
            },
          ],
        },
        {
          id: 'from-findings-to-a-prioritized-backlog',
          title: 'From Findings to a Prioritized Backlog',
          summary:
            'An audit is only valuable once its findings are translated into work that actually gets scheduled.',
          content: [
            'Turning an audit into a backlog means converting each finding into a ticket with the same information an engineer or designer would need to act on it without re-reading the whole report: the specific problem, its severity, its estimated effort (a separate estimate, made by whoever will do the work, not carried over from the auditor\'s judgment), and a link back to the full finding for context. A finding that never becomes a ticket is a finding that, in practice, never gets fixed.',
            'Combining severity and effort into a prioritization decision is exactly the RICE/MoSCoW work described in Product Management — a high-severity, low-effort finding should usually be scheduled almost immediately, since it represents the best return on a small amount of work; a low-severity, high-effort finding may reasonably sit at the bottom of the backlog indefinitely, and saying so explicitly is more honest than letting it linger unaddressed with an implied promise attached.',
            'Grouping findings into themes before scheduling work, rather than scheduling each finding as an isolated ticket, often produces a more efficient fix — several individually "minor" findings that all stem from one shared root cause (like a form component used inconsistently across a dozen screens) are usually cheaper to fix once, at the source, than as a dozen separate patches applied screen by screen.',
            'An audit\'s findings should be revisited on a cadence, not filed away as a one-time deliverable — re-running a lightweight version of the audit six or twelve months later against the same criteria is what confirms whether the fixes actually landed and whether new issues have crept back in. Without this follow-up, an organization has no real way of knowing whether the original audit\'s investment paid off.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Who should estimate the effort to fix an audit finding?',
              options: [
                'The original auditor, carried directly from their severity rating',
                'Whoever will actually do the implementation work, as a separate estimate from the auditor\'s severity rating',
                'No one — effort should never be estimated for audit findings',
                'It should always default to "high" for every finding',
              ],
              correctIndex: 1,
              explanation:
                "Severity (user impact) and effort (implementation cost) are different judgments made by different people with different expertise — conflating them, or having the auditor guess at engineering effort, weakens the prioritization decision that follows.",
            },
            {
              id: 'q2',
              question: 'Why might grouping several "minor" findings into one theme (e.g. an inconsistent form component) be more efficient than fixing each individually?',
              options: [
                'Because minor findings should always be ignored',
                'Because several minor findings sharing one root cause are often cheaper to fix once at the source than as many separate patches applied screen by screen',
                'Because grouping makes the backlog look shorter without actually reducing the work',
                'Because themes are required by most project-management tools',
              ],
              correctIndex: 1,
              explanation:
                'Fixing the shared root cause once (like standardizing the form component) resolves every downstream instance at once, instead of paying the fix cost repeatedly across each screen it appears on.',
            },
          ],
        },
      ],
    },
  ],
};
