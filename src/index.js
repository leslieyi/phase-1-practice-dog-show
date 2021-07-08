document.addEventListener('DOMContentLoaded', () => {
    fetchDogData()
    // fetchAllId()


})


//1.On page load, render a list of already registered dogs in the table. You can fetch these dogs from http://localhost:3000/dogs (Links to an external site.).
//Fetch-------------------------------------------------
function fetchDogData() {
    fetch('http://localhost:3000/dogs')
        .then(response => response.json())
        .then(json => json.forEach(renderDogData))
}

// function fetchAllId(id) {
//     document.querySelector('#dog-form').innerHTML = ""

//     fetch(`http://localhost:3000/dogs/:${id}`)
//         .then(res => res.json())
//         .then(json => json.id)
// }


//The dog should be put on the table as a table row. The HTML might look something like this 
//<tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>
//Render-------------------------------------------------
function renderDogData(dog) {
    // let tableContainer = document.createElement('table')
    // let tableBody = document.createElement('tbody')
    let tableRow = document.createElement('tr')
    let tdName = document.createElement('td')
    let tdBreed = document.createElement('td')
    let tdSex = document.createElement('td')
    let tdEdit = document.createElement('td')
    let editBtn = document.createElement('button')


    //assign content
    tdName.textContent = dog.name
    tdBreed.textContent = dog.breed
    tdSex.textContent = dog.sex
    editBtn.textContent = "Edit Dog"

    //append to table body with id
    tdEdit.append(editBtn) //button must go inside the td
    tableRow.append(tdName, tdBreed, tdSex, tdEdit)
    // console.log(tableRow)
    document.getElementById("table-body").append(tableRow)

    //addEventListener
    //Button will listen for a click, 
    //the click will print out the info on the form, 

    editBtn.addEventListener('click', (e) => {

        document.getElementsByName('name')[0].value = dog.name
        document.getElementsByName('breed')[0].value = dog.breed
        document.getElementsByName('sex')[0].value = dog.sex


    })



}

//Were does this go????
// On submit of the form, a PATCH request should be made to http://localhost:3000/dogs/:id (Links to an external site.) to update the dog information (including name, breed and sex attributes).