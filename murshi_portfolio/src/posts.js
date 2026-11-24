export const slug = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 70);

/* The post body without its first line (that's the title), cut at a word boundary. */
export function excerpt(body, n = 220) {
  const rest = body.split("\n").slice(1).join(" ").replace(/\s+/g, " ").trim() || body;
  return rest.length <= n ? rest : rest.slice(0, rest.lastIndexOf(" ", n)) + "…";
}

export const niceDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
