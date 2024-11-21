// script.js
const factDisplay = document.getElementById('fact-display');
const generateBtn = document.getElementById('generate-btn');

// Function to fetch a random fact from the API
async function getRandomFact() {
    try {
        const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
        const data = await response.json();
        return data.text;
    } catch (error) {
        console.error('Error fetching fact:', error);
        return 'Unable to load fact. Please try again.';
    }
}

// Function to display the new fact
async function displayNewFact() {
    factDisplay.textContent = 'Loading...';
    const fact = await getRandomFact();
    factDisplay.textContent = fact;
}

// Display initial fact
displayNewFact();

// Add click event listener to button
generateBtn.addEventListener('click', displayNewFact);
