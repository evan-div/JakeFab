import type { Project, ProjectImage, ProjectVideo } from "./types";

export type ProjectMediaItem =
  | ({ kind: "image" } & ProjectImage)
  | ({ kind: "video" } & ProjectVideo);

/** Photos first, then videos — the gallery card cover is always a photo. */
export function getProjectMedia(project: Project): ProjectMediaItem[] {
  return [
    ...project.images.map((img): ProjectMediaItem => ({ kind: "image", ...img })),
    ...(project.videos ?? []).map((vid): ProjectMediaItem => ({ kind: "video", ...vid })),
  ];
}

/** e.g. "5 photos", "4 photos, 1 video", "2 videos" — used on the gallery card badge. */
export function mediaCountLabel(media: ProjectMediaItem[]): string {
  const photos = media.filter((m) => m.kind === "image").length;
  const videos = media.filter((m) => m.kind === "video").length;
  const parts: string[] = [];
  if (photos > 0) parts.push(`${photos} photo${photos === 1 ? "" : "s"}`);
  if (videos > 0) parts.push(`${videos} video${videos === 1 ? "" : "s"}`);
  return parts.join(", ");
}
