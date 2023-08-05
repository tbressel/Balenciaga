// ----------------------------------------------------------------
// ----------------------------------------------------------------
// Ouverture du menu burger et transformation du burger en croix---
// ----------------------------------------------------------------
// ----------------------------------------------------------------
const ELEMENT__burger = document.querySelector(".menu-burger");

ELEMENT__burger.addEventListener('click', () => {
    console.warn("on entre dans la fonction")


    // ------------  Modification du burger en forme de croix ---------  
    document.querySelector(".burger-line1").classList.toggle("croix1");
    document.querySelector(".burger-line2").classList.toggle("croix2");
    document.querySelector(".burger-line3").classList.toggle("croix3");


    // -------------- On affiche ou retir le menu de l'écran --------------
    let ELEMENT__menu = document.querySelector(".main_navigation_window");
                    console.warn("Le menu s'ouvre et est identifié avec cet élément : ",ELEMENT__menu) 
                    ELEMENT__menu.classList.toggle("menu__on");

    HideAll_level2();
    HideAll_level3();

})


// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----- Gestion dynamique du menu : 
// 1 -  Un tableau dans lequel plusieurs classes de rôle identique 
// afin de simplifier la gestion du code et d'éviter la répétirion 
// du même code pour chaque postion de menu
//
// 
// 2 - Une fonction qui prends comme paramètre le nom des classes du 
// tableau par le biais d'un simple forEach------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

const TblClasses = [
    ".level-1.choix1", ".level-1.choix2", ".level-1.choix3", ".level-1.choix4", ".level-1.choix6"
];
const TblClasses2 = [
    ".level-2.menu2.choix1", ".level-2.menu2.choix2", ".level-2.menu2.choix3", ".level-2.menu2.choix4",
    ".level-2.menu3.choix1",".level-2.menu3.choix2",".level-2.menu3.choix3",".level-2.menu3.choix4",".level-2.menu3.choix5",
    ".level-2.menu4.choix1",".level-2.menu4.choix2",".level-2.menu4.choix3",".level-2.menu4.choix4",".level-2.menu4.choix5",
    ".level-2.menu5.choix1"
];


TblClasses.forEach(element => {
    DisplayLevel1(element);
});
TblClasses2.forEach(element => {
    DisplayLevel2(element);
});

function HideAll_level2() {
     ELEMENT__hide = document.querySelectorAll(".display__true");
    ELEMENT__hide.forEach(element => {
        element.classList.replace("display__true", "display__false");
        console.warn("JE suis rentré dans la fonction HideAll et je récupère çà :",ELEMENT__hide )
    })
}


function HideAll_level3() {
     ELEMENT__hide = document.querySelectorAll(".display__bloc-on");
    ELEMENT__hide.forEach(element => {
        element.classList.replace("display__bloc-on", "display__bloc-off");
        console.warn("JE suis rentré dans la fonction HideAll et je récupère çà :",ELEMENT__hide )
    })
     ELEMENT__hide = document.querySelectorAll(".display__blocdown-on");
    ELEMENT__hide.forEach(element => {
        element.classList.replace("display__blocdown-on", "display__blocup-off");
        console.warn("JE suis rentré dans la fonction HideAll et je récupère çà :",ELEMENT__hide )
    })
}


function DisplayLevel1(Pclass) {
    let ELEMENT__cible = document.querySelector(Pclass);
    ELEMENT__cible.addEventListener('click', () => {
        HideAll_level2();
        // console.warn("Un click a été entendu sur le choix 1. l'élément récupéré est : ", ELEMENT__cible);

        // la structures HTML étant toujours la même dans chaque imbrication du menu, les enfanst des noeuds
        // auront le même nombre de classe et le même nombre de noeuds.
        let ELEMENT__vise = ELEMENT__cible.childNodes[3];
        // console.log("L'Elément suivant ciblé est :", ELEMENT__vise);

        // si on rajoute des classe dans cet élement il ne faut pas oublier de le mettre à jours
        // affin de cibler la bonne valeur de classe.
        //  !!!!!! ATTENTION !!!!!!! celà affecte TOUTE les imbrications similaires du menu !
        let ELEMENT__value = ELEMENT__vise.classList[4];
        // console.log("La valeur de cet élément que je récupère est : ", ELEMENT__value);
        // console.log("Ce que je récupère est de type : ", typeof (ELEMENT__value));

        // On test la valeur récupérer dans l'élement et selon sont état on le change 
        // Cela à pour effet de fermer ou d'ouvrir le "tiroir" du menu
        if (ELEMENT__value === "display__true") {
            ELEMENT__vise.classList.replace("display__true", "display__false");
        } else {
            ELEMENT__vise.classList.replace("display__false", "display__true");
        }

       

        // Ici çà concerne l'apparition du bloc qui est caché par un overflow : hidden
        // on change sa classe pour le faire apparaitre.
        let ELEMENT__bloc_cible = ELEMENT__vise.childNodes[1];
                            // console.warn("Cette fois ci on repart de cet élément ci : ", ELEMENT__bloc_cible);
        let ELEMENT__bloc_value = ELEMENT__bloc_cible.classList[1];
                            // console.log("On lit les classes suivantes :",ELEMENT__bloc_value);

        

        if(ELEMENT__bloc_value === "display__bloc-off") {
            ELEMENT__bloc_cible.classList.replace("display__bloc-off","display__bloc-on");
       
        } else {
            ELEMENT__bloc_cible.classList.replace("display__bloc-on","display__bloc-off");
            HideAll_level2();
        }
    })
}


function DisplayLevel2(Pclasse) {
    let ELEMENT__cible2 = document.querySelector(Pclasse);
    ELEMENT__cible2.addEventListener('click', (event) => {
       
        // ajoute d'un stopImmediatePropagation qui causait la fermeture des élement parent 
        event.stopImmediatePropagation();
        console.warn("Un click a été entendu sur le choix 4 du menu 6. l'élément récupéré est : ", ELEMENT__cible2);
        let ELEMENT__vise = ELEMENT__cible2.childNodes[3];
        console.log("L'élément enfants visé est : ", ELEMENT__vise)
        let ELEMENT__value = ELEMENT__vise.classList[3];
        console.log("La valeur de l'élément est : ", ELEMENT__value)
        if (ELEMENT__value === "display__true") {
            ELEMENT__vise.classList.replace("display__true", "display__false");
        } else {
            ELEMENT__vise.classList.replace("display__false", "display__true");
        }
        
        
        // Ici çà concerne l'apparition du bloc qui est caché par un overflow : hidden
        // on change sa classe pour le faire apparaitre.
        let ELEMENT__bloc_cible = ELEMENT__vise.childNodes[1];
                            // console.warn("Cette fois ci on repart de cet élément ci : ", ELEMENT__bloc_cible);
        let ELEMENT__bloc_value = ELEMENT__bloc_cible.classList[1];
                            // console.log("On lit les classes suivantes :",ELEMENT__bloc_value);
        if(ELEMENT__bloc_value === "display__blocup-off") {
            ELEMENT__bloc_cible.classList.replace("display__blocup-off","display__blocdown-on");
        } else {
            ELEMENT__bloc_cible.classList.replace("display__blocdown-on","display__blocup-off");
        }
    })
}

