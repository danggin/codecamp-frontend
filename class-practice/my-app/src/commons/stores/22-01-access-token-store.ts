import { create } from "zustand";

export const useAccessTokenStore = create((set) => ({
  accessToken: "",
  setAccessToken: (newAccessToken: any) =>
    set(() => ({ accessToken: newAccessToken })),
}));
