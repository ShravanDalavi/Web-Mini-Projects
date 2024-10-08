function calculateDateDifference() {
    // Get the value from the input fields
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);

    // Check if the dates are valid
    if (startDate == "Invalid Date" || endDate == "Invalid Date") {
        document.getElementById('result').innerHTML = "Please enter valid dates.";
        return;
    }

    if (endDate < startDate) {
        document.getElementById('result').innerHTML = "End date must be after the start date.";
        return;
    }

    // Calculate the difference in years, months, and days
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    // Adjust if days or months are negative
    if (days < 0) {
        months--;
        const previousMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 0);
        days += previousMonth.getDate(); // Add days from the previous month
    }

    if (months < 0) {
        years--;
        months += 12; // Add 12 months to adjust
    }

    // Display the result
    document.getElementById('result').innerHTML = `Difference: ${years} years, ${months} months, and ${days} days.`;
}