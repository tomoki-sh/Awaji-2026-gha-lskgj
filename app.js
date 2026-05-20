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
      area: "北淡路 / 東海岸 / 夢舞台エリア",
      coords: [34.5613, 135.0061],
      category: "confirmed",
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
      area: "北淡路 / 東海岸 / 夢舞台内",
      coords: [34.5618, 135.0058],
      category: "confirmed",
      images: ["images/greenhouse.jpg", "images/greenhouse_2.jpg"],
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
      area: "北淡路 / 西海岸",
      coords: [34.4783, 134.8519],
      category: "backup",
      images: ["images/taganohama.jpg", "images/taganohama_2.jpg"],
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
      area: "最北端 / 東海岸 / 明石海峡大橋寄り",
      coords: [34.5919, 135.0157],
      category: "backup",
      images: ["images/eshima.jpg", "images/eshima_2.jpg"],
      links: [{ label: "観光ガイド", url: "https://awajikanko.com/eshima/" }],
      badges: [{ text: "短時間", cls: "" }],
      desc: "浜ちどりに少し早く着きそうな時の10〜15分スポット。",
      meta: [["使い方", "車から雰囲気を見るだけでもOK"]],
      maps: "絵島 岩屋港"
    },
    {
      name: "道の駅あわじ",
      area: "最北端 / 東海岸 / 明石海峡大橋直下",
      coords: [34.6019, 135.0269],
      category: "backup",
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
      area: "最北端 / 東海岸 / 淡路IC近く",
      coords: [34.6133, 135.0317],
      category: "backup",
      images: ["images/awajisa.jpg", "images/awajisa_2.jpg", "images/awajisa_3.jpg"],
      links: [{ label: "公式サイト", url: "http://awaji-kanransya.com/" }],
      badges: [{ text: "時間調整", cls: "" }],
      desc: "帰り道の時間調整。雨で多賀の浜をやめた時の候補。",
      notes: "<strong>注意:</strong> 帰りの工事・渋滞があるので無理に入れない。",
      maps: "淡路SA 大観覧車"
    },
    {
      name: "淡路島国営明石海峡公園",
      area: "北淡路 / 東海岸 / 夢舞台隣接",
      coords: [34.5621, 134.9997],
      category: "backup",
      images: ["images/kaikyopark.jpg", "images/kaikyopark_2.jpg", "images/kaikyopark_3.jpg"],
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
      area: "北淡路 / 東海岸寄り（山側）",
      coords: [34.5650, 134.9778],
      category: "backup",
      images: ["images/hanasajiki.jpg", "images/hanasajiki_2.jpg"],
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
      area: "中淡路 / 西海岸寄り",
      coords: [34.4837, 134.8867],
      category: "backup",
      images: ["images/parchez.jpg", "images/parchez_2.jpg"],
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
      area: "中淡路 / 中田 / 津名一宮IC近く",
      coords: [34.4316, 134.9197],
      category: "confirmed",
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
      area: "最北端 / 東海岸 / 岩屋港",
      coords: [34.5908, 135.0152],
      category: "confirmed",
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
      area: "中淡路 / 東海岸 / 津名一宮IC近く",
      coords: [34.4255, 134.9101],
      category: "backup",
      images: ["images/kitora.jpg", "images/kitora_2.jpg", "images/kitora_3.jpg"],
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
      area: "最北端 / 東海岸 / 岩屋方面",
      coords: [34.5878, 135.0181],
      category: "backup",
      images: ["images/tomoakimaru.jpg"],
      links: [{ label: "公式サイト", url: "https://www.tomoakimaru.com/" }],
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
      area: "北淡路 / 西海岸 / サンセットライン",
      coords: [34.5328, 134.8743],
      category: "warning",
      images: ["images/garb.png", "images/garb_2.jpg", "images/garb_3.jpg"],
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
      area: "北淡路 / 西海岸",
      coords: [34.5230, 134.8709],
      category: "backup",
      images: ["images/seikaiha.jpg", "images/seikaiha_2.jpg"],
      links: [{ label: "公式サイト", url: "https://awaji-seikaiha.com/uminoya/" }],
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
      area: "北淡路 / 西海岸 / 野島平林",
      coords: [34.5151, 134.8715],
      category: "warning",
      images: ["images/craftcircus.jpg", "images/craftcircus_2.jpg", "images/craftcircus_3.jpg"],
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
      area: "北淡路 / 西海岸",
      coords: [34.5169, 134.8770],
      category: "backup",
      images: ["images/chefgarden.jpg"],
      links: [{ label: "公式サイト", url: "https://www.awaji-chefgarden.com/" }],
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
      area: "北淡路 / 東海岸 / 夢舞台内",
      coords: [34.5610, 135.0078],
      category: "warning",
      images: ["images/kitora.jpg", "images/kitora_2.jpg"],
      links: [{ label: "公式サイト", url: "https://www.yumebutai.co.jp/restaurant_kitora/" }],
      badges: [{ text: "営業要確認", cls: "danger" }],
      desc: "夢舞台内で便利だが、木曜・不定休と案内されているため不確実。",
      notes: "当日営業確認が取れた場合のみ。",
      maps: "きとら 淡路夢舞台店"
    },
    {
      name: "食い処おかや",
      area: "中淡路 / 津名方面",
      coords: [34.4259, 134.9028],
      category: "backup",
      links: [{ label: "店舗情報", url: "https://sci-awaji.jp/eemon_umaimon/okaya/" }],
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
      area: "北淡路 / 大谷",
      coords: [34.5179, 134.9220],
      category: "backup",
      images: ["images/eetokodori.jpg"],
      links: [{ label: "観光ガイド", url: "https://www.awajishima-kanko.jp/manual/detail.html?bid=544" }],
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
      area: "最北端 / 帰路上り線",
      coords: [34.6147, 135.0299],
      category: "backup",
      images: ["images/awajisa.jpg", "images/awajisa_2.jpg"],
      links: [{ label: "SA情報", url: "https://www.jb-highway.co.jp/topics/business_hours.html" }],
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
      area: "北淡路 / 西海岸",
      coords: [34.5475, 134.8804],
      category: "confirmed",
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
      area: "中淡路 / 東海岸 / 生穂新島",
      coords: [34.4926, 134.9612],
      category: "confirmed",
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
      area: "北淡路 / 西海岸 / サンセットライン",
      coords: [34.5328, 134.8743],
      category: "warning",
      images: ["images/garb.png", "images/garb_2.jpg", "images/garb_3.jpg"],
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
      area: "北淡路 / 西海岸",
      coords: [34.5169, 134.8770],
      category: "backup",
      images: ["images/miele.jpg", "images/miele_2.jpg", "images/miele_3.jpg"],
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
      area: "北淡路 / 西海岸 / 野島",
      coords: [34.5558, 134.9533],
      category: "backup",
      images: ["images/nojima.jpg", "images/nojima_2.jpg"],
      links: [{ label: "公式サイト", url: "https://nojima-scuola.com/" }],
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
      area: "北淡路 / 西海岸",
      coords: [34.5169, 134.8770],
      category: "backup",
      images: ["images/picnic.jpg", "images/picnic_2.jpg"],
      links: [{ label: "公式サイト", url: "https://frogsfarm.jp/eat/picnic-garden/" }],
      badges: [{ text: "天気回復時", cls: "" }],
      desc: "海辺と芝生の開放感。ドリンク・スイーツ・ハンバーガー。",
      meta: [
        ["営業時間", "11:00〜21:00（L.O.20:00）"]
      ],
      notes: "屋外・開放感が魅力。雨が強いと優先度低め。焼肉後はドリンク休憩向き。",
      maps: "PICNIC GARDEN 淡路島"
    },
    {
      name: "カフェオアシス",
      area: "最北端 / 淡路ハイウェイオアシス内",
      coords: [34.6133, 135.0317],
      category: "backup",
      images: ["images/cafeoasis.jpg"],
      links: [
        { label: "公式サイト", url: "http://www.awajishimahighwayoasis.com/food/cafeoasis.html" },
        { label: "食べログ", url: "https://tabelog.com/hyogo/A2806/A280601/28040512/" }
      ],
      ratings: { tabelog: "3.34", reviews: 81 },
      badges: [{ text: "帰路で気軽", cls: "" }],
      desc: "淡路ハイウェイオアシス内のカフェ。淡路牛＋玉ねぎのオアシスバーガーや、淡路島ミルクのソフトクリームが人気。",
      meta: [
        ["営業時間", "平日 9:00〜19:00（L.O.18:30）／休日 9:00〜20:00（L.O.19:15）"],
        ["定休日", "無休"]
      ],
      notes: "帰路に立ち寄りやすい。気軽な軽食・ソフトクリームの休憩に。",
      maps: "カフェオアシス 淡路ハイウェイオアシス"
    },
    {
      name: "こぞらのおやつ",
      area: "中淡路 / 山上（淡路市里）",
      coords: [34.4670, 134.9290],
      category: "backup",
      images: ["images/kozora.jpg", "images/kozora_2.jpg"],
      links: [
        { label: "公式サイト", url: "https://kozorasou.com/" },
        { label: "食べログ", url: "https://tabelog.com/hyogo/A2806/A280602/28057364/" }
      ],
      ratings: { tabelog: "3.40", reviews: 111 },
      badges: [{ text: "行列・人気", cls: "" }, { text: "持ち帰り", cls: "ok" }],
      desc: "山の上の焼き菓子店。地元産卵・牛乳と北海道産小麦のマフィン10〜14種類とスコーンが評判。絵本のような静寂の空間。",
      meta: [
        ["営業時間", "10:00〜17:30（売り切れ次第終了）"],
        ["定休日", "不定休"]
      ],
      notes: "売り切れ早めなので、車内で食べる用に立ち寄るのも◎。営業日は公式HP要確認。",
      maps: "こぞらのおやつ 淡路島"
    },
    {
      name: "COFFEE BARN",
      area: "北淡路 / 西海岸 / 郡家・サンセットライン",
      coords: [34.5310, 134.8770],
      category: "warning",
      images: ["images/coffeebarn.jpg", "images/coffeebarn_2.jpg", "images/coffeebarn_3.jpg"],
      links: [
        { label: "Instagram", url: "https://www.instagram.com/coffee_barn_awaji/" },
        { label: "食べログ", url: "https://tabelog.com/hyogo/A2806/A280601/28066413/" }
      ],
      ratings: { tabelog: "3.42", reviews: 100 },
      badges: [{ text: "火水定休", cls: "danger" }],
      desc: "サンセットライン沿いのおしゃれコーヒースタンド。自家焙煎スペシャルティコーヒーとふわふわドーナツ。西海岸ビューの外テラス。",
      meta: [
        ["営業時間", "10:00〜17:00"],
        ["定休日", "火曜・水曜（5/21木は営業）"]
      ],
      notes: "幸せのパンケーキの近くで、TAKAMURA以外の本格コーヒー選択肢として。",
      maps: "COFFEE BARN 淡路島 郡家"
    },
    {
      name: "グリナリウム淡路島",
      area: "北淡路 / 西海岸 / 野島常磐",
      coords: [34.5340, 134.9120],
      category: "warning",
      images: ["images/greenarium.jpg", "images/greenarium_2.jpg"],
      links: [
        { label: "公式サイト", url: "https://www.greenarium.jp/" },
        { label: "食べログ", url: "https://tabelog.com/hyogo/A2806/A280601/28054287/" }
      ],
      ratings: { tabelog: "3.49", reviews: 205 },
      badges: [{ text: "火曜定休", cls: "" }, { text: "雰囲気◎", cls: "ok" }],
      desc: "イチゴ・トマト・ブドウを使った本格パフェやパスタが楽しめる、いちごハウスを併設したカフェ＆レストラン。",
      meta: [
        ["営業時間", "10:00〜16:00"],
        ["定休日", "火曜（5/21木は営業）"]
      ],
      notes: "営業時間が16:00までと短いので、行くなら14〜15時台に。",
      maps: "グリナリウム淡路島"
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

  // ルート用座標（マップに重ねる主要ポイント）
  routeCoords: [
    [34.4316, 134.9197], // ありい亭
    [34.5613, 135.0061], // 夢舞台
    [34.5475, 134.8804], // 幸せのパンケーキ
    [34.4783, 134.8519], // 多賀の浜
    [34.5908, 135.0152]  // 浜ちどり
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

const TYPE_LABELS = { spot: "🌿 スポット", restaurant: "🍽 レストラン", cafe: "☕ カフェ" };
const TYPE_ICONS = { spot: "🌿", restaurant: "🍽", cafe: "☕" };
const TYPE_COLORS = { spot: "#14b8a6", restaurant: "#f97316", cafe: "#a855f7" };
const CAT_LABELS = { confirmed: "確定 / 本命", backup: "予備候補", warning: "営業要確認" };

// ====== ルート状態 ======
const DEFAULT_ROUTE = [
  "restaurant:ありい亭 中田店",
  "spot:淡路夢舞台",
  "cafe:幸せのパンケーキ 淡路島テラス",
  "spot:多賀の浜",
  "restaurant:浜ちどり"
];

function placeId(type, p) { return `${type}:${p.name}`; }
function parseId(id) { const [type, ...rest] = id.split(":"); return { type, name: rest.join(":") }; }
function getPlaceById(id) {
  const { type, name } = parseId(id);
  const list = type === "spot" ? data.spots : type === "restaurant" ? data.restaurants : data.cafes;
  return list.find(p => p.name === name);
}

let routeIds = (() => {
  try {
    const stored = JSON.parse(localStorage.getItem("awaji_route") || "null");
    return Array.isArray(stored) && stored.length ? stored : [...DEFAULT_ROUTE];
  } catch { return [...DEFAULT_ROUTE]; }
})();
function saveRoute() { localStorage.setItem("awaji_route", JSON.stringify(routeIds)); }

// ====== 描画 ======
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

function renderArea(p) {
  if (!p.area) return "";
  return `<div class="area-tag">📍 ${p.area}</div>`;
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
          ${renderArea(p)}
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
      if (target === "map" && window._awajiMap) {
        setTimeout(() => window._awajiMap.invalidateSize(), 50);
      }
    });
  });
}

