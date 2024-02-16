let petId = 0;
// pet constructor
function Pet(name, age, gender, service, breed, type, bill) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	this.service = service;
	this.breed = breed;
	this.type = type;
	this.bill = bill;
	this.id = petId++;
}

function getE(id) {
	return document.getElementById(id);
}
// get elements from html
let inputName = getE("txtName");
let inputAge = getE("txtAge");
let inputGender = getE("txtGender");
let inputBreed = getE("txtBreed");
let inputService = getE("txtService");
let inputType = getE("txtType");
let inputBill = getE("txtBill");

// validation
function isValid(apet) {
	let validaton = true;
	// clear error stule
	getE("txtName").classList.remove("alert-error");
	getE("txtAge").classList.remove("alert-error");
	if (apet.name == "") {
		validaton = false;
		getE("txtName").classList.add("alert-error");
	}
	if (apet.age == "") {
		validaton = false;
		getE("txtAge").classList.add("alert-error");
	}
	return validaton;
}

function showNotificaton(msg, type) {
	getE("notification").classList.remove("hidden");
	getE("notification").innerHTML = `<p class="${type}">${msg} </p>`;
	setTimeout(function () {
		getE("notification").classList.add("hidden");
	}, 3000);
}

// registering a new pet

function register() {
	let newPet = new Pet(
		inputName.value,
		inputAge.value,
		inputGender.value,
		inputBreed.value,
		inputService.value,
		inputType.value,
		inputBill.value
	);
	if (isValid(newPet) == true) {
		salon.pets.push(newPet);
		displayNumberOfPets(salon);
		displayPetCards();
		displayPetTable();
		showNotificaton("Successful registration", "alert-success");
		getE("reset-form").reset();
	} else {
		showNotificaton("Unsuccessful registration", "alert-error");
	}
}

//adding pets
function showForm() {
	getE("form-div").style.display = "block";
}
function hideForm() {
	getE("form-div").style.display = "none";
}

// removing a pet
function deletePet(x) {
	getE(x).remove();
	for (let i = 0; i < salon.pets.length; i++) {
		let pet = salon.pets;
		if (pet[i].id == x) {
			pet.splice(i, 1);
		}
	}
	displayNumberOfPets(salon);
	displayPetTable();
}

// service selection
$(document).ready(function () {
	let serviceTxt = readItems();
	serviceTxt.forEach((element) => {
		let s = element.name;
		let opt1 = `
		<option>${s}</option>
	
		`;

		$("#txtService").append(opt1);
	});
});
