function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLocation);
    } else {
      console.log("Geolocation is not supported.");
    }
  }
  
  function showLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude is ${latitude} and Longitude is ${longitude}`);
  }

getLocation();
  