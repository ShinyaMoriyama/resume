const projectsData = [
    {
        "belonging": "HGST",
        "from": "20/08",
        "to": "21/05",
        "title": "実験結果グラフ化Webサービスの開発",
        "descriptions": "Flask、BootstrapでのWebモジュール開発\\nCeleryでのキューを用いた非同期処理実装\\nDockerを利用したモジュールリリース",
        "benefits": "大量データを扱うための非同期処理を開発",
        "role": "TL/PG",
        "languages": "Python",
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
        "languages": "Python\\nJavascript",
        "db": "PostgreSQL",
        "libraries": "Flask\\nBootstrap\\nOAuth\\nStripe\\nPlotly\\nHeroku\\nBabel(多言語)\\nPandas",
    },
    {
        "belonging": "HGST",
        "from": "20/01",
        "to": "20/07",
        "title": "実験結果サマリーWebツールの開発",
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
        "title": "タスク管理系モバイルアプリ開発",
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
        "title": "プロダクト開発業務改善に向けた機械学習",
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
        "title": "実験データ格納データ基盤の保守",
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
        "languages": "Javascript",
        "db": "-",
        "libraries": "Node.js",
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