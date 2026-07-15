export type ProcessCapability = {
  label: string;
  detail: string;
};

/**
 * Welding processes, machining, and design software the shop works with.
 * Distinct from `process.ts` (the client-facing project steps) — this list
 * is the technical/equipment side, shown in the Equipment section.
 */
export const weldingProcesses: ProcessCapability[] = [
  { label: "SMAW", detail: "Stick welding — heavy structural and repair work" },
  { label: "GMAW", detail: "MIG welding — clean, efficient production welds" },
  { label: "GTAW", detail: "TIG welding — precise, refined welds on visible material" },
  {
    label: "Oxy/Acetylene",
    detail: "Torch cutting, heating, and brazing",
  },
];

export const fabricationCapabilities: ProcessCapability[] = [
  { label: "Fireball Fixture Table", detail: "Modular tooling to hold complex builds square and true" },
  { label: "3-Axis Milling", detail: "Machined parts and fixtures to precise tolerances" },
  { label: "5-Axis Milling", detail: "Complex geometry machined in a single setup" },
  { label: "Metal 3D Printing", detail: "Rapid prototyping and one-off components" },
  { label: "SolidWorks CAD", detail: "Every custom piece modeled and engineered before it's built" },
];
