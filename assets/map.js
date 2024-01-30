const map = L.map("map").setView([52.51411, 13.46554], 10);
const listsContainer = document.getElementById("sidebar");
const markers = {
  Germany: [
    {
      name: "Nakedsteel Berlin",
      location: [52.51411, 13.46554],
      address: "Mainzer Str. 10, 10247 Berlin",
      url: "https://www.nakedsteel.de/",
    },
    {
      name: "Trust Bodymodification",
      location: [51.06886, 13.74809],
      address: "Bautzner Str. 4, 01099 Dresden",
      url: "https://www.trust-dresden.de/",
    },
    {
      name: "Titanen Piercing & Tattoo",
      location: [52.49966, 13.35092],
      address: "Motzstraße 12, 10777 Berlin",
      url: "https://titanen-piercing.de/",
    },
    {
      name: "Alternative Aesthetic",
      location: [51.32036, 12.32464],
      address: "Industriestraße 61, 04229 Leipzig",
      url: "https://alternative-aesthetics.de/",
    },
    {
      name: "Hidden Treasures",
      location: [49.00552, 8.39414],
      address: "Beiertheimer Allee 78, 76137 Karlsruhe",
      url: "https://hidden-treasure-khe.de/",
    },
  ],
  Belgium: [
    {
      name: "Witchblades Piercing",
      location: [51.05578, 3.72104],
      address: "Burgstraat 41, 9000 Gent",
      url: "https://www.instagram.com/witchblades.piercing/",
    },
  ],
  Denmark: [
    {
      name: "Copenhagen Body Extremes",
      location: [55.67912, 12.57819],
      address: "Larsbjørnsstræde 15, KLD, 1454 København",
      url: "https://bodyextremes.com/",
    },
  ],
  Iceland: [
    {
      name: "Íslenzka Húðflúrstofan",
      location: [64.14696, -21.93817],
      address: "Ingólfsstræti 3, 101 Reykjavík",
      url: "https://www.icelandtattoo.com/",
    },
  ],
  // UK
  UK: [
    {
      name: "Holier Than Thou",
      location: [53.48164, -2.23555],
      address: "97 Oldham St, Manchester M4 1LW",
      url: "https://www.holier-than-thou.co.uk/",
    },
    {
      name: "Ronin Body Arts",
      location: [52.05716, 1.15658],
      address: "5 The, Thoroughfare, Ipswich IP1 1BX",
      url: "https://www.roninbodyarts.co.uk/",
    },
    {
      name: "Metal Urgey",
      location: [56.46222, -2.9707],
      address: "40 Dock St, Dundee DD1 3DR",
      url: "https://metalurgey.co.uk/",
    },
  ],
  // USA
  USA: [
    {
      name: "Supernatural Body Piercing",
      location: [39.05216, -94.59178],
      address: "1624B Westport Rd, Kansas City, MO 64111",
      url: "https://supernaturalbodypiercing.com/",
    },
    {
      name: "Sacred Siren Tattoo",
      location: [45.00596, -93.24757],
      address: "1920 Central Ave NE, Minneapolis, MN 55418",
      url: "https://www.sacredsirenparlor.com/",
    },
    {
      name: "Black Label Tattoo and Piercing",
      location: [46.78252, -92.19778],
      address: "217 N 59th Ave W, Duluth, MN 55807",
      url: "https://blacklabelduluth.com/",
    },
    {
      name: "Above and Beyond Body Arts",
      location: [34.41731, -119.70196],
      address: "407 State St FL#2, Santa Barbara, CA 93101",
      url: "https://www.aboveandbeyondbodyarts.com/",
    },
    {
      name: "Alchemist Tattoo",
      location: [46.81119, -100.7819],
      address: "523 E Broadway Ave, Bismarck, ND 58501",
      url: "https://www.alchemisttattoo.com/",
    },
    {
      name: "Punctured Piercing and Tattoo",
      location: [40.86949, -111.88154],
      address: "2459 S Main St, Bountiful, UT 84010",
      url: "https://puncturedpiercing.net/",
    },
    {
      name: "Nomad Bodypiercing",
      location: [37.97313, -122.5265],
      address: "22056 4th St, San Rafael, CA 94901",
      url: "https://nomadbodypiercing.com/",
    },
    {
      name: "Honeycomb Jewelry and Piercing",
      location: [32.22299, -110.97195],
      address: "421 N 4th Ave, Tucson, AZ 85705",
      url: "https://www.honeycomb<wbr>jewelryandpiercing.com/",
    },
    {
      name: "Boston Tattoo Company",
      location: [42.39672, -71.12258],
      address: "244 Newbury Street, Boston, MA 02116",
      url: "https://www.bostontattoo.com/",
    },
    {
      name: "Laughing Buddha Tattoo Seattle",
      location: [47.61372, -122.31467],
      address: "1121 E Union St, Seattle, WA 98122",
      url: "https://www.laughingbuddhatattoo.com/",
    },
    {
      name: "Infinite Body Piercing",
      location: [39.94164, -75.15048],
      address: "626 S 4th St, Philadelphia, PA 19147",
      url: "https://infinitebody.com/",
    },
    {
      name: "Infinite Body Piercing",
      location: [39.29851, -76.61898],
      address: "807 N Howard St, Baltimore, MD 21201",
      url: "https://infinitebody.com/pages/baltimore",
    },
    {
      name: "Cold Steel America",
      location: [37.7696, -122.45013],
      address: "1783 Haight St, San Francisco, CA 94117",
      url: "https://www.coldsteelpiercing.com/",
    },
    {
      name: "Hillsborough St Tattoo and Body Piercing",
      location: [35.78569, -78.66594],
      address: "2418 Hillsborough St, Raleigh, NC 27607",
      url: "https://www.hillsboroughsttattoo.com/",
    },
    {
      name: "Tooth and Nail Tattoo",
      location: [41.57933, -90.5742],
      address: "4811 N Brady St, Davenport, IA 52807",
      url: "https://toothandnailtattooandpiercing.com/",
    },
    {
      name: "Better Days Body Art",
      location: [31.11599, -97.72875],
      address: "728 W Veterans Memorial Blvd, Killeen, TX 76541",
      url: "https://www.betterdaysbodyart.com/",
    },
    {
      name: "Adorn Body Art",
      location: [45.51164, -122.61329],
      address: "3941 SE Hawthorne Blvd, Portland, OR 97214",
      url: "https://adornbodyart.com/",
    },
    {
      name: "Lucid Body Piercing",
      location: [41.11701, -81.53543],
      address: "1376 N Portage Path unit c, Akron. OH 44313",
      url: "https://www.lucidbodypiercing.com/",
    },
    {
      name: "Shorty's Fine Jewelry and Piercing",
      location: [26.67751, -80.05416],
      address: "931 1/2 Belvedere Rd, West Palm Beach, FL 33405",
      url: "http://www.theshorty.com/",
    },
  ],
};


