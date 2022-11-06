import { useRouter } from 'next/router'
import Head from 'next/head'

type ogType =
  | 'activity'
  | 'actor'
  | 'album'
  | 'article'
  | 'athlete'
  | 'author'
  | 'band'
  | 'bar'
  | 'blog'
  | 'book'
  | 'cafe'
  | 'cause'
  | 'city'
  | 'company'
  | 'country'
  | 'director'
  | 'drink'
  | 'food'
  | 'game'
  | 'government'
  | 'hotel'
  | 'landmark'
  | 'movie'
  | 'musician'
  | 'non_profit'
  | 'politician'
  | 'product'
  | 'public_figure'
  | 'restaurant'
  | 'school'
  | 'song'
  | 'sport'
  | 'sports_league'
  | 'sports_team'
  | 'state_province'
  | 'tv_show'
  | 'university'
  | 'website'

interface SeoProps {
  title?: string
  description?: string
  image?: string
  type?: ogType
  date?: string
  urlBasePath?: string
  customRobots?: string
  ogSiteName?: string
  twitterUsername?: string
  twitterCardType?: 'summary' | 'summary_large_image' | 'app' | 'player'
  isCanonical?: boolean
}
const Seo = ({ ...props }: SeoProps) => {
  const router = useRouter()

  // TODO: EDIT BEFORE PUBLISHING
  const meta: SeoProps = {
    title: 'Project Default SEO Title',
    description: 'Project default seo description',
    image: 'default-seo-image',
    type: 'website',
    urlBasePath: 'https://projectdefaulturl.com',
    customRobots: 'follow,index',
    twitterCardType: 'summary',
    ogSiteName: 'Project Name',
    isCanonical: true,
    ...props,
  }

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.customRobots} />
      <meta name='description' content={meta.description} />
      {meta.isCanonical && (
        <link rel='canonical' href={`${meta.urlBasePath}${router.asPath}`} />
      )}

      <meta property='og:url' content={`${meta.urlBasePath}${router.asPath}`} />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.ogSiteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:image' content={meta.image} />

      <meta
        property='twitter:url'
        content={`${meta.urlBasePath}${router.asPath}`}
      />
      <meta property='twitter:title' content={meta.title} />
      <meta property='twitter:description' content={meta.description} />
      <meta property='twitter:image' content={meta.image} />
      <meta property='twitter:card' content={meta.twitterCardType} />

      {meta.twitterUsername && (
        <meta property='twitter:site' content={meta.twitterUsername} />
      )}

      {meta.date && (
        <meta property='article:published_time' content={meta.date} />
      )}
    </Head>
  )
}

export { Seo }
