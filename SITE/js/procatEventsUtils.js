function setMenuFixed(elementNavMenu, eventResultScroll, heigthItem){
	if(eventResultScroll > heigthItem) {
		elementNavMenu.css("position", "fixed");
		elementNavMenu.css("width", "100%");
	} else {
		elementNavMenu.css("position", "relative");
		elementNavMenu.css("width", "100%");
	}
}

function reduceMenuImg(elementImgMenu, eventResultScroll, heigthItem){
	if(eventResultScroll > heigthItem) {
		elementImgMenu.css("width", "5%");
		elementImgMenu.css("height", "5%"); 
	} else {
		elementImgMenu.css("width", "10%");
		elementImgMenu.css("height", "10%");
	}
}

function changeMenu(elementMenu1, elementMenu2, eventResultScroll, heigthItem){
	if(eventResultScroll > heigthItem) {
		elementMenu1.css("display", "none");
		elementMenu2.css("display", "inherit"); 
	} else {
		elementMenu2.css("display", "none");
		elementMenu1.css("display", "inherit");
	}
}

function sideMenuButtons(elementMenuClick, elementMenuToggle){
    elementMenuClick.click(function(e) {
        elementMenuToggle.css("display","inherit");
        elementMenuToggle.toggleClass("toggled");
    })
}