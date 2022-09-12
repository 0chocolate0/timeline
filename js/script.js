
var swiper = new Swiper(".mySwiper", {
  cssMode: true,

  autoHeight: false,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let $etapas1 = document.querySelector(".etapas1")
let $etapas2A = document.querySelector(".a")
let $etapas2B = document.querySelector(".b")
let $etapas3 = document.querySelector(".etapas3")
document.addEventListener("click",(e)=>{



   if(e.target.matches(".swiper-button-next *")){
    $etapas1.classList.add("inv")
    $etapas3.classList.add("inv")
  }

   if(e.target.matches(".swiper-button-next *") && $etapas2A.classList.contains("inv")){
    $etapas2A.classList.remove("inv")
    $etapas2B.classList.remove("inv")
  }else if(e.target.matches(".swiper-button-next *") && !$etapas2A.classList.contains("inv")){
    $etapas2A.classList.add("inv")
    $etapas2B.classList.add("inv")
    $etapas3.classList.remove("inv")
  }else if(e.target.matches(".swiper-button-next *") && !$etapas2A.classList.contains("inv") && $etapas1.classList.contains("inv")){
    $etapas2A.classList.add("inv")
    $etapas2B.classList.add("inv")
    $etapas3.classList.remove("inv")
  }
 
   if(e.target.matches(".swiper-button-prev *") && !$etapas2A.classList.contains("inv")){
    $etapas2A.classList.add("inv")
    $etapas2B.classList.add("inv")
    $etapas1.classList.remove("inv")
  }else if(e.target.matches(".swiper-button-prev *") && $etapas2A.classList.contains("inv") && !$etapas3.classList.contains("inv")){
    $etapas2A.classList.remove("inv")
    $etapas2B.classList.remove("inv")
    $etapas3.classList.add("inv")

}
  
})