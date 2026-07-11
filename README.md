# sugiyan.tech

sugiyan の個人技術ブログです。[sugiyan.tech](https://sugiyan.tech) 用のリポジトリです。

[Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/) 製の静的サイトで、
[multiterm-astro](https://github.com/stelcodes/multiterm-astro) をベースにしています。

## セットアップ

Node.js のバージョンは [.nvmrc](./.nvmrc) を参照してください（`nvm use` などで揃えられます）。
パッケージマネージャーは pnpm です。

```bash
pnpm install
pnpm dev       # http://localhost:4321 で開発サーバーを起動
```

## よく使うコマンド

| コマンド                | 内容                                                            |
| ----------------------- | --------------------------------------------------------------- |
| `pnpm dev`              | 開発サーバーを起動                                              |
| `pnpm build`            | 本番ビルド（`astro build` → `pagefind` で検索インデックス生成） |
| `pnpm preview`          | ビルド結果をローカルでプレビュー                                |
| `pnpm check`            | `astro check`（型チェック）                                     |
| `pnpm format`           | Prettier でコード整形                                           |
| `pnpm run format:check` | Prettier のフォーマットチェック（CIと同じ）                     |

## デプロイ

- GitHub Actions（`.github/workflows/ci.yml`）で push / PR ごとに format check・型チェック・ビルドを実行しています。
- 本番デプロイは [Cloudflare Pages](https://pages.cloudflare.com/) が `main` ブランチを追跡してビルド・公開しています（ビルドコマンド: `pnpm build`、出力ディレクトリ: `dist`）。

## 記事の書き方

記事は `src/content/blogs/` 配下に Markdown（`.md`）または MDX（`.mdx`）で追加します。
スキーマは [`src/content.config.ts`](./src/content.config.ts) で定義されています。

```yaml
---
title: '記事タイトル'
published: 2025-03-01 # 公開日
draft: false # true にすると本番ビルドから除外
description: '一覧・OGP・RSSで使う概要文（省略時は本文から自動生成）'
author: 'sugiyan' # 省略時は siteConfig.author
series: 'シリーズ名' # 省略可
tags: ['astro', 'meta'] # 省略可
toc: true # 目次の表示可否（デフォルト true）
coverImage: # 省略可
  src: './cover.png'
  alt: '代替テキスト'
---
```

トップページの文言・アバターは `src/content/home.md`、About 等の追記は `src/content/addendum.md` で管理しています。

### 本文で使える独自記法

- アドモニション: `:::note` / `:::tip` / `:::important` / `:::caution` / `:::warning`
- GitHub カード: `::github{repo="owner/repo"}` または `::github{user="owner"}`
- 数式（KaTeX）: `$inline$` / `$$block$$`
- 絵文字ショートコード: `:smile:` など（[gemoji](https://github.com/github/gemoji)）

## サイト設定

ナビゲーション・テーマ・SNSリンクなどは [`src/site.config.ts`](./src/site.config.ts) で管理しています。

## その他

- 検索: ビルド後に [Pagefind](https://pagefind.app/) で全文検索インデックスを生成しています。
- テーマ: `github-light` / `github-dark` / `dracula` から選択可能（ヘッダーの右上から切り替え）。
