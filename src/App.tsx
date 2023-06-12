import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>Coffee Delivery</h1>
      </div>

      <GlobalStyle />
    </ThemeProvider>
  )
}

