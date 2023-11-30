var numberofCards = document.querySelectorAll(".skill-box").length;
for (var i = 0; i < numberofCards; i++) {
   var skill = document.querySelectorAll(".skill-box")[i].addEventListener("mouseover", function () {
      var skillinnerHTML = this.querySelector("h2").innerHTML;
      switch (skillinnerHTML) {
         case "Website Design":
            this.classList.add("img-hover");
            this.querySelector("img").setAttribute("src", "./assets/click.png");
            break;
         case "Development":
            this.classList.add("img-hover");
            this.querySelector("img").setAttribute("src", "./assets/web-programming (1).png");
            break;
         case "Mobile App Design":
            this.classList.add("img-hover");
            this.querySelector("img").setAttribute("src", "./assets/smartphone.png");
            break;
            case "Power BI Visualizations":
               this.classList.add("img-hover");
               this.querySelector("img").setAttribute("src", "./assets/monitor (1).png");
               break;
         default:
            console.log(skillinnerHTML);

      }
   });

}

for (var i = 0; i < numberofCards; i++) {
   document.querySelectorAll(".skill-box")[i].addEventListener("mouseout", function () {
      var skillinnerHTML = this.querySelector("h2").innerHTML;
      switch (skillinnerHTML) {
         case "Website Design":
            this.classList.remove("img-hover");
            this.querySelector("img").setAttribute("src", "./assets/click (1).png");
            break;
         case "Development":
            this.classList.remove("img-hover");
            this.querySelector("img").setAttribute("src", "./assets/web-programming.png");
            break;
         case "Mobile App Design":
            this.classList.remove("img-hover");
            this.querySelector("img").setAttribute("src", "./assets/smartphone (1).png");
            break;
            case "Power BI Visualizations":
               this.classList.remove("img-hover");
               this.querySelector("img").setAttribute("src", "./assets/monitor.png");
               break;
            
         default:
            console.log(skillinnerHTML);

      }
   });

}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
         behavior: 'smooth'
      });
   });
});

// var skill = document.querySelectorAll(".skill-box")[0]
// var skillinnerHTML = skill.querySelector("h2").innerHTML;
// skill.querySelector("button").addEventListener("click", function () {
//    window.open(
//       'https://stackoverflow.com/questions/34082002/html-button-opening-link-in-new-tab',
//       '_blank'
//    );
// })

for (var i = 0; i < numberofCards; i++) {
document.querySelectorAll(".skill-box")[i].querySelector("button").addEventListener("click", function () {
      var skillinnerHTML = this.parentNode.querySelector("h2").innerHTML;
      switch (skillinnerHTML) {
         case "Website Design":
            window.open(
               '',
               '_blank'
            );
            break;
         case "Development":
            window.open(
               'https://www.linkedin.com/posts/aditya-kushwaha-264467269_education-app-on-flutter-introducing-gyaansaathi-activity-7135566985714688000-UgsU?utm_source=share&utm_medium=member_desktop',
               '_blank'
            );
            break;
         case "Mobile App Design":
            window.open(
               'https://www.linkedin.com/posts/aditya-kushwaha-264467269_created-messaging-app-using-fluttercurrently-activity-7101079131483717632-CT9Y?utm_source=share&utm_medium=member_desktop',
               '_blank'
            );
            break;
            case "Power BI Visualizations":
               window.open(
                  'https://github.com/masteradios/cricket-analysis',
                  '_blank'
               );
               break;
            
         default:
            console.log(skillinnerHTML);

      }
   });

}