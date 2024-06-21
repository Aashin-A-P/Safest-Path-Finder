const markers = [
    { name: "MIT Main Gate", latlng: L.latLng([12.94631741, 80.13868153]) },
    { name: "MIT Back Gate", latlng: L.latLng([12.95158985, 80.14132619]) },
    { name: "MIT Front Parking", latlng: L.latLng([12.94644288, 80.13900071]) },
    { name: "Mega Mess", latlng: L.latLng([12.95135459, 80.1414603]) },
    { name: "Old Mess and NRI Hostel", latlng: L.latLng([12.95126049, 80.14133155]) },
    { name: "Bhavani Hostel", latlng: L.latLng([12.95111672, 80.14145494]) },
    { name: "Thamirabharani Hostel", latlng: L.latLng([12.95071939, 80.14107943]) },
    { name: "Amaravathi Hostel", latlng: L.latLng([12.9507952, 80.14147639]) },
    { name: "Birla Hostel", latlng: L.latLng([12.95034559, 80.14130741]) },
    { name: "Ponni Hostel", latlng: L.latLng([12.95081611, 80.14217108]) },
    { name: "Cauvery Hostel", latlng: L.latLng([12.9503848, 80.1426512]) },
    { name: "Hostel Office", latlng: L.latLng([12.95036389, 80.14147103]) },
    { name: "Rajam Hostel", latlng: L.latLng([12.95019921, 80.14139593]) },
    { name: "Alumni House", latlng: L.latLng([12.94980711, 80.14142543]) },
    { name: "Hangar 1", latlng: L.latLng([12.94996918, 80.14114648]) },
    { name: "Central Workshop", latlng: L.latLng([12.94965289, 80.14076024]) },
    { name: "Hangar 2", latlng: L.latLng([12.94917054, 80.14052153]) },
    { name: "Open Air Theatre", latlng: L.latLng([12.94902416, 80.14172316]) },
    { name: "Rajam Hall", latlng: L.latLng([12.94865297, 80.14137983]) },
    { name: "Library", latlng: L.latLng([12.94896142, 80.14121354]) },
    { name: "DASH", latlng: L.latLng([12.94932215, 80.14107943]) },
    { name: "Canteen", latlng: L.latLng([12.94895619, 80.14011919]) },
    { name: "DCOE Office", latlng: L.latLng([12.94899279, 80.13967395]) },
    { name: "AU-KBC Reesearch Centre", latlng: L.latLng([12.94795241, 80.14105797]) },
    { name: "Golden Jubilee Hall", latlng: L.latLng([12.94771192, 80.14084876]) },
    { name: "Rubber and Plastics Technology", latlng: L.latLng([12.94757077, 80.14010847]) },
    { name: "Information Technology", latlng: L.latLng([12.94806743, 80.13996899]) },
    { name: "Automobile Department", latlng: L.latLng([12.94799424, 80.14039278]) },
    { name: "Golden Jubilee Park", latlng: L.latLng([12.94777989, 80.13972759]) },
    { name: "IE Block 2", latlng: L.latLng([12.94756031, 80.13888538]) },
    { name: "IE Block 1", latlng: L.latLng([12.94741393, 80.13942182]) },
    { name: "ECE Block", latlng: L.latLng([12.94843339, 80.1401943]) },
    { name: "LHC", latlng: L.latLng([12.94826087, 80.13974369]) },
    { name: "RLHC", latlng: L.latLng([12.94840725, 80.13988853]) },
    { name: "PT dept", latlng: L.latLng([12.94987109, 80.14030695]) },
    { name: "Aero dept", latlng: L.latLng([12.94868434, 80.14085412]) },
    { name: "Admin Block", latlng: L.latLng([12.94784661, 80.13955593]) },
];

