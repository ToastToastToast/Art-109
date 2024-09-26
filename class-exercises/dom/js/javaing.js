/*let pageTitle = document.querySelector("#page-title");




document.getElementById("page-title").style.color = "blue";

setTimeout(function()
{document.querySelector(".text-block").innerHTML = "new text!";
console.log("Timeout worked yay");
pageTitle.style.color = "pink";
}
,3000);


console.log("Hello");

//click event on header changes color
document.querySelector("header").onclick = function(){
    console.log("Clicked Header you weirdo.");
    document.querySelector("body").style.backgroundColor = "yellow";
}
*/


document.querySelector("#image-0").addEventListener("click",function()
{
    document.querySelector("#image-1").style.visibility = "visible";
    alert("bark bark bark");
    //can make the image "hidden" or "visible"
})
document.querySelector("#image-1").addEventListener("click",function()
{
    document.querySelector("#image-2").style.visibility = "visible";
})
document.querySelector("#image-2").addEventListener("click",function()
{
    document.querySelector("#image-3").style.visibility = "visible";
})
document.querySelector("#image-3").addEventListener("click",function()
{
    //document.querySelector("#image-3").style.visibility = "visible";
})
   //is the same as.... 

   /*
   let divs = document.querySelectorAll(".image-div");

   divs.forEach((div) => {
    div.addEventListener("click", () => {
        console.log("foreach worked");
        div.style.visibility = "hidden";
    });
   });
*/