const ELEMENT__prev = document.querySelector(".button__prev");
const ELEMENT__next = document.querySelector(".button__next");
const ELEMENT__menu = document.querySelector(".bloc3__menu");

let ELEMENT__dec;
let ELEMENT__inc;
let ELEMENT__newvalue = 0;

function startDecrement() {
    ELEMENT__dec = setInterval(() => {
          // on recupère la valeur dans le CSS
          let ELEMENT__style = window.getComputedStyle(ELEMENT__menu);
          let ELEMENT__value = ELEMENT__style.getPropertyValue("left"); 
          let ELEMENT__newvalue = parseFloat(ELEMENT__value);
          let test1 = ELEMENT__newvalue + 10;
          console.log("resultat du test1 : ",test1);
            
            if(test1 != 10) {

                ELEMENT__newvalue = ELEMENT__newvalue + 10;
                ELEMENT__menu.style.left = ELEMENT__newvalue + "px";
                console.log(ELEMENT__newvalue);
            }
    }, 100); 
}
function startIncrement() {
    ELEMENT__inc = setInterval(() => {

        // on recupère la valeur dans le CSS
        let ELEMENT__style = window.getComputedStyle(ELEMENT__menu);
        let ELEMENT__value = ELEMENT__style.getPropertyValue("left"); 
        let ELEMENT__newvalue = parseFloat(ELEMENT__value);
        let test2 = ELEMENT__newvalue - 10
                    console.log("resultat du test2 : ",test2);
        if(test2 > -810) {
            ELEMENT__newvalue = ELEMENT__newvalue - 10;
            ELEMENT__menu.style.left = ELEMENT__newvalue + "px";
            console.log(ELEMENT__newvalue);
        }
              
    }, 100); 
}

function stopDecrement() {
    clearInterval(ELEMENT__dec);
}
function stopIncrement() {
    clearInterval(ELEMENT__inc);
}

ELEMENT__prev.addEventListener('mouseover', () => {
    startDecrement();
});

ELEMENT__prev.addEventListener('mouseout', () => {
    stopDecrement();
});

ELEMENT__next.addEventListener('mouseover', () => {
    startIncrement();
});
ELEMENT__next.addEventListener('mouseout', () => {
    stopIncrement();
});




let ELEMENT__grid = document.querySelector(".grid__container").addEventListener('click', () => {

    document.querySelector(".case1").classList.toggle("disp1")
    document.querySelector(".case2").classList.toggle("disp2")
    document.querySelector(".case3").classList.toggle("disp3")
    document.querySelector(".case4").classList.toggle("disp4")





    let ELEMENT__container = document.querySelectorAll(".item__container");
    ELEMENT__container.forEach(element => {
        element.classList.toggle("alt_display");
    });
})

let ELEMENT__show = document.querySelectorAll(".item__container");
ELEMENT__show.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.querySelector(".hover__container").classList.add("show");
    })
});
let ELEMENT__hide = document.querySelectorAll(".item__container");
ELEMENT__hide.forEach(element => {
    element.addEventListener("mouseout", () => {
        element.querySelector(".hover__container").classList.remove("show");
    })
});

