const projectsData = [
    {
        "belonging": "XYcorp",
        "from": "20/08",
        "to": "21/05",
        "title": "実験結果グラフ化Webサービスの開発",
        "title_detail": "実験結果をビジュアル化するWebサービスの開発",
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
        "title_detail": "健康状態の登録と傾向をビジュアル化するWebサービスの開発",
        "descriptions": "Flask、BootstrapでのWebモジュール開発\\n多言語対応\\nHerokuでのモジュールリリース\\nStripeによる課金実装",
        "benefits": "OAuth認証からStripe課金までひととおり実装",
        "role": "TL/PG",
        "languages": "Python\\nJavascript",
        "db": "PostgreSQL",
        "libraries": "Flask\\nBootstrap\\nOAuth\\nStripe\\nPlotly\\nHeroku\\nBabel(多言語)\\nPandas",
    },
    {
        "belonging": "XYcorp",
        "from": "20/01",
        "to": "20/07",
        "title": "実験結果サマリーWebツールの開発",
        "title_detail": "プロダクト機能試験の成否等をビジュアル化するWebツール開発",
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
        "title_detail": "Flutterでの多言語対応、通知機能を含めたモバイル開発",
        "descriptions": "多言語対応\\n通知機能\\niPhone App Storeへのリリース",
        "benefits": "タスク管理系アプリの企画・開発",
        "role": "TL/PG",
        "languages": "Dart",
        "db": "SQLite",
        "libraries": "Flutter\\nlocalization\\nnotification\\nGit",
    },
]

export function getProjectsData() {
    return projectsData;
}

export function fileterProjectData(key, value){
    return projectsData.filter(
        (d) => d[key].split("\\n").includes(value)
    );
}

export default projectsData;