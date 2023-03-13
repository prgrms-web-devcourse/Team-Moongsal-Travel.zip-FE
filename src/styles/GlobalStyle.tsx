import { css, Global } from '@emotion/react';

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
  }

  body {
    margin: 0;
    padding-bottom: 65px;
    font-family: 'Noto Sans KR', sans-serif;
    line-height: 1;
  }

  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
    border: 0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* 데모 데이를 위한 임시 스타일 */
  a:link {
    color: #333;
    text-decoration: none;
  }
  a:visited {
    color: #333;
    text-decoration: none;
  }
  a:hover {
    color: inherit;
    text-decoration: none;
  }

  /* quill editor */
  .ql-toolbar {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  .ql-container {
    min-height: 15rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  strong,
  .ql-editor strong {
    font-weight: bold;
  }
  em,
  .ql-editor em {
    font-style: italic;
  }
  .ql-editor {
    word-spacing: 0;
  }
  .ql-align-center {
    text-align: center;
  }
  .ql-align-right {
    text-align: right;
  }
  .ql-align-justify {
    text-align: justify;
  }
  blockquote {
    margin: 15px 0;
    padding: 15px;
    background-color: #e3edf7;
    border-left: 6px solid #66b2f5;
  }
  blockquote p {
    margin-bottom: 10px;
  }
  h1 {
    font-size: 2em;
  }
  h2 {
    font-size: 1.7em;
  }
  h3 {
    font-size: 1.35em;
  }
  h4 {
    font-size: 1em;
  }
  h5 {
    font-size: 0.83em;
  }
  h6 {
    font-size: 0.67em;
  }

  .readable-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }
`;
