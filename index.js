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

const hiddenElementsX = document.querySelectorAll(".hiddenX,.hiddenY,.pop,.fade");
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



/// animating text


const textanime = `India is a land of diverse cultures, languages, and religions, offering visitors an unforgettable
  experience. From the bustling cities of Delhi and Mumbai to the serene backwaters of Kerala, there is
  something for everyone in India. India offers visitors an unforgettable experience with its diverse culture,
  rich history, stunning architecture, and delicious cuisine. It is a must-visit destination for anyone
  looking for an adventure.`.split("");

let i = 0;
const animeEl = document.getElementById("anime");

const intervalId = setInterval(() => {
  if (i < textanime.length) {
    animeEl.innerHTML += textanime[i];
    
    i++;
  } else {
    clearInterval(intervalId);
  }
}, 25);


