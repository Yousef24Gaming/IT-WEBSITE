document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");
  let posX = 0,
    posY = 0;
  let mouseX = 0,
    mouseY = 0;

  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    posX += (mouseX - posX) * 0.1; // Adjust the 0.1 to change the delay amount
    posY += (mouseY - posY) * 0.1;

    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;

    requestAnimationFrame(animate);
  }

  animate();
});

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector(".input-email");

  emailInput.addEventListener("click", function () {
    emailInput.style.borderColor = `var(--primary)`;
    emailInput.style.boxShadow = `0 0 20px rgba(20, 115, 210, 1.648)`;
    event.stopPropagation();
  });
  document.addEventListener("click", function () {
    emailInput.style.borderColor = "";
    emailInput.style.boxShadow = "";
  });
});
/*make the input with id search-course when you click the btn with id search-btn to search on the list of courses and show the result in the div with id */
document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.querySelector("#search-btn");
  const searchCourse = document.querySelector("#search-course");
  const courses = document.querySelectorAll(".course");

  searchBtn.addEventListener("click", function () {
    courses.forEach((course) => {
      if (course.getAttribute("data-course") === searchCourse.value) {
        course.style.display = "block";
      } else if (searchCourse.value == "") {
        course.style.display = "block";
      } else {
        course.style.display = "none";
      }
    });
  });
});
function search(event) {
  const pressedKey = event.key;
  if (pressedKey == "Enter") {
    const searchBtn = document.querySelector("#search-btn");
    const searchCourse = document.querySelector("#search-course");
    const courses = document.querySelectorAll(".course");

    searchBtn.addEventListener("click", function () {
      courses.forEach((course) => {
        if (course.getAttribute("data-course") === searchCourse.value) {
          course.style.display = "block";
        } else if (searchCourse.value == "") {
          course.style.display = "block";
        } else {
          course.style.display = "none";
        }
      });
    });
  }
}
/* a function to go to the div courses and making  a smooth scromm animation while going*/
function goToCourses() {
  const courses = document.querySelector(".courses");
  courses.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");
  const video = document.getElementById("rotate-video");
  const page = document.getElementById("main-page");

  if (video.readyState >= 3) {
    loadingScreen.style.display = "none";
    page.style.display = "block";
  } else {
    video.addEventListener("loadeddata", function () {
      loadingScreen.style.display = "none";
      page.style.display = "block";
    });
  }
});
document.getElementById("form-1").addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  window.location.href = `signup?email=${encodeURIComponent(email)}`;
});
