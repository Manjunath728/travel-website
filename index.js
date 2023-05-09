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


/// D3 js


function showHistogram() {

  // Data
  var data = [5, 25, 10, 50, 30, 20, 30, 25, 60, 5];

  // Graph dimensions
  var width = 1000;
  var height = 500;
  var barPadding = 5;
  var barWidth = (width / data.length) - barPadding;
  var scaleFactor = height / d3.max(data);

  // Create a linear scale for the x-axis
  var xScale = d3.scaleLinear()
      .domain([d3.min(data), d3.max(data)])
      .range([0, width]);

  // Graph element
  var graph = d3.select("#graphArea")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

  // Animation and appending
  var bar = graph.selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("transform", function(d, i) {
          return "translate(" + (i * (barWidth + barPadding)) + "," + (height - d * scaleFactor) + ")";
      });

  // Width and Height of individual data elements
  bar.append("rect")
      .attr("width", barWidth)
      .attr("height", function(d) {
          return d * scaleFactor;
      });

  // Text inside the graph
  bar.append("text")
      .attr("x", barWidth / 2)
      .attr("y", function(d) {
          return -10 - d * scaleFactor;
      })
      .text(function(d) {
          return d;
      });

    }