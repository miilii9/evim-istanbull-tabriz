import http from "./httpService";

export function postBlog(data) {
  return http.post("/create-blog", data);
}
export function editBlog(data) {
  return http.post("/edit-blog", data);
}
export function deleteBlog(id) {
  return http.get(`/delete-blog/${id}`);
}

export function getBlogs() {
  return http.get("/get-blogs");
}

export function getBlog(id) {
  return http.get(`/get-blogs/${id}`);
}
