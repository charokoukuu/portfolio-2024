interface InternType {
  name: string;
  term: string;
  content: string;
}

export const internship: InternType[] = [
  {
    name: 'ピクシブ株式会社',
    term: '2022年9月〜2022年11月 (3ヶ月)',
    content:
      'サービス「pixiv」のフロントエンドUX改善。PC版にはReact+TypeScript、PHP(smarty)を使用し、SP版にはVue2を使用。主にコンポーネントの描画負荷の改善やマンガビューアの新機能実装などを行いました。また、RenderStoneを使った、ユーザエージェントに応じてSSRを行うDynamicRenderingのフロント対応などを行いました。',
  },
  {
    name: 'チームラボ株式会社',
    term: '2023年9月初旬〜2023年9月中旬 (2週間)',
    content:
      'ECサイトの新機能開発。フロントエンドはNuxt.jsを使用。コンポーネントのメモ化などの描画負荷に配慮したフロントの実装やjestを用いた単体テストの実装を行いました。また、バックエンドではGoフレームワークのGinを使用し、クリーンアーキテクチャに則ったAPIエンドポイントの実装を行いました。',
  },
  {
    name: 'Sky株式会社',
    term: '2024年3月〜現在 (長期)',
    content:
      '社内案件管理ツールの新規開発。フロントエンドにはNext.jsのApp Routerを使用し、RSCやクライアントコンポーネントの実装を行っています。また、DBスキーマの設計からDIパターンベースのNest.jsやgRPC/PostgreSQL/Prisma Clientを用いたAPIエンドポイントの実装、また、マイクロサービス間を繋ぐBFFの実装をGraphQLを用いて行っています。',
  },
  {
    name: '株式会社コロプラ',
    term: '2024年8月上旬 (3Days)',
    content:
      'マルチプレイヤーゲームのリアルタイム技術を学びました。TPS用の専用ゲームサーバーをGolangで設計・実装し、クライアントとサーバー間のリアルタイム通信のプロトコルを設計しました。コロプラのサーバーエンジン「prizm」を使い、リアルタイム同期やゲーム内状態管理の実装を行い、クラウド展開やチート対策など運用課題にも取り組みました。',
  },
  {
    name: 'LINEヤフー株式会社',
    term: '2024年8月26日〜2024年10月4日 (予定)',
    content: 'comming soon...',
  },
];
