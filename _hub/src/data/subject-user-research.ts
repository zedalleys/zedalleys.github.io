import type { Subject } from '../types';

export const subject: Subject = {
  id: 'user-research',
  title: 'User Research',
  description: 'Go deeper into planning studies, running interviews and surveys, avoiding bias, and building a real research practice.',
  icon: '🔍',
  color: '#E76F51',
  levels: [
    {
      id: 'planning-research',
      title: 'Planning Research',
      steps: [
        {
          id: 'choosing-the-right-method',
          title: 'Choosing the Right Method',
          summary: 'A simple two-axis framework for matching a research question to the right method.',
          content: [
            'With dozens of named research methods available, picking the right one starts with a simpler question than "which method is best" — it\'s "what kind of question am I actually trying to answer." A widely used framework, associated with researcher Christian Rohrer, organizes methods along two axes: attitudinal versus behavioral (what people say versus what people actually do), and qualitative versus quantitative (rich detail from few people versus numeric patterns from many).',
            'A question about what people believe or feel — "do users trust this feature?" — points toward attitudinal methods like interviews or surveys. A question about what people actually do — "where do users get stuck in this flow?" — points toward behavioral methods like usability testing or analytics, since what people say they do and what they actually do frequently diverge.',
            'Combining the two axes narrows the choice further: a qualitative-attitudinal question suits an interview; a quantitative-attitudinal question suits a survey at scale; a qualitative-behavioral question suits a moderated usability test; a quantitative-behavioral question suits analytics or an A/B test.',
            'The practical value of this framework is preventing a common mistake: reaching for whichever method is most familiar or convenient, rather than the one that actually matches the question. A survey can\'t reliably answer "where exactly do people get confused in this flow," and analytics alone can\'t answer "why did people abandon this flow" — mismatched method and question is one of the most common causes of research that doesn\'t actually inform a decision.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What are the two axes in the Rohrer-style framework for choosing a research method?',
              options: [
                'Fast versus slow, and cheap versus expensive',
                'Attitudinal versus behavioral, and qualitative versus quantitative',
                'Digital versus physical, and local versus remote',
                'Moderated versus unmoderated only',
              ],
              correctIndex: 1,
              explanation: 'These two axes — what people say vs. what they do, and rich detail vs. numeric scale — help match a research question to an appropriate method.',
            },
            {
              id: 'q2',
              question: 'Why can\'t a survey reliably answer "where exactly do people get confused in this flow"?',
              options: [
                'Surveys are technically impossible to distribute at scale',
                'That is a behavioral, in-the-moment question — surveys capture attitudes/self-reports, not directly observed behavior',
                'Surveys can only be used for pricing research',
                'There is no real limitation, surveys can answer any question',
              ],
              correctIndex: 1,
              explanation: 'Pinpointing exactly where confusion happens during a task is a behavioral question best answered by observing behavior directly (like usability testing), not by self-report.',
            },
          ],
        },
        {
          id: 'writing-a-research-plan',
          title: 'Writing a Research Plan',
          summary: 'A short document that forces clarity before a single participant is recruited.',
          content: [
            'A research plan is a short document written before a study begins, forcing the team to be explicit about what they\'re trying to learn and how, rather than improvising once sessions are already underway. At minimum, it names the research questions (what the team actually needs to know), the method chosen to answer them, and how "useful" results will be recognized once gathered.',
            'Recruiting criteria deserve specific attention: who counts as a representative participant for this study, and — just as importantly — who should be explicitly excluded (such as employees of the company, or people with no relevant experience with the product category at all). Vague criteria like "typical users" tend to produce an accidentally skewed, convenient sample rather than a genuinely representative one.',
            'For a moderated study, a discussion or task script (an outline of what will be asked or asked to attempt, in what order) keeps sessions comparable across multiple participants — without one, different sessions can drift so far apart in what was actually covered that comparing results across them becomes unreliable.',
            'A research plan also sets expectations up front for stakeholders outside the research team about the study\'s scope and limitations — a small qualitative study, clearly scoped as exploratory rather than statistically representative, avoids the later, avoidable disagreement about how much weight its findings should carry.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why is being specific about recruiting criteria (who to include AND exclude) important?',
              options: [
                'It isn\'t important, any participant will do',
                'Vague criteria like "typical users" tend to produce an accidentally skewed sample rather than a genuinely representative one',
                'Exclusion criteria are only relevant for quantitative surveys',
                'It only matters for studies with more than 50 participants',
              ],
              correctIndex: 1,
              explanation: 'Precise recruiting criteria — including clear exclusions — help ensure the people studied actually represent the population the research is meant to inform decisions about.',
            },
            {
              id: 'q2',
              question: 'What is one purpose of writing a research plan before a study begins?',
              options: [
                'To make the study take longer for no reason',
                'To force clarity on the research question and method upfront, and to set stakeholder expectations about the study\'s scope and limitations',
                'It has no real purpose beyond documentation for its own sake',
                'It replaces the need to actually run the study',
              ],
              correctIndex: 1,
              explanation: 'A research plan clarifies intent before recruiting begins and helps set realistic expectations with stakeholders about what the study can and can\'t claim.',
            },
          ],
        },
      ],
    },
    {
      id: 'talking-to-users',
      title: 'Talking to Users',
      steps: [
        {
          id: 'conducting-effective-interviews',
          title: 'Conducting Effective Interviews',
          summary: 'The skill of an interview is mostly in the questions you don\'t ask, and the silence you don\'t fill.',
          content: [
            'A user interview aims to surface a participant\'s genuine experience, reasoning, and context — which depends heavily on the specific way questions get asked. Open-ended questions ("Tell me about the last time you tried to do this") invite a fuller story than closed questions ("Did that feature work well for you?"), which tend to produce a short yes/no with little useful detail.',
            'Leading questions are one of the most common interviewing mistakes, and often slip in unintentionally: "Wasn\'t that confusing?" quietly suggests the "right" answer is yes, nudging a participant toward agreeing rather than reporting their own genuine reaction. A neutral phrasing, like "How did that feel?", leaves room for whatever the honest answer actually is.',
            'Comfortable silence is an underused interviewing tool. After asking a question, resisting the urge to immediately fill a pause with another question or a rephrase often gives a participant the extra few seconds they need to actually think and produce a deeper, more considered answer than their first reflexive response.',
            'The interviewer\'s own reactions matter too — visibly reacting with surprise, approval, or discomfort to an answer can subtly signal what response is "expected," biasing everything the participant says afterward. Staying neutrally curious, and reserving reactions until after the session, protects the integrity of what\'s being learned.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What makes a question like "Wasn\'t that confusing?" a leading question?',
              options: [
                'It is too long for a typical interview',
                'It subtly suggests the expected answer, nudging the participant toward agreeing rather than sharing their genuine reaction',
                'It only works for quantitative surveys',
                'It uses a word ("confusing") that is banned from interviews entirely',
              ],
              correctIndex: 1,
              explanation: 'Leading questions embed an assumption about the "right" answer, which can bias a participant toward agreeing rather than reporting their honest experience.',
            },
            {
              id: 'q2',
              question: 'Why is comfortable silence after asking a question considered a useful interviewing technique?',
              options: [
                'Silence makes participants uncomfortable enough to end the session early',
                'It gives the participant space to think, often producing a deeper answer than their first reflexive response',
                'It has no real effect on the quality of answers',
                'It is only useful in unmoderated studies',
              ],
              correctIndex: 1,
              explanation: 'Resisting the urge to immediately fill a pause gives participants room to think further, which frequently surfaces more considered, useful answers.',
            },
          ],
        },
        {
          id: 'surveys-and-questionnaires',
          title: 'Surveys & Questionnaires',
          summary: 'Getting attitudinal data at scale, and the specific ways survey design commonly goes wrong.',
          content: [
            'A survey collects self-reported data from a larger number of people than an interview practically allows, trading depth for scale and statistical patterns. It fits attitudinal-quantitative questions well — measuring how satisfaction, preference, or awareness varies across a large user base — but shares the same core limitation as any self-report method: it captures what people say, which doesn\'t always match what they actually do.',
            'Question wording carries outsized influence on results. A leading question ("How much do you love this new feature?") biases responses just as much in a survey as in an interview. Double-barreled questions ("Was the checkout process fast and easy?") force a single answer onto what might actually be two different, even conflicting, experiences — fast but not easy, or the reverse.',
            'Response scale design matters too: an odd-numbered scale (like a 5-point scale) includes an explicit neutral midpoint, while an even-numbered scale forces respondents to lean at least slightly one direction — a deliberate design choice, not an incidental detail, depending on whether a neutral option is genuinely meaningful for the question being asked.',
            'Survey length has a direct, measurable cost: response quality tends to degrade toward the end of a long survey as fatigue sets in, and overall completion rates drop as length increases — which is why experienced researchers ruthlessly cut any question that isn\'t clearly tied to a specific decision the results will inform.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is a "double-barreled" survey question?',
              options: [
                'A question with only two possible answers',
                'A question that forces a single answer onto what are actually two separate, potentially conflicting experiences, like "was it fast and easy?"',
                'A question that requires two separate surveys to answer',
                'A question about firearms, unrelated to UX research',
              ],
              correctIndex: 1,
              explanation: 'Double-barreled questions bundle two distinct things into one, making it unclear which part a respondent is actually answering — especially problematic if the two parts diverge.',
            },
            {
              id: 'q2',
              question: 'Why does survey length matter for data quality?',
              options: [
                'It doesn\'t — longer surveys always produce better data',
                'Response quality tends to degrade toward the end of long surveys, and completion rates drop as length increases',
                'Longer surveys are required to reach statistical significance',
                'Survey length only affects surveys distributed by email',
              ],
              correctIndex: 1,
              explanation: 'Fatigue lowers both the quality of later answers and the odds a respondent finishes at all, which is why unnecessary questions should be cut.',
            },
          ],
        },
      ],
    },
    {
      id: 'watching-users',
      title: 'Watching Users',
      steps: [
        {
          id: 'writing-good-test-tasks',
          title: 'Writing Good Usability Test Tasks',
          summary: 'A poorly written task can quietly hand the participant the answer, making a test worthless.',
          content: [
            'A usability test, introduced in UX Design Fundamentals, is only as good as the tasks participants are asked to attempt. A well-written task describes a goal in the participant\'s own terms, without embedding the interface\'s specific vocabulary or steps — "Find out how much it would cost to ship this item to Canada" tests real navigation and comprehension; "Click on the shipping calculator" has already told the participant exactly where to look, testing nothing.',
            'Tasks should also avoid revealing the "correct" outcome, since a participant who suspects what answer is expected may perform differently than they would unprompted — framing a task around a realistic, motivating scenario ("You\'re buying a gift for a friend in another country...") rather than a bare instruction helps keep the situation natural.',
            'Task order and independence matter: a later task that depends on successfully completing an earlier one can cause a single early failure to derail an entire session\'s worth of data, so tasks are often designed to be resettable or independent of each other where practical.',
            'Finally, a task needs a clear definition of "success" decided in advance — not just whether a participant eventually stumbles onto the right screen, but whether they reached it with the understanding and confidence the task was actually testing for, since a participant can technically complete a step by accident without the interface actually having communicated anything clearly.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why is "Click on the shipping calculator" a poorly written usability test task?',
              options: [
                'It is too short to be a valid task',
                'It reveals exactly where to look and what to click, testing nothing about real navigation or comprehension',
                'It cannot be understood by any participant',
                'Shipping-related tasks are not allowed in usability testing',
              ],
              correctIndex: 1,
              explanation: 'A task phrased around the interface\'s own labels and steps hands the participant the answer, defeating the purpose of testing whether they can find it themselves.',
            },
            {
              id: 'q2',
              question: 'Why should a task\'s definition of "success" be decided before the test, not just judged after the fact?',
              options: [
                'It doesn\'t matter, any completion counts as success',
                'A participant can technically stumble onto the right screen by accident, without the interface having actually communicated anything clearly',
                'Success criteria are only relevant for quantitative research',
                'Because tasks cannot be repeated across participants otherwise',
              ],
              correctIndex: 1,
              explanation: 'Deciding what genuine success looks like in advance prevents mistaking an accidental, confused path to the right answer for the interface actually working as intended.',
            },
          ],
        },
        {
          id: 'diary-studies-field-research',
          title: 'Diary Studies & Field Research',
          summary: 'Some behavior only shows up over time, or in context a lab session can\'t reproduce.',
          content: [
            'A usability test captures a single moment, in an artificial setting. Some questions need a longer time horizon or a real-world setting instead — this is where diary studies and field research fit in.',
            'A diary study asks participants to record their own experiences over an extended period (days or weeks), typically prompted at specific intervals or trigger events — useful for understanding behavior that unfolds gradually, like how a habit-forming app is actually used over the first month, which no single lab session could capture.',
            'Field research (or contextual inquiry) instead involves observing people in their own real environment — their home, their workplace — rather than a lab or remote screen-share, which surfaces context a controlled session strips away: the actual lighting, interruptions, competing devices, and physical constraints someone is really working within.',
            'Both methods trade convenience and speed for a kind of realism a shorter, controlled session can\'t offer — and both introduce a specific bias risk of their own: being observed can change how people behave (sometimes called the Hawthorne effect), so even field research participants may act somewhat differently than they would completely unobserved.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What kind of question is a diary study particularly well-suited to answering?',
              options: [
                'A question about a single, isolated moment in a lab setting',
                'A question about how behavior unfolds gradually over an extended period, like the first month of using a new app',
                'A question that requires no participant input at all',
                'A question only answerable through analytics',
              ],
              correctIndex: 1,
              explanation: 'Diary studies capture experience over time, which is exactly the kind of gradual, longitudinal pattern a single lab session can\'t reveal.',
            },
            {
              id: 'q2',
              question: 'What is the "Hawthorne effect" as it applies to field research?',
              options: [
                'A specific usability heuristic',
                'The tendency for people to behave differently simply because they know they\'re being observed',
                'A statistical method for analyzing survey data',
                'A rule about how many participants a field study needs',
              ],
              correctIndex: 1,
              explanation: 'Even in a naturalistic field setting, participants may still alter their behavior because they\'re aware of being watched — a bias worth keeping in mind when interpreting results.',
            },
          ],
        },
      ],
    },
    {
      id: 'making-sense-of-data',
      title: 'Making Sense of Data',
      steps: [
        {
          id: 'avoiding-research-bias',
          title: 'Avoiding Research Bias',
          summary: 'Bias doesn\'t require bad intentions — it creeps in through sampling, question wording, and analysis.',
          content: [
            'Research bias describes any systematic distortion that pulls findings away from what\'s actually true, and it can enter a study at nearly every stage, almost always without any intention to mislead. Sampling bias happens when the people recruited don\'t represent the actual population a decision is meant to serve — recruiting only from a company\'s existing power users, for instance, when the actual question concerns first-time users.',
            'Confirmation bias affects the researcher, not just the sample: a team that already has a favored explanation may unconsciously ask questions that invite confirming answers, and may notice and remember confirming evidence more readily than disconfirming evidence while reviewing sessions afterward.',
            'The leading-question problem covered earlier in interviews and surveys is really a specific case of this same broader issue — wording that nudges toward a particular answer, whether or not the researcher intends it to.',
            'A few practical safeguards help: having more than one person independently review the same raw research material before discussing conclusions together, deliberately looking for evidence that would disconfirm the team\'s working theory (not just evidence that supports it), and being explicit in a research plan about who was and wasn\'t included in the sample, so limitations are visible rather than quietly assumed away.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is sampling bias?',
              options: [
                'A bias that only affects quantitative surveys',
                'When the people recruited for a study don\'t represent the actual population a decision is meant to serve',
                'A type of leading question',
                'A bias that can only be fixed by increasing sample size',
              ],
              correctIndex: 1,
              explanation: 'Sampling bias comes from who gets studied — if the sample doesn\'t reflect the population the findings are meant to inform decisions about, the results can mislead even with a large enough sample size.',
            },
            {
              id: 'q2',
              question: 'What is one practical safeguard against confirmation bias when analyzing research findings?',
              options: [
                'Only ever having one person review the data, to keep interpretation consistent',
                'Deliberately looking for evidence that would disconfirm the team\'s working theory, not just evidence that supports it',
                'Skipping analysis entirely and reporting raw data only',
                'Always recruiting participants who already agree with the team\'s hypothesis',
              ],
              correctIndex: 1,
              explanation: 'Actively seeking disconfirming evidence — rather than only noticing what supports an existing belief — helps counteract the natural pull of confirmation bias.',
            },
          ],
        },
        {
          id: 'reporting-findings-to-stakeholders',
          title: 'Reporting Findings to Stakeholders',
          summary: 'Findings that never reach a decision-maker in a form they can act on might as well not exist.',
          content: [
            'Research only creates value once its findings actually reach the people making decisions, in a form they can use. A long, exhaustive report that nobody reads accomplishes less than a shorter, clearly prioritized summary that gets read and acted on. Leading with the most decision-relevant findings — not the order they happened to be discovered in — respects how busy stakeholders actually consume information.',
            'Framing findings around their implication for a decision, rather than just describing what was observed, makes them far more actionable. "3 of 5 participants missed the save button" is an observation; "the save button\'s current placement risks losing user work for a meaningful share of users, and should move above the fold" connects that same observation to a concrete decision.',
            'Video clips or direct quotes, used sparingly, often land with stakeholders far more persuasively than a slide summarizing the same point in the abstract — watching a real person struggle with something briefly, first-hand, tends to build a kind of empathy and urgency that a bullet point rarely achieves on its own.',
            'A recurring challenge is stakeholders overweighting one especially memorable anecdote from a report, echoing the same synthesis pitfall covered in UX Design Fundamentals — a good research report explicitly states how many participants experienced each finding, so a single vivid quote doesn\'t get mistaken for a majority pattern.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why is it more effective to frame a finding around its implication for a decision, rather than just as a raw observation?',
              options: [
                'It isn\'t more effective, raw observations are always clearer',
                'Connecting the observation directly to a concrete recommendation makes the finding far more actionable for stakeholders',
                'Decisions cannot be based on qualitative findings',
                'It removes the need to state how many participants were affected',
              ],
              correctIndex: 1,
              explanation: 'Stating what a finding means for a decision — not just what was observed — gives stakeholders something concrete to act on, rather than just information to file away.',
            },
            {
              id: 'q2',
              question: 'Why should a research report explicitly state how many participants experienced each finding, even when including a vivid quote?',
              options: [
                'It isn\'t necessary — a strong quote speaks for itself',
                'To prevent stakeholders from mistaking one memorable anecdote for a pattern that affected most or all participants',
                'Because quotes are not allowed in professional research reports',
                'Because participant counts are only relevant in quantitative surveys',
              ],
              correctIndex: 1,
              explanation: 'Explicitly noting prevalence keeps a single compelling quote from being overweighted as if it represented a majority finding.',
            },
          ],
        },
      ],
    },
    {
      id: 'research-operations',
      title: 'Research Operations',
      steps: [
        {
          id: 'building-a-research-practice',
          title: 'Building a Research Practice',
          summary: 'Research operations (ResearchOps) is the infrastructure that makes research repeatable, not a one-off event.',
          content: [
            'As an organization does more research, the operational side — recruiting participants, storing and organizing past findings, scheduling sessions, managing incentive payments — starts to take real, recurring effort of its own. Research operations (often shortened to ResearchOps) is the practice of building shared infrastructure and processes for that operational work, so individual researchers spend more time on the research itself.',
            'A research repository — a searchable, organized store of past studies, findings, and raw material — is one of the most valuable ResearchOps investments. Without one, the same question often gets researched from scratch repeatedly because nobody remembers, or can easily find, that a similar study already happened a year earlier.',
            'A shared participant panel (a pool of people who\'ve agreed to be contacted for future research, with basic screening information already on file) meaningfully speeds up recruiting compared to starting from zero for every single study, and helps avoid over-relying on whichever small group of users happens to be easiest to reach.',
            'Beyond logistics, a mature research practice also actively socializes findings across a team — making insights visible and discoverable to people who weren\'t directly involved in a study — since research that stays locked inside the team that conducted it has much less influence than research that becomes shared organizational knowledge.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What problem does a research repository primarily solve?',
              options: [
                'It makes participants easier to recruit',
                'It prevents the same question from being researched from scratch repeatedly, since past findings are stored and searchable',
                'It replaces the need to conduct any new research',
                'It is only useful for quantitative data',
              ],
              correctIndex: 1,
              explanation: 'A well-maintained repository means past research is discoverable, avoiding redundant studies and helping new work build on what\'s already known.',
            },
            {
              id: 'q2',
              question: 'Why does "socializing" research findings across a team matter, beyond just producing the findings?',
              options: [
                'It doesn\'t matter, findings are valuable purely by existing',
                'Research that stays locked inside the team that conducted it has far less organizational influence than research that becomes widely shared knowledge',
                'It is only relevant for research about accessibility',
                'It eliminates the need for a research repository',
              ],
              correctIndex: 1,
              explanation: 'Findings create far more value when other teams and decision-makers actually encounter and use them, rather than staying siloed with the team that ran the study.',
            },
          ],
        },
        {
          id: 'ethics-and-participant-care',
          title: 'Ethics & Participant Care',
          summary: 'Research involves real people, whose time, privacy, and comfort are not incidental details.',
          content: [
            'Ethical research practice starts with informed consent: participants should understand, before a session begins, what they\'ll be asked to do, how their data (recordings, notes, personal information) will be used and stored, and that they can stop at any point without needing to justify why. Consent given without genuinely understanding these things isn\'t meaningful consent.',
            'Fair incentives matter both ethically and practically — compensating participants appropriately for their time respects the real value of what they\'re contributing, and helps recruit a sample that isn\'t skewed toward only the people willing to participate for free or for a token reward.',
            'Privacy deserves deliberate handling, not an afterthought: recordings and notes often contain identifying or sensitive information, and should be stored securely, access-limited to people who genuinely need it, and anonymized in any findings shared more broadly, unless a participant has specifically consented to being identifiable.',
            'Extra care is warranted when research involves participants from a vulnerable population — including minors, people discussing a sensitive health condition, or anyone in a situation where the power dynamic between researcher and participant is uneven — since standard consent and comfort practices may not be sufficient protection in those specific contexts, and may call for additional safeguards or specialized guidance beyond a standard research protocol.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What makes informed consent "meaningful," according to this step?',
              options: [
                'Simply having a participant sign any form, regardless of what it says',
                'The participant genuinely understanding what they\'ll be asked to do, how their data will be used, and that they can stop at any time',
                'Consent is only meaningful if given in writing, never verbally',
                'It requires payment to be considered valid',
              ],
              correctIndex: 1,
              explanation: 'Genuine informed consent requires real understanding of the session and data handling — a signature alone, without that understanding, isn\'t meaningful consent.',
            },
            {
              id: 'q2',
              question: 'Why might research involving a vulnerable population require additional safeguards beyond a standard protocol?',
              options: [
                'It doesn\'t — standard practices are always sufficient for every population',
                'Standard consent and comfort practices may not adequately protect people in situations involving an uneven power dynamic or particular sensitivity',
                'Vulnerable populations should simply be excluded from all research',
                'Only quantitative research needs to consider vulnerable populations',
              ],
              correctIndex: 1,
              explanation: 'Certain contexts — minors, sensitive health topics, uneven power dynamics — call for extra protections beyond what a standard research protocol typically provides.',
            },
          ],
        },
      ],
    },
  ],
};
