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
	pets: [],
};

// display salon name in the index page

function salonNameIndex() {
	document.getElementById("salon-name-display").innerHTML = `  ${salon.name}`;
	document.getElementById("display-salon").innerHTML = `
	<p>Salon Phone: ${salon.phone}</p>
	<p> Address: ${salon.address.street} ${salon.address.number} <br> ${salon.address.city}, ${salon.address.state}  ${salon.address.zip}</p>`;
}
