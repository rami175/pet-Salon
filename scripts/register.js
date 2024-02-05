let salon = {
	name: "The fashion pet",
	phone: "999-999-9999",
	address: {
		street: "Palm",
		number: "262-k",
		city: "Los Angeles",
		state: "CA",
		zip: "22333",
	},
	pets: [
		{
			name: "scooby",
			age: 60,
		},
		{
			name: "Scrappy",
			age: 50,
		},
		{
			name: "Tweety",
			age: 80,
		},
		{
			name: "Simba",
			age: 3,
			service: "grooming",
			gender: "male",
		},
		{
			name: "Daisy",
			age: 3,
			gender: "female",
		},
	],
};

// displaying the salon name
function salonName(x) {
	let y = x.name;
	document.getElementById("salon-name").innerHTML = `Salon Name: ${y}`;
}
salonName(salon);

// display number of pets
function numberOfPets(x) {
	let y = x.pets;
	// console.log(y.length);
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
displayNumberOfPets(salon);

// display pet names

function displayPetNames(x) {
	for (let i of x.pets) {
		let nameList = document.createElement("li");
		nameList.appendChild(document.createTextNode(i.name));
		document.getElementById("display-names").appendChild(nameList);
	}
}

displayPetNames(salon);

function displayFooterInfo() {
	// 	console.log(salon.name);
	// 	console.log(salon.phone);
	// 	console.log(salon.address.street);
	// 	console.log(salon.address.number);
	// 	console.log(salon.address.zip);

	document.getElementById("info").innerHTML = `<p>Salon Name: ${salon.name}</p>
    <p>Salon Phone: ${salon.phone}</p>
    <p> Address: ${salon.address.street} ${salon.address.number} <br> ${salon.address.city}, ${salon.address.state}  ${salon.address.zip}</p>`;
}
displayFooterInfo();
