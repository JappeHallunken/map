const map = L.map("map").setView([46.437857, -51.359375], 4);
let locateMe = L.control.locate({initialZoomLevel: 10, initialZoomLevel: 6,}).addTo(map);
const listsContainer = document.getElementById("sidebar");
const markers = [
  {
    "name": "Nakedsteel Berlin",
    "location": [
      52.51411,
      13.46554
    ],
    "country": "Germany",
    "postalCode": "10247",
    "city": "Berlin",
    "address": "Mainzer Str. 10",
    "url": "https://www.nakedsteel.de/"
  },
  {
    "name": "Trust Bodymodification",
    "location": [
      51.06886,
      13.74809
    ],
    "country": "Germany",
    "postalCode": "01099",
    "city": "Dresden",
    "address": "Bautzner Str. 4",
    "url": "https://www.trust-dresden.de/"
  },
  {
    "name": "Titanen Piercing & Tattoo",
    "location": [
      52.49966,
      13.35092
    ],
    "country": "Germany",
    "postalCode": "10777",
    "city": " Berlin",
    "address": "Motzstraße 12",
    "url": "https://titanen-piercing.de/"
  },
  {
    "name": "Alternative Aesthetic",
    "location": [
      51.32036,
      12.32464
    ],
    "country": "Germany",
    "postalCode": "04229",
    "city": "Leipzig",
    "address": "Industriestraße 61",
    "url": "https://alternative-aesthetics.de/"
  },
  {
    "name": "Hidden Treasures",
    "location": [
      49.00552,
      8.39414
    ],
    "country": "Germany",
    "postalCode": "76137",
    "city": "Karlsruhe",
    "address": "Beiertheimer Allee 78",
    "url": "https://hidden-treasure-khe.de/"
  },
  {
    "name": "Witchblades Piercing",
    "location": [
      51.05578,
      3.72104
    ],
    "country": "Belgium",
    "postalCode": "9000",
    "city": "Gent",
    "address": "Burgstraat 41",
    "url": "https://www.instagram.com/witchblades.piercing/"
  },
  {
    "name": "Copenhagen Body Extremes",
    "location": [
      55.67912,
      12.57819
    ],
    "country": "Denmark",
    "postalCode": "K 1454",
    "city": "København",
    "address": "Larsbjørnsstræde 15, KLD",
    "url": "https://bodyextremes.com/"
  },
  {
    "name": "Íslenzka Húðflúrstofan",
    "location": [
      64.14696,
      -21.93817
    ],
    "country": "Iceland",
    "postalCode": "101",
    "city": "Reykjavík",
    "address": "Ingólfsstræti 3",
    "url": "https://www.icelandtattoo.com/"
  },
  {
    "name": "Holier Than Thou",
    "location": [
      53.48164,
      -2.23555
    ],
    "country": "UK",
    "postalCode": "M4 1LW",
    "city": "Manchester",
    "address": "97 Oldham St",
    "url": "https://www.holier-than-thou.co.uk/"
  },
  {
    "name": "Ronin Body Arts",
    "location": [
      52.05716,
      1.15658
    ],
    "country": "UK",
    "postalCode": "IP1 1BX",
    "city": "Ipswich",
    "address": "5 The, Thoroughfare",
    "url": "https://www.roninbodyarts.co.uk/"
  },
  {
    "name": "Metal Urgey",
    "location": [
      56.46222,
      -2.9707
    ],
    "country": "UK",
    "postalCode": "DD1 3DR",
    "city": "Dundee",
    "address": "40 Dock St",
    "url": "https://metalurgey.co.uk/"
  },
  {
    "name": "Supernatural Body Piercing",
    "location": [
      39.05216,
      -94.59178
    ],
    "country": "USA",
    "postalCode": "Missouri 164111",
    "city": "Kansas City",
    "address": "1624B Westport Rd",
    "url": "https://supernaturalbodypiercing.com/",
  },
  {
    "name": "Sacred Siren Tattoo",
    "location": [
      45.00596,
      -93.24757
    ],
    "country": "USA",
    "postalCode": "Minneapolis 51920",
    "city": "Minneapolis",
    "address": "1920 Central Ave NE",
    "url": "https://www.sacredsirenparlor.com/",
  },
  {
    "name": "Black Label Tattoo and Piercing",
    "location": [
      46.78252,
      -92.19778
    ],
    "country": "USA",
    "postalCode": "Minneapolis 55807",
    "city": "Duluth",
    "address": "217 N 59th Ave W",
    "url": "https://blacklabelduluth.com/"
  },
  {
    "name": "Above and Beyond Body Arts",
    "location": [
      34.41731,
      -119.70196
    ],
    "country": "USA",
    "postalCode": "California 93101",
    "city": "Santa Barbara",
    "address": "407 State St Floor #2",
    "url": "https://www.aboveandbeyondbodyarts.com/",
  },
  {
    "name": "Alchemist Tattoo",
    "location": [
      46.81119,
      -100.7819
    ],
    "country": "USA",
    "postalCode": "North Dakota 58501",
    "city": "Bismarck",
    "address": "523 E Broadway Ave",
    "url": "https://www.alchemisttattoo.com/"
  },
  {
    "name": "Punctured Piercing and Tattoo",
    "location": [
      40.86949,
      -111.88154
    ],
    "country": "USA",
    "postalCode": "Utah 84010",
    "city": "Bountiful",
    "address": "2459 S Main St",
    "url": "https://puncturedpiercing.net/",
  },
  {
    "name": "Nomad Bodypiercing",
    "location": [
      37.97313,
      -122.5265
    ],
    "country": "USA",
    "postalCode": "California 94901",
    "city": "San Rafael",
    "address": "2056 4th St",
    "url": "https://nomadbodypiercing.com/",
  },
  {
    "name": "Honeycomb Jewelry and Piercing",
    "location": [
      32.22299,
      -110.97195
    ],
    "country": "USA",
    "postalCode": "Arizona 85705",
    "city": "Tucson",
    "address": "421 N 4th Ave",
    "url": "https://www.honeycombjewelryandpiercing.com/",
  },
  {
    "name": "Boston Tattoo Company",
    "location": [
      42.39672,
      -71.12258
    ],
    "country": "USA",
    "postalCode": "Massachusetts 02216",
    "city": "Boston",
    "address": "244 Newbury Street",
    "url": "https://www.bostontattoo.com/",
  },
  {
    "name": "Laughing Buddha Tattoo Seattle",
    "location": [
      47.61372,
      -122.31467
    ],
    "country": "USA",
    "postalCode": "Washington 98122",
    "city": "Seattle",
    "address": "1121 E Union St",
    "url": "https://www.laughingbuddhatattoo.com/",
  },
  {
    "name": "Infinite Body Piercing",
    "location": [
      39.94164,
      -75.15048
    ],
    "country": "USA",
    "postalCode": "Pennsylvania 19147",
    "city": "Philadelphia",
    "address": "626 S 4th St",
    "url": "https://infinitebody.com/",
  },
  {
    "name": "Cold Steel America",
    "location": [
      37.7696,
      -122.45013
    ],
    "country": "USA",
    "postalCode": "California 94117",
    "city": "San Francisco",
    "address": "1783 Haight St",
    "url": "https://www.coldsteelpiercing.com/",
  },
  {
    "name": "Hillsborough St Tattoo",
    "location": [
      35.78569,
      -78.66594
    ],
    "country": "USA",
    "postalCode": "North Carolina 27607",
    "city": "Raleigh",
    "address": "2418 Hillsborough St",
    "url": "https://www.hillsboroughsttattoo.com/",
  },
  {
    "name": "Tooth and Nail Tattoo",
    "location": [
      41.57933,
      -90.5742
    ],
    "country": "USA",
    "postalCode": "Iowa 52806",
    "city": "Davenport",
    "address": "4811 N Brady St",
    "url": "https://toothandnailtattooandpiercing.com/",
  },
  {
    "name": "Better Days Body Art",
    "location": [
      31.11599,
      -97.72875
    ],
    "country": "USA",
    "postalCode": "Texas 76541",
    "city": "Killeen",
    "address": "728 W Veterans Memorial Blvd",
    "url": "https://www.betterdaysbodyart.com/",
  },
  {
    "name": "Adorn Body Art",
    "location": [
      45.51164,
      -122.61329
    ],
    "country": "USA",
    "postalCode": "Oregon 97214",
    "city": "Portland",
    "address": "3941 SE Hawthorne Blvd",
    "url": "https://adornbodyart.com/",
  },
  {
    "name": "Lucid Body Piercing",
    "location": [
      41.11701,
      -81.53543
    ],
    "country": "USA",
    "postalCode": "Ohio 44313",
    "city": "Akron",
    "address": "1376 N Portage Path, unit c",
    "url": "https://www.lucidbodypiercing.com/",
  },
  {
    "name": "Shorty's Fine Jewelry and Piercing",
    "location": [
      26.67751,
      -80.05416
    ],
    "country": "USA",
    "postalCode": "Florida 33405",
    "city": "West Palm Beach",
    "address": "931 1/2 Belvedere Rd",
    "url": "http://www.theshorty.com/",
  }
]

locateMe.start();
// Leaflet Standardkarte
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

/* map.addControl( new L.Control.ListMarkers({layer: markersLayer}) ); */
//markersLayer is a L.LayerGroup contains listing markers

// Icon Definition
let piercIcon = L.icon({
  iconUrl: "../assets/piercingPinW.png",
  iconSize: [70, 70],
});

let itemIcon = L.icon({
    iconUrl: "../assets/map-pin.png",
    iconSize: [20, 20],
  });

// Marker-Definitionen

let markersLayer = new L.LayerGroup();	//layer contain searched elements
map.addLayer(markersLayer);

markers.forEach((marker) => {
  
  L.marker(L.latLng(marker.location), { title: `<span class="countryList">${marker.country}&nbsp;</span> - &nbsp;${marker.name}`, icon: piercIcon} )
  .bindPopup(`<span class="marker-title">${marker.name}</span><br>${marker.address}<br>${marker.postalCode} ${marker.city}<br>${marker.country}<br><a href="${marker.url}" target="_blank">Website</a> `)
  .addTo(markersLayer);
});


let list = new L.Control.ListMarkers({layer: markersLayer}).addTo(map);
