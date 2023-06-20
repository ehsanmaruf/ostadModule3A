function postData() {
    var xhr = new XMLHttpRequest();
    var url = "https://api.example.com/submit";
    
    var data = {
      name: "John Doe",
      email: "johndoe@example.com"
    };

    var jsonData = JSON.stringify(data);
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          console.log(response); 
        } else {
          console.log("Request failed. Status:", xhr.status);
        }
      }
    };
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(jsonData);
  };

  postData();
  