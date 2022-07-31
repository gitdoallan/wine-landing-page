import axios from "axios";

export const apiProducts = axios.create({
  baseURL: "https://wine-back-test.herokuapp.com",
});

export const apiPlans = axios.create({
  baseURL: "https://wine-club-proxy.herokuapp.com",
});
