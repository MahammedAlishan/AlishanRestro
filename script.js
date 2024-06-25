let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('menu-bars');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

section.forEach(sec =>{
  let top = window.scrollY;
  let height = sec.offsetHeight;
  let offset = sec.offsetTop - 150;
  let id = sec.getAttribute('id');

  if(top => offset && top < offset + height){
    navLinks.forEach(links =>{
      links.classList.remove('active');
      // document.querySelector('header.navbar a[href*="' + id + '"]').classList.add('active');
      var element = document.querySelector('header.navbar a[href*="' + id + '"]');
if (element) {
    element.classList.add('active');
}

    });
  };

})

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

// cart js 
var div = document.getElementById('cart');
var display = 1;

function hideShow(){
  if(display == 1){
    div.style.display = 'block';
    display = 0;
  }
  else{
    div.style.display = 'none';
    display =1;
  }
}

  var cartItems = document.getElementById('cartItem');
  var boxs = document.querySelector('.box').classList.toggle('active');

// function cartBtn(){
 document.querySelector('.btn').onclick = () =>{
   cartItems.append(boxs);
 }
// }

// var addItemId = 0;
// function addToCart(item){
//   addItemId += 1;
//   var cartItems = document.getElementById('cartItem');
//   var boxs = document.getElementById('box1');
//   boxs.append()
//   cartItems.append('boxs');
// }

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      0:{
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2.5,
      },
    }
  });

  // login part
function func(){
  var email = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  if(email=='Alishan@gmail.com' && pass=='123'){
    alert("wrong entry !")
  }
  else{
    alert("login success full !")                                   
    window.location.assign("index.html")
  }
}

function openlogin(){
  window.location.assign("login.html")
}

// loader part

  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut(){
    setInterval(loader, 5000);
  }
  window.onload = fadeOut();


  // form script 

  function myfunc(event) {
    event.preventDefault();

    var full_name = document.getElementById("full_name").value;
    var full_num = document.getElementById("full_num").value;
    var your_order = document.getElementById("your_order").value;
    var add_food = document.getElementById("add_food").value;
    var how_much = document.getElementById("how_much").value;
    var date_time = document.getElementById("date_time").value;
    var address = document.getElementById("address").value;
    var message = document.getElementById("message").value;

    localStorage.setItem('is_full_name', full_name);
    localStorage.setItem('is_your_order', your_order);
    localStorage.setItem('is_add_food', add_food);
    localStorage.setItem('is_full_num', full_num);
    localStorage.setItem('is_how_much', how_much);
    localStorage.setItem('is_date_time', date_time);
    localStorage.setItem('is_address', address);
    localStorage.setItem('is_message', message);
  }

  // myfunc()

