function altBackground(Selection){
	switch(Selection) {
    case 0:
				document.body.style.backgroundImage = "url(./Images/linedpaper_@2x.png)";
				FontBlack();
        break;
    case 1:
        document.body.style.backgroundImage = "url(./Images/Creative_Wallpaper_Earthquake.jpg)";
				FontWhite();
				break;
		case 2:
		    document.body.style.backgroundImage = "url(./Images/led-panel.jpg)";
				FontWhite();
		    break;
		case 3:
				  document.body.style.backgroundImage = "url(./Images/school.png)";
					FontBlack();
		      break;
    default:
       	document.body.style.backgroundImage = "url(./Images/linedpaper_@2x.png)";
				FontBlack();
	}
}
function FontWhite(){
var oldTags = document.getElementsByTagName("h1");
	for(i = 0; i<oldTags.length; i++){
		oldTags[i].style.color = "white";
	}
oldTags = document.getElementsByTagName("h2");
	for(i = 0; i<oldTags.length; i++){
		oldTags[i].style.color = "white";
	}
	oldTags = document.getElementsByTagName("h3");
		for(i = 0; i<oldTags.length; i++){
			oldTags[i].style.color = "white";
		}
}
function FontBlack(){
var oldTags = document.getElementsByTagName("h1");
	for(i = 0; i<oldTags.length; i++){
		oldTags[i].style.color = "black";
	}
	oldTags = document.getElementsByTagName("h2");
	for(i = 0; i<oldTags.length; i++){
		oldTags[i].style.color = "black";
	}
	oldTags = document.getElementsByTagName("h3");
		for(i = 0; i<oldTags.length; i++){
			oldTags[i].style.color = "black";
		}
}
