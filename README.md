# 2026/5/21 淡路島ドライブ

このフォルダは旅行計画の管理と、GitHub Pagesでの共有サイト公開を兼ねています。

## ファイル構成

```
2026:05:21_awaji/
├── README.md          ← このファイル（GitHub Pages公開手順も記載）
├── index.html         ← 共有サイト本体
├── style.css          ← デザイン
├── app.js             ← データとロジック（情報の追加・変更はここ）
├── itinerary.md       ← 当日スケジュール（Markdown版）
├── spots.md           ← スポット一覧
├── restaurants.md     ← レストラン一覧
├── cafes.md           ← カフェ一覧
└── packing.md         ← 持ち物リスト
```

## ローカルでサイトを確認する

外部ビルド不要なので、`index.html` をブラウザで開けば動きます。

```bash
# Macなら（このフォルダ内で）
open index.html
```

または、簡易サーバを立てる場合：

```bash
# Python 3
python3 -m http.server 8000
# → http://localhost:8000 にアクセス
```

---

## GitHub Pagesで公開する手順（初めての方向け）

### ステップ1：GitHubで新しいリポジトリを作る

1. <https://github.com/new> にアクセス
2. **Repository name** に推測されにくい名前を入力
   - 例: `awaji-trip-7a3k9` のようにランダム文字を入れる
   - シンプルに `awaji-2026` などでもOK（ただし推測されやすい）
3. **Public** を選択（無料アカウントでGitHub Pagesを使うため）
4. README/.gitignore/license は **追加しない**（このフォルダで管理するため）
5. **Create repository** をクリック

### ステップ2：このフォルダをGitリポジトリにする

ターミナルでこのフォルダに移動して以下を実行します。

```bash
cd "/Users/tomoki/Library/Mobile Documents/com~apple~CloudDocs/development/Itinerary/2026:05:21_awaji"

git init
git add .
git commit -m "Initial commit: 淡路島旅行共有サイト"
git branch -M main
```

> ⚠️ iCloud Drive配下のGit操作は同期競合が起こる可能性があります。動作はしますが、もしトラブルが続く場合はiCloud外のフォルダ（例: `~/Documents/`）にコピーして運用するのもアリです。

### ステップ3：GitHubにプッシュ

ステップ1で作ったリポジトリのページに、`git remote add origin ...` のコマンドが表示されています。それをコピーして実行：

```bash
# 例（実際のURLはGitHubの画面に表示されたものを使う）
git remote add origin https://github.com/YOUR_NAME/awaji-trip-7a3k9.git
git push -u origin main
```

### ステップ4：GitHub Pagesを有効にする

1. リポジトリのページで **Settings** タブをクリック
2. 左メニューの **Pages** をクリック
3. **Source** で **Deploy from a branch** を選択
4. **Branch** で **main** → **/(root)** を選択 → **Save**
5. 1〜2分ほど待つと、上部に公開URLが表示される

公開URLの形式：

```
https://YOUR_NAME.github.io/awaji-trip-7a3k9/
```

このURLを共有相手に送ればOKです。

### ステップ5：内容を更新したら

`app.js` などを編集したあと：

```bash
git add .
git commit -m "店情報を更新"
git push
```

push後、1〜2分でサイトに反映されます。

---

## プライバシーについて

このサイトはPublicリポジトリで公開していますが、以下で実用上の非公開性を確保しています：

- **`<meta name="robots" content="noindex, nofollow">`** で検索エンジンの巡回を抑制
- **リポジトリ名にランダム文字** を入れてURL推測を困難に
- 共有相手にだけリンクを直接送る

> 完全な非公開が必要な場合は、GitHub Pro（有料）でPrivate Pagesにする必要があります。

---

## 情報を追加・変更したい場合

- スポット、レストラン、カフェの情報は **`app.js`** 内の `data` オブジェクトを編集
- スケジュールやタイムラインも同じく `app.js` で
- デザイン調整は **`style.css`**
- 元ネタの記録として `*.md` ファイルもあります（こちらは編集してもサイトには反映されません）

---

## トラブルシューティング

### Pagesが404になる

- `Settings → Pages` で `main / (root)` が選ばれているか確認
- `index.html` がリポジトリ直下にあるか確認
- 反映には数分かかる場合あり

### スマホで見るとデザインが崩れる

- ブラウザのキャッシュをクリアして再読み込み
- それでもダメなら、URLに `?v=2` などをつけて読み込み直す

### git pushでパスワードを聞かれて失敗する

- GitHubは2021年からパスワード認証を廃止しています
- **Personal Access Token** または **SSH鍵** での認証が必要
- ターミナルで `gh auth login` を実行するのが一番楽（要 [GitHub CLI](https://cli.github.com/) インストール）
