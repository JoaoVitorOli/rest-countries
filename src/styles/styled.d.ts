import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string,

    color: {
      primary: string,
      background: string,
      text: string,
      hoverButton: string,
      shadow: string,
    }
  }
}
