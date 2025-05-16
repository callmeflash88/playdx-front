import Cookies from "js-cookie";

export const saveTokenFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");

  if (token) {
    Cookies.set("token", token, { expires: 7 }); // expires in 7 days
    const url = new URL(window.location.href);
    url.searchParams.delete("token");
    window.history.replaceState({}, document.title, url.toString());
  }
};
