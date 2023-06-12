import "styled-components"
import { lightTheme } from "../styles/themes/light"

export type ThemeType = typeof lightTheme

declare module "styled-components" {
  export type DefaultTheme = ThemeType
}
