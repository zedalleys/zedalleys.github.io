import type { Subject } from '../types';

export const subject: Subject = {
  id: 'visual-design-basics',
  title: 'Visual Design Basics',
  description: 'Build an eye for color, typography, hierarchy, and layout — the building blocks that make interfaces feel clear and intentional.',
  icon: '🎨',
  color: '#E76F51',
  levels: [
    {
      id: 'design-principles',
      title: 'Design Principles',
      steps: [
        {
          id: 'color-theory',
          title: 'Color Theory for Interfaces',
          summary: 'How color communicates meaning, hierarchy, and state in digital products.',
          content: [
            'Color in interface design isn\'t decoration — it\'s communication. Before choosing colors, it helps to understand a few core relationships. Complementary colors sit opposite each other on the color wheel and create high contrast; analogous colors sit next to each other and feel harmonious; a single hue at different saturations and lightness values can carry an entire interface on its own.',
            'In practice, most interfaces are built from a restrained system: a primary color for key actions and brand identity, a neutral palette (grays) for text and backgrounds, and a small set of semantic colors — usually red for error/destructive, green for success, yellow/orange for warning, and blue for informational states.',
            'Consistency matters more than the specific hues chosen. If a warning is orange in one screen and red in another, users lose the ability to build a mental shortcut for what a color means. Consistent, restrained use of color is what allows color to actually function as a signal instead of noise.',
            'Accessibility is non-negotiable: color should never be the only way information is conveyed (a colorblind user may not distinguish red from green), and text needs sufficient contrast against its background to meet WCAG guidelines.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why should color rarely be the only way to convey information in an interface?',
              options: [
                'Because color is purely decorative and carries no meaning',
                'Because colorblind users may not be able to distinguish certain colors, so meaning can be lost',
                'Because designers are not allowed to use more than one color',
                'Because color always slows down page load times',
              ],
              correctIndex: 1,
              explanation: 'Relying solely on color excludes colorblind users. Pairing color with icons, text, or patterns keeps meaning accessible to everyone.',
            },
            {
              id: 'q2',
              question: 'What problem occurs if a "warning" state is orange on one screen and red on another?',
              options: [
                'Nothing — colors can vary freely between screens',
                'It improves visual variety and keeps the UI interesting',
                'Users lose the ability to build a reliable mental shortcut for what that color signals',
                'It has no effect on usability',
              ],
              correctIndex: 2,
              explanation: 'Consistent semantic color use lets users learn a shortcut ("red = danger"). Inconsistent use breaks that shortcut and forces users to re-read every time.',
            },
          ],
        },
        {
          id: 'typography-essentials',
          title: 'Typography Essentials',
          summary: 'How type choices shape readability, tone, and hierarchy.',
          content: [
            'Typography is one of the highest-leverage tools in interface design because nearly every screen is dominated by text. Three fundamentals drive most typographic decisions: typeface, scale, and line length/spacing.',
            'Typeface sets tone before a single word is read — a geometric sans-serif feels modern and neutral, a serif feels editorial or trustworthy, a rounded sans feels friendly and approachable. Most products limit themselves to one or two typefaces to avoid visual noise.',
            'Scale creates a type hierarchy: a well-built system defines a small set of sizes and weights (e.g., a heading scale, body text, captions) so that importance is instantly readable at a glance, without the user needing to consciously parse it.',
            'Line length and line-height affect pure readability: lines that are too long make it hard for the eye to track back to the start of the next line, and tight line-height makes paragraphs feel cramped. A commonly cited guideline is 45–75 characters per line for comfortable reading, with line-height around 1.4–1.6x the font size for body text.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is the primary purpose of a type scale (defined heading, body, and caption sizes)?',
              options: [
                'To make the interface look more colorful',
                'To create a hierarchy so importance is instantly readable without conscious effort',
                'To slow down the reading speed of users',
                'To reduce the number of fonts available',
              ],
              correctIndex: 1,
              explanation: 'A type scale gives every piece of text a clear role, letting users scan and understand structure and importance at a glance.',
            },
            {
              id: 'q2',
              question: 'What issue does an excessively long line length (very wide paragraph) typically cause?',
              options: [
                'It makes text load faster',
                'It makes it harder for the eye to track back to the start of the next line, hurting readability',
                'It automatically improves accessibility',
                'It has no effect on reading comfort',
              ],
              correctIndex: 1,
              explanation: 'Long lines force more effort from the eye to find the next line, which is why comfortable reading widths are usually kept around 45–75 characters.',
            },
          ],
        },
      ],
    },
    {
      id: 'layout-hierarchy',
      title: 'Layout & Hierarchy',
      steps: [
        {
          id: 'visual-hierarchy-gestalt',
          title: 'Visual Hierarchy & Gestalt Principles',
          summary: 'How the eye is guided through a screen, and the perceptual rules behind it.',
          content: [
            'Visual hierarchy is the deliberate ordering of elements so a user\'s attention lands where it should, in the order it should. It\'s built from a handful of levers: size (bigger draws attention first), contrast (higher contrast stands out from its surroundings), color, whitespace, and position (top-left is typically scanned first in left-to-right reading cultures).',
            'Much of how hierarchy works traces back to Gestalt psychology — a set of principles describing how humans naturally group visual elements. Proximity says elements placed close together are perceived as related. Similarity says elements sharing a visual trait (color, shape) are perceived as part of the same group even if spaced apart. Common region says elements enclosed in a shared boundary (like a card) are seen as one unit.',
            'These aren\'t abstract theory — they explain very practical decisions. Why does a form label sit close to its input rather than centered between two fields? Proximity. Why do all primary buttons across an app share the same color? Similarity. Why does grouping settings inside bordered cards feel more organized than a flat list? Common region.',
            'Good visual hierarchy is often invisible when done well — the user simply "knows" where to look next without being able to explain why.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Which Gestalt principle explains why a label placed directly above its input field is understood as belonging to it?',
              options: [
                'Similarity',
                'Proximity',
                'Closure',
                'Continuation',
              ],
              correctIndex: 1,
              explanation: 'Proximity states that elements placed close together are perceived as related — which is exactly why labels sit near their fields.',
            },
            {
              id: 'q2',
              question: 'Which of the following is NOT typically a lever used to establish visual hierarchy?',
              options: [
                'Size',
                'Contrast',
                'Whitespace',
                'The programming language used to build the interface',
              ],
              correctIndex: 3,
              explanation: 'Hierarchy is established through visual and spatial levers — size, contrast, color, whitespace, and position — not the underlying tech stack.',
            },
          ],
        },
        {
          id: 'grids-spacing',
          title: 'Grids & Spacing Systems',
          summary: 'Why consistent spacing scales make interfaces feel calm and intentional.',
          content: [
            'A grid gives a layout invisible structure — a set of columns and consistent gutters that elements align to, so a screen feels organized even when it contains many different components. Most web and app interfaces use a 12-column grid because it divides evenly into halves, thirds, and quarters, giving designers flexibility without breaking alignment.',
            'Alongside grids, most design systems define a spacing scale — a fixed set of values (commonly a 4px or 8px base, e.g., 4, 8, 12, 16, 24, 32, 48) used for all margins and padding, rather than arbitrary numbers. This keeps spacing visually consistent and makes a system easier for a whole team to use predictably.',
            'Consistent spacing is one of the fastest ways to make an interface look more "professional" without changing a single color or font — uneven, arbitrary spacing is one of the biggest tells of an unpolished design, even to viewers who couldn\'t articulate why something looks off.',
            'Whitespace itself is an active design tool, not empty leftover space. Generous whitespace around a key action draws attention to it; tight whitespace groups related items and signals density.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why do design systems typically use a fixed spacing scale (e.g., multiples of 4 or 8) instead of arbitrary pixel values?',
              options: [
                'It has no real benefit, it\'s just a convention',
                'It keeps spacing visually consistent and predictable across a whole product and team',
                'It makes the interface load faster',
                'It is required by all programming languages',
              ],
              correctIndex: 1,
              explanation: 'A constrained spacing scale removes guesswork and keeps every screen visually consistent, even when built by different people.',
            },
            {
              id: 'q2',
              question: 'How should whitespace be thought of in interface design?',
              options: [
                'As wasted space that should be minimized wherever possible',
                'As an active design tool that can draw attention or signal grouping/density',
                'As something only relevant to print design',
                'As irrelevant to visual hierarchy',
              ],
              correctIndex: 1,
              explanation: 'Whitespace actively shapes attention and grouping — generous space highlights importance, tight space signals relatedness or density.',
            },
          ],
        },
      ],
    },
    {
      id: 'iconography-imagery',
      title: 'Iconography & Imagery',
      steps: [
        {
          id: 'iconography-basics',
          title: 'Iconography Basics',
          summary: 'Icons are a compressed language — and like any language, ambiguity breaks communication.',
          content: [
            'An icon is a small piece of visual shorthand meant to be recognized instantly. That works well for a handful of nearly universal symbols — a magnifying glass for search, an envelope for mail — but breaks down quickly for anything less standardized. A "settings" gear is fairly well understood; an icon invented specifically for one app\'s unique feature usually isn\'t.',
            'The safest rule of thumb: pair an icon with a text label whenever the icon\'s meaning isn\'t close to universally recognized, especially for primary or destructive actions. Icon-only buttons save space, but that space savings isn\'t worth it if a meaningful fraction of users have to tap it just to find out what it does.',
            'Consistency within an icon set matters as much as the individual icons. A shared grid size, stroke weight, corner radius, and level of detail (fully outlined vs. filled, simple vs. ornate) keeps a set feeling like one coherent language rather than icons borrowed from several different libraries — which, visually, is exactly what mismatched stroke weights and styles look like.',
            'Icons should also carry the same accessibility treatment as any other meaningful visual: an icon-only button needs an accessible name (via an `aria-label` or equivalent) so a screen reader announces what it does, not just that an unlabeled button exists.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'When should an icon be paired with a text label rather than used alone?',
              options: [
                'Always — icons should never be used without a label',
                'Whenever its meaning isn\'t close to universally recognized, especially for primary or destructive actions',
                'Only on desktop, never on mobile',
                'Only when the icon is decorative',
              ],
              correctIndex: 1,
              explanation: 'Icon-only design only works reliably for near-universal symbols; anything less standardized risks users not understanding — or not even noticing — the control.',
            },
            {
              id: 'q2',
              question: 'Why does consistent stroke weight and style across an icon set matter?',
              options: [
                'It has no real effect, it\'s purely a stylistic nitpick',
                'Mismatched icon styles read as if they were borrowed from different libraries, breaking the sense of one coherent visual language',
                'It only matters for animated icons',
                'It is required for icons to load correctly',
              ],
              correctIndex: 1,
              explanation: 'A consistent grid, stroke weight, and level of detail is what makes a set of icons feel like one designed system rather than a mismatched collection.',
            },
          ],
        },
        {
          id: 'working-with-imagery',
          title: 'Working with Imagery',
          summary: 'Photography and illustration set tone — and can just as easily undermine hierarchy if left unchecked.',
          content: [
            'Images do more communication work than they\'re often given credit for. Photography tends to read as authentic, specific, and grounded in reality; illustration tends to read as friendly, abstract, and flexible for representing ideas that don\'t have an obvious real-world photo (like "productivity" or "security"). Choosing between them — and staying consistent with that choice — shapes the overall tone of a product as much as color or type does.',
            'Consistency of treatment matters just as much as the choice of style: a single mix of harsh, flash-lit stock photography sitting next to soft, warm-toned custom photography reads as visually disjointed, even if each individual image is fine on its own. The same applies to illustrations — consistent line weight, color palette, and level of detail across a whole illustration set.',
            'Imagery should support hierarchy, not fight it. A large, high-contrast hero image can easily out-compete the actual call-to-action for attention if placed without care — the same size and contrast levers covered in visual hierarchy apply to images exactly as they apply to text and buttons.',
            'Every meaningful image also needs a plan for its text alternative (alt text) from the start, not as an afterthought — this connects directly to accessibility, since a screen reader has no way to interpret an image\'s content unless it\'s described in words.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is a common reason a team might choose illustration over photography for a concept like "security" or "productivity"?',
              options: [
                'Illustration is always cheaper to produce',
                'Illustration can represent abstract ideas that don\'t have an obvious, specific real-world photo',
                'Photography cannot be used in digital products',
                'Illustration is required by accessibility guidelines',
              ],
              correctIndex: 1,
              explanation: 'Illustration is well-suited to abstract concepts precisely because it isn\'t tied to depicting one specific real scene the way photography is.',
            },
            {
              id: 'q2',
              question: 'What can happen if a large, high-contrast hero image is placed near a page\'s primary call-to-action without care?',
              options: [
                'Nothing — images never affect visual hierarchy',
                'The image can out-compete the call-to-action for attention, undermining the intended hierarchy',
                'It automatically improves conversion rates',
                'It has no impact since images and buttons use different visual levers',
              ],
              correctIndex: 1,
              explanation: 'Images use the same hierarchy levers as everything else — size, contrast, position — so a dominant image can easily pull attention away from the actual priority on the page.',
            },
          ],
        },
      ],
    },
    {
      id: 'motion-microinteractions',
      title: 'Motion & Micro-interactions',
      steps: [
        {
          id: 'intro-to-motion-design',
          title: 'Introduction to Motion in Interfaces',
          summary: 'Motion should explain something — continuity, feedback, or attention — not just decorate.',
          content: [
            'Motion in interfaces earns its place when it does functional work: showing where something came from or went to (continuity), confirming that an action registered (feedback), or directing attention to something that needs it. Motion added purely for visual flair, with no functional purpose, tends to just slow the interface down and can actively distract from the task at hand.',
            'A common continuity example: when a card expands into a full-screen detail view, animating that transition (rather than an abrupt cut) helps the user understand that the detail view is a magnified version of the card they tapped, not a completely unrelated screen — preserving their mental model of where they are.',
            'Two basic motion properties do most of the work: duration and easing. Very short durations (100–200ms) suit small, frequent interactions like a button press; longer durations (300–500ms) suit larger transitions like a screen change — durations much beyond that start to feel sluggish rather than smooth. Easing describes how speed changes over the animation: elements entering the screen typically use "ease-out" (fast start, slow finish, feeling like they\'re settling into place), while elements leaving typically use "ease-in" (slow start, fast finish, feeling like they\'re being pulled away).',
            'Motion is also an accessibility concern, covered in more depth in the Accessibility subject: some users experience real discomfort (dizziness, nausea) from large-scale motion, which is why respecting a system-level "reduce motion" preference matters, not just visual taste.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What is the primary justification for adding motion to an interface, according to this step?',
              options: [
                'Motion should always be added purely to look more modern',
                'Motion earns its place when it communicates continuity, feedback, or directs attention — not decoration for its own sake',
                'More motion is always better regardless of purpose',
                'Motion should never be used in interfaces at all',
              ],
              correctIndex: 1,
              explanation: 'Functional motion — showing where something came from, confirming an action, or guiding attention — is what justifies the added complexity; purely decorative motion tends to just slow things down.',
            },
            {
              id: 'q2',
              question: 'Which easing is typically used for an element entering the screen, and why?',
              options: [
                '"Ease-in," because it should start fast and end slow',
                '"Ease-out," because it feels like the element is settling into place — fast start, slow finish',
                'No easing at all — entering elements should move at a constant speed',
                'Easing only applies to elements leaving the screen',
              ],
              correctIndex: 1,
              explanation: 'Ease-out (fast start, gradually slowing) reads as an element settling naturally into its resting position, which is why it\'s the common default for entrances.',
            },
          ],
        },
        {
          id: 'microinteractions',
          title: 'Micro-interactions',
          summary: 'The small, self-contained moments — like a like-button animation — that make software feel considered.',
          content: [
            'A micro-interaction is a small, self-contained product moment built around accomplishing one specific task — liking a post, toggling a setting, pulling down to refresh a feed. Designer Dan Saffer\'s widely referenced framework breaks every micro-interaction into four parts: a trigger (what starts it — a tap, a system event, a time-based condition), rules (what happens and in what order once triggered), feedback (what the user sees, hears, or feels to understand what\'s happening), and loops/modes (what happens on repeat use, or in edge cases, such as a "no items" mode of an empty list).',
            'Pull-to-refresh is a commonly cited example: the trigger is a downward drag past a threshold; the rules define what counts as "far enough" to release; the feedback is the visual stretch and loading spinner; and the mode covers what happens if there\'s nothing new to show.',
            'Good micro-interactions are usually invisible in the sense that they don\'t call attention to themselves — but their absence is very noticeable. A "like" button with no animation at all still works, but feels flat and mechanical compared to one with a small, satisfying bounce or fill.',
            'The risk with micro-interactions is treating them as a checklist of delight to sprinkle everywhere. Overusing elaborate animation on every minor interaction adds up to a slower, more distracting interface overall — the same restraint principle from typography and color applies here too.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'According to Dan Saffer\'s framework, what are the four parts of a micro-interaction?',
              options: [
                'Discover, Define, Develop, Deliver',
                'Trigger, Rules, Feedback, Loops/Modes',
                'Plan, Design, Build, Ship',
                'Input, Process, Output, Storage',
              ],
              correctIndex: 1,
              explanation: 'Saffer\'s framework describes every micro-interaction as a trigger that starts it, rules that govern what happens, feedback shown to the user, and loops/modes covering repeat use and edge cases.',
            },
            {
              id: 'q2',
              question: 'What is the risk of overusing elaborate micro-interaction animation across an entire interface?',
              options: [
                'There is no risk, more animation is always better',
                'It can make the interface feel slower and more distracting overall, the same way excessive color or type variety hurts restraint',
                'It automatically breaks accessibility for all users',
                'It reduces the number of triggers available',
              ],
              correctIndex: 1,
              explanation: 'Treating every interaction as an opportunity for elaborate animation adds cumulative friction and distraction — restraint matters here just as it does with color and typography choices.',
            },
          ],
        },
      ],
    },
    {
      id: 'layout-for-every-screen',
      title: 'Layout for Every Screen',
      steps: [
        {
          id: 'responsive-design-basics',
          title: 'Responsive Design Basics',
          summary: 'Designing a layout that adapts to the huge range of screen sizes people actually use.',
          content: [
            'Responsive design means a single layout adapts its structure across different screen sizes, rather than a design being built once and simply shrunk or clipped. The core mechanism is the breakpoint — a defined screen width at which the layout intentionally changes, such as a three-column grid collapsing into a single column on narrow screens.',
            'A "mobile-first" approach designs and builds the smallest, most constrained layout first, then progressively adds complexity as more screen space becomes available — rather than designing the ideal large-screen layout first and then trying to cram it into a small one as an afterthought. This tends to produce cleaner small-screen experiences, since the smallest layout was never treated as a compromise.',
            'Responsive design isn\'t only about resizing — it often means genuinely restructuring content. A sidebar that sits next to main content on a desktop screen might need to move below it, or into a collapsible drawer, on mobile, rather than just becoming a narrower sidebar that squeezes its content uncomfortably.',
            'Touch targets need their own consideration on small screens: interactive elements need to be large enough to tap accurately with a finger (commonly cited guidance suggests at least roughly 44×44 points), which is a substantially larger and more forgiving target than a precise mouse cursor needs.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does a "mobile-first" approach to responsive design mean?',
              options: [
                'Only building a product for mobile devices, ignoring desktop entirely',
                'Designing and building the smallest, most constrained layout first, then progressively adding complexity for larger screens',
                'Designing the desktop layout first, then shrinking it down',
                'Using the same exact layout regardless of screen size',
              ],
              correctIndex: 1,
              explanation: 'Mobile-first starts from the most constrained case and builds outward, rather than treating the small-screen version as an afterthought squeezed out of a large-screen design.',
            },
            {
              id: 'q2',
              question: 'Why do touch targets on mobile typically need to be larger than what\'s needed for a precise mouse cursor?',
              options: [
                'They don\'t — target size is identical across input types',
                'A finger is far less precise than a mouse cursor, so targets need more forgiving size to be tapped accurately',
                'Larger targets are only a visual preference with no functional reason',
                'Touch targets are only relevant for icon buttons',
              ],
              correctIndex: 1,
              explanation: 'Fingers are much less precise than a mouse pointer, so touch targets need generous minimum sizing (commonly around 44×44 points) to be reliably tappable.',
            },
          ],
        },
        {
          id: 'dark-mode-theming',
          title: 'Dark Mode & Theming',
          summary: 'Dark mode is not simply an inverted color scheme — it has its own contrast and depth rules.',
          content: [
            'A common misconception is that dark mode is just a light theme with colors inverted. In practice, a good dark theme needs its own deliberate palette: pure black backgrounds with pure white text create harsh, fatiguing contrast for many users and can cause a visual effect called "halation" around text, so dark themes commonly use a very dark gray rather than true black, and an off-white rather than pure white for text.',
            'Depth and elevation, normally communicated with drop shadows in a light theme, don\'t read well against a dark background — shadows are barely visible on dark surfaces. Dark themes typically communicate elevation instead by making higher surfaces progressively lighter in shade as they get "closer" to the viewer, since shadows can\'t do that visual work anymore.',
            'Semantic colors need re-tuning for dark backgrounds too: a saturated red or green that looks fine on white can appear overly harsh or vibrate uncomfortably against a dark background, so themes typically desaturate or adjust the lightness of status colors specifically for dark mode.',
            'The practical implication for how this app itself is built is worth noting directly: defining color as tokens (as covered in the theming section of this project\'s own README) rather than hardcoding hex values throughout components is exactly what makes supporting both a light and dark theme manageable instead of a full rewrite.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why do most dark themes avoid using pure black backgrounds with pure white text?',
              options: [
                'Pure black and white are more expensive to render',
                'The extreme contrast can feel harsh and fatiguing, and can cause a visual halation effect around text',
                'Pure black is not supported on most screens',
                'There is no real reason, it\'s an arbitrary trend',
              ],
              correctIndex: 1,
              explanation: 'Very high contrast between pure black and pure white can be visually harsh and tiring for many users, which is why dark themes commonly use dark gray and off-white instead.',
            },
            {
              id: 'q2',
              question: 'How do dark themes typically communicate elevation (depth) instead of using drop shadows?',
              options: [
                'By making higher, closer surfaces progressively lighter in shade',
                'By adding a colored border to every single element',
                'Dark themes cannot represent elevation at all',
                'By increasing the font size of elevated elements',
              ],
              correctIndex: 0,
              explanation: 'Since shadows are barely visible against dark backgrounds, dark themes commonly use lighter shading on surfaces meant to feel closer to the viewer instead.',
            },
          ],
        },
      ],
    },
  ],
};
