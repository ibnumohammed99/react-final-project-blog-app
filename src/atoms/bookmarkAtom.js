import { atom } from "jotai";

export const bookmarkAtom = atom(
  JSON.parse(localStorage.getItem("bookmarks")) || [],
);
