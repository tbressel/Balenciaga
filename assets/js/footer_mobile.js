let ELEMENT__footer = document.querySelectorAll(".footer_link");
console.log(ELEMENT__footer);
ELEMENT__footer.forEach(element => {
    element.addEventListener('click', () => {

        HideAll_footer();
        
        let ELEMENT__value =  element.querySelector(".footer_level2").classList[1];
        console.log(ELEMENT__value);
        
        

        if(ELEMENT__value === "display__swingfalse") {
            HideAll_level2();
            element.querySelector(".footer_level2").classList.replace("display__swingfalse", "display__swingtrue")
        } else {
            element.querySelector(".footer_level2").classList.replace("display__swingtrue", "display__swingfalse")
        }

        
    })
    
    
});



function HideAll_footer() {
    ELEMENT__hide = document.querySelectorAll(".footer_level2");
   ELEMENT__hide.forEach(element => {
       element.classList.replace("display__swingtrue", "display__swingfalse");
       console.warn("JE suis rentré dans la fonction HideAll et je récupère çà :",ELEMENT__hide )
   })
}