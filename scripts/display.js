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
		"Dog"
	);
	let pet2 = new Pet("Simba", 3, "Male", "tabby", "grooming", "Cat");
	let pet3 = new Pet("Daisy", 3, "Female", "tabby", "grooming", "Cat");
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
			</div>
			<button class="btn btn-dark" onclick="removePet(${i})">Remove pet</button>
			</div>
					
        `;
		getE("pets").innerHTML += card;
	}
}
function removePet(x) {
	salon.pets.splice(x, 1);
	displayPetCards();
	displayNumberOfPets(salon);
	displayPetTable();
}