// ====== ライトボックス ======
const lightboxState = { images: [], index: 0 };
function openLightbox(images, index = 0) {
  lightboxState.images = images;
  lightboxState.index = index;
  $("#lightbox").hidden = false;
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

// ====== マップ ======
function makeIcon(type, category) {
  const color = TYPE_COLORS[type] || "#0891b2";
  const isWarn = category === "warning";
  const isConfirmed = category === "confirmed";
  const ring = isConfirmed ? "0 0 0 3px #f59e0b" : (isWarn ? "0 0 0 3px #ef4444" : "0 0 0 2px #fff");
  const emoji = type === "spot" ? "🌿" : type === "restaurant" ? "🍽" : "☕";
  return L.divIcon({
    className: "awaji-pin",
    html: `<div class="pin-inner" style="background:${color};box-shadow:${ring}, 0 4px 12px rgba(0,0,0,0.25);">${emoji}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  });
}

function setupMap() {
  if (typeof L === "undefined") return;
  const mapEl = $("#awaji-map");
  if (!mapEl || mapEl._inited) return;
  mapEl._inited = true;

  const map = L.map("awaji-map", {
    center: [34.5, 134.94],
    zoom: 10,
    scrollWheelZoom: false
  });
  window._awajiMap = map;

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(map);

  // ルートライン（routeIdsから動的に座標を組み立て）
  const routeLine = L.polyline(routeCoordsFromIds(), {
    color: "#0891b2",
    weight: 4,
    opacity: 0.7,
    dashArray: "8 6"
  });
  window._awajiRouteLine = routeLine;

  // 全プレース
  const allPlaces = [
    ...data.spots.map(p => ({ ...p, _type: "spot" })),
    ...data.restaurants.map(p => ({ ...p, _type: "restaurant" })),
    ...data.cafes.map(p => ({ ...p, _type: "cafe" }))
  ];

  const markers = allPlaces.filter(p => p.coords).map(p => {
    const marker = L.marker(p.coords, { icon: makeIcon(p._type, p.category) });
    const pid = placeId(p._type, p);
    const popupHtml = `
      <div class="map-popup">
        ${p.images && p.images[0] ? `<img src="${p.images[0]}" alt="${escapeAttr(p.name)}" />` : ""}
        <h4>${p.name}</h4>
        <div class="popup-area">${p.area || ""}</div>
        ${p.ratings && p.ratings.tabelog ? `<div class="popup-rating">食べログ ★${p.ratings.tabelog}${p.ratings.reviews ? ` (${p.ratings.reviews}件)` : ""}</div>` : ""}
        ${p.desc ? `<p class="popup-desc">${p.desc}</p>` : ""}
        <div class="popup-actions">
          <button class="popup-add" data-action="add" data-id="${pid}">＋ ルートに追加</button>
          <a href="${mapsUrl(p.maps || p.name)}" target="_blank" rel="noopener">📍 マップ</a>
        </div>
      </div>
    `;
    marker.bindPopup(popupHtml, { maxWidth: 260 });
    marker._meta = { type: p._type, category: p.category };
    return marker;
  });

  function applyFilters() {
    const typeFilters = [...$$('[data-filter="type"]:checked')].map(c => c.value);
    const catFilters = [...$$('[data-filter="cat"]:checked')].map(c => c.value);
    const showRoute = $('#filter-route').checked;
    markers.forEach(m => {
      const visible = typeFilters.includes(m._meta.type) && catFilters.includes(m._meta.category);
      if (visible) {
        if (!map.hasLayer(m)) m.addTo(map);
      } else {
        if (map.hasLayer(m)) map.removeLayer(m);
      }
    });
    if (showRoute) {
      if (!map.hasLayer(routeLine)) routeLine.addTo(map);
    } else {
      if (map.hasLayer(routeLine)) map.removeLayer(routeLine);
    }
  }

  $$('[data-filter], #filter-route').forEach(c => c.addEventListener("change", applyFilters));
  applyFilters();
}

// ====== ルート編集 ======
function routeCoordsFromIds() {
  return routeIds.map(id => {
    const p = getPlaceById(id);
    return p && p.coords;
  }).filter(Boolean);
}

function updateRouteLine() {
  if (window._awajiRouteLine) {
    window._awajiRouteLine.setLatLngs(routeCoordsFromIds());
  }
}

function renderRouteList() {
  const list = $("#route-list");
  if (!list) return;
  if (!routeIds.length) {
    list.innerHTML = `<li class="route-empty">ピンをタップして「+ ルートに追加」、または下の候補から追加してください</li>`;
    return;
  }
  list.innerHTML = routeIds.map((id, idx) => {
    const p = getPlaceById(id);
    if (!p) return "";
    const { type } = parseId(id);
    return `
      <li class="route-item" data-id="${id}">
        <span class="route-handle" aria-hidden="true">⠿</span>
        <span class="route-num">${idx + 1}</span>
        <span class="route-icon">${TYPE_ICONS[type] || "📍"}</span>
        <span class="route-name">${p.name}</span>
        <button class="route-remove" data-action="remove" data-id="${id}" aria-label="削除">×</button>
      </li>
    `;
  }).join("");
}

function renderCandidatesList() {
  const list = $("#candidates-list");
  if (!list) return;
  const allItems = [
    ...data.spots.map(p => ({ ...p, _type: "spot" })),
    ...data.restaurants.map(p => ({ ...p, _type: "restaurant" })),
    ...data.cafes.map(p => ({ ...p, _type: "cafe" }))
  ].filter(p => p.coords);
  list.innerHTML = allItems.map(p => {
    const pid = placeId(p._type, p);
    const alreadyIn = routeIds.includes(pid);
    return `
      <li class="cand-item ${alreadyIn ? "in-route" : ""}" data-id="${pid}">
        <span class="cand-handle" aria-hidden="true">⠿</span>
        <span class="cand-icon">${TYPE_ICONS[p._type]}</span>
        <span class="cand-name">${p.name}</span>
        ${alreadyIn
          ? `<span class="cand-badge">追加済</span>`
          : `<button class="cand-add" data-action="add" data-id="${pid}" aria-label="ルートに追加">＋</button>`}
      </li>
    `;
  }).join("");
}

function syncRouteUI() {
  renderRouteList();
  renderCandidatesList();
  updateRouteLine();
  saveRoute();
}

function addToRoute(id) {
  if (!routeIds.includes(id)) {
    routeIds.push(id);
    syncRouteUI();
  }
}
function removeFromRoute(id) {
  routeIds = routeIds.filter(x => x !== id);
  syncRouteUI();
}
function resetRoute() {
  if (confirm("ルートを当日のおすすめ順番にリセットしますか？")) {
    routeIds = [...DEFAULT_ROUTE];
    syncRouteUI();
  }
}
function clearRoute() {
  if (confirm("ルートを空にしますか？")) {
    routeIds = [];
    syncRouteUI();
  }
}

function setupRouteEditor() {
  const routeList = $("#route-list");
  const candList = $("#candidates-list");
  if (!routeList || !candList) return;

  // 初回描画
  syncRouteUI();

  // SortableJS によるドラッグ＆ドロップ
  if (typeof Sortable !== "undefined") {
    Sortable.create(routeList, {
      group: { name: "awaji-route", pull: true, put: true },
      animation: 150,
      handle: ".route-handle, .route-item",
      filter: ".route-remove, .route-empty",
      preventOnFilter: false,
      onSort: () => {
        // route-item と cand-item（クローン後の候補要素）の両方を拾う
        const ids = [...routeList.querySelectorAll("[data-id]")]
          .map(li => li.dataset.id)
          .filter(Boolean);
        routeIds = [...new Set(ids)];
        syncRouteUI();
      }
    });
    Sortable.create(candList, {
      group: { name: "awaji-route", pull: "clone", put: false },
      sort: false,
      animation: 150,
      handle: ".cand-handle, .cand-item",
      filter: ".cand-add, .in-route",
      preventOnFilter: false
    });
  }

  // ボタン操作（add / remove / reset / clear）
  document.addEventListener("click", (e) => {
    const action = e.target.closest("[data-action]")?.dataset.action;
    if (!action) return;
    const id = e.target.closest("[data-id]")?.dataset.id;
    if (action === "add" && id) { addToRoute(id); }
    else if (action === "remove" && id) { removeFromRoute(id); }
    else if (action === "reset") { resetRoute(); }
    else if (action === "clear") { clearRoute(); }
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
  setupMap();
  setupRouteEditor();
});
