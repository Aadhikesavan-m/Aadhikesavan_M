const roles = [
  " Web Developer",
  " Full Stack Developer",
  " SEO Analyst",
  " Digital Marketing Expert",
  " Frontend Developer",
  " MERN Stack Developer"
];

const typingElement = document.getElementById("typing");
let roleIndex = 0;
let charIndex = 0;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseBetweenWords = 800; // pause before typing next word

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, typingSpeed);
  } else {
    setTimeout(deleteRole, 1500); // pause before deleting
  }
}

function deleteRole() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteRole, deletingSpeed);
  } else {
    roleIndex = (roleIndex + 1) % roles.length; // move to next role
    setTimeout(typeRole, pauseBetweenWords); // pause before typing next word
  }
}

// Start the typing effect
typeRole();

    // Navbar active link effect
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.onscroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
          a.classList.add("active");
        }
      });
    };

// EmailJS integration

document.getElementById('emailForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function() {
      alert('Message sent successfully!');
      document.getElementById('emailForm').reset();
    }, function(error) {
      alert('Failed to send message: ' + JSON.stringify(error));
    });
});

// Preloader functionality


window.addEventListener('load', function() {
  const preloader = document.getElementById('preloader');
  
  // Wait for 6 seconds before hiding preloader
  setTimeout(() => {
    preloader.style.opacity = '0';
    preloader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => { preloader.style.display = 'none'; }, 500);
  }, 4000);
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");
const closeMenu = document.querySelector(".close-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.add("show");
    hamburger.style.display = "none"; // hide hamburger
    closeMenu.style.display = "block"; // show close button
});

closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("show");
    hamburger.style.display = "block"; // show hamburger
    closeMenu.style.display = "none"; // hide close button
});

// Close menu when a link is clicked
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        hamburger.style.display = "block";
        closeMenu.style.display = "none";
    });
});
