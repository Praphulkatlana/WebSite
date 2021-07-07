var modal = document.getElementById('mdl');

// window.onclick = function (event) {
//     console.log("model")
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
//  img.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// }

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}


function getSearchTerm() {
    console.log("fnc call")
    var searchTerm = document.getElementById('searchterm').value
    console.log(searchTerm)
    if (!searchTerm) {

        alert('Please enter sometime')
    }
    else {
        var src
        for (let i = 1; i < 13; i++) {
            src = "https://source.unsplash.com/random?" + searchTerm + i
            document.getElementById('makeImg' + i).src = src
            console.log(src)
        }
    }

    document.getElementById('searchterm').value = null

}


function submitform(event){
    
      event.preventDefault();
     validation()
}
function submitmdlform(event){
    
      event.preventDefault();
     validationmdl()
}

function validation(){

   
    const email=document.getElementById('Email').value
    const usrname=document.getElementById('Uname').value
    const psswrd=document.getElementById('Pass').value
    const restpswrd=document.getElementById('RPass').value
   
   const checkEmail =ValidateEmail(email)
   const checkUname =ValidateUsername(usrname)
   const checkPsswrd =ValidatePassword(psswrd)
   const checkRstPsswrd =ValidateResetPassword(restpswrd,psswrd)
   
   console.log(checkEmail,checkPsswrd,checkUname,checkRstPsswrd)
   if(checkEmail&&checkPsswrd&&checkUname&&checkRstPsswrd)
   {
       
     alert("Form Submitted successfully, click okay to continue")
       window.setTimeout(() => {
           window.location.reload()
       }, 1000);
   }
   else{
       alert("Please try again")
   }

}

function validationmdl(){

   
    const email=document.getElementById('MEmail').value
    const usrname=document.getElementById('MUname').value
    const psswrd=document.getElementById('MPass').value
    const restpswrd=document.getElementById('MRPass').value
   
   const checkEmail =ValidateEmail(email)
   const checkUname =ValidateUsername(usrname)
   const checkPsswrd =ValidatePassword(psswrd)
   const checkRstPsswrd =ValidateResetPassword(restpswrd,psswrd)
   
   console.log(checkEmail,checkPsswrd,checkUname,checkRstPsswrd)
   if(checkEmail&&checkPsswrd&&checkUname&&checkRstPsswrd)
   {
       
     alert("Form Submitted successfully, Page will reload in sometime, click okay to continue")
       window.setTimeout(() => {
           window.location.reload()
       }, 8000);
   }
   else{
       alert("Please try again")
   }

}
 
function ValidateEmail(email) 
{
    
    var index=email.indexOf("@");  
    var dot=email.lastIndexOf(".");  
    if (index<1 || dot<index+2 || dot+2>=email.length){  
      alert("Please enter a valid e-mail address ");  
      return false;  
      }  
      else{
          return true;
      }

}
function ValidateUsername(username) 
{
    

    let valid = false;
   
    const trimusername = username.trim();

    if (!trimusername) {
        alert('Username cannot be blank.');
    } else {
        
        valid = true;
    }
    return valid;
   
}

function ValidatePassword(psswrd) 
{
   
    var pssformate="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
    
 if (psswrd.length>5)
  {
    return (true)
  }else{
      
    alert("You have entered an invalid Password")
    return (false)
  }
}
function ValidateResetPassword(restpsswrd,psswrd) 
{
    
 if (psswrd===restpsswrd)
  {
    return (true)
  }else{
    alert("Password does not matched!")
    return (false)
  }
}
