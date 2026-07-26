import type { SiteConfig } from '~/types'

const config: SiteConfig = {
  // Absolute URL to the root of your published site, used for generating links and sitemaps.
  site: 'https://sugiyan.tech',
  // The name of your site, used in the title and for SEO.
  title: "sugiyan's tech blog",
  // The description of your site, used for SEO and RSS feed.
  description: 'sugiyan の技術ブログ。Backend/Full-Stack のメモと学び。',
  // The author of the site, used in the footer, SEO, and RSS feed.
  author: 'sugiyan',
  // Keywords for SEO, used in the meta tags.
  tags: ['blog', 'tech', 'sugiyan'],
  // Path to the image used for generating social media previews.
  // Needs to be a square JPEG file due to limitations of the social card generator.
  // Try https://squoosh.app/ to easily convert images to JPEG.
  socialCardAvatarImage: './src/content/avatar.jpg',
  // Font imported from @fontsource or elsewhere, used for the entire site.
  // 和紙テーマでは本文は明朝体ではなくゴシック体（システムフォント）を使用。
  // 見出し用の明朝体・コード用の等幅フォントは Layout.astro / global.css 側で個別に定義している。
  font: '"Hiragino Sans", "Yu Gothic", "Noto Sans JP", sans-serif',
  pageSize: 6,
  trailingSlashes: false,
  navLinks: [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Blog', url: '/blog' },
    { name: 'GitHub', url: 'https://github.com/sugiyan97', external: true },
  ],
  // テーマ: select モードで複数から選択（SelectTheme.astro が表示される）
  // github-light / github-dark を「和紙（藍と朱）」の配色で上書きし、サイト全体の
  // デフォルト配色として使用する。dracula は元のまま残し、代替テーマとして選択可能にする。
  themes: {
    mode: 'select',
    default: 'github-dark',
    include: ['github-light', 'github-dark', 'dracula'],
    overrides: {
      'github-light': {
        foreground: '#263640',
        background: '#ece4d1',
        accent: '#bf4438',
        heading1: '#263640',
        heading2: '#263640',
        heading3: '#263640',
        heading4: '#263640',
        heading5: '#263640',
        heading6: '#263640',
        list: '#56645f',
        italic: '#263640',
        link: '#234a63',
        separator: '#8b9086',
        note: '#234a63',
        tip: '#4f7a5c',
        important: '#7c3f56',
        caution: '#a97d2e',
        warning: '#bf4438',
        blue: '#234a63',
        green: '#4f7a5c',
        red: '#bf4438',
        yellow: '#a97d2e',
        magenta: '#7c3f56',
        cyan: '#5f8c86',
      },
      'github-dark': {
        foreground: '#ece4d1',
        background: '#16222c',
        accent: '#e2735f',
        heading1: '#ece4d1',
        heading2: '#ece4d1',
        heading3: '#ece4d1',
        heading4: '#ece4d1',
        heading5: '#ece4d1',
        heading6: '#ece4d1',
        list: '#a9b6bc',
        italic: '#ece4d1',
        link: '#8fb3cc',
        separator: '#5f7078',
        note: '#8fb3cc',
        tip: '#7fae8c',
        important: '#b97e93',
        caution: '#d1a355',
        warning: '#e2735f',
        blue: '#8fb3cc',
        green: '#7fae8c',
        red: '#e2735f',
        yellow: '#d1a355',
        magenta: '#b97e93',
        cyan: '#7fa2b8',
      },
    },
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
}

export default config
