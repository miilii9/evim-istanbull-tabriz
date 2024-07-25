import http from "./httpService";

export function postTag(data) {
  return http.post("/create-tag", data);
}
export function editTag(data) {
  return http.post("/edit-tag", data);
}
export function deleteTag(id) {
  return http.get(`/delete-tag/${id}`);
}

export function getTags() {
  return http.get("/get-tags");
}


