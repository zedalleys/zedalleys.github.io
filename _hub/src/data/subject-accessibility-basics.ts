import type { Subject } from '../types';

export const subject: Subject = {
  id: 'accessibility-basics',
  title: 'Accessibility Basics',
  description: 'Design and build interfaces that work for people with a wide range of abilities — the principles, patterns, and pitfalls of accessible UX.',
  icon: '♿',
  color: '#E76F51',
  levels: [
    {
      id: 'foundations-of-accessibility',
      title: 'Foundations of Accessibility',
      steps: [
        {
          id: 'why-accessibility-matters',
          title: 'Why Accessibility Matters',
          summary: 'Disability is more common and more varied than most people assume — and the POUR framework that guides accessible design.',
          content: [
            'Accessibility (often abbreviated a11y) means designing products that people with a wide range of abilities can use. It\'s easy to picture "disability" narrowly — someone permanently blind, or a wheelchair user — but the reality is broader. The Microsoft Inclusive Design framework usefully splits disability into permanent (missing a limb, blindness), temporary (an eye infection, an arm in a cast), and situational (holding a baby in one arm, using a phone in bright sunlight, a noisy environment making audio hard to hear). Everyone experiences at least the situational category regularly — which means accessible design benefits far more people than a "compliance checkbox" framing suggests.',
            'The most widely referenced accessibility standard is the Web Content Accessibility Guidelines (WCAG), organized around four principles known by the acronym POUR: content must be Perceivable (available through at least one sense — sight isn\'t the only option), Operable (usable via multiple input methods, not just a mouse), Understandable (predictable, with clear language and instructions), and Robust (works reliably across different browsers, devices, and assistive technologies).',
            'Each principle maps to concrete practices covered in later steps: perceivable connects to color contrast and alt text, operable connects to keyboard navigation, understandable connects to clear labels and error messages, and robust connects to using correct, semantic HTML.',
            'A common misconception is that accessibility is a final "pass" done right before launch. In practice, it\'s far cheaper and more effective to build with POUR in mind from the start — retrofitting accessibility into a finished, inaccessible product usually means redoing structural decisions, not just adding a few ARIA attributes at the end.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does the "situational" category of disability refer to, in frameworks like Microsoft\'s Inclusive Design?',
              options: [
                'A rare, permanent medical condition',
                'A temporary limitation like a broken arm',
                'A limitation caused by someone\'s current context, like holding a baby or being in bright sunlight',
                'A disability that only affects elderly users',
              ],
              correctIndex: 2,
              explanation: 'Situational limitations come from context, not the person\'s body itself — and nearly everyone experiences them, which is part of why accessible design has such broad benefit.',
            },
            {
              id: 'q2',
              question: 'What does the "P" in the WCAG POUR framework stand for?',
              options: [
                'Practical',
                'Perceivable',
                'Predictable',
                'Portable',
              ],
              correctIndex: 1,
              explanation: 'Perceivable means content must be presented in ways users can perceive through at least one sense — for example, providing text alternatives for non-text content.',
            },
          ],
        },
        {
          id: 'contrast-perceivable-content',
          title: 'Color Contrast & Perceivable Content',
          summary: 'How much contrast text needs, and why color alone is never enough to convey meaning.',
          content: [
            'For text to be perceivable to users with low vision or color-vision deficiencies, it needs sufficient contrast against its background. WCAG 2 defines specific ratios: at the commonly targeted "AA" level, normal text needs at least a 4.5:1 contrast ratio against its background, while large text (roughly 18pt+, or 14pt+ bold) needs at least 3:1, since larger text is inherently easier to distinguish at lower contrast.',
            'These ratios apply to more than body copy — placeholder text, disabled-looking-but-actually-active buttons, and icon-only controls are common places contrast gets overlooked, precisely because designers often want them to look "quiet" or de-emphasized.',
            'A separate, equally important rule: color should never be the sole way information is conveyed. A form field that turns red on error, with no icon or text explaining what went wrong, fails for anyone with red-green color blindness (the most common form, affecting roughly 1 in 12 men). The fix is usually simple — pair the color with an icon, a label, or a text message, so the color reinforces meaning rather than carrying it alone.',
            'The same logic extends to non-text content generally: images need meaningful alt text (describing what the image conveys, not just "image123.jpg"), and purely decorative images should have empty alt text so screen readers skip over them instead of reading out unhelpful filler.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'At WCAG\'s "AA" level, what is the minimum contrast ratio required for normal-sized body text?',
              options: [
                '1.5:1',
                '3:1',
                '4.5:1',
                '10:1',
              ],
              correctIndex: 2,
              explanation: 'Normal text requires at least 4.5:1 contrast against its background at the AA level; large text has a lower bar of 3:1 since it\'s inherently easier to read.',
            },
            {
              id: 'q2',
              question: 'Why is it a problem for a form to indicate an error using only a red border, with no icon or text?',
              options: [
                'Red borders are against most design systems',
                'It fails for users with color blindness, who can\'t rely on color alone to detect the error state',
                'It has no real accessibility impact, only a visual one',
                'Red is not a valid CSS color for borders',
              ],
              correctIndex: 1,
              explanation: 'Color-blind users (most commonly with red-green color blindness) may not perceive the red cue at all, so the error becomes invisible unless it\'s paired with a non-color signal.',
            },
          ],
        },
      ],
    },
    {
      id: 'building-accessible-interfaces',
      title: 'Building Accessible Interfaces',
      steps: [
        {
          id: 'keyboard-navigation-focus',
          title: 'Keyboard Navigation & Focus',
          summary: 'Why every interaction needs to work without a mouse, and how visible focus makes that usable.',
          content: [
            'Many people don\'t use a mouse or touchscreen at all — because of a motor impairment, because they use a switch device or voice control, or simply because they prefer the keyboard. WCAG\'s "Operable" principle requires that all functionality be available from a keyboard, with no exceptions that trap a user in one part of the page.',
            'Two things make keyboard navigation actually usable: a logical tab order (moving through interactive elements in the order they visually appear, not scattered by an unrelated DOM order) and a clearly visible focus indicator — the outline or highlight that shows which element is currently focused. It\'s tempting to remove the default focus outline for aesthetic reasons (`outline: none` in CSS), but doing so without providing a replacement leaves keyboard users with no way to tell where they are on the page at all.',
            'A related, frequently missing pattern is the "skip link" — a link, often visually hidden until focused, that lets a keyboard user jump straight to the main content instead of having to tab through an entire navigation menu on every single page.',
            'A useful way to test this yourself: put the mouse aside and try to complete a core task using only Tab, Shift+Tab, Enter, and arrow keys. Any point where you get stuck, lose track of where focus is, or simply can\'t reach something is a real accessibility gap — not a hypothetical one.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What problem does removing the default focus outline (e.g. via `outline: none`) cause if nothing replaces it?',
              options: [
                'It has no meaningful effect on usability',
                'Keyboard users lose all visual indication of which element is currently focused',
                'It only affects mouse users, not keyboard users',
                'It automatically improves accessibility scores',
              ],
              correctIndex: 1,
              explanation: 'Keyboard users rely entirely on the focus indicator to know where they are on the page — removing it without a replacement makes keyboard navigation effectively unusable.',
            },
            {
              id: 'q2',
              question: 'What is the purpose of a "skip link" at the top of a page?',
              options: [
                'To skip past required form fields',
                'To let a keyboard user jump directly to the main content instead of tabbing through the entire navigation first',
                'To skip loading images for faster performance',
                'To automatically log the user out',
              ],
              correctIndex: 1,
              explanation: 'A skip link saves keyboard users from having to tab through every navigation item on every page just to reach the actual page content.',
            },
          ],
        },
        {
          id: 'semantic-html-screen-readers',
          title: 'Semantic HTML & Screen Readers',
          summary: 'Why using the right native element matters more than adding ARIA on top of the wrong one.',
          content: [
            'Screen readers work by interpreting the underlying structure of a page — not how it visually looks. A `<button>` element automatically tells a screen reader "this is a button, it can be activated," is automatically keyboard-focusable, and responds to Enter/Space by default. A `<div>` styled to look identical but wired up with a click handler gives a screen reader none of that information for free, and isn\'t keyboard-operable at all unless a developer manually rebuilds all of that missing behavior.',
            'This is the idea behind the informal "first rule of ARIA": if a native HTML element or attribute already has the semantics and behavior you need, use it, rather than reaching for a `<div>` plus ARIA attributes to fake the same thing. ARIA exists to describe custom widgets that have no native equivalent (like a complex combobox or a tab panel), not to patch over avoidable choices.',
            'Form accessibility depends heavily on this same idea: every input needs a properly associated `<label>` (not just placeholder text, which disappears once typing starts and isn\'t reliably announced the same way). Grouped fields, like a set of radio buttons for one question, should be wrapped in a `<fieldset>` with a `<legend>` describing the group.',
            'The practical takeaway isn\'t "memorize ARIA attributes" — it\'s "reach for the correct native element first, and treat ARIA as the exception for cases HTML genuinely doesn\'t cover."',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why does a `<div>` with a click handler behave worse for accessibility than a native `<button>`, even if they look identical?',
              options: [
                'They actually behave identically in every way',
                'The `<div>` doesn\'t automatically get button semantics, keyboard focusability, or Enter/Space activation — those all need to be rebuilt manually',
                'Screen readers cannot render `<div>` elements at all',
                '`<div>` elements are always slower to load',
              ],
              correctIndex: 1,
              explanation: 'A native `<button>` comes with built-in semantics and keyboard behavior for free; a `<div>` requires manually re-implementing all of that to reach the same level of accessibility.',
            },
            {
              id: 'q2',
              question: 'Why is placeholder text alone not a sufficient replacement for a `<label>` on a form input?',
              options: [
                'Placeholder text is not supported in modern browsers',
                'Placeholder text disappears once the user starts typing and isn\'t a reliable substitute for an associated label',
                'Labels are only needed for checkboxes, not text inputs',
                'There is no actual difference between the two',
              ],
              correctIndex: 1,
              explanation: 'Placeholder text vanishes as soon as input begins and isn\'t consistently exposed the same way a real `<label>` is — so it can\'t reliably tell a user (sighted or using a screen reader) what a field is for.',
            },
          ],
        },
      ],
    },
    {
      id: 'assistive-technology-content',
      title: 'Assistive Technology & Content',
      steps: [
        {
          id: 'how-screen-readers-work',
          title: 'How Screen Readers Work',
          summary: 'Screen readers turn structure into navigation — which only works if that structure is meaningful.',
          content: [
            'A screen reader converts on-screen content into synthesized speech or braille output, letting a blind or low-vision user navigate an interface without seeing it. Rather than "seeing" a page the way sighted users do, a screen reader user experiences it as a linear sequence, read out in the order it exists in the underlying code — which is exactly why the visual order and the underlying code order need to match.',
            'Screen reader users rarely read a page top-to-bottom like a book. Instead, they jump between landmarks (regions like navigation, main content, and footer) and headings, using dedicated keyboard shortcuts to skip directly to the section they care about — much like a sighted user visually scans a page for the right heading before reading in detail.',
            'This is exactly why heading structure (`<h1>` through `<h6>`) is a navigation tool, not just a font-size shortcut. Skipping heading levels for visual reasons (using an `<h4>` somewhere because it happens to look the right size, with no `<h2>` or `<h3>` above it) breaks that navigation structure, even though it might look perfectly fine visually.',
            'The practical implication: accessible structure and visual design are related but separate concerns. A page can look identical to sighted users whether or not its headings are correctly nested — the difference only becomes obvious the moment someone tries to navigate it with a screen reader.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'How do screen reader users typically navigate a page, according to this step?',
              options: [
                'They must read every word from top to bottom in order, with no way to skip ahead',
                'They jump between landmarks and headings using keyboard shortcuts, similar to how sighted users visually scan for the right section',
                'They can only interact with images, not text',
                'They navigate exclusively using color cues',
              ],
              correctIndex: 1,
              explanation: 'Screen reader users commonly jump directly to landmarks and headings rather than reading everything linearly, which is why meaningful structure matters so much.',
            },
            {
              id: 'q2',
              question: 'Why is choosing a heading level (like `<h4>`) purely because of its visual size a problem?',
              options: [
                'It isn\'t a problem, heading levels are purely a styling choice',
                'It can break the logical navigation structure screen reader users rely on, even though it may look fine visually',
                'It will prevent the page from loading',
                'Heading tags have no effect on screen readers at all',
              ],
              correctIndex: 1,
              explanation: 'Heading levels double as a navigation outline for screen reader users — skipping levels for visual reasons breaks that outline even if the visual result looks correct.',
            },
          ],
        },
        {
          id: 'writing-accessible-content',
          title: 'Writing Accessible Content',
          summary: 'Word choice is an accessibility decision, not just a tone decision.',
          content: [
            'Accessible content starts with plain language: shorter sentences, familiar words, and a clear structure benefit users with cognitive disabilities, users who are reading in a non-native language, and honestly, everyone under time pressure or reading on a small screen. Clarity is rarely a tradeoff against quality writing — it usually is quality writing.',
            'Link text deserves particular care. A page full of "click here" or "read more" links is meaningless out of context — and screen reader users often pull up a list of all links on a page as a navigation shortcut, which means a page full of identical, non-descriptive link text becomes a wall of indistinguishable options. Descriptive link text ("Read our refund policy" instead of "click here") stays meaningful whether it\'s read in context or pulled into that isolated list.',
            'Instructions that rely purely on visual or spatial position ("click the button on the right," "see the green box above") assume a shared visual experience that not every user has — someone using a screen reader has no inherent sense of "right" or "above," and someone with color blindness may not perceive "green" the way intended. Referring to a control by its visible label or name is more robust than referring to its position or color.',
            'None of this requires sacrificing a distinctive voice or tone — accessible writing is a discipline layered on top of good writing, not a replacement for it.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why is generic link text like "click here" repeated across a page a specific problem for screen reader users?',
              options: [
                'It isn\'t a problem, screen readers ignore link text entirely',
                'Screen reader users often browse a list of all links on a page, where repeated generic text becomes indistinguishable',
                'It causes the page to fail to load',
                '"Click here" is technically invalid HTML',
              ],
              correctIndex: 1,
              explanation: 'When links are pulled into an out-of-context list (a common screen reader navigation shortcut), non-descriptive text like "click here" provides no way to tell them apart.',
            },
            {
              id: 'q2',
              question: 'Why should instructions avoid relying purely on position or color, like "click the button on the right"?',
              options: [
                'Because buttons should never be positioned on the right side of a screen',
                'Because not every user shares the same visual experience — screen reader users and colorblind users may not perceive position or color the way intended',
                'Because it makes sentences too short',
                'Because "right" and "left" are not valid words in accessible writing',
              ],
              correctIndex: 1,
              explanation: 'Referring to a control by its actual label is more robust than relying on spatial position or color, which not every user perceives the same way.',
            },
          ],
        },
      ],
    },
    {
      id: 'accessible-components-motion',
      title: 'Accessible Components & Motion',
      steps: [
        {
          id: 'accessible-forms-in-depth',
          title: 'Accessible Forms in Depth',
          summary: 'Beyond a visible label — how forms communicate structure, grouping, and errors to assistive technology.',
          content: [
            'Every input needs a programmatically associated label, not just a visually nearby one. Wrapping an input in a `<label>` element (or connecting them with a matching `for`/`id` pair) means a screen reader announces the label when the field receives focus, and — as a bonus for every user — clicking the label text itself focuses or activates the input.',
            'Related fields benefit from explicit grouping. A set of radio buttons all answering one question ("How did you hear about us?") should be wrapped in a `<fieldset>` with a `<legend>` naming the group, so a screen reader announces the shared question once, rather than a user encountering five unlabeled options with no shared context.',
            'Error messages need a programmatic connection to their field, not just visual proximity. An attribute like `aria-describedby` links an input to its error text so a screen reader announces the error at the moment the field is focused — without it, a sighted user sees the error message right next to the field, while a screen reader user may never discover it exists.',
            'Marking a field as required needs more than a color cue or an asterisk alone (which echoes the color-only-signifier problem from earlier in this subject) — the `required` attribute or an equivalent ARIA property communicates that requirement directly to assistive technology, not just visually.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why is wrapping an input in a `<label>` element (or linking them via `for`/`id`) better than just placing text visually near the input?',
              options: [
                'It has no real benefit beyond visual styling',
                'It creates a programmatic association, so a screen reader announces the label and clicking the label focuses/activates the input',
                'It is only needed for checkbox inputs',
                'It makes the form load faster',
              ],
              correctIndex: 1,
              explanation: 'A programmatic label association is what lets assistive technology actually announce the label — visual proximity alone conveys nothing to a screen reader.',
            },
            {
              id: 'q2',
              question: 'What problem does `aria-describedby` solve when linking an error message to its input?',
              options: [
                'It changes the visual color of the error message',
                'It ensures a screen reader announces the error when the field is focused, instead of the error being invisible to non-visual users',
                'It prevents the form from being submitted',
                'It is required for all buttons, not just error messages',
              ],
              correctIndex: 1,
              explanation: 'Without a programmatic connection like `aria-describedby`, a screen reader user has no way to discover an error message that a sighted user can simply see next to the field.',
            },
          ],
        },
        {
          id: 'motion-vestibular-safety',
          title: 'Motion & Vestibular Safety',
          summary: 'For some users, the wrong kind of motion isn\'t just annoying — it\'s physically disorienting.',
          content: [
            'Large-scale motion — parallax scrolling effects, elements that zoom or spin dramatically, big simulated 3D movement — can trigger real physical symptoms (dizziness, nausea, headaches) in people with vestibular disorders, a category of conditions affecting the inner ear and balance system. This isn\'t a matter of taste or preference; it\'s a genuine physical safety consideration, much like a strobing light can trigger a seizure for someone with photosensitive epilepsy.',
            'Operating systems expose a system-level "reduce motion" setting specifically for this reason, and the web has a corresponding way to detect it (the `prefers-reduced-motion` media query). Respecting that setting — replacing large, sweeping animations with a simple fade or an instant state change, while keeping small, purely functional feedback like a button\'s press state — lets users who\'ve opted in to less motion use a product safely and comfortably.',
            'This connects directly back to the motion principles covered in the Visual Design subject: motion that serves a real functional purpose (feedback, continuity) can often be preserved even in a reduced-motion mode, just scaled down — it\'s the large-scale, decorative motion that most needs an alternative.',
            'Reduced motion isn\'t a niche edge case to deprioritize — it sits alongside color contrast and keyboard access as one of the more common accessibility accommodations that costs relatively little engineering effort to support once designed for from the start.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why can large-scale motion effects like parallax scrolling be a genuine safety concern, not just a taste issue?',
              options: [
                'They slow down page load times',
                'They can trigger real physical symptoms like dizziness or nausea in people with vestibular disorders',
                'They are against most companies\' branding guidelines',
                'They only affect very old devices',
              ],
              correctIndex: 1,
              explanation: 'Large-scale motion can physically affect people with vestibular (balance-related) conditions, making this a genuine accessibility and safety concern rather than a purely aesthetic one.',
            },
            {
              id: 'q2',
              question: 'What is the purpose of the `prefers-reduced-motion` media query?',
              options: [
                'To detect the user\'s preferred color theme',
                'To let a website detect a user\'s system-level reduced-motion preference and adjust or remove large-scale animation accordingly',
                'To automatically translate content into another language',
                'To speed up image loading',
              ],
              correctIndex: 1,
              explanation: 'It lets a site respect a system-level accessibility setting by scaling back or removing large, potentially disorienting animations for users who\'ve requested less motion.',
            },
          ],
        },
      ],
    },
    {
      id: 'testing-and-the-business-case',
      title: 'Testing & The Business Case',
      steps: [
        {
          id: 'accessibility-testing-tools',
          title: 'Accessibility Testing Tools & Methods',
          summary: 'Automated tools catch some problems fast — the rest still need a human.',
          content: [
            'Automated accessibility testing tools (such as axe or the accessibility audit built into Lighthouse) scan a page\'s code and flag concrete, rule-based violations: missing alt text, insufficient color contrast, form inputs with no associated label, invalid ARIA usage. They run fast and integrate easily into a development workflow, catching a meaningful set of common mistakes early.',
            'Automated tools are commonly estimated to catch somewhere around 30–40% of real accessibility issues. Anything requiring human judgment — does this alt text actually describe the image meaningfully, does the tab order make logical sense, is this error message actually understandable — is outside what automation can evaluate on its own.',
            'Manual testing fills that gap: navigating an entire flow using only a keyboard, and separately, testing with an actual screen reader (VoiceOver on Apple devices, NVDA or JAWS on Windows are common choices) to hear how the experience is actually announced, not just how it looks.',
            'The most reliable check of all is testing with real users who use assistive technology as part of their daily life — their experience and workarounds often reveal problems and priorities that even a careful manual audit by a non-disabled tester would miss entirely.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Roughly what share of accessibility issues do automated tools typically catch on their own?',
              options: [
                'Nearly 100% — automated tools are sufficient on their own',
                'Around 30–40%, with the rest requiring human judgment',
                '0% — automated tools provide no useful signal at all',
                'Exactly 50%, by industry standard',
              ],
              correctIndex: 1,
              explanation: 'Automated tools reliably catch a meaningful chunk of rule-based issues, but a large share of real accessibility problems require human judgment to identify.',
            },
            {
              id: 'q2',
              question: 'Why is testing with actual users of assistive technology considered especially valuable?',
              options: [
                'It replaces the need for any other kind of testing',
                'Their lived experience often reveals problems and workarounds that even a careful manual audit by a non-disabled tester would miss',
                'It is required by law in every country',
                'It is faster than running an automated scan',
              ],
              correctIndex: 1,
              explanation: 'Real assistive-technology users bring lived experience and context that even a thorough manual audit by someone unfamiliar with daily AT use is likely to miss.',
            },
          ],
        },
        {
          id: 'legal-standards-business-case',
          title: 'Legal Standards & the Business Case',
          summary: 'Accessibility is often a legal requirement — and, separately, a business case that stands on its own.',
          content: [
            'Accessibility carries real legal weight in many jurisdictions. In the US, the Americans with Disabilities Act (ADA) has been applied to websites and apps by courts, and Section 508 sets accessibility requirements specifically for federal agencies and their contractors; the EU has its own requirements under the European Accessibility Act and EN 301 549. Requirements and enforcement vary by region, but the trend across most major markets has been toward stricter, more consistently enforced expectations, not looser ones.',
            'WCAG itself defines three conformance levels: A (the most basic, addressing the most severe barriers), AA (the level most legal standards and organizations target — including everything covered across this subject), and AAA (the most stringent, often impractical to fully achieve across an entire product, and not usually required by law).',
            'Beyond legal exposure, there\'s a business case that stands on its own. The population with a disability of some kind is large — commonly cited estimates put it around 15–20% of people globally — which is a substantial addressable audience to exclude by accident. Accessible, semantic HTML also tends to overlap directly with what search engines can parse well, meaning accessibility work often improves SEO as a side effect, not a separate cost.',
            'A useful framing sometimes called the "curb-cut effect": curb cuts (the sloped sidewalk edges at street corners) were originally built for wheelchair users, but end up helping parents with strollers, delivery workers with hand trucks, and travelers with rolling luggage. Accessibility features aimed at a specific need frequently end up improving the experience for a much broader group than originally intended.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Which WCAG conformance level is most commonly targeted by legal standards and organizations?',
              options: [
                'Level A only',
                'Level AA',
                'Level AAA',
                'There is no standard level referenced by law',
              ],
              correctIndex: 1,
              explanation: 'AA is the level most legal standards and organizations aim for — it addresses a broad, practical range of barriers without the often-impractical demands of full AAA conformance.',
            },
            {
              id: 'q2',
              question: 'What does the "curb-cut effect" illustrate about accessibility features?',
              options: [
                'That accessibility features only ever benefit the specific group they were designed for',
                'That a feature designed for one specific need (like wheelchair access) frequently ends up benefiting a much broader group of people',
                'That curb cuts are unrelated to digital accessibility in any way',
                'That accessibility improvements always increase costs with no offsetting benefit',
              ],
              correctIndex: 1,
              explanation: 'The curb-cut effect describes how accessibility accommodations built for one group (like wheelchair users) often end up helping a much wider range of people than originally intended.',
            },
          ],
        },
      ],
    },
  ],
};
