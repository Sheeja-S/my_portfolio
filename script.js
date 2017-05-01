function mail(){
  var sender = document.getElementById("from").value;
  var msg = document.getElementById("message").value;
  var subject = document.getElementById("subject").value;
  $.post("mail.php",{from:sender,subj:subject,msg:meg}, function(data){
    if(data === "true"){
      alert("Sent");
    }
    else{
      alert("failed");
    }
  });  
}
