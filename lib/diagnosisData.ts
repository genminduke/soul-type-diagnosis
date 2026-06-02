export type AnswerKey = "A" | "B" | "C" | "D" | "E" | "F";

export type Question = {
  id: number;
  text: string;
  answers: { key: AnswerKey; text: string }[];
};

export type DiagnosisResult = {
  typeName: string;
  soulName: string;
  icon: string;
  title: string;
  summary: string;
  challenge: string;
  firstStep: string;
  firstStepDetail: string;
  recommendedSession: string;
  sessionDescription: string;
};

export const questions: Question[] = [
  {
    id: 1,
    text: "直感で惹かれる言葉はどれですか？",
    answers: [
      { key: "A", text: "導く・照らす" },
      { key: "B", text: "癒す・包む" },
      { key: "C", text: "表現・魅せる" },
      { key: "D", text: "創る・ひらく" },
      { key: "E", text: "深める・つなぐ" },
      { key: "F", text: "守る・支える" },
    ],
  },
  {
    id: 2,
    text: "あなたの中で“自然にやってしまうこと”は？",
    answers: [
      { key: "A", text: "人の相談に乗って背中を押す" },
      { key: "B", text: "相手の気持ちに寄り添い癒してしまう" },
      { key: "C", text: "感性を言葉や音・アートで伝える" },
      { key: "D", text: "枠にとらわれず新しいことを考える" },
      { key: "E", text: "深いテーマや真理を考えるのが好き" },
      { key: "F", text: "周囲を気遣い安心感を与える" },
    ],
  },
  {
    id: 3,
    text: "よく周囲から言われるあなたの印象は？",
    answers: [
      { key: "A", text: "頼れる・方向性をくれる人" },
      { key: "B", text: "癒される・話すと安心する" },
      { key: "C", text: "面白い・個性的・魅力的" },
      { key: "D", text: "発想がユニーク・未来的" },
      { key: "E", text: "深い・不思議・スピリチュアル" },
      { key: "F", text: "優しい・家庭的・気が利く" },
    ],
  },
  {
    id: 4,
    text: "“本当にやりたかったこと”を子どもの頃に思い出すと？",
    answers: [
      { key: "A", text: "先生ごっこ／まとめ役" },
      { key: "B", text: "ごっこ遊び／おままごと／お世話" },
      { key: "C", text: "お絵描き／歌う／踊る" },
      { key: "D", text: "レゴ／発明／秘密基地" },
      { key: "E", text: "1人で本・空・宇宙を考えていた" },
      { key: "F", text: "お手伝い／みんなの調整係" },
    ],
  },
];

