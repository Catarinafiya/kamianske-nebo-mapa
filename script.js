
// 1. Твоя знахідка (повний об'єкт лишаємо як був)
const OBLAST_DATA = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": { "name": "dnipropetrovska_oblast" },
        "geometry": {
            "type": "MultiPolygon",
            "coordinates": [[[[32.955, 47.62], [32.975, 47.625], [32.95, 47.72], [32.955, 47.735], [32.97, 47.745], [33.035, 47.755], [33.03, 47.77], [33.03, 47.79], [33.04, 47.8], [33.035, 47.84], [33.055, 47.895], [33.01, 47.89], [32.98, 47.91], [32.975, 47.945], [32.985, 47.95], [32.975, 47.96], [32.975, 47.995], [33, 48.01], [33.02, 48.05], [33.085, 48.06], [33.09, 48.08], [33.125, 48.085], [33.15, 48.105], [33.165, 48.105], [33.165, 48.13], [33.18, 48.14], [33.2, 48.14], [33.195, 48.18], [33.205, 48.19], [33.255, 48.19], [33.26, 48.175], [33.28, 48.17], [33.355, 48.185], [33.405, 48.185], [33.425, 48.21], [33.46, 48.21], [33.49, 48.25], [33.515, 48.25], [33.495, 48.265], [33.495, 48.31], [33.465, 48.31], [33.44, 48.345], [33.45, 48.4], [33.47, 48.42], [33.45, 48.52], [33.455, 48.56], [33.47, 48.575], [33.495, 48.58], [33.505, 48.59], [33.59, 48.595], [33.59, 48.61], [33.6, 48.62], [33.655, 48.62], [33.665, 48.61], [33.74, 48.64], [33.735, 48.67], [33.675, 48.705], [33.645, 48.7], [33.61, 48.71], [33.595, 48.73], [33.57, 48.74], [33.56, 48.76], [33.56, 48.795], [33.57, 48.815], [33.61, 48.82], [33.625, 48.81], [33.645, 48.81], [33.665, 48.835], [33.695, 48.83], [33.72, 48.835], [33.74, 48.815], [33.755, 48.82], [33.78, 48.815], [33.815, 48.825], [33.83, 48.81], [33.845, 48.85], [33.86, 48.855], [33.875, 48.915], [33.905, 48.92], [33.93, 48.9], [33.95, 48.9], [33.985, 48.885], [34.03, 48.885], [34.045, 48.875], [34.055, 48.855], [34.075, 48.845], [34.135, 48.84], [34.15, 48.795], [34.175, 48.8], [34.21, 48.78], [34.245, 48.775], [34.255, 48.765], [34.29, 48.765], [34.28, 48.775], [34.275, 48.825], [34.29, 48.84], [34.305, 48.84], [34.315, 48.86], [34.29, 48.87], [34.28, 48.89], [34.29, 48.945], [34.32, 48.975], [34.305, 48.99], [34.305, 49.005], [34.355, 49.055], [34.37, 49.055], [34.385, 49.07], [34.38, 49.095], [34.395, 49.115], [34.41, 49.115], [34.455, 49.09], [34.48, 49.095], [34.495, 49.085], [34.525, 49.09], [34.545, 49.08], [34.55, 49.1], [34.58, 49.13], [34.61, 49.135], [34.615, 49.145], [34.635, 49.15], [34.67, 49.145], [34.685, 49.155], [34.705, 49.15], [34.725, 49.155], [34.745, 49.185], [34.78, 49.2], [34.805, 49.2], [34.82, 49.21], [34.865, 49.21], [34.875, 49.2], [34.915, 49.195], [34.94, 49.215], [34.955, 49.215], [34.99, 49.2], [35.025, 49.17], [35.04, 49.195], [35.085, 49.19], [35.095, 49.175], [35.115, 49.185], [35.145, 49.175], [35.185, 49.185], [35.205, 49.18], [35.23, 49.16], [35.23, 49.145], [35.24, 49.145], [35.25, 49.13], [35.265, 49.135], [35.285, 49.115], [35.32, 49.11], [35.335, 49.08], [35.355, 49.075], [35.365, 49.06], [35.385, 49.05], [35.41, 49.05], [35.425, 49.035], [35.45, 49.03], [35.485, 49], [35.52, 49.005], [35.56, 48.995], [35.575, 49.005], [35.61, 49], [35.63, 49.005], [35.645, 48.995], [35.695, 48.99], [35.71, 48.98], [35.745, 48.985], [35.755, 48.975], [35.795, 48.975], [35.815, 48.96], [35.85, 48.98], [35.865, 48.98], [35.875, 48.995], [35.915, 48.99], [35.915, 49.005], [35.93, 49.02], [35.945, 49.02], [36.005, 48.985], [36.025, 48.945], [36.06, 48.93], [36.065, 48.91], [36.05, 48.89], [36.06, 48.885], [36.06, 48.865], [36.095, 48.84], [36.095, 48.83], [36.14, 48.825], [36.175, 48.8], [36.175, 48.73], [36.3, 48.67], [36.305, 48.655], [36.285, 48.625], [36.33, 48.605], [36.34, 48.595], [36.335, 48.575], [36.355, 48.56], [36.365, 48.585], [36.405, 48.62], [36.4, 48.625], [36.405, 48.65], [36.445, 48.655], [36.475, 48.685], [36.49, 48.685], [36.595, 48.625], [36.63, 48.625], [36.665, 48.645], [36.7, 48.65], [36.75, 48.645], [36.76, 48.62], [36.79, 48.62], [36.805, 48.59], [36.835, 48.585], [36.865, 48.59], [36.885, 48.57], [36.915, 48.56], [36.925, 48.535], [36.925, 48.51], [36.91, 48.5], [36.875, 48.5], [36.875, 48.475], [36.855, 48.465], [36.865, 48.455], [36.87, 48.405], [36.845, 48.39], [36.85, 48.37], [36.83, 48.335], [36.88, 48.335], [36.89, 48.325], [36.92, 48.33], [36.935, 48.31], [36.955, 48.185], [36.945, 48.175], [36.92, 48.175], [36.9, 48.16], [36.915, 48.065], [36.875, 48.035], [36.865, 48.015], [36.82, 48.015], [36.795, 48.03], [36.785, 48.025], [36.735, 48.03], [36.72, 48.055], [36.675, 48.07], [36.645, 48.07], [36.625, 48.06], [36.605, 48.065], [36.61, 48.01], [36.6, 47.98], [36.645, 47.975], [36.66, 47.91], [36.645, 47.9], [36.6, 47.895], [36.595, 47.885], [36.605, 47.84], [36.595, 47.83], [36.54, 47.82], [36.53, 47.81], [36.43, 47.805], [36.37, 47.81], [36.355, 47.82], [36.34, 47.8], [36.27, 47.795], [36.255, 47.805], [36.255, 47.815], [36.185, 47.815], [36.17, 47.83], [36.065, 47.83], [36.055, 47.835], [36.055, 47.85], [36.04, 47.855], [36.035, 47.89], [36.05, 47.9], [36.085, 47.905], [36.105, 47.885], [36.105, 47.9], [36.095, 47.915], [36.07, 47.915], [36.06, 47.94], [36.035, 47.945], [36.03, 47.975], [36.04, 47.985], [36.025, 47.99], [36.015, 48.03], [35.965, 48.025], [35.955, 48.035], [35.95, 48.07], [35.925, 48.06], [35.81, 48.045], [35.795, 48.075], [35.74, 48.075], [35.695, 48.115], [35.58, 48.07], [35.515, 48.055], [35.505, 48.075], [35.475, 48.075], [35.45, 48.085], [35.41, 48.08], [35.4, 48.095], [35.345, 48.1], [35.295, 48.125], [35.27, 48.125], [35.26, 48.115], [35.2, 48.12], [35.185, 48.11], [35.1, 48.11], [35.07, 48.105], [35.05, 48.08], [35, 48.07], [34.975, 48.075], [34.91, 48.07], [34.895, 48.08], [34.89, 48.11], [34.885, 48.105], [34.895, 48.045], [34.885, 48.035], [34.865, 48.035], [34.885, 48.005], [34.915, 48.005], [34.925, 47.995], [34.94, 47.925], [34.93, 47.915], [34.865, 47.91], [34.86, 47.9], [34.88, 47.895], [34.885, 47.87], [34.9, 47.875], [34.915, 47.865], [34.925, 47.825], [34.9, 47.805], [34.91, 47.785], [34.965, 47.79], [34.975, 47.78], [34.985, 47.745], [34.975, 47.725], [34.975, 47.7], [34.955, 47.69], [34.96, 47.685], [34.955, 47.665], [34.93, 47.655], [34.95, 47.65], [34.96, 47.59], [34.975, 47.58], [34.985, 47.56], [34.985, 47.54], [34.965, 47.515], [34.94, 47.505], [34.855, 47.495], [34.785, 47.52], [34.73, 47.52], [34.655, 47.54], [34.56, 47.54], [34.5, 47.525], [34.475, 47.51], [34.3, 47.5], [34.225, 47.47], [34.055, 47.45], [34.0, 47.435], [33.935, 47.445], [33.93, 47.495], [33.645, 47.465], [33.635, 47.465], [33.62, 47.49], [33.585, 47.48], [33.55, 47.52], [33.555, 47.54], [33.57, 47.55], [33.565, 47.58], [33.5, 47.57], [33.505, 47.535], [33.495, 47.525], [33.365, 47.51], [33.37, 47.485], [33.36, 47.475], [33.3, 47.465], [33.285, 47.49], [33.265, 47.5], [33.26, 47.515], [33.25, 47.51], [33.205, 47.515], [33.195, 47.525], [33.2, 47.55], [33.165, 47.545], [33.105, 47.555], [33.08, 47.56], [33.075, 47.575], [32.95, 47.57], [32.94, 47.585], [32.94, 47.605], [32.955, 47.62]]]],
        }
    }]
};


