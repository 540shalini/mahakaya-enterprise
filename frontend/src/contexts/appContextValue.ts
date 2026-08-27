import { createContext, useContext } from 'react';
export type Lang = 'en' | 'hi' | 'bn';
export const AppContext = createContext<{ dark: boolean; toggleDark: () => void; lang: Lang; setLang: (l: Lang) => void }>({ dark: false, toggleDark: () => {}, lang: 'en', setLang: () => {} });
export const useApp = () => useContext(AppContext);
