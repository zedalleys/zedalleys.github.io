import type { Subject } from '../types';

/**
 * "Product Management" — the discipline of deciding what gets built and why,
 * for designers who need to operate fluently alongside a PM: vision and
 * strategy, prioritization frameworks, writing a PRD, roadmapping, stakeholder
 * alignment, MVP scoping, go-to-market basics, and the metrics that tell you
 * whether any of it worked. Cross-links into Business Requirement Analysis
 * and UX Team Models.
 */
export const productManagementSubject: Subject = {
  id: 'product-management',
  title: 'Product Management',
  description:
    'What gets built and why — vision and strategy, prioritization frameworks, writing a PRD, roadmapping, stakeholder alignment, and the metrics that tell you whether it worked.',
  icon: '🚀',
  color: '#E76F51',
  levels: [
    {
      id: 'vision-and-strategy',
      title: 'Vision & Strategy',
      steps: [
        {
          id: 'product-vision-and-strategy',
          title: 'Product Vision & Strategy',
          summary:
            'A vision is where you are going; a strategy is the specific bets you are making to get there.',
          content: [
            'A product vision is a short, durable statement of the future the product is trying to create — durable because it should survive several years and several roadmaps without changing. Amazon\'s early vision, "the everything store", did not specify which categories to add in which order; it gave every later decision a direction to be judged against. A vision that reads like a mission statement for a nonprofit — "delight our customers" — fails this test, because it cannot tell you what to say no to.',
            'Strategy is the layer beneath vision: a small number of specific, falsifiable bets about how the product will win, given a specific market and a specific set of constraints. Richard Rumelt\'s definition is the sharpest one in the field — a good strategy names the single most important challenge, states a guiding policy for dealing with it, and lays out a coherent set of actions that follow from that policy. "Grow revenue" is a goal, not a strategy; "win small business accounts by undercutting enterprise incumbents on setup time" is a strategy, because it implies specific things the team will and will not build.',
            'Vision and strategy sit above the roadmap, not on it. A common failure mode is treating the roadmap itself as the strategy — a list of features with dates is not a bet on how to win, it is a schedule. Teams that skip the strategy step usually discover it later, painfully, when two features shipped in the same quarter turn out to pull the product in opposite directions because no one had named the tradeoff in advance.',
            'The practical test for a product vision and strategy: hand them to two people on the team and ask each to independently decide whether a proposed feature belongs on the roadmap. If they disagree, the strategy is not specific enough yet. This is the same discipline behind writing a sharp problem statement in Design Thinking — abstraction feels safe, but it is exactly what makes a decision impossible later.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What makes "delight our customers" a weak product vision?',
              options: [
                'It is too short to be memorable',
                'It cannot tell you what to say no to, since almost any feature could be argued to delight customers',
                'It does not mention revenue',
                'It is not approved by executives',
              ],
              correctIndex: 1,
              explanation:
                'A useful vision narrows the field of acceptable bets. A vision vague enough to justify anything provides no actual direction when two ideas compete for the same roadmap slot.',
            },
            {
              id: 'q2',
              question: "By Rumelt's definition, what separates a strategy from a goal like \"grow revenue\"?",
              options: [
                'A strategy is always a single sentence',
                'A strategy names the core challenge, states a guiding policy for it, and lays out actions that follow — a goal states a desired outcome without saying how',
                'A strategy must be kept secret from the team',
                'A goal is only used by engineering, a strategy only by product',
              ],
              correctIndex: 1,
              explanation:
                '"Grow revenue" describes a destination. A strategy commits to a specific path — who you will win, and at whose expense — which is what makes it falsifiable and useful for saying no.',
            },
          ],
        },
        {
          id: 'product-market-fit',
          title: 'Product-Market Fit',
          summary:
            'The point where a large enough group of people want your product badly enough that growth stops being the hard problem.',
          content: [
            'Marc Andreessen\'s definition is still the clearest one: product-market fit means being in a good market with a product that can satisfy that market. Before fit, nearly every metric fights you — customers churn quickly, word of mouth is quiet, sales cycles drag. After fit, the signals reverse: usage grows without proportional marketing spend, customers get upset when the product goes down, and the team can barely keep up with demand rather than struggling to generate it.',
            'The Sean Ellis test gives the search a number: survey active users and ask how they would feel if they could no longer use the product. If 40% or more answer "very disappointed", the product usually has enough pull to grow from here; below that, most attempts to scale distribution are scaling a leak rather than a fit. The number is a heuristic, not a law, but it turns a vague feeling ("people seem to like it") into something a team can track quarter over quarter.',
            'Fit is discovered, not declared. Teams under pressure to show progress sometimes announce fit prematurely because a launch went well or a demo landed — a mistake that shows up later as a company scaling sales and marketing against a product that cannot retain the customers those efforts bring in. Retention curves that flatten rather than continuing to decay are the more trustworthy signal than a single good week.',
            'Fit is also not permanent. Markets shift, competitors close gaps, and a product that fit its market well two years ago can drift out of fit without any single decision causing it — which is why the vision and strategy work in the previous step, and the metrics work later in this subject, are ongoing disciplines rather than a box to check once at the start.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does the Sean Ellis test measure?',
              options: [
                'How much revenue a product generates per user',
                'The percentage of active users who say they would be "very disappointed" if they could no longer use the product',
                'How fast a support ticket is resolved',
                'The number of features shipped per quarter',
              ],
              correctIndex: 1,
              explanation:
                'A 40%-or-higher "very disappointed" response is a widely used heuristic threshold suggesting the product has real pull with its current market.',
            },
            {
              id: 'q2',
              question: 'Why is a single successful launch week not strong evidence of product-market fit?',
              options: [
                'Launch weeks are always inflated by marketing spend and do not show whether users stick around — a flattening retention curve is the more trustworthy signal',
                'Launches only matter for enterprise products',
                'Product-market fit can only be measured by revenue',
                'A launch week is too short to collect any data at all',
              ],
              correctIndex: 0,
              explanation:
                'Fit is about durable pull, not a spike. Retention over time — whether the curve flattens instead of continuing to decay — separates real fit from a good week driven by novelty or promotion.',
            },
          ],
        },
      ],
    },
    {
      id: 'prioritization',
      title: 'Prioritization',
      steps: [
        {
          id: 'okrs',
          title: 'OKRs',
          summary:
            'Objectives and Key Results connect an ambitious "what" to a small number of measurable proofs that it happened.',
          content: [
            'OKRs — Objectives and Key Results — were popularized inside Intel and later Google, built on a simple split: the Objective is a qualitative, ambitious statement of what you want to achieve; the Key Results are a small number (usually three or fewer) of quantitative, verifiable outcomes that would prove the objective was met. "Make checkout painless" is an objective; "reduce checkout abandonment from 34% to 20%" is a key result — specific enough that at the end of the quarter, everyone agrees on whether it happened.',
            'The most common failure is writing key results as a list of tasks instead of outcomes — "ship the new checkout flow" is an activity, not a result, because it can be completed in full and still fail to move the number that mattered. A useful check: if a key result could be marked "done" without any measurable change in user or business behavior, it is a task wearing an OKR\'s clothes.',
            'OKRs are deliberately meant to be ambitious enough that hitting 100% every quarter is itself a warning sign — Google\'s internal guidance treats a score around 60–70% as healthy, and consistent 100% scores as evidence the targets were sandbagged. This runs against most performance-review instincts, which is why OKRs work best when explicitly decoupled from compensation; the moment hitting a key result affects someone\'s bonus, they will quietly negotiate it down to something safe.',
            'OKRs answer "are we making progress on the right thing", not "what should we build this week" — that second question belongs to the prioritization frameworks and the roadmap later in this subject. Set at the company or team level, refreshed quarterly, they give backlog decisions something concrete to be judged against instead of whoever argues most persuasively in the room.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is the practical difference between a Key Result and a task?',
              options: [
                'A Key Result is always assigned to a manager',
                'A Key Result is a measurable outcome that proves progress; a task (e.g. "ship the checkout flow") can be finished without proving anything actually improved',
                'Tasks are only used in engineering, Key Results only in design',
                'There is no real difference — the terms are interchangeable',
              ],
              correctIndex: 1,
              explanation:
                'The checkout flow can ship on time and abandonment can stay flat. A Key Result written as an outcome (abandonment rate) would catch that; a task-shaped one would falsely read as success.',
            },
            {
              id: 'q2',
              question: 'Why does Google-style OKR guidance treat a 100% score every quarter as a warning sign rather than a win?',
              options: [
                'Because 100% scores are against company policy',
                'Because OKRs are meant to be ambitious stretch targets — consistently hitting them in full usually means the targets were set too safely',
                'Because scoring is done by an external auditor',
                'Because 100% always means the metric was recorded incorrectly',
              ],
              correctIndex: 1,
              explanation:
                'A ~60–70% average hit rate is the commonly cited healthy range; a perfect record repeatedly suggests key results were sandboxed to guarantee success rather than set to genuinely stretch the team.',
            },
          ],
        },
        {
          id: 'rice-and-prioritization-frameworks',
          title: 'RICE & Prioritization Frameworks',
          summary:
            'A scoring framework turns "which feature should we build next" from a debate into a number everyone can check.',
          content: [
            'RICE — Reach, Impact, Confidence, Effort — was developed at Intercom to force prioritization debates into the open. Reach is how many people a change will touch in a given period; Impact is how much it will move the needle for each of them, usually scored on a simple scale (massive, high, medium, low, minimal); Confidence discounts the estimate by how much real evidence backs it up; Effort is the person-time cost. The score is (Reach × Impact × Confidence) ÷ Effort — a high-reach, high-impact idea with weak evidence and a long build time can lose to a smaller idea the team is far more sure about.',
            'RICE is not the only framework, and the right one depends on what you are actually optimizing. MoSCoW (Must have, Should have, Could have, Won\'t have) is faster and coarser, useful for scoping a single release rather than ranking a whole backlog. The Kano model sorts features into basic expectations, performance features, and delighters, which is useful specifically for spotting the difference between "customers will complain if this is missing" and "customers will be thrilled if this exists" — two very different kinds of investment.',
            'Every framework shares the same weakness: the inputs are estimates, and a framework built on confident-looking numbers can create false precision. A RICE score of 47 sounds more rigorous than "we think this matters a lot", but if the Reach and Impact numbers were guessed under time pressure, the framework has only added a decimal point to a guess. The Confidence factor exists precisely to keep teams honest about this — a low-confidence guess should visibly drag the score down, not get smoothed over.',
            'The real value of any scoring framework is less the score itself and more the conversation it forces: naming Reach, Impact, Confidence, and Effort separately makes people\'s disagreements specific instead of vague. Two people who disagree about a feature\'s priority usually disagree about one of those four inputs, not about the feature as a whole — and that is a much easier disagreement to resolve.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'In the RICE framework, what is the purpose of the Confidence factor?',
              options: [
                'To measure how confident engineering is that the code will not have bugs',
                'To discount Reach and Impact estimates that are not backed by strong evidence, so a shaky guess does not score as high as a well-researched one',
                'To decide which team member owns the feature',
                'To replace the Effort estimate entirely',
              ],
              correctIndex: 1,
              explanation:
                'Confidence is a multiplier below 100% for weakly-evidenced Reach/Impact guesses, keeping an optimistic but unproven idea from outscoring a smaller, better-understood one.',
            },
            {
              id: 'q2',
              question: 'What is the main risk of prioritization frameworks like RICE?',
              options: [
                'They take too long to explain to executives',
                'A calculated-looking score can create false precision if the underlying Reach/Impact/Effort inputs were rough guesses',
                'They only work for consumer products, not B2B',
                'They cannot be used alongside OKRs',
              ],
              correctIndex: 1,
              explanation:
                'A specific number invites more trust than it has earned if the inputs feeding it were not actually researched — the framework structures the debate, but it does not manufacture data that was not there before.',
            },
          ],
        },
      ],
    },
    {
      id: 'defining-the-product',
      title: 'Defining the Product',
      steps: [
        {
          id: 'writing-a-prd',
          title: 'Writing a PRD',
          summary:
            'A product requirements document exists to force decisions into writing before code gets written around the ambiguity.',
          content: [
            'A PRD\'s job is to answer, in one place, the questions that would otherwise get answered inconsistently by whoever is asked first: what problem is this solving, for whom, why now, what does success look like, and what is explicitly out of scope. That last part carries more weight than it seems — a PRD without a stated non-goals section tends to grow scope silently as different stakeholders each add "one more thing" that was never weighed against the others.',
            'A useful PRD structure: problem statement and context (why this, why now), goals and non-goals, target users, the core user flows described at a level a designer and an engineer can both work from, requirements split into must-have and nice-to-have, success metrics tied back to the goals, and open questions the team has not resolved yet. That last section is not a weakness — a PRD that pretends every question is answered before design and engineering have weighed in usually gets rewritten anyway, just later and with more sunk cost behind it.',
            'The common failure is writing a PRD as a solution specification instead of a problem specification — describing the UI in detail before anyone has agreed on the problem, which quietly forecloses design options that might have solved it better. The discipline is to write requirements as "the user needs to be able to X" rather than "add a button that does X", leaving the how to the design and engineering process that follows.',
            'A PRD is a living document, not a contract signed once — the goals and non-goals should stay fixed once agreed, but the requirements section will change as design and engineering surface constraints the PRD author did not know about. Treating a PRD as immutable is what turns normal discovery into a fight about scope; treating it as a shared, versioned source of truth is what keeps that same discovery productive.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why does a strong PRD include a "non-goals" section?',
              options: [
                'To list features competitors already have',
                'Without it, different stakeholders tend to each add "one more thing" that was never weighed against the rest, and scope grows silently',
                'Non-goals are required by most engineering teams before starting a sprint',
                'It has no real function beyond formality',
              ],
              correctIndex: 1,
              explanation:
                'Naming what is explicitly out of scope gives the team something to point to when a well-meaning stakeholder tries to expand the work mid-flight.',
            },
            {
              id: 'q2',
              question: 'What is the risk of writing PRD requirements as UI specifications ("add a button that does X") rather than needs ("the user needs to be able to X")?',
              options: [
                'It makes the document too short',
                'It forecloses design options before design and engineering have had a chance to find a better solution to the actual problem',
                'It is against most style guides',
                'Engineers cannot build from UI specifications',
              ],
              correctIndex: 1,
              explanation:
                'Specifying the solution in the requirements document skips the step where design explores alternatives — the PRD\'s job is to define the problem precisely, not to pre-decide the interface.',
            },
          ],
        },
        {
          id: 'mvp-scoping',
          title: 'MVP Scoping',
          summary:
            'A minimum viable product is the smallest thing that tests the real risk — not the smallest version of the final vision.',
          content: [
            'Eric Ries defined the MVP as the version of a product that allows a team to collect the maximum validated learning about customers with the least effort — the emphasis is on learning, not on shipping a stripped-down but otherwise complete product. This gets misread constantly: an MVP is not "the final product with fewer features", it is the cheapest experiment that tests the riskiest assumption behind the idea.',
            'Henrik Kniberg\'s well-known illustration makes the point concrete: if the end goal is a car, an MVP is not a wheel, then an axle, then a chassis — a rider gets no value from a quarter of a car. The right sequence is a skateboard, then a scooter, then a bicycle, then a motorcycle, then the car — at every stage a complete, usable thing that tests real demand, just at a smaller scope than the final vision. Each step should be something a real user could actually use to get from A to B.',
            'Scoping an MVP starts with naming the riskiest assumption — the one thing that, if false, invalidates the whole idea — and building the smallest thing that tests specifically that assumption, not the smallest version of every feature on the list. A marketplace\'s riskiest assumption is usually whether supply and demand exist at all, which can sometimes be tested with a landing page and a manual, unscalable process behind it, before any matching algorithm gets built.',
            'The MVP concept is frequently abused to justify shipping something half-built under time pressure, with "MVP" doing the work of an apology rather than a strategy. The test for whether something is a real MVP: can you state, in advance, what result would tell you to stop building this and what result would tell you to keep going? If there is no answer, it is not an MVP — it is just an unfinished product with a more flattering name.',
          ],
          quiz: [
            {
              id: 'q1',
              question: "In Henrik Kniberg's car analogy, why is a wheel or an axle a bad first MVP for a product whose vision is a car?",
              options: [
                'Wheels are too expensive to prototype',
                'A quarter of a car gives a rider no usable value on its own — a skateboard, though far smaller in scope, is a complete usable thing at each stage',
                'The analogy only applies to physical products, not software',
                'It is not a bad first MVP; it is the recommended approach',
              ],
              correctIndex: 1,
              explanation:
                "An MVP has to be usable end-to-end at its own smaller scope, not an incomplete slice of the final architecture — that is what makes it capable of testing real demand.",
            },
            {
              id: 'q2',
              question: 'What question separates a genuine MVP from "an unfinished product with a more flattering name"?',
              options: [
                'Whether it was built in under a month',
                'Whether the team can state in advance what result would mean stop and what result would mean continue',
                'Whether it has a landing page',
                'Whether it uses no-code tools',
              ],
              correctIndex: 1,
              explanation:
                'A real MVP is framed as an experiment with a predefined pass/fail signal; without that, "MVP" is just an excuse for scope cut under deadline pressure.',
            },
          ],
        },
      ],
    },
    {
      id: 'planning-and-alignment',
      title: 'Planning & Alignment',
      steps: [
        {
          id: 'roadmapping',
          title: 'Roadmapping',
          summary:
            'A good roadmap communicates direction and confidence, not a delivery date it cannot actually promise.',
          content: [
            'A roadmap answers "where is this product going and roughly when" for an audience that is not in the room every day — sales, support, leadership, sometimes customers. The most durable roadmaps are organized by theme or outcome ("improve first-week retention") with a rough time horizon (now / next / later), rather than by feature name with a specific ship date, because a date-based roadmap turns into a promise the moment it leaves the product team\'s hands, and promises made months in advance about unbuilt software are broken constantly.',
            'The now/next/later structure — popularized as a lightweight alternative to quarter-by-quarter Gantt charts — deliberately gets less specific the further out it looks. "Now" can list actual features in progress; "later" should list problems to be solved, not solutions already chosen, because locking in a solution a year in advance throws away everything the team will learn between now and then.',
            'Roadmaps fail for social reasons more often than planning reasons: a roadmap shared without context gets read as a contract, and a roadmap that changes without explanation reads as broken promises even when the change was the right call. The fix is less about the roadmap format and more about the habit around it — communicating the "why" behind a shift, not just the new dates, every time priorities move.',
            'A roadmap and a backlog are not the same artifact and should not be confused: the backlog is the working list of everything that might get built, ordered by the frameworks from the previous level; the roadmap is a curated, external-facing subset of that backlog, translated into language a non-technical stakeholder can act on. Keeping them separate protects the team from having to defend, in public, every item that briefly existed in a brainstorm.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why do many product teams prefer a now/next/later roadmap over a roadmap with specific ship dates months out?',
              options: [
                'Dates are illegal to publish externally',
                'A date-based roadmap becomes a promise the moment stakeholders see it, and long-range software delivery dates are broken often enough to damage trust',
                'Now/next/later roadmaps take less time to build in a spreadsheet',
                'Specific dates are only used by engineering teams, never by product',
              ],
              correctIndex: 1,
              explanation:
                'Vague time horizons let the roadmap communicate direction and relative priority without setting up a commitment the team cannot reliably keep for work that has not started yet.',
            },
            {
              id: 'q2',
              question: 'What is the key difference between a roadmap and a backlog?',
              options: [
                'They are the same thing described with different words',
                'The backlog is the full working list of everything that might get built; the roadmap is a curated, external-facing subset translated for stakeholders',
                'A backlog only exists in agile teams',
                'A roadmap is only used before a product launches',
              ],
              correctIndex: 1,
              explanation:
                'Conflating the two means every idea that ever entered the backlog has to be explained or defended publicly — keeping them separate lets the team explore freely in the backlog while the roadmap stays a considered communication tool.',
            },
          ],
        },
        {
          id: 'stakeholder-alignment',
          title: 'Stakeholder Alignment',
          summary:
            'Alignment is not consensus — it is making sure the right people know a decision was made and why, even if they disagreed.',
          content: [
            'A common misconception is that stakeholder alignment means getting everyone to agree. In practice, most product decisions of any consequence have at least one stakeholder who would have chosen differently — alignment means that person understands the decision, the reasoning behind it, and their objection was heard, even though the answer did not change. Amazon\'s "disagree and commit" principle names this directly: after a debate, once a decision is made, everyone commits to executing it well, including the people who argued against it.',
            'The RACI framework (Responsible, Accountable, Consulted, Informed) is the standard tool for making alignment explicit rather than assumed. Responsible is who does the work; Accountable is the single person who owns the outcome and the final call; Consulted are people whose input is sought before the decision; Informed are people told after. The single most common failure is having too many people marked Accountable, which quietly means no one actually is.',
            'Stakeholder alignment breaks down most often not from disagreement but from surprise — a stakeholder who is blindsided by a decision they were never consulted on will fight it harder than one who was consulted and overruled. This is why product managers over-invest in early, informal conversations before a decision is finalized: the goal is that nothing in the final readout is the first time anyone in the room has heard it.',
            'Written decisions age better than verbal ones. A short decision record — what was decided, why, who was consulted, what alternatives were rejected and why — takes a few minutes to write and saves hours of later argument about what was actually agreed, especially once the original conversation is a distant memory and a new stakeholder is asking why the product works the way it does.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does "alignment" mean in the RACI/stakeholder sense, as distinct from consensus?',
              options: [
                'Every stakeholder must vote in favor before a decision proceeds',
                'The relevant people understand what was decided and why, and commit to it, even if some of them originally disagreed',
                'Only executives are allowed to be stakeholders',
                'Alignment and consensus are the same thing',
              ],
              correctIndex: 1,
              explanation:
                '"Disagree and commit" captures this: a decision can move forward with dissent on record, as long as the dissenting stakeholder was heard and commits to executing it.',
            },
            {
              id: 'q2',
              question: 'In the RACI framework, what problem does having multiple people marked "Accountable" usually cause?',
              options: [
                'It speeds up decision-making by adding more decision-makers',
                'It means, in practice, no single person actually owns the final call, since accountability that is shared by everyone is owned by no one',
                'It is required for compliance in regulated industries',
                'It has no real effect either way',
              ],
              correctIndex: 1,
              explanation:
                'A single Accountable owner is what makes a decision resolvable when Consulted parties disagree — spreading that role dilutes it until no one is actually responsible for the final call.',
            },
          ],
        },
      ],
    },
    {
      id: 'shipping-and-measuring',
      title: 'Shipping & Measuring',
      steps: [
        {
          id: 'go-to-market-basics',
          title: 'Go-to-Market Basics',
          summary:
            'Shipping a feature and launching it are different jobs, and skipping the second one wastes the first.',
          content: [
            'A go-to-market plan answers who this is for, how they will find out about it, what will convince them to try it, and how the team will know if it worked — questions that are easy to skip when a feature is finally, gratefully, done. Product teams under deadline pressure regularly treat "ship it" as the finish line, then wonder months later why adoption is low for something that clearly solves a real problem; the answer is usually that no one told the people it was for.',
            'Positioning — the specific claim about who this is for and what it replaces or beats — has to be decided before launch messaging is written, not discovered while writing it. A feature aimed at "everyone" in the messaging is usually a feature that will resonate with no one in particular; sharp positioning names a specific user and a specific moment ("for teams drowning in spreadsheet handoffs") rather than a universal benefit.',
            'Launch tiers are a useful discipline for deciding how much go-to-market effort a given release deserves: a tier-1 launch (major feature, real behavior change expected) gets a full plan — internal enablement, external messaging, a measurement plan, sometimes a staged rollout; a tier-3 launch (a small improvement) might get a one-line changelog entry and nothing else. Treating every release like a tier-1 launch burns out the team; treating every release like a tier-3 launch means real features go unnoticed.',
            'The go-to-market plan should specify, in advance, what "worked" looks like — tied to the same metrics discussed in the next step — because a launch remembered only through anecdote ("people seemed excited") cannot inform the next one. The team that writes down its adoption target before launch is the team that can say, three weeks later, whether the launch actually succeeded.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why does sharp positioning name a specific user and moment rather than a universal benefit?',
              options: [
                'Because narrow positioning is legally required for marketing claims',
                'Because a message aimed at "everyone" tends to resonate with no one in particular, while a specific scenario is recognizable and persuasive to the people who actually have that problem',
                'Because broad positioning is more expensive to produce',
                'Because universal benefits are always false',
              ],
              correctIndex: 1,
              explanation:
                'Vague, universal messaging fails to trigger recognition in any one audience; naming a specific user and moment lets that exact audience see themselves in it.',
            },
            {
              id: 'q2',
              question: 'What is the purpose of using launch tiers (e.g. tier-1 vs tier-3)?',
              options: [
                'To rank engineers by seniority',
                'To match the amount of go-to-market effort (enablement, messaging, measurement) to how significant the release actually is, instead of over- or under-investing uniformly',
                'To decide which features get skipped entirely',
                'To determine executive compensation',
              ],
              correctIndex: 1,
              explanation:
                'Not every release deserves a full launch plan, and not every release should get none — tiering keeps effort proportional so the team has bandwidth for the releases that actually need it.',
            },
          ],
        },
        {
          id: 'product-metrics-and-north-star',
          title: 'Product Metrics & North Star',
          summary:
            'A North Star metric is the single number that best represents the value your product delivers to customers.',
          content: [
            'A North Star metric is chosen to sit upstream of revenue but downstream of vanity — it should move when customers are genuinely getting value, and revenue should tend to follow it rather than being the metric itself. Spotify\'s early North Star was time spent listening, not signups or revenue, because listening time is what indicated the product was actually delivering on its promise; revenue was expected to follow from enough people listening enough, which it did.',
            'A useful North Star has to be specific enough to be gamed correctly — that is, the easiest way to move the number should also be the thing that genuinely helps the user, not a shortcut that inflates the metric while hollowing out the value. "Number of notifications sent" is easy to move and easy to game badly, by sending more notifications regardless of whether they help anyone; "weekly active users completing a core action" is much harder to inflate without actually improving the product.',
            'Leading and lagging indicators need to be distinguished and tracked together: a lagging indicator (revenue, churn) tells you what already happened and is too slow to react to; a leading indicator (activation rate, week-one retention) predicts the lagging outcome early enough to act on. A team watching only lagging indicators finds out about a problem months after it started; a team with the right leading indicators can catch the same problem in weeks.',
            'Metrics discipline connects back to everything earlier in this subject: the North Star should trace to the vision and strategy, the OKR key results should be leading or lagging indicators chosen because they move the North Star, and the go-to-market plan\'s definition of "worked" should be one of these same numbers. A metrics dashboard invented separately from all of that, however sophisticated, tends to measure activity instead of the thing the product actually exists to do.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What made "time spent listening" a strong North Star metric for early Spotify, rather than revenue or signups?',
              options: [
                'It was the easiest number to collect',
                'It sat close to the actual value delivered to users, so it could be trusted to predict revenue rather than being gamed independently of real usage',
                'It was required by investors',
                'Revenue metrics are never appropriate as a North Star',
              ],
              correctIndex: 1,
              explanation:
                'A metric downstream of vanity but upstream of revenue reflects genuine value delivery — Spotify expected (correctly) that enough real listening would translate into revenue on its own.',
            },
            {
              id: 'q2',
              question: 'Why is "number of notifications sent" a weak North Star candidate?',
              options: [
                'Notifications are technically difficult to track',
                'It can be inflated by sending more notifications regardless of whether they actually help the user, decoupling the metric from real value',
                'Notifications only exist on mobile platforms',
                'It is a lagging indicator, and North Stars must be leading indicators',
              ],
              correctIndex: 1,
              explanation:
                'A good North Star should be hard to move without genuinely improving the product; notification volume can rise while user value falls, which defeats the purpose of the metric.',
            },
          ],
        },
      ],
    },
  ],
};
