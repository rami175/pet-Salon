function saveArray(item) {
	let itemsArray = readItems(); //getting las data
	itemsArray.push(item); //adding the new item to the array

	let val = JSON.stringify(itemsArray); //converting into a string
	localStorage.setItem("services", val);
}

function readItems() {
	// getting items from ls
	let data = localStorage.getItem("services");
	// local storage is empty
	if (!data) {
		return [];
	} else {
		// if we have data
		let list = JSON.parse(data); //parse the data
		return list;
	}
	//
}
function resetStorage() {
	let emt = [];
	localStorage.setItem("services", emt);
	$("#service-table").empty();
}
// resetStorage();