const TARGET_ICONS = { shahed: '🛸', missile: '🚀', recon: '🕵️‍♂️' };

// Змінні стану (ОБОВ'ЯЗКОВО МАЮТЬ БУТИ ТУТ, щоб очищення працювало)
let allMarkers = []; 
let selectedMarker = null; 
let currentTool = null;

// Оголошення шару Google Maps
const googleMaps = L.tileLayer('http://{s}.google.com/vt/lyrs=m&hl=uk&x={x}&y={y}&z={z}', {
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '© Google Maps'
});

// Ініціалізація карти
const map = L.map('map', {
    center: [48.45, 34.9],
    zoom: 8,
    layers: [googleMaps], 
    zoomControl: true,
    attributionControl: false // <--- ДОДАЙ ЦЕЙ РЯДОК (не забудь кому вище)
});


// Створення маски
const worldCoords = [[-90, -180], [-90, 180], [90, 180], [90, -180], [-90, -180]];
const regionCoords = OBLAST_DATA.features[0].geometry.coordinates[0][0].map(c => [c[1], c[0]]);

L.polygon([worldCoords, regionCoords], {
    fillColor: 'black',
    fillOpacity: 0.6,
    color: '#3498db',
    weight: 2,
    interactive: false
}).addTo(map);

L.polyline(regionCoords, { color: '#1b91c8', weight: 1 }).addTo(map);

