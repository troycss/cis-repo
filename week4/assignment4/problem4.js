function createPyramid(height) {
    // Build a centered pyramid of asterisks (*)
    // Example: height = 3 →
    //   *
    //  ***
    // *****
    // Return as a string with \n between lines

    let pyramid = "";

    for (let i = 1; i <= height; i++) {
        // Calculate spaces and stars for current level
        let spaces = " ".repeat(height - i);
        let stars = "*".repeat(2 * i - 1);
        // Append to pyramid string
        pyramid += spaces + stars;
        // Add newline if not the last line
        if (i < height) {
            pyramid += "\n";
        }
    }
    return pyramid;
}

function createNumberStaircase(steps) {
    // Build a staircase of increasing numbers
    // Example: steps = 5 →
    // 1
    // 12
    // 123
    // 1234
    // 12345

    let staircase = "";

    for (let i = 1; i <= steps; i++) {
        staircase += i.toString();
        // Add newline if not the last step
        if (i < steps) {
            staircase += "\n";
        }
    }
    return staircase;
}

function createCheckerboard(size) {
    // Create a checkerboard pattern of X and O
    // Example: size = 4 →
    // XOXO
    // OXOX
    // XOXO
    // OXOX

    let board = "";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            // Alternate between X and O
            if ((i + j) % 2 === 0) {
                board += "X";
            } else {
                board += "O";
            }
        }
        // Add newline after each row
        board += "\n";
    }
    return board;
}