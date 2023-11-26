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
               default:
                  console.log(skillinnerHTML);

      }
   });

}

for (var i = 0; i < numberofCards; i++) {
   var skill = document.querySelectorAll(".skill-box")[i].addEventListener("mouseout", function () {
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