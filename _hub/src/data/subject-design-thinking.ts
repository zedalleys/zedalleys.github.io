import type { Subject } from '../types';

export const subject: Subject = {
  id: 'design-thinking',
  title: 'Design Thinking',
  description: 'The human-centered, iterative mindset behind creative problem-solving — from empathy through ideation to testing, and beyond screens.',
  icon: '💡',
  color: '#E76F51',
  levels: [
    {
      id: 'the-design-thinking-mindset',
      title: 'The Design Thinking Mindset',
      steps: [
        {
          id: 'what-is-design-thinking',
          title: 'What Is Design Thinking?',
          summary: 'A human-centered, non-linear approach to solving problems — popularized by Stanford\'s d.school and IDEO.',
          content: [
            'Design thinking is a problem-solving approach built around deeply understanding the people affected by a problem before jumping to solutions. It\'s most commonly described through five stages, popularized by Stanford\'s d.school: Empathize, Define, Ideate, Prototype, and Test. Despite the tidy list, it isn\'t meant to be followed strictly in order — teams regularly loop backward, revisiting empathy after a failed test, or reframing the problem after an early prototype reveals something unexpected.',
            'It\'s worth noticing the family resemblance to the Double Diamond model covered in UX Design Fundamentals — both center on understanding a problem deeply before solving it, and both treat divergence (generating many options) and convergence (narrowing to one) as distinct, deliberate phases. Design thinking\'s five stages and the Double Diamond\'s four are two popular lenses on largely the same underlying philosophy, developed by different institutions.',
            'What distinguishes design thinking as a mindset, more than a fixed process, is its explicit human-centered starting point: rather than beginning with a technology capability or a business requirement and working outward, it starts by immersing in the lived experience of the people the solution is for.',
            'Design thinking also isn\'t limited to interfaces or even digital products — it\'s widely applied to services, physical products, organizational processes, and social challenges, which is why later steps in this subject look beyond screens entirely.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What are the five stages of design thinking as popularized by Stanford\'s d.school?',
              options: [
                'Discover, Define, Develop, Deliver, Deploy',
                'Empathize, Define, Ideate, Prototype, Test',
                'Plan, Build, Launch, Measure, Scale',
                'Research, Design, Code, Test, Ship',
              ],
              correctIndex: 1,
              explanation: 'The d.school\'s widely referenced model names these five stages, though in practice teams move between them non-linearly rather than strictly in sequence.',
            },
            {
              id: 'q2',
              question: 'What does it mean that design thinking is "non-linear" in practice?',
              options: [
                'It has no defined stages at all',
                'Teams often loop backward between stages — such as revisiting empathy after a failed test — rather than moving through them once, in strict order',
                'It can only be used for digital products',
                'Every stage must be completed by a different team member',
              ],
              correctIndex: 1,
              explanation: 'The stages describe a mindset and a set of activities, not a rigid one-way pipeline — real projects frequently jump backward as new understanding emerges.',
            },
          ],
        },
        {
          id: 'empathize-building-understanding',
          title: 'Empathize: Building Genuine Understanding',
          summary: 'The first stage isn\'t research for its own sake — it\'s deliberately setting assumptions aside.',
          content: [
            'The Empathize stage is about building a genuine, first-hand understanding of the people a solution is meant to serve — their needs, motivations, and the context they operate in — rather than relying on assumptions about what they probably want. This overlaps with the user research methods covered elsewhere in this learning path, but design thinking frames it specifically as an act of empathy, not just data collection.',
            'Empathy interviews, a common technique here, deliberately favor open-ended questions and follow-up "why" questions over structured surveys, and pay close attention to a subject\'s emotional language and body language, not just their literal answers — because people are often better at describing a workaround they\'ve invented than at diagnosing the underlying problem it\'s a workaround for.',
            'Immersion techniques go a step further than asking questions: actually observing people in their real context, or even attempting to experience a constraint firsthand (a well-known example is designers spending time in a wheelchair to understand mobility barriers), can surface friction that would never come up in an interview because the person experiencing it has stopped consciously noticing it.',
            'The core discipline of this stage is suspending judgment — resisting the urge to jump to "here\'s how we\'d fix that" mid-conversation. Solving prematurely, even mentally, narrows what a team notices and hears during exactly the phase meant to keep their thinking wide open.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why might empathy interviews favor open-ended "why" questions over structured surveys?',
              options: [
                'Because surveys are always more expensive to run',
                'Because people are often better at describing a workaround than diagnosing the underlying problem, and open follow-ups can surface that',
                'Because open-ended questions are faster to analyze',
                'Because structured surveys cannot be conducted digitally',
              ],
              correctIndex: 1,
              explanation: 'Open-ended, "why"-driven questions give room to uncover the reasoning and underlying problem behind a stated behavior, which a fixed-choice survey question typically can\'t capture.',
            },
            {
              id: 'q2',
              question: 'What is the core discipline emphasized during the Empathize stage?',
              options: [
                'Proposing as many solutions as possible immediately',
                'Suspending judgment and resisting the urge to jump to solutions mid-conversation',
                'Only interviewing people who already like the product',
                'Skipping straight to prototyping to save time',
              ],
              correctIndex: 1,
              explanation: 'Solving prematurely — even just mentally — narrows what a team notices during the phase specifically meant to keep observation and listening wide open.',
            },
          ],
        },
      ],
    },
    {
      id: 'defining-the-right-problem',
      title: 'Defining the Right Problem',
      steps: [
        {
          id: 'pov-statements',
          title: 'Problem Framing & Point-of-View Statements',
          summary: 'Turning a pile of empathy research into one sharp, actionable problem statement.',
          content: [
            'The Define stage takes everything gathered during Empathize and distills it into a specific, actionable problem statement — often called a point-of-view (POV) statement. A commonly taught template combines three parts: a specific user, their need, and an insight explaining why that need matters ("[User] needs [need] because [insight]").',
            'The insight portion is what separates a strong POV statement from a shallow one. "A new employee needs an easier onboarding checklist" states a need but not why it matters. "A new employee needs a clear sense of what\'s expected of them in week one, because uncertainty about priorities is what\'s actually driving their anxiety" gives the team a real "why" to design against — and opens up solutions beyond just "a checklist."',
            'A well-formed POV statement is deliberately narrow enough to be actionable, but not so narrow that it presupposes a specific solution. "A new employee needs a mobile app with push notifications" has smuggled a solution into what should still be an open problem statement.',
            'Because Define sits between Empathize and Ideate, a POV statement isn\'t meant to be permanent — it\'s common, and healthy, for it to get revised again after ideation or early testing surfaces something the team didn\'t understand yet.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What are the three parts of the commonly taught POV statement template?',
              options: [
                'Problem, Solution, Outcome',
                'A specific user, their need, and an insight explaining why that need matters',
                'Discover, Define, Deliver',
                'Budget, Timeline, Stakeholders',
              ],
              correctIndex: 1,
              explanation: 'The template combines a specific user, a stated need, and the underlying insight that explains why the need is meaningful — the insight is what gives the statement real direction.',
            },
            {
              id: 'q2',
              question: 'What is the problem with a POV statement like "A new employee needs a mobile app with push notifications"?',
              options: [
                'It is too long',
                'It smuggles a specific solution into what should still be an open problem statement',
                'It does not mention a specific user',
                'Mobile apps cannot be referenced in a POV statement',
              ],
              correctIndex: 1,
              explanation: 'A good POV statement names a need and why it matters without presupposing the answer — jumping to "a mobile app" forecloses other, possibly better, solutions before ideation even starts.',
            },
          ],
        },
        {
          id: 'how-might-we-questions',
          title: 'How Might We Questions',
          summary: 'Reframing a problem statement into an invitation to brainstorm.',
          content: [
            'A "How Might We" (HMW) question translates a POV statement into a form specifically designed to invite ideation. Each word does real work: "How" implies that a solution is possible without claiming to know what it is yet; "Might" signals that not every idea needs to be right, lowering the pressure to propose only "correct" ideas; "We" frames it as a shared, collaborative challenge rather than one person\'s task to solve alone.',
            'Scope is the main thing to get right when writing an HMW question. Too broad ("How might we improve onboarding?") gives so much latitude that ideation sessions produce vague, disconnected ideas with no shared focus. Too narrow ("How might we add a progress bar to step 3?") has already picked a solution, leaving no real room for ideation at all.',
            'A useful technique for calibrating scope is generating several HMW questions from the same POV statement, at different levels of breadth, and picking whichever one seems to open the richest, most focused set of possible directions — treating the HMW question itself as something worth iterating on, not just a mechanical rewrite of the POV statement.',
            'Multiple HMW questions can also come from a single POV statement by focusing on different angles of the same insight — one HMW might attack the emotional side of a problem, while another attacks a purely practical or logistical angle, deliberately generating a wider spread of ideas across the team.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does the word "Might" contribute to a "How Might We" question?',
              options: [
                'It specifies the exact solution the team should build',
                'It lowers the pressure to only propose "correct" ideas, signaling that not every idea needs to be right',
                'It has no real purpose and could be removed',
                'It indicates the question is optional to answer',
              ],
              correctIndex: 1,
              explanation: '"Might" deliberately keeps the bar low for contributing ideas during brainstorming, encouraging volume and openness rather than only "safe" suggestions.',
            },
            {
              id: 'q2',
              question: 'Why is "How might we add a progress bar to step 3?" a weak HMW question?',
              options: [
                'It is too vague to act on',
                'It has already picked a specific solution, leaving little real room for ideation',
                'It does not include the word "we"',
                'Progress bars cannot be referenced in HMW questions',
              ],
              correctIndex: 1,
              explanation: 'A good HMW question stays open enough to invite multiple possible solutions — this one has effectively already chosen the answer before ideation begins.',
            },
          ],
        },
      ],
    },
    {
      id: 'ideation-techniques',
      title: 'Ideation Techniques',
      steps: [
        {
          id: 'brainstorming-rules',
          title: 'Brainstorming Rules & Divergent Thinking',
          summary: 'Good brainstorming follows deliberate rules — it isn\'t just "everyone shout out ideas."',
          content: [
            'Ideation is a divergent-thinking activity: the explicit goal is generating a large volume of possible directions, with judgment deliberately deferred until later. IDEO and the d.school popularized a well-known set of brainstorming rules that make this actually work in a group setting, rather than defaulting into cautious, safe suggestions.',
            'The core rules include: defer judgment (no criticizing or even praising ideas mid-session, since evaluation shuts down the freewheeling thinking that produces unexpected ideas), encourage wild ideas (an impractical idea often contains a genuinely useful kernel once refined), build on the ideas of others ("yes, and..." rather than "no, but..."), stay focused on the topic, one conversation at a time (side conversations fragment the group\'s energy), be visual (sketching an idea, even roughly, communicates faster than describing it), and go for quantity (a large volume of ideas statistically increases the odds a genuinely strong one shows up among them).',
            'Deferring judgment is the rule most commonly broken, often unintentionally — a raised eyebrow or a dismissive "hmm" is enough to signal that an idea wasn\'t welcome, and can quietly shut down the person\'s willingness to keep contributing for the rest of the session.',
            'Facilitation matters as much as the rules themselves: without an active facilitator gently reinforcing them in the moment, a group\'s natural tendency to converge early and judge ideas as they come in will override good intentions almost every time.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why does the "defer judgment" rule matter so much during brainstorming?',
              options: [
                'It doesn\'t matter — critiquing ideas immediately improves quality',
                'Even subtle judgment (like a dismissive reaction) can shut down the open, freewheeling thinking the session depends on',
                'It is only relevant in remote brainstorming sessions',
                'It means no idea can ever be evaluated, even after the session ends',
              ],
              correctIndex: 1,
              explanation: 'Evaluating ideas mid-session — even subtly — discourages people from continuing to contribute freely, undermining the divergent thinking the exercise is meant to produce.',
            },
            {
              id: 'q2',
              question: 'What is the reasoning behind the "go for quantity" brainstorming rule?',
              options: [
                'Quantity is valued for its own sake, regardless of idea quality',
                'A larger volume of ideas statistically increases the odds that a genuinely strong idea appears among them',
                'It ensures every participant contributes exactly the same number of ideas',
                'It replaces the need for later idea selection entirely',
              ],
              correctIndex: 1,
              explanation: 'Generating many ideas widens the pool from which strong, sometimes unexpected, solutions can be found and later refined.',
            },
          ],
        },
        {
          id: 'structured-ideation-methods',
          title: 'Structured Ideation Methods',
          summary: 'When open brainstorming stalls, structured prompts can force new angles.',
          content: [
            'Open brainstorming works well, but can stall once a group has exhausted their most obvious ideas. Structured ideation techniques give a group a specific lens or constraint to force fresh angles rather than circling the same few directions.',
            'SCAMPER is one such technique: a checklist of prompts — Substitute, Combine, Adapt, Modify, Put to another use, Eliminate, Reverse — applied to an existing idea or product to systematically generate variations. Asking "what if we combined this with something else" or "what if we eliminated this step entirely" often surfaces ideas that wouldn\'t appear from an unstructured "just think of something new" prompt.',
            'Crazy 8s is a fast-sketching exercise: each participant folds a sheet of paper into eight sections and has roughly one minute per section to sketch a distinct idea, forcing quick iteration and preventing anyone from over-investing in a single first idea before moving on.',
            'A method like "worst possible idea" intentionally asks for the most unhelpful, absurd solution imaginable — which, counterintuitively, tends to loosen up a group that\'s been too cautious, and often reveals a usable insight buried inside the deliberately bad idea once it\'s inverted or taken half-seriously.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does the SCAMPER technique provide during ideation?',
              options: [
                'A way to vote on which idea is best',
                'A checklist of prompts (Substitute, Combine, Adapt, etc.) used to systematically generate variations on an existing idea',
                'A method for scheduling brainstorming sessions',
                'A way to test finished prototypes with users',
              ],
              correctIndex: 1,
              explanation: 'SCAMPER gives structured prompts that force a fresh angle on an existing idea, which is especially useful once open brainstorming has stalled.',
            },
            {
              id: 'q2',
              question: 'What is the purpose of a "worst possible idea" exercise?',
              options: [
                'To permanently rule out an entire category of solutions',
                'To loosen up an overly cautious group, often revealing a usable insight once the deliberately bad idea is inverted or taken half-seriously',
                'To punish participants who suggest weak ideas',
                'To replace the need for any further ideation',
              ],
              correctIndex: 1,
              explanation: 'Deliberately generating a "bad" idea removes the pressure to only suggest "good" ones, and often reveals a genuinely useful angle once examined or inverted.',
            },
          ],
        },
      ],
    },
    {
      id: 'prototyping-and-testing-mindsets',
      title: 'Prototyping & Testing Mindsets',
      steps: [
        {
          id: 'prototyping-to-think',
          title: 'Prototyping to Think, Not Just to Show',
          summary: 'In design thinking, a prototype is primarily a tool for learning — not a preview of the finished product.',
          content: [
            'It\'s easy to think of a prototype purely as a preview — a rough version of what the finished thing will eventually look like. Design thinking treats prototyping as something more active: a way of thinking through and testing an idea by making it tangible, specifically so it can be reacted to. A prototype exists to generate feedback and learning, not to impress anyone.',
            'This reframing changes what counts as a "good" prototype. The right fidelity is whatever is fast and cheap enough to build several of, and specific enough to answer the question currently in front of the team — a service idea might be prototyped as a simple role-play or a paper flyer, a physical product as a rough foam mockup, an app feature as a handful of sketched screens taped together.',
            'The often-repeated phrase "fail fast" belongs here: the point isn\'t to celebrate failure, it\'s that a cheap, quick prototype makes a wrong idea cheap and quick to discover and discard, compared to discovering the same flaw only after a large investment of time and money.',
            'A useful habit: before building a prototype, name the specific question it\'s meant to answer ("will people understand what this icon means without a label?"). A prototype built without a clear question tends to generate vague, hard-to-act-on feedback like "looks nice" instead of a real answer.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'In design thinking, what is a prototype primarily meant to do?',
              options: [
                'Serve as a polished preview of the finished product',
                'Generate feedback and learning by making an idea tangible enough to react to',
                'Replace the need for any further testing',
                'Demonstrate technical skill to stakeholders',
              ],
              correctIndex: 1,
              explanation: 'A design-thinking prototype exists to be reacted to and learned from — its job is testing an idea, not showcasing a finished result.',
            },
            {
              id: 'q2',
              question: 'What is the actual point of the phrase "fail fast" in this context?',
              options: [
                'Failure itself is the goal to celebrate',
                'A cheap, quick prototype makes discovering a wrong idea fast and low-cost, compared to discovering it after a large investment',
                'Teams should intentionally build broken prototypes',
                'It means skipping the testing phase entirely',
              ],
              correctIndex: 1,
              explanation: '"Fail fast" is about the low cost of learning something isn\'t working early, via a cheap prototype, rather than an endorsement of failure for its own sake.',
            },
          ],
        },
        {
          id: 'testing-learning-loops',
          title: 'Testing & Learning Loops',
          summary: 'The Test stage exists to feed learning back into earlier stages, not to be a final verdict.',
          content: [
            'The Test stage puts a prototype in front of real people and observes their reactions — but in the context of design thinking, it isn\'t a pass/fail gate at the end of a linear process. It\'s a deliberate loop back into the earlier stages: a test can reveal that the POV statement was wrong, that the HMW question was scoped incorrectly, or that an entirely different problem is more urgent than the one the team started with.',
            'A useful mental model is treating each round of testing as a new round of empathy-gathering, not just validation. Watching someone react to a prototype often surfaces the same kind of unscripted, revealing behavior that empathy interviews are meant to surface — sometimes more so, because a tangible prototype gives people something concrete to react to instead of describing a hypothetical.',
            'A simple test plan states, in advance, what\'s being tested, what a "successful" reaction would look like, and what question the team hopes to answer — echoing the same discipline covered in prototyping. Without that, a test session risks becoming an unfocused show-and-tell rather than a structured way of learning something specific.',
            'Because design thinking is explicitly iterative, a team that finds their first prototype "worked" isn\'t necessarily done — the natural next move is often a slightly more refined prototype and another round of testing, continuing the loop rather than treating one successful round as a finish line.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why is the Test stage described as a "loop back" rather than a final step?',
              options: [
                'Because testing is optional and can be skipped',
                'Because a test can reveal that an earlier stage — like the POV statement or HMW question — needs to be revisited and revised',
                'Because it always confirms the original idea was correct',
                'Because it only applies to physical products',
              ],
              correctIndex: 1,
              explanation: 'Design thinking treats testing as feeding new understanding back into empathy, definition, or ideation — not as a final checkpoint that ends the process.',
            },
            {
              id: 'q2',
              question: 'What is the value of writing a simple test plan before a testing session?',
              options: [
                'It guarantees the prototype will succeed',
                'It focuses the session around a specific question and what a successful reaction would look like, instead of an unfocused show-and-tell',
                'It eliminates the need to observe participants directly',
                'It is only useful for very large, expensive studies',
              ],
              correctIndex: 1,
              explanation: 'A stated plan keeps a test session structured and purposeful, mirroring the same "know your question before you build" discipline used in prototyping.',
            },
          ],
        },
      ],
    },
    {
      id: 'design-thinking-beyond-screens',
      title: 'Design Thinking Beyond Screens',
      steps: [
        {
          id: 'applying-beyond-digital',
          title: 'Applying Design Thinking to Business & Service Problems',
          summary: 'The same mindset scales from a single feature to an entire service or organizational process.',
          content: [
            'Design thinking\'s origins are in industrial design, and its principles apply just as directly to problems with no interface at all: redesigning a hospital\'s patient check-in process, rethinking how a bank branch handles a stressful conversation about a loan, or restructuring an internal process between departments that keeps causing friction.',
            'Service design is one of the most direct extensions of this idea — treating an entire end-to-end service (not just its digital touchpoints) as something to be deliberately designed, often visualized with a "service blueprint" that maps not just what the customer experiences, but the backstage staff actions, systems, and processes that make each customer-facing moment possible.',
            'Applying design thinking to a non-digital, cross-functional problem usually requires more deliberate facilitation than a single product team\'s workshop — stakeholders from different departments often start with genuinely different, sometimes conflicting, mental models of the problem, and empathy work in this context includes understanding colleagues\' constraints, not just external customers\' needs.',
            'The throughline across every application, digital or not, stays the same: start from a real, specific understanding of the people affected, resist jumping straight to a solution, and treat the first attempt as something to learn from and refine rather than get right immediately.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does a "service blueprint" typically map, beyond what the customer directly experiences?',
              options: [
                'Only the visual design of a mobile app',
                'The backstage staff actions, systems, and processes that make each customer-facing moment possible',
                'A company\'s marketing budget',
                'A single user\'s personal journey map',
              ],
              correctIndex: 1,
              explanation: 'A service blueprint extends beyond the customer-facing surface to show the internal processes and people that support each visible moment of the service.',
            },
            {
              id: 'q2',
              question: 'Why might applying design thinking to a cross-functional, non-digital problem require more facilitation than a typical product workshop?',
              options: [
                'Because non-digital problems are always simpler to solve',
                'Because stakeholders from different departments often start with genuinely different, sometimes conflicting, mental models of the problem',
                'Because design thinking cannot be applied outside of software teams',
                'Because facilitation is never needed for digital projects',
              ],
              correctIndex: 1,
              explanation: 'Cross-functional stakeholders frequently bring different assumptions and constraints to the table, which takes more deliberate facilitation to surface and align than a single team\'s internal workshop.',
            },
          ],
        },
        {
          id: 'pitfalls-and-criticisms',
          title: 'Common Pitfalls & Criticisms of Design Thinking',
          summary: 'Understanding where the process breaks down in practice is as important as knowing the ideal version.',
          content: [
            'Design thinking has drawn real criticism, and understanding it makes the practice stronger, not weaker. One common critique is "design thinking theater" — teams going through the visible motions (sticky notes, workshops, an HMW wall) without the substantive rigor underneath, treating the artifacts of the process as the goal rather than the understanding they\'re supposed to produce.',
            'A related pitfall is treating the five stages as a strict, one-way pipeline rather than the iterative loop they\'re meant to be — Empathize once, then never returning to it, even when later stages reveal the team\'s original understanding was incomplete or wrong.',
            'Skipping empathize under time pressure is a particularly costly shortcut, since every later stage compounds on a possibly wrong foundation — an elegant, well-tested solution to a misunderstood problem is still the wrong solution.',
            'A fair broader criticism is that design thinking, as commonly taught, can understate how much real expertise, technical constraint-handling, and organizational context matter to actually shipping a solution — the process gives a strong starting structure, but it isn\'t a substitute for genuine skill, domain knowledge, or the harder organizational work of getting a solution actually built and adopted.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does "design thinking theater" refer to?',
              options: [
                'A stage play about the history of design',
                'Teams going through the visible motions of the process — sticky notes, workshops — without the substantive rigor and understanding underneath',
                'A required final presentation stage of every project',
                'A specific brainstorming technique',
              ],
              correctIndex: 1,
              explanation: '"Design thinking theater" describes performing the visible rituals of the process while missing the genuine depth of understanding they\'re meant to produce.',
            },
            {
              id: 'q2',
              question: 'Why is skipping the Empathize stage under time pressure considered especially costly?',
              options: [
                'It isn\'t costly — later stages can fully compensate for it',
                'Every later stage builds on that initial understanding, so a well-executed solution to a misunderstood problem is still the wrong solution',
                'It only affects the visual design of the final product',
                'It has no effect on the outcome, only the process\'s appearance',
              ],
              correctIndex: 1,
              explanation: 'Since later stages are built on the foundation Empathize establishes, skipping it risks a well-built solution to a problem the team never actually understood correctly.',
            },
          ],
        },
      ],
    },
  ],
};
