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
      badges: [{ text: "確定", cls: "priority-top" }, { text: "雨でもOK", cls: "ok" }],
      desc: "今回の軸。安藤忠雄設計の建築・水庭・百段苑が見どころ。",
      meta: [
        ["営業時間", "7:00〜22:00（無料エリア）／あわじグリーン館10:00〜18:00"],
        ["所要時間", "45〜75分"]
      ],
      notes: "<strong>おすすめルート:</strong> 地下駐車場 → 水庭 → 円形フォーラム → 海回廊 → 百段苑（少し） → 展望テラス。雨が強い時は百段苑は短めに。",
      maps: "淡路夢舞台"
    },
    {
      name: "多賀の浜",
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
      badges: [{ text: "短時間", cls: "" }],
      desc: "浜ちどりに少し早く着きそうな時の10〜15分スポット。",
      meta: [["使い方", "車から雰囲気を見るだけでもOK"]],
      maps: "絵島 岩屋港"
    },
    {
      name: "淡路SA・大観覧車",
      badges: [{ text: "時間調整", cls: "" }],
      desc: "帰り道の時間調整。雨で多賀の浜をやめた時の候補。",
      notes: "<strong>注意:</strong> 帰りの工事・渋滞があるので無理に入れない。",
      maps: "淡路SA 大観覧車"
    }
  ],

  restaurants: [
    {
      name: "ありい亭 中田店",
      badges: [{ text: "確定", cls: "priority-top" }, { text: "昼食", cls: "" }],
      desc: "12:30〜の昼食（焼肉）。",
      maps: "ありい亭 中田店"
    },
    {
      name: "浜ちどり",
      badges: [{ text: "本命", cls: "priority-top" }, { text: "夕食", cls: "" }],
      desc: "岩屋港の岩屋ポートビル2階。海鮮・和食寄り。",
      meta: [
        ["営業時間", "11:00〜20:00（夜L.O.19:45）"],
        ["定休日", "火曜"],
        ["予約", "不可"],
        ["入店時刻", "18:15〜19:10推奨"]
      ],
      notes: "<strong>注意:</strong> 予約不可。混んでいたら<strong>きとら津名店</strong>へ切り替え。",
      maps: "お食事処 浜ちどり 岩屋港"
    },
    {
      name: "海鮮料理きとら 津名店",
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
      name: "GARB COSTA ORANGE",
      badges: [{ text: "木曜定休", cls: "danger" }],
      desc: "夕日を望む海辺のレストラン＆カフェ。雰囲気重視向け。",
      meta: [
        ["営業時間", "ランチ11:00〜15:00／ディナーL.O.20:00"],
        ["定休日", "木曜（5/21は実質NG）"]
      ],
      notes: "5/21は<strong>木曜定休</strong>のため、当日営業確認が取れた時のみ。",
      maps: "GARB COSTA ORANGE 淡路島"
    },
    {
      name: "クラフトキッチン / CRAFT CIRCUS",
      badges: [{ text: "木曜定休", cls: "danger" }],
      desc: "玉ねぎバーガー、島ピザなど。",
      meta: [
        ["営業時間", "11:00〜19:00"],
        ["定休日", "木曜"]
      ],
      notes: "5/21は<strong>定休日</strong>。基本的に候補から外す。",
      maps: "CRAFT CIRCUS 淡路島"
    },
    {
      name: "きとら 淡路夢舞台店",
      badges: [{ text: "営業要確認", cls: "danger" }],
      desc: "夢舞台内で便利だが、木曜・不定休と案内されているため不確実。",
      notes: "当日営業確認が取れた場合のみ。",
      maps: "きとら 淡路夢舞台店"
    }
  ],

  cafes: [
    {
      name: "幸せのパンケーキ 淡路島テラス",
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
      badges: [{ text: "木曜定休", cls: "danger" }],
      desc: "海辺の雰囲気が良いカフェ＆ダイニング。",
      meta: [
        ["営業時間", "11:00〜21:00"],
        ["定休日", "木曜（5/21は実質NG）"]
      ],
      notes: "5/21は<strong>木曜定休</strong>。",
      maps: "GARB COSTA ORANGE 淡路島"
    },
    {
      name: "miele the DINER",
      badges: [{ text: "ハワイ風", cls: "" }],
      desc: "1Fアメリカンダイナー・2Fカフェ。明るくカジュアル。",
      meta: [
        ["営業時間", "11:00〜19:00（L.O.18:30）"],
        ["定休日", "火曜"]
      ],
      maps: "miele the DINER 淡路島"
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
      title: "雨対策（降水確率90%）",
      items: ["折りたたみ傘 ×2", "大きめのタオル", "替えの靴下 or 防水スプレー済み靴"]
    },
    {
      title: "あると便利",
      items: ["車載スマホホルダー", "サングラス", "ティッシュ・ウェットティッシュ", "車内用ゴミ袋", "飲み物・お菓子", "カメラ／スマホ（写真）"]
    },
    {
      title: "同行者への気配り",
      items: ["車内BGM（プレイリスト）", "浜ちどりの場所をマップに保存", "可能ならカフェ予約", "雨天時の代替案を頭に入れておく"]
    }
  ],

  info: [
    {
      type: "warn",
      title: "☔ 5/21 淡路市の天気",
      text: "雨時々止む。午前・午後とも降水確率90%。屋外散策は短めに、屋内＆屋根あり席を優先。"
    },
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
      text: "GARB COSTA ORANGE／クラフトキッチン／きとら淡路夢舞台店 — いずれも木曜定休 or 不定休。臨時営業の有無を確認。"
    }
  ]
};

// ====== ヘルパー ======
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

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

function renderCards(targetId, items) {
  $(targetId).innerHTML = items.map(p => {
    const badges = (p.badges || []).map(b => `<span class="badge ${b.cls || ""}">${b.text}</span>`).join("");
    const meta = (p.meta || []).map(([k, v]) =>
      `<div class="meta-row"><span class="meta-label">${k}</span><span>${v}</span></div>`
    ).join("");
    const notes = p.notes ? `<div class="notes">${p.notes}</div>` : "";
    return `
      <article class="card">
        <div class="card-head">
          <h3 class="card-name">${p.name}</h3>
          <div class="card-badges">${badges}</div>
        </div>
        ${p.desc ? `<p class="card-desc">${p.desc}</p>` : ""}
        ${meta ? `<div class="meta">${meta}</div>` : ""}
        ${notes}
        ${p.maps ? `<a class="maps-btn" href="${mapsUrl(p.maps)}" target="_blank" rel="noopener">📍 Googleマップで開く</a>` : ""}
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
  renderInfo();
  setupTabs();
});
