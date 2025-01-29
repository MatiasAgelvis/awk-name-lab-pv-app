function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}

export function processLine(line) {
  try {
    // console.debug("Processing line:", line);
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

    // Split the second field (NAME) by spaces to only take the last name
    const NAME = fields[1].split(" ");
    // console.debug("NAME result:", NAME);
    //
    const postCode = addLeadingZero(fields[3]);

    // Construct the output string
    // fields[0] = Case number
    // NAME[0] = Name of the Case
    // fields[3] = Post code
    // fields[2] = City
    return `LABO_${fields[0]}-${NAME[0]}-${postCode} ${fields[2]}`;
  } catch {
    if (line === "") {
      return "";
    }
    return "Error processing line";
  }
}
