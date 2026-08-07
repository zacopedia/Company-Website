// Target Humberger Icon
const humberger = document.querySelector(".humberger");
const burgerToggle = document.querySelector(".burger-toggle");
const humbergerOpen = document.querySelector(".humberger-open");

humberger.addEventListener("click", function() {
    // this.classList.toggle('close');
    // humberger.classList.toggle("close");
    // if (humbergerOpen.style.display) {
    //     humbergerOpen.style.display = null
    // }

        humberger.classList.toggle("close")
        humbergerOpen.classList.toggle("active")
   
    
})

