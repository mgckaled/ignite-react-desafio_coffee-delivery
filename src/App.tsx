import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Router } from "./Routes"
import { CartContextProvider } from "./contexts/CartContext"

import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
