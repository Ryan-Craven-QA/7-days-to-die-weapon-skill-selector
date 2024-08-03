// Define the list of weapons and skill trees
const weapons = [
    "Clubs", "Sledgehammers", "Shotguns", "Spears", "Rifles",
    "Hand to hand", "Machine Guns", "Knives", "Archery", "Handguns (SMG included)", "Batons"
];
const skillTrees = {
    Perception: 57,
    Strength: 56,
    Fortitude: 58,
    Agility: 55,
    Intellect: 61
};

function getRandomElements(arr, count) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getRandomSkillPoints() {
    const points = {};
    for (const [skill, maxPoints] of Object.entries(skillTrees)) {
        points[skill] = Math.floor(Math.random() * maxPoints) + 1;
    }
    return points;
}

function generateSelection() {
    const weaponCount = parseInt(document.getElementById('weaponCount').value);
    const useDice = document.getElementById('useDice').checked;
    const resultDiv = document.getElementById('results');

    if ((!weaponCount || isNaN(weaponCount) || weaponCount < 1 || weaponCount > 3) && !useDice) {
        alert('Please select a valid number of weapon types (1-3) or choose to use the dice system.');
        return;
    }

    let resultHTML = '';

    if (weaponCount && !isNaN(weaponCount) && weaponCount >= 1 && weaponCount <= 3) {
        const selectedWeapons = getRandomElements(weapons, weaponCount);
        resultHTML += `<h2>Selected Weapons:</h2><ul>`;
        selectedWeapons.forEach(weapon => {
            resultHTML += `<li>${weapon}</li>`;
        });
        resultHTML += `</ul>`;
    }

    if (useDice) {
        const skillPoints = getRandomSkillPoints();
        resultHTML += `<h2>Skill Points:</h2><ul>`;
        for (const [skill, points] of Object.entries(skillPoints)) {
            resultHTML += `<li>${skill}: ${points} points</li>`;
        }
        resultHTML += `</ul>`;
    }

    resultDiv.innerHTML = resultHTML;
}
