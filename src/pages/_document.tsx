import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap'
          rel='stylesheet'
        />

        <link rel='shortcut icon' href='/favicon.ico' type='image/ico' />
      </Head>
      <body className='bg-app-background text-app-text'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
//<body className='bg-gray-800 text-gray-900 font-["Roboto_Mono"]'></body>
