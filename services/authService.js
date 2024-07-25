import http from "./httpService";

export function sendMessage(data) {
  return http.post("/create-message", data);
}

export function login(data) {
  return http.post("/login", data);
}

export function signup(data) {
  return http.post("/signup", data);
}

export function getMessages() {
  return http.get("/get-messages");
}
