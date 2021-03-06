const projectsData = [
    {
        "belonging": "個人開発",
        "from": "21/07",
        "to": "現在",
        "title": "カレンダーアプリ",
        "descriptions": "パッケージを多用しないカレンダーマンスリービューの独自実装\\n多言語対応\\nFirebaseでのデータや背景イメージの管理",
        "benefits": "UX考慮した画面デザインや機能配置",
        "role": "TL/PG",
        "languages": "Dart",
        "db": "Hive",
        "libraries": "Flutter\\nlocalization\\nnotification\\ntutorial_coach_mark(guide)\\nFirebase\\nGit",
    },
    {
        "belonging": "HGST",
        "from": "20/08",
        "to": "現在",
        "title": "実験結果グラフ化Webサービス",
        "descriptions": "Flask、BootstrapでのWebモジュール開発\\nCeleryでのキューを用いた非同期処理実装\\nDockerを利用したモジュールリリース",
        "benefits": "大量データを扱うための非同期処理を開発",
        "role": "TL/PG",
        "languages": "Python\\nJavaScript",
        "db": "Redshift\\nMySQL",
        "libraries": "Flask\\nBootstrap\\nCelery\\nPlotly\\nDocker\\nMesosDC/OS\\nRedis\\nPandas"
    },
    {
        "belonging": "個人開発",
        "from": "20/10",
        "to": "21/02",
        "title": "オンライン日記サービス",
        "descriptions": "Flask、BootstrapでのWebモジュール開発\\n多言語対応\\nHerokuでのモジュールリリース\\nStripeによる課金実装",
        "benefits": "OAuth認証からStripe課金までひととおり実装",
        "role": "TL/PG",
        "languages": "Python\\nJavaScript",
        "db": "PostgreSQL",
        "libraries": "Flask\\nBootstrap\\nOAuth\\nStripe\\nPlotly\\nHeroku\\nBabel(多言語)\\nPandas",
    },
    {
        "belonging": "HGST",
        "from": "20/01",
        "to": "20/07",
        "title": "実験結果サマリーWebツール",
        "descriptions": "PythonでのWebモジュール開発（Dash）\\nDockerを利用したモジュールリリース",
        "benefits": "フルスタックでの検討開発を全行程担当",
        "role": "TL/PG",
        "languages": "Python",
        "db": "Presto",
        "libraries": "Docker\\nDash\\nPandas",
    },
    {
        "belonging": "個人開発",
        "from": "19/12",
        "to": "20/06",
        "title": "タスク管理系モバイルアプリ",
        "descriptions": "多言語対応\\n通知機能\\niPhone App Storeへのリリース",
        "benefits": "初の個人開発をFlutterで実装",
        "role": "TL/PG",
        "languages": "Dart",
        "db": "SQLite",
        "libraries": "Flutter\\nlocalization\\nnotification\\nGit",
    },
    {
        "belonging": "HGST",
        "from": "19/05",
        "to": "20/08",
        "title": "機械学習（プロダクト開発業務改善）",
        "descriptions": "プロダクトのエラー原因調査や分類\\n不良品回避のための最適パラメータ調査",
        "benefits": "独学でPython と機械学習を学び、プロダクトメンバーへの報告まで実施",
        "role": "PG",
        "languages": "Python",
        "db": "Presto",
        "libraries": "Numpy\\nPandas\\nSkLearn\\nMatplotlib\\nSeaborn",
    },
    {
        "belonging": "HGST",
        "from": "19/03",
        "to": "20/08",
        "title": "実験データ基盤の保守",
        "descriptions": "実験データ格納バッチの改修\\nリファクタリング",
        "benefits": "既存データ基盤への改善提案・実装や、チームメンバーへの技術アドバイス",
        "role": "PG",
        "languages": "Java",
        "db": "Hive",
        "libraries": "ApacheAvro\\nGit",
    },
    {
        "belonging": "IBM",
        "from": "18/04",
        "to": "19/02",
        "title": "地方銀行印鑑照会システム構築",
        "descriptions": "プロジェクト管理\\nバッチ処理、移行プログラムの設計",
        "benefits": "PMと設計メンバーを兼任することで要員を2割削減",
        "role": "PM/TL",
        "languages": "WinBatch\\nSQL",
        "db": "DB2",
        "libraries": "-",
    },
    {
        "belonging": "IBM",
        "from": "18/06",
        "to": "18/08",
        "title": "地方銀行情報系システム廃止",
        "descriptions": "入力データのチェックロジック実装\\nNode.jsでのJavaScript開発",
        "benefits": "アプリ基盤としてユーザー入力支援機能を強化",
        "role": "PG",
        "languages": "JavaScript",
        "db": "-",
        "libraries": "Node.js",
    },
    {
        "belonging": "IBM",
        "from": "17/09",
        "to": "18/03",
        "title": "都市銀行顧客情報システムの基盤全面更改に伴うアプリ対応",
        "descriptions": "チーム進捗管理(15名)\\nオフショアチームとの協業推進\\n要員計画、コスト管理",
        "benefits": "日本でプロトタイプ方針検討し上海で検証する効率化",
        "role": "TL",
        "languages": "-",
        "db": "DB2",
        "libraries": "Oracle ODI",
    },
    {
        "belonging": "IBM",
        "from": "16/08",
        "to": "17/08",
        "title": "都市銀行情報検索システム更改に伴うアプリとデータの移行",
        "descriptions": "15名チームの管理\\n要員計画とコスト予算実績管理\\nテスト計画、移行計画の作成\\n顧客報告、他部署とのQA・課題管理推進",
        "benefits": "PMOメンバーを不要とすることにより総工数を10%削減",
        "role": "PM",
        "languages": "-",
        "db": "DB2",
        "libraries": "WebFocus\\nWebSaver",
    },
    {
        "belonging": "IBM",
        "from": "16/02",
        "to": "16/07",
        "title": "地方銀行顧客管理業務のアプリ構築",
        "descriptions": "ニアショアチーム業務リーダー\\nキャッチアップスケジュールの作成と実施\\nオンサイト拠点とのリモート会議推進",
        "benefits": "トラブル対応として参画し15名チームを管理し予定どおりテストフェーズを完了",
        "role": "TL",
        "languages": "Java",
        "db": "DB2",
        "libraries": "WACs",
    },
    {
        "belonging": "IBM",
        "from": "13/05",
        "to": "16/01",
        "title": "地方銀行融資系システムの業務アプリ保守",
        "descriptions": "各改善対応の全体作業スケジュール\\n要員計画作成、進捗管理\\nトラブル対応の推進役、報告書等のレビュー\\n改善案件の成果物レビュー、見積作業",
        "benefits": "メンバーの役割明確化でトラブル件数削減、メンバー平均残業を2時間削減",
        "role": "TL",
        "languages": "Java\\nSQL",
        "db": "DB2",
        "libraries": "WACs",
    },
    {
        "belonging": "IBM",
        "from": "12/05",
        "to": "13/04",
        "title": "地方銀行融資系システムの業務アプリ構築",
        "descriptions": "現行ホスト業務のオープン化\\nチームリーダー7名\\nシステムメインとなる顧客管理画面構築",
        "benefits": "スキル不足のメンバーを補いプレイングリーダーとしてSIに貢献",
        "role": "TL",
        "languages": "Java\\nJavaScript\\nSQL",
        "db": "DB2",
        "libraries": "jQuery\\nWACs",
    },
    {
        "belonging": "IBM",
        "from": "09/05",
        "to": "12/04",
        "title": "地方銀行ローン審査システムの業務アプリ構築",
        "descriptions": "チームリーダー7名\\nテスト打鍵、結果検証、バグ改修\\n移行プログラム作成、手順等",
        "benefits": "テストフェーズ以降の全般をリードし予定通りサービスイン",
        "role": "TL/PG",
        "languages": "Java\\nJavaScript\\nSQL",
        "db": "DB2",
        "libraries": "jQuery\\nWACs",
    },
    {
        "belonging": "IBM",
        "from": "08/11",
        "to": "09/04",
        "title": "地方銀行ローン審査システムの業務アプリ保守",
        "descriptions": "利用部門からの照会調査、問題調査\\nトラブル時のプログラム対応、顧客報告",
        "benefits": "保守活動全般（問題調査～対応方針～PG～リリースまでの一連作業）",
        "role": "TL/PG",
        "languages": "VB\\nC\\nSQL",
        "db": "DB2",
        "libraries": "-",
    },
    {
        "belonging": "IBM",
        "from": "07/04",
        "to": "08/11",
        "title": "地方銀行統合プロジェクトのWindowsサーバー構築",
        "descriptions": "Windows Active Directory 構築\\nアプリケーションリグレッションテスト",
        "benefits": "サブシステム群の認証管理サーバーという重要システムを予定通り構築",
        "role": "TL/PG",
        "languages": "-",
        "db": "-",
        "libraries": "-",
    },
    {
        "belonging": "IBM",
        "from": "05/07",
        "to": "07/03",
        "title": "地方銀行担保管理システムのアプリ構築",
        "descriptions": "バッチアプリケーションのアーキテクチャ作成\\n不動産保全額計算エンジンの計算アルゴリズム",
        "benefits": "保守性の高いバッチアーキテクチャ、ブラックボックス化アプリの移行",
        "role": "TL/PG",
        "languages": "Java\\nSQL",
        "db": "DB2",
        "libraries": "-",
    },
    {
        "belonging": "IBM",
        "from": "03/08",
        "to": "05/06",
        "title": "地方銀行融資系システムのアプリ構築",
        "descriptions": "バッチアプリケーション開発\\n帳票データ作成SQLバッチの開発",
        "benefits": "50本のバッチ仕様をヒアリングし開発まで実施、DB2ストアドで複数テーブルの複雑なSQLを開発",
        "role": "TL/PG",
        "languages": "Java\\nSQL",
        "db": "DB2",
        "libraries": "-",
    },
];

export function getProjectsData() {
    return projectsData;
}

export function fileterProjectData(key, value){
    return projectsData.filter(
        (d) => d[key].split("\\n").includes(value)
    );
}

export default projectsData;