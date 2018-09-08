var carouselClientsIndex = 0;

//////////////////////////////////////////////////////////////////////////////
////////////////////////////////// CAROUSEL //////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

function carouselClients(elementClassName = "clientesSlides", seconds = 4) {
    var i;
    var x = document.getElementsByClassName(elementClassName);

    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }

    carouselClientsIndex++;

    if (carouselClientsIndex > x.length) {
    	carouselClientsIndex = 1
    }

    x[carouselClientsIndex-1].style.display = "block";

    setTimeout(carouselClients, (seconds * 1000)); // Change image every 2 seconds
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// MENU ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// MAPS ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

function init_map(gmapElement, latitude, longitude, text){
	var myOptions = {
		zoom:10,
		center:new google.maps.LatLng(latitude, longitude),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
		
	map = new google.maps.Map(document.getElementById(gmapElement), myOptions);
	marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(latitude, longitude)});
	infowindow = new google.maps.InfoWindow({content:text});
	google.maps.event.addListener(marker, 'click', function(){
		infowindow.open(map,marker);
	});

	infowindow.open(map,marker);
}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// MAIL ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

function sendEmail(mailParamJSON){			
	//var service_id = "default_service";
	var service_id = "gmail"
	var template_id = "template_FyklCJMe";
	var user_id = "user_0cyWuRROWnRS8TWFmiaQw"

	emailjs.send(service_id,template_id, mailParamJSON, user_id).then(function(response) {
		console.log('SUCCESS!', response.status, response.text);
	}, function(error) {
		console.log('FAILED...', error);
	});
}

	/*
	var data = {
	    service_id: 'gmail',
	    template_id: 'template_FyklCJMe',
	    user_id: 'user_0cyWuRROWnRS8TWFmiaQw',
	    template_params: {
	        'username': 'James',
	        'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
	    }
	};
	 
	$.ajax('https://api.emailjs.com/api/v1.0/email/send', {
	    type: 'POST',
	    data: JSON.stringify(data),
	    contentType: 'application/json'
	}).done(function() {
	    alert('Your mail is sent!');
	}).fail(function(error) {
	    alert('Oops... ' + JSON.stringify(error));
	});
	*/