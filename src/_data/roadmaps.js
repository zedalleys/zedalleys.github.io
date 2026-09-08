// Static reference maps, one per discipline, surfaced at /roadmaps.html.
//
// Adapted from the public "UX/UI Product Design Roadmap"
// (product-design-roadmap.com) as a fixed reference — not a live or linked
// copy. Every item is plain text: nothing here fetches a resource, links
// out, or nests into its own page. A category with no `sections` renders as
// "coming soon".
//
// This used to be a route inside the Learning Hub React app
// (`_hub/src/data/roadmap.ts`); it was pulled out into a standalone page so
// Roadmaps is a peer of Work / Journal / Learning Hub, not nested under one.

const productDesignSections = [
  {
    id: "product-thinking",
    title: "Product Thinking",
    clusters: [
      {
        title: "Pre-launch",
        items: [
          "Product Vision",
          "Product Strategy",
          "Value Proposition",
          "Product-Market Fit",
          "Product Roadmap",
          "Product Pitch",
        ],
      },
      { title: "Launch", items: ["MVP", "Product Launch", "Press Release"] },
      {
        title: "Post-Launch",
        items: ["Product Usage Analytics", "Customer Retention", "Product Pivot"],
      },
      { title: "Success Metrics", items: ["Business Metrics", "Design Metrics"] },
    ],
  },
  {
    id: "design-research",
    title: "Design Research",
    clusters: [
      {
        title: "Discover (Primary Research)",
        items: ["Interviews", "Usability Test", "Surveys", "Contextual Inquiry"],
      },
      {
        title: "Types of Research",
        items: [
          "Competitive Research",
          "SWOT Analysis",
          "Qualitative Research",
          "Quantitative Research",
        ],
      },
      {
        title: "Explore & Experiment",
        items: ["Task Analysis", "Analytics", "A/B Testing", "Card Sorting"],
      },
      {
        title: "Planning & Analysis",
        items: ["Research Planning", "Analysis of Findings", "Research Repository"],
      },
    ],
  },
  {
    id: "user-experience",
    title: "User Experience",
    clusters: [
      {
        title: "Design Thinking",
        items: [
          "Define",
          "Problem Statement",
          "Ideate",
          "Brainstorming",
          "Information Architecture",
          "User Flow",
          "Mind Map",
          "Prototype",
          "Sketching",
          "Wireframing",
          "Prototyping",
          "Test and Iterate",
          "Usability Test",
        ],
      },
      {
        title: "Interaction Design",
        items: [
          "Human-Computer Interaction",
          "Cognitive Psychology",
          "Basics & Principles",
          "Gestalt Principles",
          "Visual Hierarchy",
          "Jobs-to-be-Done",
          "User Story",
        ],
      },
      {
        title: "Visual Design",
        items: [
          "Personas",
          "Empathy Map",
          "Customer Journey Map",
          "UX Benchmarking",
          "Content Strategy",
          "UX Storytelling",
        ],
      },
    ],
  },
  {
    id: "user-interface",
    title: "User Interface",
    clusters: [
      {
        title: "Fundamentals",
        items: ["Color Palette", "Typography", "Grids & Spacings", "Iconography"],
      },
      {
        title: "Components & Patterns",
        items: [
          "Component Library",
          "Design Guidelines",
          "Interactions",
          "Components",
          "UI Patterns",
          "Design Principles",
          "Documentation",
        ],
      },
      {
        title: "Usability & Accessibility",
        items: [
          "Usability Principles",
          "Usability Issues",
          "Accessible Design",
          "Inclusive Design",
          "Tools & Checklist",
        ],
      },
      {
        title: "Web & Mobile",
        items: [
          "Web Design",
          "HTML & CSS",
          "Responsive Layouts",
          "Mobile App Design",
          "iOS & Android",
          "Mobile UI Patterns",
        ],
      },
      {
        title: "Motion & Systems",
        items: [
          "UI Animation",
          "Micro-interactions",
          "Design Systems",
          "Atomic Design",
          "Design Handoff",
          "Design Tools",
        ],
      },
    ],
  },
  {
    id: "communication",
    title: "Communication",
    clusters: [
      {
        title: "Product Teams",
        items: [
          "Collaborating with Stakeholders",
          "Team Structure",
          "Analysis & Alignment",
          "Collaboration",
        ],
      },
      {
        title: "Interview Skills",
        items: ["Interview Skills", "Interview Guide", "Interview Questions"],
      },
      {
        title: "Design Portfolio",
        items: [
          "Design Portfolio",
          "Presentation Skills",
          "Best Practices",
          "Case Studies",
          "Design Presentation",
        ],
      },
      {
        title: "Methodologies",
        items: ["Project Planning", "Methodologies", "Agile UX", "Lean UX", "Define OKRs"],
      },
      {
        title: "Soft Skills",
        items: ["Soft Skills", "Management", "Collecting Feedback", "Design Questions"],
      },
    ],
  },
];

module.exports = [
  { id: "product-design", label: "Product Design", sections: productDesignSections },
  { id: "front-end", label: "Front-End" },
  { id: "back-end", label: "Back-End" },
  { id: "product-management", label: "Product Management" },
  { id: "business-analysis", label: "Business Analysis" },
  { id: "project-management", label: "Project Management" },
];
