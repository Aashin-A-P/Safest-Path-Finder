var travelOptions = {
    vehicle: "",
    start: [],
    end: [],
    algorithm: "",
    process: false
};



document.querySelectorAll(".select-location-button").forEach(element => {  
    element.addEventListener("click", function(e){
        document.querySelector(".planning-route-panel").classList.toggle("active"); //slide
        map.on('click', async function(ev){

            document.querySelector(".planning-route-panel").classList.toggle("active"); //slide
            map.off('click');

            const clickedLatLng = map.mouseEventToLatLng(ev.originalEvent);
            const clickedLat = clickedLatLng.lat;
            const clickedLon = clickedLatLng.lng;

            // Define your markers
            const markers = [
                { name: "MIT Main Gate", latlng: L.latLng(12.94631741, 80.13868153) },
                { name: "MIT Back Gate", latlng: L.latLng(12.95158985, 80.14132619) },
                { name: "MIT Front Parking", latlng: L.latLng(12.94644288, 80.13900071) },
                { name: "Mega Mess", latlng: L.latLng(12.95135459, 80.1414603) },
                { name: "Old Mess and NRI Hostel", latlng: L.latLng(12.95126049, 80.14133155) },
                { name: "Bhavani Hostel", latlng: L.latLng(12.95111672, 80.14145494) },
                { name: "Thamirabharani Hostel", latlng: L.latLng(12.95071939, 80.14107943) },
                { name: "Amaravathi Hostel", latlng: L.latLng(12.9507952, 80.14147639) },
                { name: "Birla Hostel", latlng: L.latLng(12.95034559, 80.14130741) },
                { name: "Ponni Hostel", latlng: L.latLng(12.95081611, 80.14217108) },
                { name: "Cauvery Hostel", latlng: L.latLng(12.9503848, 80.1426512) },
                { name: "Hostel Office", latlng: L.latLng(12.95036389, 80.14147103) },
                { name: "Rajam Hostel", latlng: L.latLng(12.95019921, 80.14139593) },
                { name: "Alumni House", latlng: L.latLng(12.94980711, 80.14142543) },
                { name: "Hangar 1", latlng: L.latLng(12.94996918, 80.14114648) },
                { name: "Central Workshop", latlng: L.latLng(12.94965289, 80.14076024) },
                { name: "Hangar 2", latlng: L.latLng(12.94917054, 80.14052153) },
                { name: "Open Air Theatre", latlng: L.latLng(12.94902416, 80.14172316) },
                { name: "Rajam Hall", latlng: L.latLng(12.94865297, 80.14137983) },
                { name: "Library", latlng: L.latLng(12.94896142, 80.14121354) },
                { name: "DASH", latlng: L.latLng(12.94932215, 80.14107943) },
                { name: "Canteen", latlng: L.latLng(12.94895619, 80.14011919) },
                { name: "DCOE Office", latlng: L.latLng(12.94899279, 80.13967395) },
                { name: "AU-KBC Reesearch Centre", latlng: L.latLng(12.94795241, 80.14105797) },
                { name: "Golden Jubilee Hall", latlng: L.latLng(12.94771192, 80.14084876) },
                { name: "Rubber and Plastics Technology", latlng: L.latLng(12.94757077, 80.14010847) },
                { name: "Information Technology", latlng: L.latLng(12.94806743, 80.13996899) },
                { name: "Automobile Department", latlng: L.latLng(12.94799424, 80.14039278) },
                { name: "Golden Jubilee Park", latlng: L.latLng(12.94777989, 80.13972759) },
                { name: "IE Block 2", latlng: L.latLng(12.94756031, 80.13888538) },
                { name: "IE Block 1", latlng: L.latLng(12.94741393, 80.13942182) },
                { name: "ECE Block", latlng: L.latLng(12.94843339, 80.1401943) },
                { name: "LHC", latlng: L.latLng(12.94826087, 80.13974369) },
                { name: "RLHC", latlng: L.latLng(12.94840725, 80.13988853) },
                { name: "PT dept", latlng: L.latLng(12.94987109, 80.14030695) },
                { name: "Aero dept", latlng: L.latLng(12.94868434, 80.14085412) },
                { name: "Admin Block", latlng: L.latLng(12.94784661, 80.13955593) }
            ];
            

            // Find the nearest marker
            let nearestMarker = null;
            let minDistance = Infinity;

            markers.forEach(marker => {
                const distance = clickedLatLng.distanceTo(marker.latlng);

                if (distance < minDistance) {
                    minDistance = distance;
                    nearestMarker = marker;
                }
            });

            if (nearestMarker) {
                // Use the nearest marker's position
                const nearestLat = nearestMarker.latlng.lat;
                const nearestLon = nearestMarker.latlng.lng;

                if (e.target.id == "start-location"){
                    locationInputComplete("start", travelOptions, nearestLat, nearestLon, true);
                } else {
                    locationInputComplete("end", travelOptions, nearestLat, nearestLon, true);
                }
            }
        });
    });
});



