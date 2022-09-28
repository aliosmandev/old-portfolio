import axiosInstance from "./base";
import { useAxios } from "@vueuse/integrations/useAxios";

export const getGlobal = () =>
  useAxios("/global?populate[projects][populate]=banner&populate[skills][populate]=image", axiosInstance);
