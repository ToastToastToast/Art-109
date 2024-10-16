//ensure that our js runs only after the HTML content is loaded
document.addEventListener("DOMContentLoaded", function (){
    //grab all elements with the class project-item
    const projectItems = document.querySelectorAll(".project-item");

    function checkSlide(){
        //Loop thru the projectItems
        projectItems.forEach((projectItem) => {
            //Calculate the point where the top of the element is halfway into the viewport
            const slideInAt = window.scrollY + window.innerHeight - projectItem.clientHeight/2;
            //Calculate the bottom of the project-item element
            const itemBottom = projectItem.offsetTop + projectItem.clientHeight;

            //Check if the element is halfway show or scrollpast
            const isHalfShown = slideInAt > projectItem.offsetTop;
            const isNotScrolledPast = window.scrollY < itemBottom;

            // if conidition are met, we add slide-in class else we remove it.
            if(isHalfShown && isNotScrolledPast){
                projectItem.classList.add("slide-in");
            }
            else{
                projectItem.classList.remove("slide-in");
            }


        })
    }


    window.addEventListener("scroll", checkSlide);
    window.addEventListener("resize", checkSlide);

    checkSlide();
})