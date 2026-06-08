// Scroll Animation

const hiddenElements =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach((el)=>{
observer.observe(el);
});


// Contact Form

const form =
document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});