const paths = [
    ["MIT Main Gate", "MIT Back Gate"],
    ["MIT Back Gate", "MIT Front Parking"],
    ["MIT Front Parking", "Mega Mess"],
    ["Mega Mess", "Old Mess and NRI Hostel"],
    ["Old Mess and NRI Hostel", "Bhavani Hostel"],
    ["Bhavani Hostel", "Thamirabharani Hostel"],
    ["Thamirabharani Hostel", "Amaravathi Hostel"],
    ["Amaravathi Hostel", "Birla Hostel"],
    ["Birla Hostel", "Ponni Hostel"],
    ["Ponni Hostel", "Cauvery Hostel"],
    ["Cauvery Hostel", "Hostel Office"],
    ["Hostel Office", "Rajam Hostel"],
    ["Rajam Hostel", "Alumni House"],
    ["Alumni House", "Hangar 1"],
    ["Hangar 1", "Central Workshop"],
    ["Central Workshop", "Hangar 2"],
    ["Hangar 2", "Open Air Theatre"],
    ["Open Air Theatre", "Rajam Hall"],
    ["Rajam Hall", "Library"],
    ["Library", "DASH"],
    ["DASH", "Canteen"],
    ["Canteen", "DCOE Office"],
    ["DCOE Office", "AU-KBC Reesearch Centre"],
    ["AU-KBC Reesearch Centre", "Golden Jubilee Hall"],
    ["Golden Jubilee Hall", "Rubber and Plastics Technology"],
    ["Rubber and Plastics Technology", "Information Technology"],
    ["Information Technology", "Automobile Department"],
    ["Automobile Department", "Golden Jubilee Park"],
    ["Golden Jubilee Park", "IE Block 2"],
    ["IE Block 2", "IE Block 1"],
    ["IE Block 1", "ECE Block"],
    ["ECE Block", "LHC"],
    ["LHC", "RLHC"],
    ["RLHC", "PT dept"],
    ["PT dept", "Aero dept"],
    ["Aero dept", "Admin Block"],
];

const safetyScores = {
    "MIT Main Gate": { "MIT Back Gate": 8, "MIT Front Parking": 5 },
    "MIT Back Gate": { "MIT Front Parking": 6 },
    "MIT Front Parking": { "Mega Mess": 7 },
    "Mega Mess": { "Old Mess and NRI Hostel": 6 },
    "Old Mess and NRI Hostel": { "Bhavani Hostel": 8 },
    "Bhavani Hostel": { "Thamirabharani Hostel": 7 },
    "Thamirabharani Hostel": { "Amaravathi Hostel": 6 },
    "Amaravathi Hostel": { "Birla Hostel": 8 },
    "Birla Hostel": { "Ponni Hostel": 7 },
    "Ponni Hostel": { "Cauvery Hostel": 6 },
    "Cauvery Hostel": { "Hostel Office": 8 },
    "Hostel Office": { "Rajam Hostel": 7 },
    "Rajam Hostel": { "Alumni House": 6 },
    "Alumni House": { "Hangar 1": 8 },
    "Hangar 1": { "Central Workshop": 7 },
    "Central Workshop": { "Hangar 2": 6 },
    "Hangar 2": { "Open Air Theatre": 8 },
    "Open Air Theatre": { "Rajam Hall": 7 },
    "Rajam Hall": { "Library": 6 },
    "Library": { "DASH": 8 },
    "DASH": { "Canteen": 7 },
    "Canteen": { "DCOE Office": 6 },
    "DCOE Office": { "AU-KBC Reesearch Centre": 8 },
    "AU-KBC Reesearch Centre": { "Golden Jubilee Hall": 7 },
    "Golden Jubilee Hall": { "Rubber and Plastics Technology": 6 },
    "Rubber and Plastics Technology": { "Information Technology": 8 },
    "Information Technology": { "Automobile Department": 7 },
    "Automobile Department": { "Golden Jubilee Park": 6 },
    "Golden Jubilee Park": { "IE Block 2": 8 },
    "IE Block 2": { "IE Block 1": 7 },
    "IE Block 1": { "ECE Block": 6 },
    "ECE Block": { "LHC": 8 },
    "LHC": { "RLHC": 7 },
    "RLHC": { "PT dept": 6 },
    "PT dept": { "Aero dept": 8 },
    "Aero dept": { "Admin Block": 7 },
};
