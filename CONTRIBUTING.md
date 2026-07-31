# Contributing

## ブランチ命名規則

ブランチ名は以下の形式にしてください。

```
<type>/<kebab-case-description>
```

`type` は以下のいずれかを使用します。

| type       | 用途                               |
| ---------- | ---------------------------------- |
| `feat`     | 新機能の追加                       |
| `fix`      | バグ修正                           |
| `docs`     | ドキュメントのみの変更             |
| `chore`    | ビルド設定・依存関係更新などの雑務 |
| `refactor` | 挙動を変えないコードの整理         |
| `test`     | テストの追加・修正                 |
| `ci`       | CI/CD 設定の変更                   |

例:

```
feat/add-resume-nav-link
fix/rss-stylesheet-404
docs/update-readme
chore/pin-node-version
refactor/simplify-nav-link
test/add-vitest-utils
ci/harden-github-actions
```

Dependabot が自動作成するブランチ（`dependabot/...`）はこの規則の対象外です。

この規則に従わない PR は `.github/workflows/ci.yml` の branch-name-check ジョブで CI が失敗します。
