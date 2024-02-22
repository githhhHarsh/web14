const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smoothMobile: true,
    mobile: {
      smooth: true,
      inertia: 0.8,
      getDirection: true,
      breakpoint:0,
    },
});

document.querySelector("#rightnav button").addEventListener("click",function(){
    alert("Sorry..its Just a Demo Button")
})

document.querySelector("#page4-content button").addEventListener("click",function(){
    alert("Sorry..its Just a Demo Button")
})

document.querySelector("#left6 button").addEventListener("click",function(){
    alert("Sorry..its Just a Demo Button")
})

// LOADER

let tl=gsap.timeline()

tl.from("#loader h3",{
  x:50,
  opacity:0,
  duration:1.5,
  stagger:0.8
})
tl.to("#loader h3",{
  x:-40,
  opacity:0,
  duration:1,
  stagger:0.1
})
tl.to("#loader",{
  opacity:0,
})
tl.to("#loader",{
  opacity:0,
  display:"none"
})