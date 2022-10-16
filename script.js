
let modal = document.querySelector(".modal");
let btn = document.querySelector(".zipForm__button");
let closeIcon = document.querySelector(".close");
let btnClose = document.querySelector(".end");
let btnNext = document.querySelector(".next");
let inputs = document.querySelectorAll("input");
let variant = document.querySelector(".variant");

btn.addEventListener("click", function()  {
    let code=document.querySelector("input[name=code]");
    let errorCode = document.querySelector(".zipForm__errorText");
    if (code.value ==="") {
       code.classList.add("error");
        errorCode.style.display = "block";
        errorCode.innerHTML="Please, write code"; 
        return false
    }
  modal.style.display = "block";
    errorCode.innerHTML="";
    code.classList.remove("error");
});


closeIcon.addEventListener("click", function()  {
  modal.style.display = "none";
});


inputs.forEach(el => {
    el.addEventListener("click", () => {
        variant.textContent = "";
        if (document.getElementById('yes').checked) {
            variant.textContent = document.getElementById('yes').value;
          }
        if (document.getElementById('no').checked) {
            variant.textContent = document.getElementById('no').value;
          }
    });
});

btnNext.addEventListener("click", function() {
    let rad=document.getElementsByName('radio');
    for (let i=0;i<rad.length; i++) {
        if (rad[i].checked) {
        document.querySelector(".first").style.display="none";
        document.querySelector(".second").style.display="flex";
        document.querySelector(".progressBar").classList.add("grow");
        }
        else {
            let error = document.querySelector(".answerGroup__errorText");
            error.innerHTML="Please, make your choice";  
        }
    }
  });


    function validate() {
    let name=document.querySelector("input[name=name]");
    let email=document.querySelector("input[name=email]");
    let errorName = document.querySelector(".errorName");
    let errorEmail = document.querySelector(".errorEmail");
    if (name.value ==="" ) {
        name.classList.add("error");
        errorName.innerHTML="Please, write your name"; 
        return false
    }
    if (email.value ==="") {
        email.classList.add("error");
        errorEmail.innerHTML="Please, write your email"; 
        return false
    }
    else   {
        document.querySelector(".second").style.display="none";
        modal.style.display = "none";
        document.querySelector(".first").style.display="block";
   
    }
}


