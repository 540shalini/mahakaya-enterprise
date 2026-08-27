import { useMemo, useState, type ReactNode } from 'react';
import { AppContext, type Lang } from './appContextValue';
export function AppProvider({ children }: { children: ReactNode }) { const [dark, setDark] = useState(false); const [lang, setLang] = useState<Lang>('en'); const value = useMemo(() => ({ dark, toggleDark: () => setDark((v) => !v), lang, setLang }), [dark, lang]); return <AppContext.Provider value={value}><div className={dark ? 'dark' : ''}>{children}</div></AppContext.Provider>; }
