function altBackground(enterButton){
	document.body.style.backgroundImage = "url(./Images/lala.jpg)";
	x= document.getElementById("title");
	x.style.color = "white";
	x.style.fontFamily= "Comic Sans MS", "Comic Sans", "cursive";
	x.innerHTML = "Life's short. Love what you do.";
	
	y= document.getElementById("subTitle");
	y.style.color="white";
	y.innerHTML = "-Chicago lollapalooza 2015!";
	enterButton.src= "./Images/Enter2.png";
}

function normalBackground(enterButton){
	document.body.style.backgroundImage ="none";
	x = document.getElementById("title");
	x.style.color="black";
	x.style.fontFamily= "Courier New", "Courier", "monospace";
	x.innerHTML= "Web & Android Developer";
	
	y= document.getElementById("subTitle");
	y.style.color="black";
	y.innerHTML = "Richard Macias";
	
	enterButton.src= "./Images/Enter2.png";
}
function selectBackground(toggleValue){
	if(toggleValue.checked==false){
		altBackground(document.getElementById("Enter"));
	}
	else{
		normalBackground(document.getElementById("Enter"));
	}
	
	
}
