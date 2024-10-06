function calculateWeight() {
    const earthWeight = document.getElementById('earthWeight').value;
    if (!earthWeight) {
        alert("لطفا وزن مورد نظر را وارد کنید.");
        return;
    }

    const planets = [
        { name: "Mercury | عطارد", gravity: 0.38, img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg" },
        { name: "Venus | زهره", gravity: 0.91, img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg" },
        { name: "Earth | زمین", gravity: 1, img: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg" },
        { name: "Mars | مریخ", gravity: 0.38, img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg" },
        { name: "Jupiter | مشتری", gravity: 2.34, img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg" },
        { name: "Saturn | زحل", gravity: 1.06, img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg" },
        { name: "Uranus | اورانوس", gravity: 0.92, img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg" },
        { name: "Neptune | نپتون", gravity: 1.19, img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg" },
        { name: "Moon | ماه", gravity: 0.16, img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg" }
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
