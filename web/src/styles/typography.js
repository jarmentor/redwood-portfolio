import { css } from 'linaria'

const typography = css`
  :global() {
    html {
      font-size: 80%; /* 16px */
    }

    body {
      font-family: nimbus-sans, sans-serif;
      font-weight: 400;
      font-style: normal;
      font-kerning: normal;
      font-variant-ligatures: common-ligatures contextual;
      font-feature-settings: 'kern', 'liga', 'clig', 'calt';
      line-height: 1.4;
    }

    p {
      max-width: 45rem;
      font-size: 1.25em;
      margin-bottom: 1.75rem;
    }

    h1 {
      font-size: 3em;
      margin-bottom: 3.5rem;
    }

    h2 {
      font-size: 2em;
      margin-bottom: 1.75rem;
    }

    h3 {
      font-size: 1.5em;
      margin-bottom: 1.75rem;
    }

    article {
      padding: 3.5rem 2rem;
    }
  }
`

export default typography
