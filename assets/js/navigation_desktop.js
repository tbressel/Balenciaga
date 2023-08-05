const ELEMENT__over = document.querySelectorAll(".link");
ELEMENT__over.forEach(element => {
    element.addEventListener('mouseover', () => {
        console.warn("On survole le liens : ", element);
        HideAll_bigbloc();

        let ELEMENT__cible = element.querySelector(".big-bloc");
        console.log(ELEMENT__cible);

        let ELEMENT__value = ELEMENT__cible.classList[2];
        console.log(ELEMENT__value);

        if (ELEMENT__value === "big-bloc__off") {
            ELEMENT__cible.classList.replace("big-bloc__off", "big-bloc__on");
        }
    })

    document.querySelector("section").addEventListener('mouseover', () => {
        HideAll_bigbloc();

    })
});


function HideAll_bigbloc() {
    ELEMENT__hide = document.querySelectorAll(".big-bloc__on");
    ELEMENT__hide.forEach(element => {
        element.classList.replace("big-bloc__on", "big-bloc__off");
        console.warn("JE suis rentré dans la fonction HideAll et je récupère çà :", ELEMENT__hide)
    })
}



