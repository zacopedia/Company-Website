// Target Humberger Icon
var humberger = document.querySelector(".humberger");
var burgerToggle = document.querySelector(".burger-toggle");
var humbergerOpen = document.querySelector(".humberger-open");

humberger.addEventListener("click", function() {
    this.classList.toggle('close');
    // humberger.classList.toggle("close");
    if (humbergerOpen.style.display) {
        humbergerOpen.style.display = null
       
       
    }

    else {
        humbergerOpen.style.display ="block"
        
    }
    
})

