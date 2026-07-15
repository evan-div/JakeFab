export type ProjectImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  /** City / area, when available. */
  location?: string;
  /** One-line editorial summary used on the card. */
  summary: string;
  /** Longer narrative shown in the project detail view. */
  description?: string;
  materials?: string[];
  /** The design goal or problem the client brought in. */
  challenge?: string;
  /** What the finished piece delivered. */
  result?: string;
  coverImage: string;
  images: ProjectImage[];
  /** Marks demonstration content so it is never presented as a real job. */
  isPlaceholder?: boolean;
};

export type Capability = {
  title: string;
  description: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};
