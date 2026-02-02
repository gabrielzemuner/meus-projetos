import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

type IUiContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const UiContext = createContext<IUiContext | null>(null); // '{} as IUIContext' => estamos 'enganando' o typescript, mas isso pode gerar um problema pq se não envolvermos o código que queremos o context com provider (ex: <UiContextProvider>código...</UiContextProvider>, o typescript vai continuar com autocomplete e vai gerar erro na aplicação)

export const useUi = () => {
  const context = useContext(UiContext);
  if (context === null) throw new Error('useContext deve estar dentro do Provider')
  return context;
};

export const UiContextProvider = ({ children }: PropsWithChildren) => {
  const [dark, setDark] = useState(false);
  return (
    <UiContext.Provider value={{ dark, setDark }}>
      {children}
    </UiContext.Provider>
  );
};
