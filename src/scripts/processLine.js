export function processLine(line) {
  try {
    console.debug("Processing line:", line);
    /**
    Normalizes text lines by converting sequences of multiple
    spaces into tab characters.
    This normalization is needed because:
    1. Input data often comes from different sources (copy-paste, exports, manual entry)
        with inconsistent spacing (double spaces, multiple spaces, tabs mixed with spaces)
    2. We want to preserve single spaces within text fields (e.g., "John Doe")
        while using tabs as reliable field separators
    3. This makes the data processing more robust as it standardizes the field separation
        without requiring the input to be perfectly formatted with tabs
    */

    const normalizedLine = line.trim().replace(/\s{2,}/g, "\t");
    const fields = normalizedLine.split("\t");

    // Split the second field (NAME) by spaces
    const NAME = fields[1].split(" ");
    console.debug("NAME result:", NAME);

    // Construct the output string
    return `LABO_${fields[0]}-${NAME[0]}-${fields[3]} ${fields[2]}`;
  } catch {
    return "Error processing line";
  }
}
