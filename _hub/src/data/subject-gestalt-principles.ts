import type { Subject } from '../types';

export const subject: Subject = {
  id: 'gestalt-principles',
  title: 'Gestalt Principles',
  description: 'A deep dive into the perceptual laws — proximity, similarity, closure, and more — that explain how people group and interpret what they see.',
  icon: '🧠',
  color: '#E76F51',
  levels: [
    {
      id: 'foundational-grouping-laws',
      title: 'Foundational Grouping Laws',
      steps: [
        {
          id: 'law-of-proximity',
          title: 'The Law of Proximity',
          summary: 'Objects placed close together are perceived as one related group, whether or not they actually are.',
          content: [
            'Gestalt psychology, developed by German psychologists in the early 20th century, studies how humans perceive organized wholes rather than a disconnected collection of individual parts — the word "Gestalt" roughly translates to "form" or "shape" in this sense. Its principles describe consistent, largely automatic patterns in how visual perception groups elements together, and they apply directly to interface design because every screen is, functionally, an exercise in visual grouping.',
            'The Law of Proximity states that objects positioned close to one another are perceived as belonging to a group, more strongly than their similarity, color, or shape would suggest on their own. Distance functions as an implicit signal of relationship — this is why a form label sits close to its input rather than centered awkwardly between two adjacent fields, and why the fields of one logical group in a settings page get less vertical spacing between them than the space separating that group from the next one.',
            'Proximity is powerful enough to override other cues. Even identically styled items will read as two separate groups if the visual gap between them is larger than the gap within each group — which is precisely the mechanism that makes whitespace, covered in Visual Design Basics, function as an organizational tool rather than just empty space.',
            'Getting proximity wrong is a common, low-visibility bug: uniform spacing applied everywhere (rather than tighter spacing within a group and looser spacing between groups) makes an interface\'s actual logical structure invisible, forcing users to read labels carefully to figure out groupings that good spacing would have made obvious at a glance.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'According to the Law of Proximity, what makes elements likely to be perceived as one group?',
              options: [
                'Sharing the exact same color',
                'Being positioned close together in space',
                'Being the same physical size',
                'Having the same border style',
              ],
              correctIndex: 1,
              explanation: 'Proximity treats physical closeness as one of the strongest, most automatic signals of relatedness, even stronger than shared color or shape.',
            },
            {
              id: 'q2',
              question: 'What visible problem results from applying completely uniform spacing everywhere, with no tighter spacing within groups?',
              options: [
                'The interface loads more slowly',
                'The interface\'s actual logical structure becomes invisible, since proximity is no longer signaling which elements belong together',
                'Text automatically becomes harder to read',
                'Colors on the page shift unexpectedly',
              ],
              correctIndex: 1,
              explanation: 'Without varying spacing to signal grouping, users lose the visual cue that would otherwise make relationships between elements obvious without reading every label.',
            },
          ],
        },
        {
          id: 'law-of-similarity',
          title: 'The Law of Similarity',
          summary: 'Elements that share a visual trait read as part of the same group, even when spaced apart.',
          content: [
            'The Law of Similarity states that elements sharing a visual characteristic — color, shape, size, or style — are perceived as related, even when they aren\'t positioned close together. This is what allows a design to signal grouping across a distance, where proximity alone couldn\'t do the job.',
            'A common, almost invisible application: every primary button across an entire product sharing the same color and shape. This isn\'t only a branding choice — it\'s what lets a user recognize "this is the main action" instantly on any new screen, without needing to consciously think about it, purely because it matches the visual pattern already learned elsewhere in the product.',
            'Similarity and proximity often work together, but can also be used deliberately against each other. A design might place two functionally different but visually similar elements physically close together specifically to invite comparison (like two pricing tier cards styled identically side by side), using similarity to suggest "these are comparable options" while proximity suggests "consider these together."',
            'Similarity can also mislead if used carelessly. Styling two functionally different controls identically (say, a "cancel" and a "confirm" button that look the same) removes a visual cue that could have helped prevent an accidental destructive action — similarity should be used deliberately to group things that genuinely belong together, not just for a uniform look.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'How does the Law of Similarity differ from the Law of Proximity?',
              options: [
                'They are identical concepts with different names',
                'Similarity groups elements by a shared visual trait (color, shape) even when they aren\'t physically close together, while proximity groups by physical closeness',
                'Similarity only applies to text, proximity only applies to images',
                'Proximity is a stronger grouping cue than similarity in every situation',
              ],
              correctIndex: 1,
              explanation: 'Similarity relies on a shared visual trait rather than physical closeness — it can signal grouping even across distance, which proximity alone cannot do.',
            },
            {
              id: 'q2',
              question: 'Why can making a "cancel" and a "confirm" button look identical be a usability problem?',
              options: [
                'It has no real downside, consistent styling is always better',
                'It removes a visual distinction that could help prevent a user from accidentally choosing the destructive or wrong option',
                'Buttons must always be identically styled by convention',
                'It violates the Law of Proximity',
              ],
              correctIndex: 1,
              explanation: 'Similarity used carelessly can erase a helpful visual cue that would otherwise distinguish two meaningfully different actions, increasing the risk of an accidental click.',
            },
          ],
        },
      ],
    },
    {
      id: 'perceptual-completion',
      title: 'Perceptual Completion',
      steps: [
        {
          id: 'law-of-closure',
          title: 'The Law of Closure',
          summary: 'The mind fills in missing information to perceive a complete, familiar shape.',
          content: [
            'The Law of Closure describes the mind\'s tendency to perceive a complete, whole shape even when parts of it are missing or obscured, by mentally filling in the gaps. A circle drawn with several small breaks in its outline is still perceived as a circle, not as a series of disconnected arcs.',
            'This principle shows up constantly in logo design — the well-known WWF panda logo and the negative-space arrow hidden inside the FedEx logotype both rely on viewers\' minds completing a shape that isn\'t fully, literally drawn. Interfaces use the same idea more subtly: a loading spinner made of a partial, rotating ring is read as a continuous circle in motion, not as a series of disconnected marks.',
            'Closure can also be used functionally, not just decoratively. A progress indicator styled as a ring that fills in as a task completes relies on the same perceptual tendency — the mind reads the partially completed ring as a whole circle that\'s "on its way" to being finished, communicating progress more intuitively than a bare percentage number alone.',
            'A practical caution: closure only works when a shape is recognizable enough for the mind to complete correctly. Too little visual information, or an unfamiliar shape, results in genuine ambiguity rather than a satisfying, correctly perceived whole — closure requires enough of the picture to be genuinely inferable, not just partially drawn.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does the Law of Closure describe?',
              options: [
                'The tendency for elements placed close together to be seen as one group',
                'The mind\'s tendency to perceive a complete shape even when parts of it are missing, by mentally filling in the gaps',
                'The tendency to group elements that share a color',
                'A rule for closing browser tabs efficiently',
              ],
              correctIndex: 1,
              explanation: 'Closure is specifically about perceiving wholeness from incomplete visual information — the mind completes the shape rather than seeing disconnected fragments.',
            },
            {
              id: 'q2',
              question: 'Why does closure "fail" if a shape is too incomplete or unfamiliar?',
              options: [
                'Closure never fails under any circumstance',
                'There isn\'t enough visual information for the mind to correctly infer the intended whole, resulting in genuine ambiguity instead of clear perception',
                'It only fails when the shape is a perfect circle',
                'Closure only applies to text, never to shapes',
              ],
              correctIndex: 1,
              explanation: 'Closure depends on enough of a recognizable shape being present for the mind to accurately complete it — too little information leaves real ambiguity instead.',
            },
          ],
        },
        {
          id: 'law-of-continuity',
          title: 'The Law of Continuity',
          summary: 'The eye follows the smoothest path through a design, preferring continuous lines over abrupt breaks.',
          content: [
            'The Law of Continuity (sometimes called Continuation) states that the eye naturally follows a smooth, continuous line or curve rather than jumping along an abrupt, disjointed path — elements arranged along an implied line or curve are perceived as more related, and easier to visually track, than the same elements scattered without that alignment.',
            'This is part of why aligned elements feel calmer and more organized than misaligned ones, even setting aside proximity or similarity entirely: a column of left-aligned text labels creates an implied vertical line the eye can glide down smoothly, while ragged, inconsistent alignment forces the eye to jump and re-locate the start of each new line.',
            'Continuity also explains why carousels, horizontally scrolling content rows, and multi-step progress indicators (a row of connected dots or steps) read intuitively as one continuous sequence — the visual line connecting each step signals "these are steps along a single path," reinforcing the sequential relationship the interface is trying to communicate.',
            'Deliberately breaking continuity can be a useful, intentional signal too: interrupting an otherwise continuous row or line — with different spacing, an inserted divider, or a shift in alignment — reads as "something changes here," making continuity\'s absence, used on purpose, a legitimate design tool of its own for marking a genuine transition or boundary.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does the Law of Continuity describe about how the eye moves through a design?',
              options: [
                'The eye jumps randomly regardless of layout',
                'The eye naturally follows a smooth, continuous line or curve rather than an abrupt, disjointed path',
                'The eye is drawn only to the brightest color on a page',
                'The eye ignores alignment entirely',
              ],
              correctIndex: 1,
              explanation: 'Continuity describes a preference for tracking smooth, aligned paths, which is part of why consistent alignment reads as calmer and more organized than ragged alignment.',
            },
            {
              id: 'q2',
              question: 'How can deliberately breaking continuity be used as an intentional design signal?',
              options: [
                'It can\'t — breaking continuity always looks like a mistake',
                'Interrupting an otherwise continuous line or row (with a divider or spacing change) can signal that something meaningfully changes at that point',
                'It is only relevant to logo design',
                'It has the same effect as increasing font size',
              ],
              correctIndex: 1,
              explanation: 'Since continuity implies a single unbroken path, deliberately interrupting it draws attention to a genuine transition or boundary at that specific point.',
            },
          ],
        },
      ],
    },
    {
      id: 'depth-and-boundaries',
      title: 'Depth & Boundaries',
      steps: [
        {
          id: 'figure-ground',
          title: 'Figure-Ground Relationship',
          summary: 'The mind separates a scene into a foreground "figure" and a background — but that split can be deliberately ambiguous.',
          content: [
            'Figure-ground describes the mind\'s tendency to separate any visual scene into a "figure" (the subject that stands out) and a "ground" (the background it sits against) — a modal dialog appearing over a dimmed backdrop is a direct, everyday application: the dimming visually pushes the underlying page into the background, clearly establishing the dialog as the current figure demanding attention.',
            'A classic illustration of figure-ground ambiguity is Rubin\'s vase — an image that can be perceived as either a vase or two facing silhouettes, depending on which region the mind currently treats as figure versus ground, and which flips unpredictably the longer someone looks at it.',
            'Poor contrast between figure and ground is one of the most common, and most damaging, visual failures in interface design — light gray text on a white background technically has "a figure and a ground," but insufficiently distinguished, forcing the eye to work far harder than it should to separate content from its background (and directly connecting back to the color-contrast requirements covered in the Accessibility subject).',
            'Figure-ground thinking also applies to layered interfaces generally: a well-designed modal, tooltip, or dropdown needs enough visual separation (via shadow, dimming, or contrast) from what\'s behind it to clearly read as sitting "on top," rather than blending confusingly into the same visual plane as the content underneath it.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What role does dimming the background play when a modal dialog appears on screen?',
              options: [
                'It has no perceptual purpose, it\'s purely decorative',
                'It pushes the underlying page into the "ground," clearly establishing the modal as the current "figure" demanding attention',
                'It is only used to reduce battery consumption',
                'It prevents the modal from being closed accidentally',
              ],
              correctIndex: 1,
              explanation: 'Dimming is a direct figure-ground technique — it visually recedes the background so the modal clearly reads as the foreground subject.',
            },
            {
              id: 'q2',
              question: 'Why is low contrast between text and its background considered a figure-ground problem?',
              options: [
                'Because it always makes text a different color than intended',
                'Because it forces the eye to work harder to separate the figure (text) from the ground (background), which insufficient contrast fails to make clear',
                'Because figure-ground only applies to images, never to text',
                'Because it violates the Law of Similarity instead',
              ],
              correctIndex: 1,
              explanation: 'Text and background form a figure-ground relationship just like any other visual scene — poor contrast weakens that separation, straining legibility.',
            },
          ],
        },
        {
          id: 'law-of-common-region',
          title: 'The Law of Common Region',
          summary: 'A shared visual boundary — like a card\'s border — is one of the strongest grouping signals of all.',
          content: [
            'The Law of Common Region states that elements enclosed within the same visual boundary — a border, a background color fill, a distinct card shape — are perceived as belonging to one group, often even more strongly than proximity or similarity alone would suggest. A shared boundary acts almost like a container, explicitly declaring "everything inside here is related."',
            'This is the perceptual mechanism behind why "cards" are such a common, almost default interface pattern: wrapping a related cluster of content (an image, a title, a short description, an action) in a bordered or shaded container instantly communicates that the whole cluster belongs together, without requiring generous surrounding whitespace to achieve the same grouping effect through proximity alone.',
            'Common region can substitute for proximity in tight layouts where space is limited — two closely packed but visually distinct card containers read as clearly separate groups because of their individual boundaries, even without much of a gap between them, which pure proximity-based grouping (with no visible boundary at all) would struggle to communicate at the same tight spacing.',
            'Overusing common region, however, dilutes its power: wrapping every single element on a page in its own bordered box, regardless of whether genuine grouping is needed, creates visual noise and makes the technique meaningless everywhere it\'s used indiscriminately — reserved use is what keeps it a strong, legible signal.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does the Law of Common Region state?',
              options: [
                'Elements enclosed within the same visual boundary (like a card) are perceived as belonging to one group',
                'Elements that are the same color are always grouped together',
                'Elements far apart are automatically perceived as unrelated',
                'Boundaries have no effect on perceived grouping',
              ],
              correctIndex: 0,
              explanation: 'A shared enclosing boundary — a border, background fill, or card shape — acts as a strong, explicit grouping signal, often stronger than proximity or similarity alone.',
            },
            {
              id: 'q2',
              question: 'Why can common region be especially useful in a tightly packed layout with limited space?',
              options: [
                'Because it removes the need for any spacing between elements at all',
                'A visible boundary can clearly separate groups even at tight spacing, where proximity alone (with no visible boundary) would struggle to signal separation',
                'Because it automatically increases the available screen space',
                'Because common region only works when elements are far apart',
              ],
              correctIndex: 1,
              explanation: 'A shared boundary can do the grouping work that generous whitespace would otherwise need to do, which matters when space is genuinely constrained.',
            },
          ],
        },
      ],
    },
    {
      id: 'movement-and-simplicity',
      title: 'Movement & Simplicity',
      steps: [
        {
          id: 'law-of-common-fate',
          title: 'The Law of Common Fate',
          summary: 'Elements that move together are perceived as related, even if they look nothing alike.',
          content: [
            'The Law of Common Fate states that elements moving in the same direction, at the same time, are perceived as belonging together — even if they share no similarity in color, shape, or size. Shared motion is treated by the mind as strong evidence of a shared relationship, arguably even more immediate than a static visual trait.',
            'A direct interface example: when a card expands and its supporting metadata (a timestamp, an icon) slides and fades in alongside it in the same motion, the shared movement itself communicates that these elements are part of one connected unit — even before a viewer has consciously read any of the actual content.',
            'Common fate also explains why a coordinated animation across multiple items — a list where every row shifts down together to make room for a newly inserted item — reads as a single coherent event, rather than several unrelated changes that happen to occur at the same moment. This connects directly to the "continuity" purpose of motion covered in Visual Design Basics: shared movement is one of the concrete mechanisms behind that broader continuity benefit.',
            'Because common fate is such a strong grouping signal, mismatched or uncoordinated motion carries a real cost too — if related elements animate independently, at different timings or speeds, viewers may perceive them as unrelated even when a design intends them to be read as one connected group.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does the Law of Common Fate describe?',
              options: [
                'Elements sharing the same color are perceived as related',
                'Elements moving together, in the same direction and timing, are perceived as belonging to the same group, even without shared appearance',
                'Elements enclosed in the same boundary are grouped',
                'The eye follows a smooth continuous line',
              ],
              correctIndex: 1,
              explanation: 'Common fate is specifically about shared motion as a grouping cue — elements that move together read as related regardless of how similar they look.',
            },
            {
              id: 'q2',
              question: 'What can happen if visually related elements animate with mismatched timing or independent motion?',
              options: [
                'Nothing — motion timing has no effect on perceived grouping',
                'Viewers may perceive them as unrelated, even if the design intends them to be read as one connected group',
                'It always improves perceived performance',
                'It automatically fixes any contrast issues',
              ],
              correctIndex: 1,
              explanation: 'Since shared motion itself signals relatedness, uncoordinated animation can undercut an intended grouping just as effectively as inconsistent color or spacing would.',
            },
          ],
        },
        {
          id: 'law-of-pragnanz',
          title: 'The Law of Prägnanz (Simplicity)',
          summary: 'When perception is ambiguous, the mind defaults to the simplest, most orderly interpretation available.',
          content: [
            'The Law of Prägnanz (from a German word roughly meaning "conciseness" or "terseness") states that, when faced with visual ambiguity, the mind gravitates toward the simplest, most orderly, most stable interpretation available — sometimes summarized as "the law of good figure" or "the law of simplicity." Given several possible ways to interpret a complex or ambiguous arrangement, the simplest one tends to win.',
            'This is closely related to why symmetrical, regular layouts feel calmer and easier to process than irregular ones with no evident pattern — symmetry and regularity are, quite literally, simpler structures for the mind to resolve and hold onto than an arrangement with no discernible order.',
            'Prägnanz acts as something like the umbrella principle behind several of the other Gestalt laws covered in this subject: proximity, similarity, closure, and continuity can all be understood as different specific mechanisms the mind uses to arrive at the simplest available organization of a scene, rather than treating each individual element as a separate, disconnected piece of information.',
            'For interface design, the practical implication is a reminder that simplicity in the Gestalt sense isn\'t about using fewer elements — it\'s about how easily the mind can resolve the relationships between the elements that are there. A visually "busy" screen can still feel calm if its underlying grouping is clear and orderly, while a sparse screen with inconsistent, unclear grouping can feel more chaotic than its element count would suggest.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'What does the Law of Prägnanz state?',
              options: [
                'That people always prefer the most complex interpretation of an ambiguous scene',
                'That, given visual ambiguity, the mind defaults to the simplest, most orderly interpretation available',
                'That every design must use as few elements as possible',
                'That symmetry is irrelevant to visual perception',
              ],
              correctIndex: 1,
              explanation: 'Prägnanz describes a default toward simplicity and order when perception is ambiguous — the mind resolves toward the most stable, easiest-to-process interpretation.',
            },
            {
              id: 'q2',
              question: 'According to this step, what does "simplicity" actually mean in the Gestalt sense for interface design?',
              options: [
                'Using the smallest possible number of elements on a screen',
                'How easily the mind can resolve the relationships between the elements present, regardless of how many there are',
                'Removing all color from a design',
                'Avoiding any use of animation',
              ],
              correctIndex: 1,
              explanation: 'Gestalt simplicity is about clarity of relationships and grouping, not raw element count — a visually dense screen can still feel orderly if its grouping is clear.',
            },
          ],
        },
      ],
    },
    {
      id: 'applying-gestalt-to-interfaces',
      title: 'Applying Gestalt to Interfaces',
      steps: [
        {
          id: 'gestalt-in-navigation-and-forms',
          title: 'Gestalt in Navigation & Forms',
          summary: 'Seeing several Gestalt laws working together in two of the most common interface patterns.',
          content: [
            'A typical navigation bar puts several Gestalt laws to work simultaneously: proximity groups related nav items tightly together while separating them from unrelated page content; similarity keeps every nav item styled consistently so they read as one coherent set of options; and continuity, if items are arranged along a single row, helps the eye scan across them as one connected sequence rather than a series of disconnected labels.',
            'A well-structured form shows the same layering. Related fields (first name, last name) sit in proximity; every label follows the same similarity treatment (position, weight, color) so the eye recognizes "this is a label" instantly, everywhere it appears; and a section of related fields wrapped in a common region (a bordered or shaded fieldset) signals a shared sub-topic within a longer form, like a "shipping address" grouping distinct from a "payment details" grouping.',
            'These laws rarely operate one at a time in a real interface — they compound and reinforce each other. A card component groups its contents through common region (the card\'s boundary) and proximity (tight internal spacing) simultaneously; a multi-step checkout indicator relies on continuity, common fate (if steps animate as they complete), and proximity all at once.',
            'The practical skill this step is meant to build isn\'t memorizing which law explains which pattern — it\'s the habit of asking, when a layout feels confusing or ambiguous, which Gestalt principle is missing or working against the intended structure, since that diagnosis usually points directly to a specific, fixable adjustment.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'In a well-structured form, what does wrapping related fields (like a full shipping address) in a bordered fieldset primarily achieve?',
              options: [
                'It has no perceptual effect, it\'s purely decorative',
                'It uses common region to signal that those fields share a sub-topic, distinct from other groups in the form',
                'It applies the Law of Continuity',
                'It replaces the need for field labels',
              ],
              correctIndex: 1,
              explanation: 'A shared boundary around related fields is a direct application of common region, clearly marking that group as belonging together within a longer form.',
            },
            {
              id: 'q2',
              question: 'According to this step, what is the real practical skill in applying Gestalt principles to interface design?',
              options: [
                'Memorizing the exact names of all the Gestalt laws',
                'Recognizing, when a layout feels confusing, which Gestalt principle is missing or working against the intended structure — since that points to a fixable adjustment',
                'Using as many Gestalt principles as possible on every screen',
                'Avoiding the use of any Gestalt principle in forms specifically',
              ],
              correctIndex: 1,
              explanation: 'The practical value is diagnostic — using the principles to identify exactly what\'s undermining a layout\'s clarity, not reciting definitions.',
            },
          ],
        },
        {
          id: 'common-gestalt-mistakes',
          title: 'Common Gestalt Mistakes to Avoid',
          summary: 'The laws work both ways — the same principles that create clarity can accidentally create confusion.',
          content: [
            'Because Gestalt grouping happens automatically and largely unconsciously, it\'s just as easy to accidentally signal the wrong relationship as it is to intentionally signal the right one. A frequent mistake is uneven spacing that unintentionally invokes proximity incorrectly — placing a "Cancel" button slightly closer to an unrelated "Delete" button than to its actual paired "Confirm" button visually suggests a relationship between Cancel and Delete that was never intended.',
            'Another common mistake is over-relying on similarity for items that are actually different in function — styling a "learn more" link identically to a "delete my account" link because both happen to be text links, when their difference in consequence deserves a clear, deliberate visual distinction instead.',
            'Common region gets misapplied when a border or background is added purely for decoration, without any actual grouping logic behind it — a card-style container wrapped around content that has no real internal relationship creates a false promise of grouping that the content itself doesn\'t deliver on, actively working against Prägnanz\'s preference for a simple, resolvable structure.',
            'The most reliable way to catch these mistakes is to deliberately unfocus and look at a layout\'s overall shapes and spacing without reading any of the text — the same kind of "squint test" designers commonly use — since Gestalt grouping is a purely visual, structural effect, entirely separate from whatever the words on screen actually say.',
          ],
          quiz: [
            {
              id: 'q1',
              question: 'Why is placing "Cancel" and "Delete" buttons slightly closer together than "Cancel" and its actual paired "Confirm" button a mistake?',
              options: [
                'It has no real effect on how users interpret the buttons',
                'Proximity would unintentionally signal a relationship between Cancel and Delete that isn\'t actually intended',
                'It violates the Law of Common Fate',
                'It is only a problem on touchscreens',
              ],
              correctIndex: 1,
              explanation: 'Since proximity is such a strong, automatic grouping cue, uneven spacing can accidentally suggest a relationship between elements that was never intended, misleading users.',
            },
            {
              id: 'q2',
              question: 'What is the purpose of a "squint test" (deliberately unfocusing on a layout) when checking for Gestalt mistakes?',
              options: [
                'To check spelling and grammar more easily',
                'To evaluate the purely visual, structural grouping of a layout separately from the meaning of the words on screen',
                'To measure the exact pixel dimensions of elements',
                'To test how the page performs on a slow network connection',
              ],
              correctIndex: 1,
              explanation: 'Since Gestalt grouping is a visual effect independent of content meaning, deliberately blurring out the text isolates whether the shapes and spacing alone communicate the intended structure.',
            },
          ],
        },
      ],
    },
  ],
};
