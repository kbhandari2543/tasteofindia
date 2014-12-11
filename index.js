$(document).ready(function(){

function initGeolocation() {  
        navigator.geolocation.getCurrentPosition(getLocation, errorHandling);  
    }  
    function errorHandling(error) {  
        switch(error.code) {  
            case error.PERMISSION_DENIED: alert("You are not sharing your location.");  
            break;  
            case error.POSITION_UNAVAILABLE: alert("Could not detect your position.");  
            break;  
            case error.TIMEOUT: alert("Position retrieval timed out.");  
            break;  
            default: alert("Unknown error.");  
            break;  
        }  
    }
    function getLocation(position) {  
        var url = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + 
            position.coords.latitude + "," +  
            position.coords.longitude + "&zoom=14&size=200x300&markers=color:red|" +  
            position.coords.latitude + ',' + 
            position.coords.longitude;  
        $("#map").attr("src", url)
    }
   initGeolocation();


});
	
    