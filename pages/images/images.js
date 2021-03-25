class Images {
    static render(component, imagesPage) {
        // render the main section
        const images = imagesPage.content.cloneNode(true);
        component.insertBefore(images, component.childNodes[3]);
        component.style.display = "flex";

        const clickableImages = document.querySelectorAll(".images-collection__item-image img");
        clickableImages.forEach((clickableImage) => {
            clickableImage.addEventListener("click", Images.showImage);
        });
    }

    static showImage(e){
        const contentSummary =  document.querySelector("#contentSummary");
        contentSummary.style.width= "100%";
        contentSummary.style.minHeight= "calc(100vh - 110px)";
        contentSummary.style.background = "#141518";
        Images.renderImage(e, contentSummary);
        Images.renderOtherImages(e, contentSummary);
    }

    static renderImage(e, component){
        let imageSummary = document.querySelector("#image-content__summary").content.cloneNode(true);
        if(!component.hasChildNodes()){
            component.appendChild(imageSummary);
        }
        let imageLink = e.target.getAttribute("src");
        let imageTitle = e.target.parentElement.parentElement.lastElementChild.firstElementChild.innerText;
        console.log(imageTitle);
        document.querySelector(".clickedImage img").setAttribute("src", imageLink);
        document.querySelector(".clickedImage .name").innerText= imageTitle;
    }

    static renderOtherImages(e, component){
        const clickableUnclickedImages = [];
        const clickableImages = document.querySelectorAll(".images-collection__item-image img");
        let newImages = document.querySelectorAll(".otherImages .clickedImage");
        for(let i = 0; i < clickableImages.length; i++){
            if(clickableImages[i] !== e.target){
                clickableUnclickedImages.push(clickableImages[i].parentElement.parentElement);
            }
        }

        newImages.forEach((newImage, index) => {
            newImage.innerHTML = "";
            const toPushUnclicked = clickableUnclickedImages[index].cloneNode(true);
            newImage.appendChild(toPushUnclicked);
        });
    }

    static unrenderSelf(component, imagesPage) {
        // unrender the main section
        component.removeChild(imagesPage);
        component.style.display = "grid";
        let contentSummary = document.querySelector("#contentSummary");
        contentSummary.remove();
        let newContentSummary = document.createElement("div");
        newContentSummary.setAttribute("id", "contentSummary");
        component.appendChild(newContentSummary);
    }
}

export default Images;