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
	}
	therightSide.appendChild(theleftSide.cloneNode(true));
	var last_child = therightSide.firstChild.lastChild;
	therightSide.childNodes[0].removeChild(last_child);


	var theBody = document.getElementsByTagName("body")[0];
	theBody.lastChild.onClick = nextLevel(event){
		 event.stopPropagation();
		 numberOfFaces += 1;
		 generateFaces();
	}

}