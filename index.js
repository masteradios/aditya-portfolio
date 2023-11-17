var box1=document.getElementsByClassName("skill-box")[0];
box1.addEventListener('mouseover',function handlemouseover()
{
   box1.classList.add("img-hover");
   box1.querySelector("img").setAttribute("src","./assets/click.png")

});

box1.addEventListener('mouseout',function handlemouseout()
{
    box1.querySelector("img").setAttribute("src","./assets/click (1).png")
   box1.classList.remove("img-hover");

});

var box2=document.getElementsByClassName("skill-box")[1];
box2.addEventListener('mouseover',function handlemouseover()
{
   box2.classList.add("img-hover");
   box2.querySelector("img").setAttribute("src","./assets/web-programming (1).png")

});

box2.addEventListener('mouseout',function handlemouseout()
{
    box2.querySelector("img").setAttribute("src","./assets/web-programming.png")
   box2.classList.remove("img-hover");

});

var box3=document.getElementsByClassName("skill-box")[2];
box3.addEventListener('mouseover',function handlemouseover()
{
   box3.classList.add("img-hover");
   box3.querySelector("img").setAttribute("src","./assets/smartphone.png")

});

box3.addEventListener('mouseout',function handlemouseout()
{
    box3.querySelector("img").setAttribute("src","./assets/smartphone (1).png")
   box3.classList.remove("img-hover");

});