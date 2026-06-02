# 魂タイプ診断アプリ

Vercelにデプロイして、WordPressの固定ページへiframeで埋め込むためのNext.jsアプリです。

## 1. セットアップ

```bash
npm install
npm run dev
```

ローカル確認:

```bash
http://localhost:3000
```

## 2. 環境変数

`.env.example`をコピーして`.env.local`を作成してください。

```bash
cp .env.example .env.local
```

中身を変更します。

```bash
NEXT_PUBLIC_WP_DOMAIN=https://あなたの-wordpress-ドメイン
NEXT_PUBLIC_LINE_URL=https://lin.ee/あなたのLINEリンク
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

`NEXT_PUBLIC_GA_ID`は任意です。不要なら空欄で問題ありません。

## 3. Vercelへのデプロイ

1. GitHubにこのプロジェクトをアップロード
2. VercelでNew Project
3. 該当リポジトリを選択
4. Environment Variablesに以下を追加
   - `NEXT_PUBLIC_WP_DOMAIN`
   - `NEXT_PUBLIC_LINE_URL`
   - `NEXT_PUBLIC_GA_ID` 任意
5. Deploy

## 4. WordPress iframe埋め込み

WordPressの固定ページに「カスタムHTML」ブロックを追加し、以下を貼り付けます。

```html
<div id="soul-diagnosis-wrap" style="width:100%;max-width:900px;margin:0 auto;">
  <iframe
    id="soul-diagnosis-iframe"
    src="https://あなたの-vercel-url.vercel.app"
    width="100%"
    height="900"
    style="border:0;width:100%;overflow:hidden;border-radius:24px;"
    loading="lazy"
  ></iframe>
</div>

<script>
  window.addEventListener("message", function(event) {
    if (!event.data || event.data.type !== "soulDiagnosisHeight") return;
    var iframe = document.getElementById("soul-diagnosis-iframe");
    if (!iframe) return;
    iframe.style.height = event.data.height + "px";
  });
</script>
```

## 5. 診断ロジック

A〜Fで最も多く選ばれたアルファベットを診断結果にします。
同点の場合は、最後に選んだ選択肢を優先します。

- A: 導き手タイプ（ガイド魂）
- B: 癒し手タイプ（ヒーラー魂）
- C: アーティスト／表現者タイプ（表現者魂）
- D: 創造者タイプ（クリエイター魂）
- E: 探究者タイプ（シャーマン魂）
- F: 守護者タイプ（マザー魂）

## 6. コピーや質問の変更場所

質問と診断結果の本文は以下のファイルにまとまっています。

```txt
lib/diagnosisData.ts
```

## 7. 注意点

- `NEXT_PUBLIC_WP_DOMAIN`はiframe埋め込みを許可するWordPress側ドメインです。
- LINEリンクは必ず本番URLに差し替えてください。
- GA4を使う場合は、`line_cta_clicked`イベントでLINEボタンクリックを確認できます。
