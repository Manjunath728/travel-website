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
// var mode = "light";

// function darkMode() {
//   if (mode == "light") {
//     mode = "dark";
//     document.getElementsByTagName("body")[0].style.backgroundColor = "#082032";
//     document.getElementById("navbar").style.backgroundColor = "#082032";
//     document.getElementById("logo").style.color = "white";
//     document.querySelectorAll(".nav-link,.nav-item").forEach((ele) => {
//       ele.style.color = "white";
//       console.log("done");
//     });
//     document.querySelectorAll(".book,.card,.packages").forEach((ele) => {
//       ele.style.backgroundColor = "#082032";
//       ele.style.color = "white";
//       ele.style.textShadow = "0px 1px 1px black";

//       console.log(ele);
//     });
//   } else {
//     mode = "light";
//     document.getElementById("navbar").style.backgroundColor = "#f9f9f9";
//     document.getElementById("logo").style.color = "black";
//     document.querySelectorAll(".nav-link,.nav-item").forEach((ele) => {
//       ele.style.color = " rgb(69, 67, 66)";
//       console.log("done");
//     });
//   }
// }

// let toggle = document.querySelector('input[type="checkbox"]');
// // console.log(toggle);

// toggle.addEventListener("change", (e) => {
//   if (e.target.checked) {
//     document.documentElement.setAttribute("data-theme", "dark");
//   } else {
//     document.documentElement.setAttribute("data-theme", "light");
//   }
// });

let toggle = document.querySelector('input[type="checkbox"]');
// console.log(toggle);

toggle.addEventListener("change", (e) => {
  if (e.target.checked) {
    console.log("reue");
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementsByTagName("body")[0].style.backgroundColor = "black";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    // console.log("cadc");
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


