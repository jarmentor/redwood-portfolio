import { css } from 'linaria'

export const globals = css`
  :global() {
    :root {
      --midnight-green: #1a535c;
      --medium-turquoise: #4ecdc4;
      --mint-cream: #f7fff7;
      --white: #fff;
      --bittersweet: #ff6b6b;
      --yellow: #ffe66d;
      --brand-primary: var(--yellow);
    }
    html {
      box-sizing: border-box;
      background-color: var(--bittersweet);
      color: var(--midnight-green);
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }
    * {
      font-family: system, -apple-system, '.SFNSText-Regular', 'San Francisco',
        'Roboto', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif;
      font-size: 14px;
      line-height: 1.25em;
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
      @media screen and (min-width: 900px) {
        font-size: 18px;
      }
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    a {
      color: var(--midnight-green);
    }

    body {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    hr {
      margin: 2em auto;
    }

    h1:first-of-type,
    h2:first-of-type,
    h3:first-of-type,
    h4:first-of-type,
    h5:first-of-type,
    h6:first-of-type {
      margin-top: 0.25em;
    }

    p + p {
      margin-bottom: 1em;
    }

    h1 {
      font-size: 2.25em;
      line-height: 1em;
      margin: 0.5em 0;
    }

    h2 {
      font-size: 2em;
      line-height: 1em;
      margin: 0.5em 0;
    }
    h3 {
      font-size: 1.75em;
      line-height: 1.25em;
      margin: 0.375em auto;
    }
    h4 {
      font-size: 1.25em;
      line-height: 1.25em;
      margin: 0.375em 0;
    }
    h5 {
      font-size: 1.125em;
      line-height: 1.5em;
      margin: 0.25em 0;
    }
    h6 {
      font-size: 1em;
      line-height: 1em;
      margin: 1em 0;
    }

    p,
    li {
      font-size: 1em;
      line-height: 1.125em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      max-width: 30em;
    }

    small {
      font-size: 0.75em;
      line-height: 1em;
    }

    .lead {
      font-size: 1.5em;
      line-height: 1.125em;
    }

    .subhead {
      color: #666;
      font-weight: 200;
    }
  }
`
