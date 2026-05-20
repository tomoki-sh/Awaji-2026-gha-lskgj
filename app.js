// ====== データ ======
const mapsUrl = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

const data = {
  fixed: [
    { time: "9:30", text: "日産レンタカー上本町店でレンタカー受取" },
    { time: "10:30", text: "鴫野駅で同行者ピックアップ" },
    { time: "12:30", text: "ありい亭 中田店でランチ（焼肉）" },
    { time: "21:30", text: "日産レンタカー上本町店に返却" }
  ],

  timeline: [
    { time: "9:30", text: "レンタカー受取（上本町）" },
    { time: "10:30", text: "鴫野駅で同行者ピックアップ" },
    { time: "12:30", text: "ありい亭 中田店（焼肉ランチ）" },
    { time: "14:00", text: "出発" },
    { time: "14:30〜15:50", text: "淡路夢舞台（散策）" },
    { time: "16:00〜17:00", text: "幸せのパンケーキ" },
    { time: "17:15〜17:45", text: "多賀の浜（雨次第）" },
    { time: "18:15〜19:10", text: "浜ちどり（夕食）" },
    { time: "19:20", text: "淡路島を出発" },
    { time: "20:50", text: "鴫野駅で同行者を送る" },
    { time: "21:20", text: "レンタカー返却" }
  ],

  branches: [
    {
      title: "① ありい亭後（13:45ごろ）",
      desc: "お腹の余裕で分岐します。",
      items: [
        "<strong>余裕あり</strong> → 幸せのパンケーキ → 淡路夢舞台",
        "<strong>コーヒーだけならいける</strong> → TAKAMURA COFFEE → 淡路夢舞台",
        "<strong>何も入らない</strong> → 淡路夢舞台へ直行"
      ]
    },
    {
      title: "② 淡路夢舞台後",
      desc: "出る時刻で分岐します。",
      items: [
        "<strong>〜15:45</strong> → カフェ → 多賀の浜 → 浜ちどり",
        "<strong>16:15〜16:45</strong> → カフェ or 多賀の浜 → 浜ちどり",
        "<strong>17:00以降</strong> → 浜ちどり直行",
        "<strong>雨が強い</strong> → 絵島・岩屋港を短時間 → 浜ちどり"
      ]
    }
  ],

  spots: [
    {
      name: "淡路夢舞台",
      images: ["images/yumebutai.jpg", "images/yumebutai_2.jpg"],
      links: [{ label: "公式サイト", url: "https://www.yumebutai.co.jp/" }],
      badges: [{ text: "確定", cls: "priority-top" }, { text: "雨でもOK", cls: "ok" }],
      desc: "今回の軸。安藤忠雄設計の建築・水庭・百段苑が見どころ。",
      meta: [
        ["営業時間", "7:00〜22:00（無料エリア）／あわじグリーン館10:00〜18:00"],
        ["所要時間", "45〜75分"]
      ],
      notes: "<strong>おすすめルート:</strong> 地下駐車場 → 水庭 → 円形フォーラム → 海回廊 → 百段苑（少し） → 展望テラス。雨が強い時は<strong>あわじグリーン館</strong>中心に。",
      maps: "淡路夢舞台"
    },
    {
      name: "あわじグリーン館",
      images: ["images/greenhouse.jpg"],
      links: [{ label: "公式サイト", url: "https://awaji-botanicalgarden.com/" }],
      badges: [{ text: "雨対策◎", cls: "priority-top" }, { text: "屋内", cls: "ok" }],
      desc: "夢舞台内の温室・植物園。雨が強い日のメイン代替になる。",
      meta: [
        ["営業時間", "10:00〜18:00（最終入館17:30）"],
        ["企画展", "5/16〜7/12『花の楽園〜植物のある暮らし〜』"]
      ],
      notes: "夢舞台の屋外回廊や百段苑を短縮して、ここで時間を取るのが雨の日の正攻法。",
      maps: "あわじグリーン館"
    },
    {
      name: "多賀の浜",
      images: ["images/taganohama.jpg"],
      links: [{ label: "観光ガイド", url: "https://www.awajishima-kanko.jp/manual/detail.html?bid=393" }],
      badges: [{ text: "雨次第", cls: "" }],
      desc: "播磨灘に沈む夕日を眺められる海岸。",
      meta: [
        ["時間目安", "17:20〜18:10のどこか・15〜30分だけ"],
        ["駐車場", "250台・500円"]
      ],
      notes: "<strong>注意:</strong> 雨が強ければ無理しない。夕日を最後まで粘ると浜ちどり・返却がタイトに。",
      maps: "多賀の浜海水浴場"
    },
    {
      name: "絵島・岩屋港周辺",
      images: ["images/eshima.jpg"],
      links: [{ label: "観光ガイド", url: "https://awajikanko.com/eshima/" }],
      badges: [{ text: "短時間", cls: "" }],
      desc: "浜ちどりに少し早く着きそうな時の10〜15分スポット。",
      meta: [["使い方", "車から雰囲気を見るだけでもOK"]],
      maps: "絵島 岩屋港"
    },
    {
      name: "道の駅あわじ",
      images: ["images/michinoeki.jpg"],
      links: [{ label: "公式サイト", url: "https://michi-awaji.co.jp/" }],
      badges: [{ text: "時間調整", cls: "" }, { text: "橋ビュー", cls: "ok" }],
      desc: "明石海峡大橋を真下から見られる、淡路ICすぐの道の駅。",
      meta: [
        ["売店", "平日 9:30〜17:30"],
        ["レストラン海峡楼", "11:00〜17:30（L.O.17:00）"]
      ],
      notes: "夢舞台後、浜ちどり方面へ向かう前後の時間調整向け。橋を見て少し歩く・お土産用途。",
      maps: "道の駅あわじ"
    },
    {
      name: "淡路SA・大観覧車",
      images: ["images/awajisa.jpg"],
      links: [{ label: "公式サイト", url: "http://awaji-kanransya.com/" }],
      badges: [{ text: "時間調整", cls: "" }],
      desc: "帰り道の時間調整。雨で多賀の浜をやめた時の候補。",
      notes: "<strong>注意:</strong> 帰りの工事・渋滞があるので無理に入れない。",
      maps: "淡路SA 大観覧車"
    },
    {
      name: "淡路島国営明石海峡公園",
      images: ["images/kaikyopark.jpg"],
      links: [{ label: "公式サイト", url: "https://awaji-kaikyopark.kkr.mlit.go.jp/" }],
      badges: [{ text: "天気回復時", cls: "" }],
      desc: "夢舞台の近く。花・水辺・芝生の広い公園。春のカーニバル開催中。",
      meta: [
        ["営業時間", "9:30〜17:00"],
        ["入園料", "大人450円"]
      ],
      notes: "雨が止んでいて、夢舞台周辺でもう少し歩きたい時。17:00閉園なので早めの時間で。",
      maps: "淡路島国営明石海峡公園"
    },
    {
      name: "あわじ花さじき",
      images: ["images/hanasajiki.jpg"],
      links: [{ label: "公式サイト", url: "https://awajihanasajiki.jp/" }],
      badges: [{ text: "天気回復時", cls: "" }, { text: "入園無料", cls: "ok" }],
      desc: "見晴らしの良い花畑。曇り〜小雨でも景色の広がりは楽しめる。",
      meta: [
        ["営業時間", "9:00〜17:00（最終16:30）"],
        ["入園料", "無料（駐車場200円）"]
      ],
      notes: "ありい亭後にお腹いっぱい・雨が止んでいる時の散策候補。",
      maps: "あわじ花さじき"
    },
    {
      name: "パルシェ 香りの館",
      images: ["images/parchez.jpg"],
      links: [{ label: "公式サイト", url: "https://www.parchez.co.jp/" }],
      badges: [{ text: "屋内", cls: "ok" }, { text: "体験系", cls: "" }],
      desc: "手作り香水・ハーブ体験。「歩くだけでない」要素を入れたい時に。",
      meta: [
        ["営業時間", "10:00〜17:00"],
        ["体験最終受付", "16:30"],
        ["香りの湯", "5/18〜6/19 改修工事休業"]
      ],
      notes: "メイン動線から外れるので、かなり時間が余った時のオプション。",
      maps: "パルシェ 香りの館"
    }
  ],

  restaurants: [
    {
      name: "ありい亭 中田店",
      images: ["images/ariitei.jpg", "images/ariitei_2.jpg", "images/ariitei_3.jpg"],
      links: [
        { label: "食べログ", url: "https://tabelog.com/hyogo/A2806/A280601/28006780/" }
      ],
      ratings: { tabelog: "3.57", reviews: 275 },
      badges: [{ text: "確定", cls: "priority-top" }, { text: "昼食", cls: "" }],
      desc: "自家牧場の黒毛和牛。12:30〜の昼食（焼肉）。",
      maps: "ありい亭 中田店"
    },
    {
      name: "浜ちどり",
      images: ["images/hamachidori.jpg", "images/hamachidori_2.jpg", "images/hamachidori_3.jpg"],
      links: [
        { label: "店舗情報", url: "https://info-bird.jp/hamachidori/" },
        { label: "食べログ", url: "https://tabelog.com/hyogo/A2806/A280601/28034834/" }
      ],
      ratings: { tabelog: "3.48", reviews: 340 },
      badges: [{ text: "本命", cls: "priority-top" }, { text: "夕食", cls: "" }],
      desc: "岩屋港の岩屋ポートビル2階。名物は島の生しらす丼。",
      meta: [
        ["営業時間", "11:00〜20:00（夜L.O.19:45）"],
        ["定休日", "火曜"],
        ["予約", "不可"],
        ["入店時刻", "18:15〜19:10推奨"]
      ],
      notes: "<strong>注意:</strong> 予約不可。混んでいたら<strong>きとら津名店</strong>や<strong>友明丸</strong>へ切り替え。",
      maps: "お食事処 浜ちどり 岩屋港"
    },
    {
      name: "海鮮料理きとら 津名店",
      images: ["images/kitora.jpg"],
      links: [
        { label: "公式サイト", url: "https://kaisenkitora.com/" },
        { label: "食べログ", url: "https://tabelog.com/hyogo/A2806/A280601/28040141/" }
      ],
      ratings: { tabelog: "3.41", reviews: 139 },
      badges: [{ text: "バックアップ", cls: "priority-back" }],
      desc: "浜ちどりが混んでいた時の控え。津名一宮ICに近い。",
      meta: [
        ["営業時間", "ランチ11:00〜15:00／ディナー17:00〜22:00（L.O.21:00）"],
        ["定休日", "年中無休"],
        ["駐車場", "共同200台"]
      ],
      maps: "海鮮料理きとら 津名店"
    },
    {
      name: "漁師めし 友明丸",
      images: ["images/tomoakimaru.jpg"],
      links: [
        { label: "公式サイト", url: "https://www.tomoakimaru.com/" }
      ],
      badges: [{ text: "岩屋方面バックアップ", cls: "priority-back" }],
      desc: "魚系で軽め。浜ちどり方面のもうひとつの夕食候補。",
      meta: [
        ["営業時間", "11:00〜15:00／17:00〜19:00（L.O.閉店30分前）"],
        ["定休日", "水曜"]
      ],
      notes: "平日夜は<strong>19:00閉店</strong>。18時台前半までの入店が安全。",
      maps: "漁師めし 友明丸 淡路島"
    },
    {
      name: "GARB COSTA ORANGE",
      images: ["images/garb.png"],
      links: [
        { label: "公式サイト", url: "https://restaurant.balnibarbi.com/shops/garb_costaorange" },
        { label: "食べログ", url: "https://tabelog.com/hyogo/A2806/A280601/28054542/" }
      ],
      ratings: { tabelog: "3.49", reviews: 526 },
      badges: [{ text: "営業要確認・有力", cls: "priority-back" }],
      desc: "夕日を望む海辺のレストラン＆カフェ。雰囲気重視。",
      meta: [
        ["営業時間", "ランチ11:00〜15:00／ディナーL.O.20:00"],
        ["定休日", "公式は記載なし／食べログ等では『無休』情報あり"]
      ],
      notes: "<strong>営業有無を当日確認</strong>。営業していれば雰囲気のある夕食候補。",
      maps: "GARB COSTA ORANGE 淡路島"
    },
    {
      name: "青海波 海の舎",
      images: ["images/seikaiha.jpg"],
      links: [
        { label: "公式サイト", url: "https://awaji-seikaiha.com/uminoya/" }
      ],
      badges: [{ text: "雰囲気重視", cls: "" }],
      desc: "海沿いのクラシックな洋食レストラン。雨の日でも雰囲気を保ちやすい。",
      meta: [
        ["ランチ", "11:00〜15:00"],
        ["カフェ", "14:00〜17:00"],
        ["ディナー", "17:00〜21:00（L.O.19:20）"]
      ],
      notes: "少し大人っぽい雰囲気。GARBや浜ちどりの代替に。",
      maps: "青海波 海の舎 淡路島"
    },
    {
      name: "クラフトキッチン / CRAFT CIRCUS",
      images: ["images/craftcircus.jpg"],
      links: [
        { label: "公式サイト", url: "https://awajicraftcircus.com/" },
        { label: "食べログ", url: "https://tabelog.com/hyogo/A2806/A280601/28047055/" }
      ],
      ratings: { tabelog: "3.48", reviews: 252 },
      badges: [{ text: "木曜定休", cls: "danger" }],
      desc: "玉ねぎバーガー、島ピザなど。",
      meta: [
        ["営業時間", "11:00〜19:00"],
        ["定休日", "木曜"]
      ],
      notes: "5/21は<strong>定休日</strong>。雰囲気は良いが、臨時営業確認が取れた場合のみ。",
      maps: "CRAFT CIRCUS 淡路島"
    },
    {
      name: "淡路シェフガーデン",
      images: ["images/chefgarden.jpg"],
      links: [
        { label: "公式サイト", url: "https://www.awaji-chefgarden.com/" }
      ],
      badges: [{ text: "選択肢豊富", cls: "" }],
      desc: "フードコート形式。満腹感が読めない時・店を決めきれない時に。",
      meta: [
        ["営業時間", "11:00〜20:00"],
        ["席数", "屋内100席／テラス600席"]
      ],
      notes: "テナントごとに営業日が異なるので、当日は現地で選ぶ前提。雨だとテラスの魅力が落ちる。",
      maps: "淡路シェフガーデン"
    },
    {
      name: "きとら 淡路夢舞台店",
      images: ["images/kitora.jpg"],
      links: [
        { label: "公式サイト", url: "https://www.yumebutai.co.jp/restaurant_kitora/" }
      ],
      badges: [{ text: "営業要確認", cls: "danger" }],
      desc: "夢舞台内で便利だが、木曜・不定休と案内されているため不確実。",
      notes: "当日営業確認が取れた場合のみ。",
      maps: "きとら 淡路夢舞台店"
    },
    {
      name: "食い処おかや",
      links: [
        { label: "店舗情報", url: "https://sci-awaji.jp/eemon_umaimon/okaya/" }
      ],
      badges: [{ text: "完全保険", cls: "priority-back" }],
      desc: "津名方面の和食・定食系ローカル店。完全バックアップ枠。",
      meta: [
        ["営業時間", "11:00〜20:00"],
        ["定休日", "水曜"],
        ["駐車場", "10台"]
      ],
      notes: "デート感より実用性。浜ちどり・きとらが全てNGだった時の保険。",
      maps: "食い処おかや 淡路島"
    },
    {
      name: "ええとこどり 大谷店",
      images: ["images/eetokodori.jpg"],
      links: [
        { label: "観光ガイド", url: "https://www.awajishima-kanko.jp/manual/detail.html?bid=544" }
      ],
      badges: [{ text: "遅め夕食保険", cls: "priority-back" }],
      desc: "お好み焼き・焼鳥。営業時間が長く、帰りが押した時の安全弁。",
      meta: [
        ["営業時間", "11:00〜15:00／17:00〜22:30（L.O.22:00）"],
        ["定休日", "年中無休"]
      ],
      notes: "昼が焼肉だとやや重め。完全な最終手段として。",
      maps: "ええとこどり 大谷店"
    },
    {
      name: "淡路SA上り 飲食ゾーン",
      images: ["images/awajisa.jpg"],
      links: [
        { label: "SA情報", url: "https://www.jb-highway.co.jp/topics/business_hours.html" }
      ],
      badges: [{ text: "最終安全弁", cls: "priority-back" }],
      desc: "帰り道の最終夕食保険。フードコート・売店24時間。明石海峡大橋の眺めも◎。",
      meta: [
        ["フードコート", "24時間"],
        ["レストラン", "平日8:00〜21:00（L.O.20:45）"]
      ],
      notes: "デート感は弱いが安心感は高い。最終手段だが、橋ビューがあるので完全な妥協にはならない。",
      maps: "淡路SA 上り"
    }
  ],

  cafes: [
    {
      name: "幸せのパンケーキ 淡路島テラス",
      images: ["images/pancake.jpg", "images/pancake_2.jpg", "images/pancake_3.jpg"],
      links: [
        { label: "公式サイト", url: "https://magia.tokyo/awaji/" },
        { label: "食べログ", url: "https://tabelog.com/hyogo/A2806/A280601/28055156/" }
      ],
      ratings: { tabelog: "3.47", reviews: 1149 },
      badges: [{ text: "最優先", cls: "priority-top" }, { text: "全席オーシャンビュー", cls: "ok" }],
      desc: "海の見えるカフェの代表格。223席。デート向け。",
      meta: [
        ["営業時間", "平日10:00〜20:00（L.O.18:45）"],
        ["おすすめ", "14:20〜15:20 または 16:15〜17:15"]
      ],
      notes: "焼肉後すぐだと重いかも。予約できるなら推奨。雨予報なので<strong>屋内席・屋根あり席</strong>が理想。",
      maps: "幸せのパンケーキ 淡路島テラス"
    },
    {
      name: "TAKAMURA COFFEE ROASTERS",
      images: ["images/takamura.jpg", "images/takamura_2.jpg", "images/takamura_3.jpg"],
      links: [
        { label: "公式サイト", url: "https://takamura-coffee.com/pages/visit-awajishima" },
        { label: "食べログ", url: "https://tabelog.com/hyogo/A2806/A280601/28063123/" }
      ],
      ratings: { tabelog: "3.49", reviews: 302 },
      badges: [{ text: "コーヒー本命", cls: "priority-top" }],
      desc: "食後の軽い休憩に。海カフェではないが動線上で現実的。",
      meta: [
        ["営業時間", "10:00〜18:00"],
        ["定休日", "水曜（5/21は営業）"],
        ["予約", "不可"],
        ["住所", "淡路市生穂新島5-8"]
      ],
      maps: "TAKAMURA COFFEE ROASTERS 淡路島店"
    },
    {
      name: "GARB COSTA ORANGE",
      images: ["images/garb.png"],
      links: [
        { label: "公式サイト", url: "https://restaurant.balnibarbi.com/shops/garb_costaorange" },
        { label: "食べログ", url: "https://tabelog.com/hyogo/A2806/A280601/28054542/" }
      ],
      ratings: { tabelog: "3.49", reviews: 526 },
      badges: [{ text: "営業要確認・有力", cls: "priority-back" }],
      desc: "海辺の雰囲気が良いカフェ＆ダイニング。",
      meta: [
        ["営業時間", "11:00〜21:00"],
        ["定休日", "要確認"]
      ],
      notes: "営業有無を当日確認。営業していればパンケーキの混雑時の代替に。",
      maps: "GARB COSTA ORANGE 淡路島"
    },
    {
      name: "miele the DINER",
      images: ["images/miele.jpg"],
      links: [
        { label: "公式サイト", url: "https://miele-the-diner.com/" },
        { label: "食べログ", url: "https://tabelog.com/hyogo/A2806/A280601/28066227/" }
      ],
      ratings: { tabelog: "3.08" },
      badges: [{ text: "ハワイ風", cls: "" }],
      desc: "1Fアメリカンダイナー・2Fカフェ。明るくカジュアル。",
      meta: [
        ["営業時間", "11:00〜19:00（L.O.18:30）"],
        ["定休日", "火曜"]
      ],
      maps: "miele the DINER 淡路島"
    },
    {
      name: "のじまスコーラ／カフェ・スコーラ",
      images: ["images/nojima.jpg"],
      links: [
        { label: "公式サイト", url: "https://nojima-scuola.com/" }
      ],
      badges: [{ text: "軽い休憩", cls: "" }],
      desc: "元小学校の建物。TAKAMURAとは違う雰囲気の軽い休憩。",
      meta: [
        ["ランチ", "平日11:00〜14:00"],
        ["カフェ", "14:00〜17:30（L.O.17:00）"]
      ],
      notes: "海ビュー最優先ではないが、雨の日の屋内休憩に。",
      maps: "のじまスコーラ"
    },
    {
      name: "PICNIC GARDEN（Frogs FARM）",
      images: ["images/picnic.jpg"],
      links: [
        { label: "公式サイト", url: "https://frogsfarm.jp/eat/picnic-garden/" }
      ],
      badges: [{ text: "天気回復時", cls: "" }],
      desc: "海辺と芝生の開放感。ドリンク・スイーツ・ハンバーガー。",
      meta: [
        ["営業時間", "11:00〜21:00（L.O.20:00）"]
      ],
      notes: "屋外・開放感が魅力。雨が強いと優先度低め。焼肉後はドリンク休憩向き。",
      maps: "PICNIC GARDEN 淡路島"
    }
  ],

  routes: [
    { from: "上本町（日産レンタカー）", to: "鴫野駅", meta: "車で約20〜30分" },
    { from: "鴫野駅", to: "ありい亭 中田店（淡路島）", meta: "約1時間30分（明石海峡大橋経由）" },
    { from: "ありい亭", to: "淡路夢舞台", meta: "約30〜40分（北上）" },
    { from: "淡路夢舞台", to: "幸せのパンケーキ", meta: "約25〜35分" },
    { from: "幸せのパンケーキ", to: "多賀の浜", meta: "約5〜10分" },
    { from: "多賀の浜", to: "浜ちどり（岩屋港）", meta: "約30〜40分" },
    { from: "浜ちどり", to: "鴫野駅", meta: "約1時間30分（19:20出発推奨）" },
    { from: "鴫野駅", to: "上本町（返却）", meta: "約20〜30分・21:30返却" }
  ],

  packing: [
    {
      title: "必須",
      items: ["運転免許証", "レンタカー予約確認書", "現金（駐車場代・雑費）", "クレジットカード", "スマホ＋充電ケーブル", "モバイルバッテリー"]
    },
    {
      title: "雨・強風対策（5/21は荒天）",
      items: ["丈夫な傘 ×2（折りたたみより通常傘推奨）", "大きめのタオル", "替えの靴下 or 防水スプレー済み靴", "薄手のレインウェア／撥水ジャケット", "薄手の上着（最高気温23°Cの予報）"]
    },
    {
      title: "あると便利",
      items: ["車載スマホホルダー", "ティッシュ・ウェットティッシュ", "車内用ゴミ袋", "飲み物・お菓子", "カメラ／スマホ（写真）"]
    },
    {
      title: "同行者への気配り",
      items: ["車内BGM（プレイリスト）", "浜ちどりの場所をマップに保存", "可能ならカフェ予約", "雨天時の代替案を頭に入れておく"]
    }
  ],

  weather: {
    current: "小雨、23°C（73°F）",
    daily: [
      { date: "5/20 (水)", low: "22°C", high: "26°C", desc: "一時的な雨や雷雨", isToday: false },
      { date: "5/21 (木)", low: "20°C", high: "23°C", desc: "激しいにわか雨", isToday: true },
      { date: "5/22 (金)", low: "19°C", high: "24°C", desc: "雲が増す", isToday: false },
      { date: "5/23 (土)", low: "19°C", high: "24°C", desc: "曇り", isToday: false },
      { date: "5/24 (日)", low: "20°C", high: "24°C", desc: "曇りのち薄日が差す", isToday: false },
      { date: "5/25 (月)", low: "21°C", high: "26°C", desc: "おおむね晴れ", isToday: false },
      { date: "5/26 (火)", low: "18°C", high: "25°C", desc: "上層雲からの晴れ間", isToday: false }
    ],
    alerts: [
      { title: "強風注意報（淡路市陸上）", until: "木 6:00 JST", source: "気象庁" },
      { title: "波浪注意報", until: "木 6:00 JST", source: "気象庁" },
      { title: "高潮注意報（播磨灘側）", until: "木 0:00〜6:00 JST", source: "気象庁" },
      { title: "雷注意報（発令中）", until: "終了時刻不明", source: "気象庁" }
    ]
  },

  info: [
    {
      type: "warn",
      title: "🚧 帰路の工事通行止め",
      text: "5/20〜5/28、第二神明道路・須磨IC〜阪神高速3号神戸線・湊川方面で終日通行止め。<strong>淡路島出発は19:20〜19:30目標</strong>。"
    },
    {
      type: "info",
      title: "🌅 日の入り",
      text: "5/21の淡路市の日の入りは19:01。多賀の浜の夕景は狙えるが、粘ると返却がタイト。"
    },
    {
      type: "info",
      title: "📞 当日電話確認したい店",
      text: "GARB COSTA ORANGE／クラフトキッチン／きとら淡路夢舞台店 — 営業有無を確認。"
    }
  ]
};

