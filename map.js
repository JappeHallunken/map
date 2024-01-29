const map = L.map("map").setView([52.51411, 13.46554], 10);
const listsContainer = document.getElementById("sidebar");

// Leaflet Standardkarte
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Marker-Definitionen

const markers = {
  Germany: [
    {
      name: "NakedSteel Piercing & bodymodification Berlin",
      location: [52.51411, 13.46554],
    },
    {
      name: "Trust Bodymodification Dresden",
      location: [51.06886, 13.74809],
    },
    {
      name: "Titanen Piercing & Tattoo berlin",
      location: [52.49966, 13.35092],
    },
    {
      name: "Alternative Aesthetic Leipzig",
      location: [51.32036, 12.32464],
    },
    { name: "Hidden treasures Karlsruhe", location: [49.00552, 8.39414] },
  ],
  Belgium: [
    // EUROPE
    { name: "Witchblades Piercing Gent", location: [51.05578, 3.72104] },
  ],
  Denmark: [
    {
      name: "Copenhagen Body Extremes København",
      location: [55.67912, 12.57819],
    },
  ],
  Iceland: [
    {
      name: "Íslenzka Húðflúrstofan Reykjavík",
      location: [64.14696, -21.93817],
    },
  ],
  // UK
  UK: [
    {
      name: "Holier Than Thou Manchester",
      location: [53.48164, -2.23555],
    },
    { name: "Ronin Body Arts Ipswich", location: [52.05716, 1.15658] },
    { name: "Metal Urgey Dundee", location: [56.46222, -2.9707] },
  ],
  // USA
  USA: [
    {
      name: "Supernatural Body Piercing Kansas City",
      location: [39.05216, -94.59178],
    },
    {
      name: "Sacred Siren Tattoo Minneapolis",
      location: [45.00596, -93.24757],
    },
    {
      name: "Black Label Tattoo and Piercing Duluth",
      location: [46.78252, -92.19778],
    },
    {
      name: "Above and Beyond Bodyarts Santa Barbara",
      location: [34.41731, -119.70196],
    },
    {
      name: "Alchemist Tattoo Bismarck",
      location: [46.81119, -100.7819],
      country: "USA",
    },
    {
      name: "Punctured Piercing and Tattoo Bountiful",
      location: [40.86949, -111.88154],
    },
    {
      name: "Nomad Bodypiercing San Rafael",
      location: [37.97313, -122.5265],
    },
    {
      name: "Honeycomb Jewelry and Piercing Tucson",
      location: [32.22299, -110.97195],
    },
    {
      name: "Boston Tattoo Company Somerville",
      location: [42.39672, -71.12258],
    },
    {
      name: "Laughing Buddha Tattoo Seattle",
      location: [47.61372, -122.31467],
    },
    {
      name: "Infinite Body Piercing Philadelphia",
      location: [39.94164, -75.15048],
    },
    {
      name: "Infinite Body Piercing Baltimore",
      location: [39.29851, -76.61898],
    },
    {
      name: "Cold Steel America San Francisco",
      location: [37.7696, -122.45013],
    },
    {
      name: "Hillsborough St Tattoo and Body Piercing Raleigh",
      location: [35.78569, -78.66594],
    },
    {
      name: "Tooth and Nail Tattoo Davenport",
      location: [41.57933, -90.5742],
    },
    {
      name: "Better Days Body Art Killeen",
      location: [31.11599, -97.72875],
    },
    {
      name: "Adorn East Portland",
      location: [45.51164, -122.61329],
    },
    {
      name: "Lucid Body Piercing Akron",
      location: [41.11701, -81.53543],
    },
    {
      name: "Shorty's Fine Jewelry and Piercing West Palm Beach",
      location: [26.67751, -80.05416],
    },
  ],
};

const markerInstances = [];
const allMarkers = [];
let globalIndex = 0; // Globale Variable für den Index
for (const country in markers) {
  markers[country].forEach((marker) => {
    const markerInstance = L.marker(marker.location)
      .addTo(map)
      .bindPopup(marker.name);
    markerInstances.push(markerInstance);
    allMarkers.push(marker);
  });
}

// Generiere HTML-Listen für jedes Land

for (const country in markers) {
  const countryList = document.createElement("ul");
  countryList.innerHTML = `<h4><span class="country-name">${country}</span></h4>`;
  markers[country].forEach((marker) => {
    const listItem = document.createElement("li");
    listItem.textContent = marker.name;
    listItem.onclick = () => {
      const index = allMarkers.indexOf(marker); // Verwende die allMarkers-Array, um den Index zu finden
      jumpToMarker(index);
    };
    countryList.appendChild(listItem);
  });
  listsContainer.appendChild(countryList);
}

// Funktion zum Springen zu einem Marker
function jumpToMarker(index) {
  const markerInstance = markerInstances[index];
  map.panTo(markerInstance.getLatLng());
  markerInstance.openPopup();
}


const menuControl = document.querySelector('.menu-control');
const hamburger = document.querySelector('.hamburger');

menuControl.addEventListener('change', function() {
  if (this.checked) {
    // Füge hier deine gewünschten Aktionen hinzu, wenn die Checkbox ausgewählt ist
    hamburger.classList.add('active');
  } else {
    // Füge hier deine gewünschten Aktionen hinzu, wenn die Checkbox nicht ausgewählt ist
    hamburger.classList.remove('active');
  }
});