import Document, {
  Html,
  Head,
  Main,
  NextScript,
  type DocumentContext
} from 'next/document'
import Script from 'next/script'

interface MyDocumentProps {
  url: string
  ogImage: string
  twitterImage: string
  title: string
  description: string
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      title: 'Curso Full-stack Next.js 14',
      description: 'Descrição do site',
      url: 'https://meusite.com.br/',
      ogImage: 'https://meusite.com.br/og-image.jpg',
      twitterImage: 'https://meusite.com.br/twitter-image.jpg'
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="./favicon.ico" type="image/ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content={this.props.description} />
          <meta name="author" content="Lucas Nhimi" />
          <meta
            name="keywords"
            content="Next.js, Next.js 14, React.js, Lucas Nhimi, Curso Next.js, JavaScript, TypeScript, Full-stack, Tailwind CSS"
          />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <link rel="canonical" href={this.props.url} />
          <link rel="preconnect" href="https://meudominio.com.br" />
          <link rel="dns-prefetch" href="https://meudominio.com.br" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={this.props.url} />
          <meta property="og:title" content={this.props.title} />
          <meta property="og:description" content={this.props.description} />
          <meta property="og:image" content={this.props.ogImage} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={this.props.url} />
          <meta property="twitter:title" content={this.props.title} />
          <meta
            property="twitter:description"
            content={this.props.description}
          />
          <meta property="twitter:image" content={this.props.twitterImage} />
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={
              'https://www.googletagmanager.com/gtag/js?id=YOUR_GOOGLE_ANALYTICS_TRACKING_ID'
            }
          />
          <Script id="ga-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID');
            `}
          </Script>

          {/* Facebook Pixel */}
          <Script id="fb-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f     _fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
              fbq('track', 'PageView');
            `}
          </Script>

          {/* Vercel Analytics */}
          <Script
            src="https://vitals.vercel-insights.com/v1/vitals.js"
            strategy="afterInteractive"
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
