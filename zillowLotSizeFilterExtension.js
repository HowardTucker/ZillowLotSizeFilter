var SQUARE_FEET_IN_ACRE = 43560;

var ul = document.getElementById("lot-size-select-options");
if (ul) {
	ul.appendChild(createZillowLotSizeListItem(25));
	ul.appendChild(createZillowLotSizeListItem(50));
	ul.appendChild(createZillowLotSizeListItem(75));
	ul.appendChild(createZillowLotSizeListItem(100));
	ul.appendChild(createZillowLotSizeListItem(200));
}

var select = document.getElementById("lot-size-select");
if (select) {
	select.appendChild(createZillowLotSizeOption(25));
	select.appendChild(createZillowLotSizeOption(50));
	select.appendChild(createZillowLotSizeOption(75));
	select.appendChild(createZillowLotSizeOption(100));
	select.appendChild(createZillowLotSizeOption(200));
}

function createZillowLotSizeListItem(acres) {
	var li = document.createElement("li");
	var a = document.createElement("a");
	a.className = "option";
	a.appendChild(document.createTextNode(acres + "+ acres"));
	a.setAttribute("tabindex", "-1");
	li.appendChild(a);
	li.setAttribute("data-value", (acres * SQUARE_FEET_IN_ACRE).toString() + ",");

	return li;
}

function createZillowLotSizeOption(acres) {
	var option = document.createElement("option");
	option.setAttribute("value", (acres * SQUARE_FEET_IN_ACRE).toString() + ",");
	option.appendChild(document.createTextNode(acres + "+ acres"));

	return option;
}