// Функція для оновлення статистики
function updateStats() {
    const total = allMarkers.length;
    
    const shaheds = allMarkers.filter(m => m.type === 'shahed').length;
    const missiles = allMarkers.filter(m => m.type === 'raketa').length;
    const recons = allMarkers.filter(m => m.type === 'rozvid').length;

    // Відмінювання ми вже раніше обговорювали, якщо ти його вже додала — просто залиш як було.
    // Тут варіант з твого останнього повідомлення:
    let text = `<strong>Всього: ${total} цілей</strong>`;
    
    let details = [];
    if (shaheds > 0) details.push(`${shaheds} Шахед`);
    if (missiles > 0) details.push(`${missiles} Ракета`);
    if (recons > 0) details.push(`${recons} Розвід. дрон`);
    
    if (details.length > 0) {
        text += ` | ${details.join(' | ')}`;
    }

    const badge = document.getElementById('stats-badge');
    if (badge) {
        badge.innerHTML = text; 
    }
}
// ==========================================
// 2. ЛОГІКА МАРКЕРІВ ТА ПАНЕЛІ (Те, що ми правили)
// ==========================================



// 1. Твої іконки з GitHub
const MY_ASSETS = {
    shahed: 'https://raw.githubusercontent.com/Catarinafiya/map-assets/main/shahed.png',
    raketa: 'https://raw.githubusercontent.com/Catarinafiya/map-assets/main/raketa.png',
    rozvid: 'https://raw.githubusercontent.com/Catarinafiya/map-assets/main/rozvid.png'
};

// Змінна для збереження останнього обраного курсу
let lastUsedAngle = 0;
let currentBeamDist = 1; // <--- ДОДАЙ ЦЕЙ РЯДОК

