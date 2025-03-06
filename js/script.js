$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    



    // SCENE ONE

    let sceneOne = new ScrollMagic.Scene({
        triggerHook: 'onLeave',
    })
    .setPin('#triggerOne')
    .addIndicators()

    



    controller.addScene([
        sceneOne,
        sceneTwo,
        
    ])
   
});



var wh = window.innerHeight,
	$iphone = $('.iphone'),
	$innerS1 = $('.innerS1'),
	$innerS2 = $('.innerS2'),
	$innerS3 = $('.innerS3'),
	$innerS4 = $('.innerS4'),
	$screenHat = $('.screenHat'),
	$screenA = $('.screenA'),
	$screenB = $('.screenB'),
	$screenC = $('.screenC');

	// init
	var ctrl = new ScrollMagic.Controller({
	    globalSceneOptions: {
	        triggerHook: 'onLeave'
	    }
	});

	// Create scene
	$("section").each(function() {
	  
		new ScrollMagic.Scene({
			triggerElement: this,
			duration: '40%'
		})
		// .setPin(this)
        .setPin('#one',{pushFollowers: false})
		.addTo(ctrl);
	 
	});

	

	// iPhone intro animation Timeline
	var iphoneIntroTl = new TimelineMax();
	iphoneIntroTl
		.from($iphone, 1, {yPercent: 30,xPercent: 100, ease: Power4.easeInOut})
		.to($innerS1, 0.5, {opacity: 0, yPercent: -5, scale: 0.98}, '0');

	// iPhone back to stylesheet position
	new ScrollMagic.Scene({
		duration: '70%'
	})
	.setTween(iphoneIntroTl)
	// .triggerElement($('body')[0])
    .triggerElement('#one')
	.addTo(ctrl);
	
	// Animate the hat up, letter A in and fade in content of section 2
  var iphoneContentHat = new TimelineMax();
  iphoneContentHat		
    .to($screenHat, 1, {yPercent: -50, ease: Power4.easeOut})
    .fromTo($screenA, 1, {yPercent: 20, autoAlpha: 0, scale: 0.8}, {yPercent: 0, autoAlpha: 1, scale: 1, ease: Power4.easeOut}, '0')
    .from($innerS2, 1, {autoAlpha: 0}, '-=0.3');

  new ScrollMagic.Scene({
    offset: wh*0.6,
    triggerElement: $('body')[0],
    duration: '80%'
  })
  .setTween(iphoneContentHat)
  .addIndicators()
  .addTo(ctrl);

	// Animate letter A out, letter B in and fade in content of section 3
  var iphoneContent1Tl = new TimelineMax();
  iphoneContent1Tl		
    .to($screenA, 0.3, {yPercent: -30, autoAlpha: 0, ease: Power4.easeInOut})
    .fromTo($screenB, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut})
    .from($innerS3, 1, {autoAlpha: 0}, '-=0.7');

  new ScrollMagic.Scene({
    triggerElement: $('.innerS2 h2')[0],
    duration: '50%'
  })
  .setTween(iphoneContent1Tl)
  .addTo(ctrl);

	// Animate letter B out, letter C in and fade in content of section 4
  var iphoneContent2Tl = new TimelineMax();
  iphoneContent2Tl		
    .to($screenB, 0.3, {yPercent: -30, autoAlpha: 0, ease: Power4.easeInOut})
    .fromTo($screenC, 1, {yPercent: 20, autoAlpha: 0}, {yPercent: 0, autoAlpha: 1, ease: Power4.easeInOut})
    .from($innerS4, 1, {autoAlpha: 0}, '-=0.7');

  new ScrollMagic.Scene({
    triggerElement: $('.innerS3 h2')[0],
    duration: '50%'
  })
  .setTween(iphoneContent2Tl)
  .addTo(ctrl);













function setColor(e){
    if(e.type==="mouseover"){
        console.log('sdsd')
        tst.classList.add('open_plan')
    }else if( e.type==="mouseout"){
        tst.classList.remove('open_plan')
    }
}
const langPlanBar = document.querySelector('.btn-lang')
const tst = document.querySelector('.lang__plan')

langPlanBar.addEventListener("mouseover", setColor);
tst.addEventListener("mouseover", setColor);
langPlanBar.addEventListener("mouseout", setColor);
tst.addEventListener("mouseout", setColor);


// ALERT
const formClose = document.querySelector('.alert_cookies')
 function closeAlert(){
    // formClose.classList.add('close')
    gsap.to(".alert_cookies", { 
        opacity: 0, 
        y: 100,
        duration: 0.5,
        ease: "sine.inOut" });
 }



// GSAP

var tl = gsap.timeline();
tl.from(".logo", { 
    opacity: 0, 
    y: -140, 
    duration: 1,
    delay:0.5,
    ease: "elastic"})
  .from(".nav-bar", { 
    opacity: 0, 
    y: -140, 
    duration: 1,
    ease: "elastic" })
  .from(".user-bar", { 
    opacity: 0, 
    y: -140, 
    duration: 1,
    ease: "elastic" });




    // ANIM ICON
    var animationContainer = document.getElementById('animation-container');

    var animationContainer_hover = document.getElementById('animation-container-hover');
    
    var animation = bodymovin.loadAnimation({
        container: animationContainer,
        path: './img/icon/lopa_icon.json',
        renderer: 'svg',
        loop: false,
        autoplay: false
    });

    animationContainer_hover.addEventListener('mouseenter', function() {
        animation.play();
    });
    animationContainer_hover.addEventListener('mouseleave', function() {
        animation.stop();
    });

    var animationContainerTwo = document.getElementById('animation-container2');

    var animationContainer_hoverTwo = document.getElementById('animation-container-hover2');
    
    var animationD = bodymovin.loadAnimation({
        container: animationContainerTwo,
        path: './img/icon/earth.json',
        renderer: 'svg',
        loop: false,
        autoplay: false,
    });

    animationContainer_hoverTwo.addEventListener('mouseenter', function() {
        animationD.play();
    });
    animationContainer_hoverTwo.addEventListener('mouseleave', function() {
        animationD.stop();
    });
    var animationContainerThree= document.getElementById('animation-container3');

    var animationContainer_hoverThree = document.getElementById('animation-container-hover3');
    
    var animationT = bodymovin.loadAnimation({
        container: animationContainerThree,
        path: './img/icon/user.json',
        renderer: 'svg',
        loop: false,
        autoplay: false
    });

    animationContainer_hoverThree.addEventListener('mouseenter', function() {
        animationT.play();
    });
    animationContainer_hoverThree.addEventListener('mouseleave', function() {
        animationT.stop();
    });