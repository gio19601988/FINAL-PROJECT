//ბურგერ მენიუ
"use strict";
const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active")
    navmenu.classList.remove("active")
}))

// header bg on scroll  skrollllllllllllllllllllllllllllllllllllllllllllllllllllllllll
let navigation = document.getElementById("navbar");

 window.onscroll = function () {
   if (document.documentElement.scrollTop > 500) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
};

//scroll to top

let scrollBtn1 = document.getElementById("fa-solid fa-circle-arrow-up");

scrollBtn1.addEventListener("click", function () {
  window.scrollTo({
  top: 0,
  behavior: "smooth",
 });
});




//სლაიდ ბარი //სლაიდ ბარი //სლაიდ ბარი //სლაიდ ბარი//სლაიდ ბარი //სლაიდ ბარი//სლაიდ ბარი //სლაიდ ბარი//სლაიდ ბარი //სლაიდ ბარი

let dataSlider = [
    {
      id: 1,
      imageUrl:
        "https://mkurnali.ge/media/images/stories/newhosp.jpg",
      title: "მრავალპროფილური კლინიკები",
    },
    {
      id: 2,
      imageUrl:
        "https://www.newhospitals.ge/res/upload/photo/9484c483cfd7d35f452ec0c8674ec2b3.jpg",
      title: "მონოპროფილური კლინიკები",
    },
    {
      id: 3,
      imageUrl:
        "https://www.newhospitals.ge/res/upload/photo/a5bfaa5abdd4717e3475e7c89c8c27f2.jpg",
      title: "სამედიცინო მომსახურებები",
    },
    {
      id: 4,
      imageUrl:
        "https://cdn2.ipn.ge/media/uploads/2019/06-21/niu_hospital.jpg",
      title: "უცხოეთში მკურნალობა",
    },
    {
      id: 6,
      imageUrl:
        "https://pia.ge/uploads/files/2021/06/13/27758/niu-hospitalsi_w_h.jpeg",
      title: "აქციები და ფასდაკლებები",
    },
    {
      id: 7,
      imageUrl:
        "https://cdn.1tv.ge/app/uploads/2021/06/1623656800-1570785440-%E1%83%9C%E1%83%98%E1%83%A3-%E1%83%B0%E1%83%9D%E1%83%A1%E1%83%9E%E1%83%98%E1%83%A2%E1%83%90%E1%83%9A%E1%83%A1%E1%83%98.jpg",
      title: "უფასო სამედიცინო მომსახურებები",
    },
    {
      id: 8,
      imageUrl:
        "https://cdn2.ipn.ge/media/uploads/2019/06-21/niu_hospital.jpg",
      title: "ექიმები",
    },
  ];
  
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");
  const sliderContent = document.getElementById("slider-content");
  const dotItem = document.getElementsByClassName('dot');
  let sliderIndex = 0;
  let link1 = document.getElementsByClassName('link');



  // ამ ფუნქციის საშუალებით ვქმნი დივ ტეგს
  function createDivTag(item) {
    // item = მასივიდან დაბრუნებული იტემ
    const div = document.createElement("div");
    div.style.backgroundImage=`url(${item.imageUrl})`;
    div.classList.add("slide");
    return div;
  }
  
   
  // ამ ფუნქციის საშუალებიტ ვქმნი სათაურის ტეგს
  function createh2Tag(item) {
    const title = document.createElement("h2");
    title.textContent = item.title;
    return title;
  }
  
  function createDots(item) {
    const dotsParent = document.createElement("div");
    dotsParent.classList.add("dotsWraper");
  
    dataSlider.forEach((element) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.setAttribute("data-id", element.id - 1);
  
      dot.addEventListener("click", function (event) {
        let id = event.target.getAttribute("data-id");
        sliderIndex = id;
        setSlide();
      });
      dotsParent.appendChild(dot);
    });
  
    return dotsParent;
  }
  
  // მთავარი ფუქნცია რომელიც განსაზღვრავს რომელი სლიდი უნდა გამოჩნდეს
  function setSlide() {
    sliderContent.innerHTML = " ";
    const slideDiv = createDivTag(dataSlider[sliderIndex]);
    const h2Tag = createh2Tag(dataSlider[sliderIndex]);
    const dots = createDots();
  
    
    sliderContent.appendChild(slideDiv);
    sliderContent.appendChild(dots);
    sliderContent.appendChild(h2Tag);
    currentDotActive();
  }
  
  function currentDotActive() {
      dotItem[sliderIndex].classList.add('active');
  }
  
  // click eventebi
  function arrowLeftClick() {
    if (sliderIndex == 0) {
      sliderIndex = dataSlider.length - 1;
      setSlide();
      return;
    }
    // sliderIndex = sliderIndex - 1;
    // sliderIndex -= 1;
    sliderIndex--;
    setSlide();
  }
  function arrowRightClick() {
    if (sliderIndex == dataSlider.length - 1) {
      sliderIndex = 0;
      setSlide();
      return;
    }
    sliderIndex++;
    setSlide();
  }
  
  arrowLeft.addEventListener("click", arrowLeftClick);
  arrowRight.addEventListener("click", arrowRightClick);
  
   setInterval(() => {
    arrowRightClick();
  }, 3000);
  
  setSlide();

// ვებ სლაიდერი // ვებ სლაიდერი // ვებ სლაიდერი // ვებ სლაიდერი// ვებ სლაიდერი // ვებ სლაიდერი// ვებ სლაიდერი // ვებ სლაიდერი// ვებ სლაიდერი // ვებ სლაიდერი
  
// You need to transpile this code
//import { Splide } from '@splidejs/splide';

var splide = new Splide( '.splide' );
splide.mount();