// ====== ヘルパー ======
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function escapeAttr(s) { return String(s).replace(/"/g, "&quot;"); }

function renderFixed() {
  $("#fixed-list").innerHTML = data.fixed.map(f =>
    `<li><span class="time">${f.time}</span><span>${f.text}</span></li>`
  ).join("");
}

function renderTimeline() {
  $("#timeline").innerHTML = data.timeline.map(t =>
    `<li><span class="t-time">${t.time}</span>${t.text}</li>`
  ).join("");
}

function renderBranches() {
  $("#branches").innerHTML = data.branches.map(b => `
    <div class="branch-card">
      <h4>${b.title}</h4>
      <p style="margin:4px 0 8px;color:var(--ink-soft);font-size:0.88rem;">${b.desc}</p>
      <ul>${b.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>
  `).join("");
}

function renderRatings(r) {
  if (!r) return "";
  const parts = [];
  if (r.tabelog) {
    parts.push(`<span class="rating tabelog">食べログ <strong>★${r.tabelog}</strong>${r.reviews ? `<span class="rev"> (${r.reviews}件)</span>` : ""}</span>`);
  }
  if (r.google) {
    parts.push(`<span class="rating google">Googleマップ <strong>★${r.google}</strong></span>`);
  }
  return parts.length ? `<div class="ratings">${parts.join("")}</div>` : "";
}

function renderLinkButtons(p) {
  const buttons = [];
  if (p.maps) {
    buttons.push(`<a class="btn maps-btn" href="${mapsUrl(p.maps)}" target="_blank" rel="noopener">📍 Googleマップ</a>`);
  }
  (p.links || []).forEach(l => {
    const cls = l.label.includes("食べログ") ? "tabelog-btn" : "site-btn";
    const icon = l.label.includes("食べログ") ? "🍴" : l.label.includes("ガイド") ? "📖" : "🔗";
    buttons.push(`<a class="btn ${cls}" href="${escapeAttr(l.url)}" target="_blank" rel="noopener">${icon} ${l.label}</a>`);
  });
  return buttons.length ? `<div class="card-buttons">${buttons.join("")}</div>` : "";
}

function renderImageBlock(p) {
  const imgs = p.images || (p.image ? [p.image] : []);
  if (!imgs.length) return "";
  const main = imgs[0];
  const subs = imgs.slice(1);
  const mainHtml = `<button class="card-image" data-images='${JSON.stringify(imgs)}' data-index="0" aria-label="写真を拡大"><img src="${main}" alt="${escapeAttr(p.name)}" loading="lazy" /></button>`;
  const thumbsHtml = subs.length
    ? `<div class="card-thumbs">${subs.map((src, i) =>
        `<button class="thumb" data-images='${JSON.stringify(imgs)}' data-index="${i + 1}" aria-label="写真${i + 2}を拡大"><img src="${src}" alt="${escapeAttr(p.name)} ${i + 2}" loading="lazy" /></button>`
      ).join("")}</div>`
    : "";
  return mainHtml + thumbsHtml;
}

function renderCards(targetId, items) {
  $(targetId).innerHTML = items.map(p => {
    const badges = (p.badges || []).map(b => `<span class="badge ${b.cls || ""}">${b.text}</span>`).join("");
    const meta = (p.meta || []).map(([k, v]) =>
      `<div class="meta-row"><span class="meta-label">${k}</span><span>${v}</span></div>`
    ).join("");
    const notes = p.notes ? `<div class="notes">${p.notes}</div>` : "";
    return `
      <article class="card">
        ${renderImageBlock(p)}
        <div class="card-body">
          <div class="card-head">
            <h3 class="card-name">${p.name}</h3>
            <div class="card-badges">${badges}</div>
          </div>
          ${renderRatings(p.ratings)}
          ${p.desc ? `<p class="card-desc">${p.desc}</p>` : ""}
          ${meta ? `<div class="meta">${meta}</div>` : ""}
          ${notes}
          ${renderLinkButtons(p)}
        </div>
      </article>
    `;
  }).join("");
}

function renderRoutes() {
  $("#route-block").innerHTML = data.routes.map(r => `
    <div class="route-step">
      <div class="step-from-to">${r.from} → ${r.to}</div>
      <div class="step-meta">${r.meta}</div>
    </div>
  `).join("");
}

function renderPacking() {
  $("#packing-block").innerHTML = data.packing.map(g => `
    <div class="packing-group">
      <h3>${g.title}</h3>
      <ul>${g.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>
  `).join("");
}

function renderWeather() {
  const w = data.weather;
  const daily = w.daily.map(d => `
    <div class="weather-day ${d.isToday ? "today" : ""}">
      <div class="wd-date">${d.date}${d.isToday ? "<span class='wd-today'>当日</span>" : ""}</div>
      <div class="wd-temp">${d.low} / ${d.high}</div>
      <div class="wd-desc">${d.desc}</div>
    </div>
  `).join("");
  const alerts = w.alerts.map(a => `
    <div class="alert-row">
      <span class="alert-icon">⚠️</span>
      <div>
        <strong>${a.title}</strong>
        <div class="alert-meta">${a.until}・${a.source}</div>
      </div>
    </div>
  `).join("");
  $("#weather-block").innerHTML = `
    <div class="weather-now">
      <span class="wn-label">現在</span>
      <span class="wn-val">${w.current}</span>
    </div>
    <h3 class="subhead">7日予報</h3>
    <div class="weather-grid">${daily}</div>
    <h3 class="subhead">⚠️ 悪天候アラート</h3>
    <div class="alerts">${alerts}</div>
  `;
}

function renderInfo() {
  $("#info-block").innerHTML = data.info.map(i => `
    <div class="info-card ${i.type === "warn" ? "warn" : ""}">
      <h3>${i.title}</h3>
      <p style="margin:0;">${i.text}</p>
    </div>
  `).join("");
}

// ====== タブ切替 ======
function setupTabs() {
  $$(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      $$(".tab").forEach(t => t.classList.toggle("active", t === tab));
      $$(".panel").forEach(p => p.classList.toggle("active", p.id === target));
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

// ====== ライトボックス ======
const lightboxState = { images: [], index: 0 };

function openLightbox(images, index = 0) {
  lightboxState.images = images;
  lightboxState.index = index;
  const lb = $("#lightbox");
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  updateLightboxImage();
}

function closeLightbox() {
  $("#lightbox").hidden = true;
  document.body.style.overflow = "";
}

function updateLightboxImage() {
  const { images, index } = lightboxState;
  $("#lightbox-img").src = images[index];
  $("#lightbox-counter").textContent = `${index + 1} / ${images.length}`;
  $("#lightbox-prev").style.visibility = images.length > 1 ? "visible" : "hidden";
  $("#lightbox-next").style.visibility = images.length > 1 ? "visible" : "hidden";
}

function lightboxNext() {
  lightboxState.index = (lightboxState.index + 1) % lightboxState.images.length;
  updateLightboxImage();
}
function lightboxPrev() {
  lightboxState.index = (lightboxState.index - 1 + lightboxState.images.length) % lightboxState.images.length;
  updateLightboxImage();
}

function setupLightbox() {
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".card-image, .thumb");
    if (trigger) {
      const images = JSON.parse(trigger.dataset.images);
      const index = parseInt(trigger.dataset.index, 10) || 0;
      openLightbox(images, index);
      return;
    }
    if (e.target.closest("#lightbox-close")) { closeLightbox(); return; }
    if (e.target.closest("#lightbox-next")) { lightboxNext(); return; }
    if (e.target.closest("#lightbox-prev")) { lightboxPrev(); return; }
    if (e.target.id === "lightbox") { closeLightbox(); }
  });

  document.addEventListener("keydown", (e) => {
    if ($("#lightbox").hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowRight") lightboxNext();
    else if (e.key === "ArrowLeft") lightboxPrev();
  });
}

// ====== init ======
document.addEventListener("DOMContentLoaded", () => {
  renderFixed();
  renderTimeline();
  renderBranches();
  renderCards("#spots-cards", data.spots);
  renderCards("#restaurants-cards", data.restaurants);
  renderCards("#cafes-cards", data.cafes);
  renderRoutes();
  renderPacking();
  renderWeather();
  renderInfo();
  setupTabs();
  setupLightbox();
});
