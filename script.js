var typed = new Typed(".text" , {
    strings : ["Frontend Developer" , "Web Developer" , "Coder" , "Programmer"],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
})


const navLink = document.querySelectorAll('nav a');

navLink.forEach(link => {
link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active')); // Remove from all
    link.classList.add('active'); // Add to clicked
});
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
let current = "";

sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
    current = section.getAttribute("id");
    }
});

navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
    link.classList.add("active");
    }
});
});

// form

const scriptURL = 'https://script.google.com/macros/s/AKfycbyEfRYTyiWE9BuwS7pcmWzFPGpJLe2Hovl2CYNVo_np6uIPH6Pv8kU00g58jFSiASegmA/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!!"
        setTimeout(function(){
            msg.innerHTML = ""
        },4000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })