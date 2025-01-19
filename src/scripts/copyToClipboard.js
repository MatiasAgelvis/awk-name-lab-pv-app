export function copyToClipboard(textToCopy) {
  try {
    navigator.clipboard.writeText(textToCopy);
    return true;
  } catch (err) {
    console.error("Copy failed:", err);
    return false;
  }
}
