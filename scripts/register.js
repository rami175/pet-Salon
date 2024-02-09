// pet constructor
function Pet(name, age, gender, service, breed, type) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.service = service;
	this.breed = breed;
	this.type = type;
}

function getE(id) {
	return document.getElementById(id);
}

function displayPetTable() {
	getE("display-table").innerHTML = "";
	let displayTable = getE("display-table");
	displayTable.innerHTML = "";
	for (let pet of salon.pets) {
		let row = document.createElement("tr");
		for (let property in pet) {
			let cellData = document.createElement("td");
			cellData.appendChild(document.createTextNode(pet[property]));
			row.appendChild(cellData);
		}
		displayTable.appendChild(row);
	}
}

function reverseTable() {
	getE("display-table").innerHTML = "";
	for (i = salon.pets.length - 1; i >= 0; i--) {
		let pet = salon.pets[i];
		let row = `
		<tr>
		<td>${pet.name} </td>
		<td>${pet.age} </td>
		<td>${pet.gender} </td>
		<td>${pet.breed} </td>
		<td>${pet.service} </td>
		<td>${pet.type} </td>
		</tr>
		`;
		getE("display-table").innerHTML += row;
	}
}

// registering a new pet

function register() {
	let inputName = getE("txtName");
	let inputAge = getE("txtAge");
	let inputGender = getE("txtGender");
	let inputBreed = getE("txtBreed");
	let inputService = getE("txtService");
	let inputType = getE("txtType");
	if (inputName.value == "") {
		alert("Please enter a name");
	} else {
		let newPet = new Pet(
			inputName.value,
			inputAge.value,
			inputGender.value,
			inputBreed.value,
			inputService.value,
			inputType.value
		);
		salon.pets.push(newPet);

		displayNumberOfPets(salon);
		displayPetCards();
		displayPetTable();
	}
	getE("reset-form").reset();
}

//adding pets
function showForm() {
	getE("form-div").style.display = "block";
}
function hideForm() {
	getE("form-div").style.display = "none";
}

// window.onload = init;
