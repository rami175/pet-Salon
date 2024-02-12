function salonName(x) {
	let y = x.name;
	getE("salon-name").innerHTML = `Salon Name: ${y}`;
}
salonName(salon);

function numberOfPets(x) {
	let y = x.pets;

	return y.length;
}
// numberOfPets(salon);
function displayNumberOfPets(x) {
	getE(
		"display-number"
	).innerHTML = `<p>The number of registered pets in this salon is: ${numberOfPets(
		x
	)}</p>`;
}
function init() {
	let pet1 = new Pet(
		"Scoopy",
		60,
		"Male",
		"Great Dane",
		"Full Package",
		"Dog",
		100
	);
	let pet2 = new Pet("Simba", 3, "Male", "grooming", "tabby", "Cat", 55);
	let pet3 = new Pet("Daisy", 3, "Female", "grooming", "tabby", "Cat", 99);
	salon.pets.push(pet1, pet2, pet3);
	displayNumberOfPets(salon);
	displayPetCards();
	displayFooterInfo();
	displayPetTable();
}

function displayFooterInfo() {
	getE("info").innerHTML = `<p>Salon Name: ${salon.name}</p>
	<p>Salon Phone: ${salon.phone}</p>
	<p> Address: ${salon.address.street} ${salon.address.number} <br> ${salon.address.city}, ${salon.address.state}  ${salon.address.zip}</p>`;
}

init();

function displayPetCards() {
	getE("pets").innerHTML = "";
	for (let i = 0; i < salon.pets.length; i++) {
		let pet = salon.pets[i];
		let petImg = "./img/other.jpg";
		if (pet.type == "Dog") {
			petImg = "./img/Dog.jpg";
		} else if (pet.type == "Cat") {
			petImg = "./img/cat.jpg";
		}

		let card = `
			<div class="card" style="width: 18rem;">
			<img src="${petImg}" class="card-img-top" alt="...">
			<div class="card-body">
			<div class="pet-name"><h2>  ${pet.name}</h2>   </div>
			
			<p>Age:&ensp;${pet.age}</p>
			<p>Gender:&ensp; ${pet.gender}</p> 
			<p> Breed: &ensp;${pet.breed}</p>  
			<p> Service:&ensp; ${pet.service}</p>
			<p> Type:&ensp; ${pet.type}</p>
			<p> Bill:&ensp; ${pet.bill}$</p>
			</div>
			<button class="btn btn-dark" onclick="removePet(${i})">Remove pet</button>
			</div>
					
        `;
		getE("pets").innerHTML += card;
	}
}
//  display tables
function displayPetTable() {
	getE("display-table").innerHTML = "";
	for (let i = 0; i < salon.pets.length; i++) {
		let pet = salon.pets[i];
		let row = `
		<tr>
		<td>${pet.name} </td>
		<td>${pet.age} </td>
		<td>${pet.gender} </td>
		<td>${pet.breed} </td>
		<td>${pet.service} </td>
		<td>${pet.type} </td>
		<td>${pet.bill}</td>
		</tr>
		`;
		getE("display-table").innerHTML += row;
	}

	// getE("display-table").innerHTML = "";
	// let displayTable = getE("display-table");
	// displayTable.innerHTML = "";
	// for (let pet of salon.pets) {
	// 	let row = document.createElement("tr");
	// 	for (let property in pet) {
	// 		let cellData = document.createElement("td");
	// 		cellData.appendChild(document.createTextNode(pet[property]));
	// 		row.appendChild(cellData);
	// 	}
	// 	displayTable.appendChild(row);
	// }
}

function reverseTable() {
	getE("display-table").innerHTML = "";
	for (let i = salon.pets.length - 1; i >= 0; i--) {
		let pet = salon.pets[i];
		let row = `
		<tr>
		<td>${pet.name} </td>
		<td>${pet.age} </td>
		<td>${pet.gender} </td>
		<td>${pet.breed} </td>
		<td>${pet.service} </td>
		<td>${pet.type} </td>
		<td>${pet.bill}</td>
		</tr>
		`;
		getE("display-table").innerHTML += row;
	}
}
