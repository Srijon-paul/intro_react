import { createContext, useContext } from "react";

export const ThemeContext = createContext({
	themeMode: "light",
	darkTheme: () => {},
	lightTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
	return useContext(ThemeContext);	
}

// this is a different way of using useContext since we arte wrapping everything inside one one file which earlier we are doing using separate variables multiple times in different places