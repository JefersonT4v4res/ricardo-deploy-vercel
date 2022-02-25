function send_handle(){

    let num=document.getElementById("number").value;
  
    let msg= document.getElementById("msg").value;
  
    let name= document.getElementById("name").value;
    
      var url = "https://wa.me/5575988464938?text=" 
      + "number: " + number + "%0a"
      + "name: " + name + "%0a"
      + "msg: " + msg;
  
      window.open(url, '_blank').focus();
  }