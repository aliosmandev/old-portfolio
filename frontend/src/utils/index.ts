export const getMediaURL: (url: string) => string = (url) => {
  return import.meta.env.VITE_BACKEND_URL + url;
};
