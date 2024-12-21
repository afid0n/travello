import { defineConfig } from "vite";
 
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
              home: "index.html",
              about: "about.html",
              destination: "contact.html",
              blog: "blog.html",
              singleBlog: "singleBlog.html",
              contact: "contact.html"
            }
        }
    }
})