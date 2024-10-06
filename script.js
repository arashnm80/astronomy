function calculateWeight() {
    const earthWeight = document.getElementById('earthWeight').value;
    if (!earthWeight) {
        alert("Please enter a valid weight.");
        return;
    }

    const planets = [
        { name: "Mercury", gravity: 0.38, img: "https://example.com/mercury.png" },
        { name: "Venus", gravity: 0.91, img: "https://example.com/venus.png" },
        { name: "Earth", gravity: 1, img: "https://example.com/earth.png" },
        { name: "Mars", gravity: 0.38, img: "https://example.com/mars.png" },
        { name: "Jupiter", gravity: 2.34, img: "https://example.com/jupiter.png" },
        { name: "Saturn", gravity: 1.06, img: "https://example.com/saturn.png" },
        { name: "Uranus", gravity: 0.92, img: "https://example.com/uranus.png" },
        { name: "Neptune", gravity: 1.19, img: "https://example.com/neptune.png" },
        { name: "Moon", gravity: 0.16, img: "https://example.com/moon.png" }
    ];

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    planets.forEach(planet => {
        const weightOnPlanet = (earthWeight * planet.gravity).toFixed(2);
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        
        resultItem.innerHTML = `
            <img src="${planet.img}" alt="${planet.name}">
            <span>${planet.name}: ${weightOnPlanet} kg</span>
        `;
        
        resultsDiv.appendChild(resultItem);
    });
}
