class Home {
    static render(component, homePage) {
        // render the main section
        const home = homePage.content.cloneNode(true);
        component.insertBefore(home, component.childNodes[3]);

        // add event listener to faqs
        let accordionItems = document.querySelectorAll(".accordion-item");
        accordionItems.forEach((accordionItem, index) => {
            accordionItem.addEventListener("click", (e) => {
                e.target.style.maxHeight = e.target.style.maxHeight === "100px" ? this.activeInactveOptions(e, false) : this.activeInactveOptions(e, true);
            })
        })

        Home.renderSummary(document.getElementById("contentSummary"), document.getElementById("homeSummary"));
    }

    static renderSummary(component, homeSummary) {
        const homeSum = homeSummary.content.cloneNode(true);
        component.appendChild(homeSum);
        component.style.width = "80%";
    }

    static unrenderSelf(component, homePage) {
        // unrender the main section
        component.removeChild(homePage);
        Home.unrenderSummary(document.getElementById("page"), document.getElementById("contentSummary"));
    }

    static unrenderSummary(component, homeSummary){
        component.removeChild(homeSummary);
        let newContentSummary = document.createElement("div");
        newContentSummary.setAttribute("id", "contentSummary");
        component.appendChild(newContentSummary);
    }

    static activeInactveOptions(e, active) {
        e.target.style.maxHeight = active ? "100px" : "32px";
        e.target.lastElementChild.style.transform = active ? "rotate(180deg)" : "rotate(0deg)";
    }
}

export default Home;