var numberOfFaces = 5;
var theleftSide = document.getElementById("leftSide");
function generateFaces(){
	
	

	
	for(var i= 0; i<numberOfFaces; i++){
		var leftSide = document.getElementById("leftSide");
		var PositionLeft =  Math.random()*400;
		var PositionTop = Math.random()*400;
		var face = document.createElement("img");
		face.src = "img/smile.png";
		face.classList.add("image");
		face.style.top = PositionTop + "px";
		face.style.left = PositionLeft + "px";
		leftSide.appendChild(face);
	}
}