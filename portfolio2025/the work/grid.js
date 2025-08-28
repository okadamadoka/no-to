/*const img1=[
    "cat-1.png",
    "cat_business-1.png",
    "business-1.png",
    "nikuman-1.png",
    "anman-1.png",
    "juice-1.png",
    "tea-1.png",
    "cap-1.png",
    "hand_cream-1.png",
    "tournament-1.png",
    "bana-1.png",
    "suzume-1.png",
    "haisya-1.png",
];

const img2=[
    "cat-2.png",
    "cat_business-2.png",
    "business-2.png",
    "nikuman-2.png",
    "anman-2.png",
    "juice-2.png",
    "tea-2.png",
    "cap-2.png",
    "cap-3.png",
    "cap-4.png",
    "hand_cream-2.png",
    "tournament-2.png",
    "bana-2.png",
    "suzume-2.png",
    "haisya-2.png",
];
*/
const items = [
  { 
    images: ["cat-1.png"], 
    images2: ["cat-2.png"], 
    title: "ねこ名刺",
    desc: "これは2つ目の説明文です"
  },
  { 
    images: ["cat_business-1.png"],
    images2: ["cat_business-2.png"],  
    title: "ねこ名刺2",
    desc: "これは2つ目の説明文です"
  },
  { 
    images: ["business-1.png"], 
    images2: ["business-2.png"], 
    title: "学校名刺",
    desc: "これは2つ目の説明文です"
  },
  { 
    images: ["nikuman-1.png"], 
    images2: ["nikuman-2.png"], 
    title: "肉まんポスター",
    desc: "これは2つ目の説明文です"
  },
  { 
    images: ["anman-1.png"], 
    images2: ["anman-2.png"], 
    title: "あんまんポスター",
    desc: "これは2つ目の説明文です"
  },
  { 
    images: ["juice-1.png"], 
    images2: ["juice-2.png"], 
    title: "みかんじゅーちゅ",
    desc: "これは2つ目の説明文です"
  },
  { 
    images: ["tea-1.png"], 
    images2: ["tea-2.png"], 
    title: "びわちゃラベル",
    desc: "これは2つ目の説明文です"
  },
  { 
    images: ["cap-1.png"], 
    images2: ["cap-2.png"], 
    title: "キャットスター",
    desc: "これは2つ目の説明文です"
  },
  { 
    images: ["cap-1.png"], 
    images2: ["cap-3.png"], 
    title: "キゃットスタ一",
    desc: "これは2つ目の説明文です"
  },
  { 
    images: ["hand_cream-1.png"], 
    images2: ["hand_cream-2.png"], 
    title: "オリビエール",
    desc: "これは2つ目の説明文です"
  },
  { 
    images: ["tournament-1.png"], 
    images2: ["tournament-2.png"], 
    title: "大会ポスター",
    desc: "これは2つ目の説明文です"
  },
  { 
    images: ["bana-1.png"], 
    images2: ["bana-2.png"], 
    title: "宣伝バナー",
    desc: "これは2つ目の説明文です"
  },
  { 
    images: ["suzume-1.png"], 
    images2: ["suzume-2.png"], 
    title: "すずめ保育園(架空)",
    desc: "これは2つ目の説明文です"
  },
  { 
    images: ["haisya-1.png"], 
    images2: ["haisya-2.png"], 
    title: "歯医者さんリデザイン(架空)",
    desc: "これは2つ目の説明文です"
  },
];
// ファイル名だけ配列にしておく

//"../../img/1x/"を付けて出力させること

const basePath = "../../img/1x/";
const container = document.querySelector(".grid");
const modal = document.querySelector(".modal");
const modalImages = modal.querySelector(".modal-images");
const modalDesc = modal.querySelector(".modal-desc");

// 一覧に「image」だけ出す
items.forEach((item, index) => {
  const div = document.createElement("div");
  div.classList.add("it");

  const img = document.createElement("img");
  img.src = basePath + item.images;
  div.appendChild(img);

  // クリックでモーダル
  div.addEventListener("click", () => {
    modalImages.innerHTML = ""; // クリア

    // クリックしたら images と images2 を並べて表示
    [item.images, item.images2].forEach(file => {
      const img = document.createElement("img");
      img.src = basePath + file;
      modalImages.appendChild(img);
    });

    modalDesc.textContent = item.desc;
    modal.classList.add("open");
  });

  container.appendChild(div);
});

// モーダル閉じる
modal.addEventListener("click", () => {
  modal.classList.remove("open");
});
