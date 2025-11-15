// Simulated real-time Punjab data
const cropHealthScore = 78;
const growthStage = "Tillering";
const cropMapSummary = "West Punjab region shows moderate stress — nitrogen levels slightly low. Recommend 30 kg/acre urea.";

const weather = { temp: 32, humidity: 60, wind: 12, rain: 40 };
const soil = { moisture: "48%", ph: 6.5, nitrogen: "Medium" };
const recommendations = [
    "Apply 30 kg/acre urea in north‑western field",
    "Irrigate in next 24 hours if soil moisture < 50%",
    "Delay pesticide spray due to moderate humidity"
];

const yieldPrediction = "Estimated yield for this season in Punjab: ~5.8 tonnes/ha.";
const costTips = "Use split fertilizer application: saves ~₹2,500/ha and reduces leaching.";

// Populate dashboard
document.getElementById('cropScore').innerText = cropHealthScore + "/100";
document.getElementById('growthStage').innerText = growthStage;
document.getElementById('mapSummary').innerText = cropMapSummary;

// Weather panel
document.getElementById('temp').innerText = weather.temp + " °C ☀️";
document.getElementById('humidity').innerText = weather.humidity + " % 💧";
document.getElementById('wind').innerText = weather.wind + " km/h 🍃";
document.getElementById('rain').innerText = weather.rain + " % 🌦️";

// Soil panel
document.getElementById('soilMoisture').innerText = soil.moisture;
document.getElementById('soilPH').innerText = soil.ph;
document.getElementById('soilNitrogen').innerText = soil.nitrogen;

// Recommendations list
const recList = document.getElementById('recommendList');
recommendations.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    recList.appendChild(li);
});

// Analytics cards
document.getElementById('yieldPrediction').innerText = yieldPrediction;
document.getElementById('costTips').innerText = costTips;

// Crop health map canvas
const canvas = document.getElementById('mapCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 280; canvas.height = 180;
ctx.fillStyle = '#2e7d32'; ctx.fillRect(0,0,100,180);
ctx.fillStyle = '#a5d6a7'; ctx.fillRect(100,0,100,180);
ctx.fillStyle = '#1b5e20'; ctx.fillRect(200,0,80,180);

// Buttons
function showDashboard() { document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' }); }
function showDemo() { alert("Demo activated! Showing simulated Punjab farm data."); }

// Community
function postCommunity() {
    const input = document.getElementById('communityInput');
    const text = input.value.trim();
    if (text !== "") {
        const li = document.createElement('li');
        li.textContent = text;
        document.getElementById('communityPosts').appendChild(li);
        input.value = "";
    }
}
