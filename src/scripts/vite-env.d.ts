function processLine(line) {
    // Split the line by tabs (\t)
    const fields = line.split('\t');
    
    // Split the second field (NAME) by spaces
    const NAME = fields[1].split(' ');
    
    // Construct the output string
    // LABO_$1-NAME[1]-$4 $3
    return `LABO_${fields[0]}-${NAME[0]}-${fields[3]} ${fields[2]}`;
}