export const results: Record<AnswerKey, DiagnosisResult> = {
  A: {
    typeName: "導き手タイプ",
    soulName: "ガイド魂",
    icon: "💎",
    title: "あなたは【導き手タイプ】",
    summary: "あなたは、人の可能性や未来を見抜く力を持つ魂のガイド。迷っている人に道を示したり、言葉で背中を押したり──自然と人を導く存在です。",
    challenge: "でもそのぶん、自分のことは後回しにしがち。「私はどうしたい？」という魂の声に、今こそ耳を傾けるときです。",
    firstStep: "「本当はどうしたい？」を1行書き出す。",
    firstStepDetail: "迷いが整理され、内なる羅針盤が動き出します。あなたの道がクリアになるほど、周りも自然と導かれていくでしょう。",
    recommendedSession: "生命の樹鑑定",
    sessionDescription: "生命の樹にそって、あなたの魂の設計図を読み解いていきます。自分の本質と向き合うことで、誰かの道しるべになる力がより開かれ、“導く人”としての背中に、確かな自信が宿るでしょう。",
  },
  B: {
    typeName: "癒し手タイプ",
    soulName: "ヒーラー魂",
    icon: "🌸",
    title: "あなたは【癒し手タイプ】",
    summary: "あなたの存在そのものが、誰かの心をやさしく包み込む癒しです。言葉にしなくても寄り添える感性、深く感じる力は、魂のギフト。",
    challenge: "だけど、ときにその優しさが「自分を後回しにする癖」につながることも。まずはあなた自身が満たされることが、世界への癒しの源となります。",
    firstStep: "今日の自分に、優しい言葉をひとつかけてあげる。",
    firstStepDetail: "胸に手を当てて、「大丈夫だよ」「よく頑張ってるね」「今日は休んでいいよ」──どんな言葉でも、あなたがほっとするものを。たった1分のセルフヒーリングで、あなたのエネルギーは驚くほど整い始めます。",
    recommendedSession: "女神開花セラピー",
    sessionDescription: "内なる女神性を優しく開花させ、自分を愛し、自分の心を癒す感覚を取り戻していくセッションです。愛を与える前に、自分自身の“愛の泉”を満たしてあげてくださいね。",
  },
  C: {
    typeName: "アーティスト／表現者タイプ",
    soulName: "表現者魂",
    icon: "🎨",
    title: "あなたは【アーティスト／表現者タイプ】",
    summary: "感性を“伝える力”に変えられる、光のアーティスト。言葉や声、アートや空間など──あなたの内なる世界は美しく、それが誰かの心に響いています。",
    challenge: "でもその感性の繊細さゆえに、「伝わらない」「わかってもらえない」という孤独を感じたこともあるかもしれません。",
    firstStep: "1行でも、1枚でもいい。今日の“感じたもの”を何か1つ形にする。",
    firstStepDetail: "ふと浮かんだ言葉、今日の空の写真、一筆の落書き、声のメモ、スマホのカメラで撮った何気ないシーン。そのどれもが、あなたの魂の“命の表現”です。小さくても、形にした瞬間、あなたのエネルギーは流れはじめます。",
    recommendedSession: "AIアートセッション",
    sessionDescription: "AIアートで魂の波動を“視えるカタチ”に。目に見えないあなたのエネルギーが、ビジュアルとして現れたとき、自分の存在の尊さに気づけるはず。「私は、こんなにも美しかったんだ」と感じる瞬間をぜひ体験して。",
  },
  D: {
    typeName: "創造者タイプ",
    soulName: "クリエイター魂",
    icon: "🔥",
    title: "あなたは【創造者タイプ】",
    summary: "あなたは「世界をひらく人」。常識や枠にとらわれず、独自の視点で未来を描いていく魂です。「これまでなかったもの」を創り出すことに、無意識で情熱を燃やしているのではないでしょうか？",
    challenge: "ときに浮いてしまったり、孤独を感じやすいかもしれませんが、それは“未来”を先に感じている証拠。",
    firstStep: "今日ひらめいたことを“3つだけ”書き出す。",
    firstStepDetail: "大きくても小さくても、なんでもOK。形にする必要はありません。書いた瞬間、そのひらめきが“未来の現実”を呼び込み始めます。創造者タイプは、外に出すことで未来が動き出す魂。逆に、頭で抱え続けると流れが止まってしまいます。だからこそ、“書く”という小さなアクションが一番効きます。",
    recommendedSession: "ビジョン創造セッション",
    sessionDescription: "コーチングとアート（AIまたはコラージュ）を融合し、あなたのビジョンを“見える化”していくセッションです。「思いついたこと」を、具体的な未来として具現化し、自分らしい人生の青写真を描いてみませんか？",
  },
  E: {
    typeName: "探究者タイプ",
    soulName: "シャーマン魂",
    icon: "🌌",
    title: "あなたは【探究者タイプ】",
    summary: "真理・魂・宇宙──。見えない世界を深く探ることに魅かれるあなたは、この現実にスピリチュアルな架け橋をかける“魂の探究者”。",
    challenge: "直観に優れ、エネルギーの変化に敏感なあなただからこそ、世の中のざわつきや他人の感情に振り回されない軸が必要です。",
    firstStep: "1分だけ目を閉じて、「今日の私に必要なテーマは？」と問いかける。",
    firstStepDetail: "ふっと浮かんだ言葉やイメージは、あなたの魂が“今ここ”で必要としているメッセージ。探究者タイプは、内側とつながる時間をつくるほど、現実が整う魂です。言葉が浮かばなければ、呼吸を3回するだけでも、軸が戻ります。",
    recommendedSession: "チャネリングメッセージ",
    sessionDescription: "魂や宇宙意識とつながるチャネリングで、あなたの内なる声を“言葉”として受け取る時間。未来のビジョンや使命に気づくきっかけとなるメッセージをお届けします。",
  },
  F: {
    typeName: "守護者タイプ",
    soulName: "マザー魂",
    icon: "🌿",
    title: "あなたは【守護者タイプ】",
    summary: "家族・仲間・子ども・コミュニティ…。あなたは「守る」「育てる」「支える」ことを通して、世界に安心とぬくもりを広げる存在です。",
    challenge: "その優しさは、時に「自分を後回しにしてしまうクセ」へ。「ちゃんとしなきゃ」「私が頑張らなきゃ」──そんな思い込みに、そっとサヨナラしていいんです。",
    firstStep: "今日のあなたが安心できる行動をひとつだけ選んでやってみる。",
    firstStepDetail: "温かい飲み物を飲む、深呼吸を3回する、5分だけ片づける、ふかふかの布団にくるまる、好きな香りをかぐ。どんな小さな行動でも構いません。“私が安心することを選んだ”という事実が、あなたの心とエネルギーをやさしく整えてくれます。",
    recommendedSession: "潜在意識クリアリングセッション",
    sessionDescription: "あなたの奥深くにある「思い込み」「制限」などをやさしく解放し、本来ののびやかで自由な魂へとチューニングしていきます。あなたが笑うことで、世界も笑顔になります。",
  },
};

export function calculateResult(answers: AnswerKey[]): AnswerKey {
  const score: Record<AnswerKey, number> = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  answers.forEach((answer) => {
    score[answer] += 1;
  });

  let winner: AnswerKey = answers[answers.length - 1] || "A";
  let max = score[winner];

  // 同点時は最後に選んだ回答を優先するため、回答履歴を後ろから見る
  for (let i = answers.length - 1; i >= 0; i -= 1) {
    const key = answers[i];
    if (score[key] >= max) {
      winner = key;
      max = score[key];
    }
  }

  return winner;
}
