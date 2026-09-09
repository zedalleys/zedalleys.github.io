import type { Subject } from '../types';

/**
 * "Business Requirement Analysis" — the discipline of turning a business
 * need into requirements precise enough to build from and verify against:
 * BRD/PRD/FRD distinctions, elicitation techniques, user stories versus
 * formal requirements, prioritization, traceability, and change control.
 * Cross-links into Product Management's PRD step and UX Fundamentals.
 */
export const subject: Subject = {
  id: 'business-requirement-analysis',
  title: 'Business Requirement Analysis',
  description:
    'Turning a business need into requirements precise enough to build from — BRD vs PRD vs FRD, elicitation techniques, user stories, acceptance criteria, traceability, and change control.',
  icon: '📋',
  color: '#E76F51',
  levels: [
    {
      id: 'requirements-basics',
      title: 'Requirements Basics',
      steps: [
        {
          id: 'brd-vs-prd-vs-frd',
          title: 'BRD vs PRD vs FRD',
          summary:
            'Three commonly confused documents operate at three different altitudes, from business justification down to system behavior.',
          content: [
            'A Business Requirements Document (BRD) sits at the highest altitude: it states the business problem, the objectives, the expected value, and the scope, aimed at stakeholders who need to approve funding or direction before any product decisions are made — a BRD for a new checkout flow might state that cart abandonment is costing an estimated amount in lost revenue and that reducing it by a target percentage is the objective, without specifying any screen or feature.',
            'A Product Requirements Document (PRD), covered in detail in Product Management, sits one level down: it translates the business objective into what the product needs to do to achieve it — target users, core user flows, must-have versus nice-to-have requirements — still largely agnostic about the exact technical implementation. The PRD answers "what are we building and why," assuming the BRD has already answered "why does this business problem matter enough to fund."',
            'A Functional Requirements Document (FRD, sometimes called a functional spec) sits at the most granular altitude: it specifies exact system behavior — given this input, the system does this; under this condition, this validation applies; this API accepts these parameters — precise enough for an engineer to implement without needing to infer intent. Where a PRD might say "the user needs to reset a forgotten password," an FRD specifies the exact token expiry window, the retry limit, and the error state for an expired link.',
            'The most common real-world failure is skipping altitudes — writing FRD-level detail without ever having agreed on the business objective it serves, or approving a BRD-level business case and jumping straight to engineering without a PRD translating it into product requirements. Each document exists to answer a different question for a different audience, and skipping one usually means that question gets answered implicitly and inconsistently later, by whoever happens to be in the room when it comes up.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is the main difference in altitude between a BRD and an FRD?',
              options: [
                'They are the same document with different names used by different companies',
                'A BRD states the business problem and objective at a high level; an FRD specifies exact, granular system behavior precise enough to implement without inferring intent',
                'A BRD is always longer than an FRD',
                'An FRD is written before the BRD in every project',
              ],
              correctIndex: 1,
              explanation:
                'The BRD justifies why the work matters to the business; the FRD specifies precisely how the system must behave — very different audiences and levels of detail.',
            },
            {
              id: 'q2',
              question: 'What commonly goes wrong when a team writes FRD-level detail without an agreed BRD or PRD behind it?',
              options: [
                'Nothing — FRDs can always stand alone',
                'The team builds precise system behavior without having agreed on the business objective or product requirements it is meant to serve, so that question gets answered implicitly and inconsistently later',
                'The FRD becomes legally invalid',
                'Engineers are unable to read FRDs without a BRD present',
              ],
              correctIndex: 1,
              explanation:
                'Each document answers a different question for a different audience — skipping the higher-altitude ones means the "why" and "what for" never get explicitly settled before implementation begins.',
            },
          ],
        },
        {
          id: 'requirements-elicitation-techniques',
          title: 'Requirements Elicitation Techniques',
          summary:
            'People are far better at reacting to something concrete than describing what they need from a blank page.',
          content: [
            'Stakeholder interviews are the most common elicitation technique, and their biggest risk is asking leading or overly abstract questions — "what do you need from this system" tends to produce vague, aspirational answers, while "walk me through the last time you tried to do this task" surfaces the actual, specific friction someone experienced, grounded in a real memory rather than a hypothetical wish list.',
            'Workshops (sometimes run as facilitated requirements-gathering sessions or event-storming sessions) bring multiple stakeholders into the same room specifically to surface disagreements early — a requirement that sounds settled in separate one-on-one interviews sometimes turns out to be understood completely differently by two different stakeholders, and a workshop is where that mismatch becomes visible before it gets built into conflicting assumptions in two different parts of the system.',
            'Observation (contextual inquiry, covered in more depth in UX Fundamentals\' research methods) elicits requirements people cannot articulate directly, because they have adapted around a problem so thoroughly they no longer consciously notice it — a workaround someone has been manually performing for years, invisible to them precisely because it has become routine, is exactly the kind of requirement an interview alone will not surface but watching the actual work will.',
            'Document analysis — reviewing existing process documentation, old tickets, support logs, and prior specs — grounds elicitation in what has actually happened rather than only what people currently say happens, and it frequently surfaces a gap between the two: a documented process that no one actually follows anymore, or a workaround that has quietly become the real process without ever being written down. Combining multiple elicitation techniques catches more real requirements than relying on any single one, because each technique is blind to a different kind of gap.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why does "walk me through the last time you tried to do this task" tend to surface better requirements than "what do you need from this system"?',
              options: [
                'It is a shorter question to ask',
                'It grounds the answer in a specific, real memory of actual friction, rather than inviting a vague, aspirational wish list',
                'It requires less preparation from the interviewer',
                'It is the only question format allowed in formal requirements interviews',
              ],
              correctIndex: 1,
              explanation:
                'Asking about a real, concrete instance surfaces actual pain points; an abstract "what do you need" question tends to produce idealized, less specific answers.',
            },
            {
              id: 'q2',
              question: 'Why is observation (contextual inquiry) sometimes able to surface requirements that a stakeholder interview cannot?',
              options: [
                'Because interviews are always inaccurate',
                'Because people adapt around long-standing problems so thoroughly that they no longer consciously notice the workaround, so they cannot describe it in an interview even when asked directly',
                'Because observation is faster to conduct than an interview',
                'Because interviews cannot be recorded for later analysis',
              ],
              correctIndex: 1,
              explanation:
                'A workaround that has become routine is often invisible to the person doing it — watching the actual work surfaces it in a way a direct question, however well-phrased, may not.',
            },
          ],
        },
      ],
    },
    {
      id: 'capturing-requirements',
      title: 'Capturing Requirements',
      steps: [
        {
          id: 'user-stories-vs-formal-requirements',
          title: 'User Stories vs Formal Requirements',
          summary:
            'A user story captures intent and value; a formal requirement captures a specific, verifiable system obligation — both are usually needed.',
          content: [
            'A user story follows the familiar template "as a [role], I want [goal], so that [benefit]" and is deliberately lightweight, meant to spark a conversation rather than fully specify a solution — its value is in centering the user\'s goal and the reason behind it, which keeps a team from optimizing a feature that technically satisfies a request while missing the actual underlying need the request was trying to solve.',
            'A formal requirement is typically written as a "shall" or "must" statement — "the system must lock an account after five failed login attempts within ten minutes" — precise, testable, and free of ambiguity about what "done" means, which is exactly what a user story is not designed to be. A team relying only on user stories for anything with strict compliance, security, or regulatory obligations behind it usually discovers the gap the hard way, in an audit or an incident.',
            'The two are not competitors — many real projects use user stories to drive prioritization and keep design and conversation centered on user value, while a smaller set of formal, testable requirements captures the non-negotiable, verifiable constraints (security, compliance, specific performance thresholds) that a lightweight story format is not built to express precisely. Choosing one exclusively over the other for an entire project usually leaves a real gap for whichever kind of requirement was left out.',
            'Regardless of format, every requirement should be traceable back to the business objective it serves (a discipline covered later in this subject as a traceability matrix) — a formal requirement with no stated purpose is as hard to prioritize or safely cut later as a user story with no clear benefit clause, because in both cases no one can tell, months later, whether the requirement is still relevant to the current business priorities.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why is a formal "shall" statement generally better suited than a user story for a security or compliance requirement?',
              options: [
                'Because user stories cannot be written down',
                'Because a formal requirement is precise and testable about exactly what "done" means, which a lightweight user story — designed to spark conversation about user value — is not built to express with that level of unambiguous precision',
                'Because compliance requirements are never related to user needs',
                'Because user stories can only be used by agile teams',
              ],
              correctIndex: 1,
              explanation:
                'User stories intentionally leave room for conversation and design exploration; strict, verifiable obligations need the unambiguous, testable precision a formal requirement statement provides instead.',
            },
            {
              id: 'q2',
              question: 'Why does even a formal, testable requirement need to be traceable back to a business objective?',
              options: [
                'Because formal requirements are always audited by regulators',
                'Without a stated purpose, no one can tell later whether the requirement is still relevant to current priorities, making it just as hard to safely prioritize or cut as a user story with no clear benefit',
                'Because traceability is only relevant for user stories, not formal requirements',
                'It has no practical value; it is only a documentation formality',
              ],
              correctIndex: 1,
              explanation:
                'A requirement disconnected from its underlying reason for existing becomes difficult to evaluate months later — traceability is what preserves that reasoning over time.',
            },
          ],
        },
        {
          id: 'acceptance-criteria',
          title: 'Acceptance Criteria',
          summary:
            'Acceptance criteria turn a requirement into a specific, testable definition of done that everyone agreed to in advance.',
          content: [
            'Acceptance criteria are the specific, testable conditions a piece of work must satisfy to be considered complete, written and agreed before implementation starts — their entire value lies in resolving disagreement about "done" before the work is finished, rather than after, when a difference in expectation is far more expensive and contentious to resolve.',
            'The Given/When/Then format (from behavior-driven development) is a common structure: "Given a user has an item in their cart, when they apply an expired discount code, then the system displays an error and does not apply the discount" — the format\'s value is forcing a specific precondition, action, and expected outcome to be named explicitly, rather than leaving any of the three implicit and open to interpretation.',
            'Good acceptance criteria cover edge cases and failure states, not only the happy path — a requirement with acceptance criteria only for successful login and none for an incorrect password, a locked account, or a network timeout has quietly left the actual behavior in those cases to be improvised by whoever implements it, usually inconsistently with how a similar edge case was handled elsewhere in the same system.',
            'Acceptance criteria belong to the requirement, not to a specific test case written by QA later — writing them collaboratively with product, design, and engineering before work starts (rather than having QA reverse-engineer them from a finished feature to figure out what to test) is what actually prevents the ambiguity acceptance criteria exist to resolve, since a criteria set invented after the fact just formalizes whatever got built rather than checking it against what was intended.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is the primary value of writing acceptance criteria before implementation starts, rather than after?',
              options: [
                'It makes the requirements document longer',
                'It resolves disagreement about what "done" means before the work is finished, when a mismatch in expectation is far cheaper to fix than after implementation',
                'It is required by most agile certification frameworks',
                'It has no real timing benefit either way',
              ],
              correctIndex: 1,
              explanation:
                'Settling the definition of done in advance avoids costly, contentious rework discovered only after the feature is built and expectations turn out to have diverged.',
            },
            {
              id: 'q2',
              question: 'Why should acceptance criteria explicitly cover edge cases and failure states, not just the happy path?',
              options: [
                'Edge cases are more visually interesting to design',
                "Without explicit criteria for edge cases (like a locked account or expired code), that behavior gets improvised by whoever implements it, often inconsistently with how similar cases are handled elsewhere in the system",
                'QA teams refuse to test features without edge-case criteria',
                'Edge cases are technically impossible to specify in advance',
              ],
              correctIndex: 1,
              explanation:
                'Leaving edge-case behavior unspecified hands the decision to implementation, which produces inconsistent, unplanned behavior instead of a deliberate, agreed-upon outcome.',
            },
          ],
        },
      ],
    },
    {
      id: 'prioritizing-and-tracing',
      title: 'Prioritizing & Tracing',
      steps: [
        {
          id: 'moscow-prioritization',
          title: 'MoSCoW Prioritization',
          summary:
            'Must, Should, Could, Won\'t — a fast way to scope a single release when a full numeric scoring framework is more than the moment needs.',
          content: [
            'MoSCoW sorts requirements into four categories for a specific release or phase: Must have (the release is not viable without it — often driven by legal, safety, or core-functionality necessity), Should have (important, painful to omit, but the release can technically function without it), Could have (desirable, included only if time and resources allow after Musts and Shoulds are secured), and Won\'t have this time (explicitly deprioritized for this phase, not rejected forever — an important distinction that keeps the conversation from feeling like a permanent no).',
            'The framework\'s discipline comes from a specific constraint: Must haves alone should never be allowed to consume the entire available budget or timeline, because that leaves no room for the Shoulds and Coulds that make a release actually good rather than merely functional — a common practical guideline caps Must haves at roughly 60% of total effort, forcing genuine prioritization discipline rather than everything being quietly labeled a Must to guarantee its inclusion.',
            'MoSCoW is weaker than RICE (covered in Product Management) at ranking a large backlog against each other with any precision, because its four buckets are coarse and do not produce a fine-grained order within a bucket — its actual strength is speed and clarity for scoping a single, time-boxed release, where a full numeric scoring exercise would cost more time than the decision warrants.',
            'The most common failure mode is category inflation — stakeholders labeling their own preferred requirement a Must have regardless of whether the release genuinely fails without it, which collapses the framework back into an undifferentiated list. Defining "Must have" concretely in advance ("the release cannot legally ship, or a core workflow is completely broken, without this") and holding that definition firmly against pressure is what keeps the categories meaningful.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why does a common MoSCoW guideline cap "Must have" requirements at roughly 60% of total effort?',
              options: [
                'Because 60% is a legal requirement',
                'To leave real room for Should haves and Could haves that make a release genuinely good, rather than allowing Must haves alone to consume the entire available budget',
                'Because Must haves are always less important than Should haves',
                'Because MoSCoW cannot function with more than 60% Must haves in any circumstance',
              ],
              correctIndex: 1,
              explanation:
                'Without a cap, there is pressure to expand the Must-have bucket until it consumes everything, defeating the purpose of having Should and Could categories at all.',
            },
            {
              id: 'q2',
              question: "What is MoSCoW's main weakness compared to a scoring framework like RICE?",
              options: [
                'It takes longer to apply than RICE',
                "Its four buckets are coarse and don't produce a fine-grained order within a bucket, making it weaker for ranking a large backlog with precision, though faster and clearer for scoping a single release",
                'It cannot be used for software projects',
                'It requires specialized software to apply',
              ],
              correctIndex: 1,
              explanation:
                'MoSCoW trades ranking precision for speed and simplicity — well suited to scoping one release quickly, less suited to precisely ordering a large, varied backlog.',
            },
          ],
        },
        {
          id: 'requirements-traceability-matrix',
          title: 'Requirements Traceability Matrix',
          summary:
            'A traceability matrix links every requirement back to its business justification and forward to its test — so nothing gets silently lost.',
          content: [
            'A requirements traceability matrix (RTM) is a table linking each requirement to where it came from (the business objective or stakeholder need that justified it) and to where it is verified (the specific test case or acceptance criteria that confirms it was built correctly) — its purpose is making sure nothing gets silently dropped as a project moves from business case to requirements to implementation to testing, across however many people and documents that chain of translation passes through.',
            'Forward traceability (business need → requirement → test case) answers "did we build and verify everything we said we would," while backward traceability (test case → requirement → business need) answers a different and equally important question: "why does this piece of the system exist at all," which matters enormously when a team is deciding whether an old, undocumented feature can be safely removed without breaking something a forgotten stakeholder still depends on.',
            'An RTM earns its cost most visibly during scope changes — when a stakeholder asks to modify or remove a specific requirement, tracing it shows every downstream test case and system component affected, preventing a change that looks small and isolated in the requirements document from silently breaking something several layers removed that no one thought to check. Without that trace, impact analysis for a change request becomes a matter of institutional memory and hoping someone remembers all the dependencies.',
            'Maintaining an RTM has a real, ongoing cost, which means it is usually reserved for projects where the cost of losing a requirement is genuinely high — regulated industries, safety-critical systems, large multi-team efforts with long timelines — rather than applied uniformly to every project regardless of scale, where the traceability overhead would exceed the risk it is protecting against.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What question does backward traceability (test case → requirement → business need) answer that forward traceability does not?',
              options: [
                'Whether the project is on schedule',
                'Why a given piece of the system exists at all — important when deciding whether an old, undocumented feature can be safely removed',
                'How much the project costs',
                'Backward traceability answers exactly the same question as forward traceability',
              ],
              correctIndex: 1,
              explanation:
                "Tracing backward from an existing system component to its original justification reveals whether it's still needed, which matters heavily before removing anything undocumented.",
            },
            {
              id: 'q2',
              question: 'When does a requirements traceability matrix earn its maintenance cost most clearly?',
              options: [
                'On every project regardless of size or risk',
                'During scope changes — tracing a requirement shows every downstream test case and component affected, preventing a seemingly small change from silently breaking something several layers removed',
                'Only at the very start of a project, before any requirements are written',
                'It never earns its cost and should be avoided',
              ],
              correctIndex: 1,
              explanation:
                'Change-impact analysis is where an RTM\'s value is most visible — without it, understanding the full blast radius of a change request depends on institutional memory instead of a documented trace.',
            },
          ],
        },
      ],
    },
    {
      id: 'managing-change',
      title: 'Managing Change',
      steps: [
        {
          id: 'handling-changing-and-conflicting-requirements',
          title: 'Handling Changing & Conflicting Requirements',
          summary:
            'Requirements change because the business context changes — the discipline is in how the change is evaluated and communicated, not in preventing it.',
          content: [
            'Requirements changing mid-project is normal, not a sign of failed analysis — markets shift, a competitor ships something that changes the calculus, a stakeholder learns something new, and pretending requirements should stay frozen once written treats analysis as a one-time event instead of an ongoing discipline. What separates well-managed change from chaos is not whether requirements change, but whether every change goes through a visible, consistent process rather than being absorbed silently and unevenly depending on who asked and how forcefully.',
            'A change control process typically requires: a written change request stating the specific requirement affected and the reason, an impact analysis (using the traceability matrix from the previous step to identify what else is affected), and a decision from whoever has the authority to approve it — often the same accountable owner named in a RACI matrix (covered in Product Management\'s stakeholder alignment step). Skipping impact analysis is the most common shortcut under time pressure, and it is exactly the step that prevents a small-looking change from having consequences no one anticipated.',
            'Conflicting requirements — two stakeholders wanting genuinely incompatible things — need to be surfaced and resolved explicitly rather than quietly split the difference on, which usually satisfies neither party fully while looking, on paper, like a fair compromise. Naming the conflict directly ("Sales wants X, Support wants Y, these cannot both be true, here is the tradeoff, who decides") is uncomfortable but far more useful than a compromise that leaves both stated needs half-met and the actual underlying disagreement unresolved.',
            'Every approved change should update the requirements documentation and the traceability matrix immediately, not "eventually" — documentation that lags behind the actual current requirements becomes actively misleading rather than merely incomplete, because a team member trusting an outdated document is worse off than one who knows the document is stale and asks before relying on it.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What actually distinguishes well-managed requirement change from chaos?',
              options: [
                'Whether requirements change at all during a project',
                'Whether every change goes through a visible, consistent process (request, impact analysis, an accountable decision-maker) rather than being absorbed silently and unevenly',
                'How many stakeholders are involved in the project',
                'Whether the project uses agile or waterfall methodology',
              ],
              correctIndex: 1,
              explanation:
                'Change itself is normal and expected — the risk comes from inconsistent, undocumented handling of that change, not from the fact that requirements evolved.',
            },
            {
              id: 'q2',
              question: 'Why is quietly "splitting the difference" on genuinely conflicting stakeholder requirements usually a poor resolution?',
              options: [
                'Because compromises are never allowed in requirements analysis',
                'It typically satisfies neither party fully while looking fair on paper, leaving the actual underlying disagreement unresolved rather than surfaced and explicitly decided',
                'Because it takes longer than naming the conflict directly',
                'It has no real downside compared to naming the conflict explicitly',
              ],
              correctIndex: 1,
              explanation:
                'A genuine either/or tradeoff needs an explicit decision from an accountable owner — an unacknowledged compromise just defers the same disagreement to resurface later.',
            },
          ],
        },
        {
          id: 'sign-off-and-scope-control',
          title: 'Sign-off & Scope Control',
          summary:
            'Formal sign-off exists to convert an informal understanding into a documented commitment everyone can be held to.',
          content: [
            'Sign-off is the formal act of a stakeholder confirming, in writing, that a requirements document accurately reflects what they need — its value is converting an informal, easily-misremembered verbal understanding into a specific, documented commitment that can be referred back to later, especially useful months afterward when a stakeholder\'s memory of what they agreed to has understandably drifted from what is actually written down.',
            'Sign-off should happen at defined checkpoints, not only once at the very end of a requirements process — signing off the BRD before starting the PRD, and the PRD before starting detailed FRD work, catches a fundamental misunderstanding early, while it is still cheap to correct, rather than only at the end when a stakeholder reviewing a finished product for the first time discovers the team solved a different problem than the one they meant.',
            'Scope creep — small, individually reasonable-seeming additions that accumulate into a project quietly exceeding its original approved scope — is best controlled by treating every addition as a change request subject to the same process from the previous step, including impact analysis and an explicit approval, rather than as an informal favor granted verbally in a hallway conversation that never gets documented anywhere.',
            'Scope control is not the same as rigidly refusing every change — a good process approves genuinely valuable changes quickly and transparently while still requiring them to go through the same visible process as everything else, so that a "yes" to a new request is a deliberate, informed decision rather than scope quietly expanding because saying yes informally felt easier in the moment than raising the conversation formally.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why is formal sign-off valuable, beyond being a bureaucratic step?',
              options: [
                'It has no real value beyond ceremony',
                "It converts an informal, easily-misremembered verbal understanding into a specific documented commitment that can be referred back to later, when memory of the original agreement has drifted",
                'It is only useful for legal liability, never for actual project clarity',
                'It replaces the need for a requirements document entirely',
              ],
              correctIndex: 1,
              explanation:
                'A written, confirmed record protects against the natural drift in how people remember an agreement, giving everyone something concrete to check disagreements against later.',
            },
            {
              id: 'q2',
              question: 'What is the recommended way to control scope creep?',
              options: [
                'Refuse every requested change after the requirements are signed off',
                'Treat every addition as a change request subject to the same process (impact analysis, explicit approval) as any other requirement change, rather than granting informal, undocumented favors',
                'Only allow scope changes if requested by the most senior stakeholder',
                'Scope creep cannot be controlled and should be accepted as inevitable',
              ],
              correctIndex: 1,
              explanation:
                'Consistently routing every addition through the same visible process keeps expansion deliberate and tracked, rather than allowing it to accumulate quietly through informal, undocumented agreements.',
            },
          ],
        },
      ],
    },
    {
      id: 'validation',
      title: 'Validation',
      steps: [
        {
          id: 'stakeholder-workshops-and-interviews',
          title: 'Stakeholder Workshops & Interviews',
          summary:
            'Validating requirements with the people who will actually use or be accountable for the system is what catches a wrong assumption before it is built.',
          content: [
            'Requirements validation is a distinct activity from requirements elicitation — elicitation gathers what people say they need; validation checks whether what was written down actually reflects that need accurately, ideally by walking a stakeholder through the documented requirements in their own words and having them confirm or correct the analyst\'s understanding, rather than assuming a document read silently and approved without discussion has actually been understood the same way by everyone.',
            'A validation workshop works best structured around walkthroughs of specific scenarios rather than an abstract read-through of the document — asking a stakeholder to react to "here is what happens when you try to do X" surfaces a wrong assumption far more reliably than asking "does this document look correct to you," which tends to produce a polite, low-effort yes even when something in it is actually off.',
            'Including a representative of every distinct user group in validation, not only the loudest or most senior stakeholder in the room, matters because requirements gathered from a single dominant voice tend to reflect that person\'s specific workflow and priorities, silently underrepresenting a different group\'s genuinely different needs — a requirement validated only by management may look complete and still miss something the actual front-line users of the system would have caught immediately.',
            'Validation should happen before, not after, a requirement is built — validating a finished feature is really acceptance testing wearing validation\'s name, and by that point a fundamental misunderstanding is far more expensive to fix than it would have been at the requirements stage, which is exactly why sign-off checkpoints (from the previous step) are placed before implementation begins, not after.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is the key difference between requirements elicitation and requirements validation?',
              options: [
                'They are the same activity, just performed by different roles',
                'Elicitation gathers what people say they need; validation checks whether what was written down actually reflects that need accurately, ideally through a walkthrough rather than a silent document read',
                'Validation only applies to formal requirements, never to user stories',
                'Elicitation happens after implementation, validation happens before',
              ],
              correctIndex: 1,
              explanation:
                'Elicitation is the gathering step; validation is the confirmation step — conflating them risks approving a document that was never actually checked for accuracy against real understanding.',
            },
            {
              id: 'q2',
              question: 'Why is a scenario walkthrough ("here is what happens when you try to do X") a better validation technique than asking "does this document look correct?"',
              options: [
                'Walkthroughs take less time to prepare',
                'A direct read-through tends to produce a polite, low-effort yes even when something is actually wrong, while reacting to a concrete scenario surfaces a mistaken assumption far more reliably',
                'Document review is not allowed in most validation processes',
                'There is no meaningful difference between the two approaches',
              ],
              correctIndex: 1,
              explanation:
                'A concrete scenario forces genuine engagement and often reveals a stakeholder disagreeing with a specific detail they would have silently nodded past in an abstract document review.',
            },
          ],
        },
        {
          id: 'requirements-validation-and-review',
          title: 'Requirements Validation & Review',
          summary:
            'A formal review pass — checking for completeness, consistency, and testability — catches structural problems a single reader will miss.',
          content: [
            'A requirements review is a structured quality check applied to the requirements document itself, independent of whether any individual stakeholder has validated their own specific piece — checking the set as a whole for completeness (are there gaps a single stakeholder walkthrough would not surface, because no one\'s specific area of expertise happened to cover that gap), consistency (do two requirements contradict each other, which is easy to miss when they were gathered from different stakeholders in separate sessions), and testability (can each requirement actually be verified, or is it phrased so vaguely that no one could design a test to confirm it was met).',
            'A checklist-based review — walking every requirement through the same fixed set of quality questions (Is it unambiguous? Is it testable? Does it trace to a business need? Is it free of implementation detail that belongs in a lower-altitude document?) — catches a different class of problem than stakeholder validation does, because a reviewer applying a consistent checklist notices structural issues (vague wording, missing traceability, an implicit assumption) that a stakeholder focused on their own domain\'s content is less likely to flag.',
            'Peer review — a second analyst reviewing requirements they did not write — catches the specific blind spot of the original author\'s own assumptions, the same way a second pair of eyes catches typos an author reliably misses in their own writing; an analyst who conducted the original interviews already has a mental model of what the stakeholder meant, which makes it easy to read past an actual ambiguity in the document because the analyst\'s own memory quietly fills the gap the document itself does not.',
            'Combining a structured checklist review, a peer review, and stakeholder validation catches more of the possible failure modes than any single technique alone — each is blind to a different kind of problem, and requirements that pass all three have been checked from the perspective of quality structure, an independent second reader, and the actual person whose need is being represented.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What kind of problem does a checklist-based requirements review typically catch that stakeholder validation alone might miss?',
              options: [
                'Whether the stakeholder likes the proposed solution',
                'Structural issues like vague or untestable wording, missing traceability, or implementation detail that belongs elsewhere — things a stakeholder focused on their own domain content is less likely to flag',
                'Whether the project is within budget',
                'Whether the requirements document uses the correct file format',
              ],
              correctIndex: 1,
              explanation:
                'A consistent, structure-focused checklist surfaces quality problems in how a requirement is written, independent of whether its content matches any one stakeholder\'s domain expertise.',
            },
            {
              id: 'q2',
              question: 'Why is peer review by a second analyst (who did not conduct the original interviews) valuable specifically?',
              options: [
                'Because the original analyst is not allowed to review their own work under any circumstances',
                "The original analyst's own memory of what a stakeholder meant can quietly fill gaps in the document, making an actual ambiguity easy to read past — a second reader without that memory is more likely to catch it",
                'Peer review is only useful for catching spelling errors',
                'It has no real added value beyond the checklist review',
              ],
              correctIndex: 1,
              explanation:
                "The original author's context can mask genuine ambiguity in the written document — someone reading it fresh, without that same mental shortcut, is better positioned to catch what is actually missing or unclear.",
            },
          ],
        },
      ],
    },
  ],
};
