"use strict"

window.onload = function (_event) {

    const mountainSelect = document.getElementById("mountainlist")
    mountainSelect.onchange = renderMountainCard
    
    populateMountain(mountains, mountainSelect)
}


function populateMountain (mountains, selectElement) {
    let html = ""
    for (let index = 0; index < mountains.length; index += 1) {
        const currentMountain = mountains[index]
        html += `<option value="${currentMountain.name}">${currentMountain.name}</option>`
    }

    selectElement.innerHTML = html

}

function renderMountainCard (event) {
    const selectedMountainName = event.target.value
    console.log(selectedMountainName)
    let html = ""
    for (let index = 0; index < mountains.length; index += 1) {
        const mountain = mountains[index];
        
        if (mountain.name === selectedMountainName) {
            html += `
                <div class="card text-white bg-success mb-3">
                    <div class="card-body">
                        <img src="/data/images/${mountain.img}" class="card-img-top" id="mtnImage">
                        <h4 class="card-header">${mountain.name}</h4>
                        <p class="card-text">${mountain.desc}
                        <ul><li>The mountain effort is: ${mountain.effort}<li>The elevation of this mountain is ${mountain.elevation} feet. 
                        <li>The mountain coordinates are longitude: ${mountain.coords.lng}, latitude: ${mountain.coords.lat}.</p>
                        </div>
                </div>
                `
            }
        }
    const selectElement = document.getElementById("selected-mountain")
    selectElement.innerHTML = html
}

// function displayImage () {
//     let dynamicImage = document.createElement('img');
//     dynamicImage.src = URL;

//     let img = document.getElementById('img');
//     let mtnImage = new Image();
//     mtnImage.src = mountains.img;
//     mtnImage.setAttribute('width', '300px');
//     mtnImage.setAttribute('height', '300px');
//     img.appendChild(mtnImage);
// }

//     for (let index = 0; index < mountains.length; index += 1) {
//         const mountain = mountains[index];
        
//         if (mountain.id === selectedMountainId) {
//     }
//     const resultDiv = document.getElementById("selected-activity")
//     resultDiv.innerHTML = html
// }


// counter + findAll + reduce
// // function populateActivities(event) {
//     const selectedCategory = event.target.value
//     console.log(selectedCategory)
//     //what do we do with this categort selected by user?

//     let html = ""
//     for (let index = 0; index < activities.length; index += 1) {
//         const activity = activities[index]
//         if (activity.category === selectedCategory) {
//             html += `<option value="${activity.id}">${activity.name}</option>`
//         }
//     }
