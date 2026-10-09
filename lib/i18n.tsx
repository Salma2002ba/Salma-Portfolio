"use client";

/* Contenu du portfolio selon la langue de la page : "/" en français, "/en" en anglais.
 * Les composants lisent leur texte avec useContent() au lieu d'importer lib/data.ts. */

import { createContext, useContext, type ReactNode } from "react";
import * as fr from "./data";
import * as enData from "./data.en";

export type Locale = "fr" | "en";
export type Content = typeof fr;

// Vérifie à la compilation que la version anglaise expose les mêmes contenus que la française
const enKeys: Record<keyof Content, unknown> = enData;
const en = enKeys as unknown as Content;

const ContentContext = createContext<Content>(fr);

export function ContentProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <ContentContext.Provider value={locale === "en" ? en : fr}>{children}</ContentContext.Provider>
  );
}

export function useContent(): Content {
  return useContext(ContentContext);
}
