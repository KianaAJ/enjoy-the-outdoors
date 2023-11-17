"use strict"

window.onload = function (_event) {
    const LocationSelect = document.getElementById("location")
    const ParkSelect = document.getElementById("parkType")

    ParkSelect.onchange = displayParkTypeCard
    populateLocationSelect(locations, LocationSelect)

    populateParkSelect(parkTypes, ParkSelect)
    LocationSelect.onchange = displayParkCard

}

function populateParkSelect (parkTypes, selectElement) {
    let html = ""
    for (let index = 0; index < parkTypes.length; index += 1) {
        const chosenPark = parkTypes[index]
        html += `<option value="${chosenPark}">${chosenPark}</option>`
    }
    
    selectElement.innerHTML = html
}

function populateLocationSelect (locations, selectElement) {
    let html = ""
    for (let index = 0; index < locations.length; index += 1) {
        const chosenLocation = locations[index]
        html += `<option value="${chosenLocation}">${chosenLocation}</option>`
    }

    selectElement.innerHTML = html
}

function displayParkTypeCard (event) {
    const chosenParkType = event.target.value // ex: "historic"
    let html =""
    for (const currentPark of nationalParks) {
        if(currentPark.LocationName.includes(chosenParkType)) {
            console.log("matching type:", chosenParkType)
            html += `
            <div class="card text-white bg-success mb-3">
            <div class="card-body">
                <img src="" class="card-img-top">
                <h4 class="card-header">${currentPark.LocationName}</h4>
                <p class="card-text">
                <li>Address: ${currentPark.Address}
                <li>City: ${currentPark.City}
                <li>State: ${currentPark.State}
                 <li>Zip Code: ${currentPark.ZipCode} 
                 <li>Phone Number: ${currentPark.Phone}
                 <li>Fax Number: ${currentPark.Fax}
                 <li>Coordinates: ${currentPark.Location.coordinates}
                 <li>Type: ${currentPark.Location.type}
                 <li><a href="${currentPark.Visit}">Visit Park</a>
                </p>
                </div>
            </div> 
            `
        }
    }
    const resultsElement = document.getElementById("matching-type")
    resultsElement.innerHTML = html
}

function displayParkCard (event) {
    const chosenLocation = event.target.value
    let html =""
    for (const currentPark of nationalParks) {
        if (currentPark.State === chosenLocation) {
            console.log("matching state:", currentPark)
            html += `
            <div class="card text-white bg-success mb-3">
            <div class="card-body">
                <img src="" class="card-img-top" id="mtnImage">
                <h4 class="card-header">${currentPark.LocationName}</h4>
                <p class="card-text">
                <li>Address: ${currentPark.Address}
                <li>City: ${currentPark.City}
                <li>State: ${currentPark.State}
                 <li>Zip Code: ${currentPark.ZipCode} 
                 <li>Phone Number: ${currentPark.Phone}
                 <li>Fax Number: ${currentPark.Fax}
                 <li>Coordinates: ${currentPark.Location.coordinates}
                 <li>Type: ${currentPark.Location.type}
                 <li><a href="${currentPark.Visit}">Visit Park</a>
                </p>
                </div>
            </div> 
            `
        }
    }
    const resultsElement = document.getElementById("matching-parks")
    resultsElement.innerHTML = html
}

