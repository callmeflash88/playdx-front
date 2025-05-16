import { useQuery } from "@tanstack/react-query";
import { api } from "./axios";
import { useEffect } from "react";
import Cookies from "js-cookie";

const getLicense = async () => {
  const { data } = await api.get("/license/getLicense");
  return data;
};

export const useAuth = () => {
  const token = Cookies.get("token");

  const query = useQuery({
    queryKey: ["license"],
    queryFn: getLicense,
    enabled: !!token, // не запускать, если нет токена
    retry: false,
  });

  // редирект если токена нет или ошибка
  useEffect(() => {
    if (!token || query.isError) {
      const redirectUrl = encodeURIComponent(window.location.href);
      window.location.href = `http://3.145.90.25:3100/license/getLicense`;
    }
  }, [token, query.isError]);

  return query;
};
