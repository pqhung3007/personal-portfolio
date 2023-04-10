import { Html, Head, Main, NextScript } from "next/document";

const modeScript = `
function changeMode() {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  let isSystemInDarkMode = darkModeMediaQuery.matches 
  let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage && isSystemInDarkMode))

  if (isDarkMode) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  if (isSystemInDarkMode === isDarkMode) {
    delete window.localStorage.isDarkMode
  }
}
changeMode()
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
      </Head>
      <body className="bg-zinc-50 dark:bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
