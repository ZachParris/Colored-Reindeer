var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var deerList = []

var hohohoElement = document.getElementById("coloredReindeer");

for (var i = 0; i < reindeer.length; i++) {
	// for (var j = 0; i < colors.length; i++) {
	// 	deerList.push(reindeer[i] + colors[i]);
	// }
	hohohoElement.innerHTML+= "<div>" + colors[i] + " " + reindeer[i] + "<div>"
};
