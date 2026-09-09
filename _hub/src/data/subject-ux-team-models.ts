import type { Subject } from '../types';

/**
 * "UX Team Models" — the structural side of design leadership: how design
 * teams are organized relative to product and engineering, DesignOps,
 * staffing ratios, maturity models, and how team structure changes as an
 * organization scales. Cross-links into UX Leadership for the cultural side
 * of the same problems.
 */
export const subject: Subject = {
  id: 'ux-team-models',
  title: 'UX Team Models',
  description:
    'How design teams are structured relative to product and engineering — centralized vs embedded models, DesignOps, staffing ratios, maturity models, and scaling through growth.',
  icon: '🧩',
  color: '#E76F51',
  levels: [
    {
      id: 'team-structures',
      title: 'Team Structures',
      steps: [
        {
          id: 'centralized-vs-decentralized-models',
          title: 'Centralized vs Decentralized Models',
          summary:
            'Where designers report and who they sit closest to determines what kind of consistency and speed a design org can realistically deliver.',
          content: [
            'A centralized model groups all designers under one design leader, usually physically or organizationally separate from the product teams they support, staffed onto projects as needed. Its strength is consistency — a single design language, shared standards, and easy cross-pollination of practice, because every designer reports into the same leadership and reviews work against the same bar regardless of which product team they are currently helping.',
            'A decentralized model embeds designers directly inside product or engineering teams, reporting to that team\'s (often non-design) leadership. Its strength is speed and context — an embedded designer builds deep product knowledge, sits in the same daily standups as their engineering partners, and does not need to be "staffed onto" a request the way a centralized designer often does, which removes a common source of friction and delay.',
            'The tradeoff is close to inverse: centralized teams risk becoming a bottleneck (every team wants design time, and one central team cannot serve all of them at once) and can feel disconnected from the day-to-day urgency of any single product team; decentralized teams risk visual and pattern inconsistency across the product, since each embedded designer optimizes for their own team\'s velocity with less structural incentive to coordinate with designers on other teams solving similar problems differently.',
            'Neither model is universally correct — the right choice depends on company size, how many product surfaces need distinct design attention, and how much consistency actually matters for the specific product (a suite of loosely related tools tolerates decentralization better than a single, tightly integrated product experience does). This tradeoff is exactly why a third model, covered next, exists.',
          ],
          quiz: [
            {
              id: 'q1',
              question: "What is the main strength of a centralized design model?",
              options: [
                'Designers build the deepest possible knowledge of one specific product',
                'Consistency — a single design language and shared standards are easier to maintain when every designer reports into the same leadership and reviews against the same bar',
                'It always requires fewer designers overall',
                'It eliminates the need for design leadership entirely',
              ],
              correctIndex: 1,
              explanation:
                'Centralization trades some team-level speed and context for easier cross-product consistency, since every designer answers to the same standards and leadership.',
            },
            {
              id: 'q2',
              question: 'What risk is more common in a decentralized model than a centralized one?',
              options: [
                'Becoming a bottleneck that every team competes for time with',
                'Visual and pattern inconsistency across the product, since each embedded designer optimizes for their own team\'s velocity with less structural incentive to coordinate across teams',
                'Designers having too little product context',
                'Requiring more design leadership overhead',
              ],
              correctIndex: 1,
              explanation:
                'Embedding designers for speed and context trades away the built-in coordination a shared reporting line provides, which is what a centralized model is specifically better at preserving.',
            },
          ],
        },
        {
          id: 'embedded-and-matrix-models',
          title: 'Embedded & Matrix Models',
          summary:
            'A matrix model tries to keep the speed of embedding and the consistency of centralization by splitting reporting and daily work.',
          content: [
            'A matrix (or "hybrid") model splits two things that centralized and decentralized models bundle together: day-to-day work happens embedded inside a product team (attending that team\'s standups, working closely with its PM and engineers), while formal reporting and career development stay with a central design leadership function that sets standards, runs critique, and owns hiring and leveling across the whole org. This is the model most large product companies (Google, Spotify, Atlassian, among many others) converge toward once they scale past a size where either pure model\'s weaknesses become too costly.',
            'The matrix model\'s central promise is combining embedded designers\' product context and velocity with centralized designers\' consistency and shared craft standards — a "dual reporting" or "dotted line" structure where a designer\'s day-to-day priorities come from their embedded team while their growth, calibration, and design-quality bar come from central design leadership.',
            'The matrix model\'s real cost is coordination overhead and role ambiguity: a designer can end up genuinely unsure whose priorities take precedence when the embedded team\'s deadline pressure conflicts with central design leadership\'s quality bar, and resolving that ambiguity requires an explicit, agreed decision-making process (usually: product priorities decide what ships and when, design leadership decides the quality bar that must be met before it ships) rather than leaving it to be negotiated fresh every time it comes up.',
            'DesignOps, covered next, exists largely to manage exactly this coordination overhead systematically — the matrix model does not eliminate the tension between speed and consistency, it makes both goals simultaneously achievable, but only with deliberate operational support keeping the two reporting lines actually working together rather than quietly working against each other.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does a matrix model split, that centralized and decentralized models each bundle together?',
              options: [
                'Salary and title',
                'Day-to-day work (embedded with a product team) from formal reporting and career development (owned by central design leadership)',
                'Junior designers from senior designers',
                'Design tools from design process',
              ],
              correctIndex: 1,
              explanation:
                'The matrix model deliberately separates where daily priorities come from (the embedded team) from where craft standards, growth, and leveling come from (central design leadership).',
            },
            {
              id: 'q2',
              question: 'What is the real cost of a matrix model, compared to a pure centralized or decentralized approach?',
              options: [
                'It always requires more designers than either pure model',
                'Coordination overhead and role ambiguity — a designer can be genuinely unsure whose priorities take precedence when embedded-team deadlines conflict with central design-leadership quality standards',
                'It cannot support any consistency across products at all',
                'It eliminates the need for any design leadership',
              ],
              correctIndex: 1,
              explanation:
                'The dual-reporting structure that gives a matrix model its combined benefits also introduces a real tension that has to be explicitly managed, or it resolves itself inconsistently case by case.',
            },
          ],
        },
      ],
    },
    {
      id: 'design-operations',
      title: 'Design Operations',
      steps: [
        {
          id: 'what-is-designops',
          title: 'What Is DesignOps?',
          summary:
            'DesignOps removes the operational friction around design work so designers spend their time designing, not fighting logistics.',
          content: [
            'Design Operations (DesignOps) is the discipline of managing the people, process, and tools around a design team so that individual designers spend more of their time on design work itself and less on the logistics surrounding it — the same relationship DevOps has to software engineering, applied to design\'s specific bottlenecks: hiring and onboarding logistics, tooling and design-system maintenance, budget and vendor management, and running the operational side of critique, research recruiting, and design reviews.',
            'A common early symptom that a design org needs dedicated DesignOps is senior designers spending a large share of their week on tasks that do not require design judgment at all — scheduling and recruiting research participants, maintaining shared file libraries and design-system documentation, tracking freelance budgets, or manually coordinating handoff logistics between design and engineering. None of that work is beneath doing, but it is a poor use of a senior designer\'s specific, harder-to-replace expertise.',
            'DesignOps is a genuinely distinct role and skill set from design management — a design manager is responsible for the people (growth, feedback, career development, the domain covered in UX Leadership); a DesignOps role is responsible for the systems and processes that let those people work efficiently, and conflating the two often means whichever half gets more of a given leader\'s personal interest and time crowds out the other, to the team\'s detriment.',
            'Companies typically introduce a dedicated DesignOps role somewhere in the range of 15 to 20 designers, though the right trigger is really about accumulated operational pain — recurring scheduling conflicts, an unmaintained design system, or a hiring process that has become a bottleneck are more reliable signals than headcount alone that the investment is overdue.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is a common early symptom that a design org needs dedicated DesignOps support?',
              options: [
                'Designers are shipping too many features',
                'Senior designers are spending significant time on tasks that do not require design judgment — scheduling research participants, maintaining shared libraries, tracking freelance budgets — rather than on design work itself',
                'The team has too few open design roles',
                'Design critique sessions are running too quickly',
              ],
              correctIndex: 1,
              explanation:
                "That pattern signals that logistics are consuming expertise better spent on design judgment — exactly the friction DesignOps exists to absorb.",
            },
            {
              id: 'q2',
              question: 'How does a DesignOps role differ from a design management role?',
              options: [
                'They are the same role with different titles',
                'Design management owns the people — growth, feedback, career development; DesignOps owns the systems and processes that let those people work efficiently, like tooling, recruiting logistics, and design-system maintenance',
                'DesignOps only exists in engineering organizations, never in design',
                'Design management is a lower-seniority version of DesignOps',
              ],
              correctIndex: 1,
              explanation:
                'Conflating the two distinct responsibilities into one role or one person\'s attention tends to mean one half — usually the people side or the systems side — gets neglected.',
            },
          ],
        },
        {
          id: 'tooling-and-process-at-scale',
          title: 'Tooling & Process at Scale',
          summary:
            'Tooling and process decisions that work fine for five designers actively hurt a team of fifty if they are never revisited.',
          content: [
            'A design tool, file-naming convention, or handoff process chosen when a team was small is rarely evaluated again as the team grows, which means decisions optimized for five people coordinating informally in one channel are still in place, unexamined, for fifty people who actually need structured findability, permissions, and a governance process none of the original choices anticipated. Revisiting these choices deliberately at growth milestones, rather than only when something visibly breaks, is cheaper than the alternative.',
            'Design system governance is one of the clearest examples of process needing to change with scale: at five designers, a shared Slack channel and informal convention is enough to keep a component library coherent; at fifty, without an explicit contribution process (who can propose a new component, who reviews and approves it, how deprecation of an old pattern is communicated and enforced), the design system fragments into inconsistent, competing variants faster than any one person can track, let alone fix after the fact.',
            'Process at scale also means deciding, deliberately, what stays centralized versus what gets delegated — a single, org-wide critique format that worked well at fifteen designers usually cannot scale to two hundred without being restructured into smaller, team-level critiques with periodic cross-team showcases, because the value of a critique (deep engagement with the specific work shown) degrades once the room is too large for genuine participation from everyone present.',
            'The underlying discipline is treating tooling and process as something to be periodically re-evaluated against current team size and needs, not something decided once and left alone — a process audit timed to coincide with headcount milestones (a formal review roughly every time the design team meaningfully grows, rather than only in reaction to a visible breakdown) catches the gap before it becomes an emergency.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why does a design system that worked with informal governance at five designers often fragment at fifty?',
              options: [
                'Because larger teams inherently produce worse design work',
                'Without an explicit contribution and deprecation process, more designers proposing and modifying components leads to inconsistent, competing variants faster than informal convention alone can track',
                'Because design tools cannot support more than a small number of users',
                'It has nothing to do with team size and only depends on the specific tool chosen',
              ],
              correctIndex: 1,
              explanation:
                'Informal coordination scales poorly — what worked as a shared understanding among a few people becomes untraceable and inconsistent once many more people are contributing without a defined process.',
            },
            {
              id: 'q2',
              question: 'Why might a single org-wide critique format that worked at fifteen designers need restructuring at two hundred?',
              options: [
                'Larger critique sessions are always shorter',
                "Critique's value depends on genuine engagement with the specific work shown, which degrades once the room is too large for real participation from everyone present, usually requiring smaller team-level critiques instead",
                'Critique is not needed once a team reaches a certain size',
                'It has no real relationship to team size',
              ],
              correctIndex: 1,
              explanation:
                'A critique format is a process choice tied to group size — what enables deep, participatory feedback at one scale becomes a passive, low-value large meeting at another.',
            },
          ],
        },
      ],
    },
    {
      id: 'staffing',
      title: 'Staffing',
      steps: [
        {
          id: 'designer-to-engineer-ratios',
          title: 'Designer-to-Engineer Ratios',
          summary:
            'A commonly cited industry ratio is a useful sanity check, not a target to hit blindly regardless of context.',
          content: [
            'Industry benchmarks for designer-to-engineer ratios commonly cited across product organizations range roughly from 1:8 to 1:20, varying heavily by company stage, product complexity, and how much of the design work is genuinely novel versus applying an already-mature design system to well-understood patterns — a ratio in this range is a useful sanity check for whether a team is severely understaffed on design, but it is not a target to hit blindly independent of what the specific product actually needs.',
            'Product complexity and novelty push the appropriate ratio in opposite directions from what raw headcount alone would suggest: a team building genuinely novel interaction patterns with significant unsolved UX problems needs a richer design ratio than a team building the fortieth similar CRUD screen using an already-mature, well-documented design system, even if the two teams have an identical number of engineers.',
            'A ratio that is too design-heavy for the actual complexity of the work produces idle or under-utilized design capacity, sometimes masked by designers filling their time with lower-value polish work on parts of the product that did not actually need more design attention; a ratio that is too design-light produces the more visible and more commonly diagnosed failure mode — features shipping with rushed or absent design involvement, discovered too late to meaningfully influence the outcome rather than only its surface polish.',
            'Ratios should be revisited per product area rather than applied as one flat company-wide number — a growth or infrastructure-adjacent team genuinely may need less design ratio than a core, user-facing product surface does, and forcing identical ratios across meaningfully different kinds of work misallocates a genuinely scarce resource rather than protecting fairness between teams.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why should a company avoid treating a benchmark like a 1:10 designer-to-engineer ratio as a universal target?',
              options: [
                'Because the benchmark numbers are always inaccurate',
                'Because product complexity and novelty should push the appropriate ratio in different directions — a team solving genuinely novel UX problems needs a richer ratio than one applying a mature design system to well-understood patterns',
                'Because ratios only matter for very large companies',
                'Because engineers and designers should never be compared using ratios',
              ],
              correctIndex: 1,
              explanation:
                'A flat ratio ignores real differences in how much design judgment a given team\'s work actually requires — using it as a rigid target misallocates a scarce resource.',
            },
            {
              id: 'q2',
              question: 'What is a common, less visible failure mode of a design ratio that is too design-heavy for the work involved?',
              options: [
                'Features consistently shipping with no design involvement at all',
                'Idle or under-utilized design capacity, sometimes masked by designers filling time with lower-value polish on parts of the product that did not need more attention',
                'Engineers being forced to design their own interfaces',
                'The design system growing too large to maintain',
              ],
              correctIndex: 1,
              explanation:
                'Overstaffing relative to actual complexity does not always look like obvious idleness — it can hide as busywork on low-value refinement rather than a visibly empty schedule.',
            },
          ],
        },
        {
          id: 'staffing-models-through-growth',
          title: 'Staffing Models Through Growth',
          summary:
            'The right staffing approach at 5 designers, 30, and 150 are three genuinely different models, not the same model scaled up.',
          content: [
            'At a very early stage (roughly under ten designers), most organizations staff generalists who can move across research, interaction design, and visual design as needed, because the volume of work in any single specialty rarely justifies a dedicated specialist yet, and the flexibility to shift a small team\'s entire attention to whatever is most urgent matters more than depth in any one area.',
            'At a mid stage (roughly thirty to eighty designers), specialization starts to make sense — dedicated researchers, content designers, and design-system specialists emerge as distinct roles, because there is now enough volume of specialized work to justify someone focusing there full time, and the quality gap between a generalist doing research occasionally and a specialist who does nothing else becomes visible and costly to ignore.',
            'At a large stage (roughly over a hundred designers), staffing decisions increasingly happen per product area rather than as one company-wide policy — different product surfaces may reasonably run centralized, embedded, or matrix models simultaneously within the same overall organization, and central leadership\'s role shifts from directly staffing every team to setting a staffing framework that product-area leaders apply to their own specific context.',
            'A staffing model that made sense at one stage becoming a bottleneck at the next is a normal, expected part of growth, not evidence the original decision was wrong — treating staffing model as something to be deliberately revisited at each growth stage, the same discipline applied to tooling and process earlier in this subject, is what keeps the model matched to the organization\'s actual current size rather than its size when the model was first chosen.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why do early-stage design teams (under roughly ten designers) typically staff generalists rather than specialists?',
              options: [
                'Because specialists are always more expensive to hire',
                'Because the volume of work in any single specialty rarely justifies a dedicated role yet, and the flexibility to redirect a small team\'s full attention to whatever is most urgent matters more than depth in one area',
                'Because generalists produce higher-quality work than specialists',
                'Because early-stage companies are legally required to hire generalists first',
              ],
              correctIndex: 1,
              explanation:
                "At low volume, flexibility across the whole team outweighs the benefit of deep specialization in any single area that doesn't yet have enough dedicated work to fill a role.",
            },
            {
              id: 'q2',
              question: 'What does it mean that a staffing model becoming a bottleneck at the next growth stage is "normal" rather than a sign of a wrong original decision?',
              options: [
                'It means the original hiring decisions were always mistakes',
                'A model well-suited to one stage\'s scale is expected to need deliberate revisiting as the organization grows, the same way tooling and process choices need periodic re-evaluation — not evidence the earlier choice was flawed at the time',
                'It means staffing models never actually need to change',
                'It means only the CEO can make staffing decisions',
              ],
              correctIndex: 1,
              explanation:
                'A model can be genuinely correct for its original scale and still need deliberate updating as the organization grows past that scale — outgrowing a model is different from the model having been a mistake.',
            },
          ],
        },
      ],
    },
    {
      id: 'maturity',
      title: 'Maturity',
      steps: [
        {
          id: 'design-maturity-models',
          title: 'Design Maturity Models',
          summary:
            'A maturity model gives an organization a shared, staged language for how deeply design is actually integrated into decision-making.',
          content: [
            'Design maturity models (InVision\'s and the Nielsen Norman Group\'s versions are widely referenced) describe a staged progression an organization moves through, typically running from design as a purely visual, late-stage polish function, through design being consulted earlier in the process, to design and research directly informing strategy, to design being embedded in company-wide decision-making at the executive level alongside product and engineering as equal partners in setting direction.',
            'A maturity model\'s primary use is diagnostic and conversational, not a scorecard to win — its value is giving an organization a shared, staged vocabulary for a conversation like "we are currently at the stage where design is consulted after key decisions are made; getting to the next stage means design needs a seat in strategy conversations before those decisions are finalized," rather than a vague, unfalsifiable complaint that "design isn\'t valued enough here."',
            'Maturity is not simply a function of company size or design headcount — a small, early-stage company with a founder who deeply values design from day one can operate at a more mature stage than a much larger company with hundreds of designers who are still only ever consulted after product and engineering have already decided the roadmap; maturity is about how design decision-making authority is actually distributed, not how many designers exist.',
            'Movement up a maturity model usually requires evidence, not persuasion alone — design demonstrating attributable impact on business outcomes (the ROI work covered in UX Leadership) is typically what earns design an earlier seat at the strategy table, since asking for greater influence without first demonstrating impact at the current level of influence rarely succeeds regardless of how reasonable the underlying argument is.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is the primary practical use of a design maturity model inside an organization?',
              options: [
                'To rank the organization publicly against competitors',
                'To give the organization a shared, staged vocabulary for diagnosing where design currently sits in decision-making and what specifically needs to change to move to the next stage',
                'To determine individual designer salaries',
                'To replace the need for a career ladder',
              ],
              correctIndex: 1,
              explanation:
                'A maturity model\'s value is turning a vague complaint ("design isn\'t valued enough") into a specific, staged diagnosis the organization can act on.',
            },
            {
              id: 'q2',
              question: "Why might a small, early-stage company outrank a much larger one on a design maturity model?",
              options: [
                'Maturity models only apply to companies under a certain size',
                'Maturity reflects how design decision-making authority is actually distributed, not company size or design headcount — a founder who values design from day one can create a more mature environment than a large team that is still only consulted after decisions are made',
                'Larger companies are always more design-mature by definition',
                'It is not possible for a smaller company to rank higher',
              ],
              correctIndex: 1,
              explanation:
                'Maturity is about where design sits in the decision-making process, which a founder\'s early, deliberate choices can establish regardless of how many designers the company eventually employs.',
            },
          ],
        },
        {
          id: 'measuring-team-health',
          title: 'Measuring Team Health',
          summary:
            'Team health metrics catch structural and cultural problems before they show up as attrition or missed deadlines.',
          content: [
            'Team health is typically tracked through a combination of quantitative signals (attrition rate, time-to-fill open roles, internal promotion rate, engagement survey scores) and qualitative signals (regular skip-level conversations, retrospective themes, informal feedback gathered outside of formal review cycles) — relying on either category alone misses what the other is specifically built to catch, since quantitative metrics are lagging (they show a problem after it has already caused someone to act) while qualitative signals can catch a brewing problem earlier, before it shows up in a number.',
            'Attrition rate deserves particular care in interpretation — a moderate amount of attrition is normal and even healthy in a growing organization, but attrition heavily concentrated among high performers, or concentrated on one specific team or under one specific manager, is a much stronger and more specific signal than an aggregate company-wide number, which can look perfectly fine while masking a serious, localized problem.',
            'Internal promotion rate and the actual usage of a career ladder (covered in UX Leadership) is a useful, underused team-health signal — a design org where very few people are ever promoted from within, despite an apparently well-defined ladder existing on paper, often indicates the ladder is not actually being used as an operational tool, whatever its stated intentions, but instead sitting unused as a document.',
            'Team health data is most useful when tracked over time and compared against a team\'s own history, rather than only benchmarked against other companies\' aggregate numbers — a slow, gradual decline in engagement scores over several quarters is a meaningful trend worth investigating even if the absolute number still looks acceptable next to an industry average, since industry averages say nothing about whether this specific team is trending in a concerning direction.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why should team health be tracked with both quantitative and qualitative signals, rather than either alone?',
              options: [
                'Quantitative signals are always more accurate than qualitative ones',
                'Quantitative metrics tend to be lagging indicators that show a problem after it has already caused someone to act, while qualitative signals can catch a brewing problem earlier',
                'Qualitative signals are required by law in most jurisdictions',
                'There is no real difference between what each type of signal reveals',
              ],
              correctIndex: 1,
              explanation:
                'Each type of signal is blind to something the other catches — combining them closes gaps that either approach alone would miss.',
            },
            {
              id: 'q2',
              question: 'Why is attrition concentrated among high performers, or on one specific team, a stronger signal than an aggregate company-wide attrition number?',
              options: [
                'Because aggregate numbers are always fabricated',
                'A moderate aggregate attrition rate can look perfectly acceptable while masking a serious, localized problem concentrated in one team or among a specific group, which the aggregate number does not reveal',
                'Because high performers never leave for legitimate reasons',
                'Aggregate attrition numbers are not tracked by most organizations',
              ],
              correctIndex: 1,
              explanation:
                'A healthy-looking overall number can hide a real, specific problem — disaggregating attrition by team, manager, or performance level surfaces issues an aggregate figure would smooth over.',
            },
          ],
        },
      ],
    },
    {
      id: 'scaling',
      title: 'Scaling',
      steps: [
        {
          id: 'scaling-a-design-team',
          title: 'Scaling a Design Team',
          summary:
            'Scaling a design team is a series of deliberate structural decisions, not simply hiring the same role over and over.',
          content: [
            'Scaling a design team well means anticipating structural transitions before they become painful — the transition from generalists to specialists, from a single flat team to a team with sub-leads, from one shared critique to team-level critiques, each covered earlier in this subject, does not happen automatically at the right moment; it requires a leader to notice the current structure straining and act before the strain becomes acute rather than reactively cleaning up after a period of visible dysfunction.',
            'A common scaling mistake is hiring reactively, backfilling exactly the same role that just left rather than reassessing what the team\'s current and near-future needs actually are — a team scaling from twenty to forty designers has a fundamentally different set of needs (new manager layers, dedicated DesignOps, specialist roles that did not exist before) than the same team simply doing twice as much of exactly what it was already doing.',
            'Communication structures need explicit redesign at scale, not just team structures — an all-hands design meeting that worked well for informing thirty people does not scale to three hundred without becoming a passive broadcast rather than a genuine two-way conversation, and preserving any real two-way communication at that size usually requires deliberately layered structures: team-level discussions feeding into function-wide syncs, with the all-hands reserved for company-wide context rather than the primary channel for two-way dialogue it used to be able to serve at a smaller size.',
            'Scaling successfully preserves what actually made the smaller team effective (which is rarely its literal size, and almost always something like fast decision-making, high trust, or tight design-engineering collaboration) while deliberately changing the structures that cannot survive unchanged at a larger size — the goal of scaling well is not nostalgically trying to preserve the small-team feeling forever, but correctly identifying which specific parts of it were actually load-bearing and protecting those on purpose as everything else necessarily changes around them.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is a common mistake when scaling a design team\'s hiring?',
              options: [
                'Hiring too many senior designers relative to junior ones',
                'Hiring reactively — backfilling exactly the same role that just left — rather than reassessing what the team\'s current and near-future needs actually require, like new manager layers or specialist roles',
                'Only hiring designers with prior experience at large companies',
                'Hiring is never actually a scaling concern for design teams',
              ],
              correctIndex: 1,
              explanation:
                'A team at a larger scale typically needs a different mix of roles than it did before, not simply more of exactly what it already had — reactive backfilling misses that shift.',
            },
            {
              id: 'q2',
              question: 'What is the actual goal of scaling a design team well, according to this material?',
              options: [
                'Preserving the exact same team size and structure indefinitely',
                'Correctly identifying which specific qualities of the smaller team were actually load-bearing (like fast decisions or tight design-engineering trust) and deliberately protecting those, while changing the structures that cannot survive unchanged at a larger size',
                'Making every team as large as possible as quickly as possible',
                'Avoiding any structural change for as long as possible',
              ],
              correctIndex: 1,
              explanation:
                'Scaling well is selective — it identifies what actually made the smaller team work and protects that specifically, rather than either changing everything indiscriminately or resisting all change out of nostalgia.',
            },
          ],
        },
        {
          id: 'cross-functional-squads',
          title: 'Cross-Functional Squads',
          summary:
            'The squad model, popularized by Spotify, organizes around a durable mission rather than a temporary project.',
          content: [
            'The squad model, widely associated with (and originally described by) Spotify, organizes a small, autonomous, cross-functional team — typically including a designer, a handful of engineers, and a product manager — around a specific, durable mission (e.g. "search and discovery" or "onboarding") rather than around a temporary project with a defined end date. The distinction matters: a project-based team disbands once its project ships, losing all the context and working relationships it built along the way; a mission-based squad persists and keeps deepening its expertise in one area over time.',
            'Squads are intended to operate with a high degree of autonomy — deciding much of their own roadmap within their mission\'s scope, choosing their own working process, and moving without needing to route every decision through central approval — which is what gives the model its speed. That autonomy is bounded, not unlimited: squads still operate within company-wide strategy, shared design and technical standards, and enough cross-squad coordination to prevent each one from quietly reinventing patterns other squads have already solved.',
            'A single designer embedded in a squad faces a version of the isolation risk described earlier as decentralization\'s weakness — without a deliberate practice of guilds or chapters (Spotify\'s own terms for cross-squad communities organized by discipline, where all designers across every squad meet regularly regardless of which squad they belong to day-to-day), a squad-embedded designer can drift out of sync with design practice happening in other squads, solving the same problem differently with no one noticing the duplication.',
            'The squad model is essentially the matrix model from earlier in this subject applied at the scale of an entire cross-functional team rather than just a single design role — squads get product-team-like embedding and speed, while guilds and chapters provide the centralized-model-like consistency and shared craft standards, which is why the underlying tension between speed and consistency covered throughout this subject shows up again here, just at a different organizational unit.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is the key structural difference between a mission-based squad and a project-based team?',
              options: [
                'Squads are always larger than project teams',
                "A squad is organized around a durable mission and persists over time, deepening expertise in one area, while a project-based team disbands once its specific project ships, losing the context it built",
                'Project-based teams never include designers',
                'There is no meaningful structural difference between the two',
              ],
              correctIndex: 1,
              explanation:
                'Persistence around a mission is what lets a squad build compounding expertise, whereas a project team\'s knowledge and relationships largely dissolve once the project concludes.',
            },
            {
              id: 'q2',
              question: 'What role do "guilds" or "chapters" play for a designer embedded in a squad?',
              options: [
                'They replace the need for a design manager entirely',
                'They provide a cross-squad community organized by discipline, keeping an embedded designer in sync with design practice elsewhere in the company and preventing the same problem from being solved differently by multiple squads unnoticed',
                'They determine which squad a designer is assigned to',
                'They exist only to manage design tooling licenses',
              ],
              correctIndex: 1,
              explanation:
                'Without a cross-squad discipline community, an embedded designer risks the same isolation and inconsistency risk described for decentralized models generally — guilds/chapters are the mechanism that counteracts it.',
            },
          ],
        },
      ],
    },
  ],
};