// Leaflet Standardkarte
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Icon Definition
var piercIcon = L.icon({
  iconUrl: "assets/piercingPinW.png",
  iconSize: [70, 70],
});

// Marker-Definitionen

const markerInstances = [];
const allMarkers = [];
let globalIndex = 0; // Globale Variable für den Index
for (const country in markers) {
  markers[country].forEach((marker) => {
    const popUpContent = `<h3>${marker.name}</h3><p>${marker.address}</p><a href="${marker.url}" target="_blank">${marker.url}</a>`;
    const markerInstance = L.marker(marker.location, {icon: piercIcon},)
      .addTo(map)
      .bindPopup(popUpContent);
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
    const listItemButton = document.createElement("button");
    const pin = `<img alt="Map Pin" fetchpriority="high" width="10" height="10" decoding="async" data-nimg="1" src="./assets/map-pin.svg"></img>`;
    listItemButton.innerHTML = pin + marker.name;
    listItem.onclick = () => {
      const index = allMarkers.indexOf(marker); // Verwende die allMarkers-Array, um den Index zu finden
      jumpToMarker(index);
    };
    countryList.appendChild(listItem);
    listItem.appendChild(listItemButton);
  });
  listsContainer.appendChild(countryList);
}

// Funktion zum Springen zu einem Marker
function jumpToMarker(index) {
  const markerInstance = markerInstances[index];
  map.panTo(markerInstance.getLatLng());
  markerInstance.openPopup();
}

const menuControl = document.querySelector(".menu-control");
const hamburger = document.querySelector(".hamburger");

menuControl.addEventListener("change", function () {
  if (this.checked) {
    // Füge hier deine gewünschten Aktionen hinzu, wenn die Checkbox ausgewählt ist
    hamburger.classList.add("active");
  } else {
    // Füge hier deine gewünschten Aktionen hinzu, wenn die Checkbox nicht ausgewählt ist
    hamburger.classList.remove("active");
  }
});