function getBeamCoords(latlng, angle, type, customDist) {
    // 1. ПЕРЕВІРЯЄМО ПРІОРИТЕТ:
    // Спочатку беремо customDist (який передається при сованні повзунка),
    // якщо його нема — дивимось, який слайдер ЗАРАЗ ВИДИМИЙ на екрані.
    
    let distanceKm;
    const distSlider = document.getElementById('dist-slider');
    const distSliderMob = document.getElementById('dist-slider-mob');

    if (customDist !== undefined) {
        distanceKm = parseFloat(customDist);
    } else {
        // Перевіряємо, чи ми на мобільці (чи видима мобільна панель)
        const isMobile = window.getComputedStyle(document.querySelector('.mobile-only')).display !== 'none';
        const activeSlider = isMobile ? distSliderMob : distSlider;
        distanceKm = parseFloat(activeSlider?.value || currentBeamDist);
    }
    
    let offsetKm = 0.05;
    const angleRad = ((-angle) + 90) * (Math.PI / 180);

    const startLat = latlng.lat + (offsetKm / 111.32) * Math.sin(angleRad);
    const startLng = latlng.lng + (offsetKm / (111.32 * Math.cos(latlng.lat * Math.PI / 180))) * Math.cos(angleRad);

    const destLat = latlng.lat + ((distanceKm + offsetKm) / 111.32) * Math.sin(angleRad);
    const destLng = latlng.lng + ((distanceKm + offsetKm) / (111.32 * Math.cos(latlng.lat * Math.PI / 180))) * Math.cos(angleRad);

    return [[startLat, startLng], [destLat, destLng]];
}

// Функція створення іконки
function createIcon(type, angle = 0) {
    const url = MY_ASSETS[type] || MY_ASSETS.shahed;
    let size = 26; 
    if (type === 'raketa') size = 32; 
    if (type === 'rozvid') size = 22; 

    return L.divIcon({
        html: `<div style="transform: rotate(${angle}deg); width: ${size}px; height: ${size}px; display: flex; align-items: center; justify-content: center;">
                 <img src="${url}" style="width: 100%; height: 100%;">
               </div>`,
        iconSize: [size, size],
        iconAnchor: [size/2, size/2],
        className: 'drone-main'
    });
}

// Вибір інструменту
document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.onclick = () => {
        currentTool = btn.dataset.tool;
        document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll(`[data-tool="${currentTool}"]`).forEach(b => b.classList.add('active'));
        deselect();
    };
});

// Клік по мапі (Додавання цілі + Променя)
map.on('click', (e) => {
    if (currentTool) {
        const isLockedPC = document.getElementById('lock-angle')?.checked;
        const isLockedMob = document.getElementById('lock-angle-mob')?.checked;
        const isLocked = isLockedPC || isLockedMob;
        const startAngle = isLocked ? lastUsedAngle : 0;

        // Створюємо маркер
        const marker = L.marker(e.latlng, { 
            draggable: true, 
            icon: createIcon(currentTool, startAngle) 
        }).addTo(map);

        // --- НОВЕ: Створюємо червоний пунктирний промінь ---
        const beam = L.polyline(getBeamCoords(e.latlng, startAngle, currentTool, currentBeamDist), {
    color: 'red',
    weight: 1.5,       /* Ставимо дробове значення, це спрацює */
    dashArray: '2, 6', /* Робимо риску коротшою, а пропуски частішими */
    opacity: 0.7,      /* Додаємо прозорість, це візуально "полегшить" лінію */
    interactive: false
}).addTo(map);

        marker.type = currentTool; 
        marker.angle = startAngle;
        marker.beam = beam; // Прив'язуємо промінь до маркера

        // Рух променя разом з іконкою
       marker.on('drag', function() {
    // Тепер промінь завжди знатиме, яка дистанція виставлена на екрані
    this.beam.setLatLngs(getBeamCoords(this.getLatLng(), this.angle, this.type));
});

        marker.on('click', (ev) => { 
            L.DomEvent.stopPropagation(ev); 
            selectMarker(marker); 
        });

       allMarkers.push(marker);
        selectMarker(marker);
        updateStats(); // <--- ДОДАЛА СЮДИ
    } else { 
        deselect(); 
    }
});

function selectMarker(marker) {
    selectedMarker = marker;
    const panel = document.getElementById('course-panel');
    const panelMob = document.getElementById('course-panel-mob');
    if(panel) panel.style.display = 'block';
    if(panelMob) panelMob.style.display = 'flex';
    updateUI(marker.angle);
}

function updateUI(angle) {
    if(document.getElementById('angle-val')) document.getElementById('angle-val').innerText = angle;
    if(document.getElementById('angle-val-mob')) document.getElementById('angle-val-mob').innerText = angle;
    if(document.getElementById('heading-slider')) document.getElementById('heading-slider').value = angle;
    if(document.getElementById('heading-slider-mob')) document.getElementById('heading-slider-mob').value = angle;
}

