var numberOfFaces = 5;
var theleftSide = document.getElementById("leftSide");
var therightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function generateFaces(){
	for(var i= 0; i<numberOfFaces; i++){
		var PositionLeft =  Math.random()*400;
		var PositionTop = Math.random()*400;
		var face = document.createElement("img");
		face.src = "img/smile.png";
		face.classList.add("image");
		face.style.top = PositionTop + "px";
		face.style.left = PositionLeft + "px";
		theleftSide.appendChild(face);
	}
	console.log("***********************after for loop****************************");
	therightSide.appendChild(theleftSide.cloneNode(true));
	var last_child = therightSide.firstChild.lastChild;
	therightSide.childNodes[0].removeChild(last_child);

	console.log("***********************Before click function happens*******************************")
	theBody.lastChild.onClick = function nextLevel(event){
	event.stopPropagation();
	numberOfFaces += 1;
	generateFaces();
	console.log("Inside nextLevel");
};

theBody.onClick = function gameOver() {
	alert("Game Over!");
	theBody.onclick = null;
	theLeftSide.lastChild.onclick = null;
	console.log("Inside gameOver");
};
}


