import type { Subject } from '../types';

export const subject: Subject = {
  id: 'design-systems',
  title: 'Design Systems',
  description: 'What a design system actually is beyond a UI kit — tokens, component architecture, documentation, governance, and how one gets adopted.',
  icon: '🧩',
  color: '#E76F51',
  levels: [
    {
      id: 'what-is-a-design-system',
      title: 'What Is a Design System?',
      steps: [
        {
          id: 'beyond-a-ui-kit',
          title: 'Beyond a UI Kit',
          summary: 'A design system is a set of rules and shared components — not just a file of pre-made screens.',
          content: [
            'A UI kit is a collection of pre-made visual assets — buttons, icons, color swatches — that a designer can drag into a mockup. A design system is broader and more structural: it\'s a single source of truth combining reusable components, the design tokens and principles behind them, and documented guidelines for how and when to use each piece, shared across designers and engineers alike.',
            'The distinction matters because a UI kit alone doesn\'t prevent drift. Two designers can both use "buttons from the kit" while quietly diverging — one adds a slightly different padding here, another reaches for a one-off custom component there — because a kit provides assets, but not the shared rules and single implementation that keep a product consistent as it\'s built by many different people over time.',
            'A mature design system typically spans both design and engineering artifacts in parallel: a component exists once as a design file (or equivalent) and once as real, shipped code, with both versions kept in sync — which is what actually prevents the common gap between "what the mockup shows" and "what got built."',
            'Well-known public examples — Google\'s Material Design, Apple\'s Human Interface Guidelines and its associated components, Shopify\'s Polaris — illustrate the scope: far more than a color palette, they include interaction guidelines, accessibility requirements, writing/voice guidance, and detailed rules for when a pattern should or shouldn\'t be used.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is the key difference between a UI kit and a design system?',
              options: [
                'They are exactly the same thing with different names',
                'A UI kit is a collection of visual assets; a design system also includes shared rules, tokens, and documentation that keep usage consistent across a whole team',
                'A design system only applies to engineers, never designers',
                'A UI kit always contains more components than a design system',
              ],
              correctIndex: 1,
              explanation: 'A UI kit provides assets to use, but a design system adds the shared rules, principles, and documentation that actually prevent inconsistent use of those assets over time.',
            },
            {
              id: 'q2',
              question: 'Why does a mature design system typically maintain both a design-file version and a coded version of each component?',
              options: [
                'To make the system harder to use on purpose',
                'Keeping both in sync is what prevents the common gap between what a mockup shows and what actually gets built',
                'Only the coded version is ever necessary',
                'Design files are only used for marketing purposes',
              ],
              correctIndex: 1,
              explanation: 'Maintaining a synced design and code version of each component is what actually closes the gap between design intent and shipped reality.',
            },
          ],
        },
        {
          id: 'the-business-case',
          title: 'The Business Case for Design Systems',
          summary: 'Consistency at scale, less rebuilt work, and faster shipping — the practical payoff of investing in a system.',
          content: [
            'Building a design system is a real upfront investment, so it\'s worth being explicit about what it buys back. The most direct benefit is consistency at scale: as a product and team grow, a shared system is what keeps buttons, spacing, and interaction patterns behaving the same way across dozens of screens built by different people, instead of consistency depending on everyone individually remembering and agreeing on every past decision.',
            'A second, often underappreciated benefit is speed. Once a well-documented button, form field, or modal component exists, building a new screen becomes assembly rather than invention — teams stop re-solving the same small design and engineering problems (how should disabled state look, what\'s the correct focus outline) over and over on every new feature.',
            'This directly reduces what\'s often called "design debt" — the accumulated cost of many slightly-different, one-off implementations of what should be the same underlying component. Design debt compounds the same way technical debt does: every inconsistent variant makes the next redesign or accessibility fix more expensive, because there are more places to find and update.',
            'The tradeoff worth acknowledging honestly: a design system has real maintenance cost, and building one too early — before a product\'s patterns have stabilized, or before there\'s more than one team building on it — can mean investing significant effort into abstractions that get thrown away as the product\'s real needs become clearer.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'How does a design system typically increase the speed of building new features?',
              options: [
                'It doesn\'t — design systems always slow initial development down',
                'Well-documented, reusable components turn new-screen work into assembly rather than reinventing the same small problems each time',
                'By removing the need for any design review',
                'By automatically generating all product copy',
              ],
              correctIndex: 1,
              explanation: 'Once solved once and documented, common patterns don\'t need to be redesigned and re-engineered from scratch for every new feature.',
            },
            {
              id: 'q2',
              question: 'What is a legitimate risk of building a full design system too early?',
              options: [
                'There is no risk — earlier is always strictly better',
                'Investing significant effort into abstractions before a product\'s patterns have stabilized can mean building things that get thrown away',
                'Early design systems are always more accessible',
                'It guarantees the product will fail',
              ],
              correctIndex: 1,
              explanation: 'Building a system before real usage patterns have stabilized risks committing to structures and components that don\'t end up matching the product\'s actual needs.',
            },
          ],
        },
      ],
    },
    {
      id: 'foundations-and-tokens',
      title: 'Foundations & Tokens',
      steps: [
        {
          id: 'design-tokens-explained',
          title: 'Design Tokens Explained',
          summary: 'The small named values that bridge design decisions and the actual code that ships.',
          content: [
            'A design token is a named, reusable value — a specific color, spacing size, font size, or corner radius — stored once and referenced everywhere it\'s used, instead of being hardcoded repeatedly throughout a codebase or a set of design files. Instead of a button and a card both independently specifying the hex value "#6C5CE7," both reference a token like `color-primary`, which is defined in exactly one place.',
            'The practical payoff shows up the moment something needs to change: updating one token\'s value propagates everywhere that token is referenced, instead of requiring a manual hunt through every file that happens to use that exact hex code — this project\'s own theming approach, covered in its README, is a direct, small-scale example of the same idea.',
            'Tokens are commonly organized in tiers. "Global" or "primitive" tokens hold raw values (a specific shade of blue, a specific pixel size) with no assigned meaning yet. "Semantic" or "alias" tokens then point to a primitive token but carry a functional name (`color-danger` might point to that same raw red value, but the semantic name is what a component actually references). This layering is exactly what makes theming — like swapping an entire light/dark palette — a matter of redefining the semantic layer\'s mappings, without ever touching the components that use them.',
            'Tokens exist specifically to translate cleanly between design tools and code: a token defined in a design tool can be exported and consumed directly by the codebase, keeping the two in sync without a person manually re-typing values by hand in both places.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What problem does storing a color as a single named token solve, compared to hardcoding the same hex value in many places?',
              options: [
                'It makes the color load faster',
                'Updating the token\'s value propagates everywhere it\'s used, instead of requiring a manual search-and-replace across every file',
                'It has no practical benefit over hardcoding',
                'It is only useful for accessibility, not maintenance',
              ],
              correctIndex: 1,
              explanation: 'A single source of truth for a value means changing it once updates every place that references the token, rather than hunting down every hardcoded instance.',
            },
            {
              id: 'q2',
              question: 'What is the difference between a "primitive" token and a "semantic" token?',
              options: [
                'They are the same thing, just different names',
                'A primitive token holds a raw value with no assigned meaning; a semantic token points to a primitive value but carries a functional name components can reference',
                'Semantic tokens can only be used for typography',
                'Primitive tokens are only used in dark mode',
              ],
              correctIndex: 1,
              explanation: 'This layering — semantic tokens referencing primitives — is what makes swapping an entire theme a matter of remapping the semantic layer, without touching components.',
            },
          ],
        },
        {
          id: 'building-a-foundation',
          title: 'Building a Foundation',
          summary: 'Color, type, and spacing scales — designed together as a coherent system, not chosen ad hoc.',
          content: [
            'The "foundation" layer of a design system covers the base decisions everything else is built on: a color system, a type scale, and a spacing scale — the same building blocks covered individually back in the Visual Design subject, but here treated explicitly as a deliberately designed, interconnected system rather than individual choices made screen by screen.',
            'A color system for a design system typically defines a full range (often numbered shades, like 100 through 900) for each core hue, not just one primary value — giving enough range to handle hover/pressed states, disabled states, borders, and backgrounds derived from the same base color, all while staying visually related to one another.',
            'A type scale and spacing scale, as covered earlier in Visual Design Basics, become foundation tokens here: instead of a designer picking "somewhere around 14px" by eye each time, the system defines a fixed, limited set of steps (`text-sm`, `text-base`, `text-lg`; `space-2`, `space-4`, `space-8`) that every component draws from, which is what actually enforces the consistency a design system promises.',
            'A foundation is deliberately meant to be the slowest-changing layer of a system. Components and patterns built on top of it can evolve relatively often; changing the foundation itself (a new color system, a new type scale) is a much larger, more disruptive change precisely because so much else depends on it — which is why foundational decisions deserve extra care before being locked in.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why does a design system\'s color system typically define a full range of shades for each hue, not just one value?',
              options: [
                'To make the color palette look larger for marketing purposes',
                'To provide enough range to handle hover/pressed/disabled states and derived backgrounds while staying visually related',
                'Because a single shade cannot be stored as a token',
                'It has no practical purpose, it\'s purely aesthetic',
              ],
              correctIndex: 1,
              explanation: 'A full range of shades gives components what they need for various states (hover, disabled, etc.) while keeping everything visually coherent with the base hue.',
            },
            {
              id: 'q2',
              question: 'Why is the foundation layer described as the "slowest-changing" part of a design system?',
              options: [
                'Because it is technically impossible to change',
                'Because so many components and patterns depend on it, making foundational changes far more disruptive than changes higher up the system',
                'Because it is rebuilt every week by convention',
                'Because foundations are not allowed to include color',
              ],
              correctIndex: 1,
              explanation: 'Since components across the whole system build on the foundation, changing it has a much wider ripple effect than changing an individual component or pattern.',
            },
          ],
        },
      ],
    },
    {
      id: 'component-architecture',
      title: 'Component Architecture',
      steps: [
        {
          id: 'atomic-design-methodology',
          title: 'Atomic Design Methodology',
          summary: 'Brad Frost\'s way of thinking about interfaces as layered compositions, from tiny pieces up to full pages.',
          content: [
            'Atomic design, a methodology introduced by Brad Frost, organizes interface elements into five layers of increasing complexity, borrowing its naming from chemistry. Atoms are the smallest functional pieces — a single button, a label, an input field — that can\'t be broken down further without losing their purpose. Molecules combine a small number of atoms into a simple, functional unit, like a labeled input paired with its submit button, forming a basic search form.',
            'Organisms combine molecules (and sometimes atoms) into a more complex, distinct section of an interface — a full site header combining a logo, a navigation menu, and that search form molecule together. Templates arrange organisms into a page-level layout, but with placeholder content, showing structure without final content. Pages are templates filled with real, final content, ready to represent what a user actually sees.',
            'The value of this layered thinking isn\'t the specific five names — it\'s the discipline of noticing which layer a component actually belongs to, since that determines where reuse and consistency should be enforced. Fixing a button\'s padding at the atom layer automatically fixes every molecule, organism, and page built from it, which is a fundamentally different (and more scalable) fix than editing padding individually wherever a similar-looking button happens to appear.',
            'In practice, most teams don\'t rigidly enforce all five named layers, but the underlying idea — small, single-purpose pieces composed into larger, more specific structures — shows up in nearly every real component library, whether or not a team uses the exact atomic-design vocabulary.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'In atomic design, what distinguishes a "molecule" from an "atom"?',
              options: [
                'A molecule is always larger in file size',
                'An atom is a smallest functional piece (like a single button); a molecule combines a small number of atoms into a simple functional unit',
                'Molecules can only exist on mobile screens',
                'There is no meaningful difference between the two',
              ],
              correctIndex: 1,
              explanation: 'Atoms are indivisible functional pieces; molecules are the first level of composition, combining a few atoms into something with its own simple purpose.',
            },
            {
              id: 'q2',
              question: 'What is the practical benefit of fixing a shared property (like padding) at the "atom" layer, rather than wherever it happens to appear?',
              options: [
                'There is no practical difference either way',
                'The fix automatically propagates to every molecule, organism, and page built from that atom, rather than needing individual fixes everywhere',
                'It only affects the visual design tool, not the shipped product',
                'It requires rebuilding the entire design system from scratch',
              ],
              correctIndex: 1,
              explanation: 'Because higher layers are composed from atoms, a fix at the atom level cascades through every composition built on top of it — the core value of thinking in layers.',
            },
          ],
        },
        {
          id: 'component-variants-states',
          title: 'Component Variants & States',
          summary: 'A single button is really a whole matrix of possible appearances — designing that matrix deliberately avoids gaps.',
          content: [
            'A single component in a real design system usually needs to support a range of variants (different visual treatments for different purposes — a primary button, a secondary button, a destructive button) crossed with a range of states (how a component currently behaves — default, hover, pressed, focused, disabled, loading). A "button" in a mature system is really a full matrix of these combinations, not one fixed appearance.',
            'Designing this matrix deliberately, rather than improvising states as they come up in individual screens, is what prevents gaps — a destructive button with no defined disabled state, discovered only after it ships in a broken-looking state, is a common symptom of skipping this exercise upfront.',
            'Not every variant needs a visually distinct treatment for every state — a "ghost" or text-only button variant might share most of its states\' behavior with a primary button, differing mainly in its resting appearance. Part of designing the system well is identifying where states can be shared versus where a variant genuinely needs its own distinct handling.',
            'States deserve the same accessibility attention as anything else in this learning path: a disabled state needs sufficient contrast to be legible as "present but unavailable" rather than invisible, and a focus state needs to remain visible regardless of which variant it\'s applied to — a design system is exactly the right layer to enforce that once, rather than relying on every individual usage to remember it.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does it mean to think of a button component as a "matrix" of variants and states?',
              options: [
                'That a button can only have one fixed appearance',
                'That the component needs to support combinations of visual variants (primary, destructive) crossed with behavioral states (hover, disabled, loading)',
                'That variants and states are unrelated concepts with no connection',
                'That only destructive buttons need multiple states',
              ],
              correctIndex: 1,
              explanation: 'A real-world component typically needs to work across a full grid of variant × state combinations, not just one appearance — designing that grid deliberately avoids missing combinations.',
            },
            {
              id: 'q2',
              question: 'Why is a consistently visible focus state, enforced at the design-system level, valuable?',
              options: [
                'Because focus states are purely decorative',
                'Because it guarantees keyboard accessibility is handled once, correctly, rather than depending on every individual usage remembering to add it',
                'Because it removes the need for any hover state',
                'Because focus only matters for destructive buttons',
              ],
              correctIndex: 1,
              explanation: 'Enforcing an accessible focus state at the system level (rather than per-usage) is exactly the kind of consistency problem a design system is meant to solve.',
            },
          ],
        },
      ],
    },
    {
      id: 'documentation-and-governance',
      title: 'Documentation & Governance',
      steps: [
        {
          id: 'writing-component-documentation',
          title: 'Writing Usable Component Documentation',
          summary: 'A component nobody can figure out how to use correctly might as well not exist.',
          content: [
            'A design system component is only as useful as its documentation is clear. Good documentation for a component covers more than what it looks like: when to use it (and, just as importantly, when not to — which pattern to reach for instead in a given situation), its available props or variants, and any constraints (a maximum recommended length for a button label, for instance).',
            'Concrete "do" and "don\'t" examples, shown side by side, communicate usage rules far faster than a paragraph of prose describing the same rule. Showing a correctly-used dropdown next to a misused one (say, one crammed with fifty unsorted options where a searchable list would serve better) makes the guidance immediately legible in a way abstract writing often doesn\'t.',
            'Accessibility notes belong directly in a component\'s documentation, not in a separate document most people won\'t think to check — noting that a modal component automatically traps focus, or that an icon-only button variant requires the consumer to supply an accessible label, puts the responsibility exactly where someone using the component will actually see it.',
            'Documentation that goes stale is arguably worse than no documentation, since it actively misleads people who trust it. Treating documentation updates as a required part of shipping any component change — not an optional afterthought — is what keeps a system\'s documentation trustworthy over time.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why is documenting "when NOT to use" a component just as important as documenting how to use it?',
              options: [
                'It isn\'t important, only positive usage guidance matters',
                'It helps people recognize when a different pattern is actually the better fit, preventing misuse of a component in the wrong situation',
                'It is only relevant for destructive components',
                'Negative guidance is required by law in most jurisdictions',
              ],
              correctIndex: 1,
              explanation: 'Knowing when a component is the wrong choice is just as useful as knowing how to use it correctly — it steers people toward the right pattern instead of a convenient but poor fit.',
            },
            {
              id: 'q2',
              question: 'Why should accessibility notes live directly inside a component\'s own documentation, rather than a separate accessibility guide?',
              options: [
                'Separate accessibility guides are always more effective',
                'Putting the notes where someone using the component will actually see them makes it far more likely the guidance is actually followed',
                'Accessibility notes are not relevant to individual components',
                'It has no practical effect either way',
              ],
              correctIndex: 1,
              explanation: 'Placing accessibility guidance directly alongside the component someone is actively using dramatically increases the odds they see and follow it, compared to a separate document.',
            },
          ],
        },
        {
          id: 'governance-models',
          title: 'Governance Models',
          summary: 'Who gets to change a shared system, and how, matters as much as what the system contains.',
          content: [
            'A design system needs a clear answer to a question that grows more important as more teams depend on it: who is allowed to propose, approve, and make changes to shared components? Different governance models answer this differently, with real tradeoffs.',
            'A centralized model has one dedicated team owning the system, reviewing and building all changes themselves. This tends to produce the most consistent, high-quality result, but can become a bottleneck as more teams want changes faster than one central team can handle, and can leave that team disconnected from the day-to-day problems individual product teams are actually running into.',
            'A federated (or contribution) model instead lets any team propose and even build changes, following a defined contribution process and review by the system\'s maintainers, rather than requiring the central team to build everything themselves. This scales better as an organization grows, but requires a genuinely well-documented process and reliable reviewers to avoid the same consistency drift a design system exists to prevent.',
            'Whichever model is chosen, versioning matters: components need a clear way to signal breaking changes (typically via semantic versioning) so consuming teams can choose when to adopt an update, rather than a shared component silently changing underneath a live product without warning.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is a common downside of a fully centralized design system governance model?',
              options: [
                'It always produces inconsistent components',
                'It can become a bottleneck, since one team may not be able to handle change requests as fast as many product teams want them',
                'It cannot support component documentation',
                'It requires every team to have their own separate design system',
              ],
              correctIndex: 1,
              explanation: 'Routing every change through one central team tends to produce consistent results but can create a bottleneck as the number of dependent teams grows.',
            },
            {
              id: 'q2',
              question: 'Why does versioning (like semantic versioning) matter for a shared design system?',
              options: [
                'It has no practical purpose beyond labeling',
                'It lets consuming teams choose when to adopt breaking changes, rather than a shared component silently changing underneath a live product',
                'It is only relevant for backend systems, not design systems',
                'It replaces the need for any documentation',
              ],
              correctIndex: 1,
              explanation: 'Clear versioning signals when a change might break existing usage, letting teams adopt updates deliberately instead of being surprised by an unannounced change.',
            },
          ],
        },
      ],
    },
    {
      id: 'adoption-and-evolution',
      title: 'Adoption & Evolution',
      steps: [
        {
          id: 'rolling-out-a-design-system',
          title: 'Rolling Out a Design System',
          summary: 'A design system that nobody actually uses is a well-documented shelf ornament.',
          content: [
            'Building a design system is only half the challenge — getting existing teams to actually adopt it, especially inside a product that already has a large amount of pre-existing, inconsistent UI, is its own significant effort. A rollout plan needs to answer concretely: does the whole product migrate at once, or does adoption happen incrementally, feature by feature, as teams touch existing code anyway?',
            'Incremental adoption — requiring new features to use the system, while leaving already-shipped screens alone until they\'re naturally revisited — tends to be far more realistic than a big-bang rewrite, which competes directly against a team\'s regular feature roadmap and is an easy project to deprioritize indefinitely once other work feels more urgent.',
            'Buy-in matters as much as the technical rollout plan. Teams that had no say in a system\'s early decisions are understandably less invested in adopting it, and may see it as an externally imposed constraint rather than something built to solve their own problems. Involving representatives from consuming teams during the system\'s design — not just after it\'s finished — meaningfully improves adoption.',
            'A useful, concrete way to track rollout progress is measuring actual component adoption (what percentage of buttons across the product use the system\'s button component, versus a one-off custom implementation) rather than relying on an impression of "I think most people are using it now."',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why does incremental adoption of a design system tend to be more realistic than a full big-bang rewrite?',
              options: [
                'Because incremental adoption always happens faster overall',
                'Because a full rewrite competes directly against the regular feature roadmap and is easy to deprioritize indefinitely',
                'Because big-bang rewrites are technically impossible',
                'Because incremental adoption requires no planning at all',
              ],
              correctIndex: 1,
              explanation: 'A large rewrite has to compete for priority against ongoing feature work, making it an easy project to keep pushing back — incremental adoption avoids that direct competition.',
            },
            {
              id: 'q2',
              question: 'Why does involving consuming teams during a design system\'s creation — not just after — improve adoption?',
              options: [
                'It doesn\'t affect adoption at all',
                'Teams that helped shape the system are more invested in it, rather than seeing it as an externally imposed constraint',
                'It is required by most component libraries',
                'It eliminates the need for any documentation',
              ],
              correctIndex: 1,
              explanation: 'Involvement earlier in the process builds genuine investment, rather than presenting a finished system to teams who had no say and may resist it as imposed from outside.',
            },
          ],
        },
        {
          id: 'measuring-and-evolving',
          title: 'Measuring & Evolving a Design System',
          summary: 'A design system is a living product, with its own users, roadmap, and eventual need to retire old parts.',
          content: [
            'Treating a design system as a product in its own right — with its own users (the teams consuming it) and its own success metrics — tends to produce better long-term outcomes than treating it as a one-time deliverable that\'s "done" once shipped.',
            'Beyond raw component adoption rate, useful signals include how often teams file requests for missing components or patterns (a sign of real gaps), how often teams build one-off custom components instead of using the system (a sign either of gaps or of insufficient awareness/documentation), and direct qualitative feedback from consuming teams about friction they\'re experiencing.',
            'Design systems also need an explicit deprecation process, not just a way to add new things. As a system matures, some early components inevitably get replaced by better ones — without a clear, communicated deprecation path (a warning period, migration guidance, a defined removal date), old and new versions of the same component tend to coexist indefinitely, quietly recreating the inconsistency the system was built to prevent.',
            'The long-term risk of neglecting this evolution work is ossification: a system that was well-designed for the product\'s needs at one point in time, but never adapted as those needs changed, gradually turns into exactly the kind of rigid, unhelpful constraint that makes teams route around it with one-off custom components — undermining the whole point of having a shared system in the first place.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why is a high rate of teams building one-off custom components, instead of using the design system, a useful signal to track?',
              options: [
                'It isn\'t useful, custom components are always fine',
                'It can indicate real gaps in the system, or insufficient awareness/documentation of what already exists',
                'It always means the design system should be deleted',
                'It only matters for engineering teams, not design',
              ],
              correctIndex: 1,
              explanation: 'A high rate of workarounds usually points to either a genuine coverage gap in the system or a documentation/awareness problem — both worth investigating.',
            },
            {
              id: 'q2',
              question: 'What risk does a missing deprecation process create for a design system?',
              options: [
                'No risk — systems don\'t need deprecation processes',
                'Old and new versions of the same component tend to coexist indefinitely, quietly recreating the inconsistency the system was meant to prevent',
                'It means new components can never be added',
                'It automatically breaks all existing components immediately',
              ],
              correctIndex: 1,
              explanation: 'Without a clear path to retire outdated components, they tend to linger alongside newer replacements, undermining the consistency a design system is supposed to guarantee.',
            },
          ],
        },
      ],
    },
  ],
};