// Додай це ПІСЛЯ обробника повороту (слайдерів курсу)
[document.getElementById('dist-slider'), document.getElementById('dist-slider-mob')].forEach(s => {
    if(s) {
        s.oninput = (e) => {
            const dist = e.target.value;
            currentBeamDist = dist; // Оновлюємо глобальну змінну дистанції

            // Оновлюємо цифри на екрані (і для ПК, і для мобілки)
            if(document.getElementById('dist-val')) document.getElementById('dist-val').innerText = dist;
            if(document.getElementById('dist-val-mob')) document.getElementById('dist-val-mob').innerText = dist;

            if (selectedMarker && selectedMarker.beam) {
                // Перемальовуємо лінію в реальному часі
                selectedMarker.beam.setLatLngs(
                    getBeamCoords(selectedMarker.getLatLng(), selectedMarker.angle, selectedMarker.type, dist)
                );
            }
        };
    }
});

function deselect() {
    selectedMarker = null;
    const panel = document.getElementById('course-panel');
    const panelMob = document.getElementById('course-panel-mob');
    if(panel) panel.style.display = 'none';
    if(panelMob) panelMob.style.display = 'none';
}

// Поворот (слайдери) - тепер повертають і промінь
[document.getElementById('heading-slider'), document.getElementById('heading-slider-mob')].forEach(s => {
    if(s) {
        s.oninput = (e) => {
            if (selectedMarker) {
                const angle = e.target.value;
                selectedMarker.angle = angle;
                lastUsedAngle = angle;
                selectedMarker.setIcon(createIcon(selectedMarker.type, angle));
                
                if (selectedMarker.beam) {
                    // Додаємо тип цілі в аргументи
                    selectedMarker.beam.setLatLngs(getBeamCoords(selectedMarker.getLatLng(), angle, selectedMarker.type));
                }
                updateUI(angle);
            }
        };
    }
});

// ВИДАЛЕННЯ (з променем)
function deleteSelected() { 
    if (selectedMarker) { 
        if (selectedMarker.beam) map.removeLayer(selectedMarker.beam);
        map.removeLayer(selectedMarker); 
        allMarkers = allMarkers.filter(m => m !== selectedMarker); 
        deselect(); 
        updateStats(); // <--- ДОДАЛА СЮДИ
    } 
}

function clearAll() { 
    allMarkers.forEach(m => {
        if (m.beam) map.removeLayer(m.beam);
        map.removeLayer(m);
    });
    allMarkers = []; 
    deselect(); 
    updateStats(); // <--- ДОДАЛА СЮДИ
}

// 1. Функція-помічник для відмінювання слів (ціль, цілі, цілей тощо)
function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) return five;
    n %= 10;
    if (n === 1) return one;
    if (n >= 2 && n <= 4) return two;
    return five;
}

// 2. Оновлена функція статистики (ПРАВИЛЬНИЙ ПОРЯДОК ТА БЕЗ РОЗРИВІВ)
function updateStats() {
    const total = allMarkers.length;
    
    const shaheds = allMarkers.filter(m => m.type === 'shahed').length;
    const missiles = allMarkers.filter(m => m.type === 'raketa').length;
    const recons = allMarkers.filter(m => m.type === 'rozvid').length;

    // Відмінюємо головне слово "ціль"
    const totalWord = getNoun(total, 'ціль', 'цілі', 'цілей');
    
    // Обгортаємо першу частину, щоб "Всього: 10 цілей" теж ніколи не розривалося
    let text = `<span style="white-space: nowrap;"><strong>Всього:&nbsp;${total}&nbsp;${totalWord}</strong></span>`;
    
    let details = [];
    
    // 1. РАКЕТИ (Тепер вони перші, як на кнопках)
    if (missiles > 0) {
        const word = getNoun(missiles, 'Ракета', 'Ракети', 'Ракет');
        // &nbsp; і nowrap склеюють цифру і слово
        details.push(`<span style="white-space: nowrap;">${missiles}&nbsp;${word}</span>`);
    }
    
    // 2. ШАХЕДИ (Другі)
    if (shaheds > 0) {
        const word = getNoun(shaheds, 'Шахед', 'Шахеди', 'Шахедів');
        details.push(`<span style="white-space: nowrap;">${shaheds}&nbsp;${word}</span>`);
    }
    
    // 3. РОЗВІДНИКИ (Треті)
    if (recons > 0) {
        const word = getNoun(recons, 'Розвідник', 'Розвідники', 'Розвідників');
        details.push(`<span style="white-space: nowrap;">${recons}&nbsp;${word}</span>`);
    }
    
    if (details.length > 0) {
        text += ` | ${details.join(' | ')}`;
    }

    const badge = document.getElementById('stats-badge');
    if (badge) {
        badge.innerHTML = text; 
    }
}
