var projects = [
  {title: 'ABC Book', img: './projects/abc book.jpg', githubLink: '', hostedLink: '', date: ''},
  {title: "APPLE", img: "./projects/apple.jpg", githubLink: "https://github.com/AbdullahBhatti1987/apple", hostedLink: "https://abdullahbhatti1987.github.io/apple/"},
  {title: "Attendance Portal", img: "./projects/attendance.jpg", githubLink: "https://github.com/AbdullahBhatti1987/AttendancePortal", hostedLink: "https://abdullahbhatti1987.github.io/AttendancePortal/"},
  {title: 'CALCULATOR', img: "./projects/calculator.jpg", githubLink: "https://github.com/AbdullahBhatti1987/calculatorapp", hostedLink: "https://abdullahbhatti1987.github.io/calculatorapp/", date: ''},
  {title: 'color Website', img: "./projects/colorwebsite.jpg", githubLink: "https://github.com/AbdullahBhatti1987/Palette-color", hostedLink: "https://abdullahbhatti1987.github.io/Palette-color/", date: ''},
  {title: 'Digital Watch', img: "./projects/digital watch.jpg", githubLink: "https://github.com/AbdullahBhatti1987/digital-watch", hostedLink: "https://abdullahbhatti1987.github.io/digital-watch/", date: ''},
  {title: 'eid Ul Adha ', img: "./projects/eid ul adha.jpg", githubLink: '', hostedLink: '', date: ''},
  {title: 'Even registration', img: "./projects/even registration.jpg", githubLink: '', hostedLink: '', date: ''},
  {title: 'Even n Odd', img: "./projects/evenodd.jpg", githubLink: '', hostedLink: '', date: ''},
  {title: 'Facebook Login ', img: './projects/facebook loginpage.jpg', githubLink: 'https://github.com/AbdullahBhatti1987/Facebook-login-page', hostedLink: 'https://abdullahbhatti1987.github.io/Facebook-login-page/', date: ''},
  {title: 'Flex Froggy', img: './projects/flexfroggy.jpg', githubLink: 'https://github.com/AbdullahBhatti1987/flexboxfroggy', hostedLink: '', date: ''},
  {title: 'Grid System', img: './projects/grid system.jpg', githubLink: 'https://github.com/AbdullahBhatti1987/Gridsystem', hostedLink: 'https://abdullahbhatti1987.github.io/Gridsystem/', date: ''},
  {title: 'Income Expense App', img: './projects/incomeexpense.jpg', githubLink: 'https://github.com/AbdullahBhatti1987/incomeandexpence', hostedLink: 'https://abdullahbhatti1987.github.io/incomeandexpence/', date: ''},
  {title: 'JS Basics', img: './projects/javascript basic1.jpg', githubLink: '', hostedLink: '', date: ''},
  {title: 'Light On/Off', img: './projects/light onoff.jpg', githubLink: 'https://github.com/AbdullahBhatti1987/Lightonoff', hostedLink: 'https://abdullahbhatti1987.github.io/Lightonoff/', date: ''},
  {title: 'Luck Game', img: './projects/luckgame.jpg', githubLink: '', hostedLink: '', date: ''},
  {title: 'Ludo', img: './projects/ludo.jpg', githubLink: '', hostedLink: '', date: ''},
  {title: 'Ministore', img: './projects/ministore.jpg', githubLink: 'https://github.com/AbdullahBhatti1987/MiniStore', hostedLink: 'https://abdullahbhatti1987.github.io/MiniStore/', date: ''},
  {title: 'Navbar', img: './projects/navbar.jpg', githubLink: '', hostedLink: '', date: ''},
  {title: 'Nice-01', img: './projects/nice-1.jpg', githubLink: 'https://github.com/AbdullahBhatti1987/nicepage', hostedLink: 'https://abdullahbhatti1987.github.io/nicepage/', date: ''},
  {title: 'Nice-02', img: './projects/nice-2.jpg', githubLink: '', hostedLink: '', date: ''},
  {title: 'Priodic Table', img: './projects/priodic table.jpg', githubLink: '', hostedLink: '', date: ''},
  {title: 'rozeepk', img: './projects/rozeepk.jpg', githubLink: '', hostedLink: '', date: ''},
  {title: 'shopingo', img: './projects/shopingo.jpg', githubLink: '', hostedLink: '', date: ''},
  {title: 'registration form', img: './projects/smit registration form.jpg', githubLink: '', hostedLink: '', date: ''},
  {title: 'smit portal', img: './projects/smit.jpg', githubLink: '', hostedLink: '', date: ''},
  {title: 'stop watch', img: './projects/stopwatch.jpg', githubLink: 'https://github.com/AbdullahBhatti1987/stopwatchbyabdullahbhatti', hostedLink: '', date: ''},
  {title: 'sunzine', img: './projects/sunzine.jpg', githubLink: 'https://github.com/AbdullahBhatti1987/sunzine', hostedLink: '', date: ''},
  {title: 'text editor', img: './projects/texteditor.jpg', githubLink: 'https://github.com/AbdullahBhatti1987/Text-Editor', hostedLink: 'https://abdullahbhatti1987.github.io/Text-Editor/', date: ''},
  {title: 'time table', img: './projects/timetable.jpg', githubLink: 'https://github.com/AbdullahBhatti1987/Time-table', hostedLink: 'https://abdullahbhatti1987.github.io/Time-table/', date: ''},
  {title: 'todo App', img: './projects/todoapp.jpg', githubLink: 'https://github.com/AbdullahBhatti1987/todoapp', hostedLink: 'https://abdullahbhatti1987.github.io/todoapp/', date: ''},
  {title: 'travel & tour', img: './projects/travel tour.jpg', githubLink: 'https://github.com/AbdullahBhatti1987/TravelTour', hostedLink: '', date: ''},
  {title: 'upwork clone', img: './projects/upwork clone.jpg', githubLink: '', hostedLink: '', date: ''}
];


var wrapper = document.getElementById("wrapper");
var container, counter = 0;

projects.forEach(function(data, ind) {
  if (counter % 4 === 0) {
    container = document.createElement("div");
    container.className = "container";
    wrapper.appendChild(container);
  }

  container.innerHTML += `
  <div class="card" id="${ind + 1}" style="background-image: url(${data.img});" alt="" onclick="tabdeel(this)"> 
    <div class="top">
      <p class="topp">${data.date}</p>
    </div>  
    <div class="row">
      <div class="icon"><span>${ind + 1}</span></div>
      <div class="description">
        <h4>${data.title || ''}</h4>
        <p>${ind + 1}</p>
      </div>
      <div class="buttons">
        <button onclick="event.stopPropagation(); window.open('${data.githubLink}', '_blank')">Github Code</button>
        <button onclick="event.stopPropagation(); window.open('${data.hostedLink}', '_blank')">Web View</button>
      </div>
    </div>
  </div>`;
  
  counter++;
});

var card = document.getElementsByClassName("card");

function tabdeel(element) {
  for (var i = 0; i < card.length; i++) {
    card[i].classList.remove('active');
    card[i].style.width = "220px";
    card[i].style.height = "400px";
  }
  element.classList.add('active');
  element.style.width = "600px";
  element.style.height = "400px";  // Adjust height if necessary
}




