import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from "react-admin";

export default (type: any, params: any) => {
  console.log("type", type);

  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    const request = new Request("https://api.mznekip.com/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token, id, image }) => {
        localStorage.setItem("token", token);
        localStorage.setItem("id", id);
        localStorage.setItem("image", image);
      });
  } else if (type === AUTH_LOGOUT) {
    localStorage.removeItem("token");
    return Promise.resolve();
  } else if (type === AUTH_CHECK) {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  }
  return Promise.resolve();
};
