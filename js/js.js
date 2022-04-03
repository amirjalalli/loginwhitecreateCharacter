let getValueBtn = document.querySelector(".btn")

let textInput = document.querySelector(".text")
let passInput = document.querySelector(".password");

let modal = document.querySelector(".child")
let parentDiv = document.querySelector(".parent")

function getValue () {
    // console.log(getValueBtn)
    let textVlaue = textInput.value;
    let passValue = passInput.value;
    // console.log(textVlaue, passValue )

    if (textVlaue.length < 3 || passValue.length < 8 ) {
        modal.innerHTML = "اطلاعات وارد شده اشتباه میباشد."
        modal.style.backgroundColor = "red";
        parentDiv.style.display = "block";

    } else {
        modal.innerHTML = "با موفقیت لاگین شدین"
        modal.style.backgroundColor = "green";
        parentDiv.style.display = "block";
    }
    setTimeout(function (){
        parentDiv.style.display = "none"
    },3000)
}