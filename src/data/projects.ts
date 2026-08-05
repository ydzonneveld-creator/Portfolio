export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  type: string;
  year: string;
  tag: string;
  partner?: string;
  summary: string[];
  outcome: string;
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    slug: "orthoflex",
    index: "01",
    title: "the Orthoflex",
    tagline: "A brace that adjusts its own support, on demand.",
    type: "Graduation project",
    year: "2026",
    tag: "Semi-parametric brace · TPU / PLA",
    partner: "Reinier de Graaf Gasthuis & Reinier Haga Orthopaedic Center",
    summary: [
      "People with chronic thumb-base conditions — rheumatoid arthritis, osteoarthritis — need less support for some tasks than others. Cooking or handling tools needs more thumb mobility than a brace allows, so patients take the brace off, lose support, and end up in more pain.",
      "Interviews with patients, an orthopaedic instrument maker, a hand therapist, a surgeon and a rheumatologist, plus a mapped patient journey, pointed to one redefinition: \"smart\" doesn't mean electronics here. It means the interaction adapts to the user, not the other way round.",
      "The result is a semi-parametric brace with a rotating eccentric lobe: twisting a knob shifts the angle of the shells along the thumb-base axis, dialling compressive force up for support or down for mobility. Built in Grasshopper, 3D-scanned to the patient's hand, and tested with two patients through the D-QUEST and Sollerman hand test.",
    ],
    outcome:
      "Both the rehabilitation physician and patients agreed: variable support has real potential for patients who need that level of flexibility.",
    images: [
      { src: "/images/orthoflex/cover.jpg", alt: "Illustration of hands wearing various orthopaedic braces", width: 1800, height: 1350 },
      { src: "/images/orthoflex/process-diamond.jpg", alt: "Double-diamond design process diagram for the Orthoflex", width: 1800, height: 1030 },
      { src: "/images/orthoflex/progression.jpg", alt: "Four stages of the Orthoflex, from sketch to hi-fi prototype", width: 1800, height: 918 },
      { src: "/images/orthoflex/mechanism.jpg", alt: "Mobility mode versus support mode mechanism, worn on the hand", width: 1800, height: 806 },
    ],
  },
  {
    slug: "gaitkeeper",
    index: "02",
    title: "the Gaitkeeper+",
    tagline: "Haptic feedback that helps amputees anticipate their next step.",
    type: "Master project",
    year: "2023",
    tag: "Wearable haptics · IMU feedback",
    partner: "Elitac",
    summary: [
      "Elitac develops smart wearables and asked for the Gaitkeeper — a device that helps people relearn to walk with a prosthetic leg — to be embodied into an actual product, from working principle to a wearable a patient could put on.",
      "Testing with the target user was hard early on, so the team modified a hands-free crutch with a hard shell simulating the prosthesis and socket, and used it to trial vibration-motor placement and patterns on other students first.",
      "The final design mounts directly on the prosthesis. An IMU reads the gait, a microcontroller turns it into a specific vibration pattern, and two ERM motors transfer that signal through the socket to the thigh.",
    ],
    outcome:
      "Two people with a prosthetic leg tested it for an hour each and were confident in its usability — both could anticipate the touchdown of their prosthetic foot.",
    images: [
      { src: "/images/gaitkeeper/cover-sketches.jpg", alt: "Sketch collage of the Gaitkeeper+ wearable concept", width: 1800, height: 1287 },
      { src: "/images/gaitkeeper/prototypes-row.jpg", alt: "Early crutch-based test rig and taped prototype on a simulated socket", width: 1800, height: 1190 },
      { src: "/images/gaitkeeper/final-render.jpg", alt: "Final Gaitkeeper+ device render, mounted on a strap", width: 1532, height: 1800 },
    ],
  },
  {
    slug: "backpack",
    index: "03",
    title: "the modular backpack",
    tagline: "One 9.6L pack, expandable to whatever the day needs.",
    type: "Bachelor final project",
    year: "2022",
    tag: "RPET soft goods · modular volume",
    partner: "HEMA design contest",
    summary: [
      "HEMA's yearly design contest asked for a product redesigned to be more durable, prettier and more practical. A survey and interviews narrowed the brief to one recurring problem: a student's backpack needs to cover school, sports and groceries, and those situations mainly differ in the volume they need.",
      "Three ways to change volume were sketched — folding pockets, elastic pleats, and modules. Modularity won: most flexibility, least material used for the volume most days actually need.",
      "The base pack holds 9.6L and expands with up to two attachable modules — an elastic expander, a breathable mesh pocket, or an insulated pocket — fixed to the front and top with concealed buckles. The patterns are laser-cut from RPET X-Pac and stitched with seam durability in mind.",
    ],
    outcome:
      "A working prototype, built and photographed, then mocked up as a real HEMA product listing to test the pitch end to end.",
    images: [
      { src: "/images/backpack/hero.jpg", alt: "The modular backpack prototype on a wooden table", width: 1800, height: 1605 },
      { src: "/images/backpack/hema-ad.jpg", alt: "Mock HEMA product listing for the modular backpack", width: 1800, height: 1030 },
    ],
  },
  {
    slug: "paste",
    index: "04",
    title: "Paste is the future",
    tagline: "A no-heat, sustainable paste material for desktop 3D printing.",
    type: "Minor project",
    year: "2021",
    tag: "Material R&D · paste extrusion",
    summary: [
      "3D printing is flexible but energy-inefficient per part next to processes like injection molding, and most printable pastes still need heat. This project set out to develop one that doesn't.",
      "Over 10 weeks, 110 base / binder / additive combinations — walnut shell powder, wood fibre, latex, acacia gum, PVA and more — were tested for extrudability, layer adhesion and shape retention, then for tensile strength and recyclability.",
      "An early syringe-based extruder oozed mid-travel and overstressed the material, so the team built a two-part system instead: a hopper screw pressurises the paste, an auger screw regulates flow through the nozzle — adapted to a standard desktop FDM printer, g-code and all.",
    ],
    outcome:
      "Consistent flow rate and cleanability were the hardest problems to solve. The material was shown off in two lamp shades and a woven basket form.",
    images: [
      { src: "/images/paste/hero.jpg", alt: "Three 3D-printed paste forms in white, tan and black", width: 1800, height: 1350 },
      { src: "/images/paste/material-grid.jpg", alt: "Grid of test prints across different paste combinations", width: 1364, height: 1800 },
      { src: "/images/paste/extrusion-hardware.jpg", alt: "Prototype paste extruder hardware", width: 1600, height: 1560 },
    ],
  },
  {
    slug: "hive",
    index: "05",
    title: "the Hive",
    tagline: "A bluetooth speaker designed to actually be manufactured.",
    type: "Course project",
    year: "—",
    tag: "Design for manufacture · 2K molding",
    summary: [
      "Most concept speakers stop at a nice shape. This project's brief was to take one all the way to manufacture-ready: tolerances, production and assembly considered from the start, with guidance from an injection-molding expert at Promolding on submethods like RIM and 2K molding.",
      "FEA was used to check shrinkage and warping on the housing, and those results shaped rib placement, gate positions and the mold's parting lines before anything was finalised.",
      "The final design is a 2-part PVDF housing with TPU corners that double as a watertight seal, built for 2K molding so the speaker survives impact and water exposure.",
    ],
    outcome:
      "A complete design-for-manufacture package: mold design, FEA-verified structure, and full exploded assembly.",
    images: [
      { src: "/images/hive/hero.jpg", alt: "The Hive bluetooth speaker, hexagonal housing on a rock", width: 1800, height: 1387 },
      { src: "/images/hive/exploded-detail.jpg", alt: "Cutaway detail of the Hive speaker's internal assembly", width: 1540, height: 1620 },
    ],
  },
];
