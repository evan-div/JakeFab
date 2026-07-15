export type ProjectImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ProjectVideo = {
  src: string;
  /** Description used for the accessible label — there's no on-screen caption track. */
  alt: string;
  /** Still frame shown before playback. Falls back to the browser's default (first frame) if omitted. */
  poster?: string;
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
  /** Optional clips (install walkthroughs, process footage, etc.) shown in the
   *  same gallery carousel after the photos. */
  videos?: ProjectVideo[];
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
