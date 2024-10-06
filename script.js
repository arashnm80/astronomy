function calculateWeight() {
    const earthWeight = document.getElementById('earthWeight').value;
    if (!earthWeight) {
        alert("لطفا وزن مورد نظر را وارد کنید");
        return;
    }

    const planets = [
        { name_en: "Mercury", name_fa: "عطارد", gravity: 0.38, img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg" },
        { name_en: "Venus", name_fa: "زهره", gravity: 0.91, img: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg" },
        { name_en: "Earth", name_fa: "زمین", gravity: 1, img: "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg" },
        { name_en: "Mars", name_fa: "مریخ", gravity: 0.38, img: "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg" },
        { name_en: "Jupiter", name_fa: "مشتری", gravity: 2.34, img: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg" },
        { name_en: "Saturn", name_fa: "زحل", gravity: 1.06, img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg" },
        { name_en: "Uranus", name_fa: "اورانوس", gravity: 0.92, img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg" },
        { name_en: "Neptune", name_fa: "نپتون", gravity: 1.19, img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg" },
        { name_en: "Moon", name_fa: "ماه", gravity: 0.16, img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg" }
    ];
    
    

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    planets.forEach(planet => {
        const weightOnPlanet = (earthWeight * planet.gravity).toFixed(2);
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
    
        resultItem.innerHTML = `
            <img src="${planet.img}" alt="${planet.name_en}">
            <div class="planet-names">
                <span class="name-fa">${planet.name_fa}</span>
                <span class="name-en">${planet.name_en}</span>
            </div>
            <span class="weight-result">${weightOnPlanet} kg</span>
        `;
    
        resultsDiv.appendChild(resultItem);
    });
    
}


// Add event listener for Enter key
document.getElementById('earthWeight').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculateWeight();
    }
});

window.onload = function() {
    document.getElementById('earthWeight').focus();
};