class Blogs {
    static render(component, blogsPage) {
        // render the main section
        const blogs = blogsPage.content.cloneNode(true);
        component.insertBefore(blogs, component.childNodes[3]);
    }

    static unrenderSelf(component, blogsPage) {
        // unrender the main section
        component.removeChild(blogsPage);
    }
}

export default Blogs;