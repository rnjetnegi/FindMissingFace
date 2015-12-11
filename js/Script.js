var numberOfFaces = 5;
var theleftSide = document.getElementById("leftSide");
var therightSide = document.getElementById("rightSide");
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
		rface = face.cloneNode(true);
		therightSide.appendChild(rface);

	}
}