document.getElementById("calculate-route-button").addEventListener("click", async function(){
    cleanError();
    var valid = true;
    var errorMessage = "";

    travelOptions.algorithm = document.getElementById("select-1658324317245").value;
    travelOptions.process = document.getElementById("show-process-checkbox").checked;    

    try {
        travelOptions.vehicle = document.querySelector(".route-btn-selected").id;
    } catch (error) {
        vehiclePanelError();
        errorMessage += "❌ Please, select the vehicle.";
        console.log(error);
        valid = false;
    }   
    
    try {
        if (travelOptions.start.length == 0){
            const n = 1;
            n.replace(2,""); //You can't replace a int (force to catch)
        }
    } catch (error) {
        startPositionError();
        errorMessage += "<br>❌ Please, select your initial position from the map.";
        console.log(error);
        valid = false;
    }

    try {
        if (travelOptions.end.length == 0){
            const n = 1;
            n.replace(2,""); //You can't replace a int (force to catch)
        }
    } catch (error) {
        destinationPositionError();
        errorMessage += "<br>❌ Please, select your destination point from the map.";
        console.log(error);
        valid = false;
    }


    if (valid){
        await sleep(200);
        document.querySelector(".planning-route-panel").classList.toggle("active");
        document.querySelector(".other-buttons-panel").classList.toggle("disabled");
        buildRoute();
    }
});


function formError(errorMessage){
    document.getElementById("form-error-message").innerHTML = errorMessage;
    document.getElementById("form-error-message").style.visibility = "inherit";
}

function cleanError(){
    document.getElementById("form-error-message").style.visibility = "hidden";
}

async function locationInputComplete(s, travelOptions, lat, lon, booleanMarker, overrideName){
    
    if (travelOptions[s][2] != undefined)
        map.removeLayer(travelOptions[s][2]);

    const marker = booleanMarker? L.marker([lat,lon]).addTo(map) : undefined;

    travelOptions[s] = [lat, lon, marker];
    console.log(overrideName);
    if (overrideName != undefined)
        document.querySelector(`#${s}-location p`).innerHTML = overrideName
    else
        document.querySelector(`#${s}-location p`).innerHTML = "✅​ ​" + await getLatLonName(lat, lon);
    if (document.querySelector(`#${s}-location p`).innerHTML.length > 30)
        document.querySelector(`#${s}-location p`).classList.add("scroll");
}


async function getLatLonName(lat, lon){
    const req=`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    console.log(req);
    let result;
    await fetch(req)
    .then(response => response.json())
    .then(data => {
        result=data;
    })
    .catch(error => {
        console.log(error);
    });
    return `${result.address.road}, ${result.address.house_number}`.replace(", undefined", "").replace("undefined", result.address.county).replace("undefined", result.address.state);
}


async function vehiclePanelError(){
    document.querySelector(".route-buttons").style.backgroundColor = "#ff8c8c69";
    document.querySelector(".route-buttons").style.color = "red";
    await sleep(1000);
    document.querySelector(".route-buttons").style.backgroundColor = "white";
    document.querySelector(".route-buttons").style.color = "#707070";
}

async function startPositionError(){
    document.querySelector("#start-location").style.backgroundColor = "#ff8c8c69";
    document.querySelector(".location-input").style.color = "red";
    await sleep(1000);
    document.querySelector("#start-location").style.backgroundColor = "white";
    document.querySelector(".location-input").style.color = "#707070";
}

async function destinationPositionError(){
    document.querySelector("#end-location").style.backgroundColor = "#ff8c8c69";
    document.querySelectorAll(".location-input")[1].style.color = "red";
    await sleep(1000);
    document.querySelector("#end-location").style.backgroundColor = "white";
    document.querySelectorAll(".location-input")[1].style.color = "#707070";
}