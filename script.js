function calculateWeight() {
    const earthWeight = document.getElementById('earthWeight').value;
    if (!earthWeight) {
        alert("لطفا وزن مورد نظر را وارد کنید.");
        return;
    }

    const planets = [
        { name: "Mercury | عطارد", gravity: 0.38, img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg" },
        { name: "Venus | زهره", gravity: 0.91, img: "https://example.com/venus.png" },
        { name: "Earth | زمین", gravity: 1, img: "https://example.com/earth.png" },
        { name: "Mars | مریخ", gravity: 0.38, img: "https://example.com/mars.png" },
        { name: "Jupiter | مشتری", gravity: 2.34, img: "https://example.com/jupiter.png" },
        { name: "Saturn | زحل", gravity: 1.06, img: "https://example.com/saturn.png" },
        { name: "Uranus | اورانوس", gravity: 0.92, img: "https://example.com/uranus.png" },
        { name: "Neptune | نپتون", gravity: 1.19, img: "https://example.com/neptune.png" },
        { name: "Moon | ماه", gravity: 0.16, img: "https://en.wikipedia.org/wiki/Moon#/media/File:FullMoon2010.jpg" }
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
