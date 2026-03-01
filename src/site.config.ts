import type { SiteConfig } from '~/types'

const config: SiteConfig = {
  // Absolute URL to the root of your published site, used for generating links and sitemaps.
  site: 'https://sugiyan.tech',
  // The name of your site, used in the title and for SEO.
  title: "sugiyan's tech blog",
  // The description of your site, used for SEO and RSS feed.
  description: "sugiyan's tech blog",
  // The author of the site, used in the footer, SEO, and RSS feed.
  author: 'sugiyan',
  // Keywords for SEO, used in the meta tags.
  tags: ['blog', 'tech', 'sugiyan'],
  // Path to the image used for generating social media previews.
  // Needs to be a square JPEG file due to limitations of the social card generator.
  // Try https://squoosh.app/ to easily convert images to JPEG.
  socialCardAvatarImage: './src/content/avatar.png',
  // Font imported from @fontsource or elsewhere, used for the entire site.
  font: 'JetBrains Mono Variable',
  pageSize: 6,
  trailingSlashes: false,
  navLinks: [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Blog', url: '/blog' },
    { name: 'GitHub', url: 'https://github.com/sugiyan97', external: true },
  ],
  // テーマ: select モードで複数から選択（SelectTheme.astro が表示される）
  themes: {
    mode: 'select',
    default: 'github-dark',
    include: ['github-light', 'github-dark', 'dracula'],
    overrides: {},
  },
  socialLinks: {
    github: 'https://github.com/sugiyan97',
    mastodon: '',
    email: '',
    linkedin: 'https://www.linkedin.com/in/yoshiyuki-sugiyama/',
    bluesky: '',
    twitter: 'https://x.com/sugiyan97_tech',
    rss: true,
  },
  // コメントは未使用（使う場合は https://giscus.app/ で設定）
  giscus: undefined,
  // キャラクターチャットは使用しない
  characters: {},
}

export default config
