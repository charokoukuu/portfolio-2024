interface InternType {
    name: string;
    term: string;
    content: string;
}

export const internship: InternType[] = [
    {
        name: 'ピクシブ株式会社',
        term: '2022年9月〜2022年11月(3ヶ月)',
        content: 'サービス「pixiv」のフロントエンドUX改善。PC版にはReact+TypeScriptを使用し、SP版にはVue2を使用。改修前のページではPHP(smarty)を使用し、コンポーネントの描画負荷の改善やマンガビューアの新機能実装などを行いました。また、RenderStoneを使った、ユーザエージェントに応じてSSRを行うDynamicRenderingのフロント対応などを行いました。'
    },
    {
        name: 'チームラボ株式会社',
        term: '2023年9月初旬〜2023年9月中旬(2週間)',
        content: '案件であるECサイトの新機能実装。技術スタックはVue2/Vuex3/GoLand(Gin)を使用。描画負荷軽減に配慮したフロントの実装を行いました。また、バックエンドではGinを使用し、クリーンアーキテクチャに則ったAPIエンドポイントの実装を行いました。'
    },
    {
        name: 'Sky株式会社',
        term: '2024年3月〜現在(長期)',
        content: '   社内案件管理ツールの新規開発。フロントエンドにはNext.jsのApp Routerを使用し、BFFおよびバックエンドにはNest.js/GraphQL/gRPC/PostgreSQLを使用。データベーススキーマの定義からAPIエンドポイントの実装、フロントエンドの実装までを担当しています。'
    }

]