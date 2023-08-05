let ELEMENT__footer = document.querySelectorAll(".footer_link");
console.log(ELEMENT__footer);
ELEMENT__footer.forEach(element => {
    element.addEventListener('click', () => {

        

        let ELEMENT__value = element.querySelector(".footer_level2").classList[1];
        console.log(ELEMENT__value);
        if(ELEMENT__value === "display__false") {
            HideAll_level2();
            element.querySelector(".footer_level2").classList.replace("display__false", "display__true")
        } else {
            element.querySelector(".footer_level2").classList.replace("display__true", "display__false")
        }
    })
    
});