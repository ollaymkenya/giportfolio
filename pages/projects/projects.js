class Projects {
    static render(component, projectsPage) {
        // render the main section
        const projects = projectsPage.content.cloneNode(true);
        component.insertBefore(projects, component.childNodes[3]);
    }

    static unrenderSelf(component, projectsPage) {
        // unrender the main section
        component.removeChild(projectsPage);
    }
}

export default Projects;