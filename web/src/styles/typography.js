import { css } from 'styled-components'

const typography = css`
  body {
    font-family: nimbus-sans, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    font-style: normal;
    font-kerning: normal;
    font-variant-ligatures: common-ligatures contextual;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  h1 + p,
  h2 + p,
  h3 + p,
  h4 + p {
    margin-top: 0;
  }

  h1 {
    font-size: 6rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 3.75rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
  h3 {
    font-size: 3rem;
    line-height: 1.125;
    margin-bottom: 0.875rem;
  }
  h4 {
    font-size: 2.125rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
  h5 {
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }
  h6 {
    font-size: 1.25rem;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    max-width: 45rem;
  }
`

export default typography
