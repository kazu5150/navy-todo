# Navy Todo App

濃紺と白を基調とした、落ち着いたデザインのプロジェクト管理型Todoアプリです。
シンプルながらも、ドラッグ＆ドロップによる並び替えやサブタスク管理など、強力な機能を備えています。

## 特徴

### デザイン & テーマ
*   **Deep Navy Theme**: 集中力を高める濃紺 (`#0f172a`) をデフォルトとしたダークモード。
*   **Light Mode**: 日中の作業に適した、青と白を基調としたライトモードに切り替え可能。
*   **モダンなUI**: CSS Modulesによるカスタムデザインとマイクロインタラクション。

### タスク管理機能
*   **プロジェクト管理**: 「Personal」「Work」などのプロジェクトごとにタスクを整理。
*   **ドラッグ＆ドロップ**: `@dnd-kit` を採用し、直感的にタスクの優先順位を並び替え可能。
*   **サブタスク**: 各タスク内にチェックリストを作成し、細かな進捗を管理。
*   **タスク割り当て**: チームメンバーへのタスク割り当て機能（モック機能）。

### データの永続化
*   **LocalStorage保存**: タスクやテーマ設定はブラウザに自動保存され、リロードしてもデータは保持されます。

## 技術スタック

*   **Framework**: Next.js 16 (App Router)
*   **Styling**: Vanilla CSS (CSS Modules)
*   **Drag & Drop**: @dnd-kit/core, @dnd-kit/sortable
*   **State**: React Hooks + LocalStorage

## 始め方

開発サーバーを起動するには以下のコマンドを実行してください：

```bash
npm install
npm run dev
# or
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。
