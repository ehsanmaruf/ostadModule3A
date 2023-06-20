function fetchData() {
    var xhr = new XMLHttpRequest();
    var url = "https://api.example.com/data";
    
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = xhr.responseText;
          console.log(response); 
        } else {
          console.log("Request failed with Status:", xhr.status);
        }
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  }
  
  fetchData();