class About {
    static render(component, aboutPage) {
        // render the main section
        const about = aboutPage.content.cloneNode(true);
        component.insertBefore(about, component.childNodes[3]);

        // add event listener to faqs
        let accordionItems = document.querySelectorAll(".accordion-item");
        accordionItems.forEach((accordionItem, index) => {
            accordionItem.addEventListener("click", (e) => {
                e.target.style.maxHeight = e.target.style.maxHeight === "100px" ? this.activeInactveOptions(e, false) : this.activeInactveOptions(e, true);
            })
        })

        About.renderSummary(document.getElementById("contentSummary"), document.getElementById("aboutSummary"));
    }

    static renderSummary(component, aboutSummary) {
        const aboutSum = aboutSummary.content.cloneNode(true);
        component.appendChild(aboutSum);
        component.style.width = "80%";
    }

    static unrenderSelf(component, aboutPage) {
        // unrender the main section
        component.removeChild(aboutPage);
        About.unrenderSummary(document.getElementById("page"), document.getElementById("contentSummary"));
    }

    static unrenderSummary(component, aboutSummary){
        component.removeChild(aboutSummary);
        let newContentSummary = document.createElement("div");
        newContentSummary.setAttribute("id", "contentSummary");
        component.appendChild(newContentSummary);
    }

    static activeInactveOptions(e, active) {
        e.target.style.maxHeight = active ? "100px" : "32px";
        e.target.lastElementChild.style.transform = active ? "rotate(180deg)" : "rotate(0deg)";
    }
}

export default About;