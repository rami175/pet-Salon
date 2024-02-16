let serviceList = [];
let sId = 0;
class Service {
	constructor(name, desc, price) {
		this.sId = sId++;
		this.name = name;
		this.desc = desc;
		this.price = price;
	}
}

// adding services
function initServices() {
	resetStorage();
	let service1 = new Service("Full Package", "This include everything", 300.0);

	let service2 = new Service("Grooming", "Full grooming for the pet", 100.0);

	let service3 = new Service(
		"Vaccine",
		"Complete vaccination for the pet",
		49.99
	);

	let service4 = new Service("Nails", "Nail trimming", 39.99);

	saveArray(service1);
	saveArray(service2);
	saveArray(service3);
	saveArray(service4);
	serviceCardsDisplay();
	// serviceList.push(service1, service2, service3, service4);
	// // on load == window.onload
	// $(document).ready(function () {
	// 	for (let i of serviceList) {
	// 		addServiceCards(i);
	// 	}
	// });
}
$(document).ready(serviceCardsDisplay());

// validation for service input
function validService() {
	$("#serviceName").removeClass("alert-error");
	$("#servicePrice").removeClass("alert-error");
	let test = true;
	if ($("#serviceName").val() == "") {
		test = false;
		$("#serviceName").addClass("alert-error");
		setTimeout(function () {
			$("#serviceName").removeClass("alert-error");
		}, 3000);
	}

	if (!$("#servicePrice").val()) {
		test = false;
		$("#servicePrice").addClass("alert-error");
		setTimeout(function () {
			$("#servicePrice").removeClass("alert-error");
		}, 3000);
	}
	if (test == false) {
		alert("Invalid input please fill all fields");
	}
	return test;
}
// add a service to local storage
function addService() {
	if (validService()) {
		let name = $("#serviceName").val();
		let desc = $("#serviceDescription").val();
		let price = $("#servicePrice").val();
		let newService = new Service(name, desc, price);
		serviceList.push(newService);
		addServiceCards(newService);
		saveArray(newService);
	}
	document.getElementById("service-form").reset();
}
// Adding service cards to display area
function addServiceCards(x) {
	let serviceRow = `
	<tr class="service-row" id="${x.sId}" onclick="toggleSelection(${x.sId})" ">
	<td><h3 class="card-title">${x.name}</h3> </td>
	<td>${x.desc} </td
	>?>
	<td style="color:green">${x.price}$<//yttd>
	</tr>
		`;
	$("#service-table").append(serviceRow);
}

// display cards from local storge

function serviceCardsDisplay() {
	$("#service-table").html("");
	for (i of readItems()) {
		addServiceCards(i);
	}
}

// selecting service row

function toggleSelection(e) {
	let x = document.getElementById(e);
	if ($(x).hasClass("clicked")) {
		$(x).removeClass("clicked");
	} else {
		$(x).addClass("clicked");
	}
}
function deleteService() {
	let tempList = readItems();
	console.log(tempList);
	let x = document.querySelectorAll(".clicked");
	for (let i = 0; i < x.length; i++) {
		let p = x[i].id;
		for (index = 0; index < tempList.length; index++) {
			if (tempList[index].sId == p) {
				tempList.splice(index, 1);
			}
		}
	}
	console.log(tempList);
	let emty = [];
	localStorage.setItem("services", emty);
	tempList.forEach((element) => {
		saveArray(element);
	});
	serviceCardsDisplay();
}
