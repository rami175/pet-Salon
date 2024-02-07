// let salon = {
// 	name: "The fashion pet",
// 	phone: "999-999-9999",
// 	address: {
// 		street: "Palm",
// 		number: "262-k",
// 		city: "Los Angeles",
// 		state: "CA",
// 		zip: "22333",
// 	},
// 	pets: [],
// };

//  object constructor
// function Salon(name, phone, address, pets) {
// 	this.name = name;
// 	this.phone = phone;
// 	this.age = address;
// 	this.pets = pets;
// }

function Pet(name, age, gender, service, breed, type) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.service = service;
	this.breed = breed;
	this.type = type;
}

// displaying the salon name in the register page
function salonName(x) {
	let y = x.name;
	document.getElementById("salon-name").innerHTML = `Salon Name: ${y}`;
}
salonName(salon);
// display number of pets
function numberOfPets(x) {
	let y = x.pets;

	return y.length;
}
// numberOfPets(salon);
function displayNumberOfPets(x) {
	document.getElementById(
		"display-number"
	).innerHTML = `<p>The number of registered pets in this salon is: ${numberOfPets(
		x
	)}</p>`;
}
function displayFooterInfo() {
	document.getElementById("info").innerHTML = `<p>Salon Name: ${salon.name}</p>
	<p>Salon Phone: ${salon.phone}</p>
	<p> Address: ${salon.address.street} ${salon.address.number} <br> ${salon.address.city}, ${salon.address.state}  ${salon.address.zip}</p>`;
}

displayFooterInfo();

// display pet names

function displayPetNames(x) {
	let displayArea = document.getElementById("display-names");
	displayArea.innerHTML = "";
	for (let i of x.pets) {
		let nameList = document.createElement("li");
		nameList.appendChild(document.createTextNode(i.name));
		displayArea.appendChild(nameList);
	}
}
// registering a new pet

function register() {
	let inputName = document.getElementById("txtName");
	let inputAge = document.getElementById("txtAge");
	let inputGender = document.getElementById("txtGender");
	let inputBreed = document.getElementById("txtBreed");
	let inputService = document.getElementById("txtService");
	let inputType = document.getElementById("txtType");
	if (inputName.value == "") {
		alert("Please enter a name");
	} else {
		let newPet = new Pet(inputName.value, inputAge.value, inputGender.value);
		salon.pets.push(newPet);

		displayPetNames(salon);
		displayNumberOfPets(salon);
	}
	document.getElementById("reset-form").reset();
}

//adding pets
function showForm() {
	document.getElementById("form-div").style.display = "block";
}
function hideForm() {
	document.getElementById("form-div").style.display = "none";
}

function init() {
	let pet1 = new Pet("Scoopy", 60, "Male");
	let pet2 = new Pet("Simba", 3, "Male");
	let pet3 = new Pet("Daisy", 3, "Female");
	salon.pets.push(pet1, pet2, pet3);
	displayPetNames(salon);
	displayNumberOfPets(salon);
}
// init();
window.onload = init;
