const tilesProviders = {
    osm: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png", "Open Street Map"],
    googleStreets: ["http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", "Google Streets"],
    googleHybrid: ["http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}", "Google Hybrid"],
    googleSatelite: ["http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", "Google Satelite"],
    googleTerrain: ["http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}", "Google Terrain"],
    googleTrafic: ["https://{s}.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}", "Google Trafic"],
    terrain: ["http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", "Terrain"],
    darkMode: ["https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png", "Dark Mode"]
};

let map = L.map("map").setView([12.9501, 80.1380], 30);


var tile = L.tileLayer(tilesProviders.osm[0], {
    maxZoom: 18,
    subdomains:['mt0','mt1','mt2','mt3']
    //detectRetina: true blurry map on mobile devices
}).addTo(map);

let Mitmaingate = L.marker([12.94631741, 80.13868153]).addTo(map); 
  
    // Bind popup to the marker with a popup 
    Mitmaingate.bindPopup("MIT Main Gate").openPopup();

let MITbackgate = L.marker([12.95158985, 80.14132619]).addTo(map); 
  
    // Bind popup to the marker with a popup 
MITbackgate.bindPopup("MIT Back Gate").openPopup();

let MITFrontParking = L.marker([12.94644288, 80.13900071]).addTo(map);
MITFrontParking.bindPopup("MIT Front Parking").openPopup();

let Megamess = L.marker([12.95135459, 80.1414603]).addTo(map);
Megamess.bindPopup("Mega Mess").openPopup();

let Oldmess = L.marker([12.95126049, 80.14133155]).addTo(map);
Oldmess.bindPopup("Old Mess and NRI Hostel").openPopup();

let bhavani = L.marker([12.95111672, 80.14145494]).addTo(map);
bhavani.bindPopup("Bhavani Hostel").openPopup();

let thamirabharani = L.marker([12.95071939, 80.14107943]).addTo(map);
thamirabharani.bindPopup("Thamirabharani Hostel").openPopup();

let amaravati = L.marker([12.9507952, 80.14147639]).addTo(map);
amaravati.bindPopup("Amaravathi Hostel").openPopup();

let birla = L.marker([12.95034559, 80.14130741]).addTo(map);
birla.bindPopup("Birla Hostel").openPopup();

let ponni = L.marker([12.95081611, 80.14217108]).addTo(map);
ponni.bindPopup("Ponni Hostel").openPopup();

let cauvery = L.marker([12.9503848, 80.1426512]).addTo(map);
cauvery.bindPopup("Cauvery Hostel").openPopup();

let hosteloffice = L.marker([12.95036389, 80.14147103]).addTo(map);
hosteloffice.bindPopup("Hostel Office").openPopup();

let rajamhostel = L.marker([12.95019921, 80.14139593]).addTo(map);
rajamhostel.bindPopup("Rajam Hostel").openPopup();

let alumni = L.marker([12.94980711, 80.14142543]).addTo(map);
alumni.bindPopup("Alumni House").openPopup();

let hangar1 = L.marker([12.94996918, 80.14114648]).addTo(map);
hangar1.bindPopup("Hangar 1").openPopup();

let cw = L.marker([12.94965289, 80.14076024]).addTo(map);
cw.bindPopup("Central Workshop").openPopup();

let h2 = L.marker([12.94917054, 80.14052153]).addTo(map);
h2.bindPopup("Hangar 2").openPopup();

let oat = L.marker([12.94902416, 80.14172316]).addTo(map);
oat.bindPopup("Open Air Theatre").openPopup();

let rh = L.marker([12.94865297, 80.14137983]).addTo(map);
rh.bindPopup("Rajam Hall").openPopup();

let lib = L.marker([12.94896142, 80.14121354]).addTo(map);
lib.bindPopup("Library").openPopup();

let dash = L.marker([12.94932215, 80.14107943]).addTo(map);
dash.bindPopup("DASH").openPopup();

let can = L.marker([12.94895619, 80.14011919]).addTo(map);
can.bindPopup("Canteen").openPopup();

let dcoe = L.marker([12.94899279, 80.13967395]).addTo(map);
dcoe.bindPopup("DCOE Office").openPopup();

let aukbc = L.marker([12.94795241, 80.14105797]).addTo(map);
aukbc.bindPopup("AU-KBC Reesearch Centre").openPopup();

let gjh = L.marker([12.94771192, 80.14084876]).addTo(map);
gjh.bindPopup("Golden Jubilee Hall").openPopup();

let rpt = L.marker([12.94757077, 80.14010847]).addTo(map);
rpt.bindPopup("Rubber and Plastics Technology").openPopup();

let it = L.marker([12.94806743, 80.13996899]).addTo(map);
it.bindPopup("Information Technology").openPopup();

let auto = L.marker([12.94799424, 80.14039278]).addTo(map);
auto.bindPopup("Automobile Department").openPopup();

let gjp = L.marker([12.94777989, 80.13972759]).addTo(map);
gjp.bindPopup("Golden Jubilee Park").openPopup();

let ie2 = L.marker([12.94756031, 80.13888538]).addTo(map);
ie2.bindPopup("IE Block 2").openPopup();

let ie1 = L.marker([12.94741393, 80.13942182]).addTo(map);
ie1.bindPopup("IE Block 1").openPopup();

let ece = L.marker([12.94843339, 80.1401943]).addTo(map);
ece.bindPopup("ECE Block").openPopup();

let lhc = L.marker([12.94826087, 80.13974369]).addTo(map);
lhc.bindPopup("LHC").openPopup();

let rlhc = L.marker([12.94840725, 80.13988853]).addTo(map);
rlhc.bindPopup("RLHC").openPopup();

let pt = L.marker([12.94987109, 80.14030695]).addTo(map);
pt.bindPopup("PT dept").openPopup();

let aero = L.marker([12.94868434, 80.14085412]).addTo(map);
aero.bindPopup("Aero dept").openPopup();

let admin = L.marker([12.94784661, 80.13955593]).addTo(map);
admin.bindPopup("Admin Block").openPopup();














document.querySelector("div.leaflet-control-attribution a").innerHTML="<a target='_blank' href='https://github.com/Irbel69/go-open'>Marcel Gruñeiro</a>";


//show in html  
/*
Object.values(tilesProviders).forEach(element => {
    document.querySelector(".map-selection-container").innerHTML += `
    <div class='map-container'>
        <div map>
    <div>
    `;
});*/
function setHTMLmaps(){                     
    let i =0;
    for (const [key, value] of Object.entries(tilesProviders)) {
        document.querySelector(".map-selection-container").innerHTML += `
        <div class='map-own-container' id='map-own-container-${i}'>
            <div id='map-${i}' class='selection-map'>
                <img src='img/${key}.png'>
                <p>${value[1]}</p>
            </div>
        </div>
        `;
        console.log("got", document.getElementById(`map-own-container-${i}`));
        i++;
    }                                       
}

setHTMLmaps();

function setHTMLmapsTiles(){
    for (let i2=0; i2<Object.values(tilesProviders).length; i2++){
        console.log("Value", Object.values(tilesProviders)[i2][0]);
        document.getElementById(`map-own-container-${i2}`).addEventListener('click', function(){
            map.removeLayer(tile);
            console.log("Value", Object.values(tilesProviders)[i2][0]);
            tile = L.tileLayer(Object.values(tilesProviders)[i2][0], {
                maxZoom: 18,
                subdomains: ['mt0','mt1','mt2','mt3']
                //detectRetina: true blurry map on mobile devices
                }).addTo(map);
        });
    }   
}


setHTMLmapsTiles();