function calculateAverage(scores) {
    // Calculate and return the average of an array of scores
    // Handle empty array case (return 0)
        if (scores.length === 0) return 0;

    let total = 0;
    for (let score of scores) {
        total += score;
    }
    return total / scores.length;
}

function dropLowestScore(scores) {
    // Return a new array with the lowest score removed
    // If multiple lowest scores exist, remove only one
    if (scores.length === 0) return [];

    let minScore = Math.min(...scores);
    let minIndex = scores.indexOf(minScore);
    return [...scores.slice(0, minIndex), ...scores.slice(minIndex + 1)];
    // Don't modify the original array!
}

function getLetterGrade(score) {
    // Return letter grade based on score
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

function curveGrades(scores, curveAmount) {
    // Add curveAmount to each score
    // Cap all scores at 100 (no score above 100)
    // Return new array, don't modify original

    if (scores.length === 0) return [];

    // Use map to return a new array, rather than modify the original
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
    return scores.map(score => Math.min(score + curveAmount, 100));
}