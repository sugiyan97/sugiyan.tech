---
title: 'はじめに — このブログと技術スタック'
published: 2025-03-01
draft: false
description: 'sugiyan.tech を始めるにあたっての挨拶と、このサイトを支える技術（Astro・テーマ・RSS など）を簡潔に紹介します。'
tags: ['meta', 'astro', 'about', 'cloudflare pages']
toc: true
---

## はじめに

杉山嘉幸（sugiyan）です。Backend/Full-Stack Engineer として、大規模システムの設計・開発や生成 AI / RAG のプロダクト化に携わってきました。このブログは、日々の技術メモや学びを残す場として立ち上げました。

今後は、RAG や生成 AI の実践メモ、アーキテクチャやバックエンドの話題を中心に、自分が「残しておきたい」と思ったことを記事にしていく予定です。詳細な経歴は [About](/about) や [職務経歴書](https://sugiyan97.github.io/resume/) をご覧ください。

## このブログの技術スタック

このサイト（sugiyan.tech）は次のような構成で動いています。

- **Astro + Content Collections** — 記事は Markdown（または MDX）で書き、`src/content/blogs` に置いています。Content Collections のスキーマでタイトル・日付・タグ・目次などを管理しています。
- **テーマ切り替え** — ライト（github-light）・ダーク（github-dark）・Dracula から選べるようにしてあり、好みに合わせて切り替えできます。
- **RSS** — `/rss.xml` でフィードを配信しているので、RSS リーダーで購読できます。
- **検索** — ビルド後に Pagefind で全文検索できるようにしています。
- **デプロイ** — GitHub Actions でCIチェックし、Cloudflare Pages にてビルド後に公開しています。

静的サイトとして軽く保ちつつ、ブログに欲しい機能（タグ・シリーズ・目次・OGP 用のソーシャルカードなど）が揃ったテンプレートをベースにしているので、「書く」ことに集中しやすい環境になっています。

## おわりに

初回は、自己紹介とこのブログを支える技術の概要でした。これからも気軽に読んでいただければ幸いです。感想や質問は [X (Twitter)](https://x.com/sugiyan97_tech) の DM などでお気軽にどうぞ。
