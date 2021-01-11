
// navbar

 const header=document.getElementsByTagName("header")[0];
      const navbar=document.querySelector(".navbar");
       window.addEventListener('scroll',function(){
           if(document.documentElement.scrollTop>0){
             header.classList.add("sticky");
             navbar.classList.add("show")
           }
       })


// carousel

  $('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        1352:{
            items:1
        }
    }
})

// scroll btn

const scrollBtn=document.querySelector(".scrollTop")

window.addEventListener("scroll", function(){
	if(document.documentElement.scrollTop>500){
		scrollBtn.style.display= "block";
	}else{
		scrollBtn.style.display= "none";
	}
})

scrollBtn.addEventListener("click",function(){
	document.documentElement.scrollTop=0;
})


// modal
const modal=document.querySelector(".modal");
const closemodal=document.querySelector(".close");



window.onload=setTimeout(showModal,3000)

function showModal(){
	modal.style.display="block"
}

closemodal.addEventListener("click", function(){
	modal.style.display="none"
})

window.addEventListener("click",function(e){
	if(e.target==modal){
		modal.style.display="none"
	}
})





// counterup

$('.count').counterUp({
    delay: 10,
    time: 1000
});


// counterup with javascript
// const count = document.querySelector( '.count' )

// // Start counting, do this on DOM ready or with Waypoints.
// counterUp( count, {
//     duration: 1000,
//     delay: 16,
// } )

















   