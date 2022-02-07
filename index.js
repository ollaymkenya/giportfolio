// pages
import Home from "https://ollaymkenya.github.io/pages/home/home.js";
import Projects from "https://ollaymkenya.github.io/pages/projects/projects.js";
import Images from "https://ollaymkenya.github.io/pages/images/images.js";
import Blogs from "https://ollaymkenya.github.io/pages/blogs/blogs.js";
import About from "https://ollaymkenya.github.io/pages/about/about.js";

//components
import BottomNav from "https://ollaymkenya.github.io/components/bottomnav/bottomnav.js";
import TopNav from "https://ollaymkenya.github.io/components/topnav/topnav.js";
import Footer from "https://ollaymkenya.github.io/components/footer/footer.js";

// pages selectors
const page = document.querySelector("#page");
const homePage = document.querySelector("#homePage");
const projectsPage = document.querySelector("#projectsPage");
const imagesPage = document.querySelector("#imagesPage");
const blogsPage = document.querySelector("#blogsPage");
const aboutPage = document.querySelector("#aboutPage");

// component selectors
const topnav = document.querySelector("#topnav");
const bottomnav = document.querySelector("#bottomnav");
const footer = document.querySelector("#footer");

window.onload = () => {
   // render compoents
   BottomNav.render(topnav, "top-nav");
   TopNav.render(bottomnav, "bottom-nav");
   Footer.render(footer, "page-footer");

   // render home page
   Page.firstRender(page, Home, "Home", homePage);
}

const pages = {
   "Home": {
      itemPage: Home,
      component: homePage
   },
   "Projects": {
      itemPage: Projects,
      component: projectsPage
   },
   "Images": {
      itemPage: Images,
      component: imagesPage
   },
   "Blogs": {
      itemPage: Blogs,
      component: blogsPage
   },
   "About": {
      itemPage: About,
      component: aboutPage
   }
}

class Page {
   static currentRender;

   static firstRender(page, Home, pageName, homePage) {
      // rendering Home page for the first time
      Home.render(page, homePage);
      this.currentRender = Home;

      // menu-items
      const menuItems = document.querySelectorAll(".menu-item");
      const pageLinks = document.querySelectorAll(".page-link");
      const toolLinks = document.querySelectorAll(".menu-tool");
      // adding event listeners to menus
      menuItems.forEach(menuItem => {
         menuItem.addEventListener("click", this.changeRenderPage);
      });

      pageLinks.forEach(pageLink => {
         pageLink.addEventListener("click", this.changeRenderPage);
      });

      // tool links
      toolLinks.forEach(toolLink => {
         toolLink.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(".tool-section").classList.add("active");
            setTimeout(() => {
               document.querySelector(".tool-section").classList.remove("active");
            }, 2000);
         })
      })
   }

   // change page to be rendered
   static changeRenderPage(e) {
      e.preventDefault();

      const pageName = e.target.dataset.value;

      // changing active link
      Page.changeActiveLink(e.target.dataset.value);

      // rendering the correct page
      Page.unrender(page, Page.currentRender);
      console.log(pageName);
      Page.render(page, pages[pageName].itemPage, pageName, pages[pageName].component);
   }

   static changeActiveLink(activeLink) {
      const menuItems = document.querySelectorAll(".menu-item");
      Page.deactivateAllMenuItems(menuItems);
      menuItems.forEach(menuItem => {
         menuItem.classList.add(menuItem.dataset.value === activeLink ? "active" : "not");
      });
   }

   static render(page, view, pageName, component) {
      // rendering a page
      view.render(page, component);
      this.currentRender = view;

      const pageLinks = document.querySelectorAll(".page-link");

      pageLinks.forEach(pageLink => {
         pageLink.addEventListener("click", this.changeRenderPage);
      });
   }

   static unrender(page, view) {
      let component = document.querySelector("#content");
      console.log({ view });
      view.unrenderSelf(page, component);
   }

   static deactivateAllMenuItems(menuItems) {
      menuItems.forEach((menuItem) => {
         menuItem.classList.remove("active");
      });
   }
}