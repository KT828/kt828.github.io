# SAKIMIRU 公開サイト

`https://kt828.github.io` 用の静的サイト。2026/10/18更新。
SAKIMIRUのみを掲載し、iPhone・iPad向けに「無料・公開準備中」と案内する。
公開後にApp Storeの配信URLが確定した時点で、ダウンロード導線を追加する。

## 構成

- `/index.html`: ホーム
- `/sakimiru/index.html`: 製品紹介
- `/sakimiru/privacy.html`: プライバシーポリシーの公開正本
- `/sakimiru/support.html`: 使い方・問い合わせ
- `/assets/site.css`: 共通スタイル、明暗とモバイル対応
- `/assets/app-icon.png`: SAKIMIRUの現行アプリアイコン
- `/assets/favicon.svg`: サイト用の小さなグラフ記号
- `/.nojekyll`: GitHub Pagesの静的配信指定

問い合わせ先は `clearchestnut@gmail.com`。
金融入力は端末内で暗号化して処理する設計に合わせ、Appleの診断情報、OSのバックアップ、利用者が選ぶ書き出しと問い合わせの取扱いを明記する。

## 配信

ルート相対URLを使うため、HTTPサーバーのルートをこのディレクトリに設定する。
公開先の旧アプリ資料を整理し、この構成へ置き換える。
HTML・CSS・画像だけで表示し、外部フォント・JavaScript・広告・アクセス解析へのリクエストを追加しない。

## 検証

2026/10/18、ローカルHTTPサーバーとPlaywright/Chromiumで以下を確認した。

- 4ページを1440×1000、390×844（明・暗）、320×720の全16通りで表示
- ページとすべての内部リンクがHTTP 200
- 全表示で横方向のはみ出し0、画像の読み込み成功
- JavaScriptエラー0、外部リクエスト0、各ページのh1は1つ
- デスクトップとモバイルダークの製品ページを画像で目視確認
- スキップリンク、ナビゲーション名、現在ページ、フォーカス表示、画像の代替テキスト、OSの文字サイズ・明暗・動きの軽減設定に対応

撮影結果: `/tmp/sakimiru-site-validation/`。
検証実行定義: `/tmp/validate-sakimiru-site.cjs`。
本repositoryのmainをGitHub Pagesで配信する。
