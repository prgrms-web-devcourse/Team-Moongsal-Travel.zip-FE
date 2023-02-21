import { css, Global } from '@emotion/react';

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;

const style = css`
  @font-face {
    font-weight: normal;
    font-family: 'KOHINanumOTFL';
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/KOHINanumOTFL.woff')
      format('woff');
  }

  @font-face {
    font-weight: normal;
    font-family: 'KOHIBaeumOTF';
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/KOHIBaeumOTF.woff')
      format('woff');
  }

  body {
    font-family: 'KOHINanumOTFL', serif;
  }
`;
