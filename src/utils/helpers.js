// Utility function to turn camelCase keys into Human Readable Labels
// e.g., "fullName" -> "Full Name"
export function formatLabel(key) {
  if (key === "id" || key === "isVisible") return "";
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
}
