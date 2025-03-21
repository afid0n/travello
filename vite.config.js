import { defineConfig } from "vite";
 
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
              main: "index.html",
              about: "about.html",
              destination: "destination.html",
              blog: "blog.html",
              singleBlog: "singleBlog.html",
              contact: "contact.html",
            }
        }
    }
})