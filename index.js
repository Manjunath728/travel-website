const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.target.classList);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElementsX = document.querySelectorAll(".hiddenX,.hiddenY,.pop");
console.log(hiddenElementsX);
hiddenElementsX.forEach((element) => {
  observer.observe(element);
});

let toggle = document.querySelector('input[type="checkbox"]');


toggle.addEventListener("change", (e) => {
  if (e.target.checked) {
    console.log("reue");
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    
  }
});


  