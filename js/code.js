$(function() {
	var words = ["Hola", "quiero", "comer", "mucho", "ahora"];
	var Hola = ["H", "o", "l", "a"];
	var quiero = ["q", "u", "i", "e", "r", "o"];
	var comer = ["c", "o", "m", "e", "r"];
	var mucho = ["m", "u", "c", "h", "o"];
	var ahora = ["a", "h", "o", "r", "a"];


	function aleatorio(minimo, maximo) {
		var numero = Math.floor(Math.random()* words.length);
		return numero;
	}
	var aw = words[aleatorio(0,4)];
	console.log(aw);
	var wolf;
	$("#holiwis").click(function(){
		wolf = $("#wolf").val();
	if(aw == "Hola"){
		switch(wolf) {
			case "H":
			$("#1").text("H");
			break;
			case "o":
			$("#2").text("o");
			break;
			case "l":
			$("#3").text("l");
			break;
			case "a":
			$("#4").text("a");
			break;
		}
	}
	if(aw == "quiero"){
		switch(wolf) {
			case "q":
			$("#1").text("q");
			break;
			case "u":
			$("#2").text("u");
			break;
			case "i":
			$("#3").text("i");
			break;
			case "e":
			$("#4").text("e");
			break;
			case "r":
			$("#5").text("r");
			break;
			case "o":
			$("#6").text("o");
			break;
		}
	}
		if(aw == "comer"){
		switch(wolf) {
			case "c":
			$("#1").text("c");
			break;
			case "o":
			$("#2").text("o");
			break;
			case "m":
			$("#3").text("m");
			break;
			case "e":
			$("#4").text("e");
			break;
			case "r":
			$("#5").text("r");
			break;
		}
	}
		if(aw == "mucho"){
		switch(wolf) {
			case "m":
			$("#1").text("m");
			break;
			case "u":
			$("#2").text("u");
			break;
			case "c":
			$("#3").text("c");
			break;
			case "h":
			$("#4").text("h");
			break;
			case "o":
			$("#5").text("o");
			break;
		}
	}
		if(aw == "ahora"){
		switch(wolf) {
			case "a":
			$("#1").text("a");
			$("#5").text("a");
			break;
			case "h":
			$("#2").text("h");
			break;
			case "o":
			$("#3").text("o");
			break;
			case "r":
			$("#4").text("r");
			break;
		}
	}
	});
});