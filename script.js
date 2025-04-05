const mobileSuits = [
  {
    name: "RX-78-2 건담",
    series: "기동전사 건담 (UC 0079)",
    pilot: "아무로 레이",
    image: "https://i.namu.wiki/i/GQ_sXV0M5d17G5uKSQ7widEAj_DBsmbJt3dKjqChAO9xOtcnUIt3LugJqbZ8Bh_IcAU6W1uWwbKYQtVFTP5t-g.webp"
  },
  {
    name: "ZGMF-X10A 프리덤 건담",
    series: "기동전사 건담 SEED",
    pilot: "키라 야마토",
    image: "https://i.namu.wiki/i/z2JYc18MJigbL0yAUoKnPz29Uz4-KylHphZPlDwodUYMmRWc6jZori-aXq76Ubct8DKrXUZPzpWojirqGD-qPQ.webp"
  },
  {
    name: "ASW-G-08 발바토스",
    series: "기동전사 건담 철혈의 오펀스",
    pilot: "미카즈키 아우구스",
    image: "https://i.namu.wiki/i/m2jC0fqdYu7MUVcWF0XnJXkh93xiRa51Zig84v0A45ekLio1JiByBc2Q5fBzSrP8aEw0TOD1OR4Vmo2mFlwZcw.webp"
  },
  {
    name: "MS-06 자쿠 II",
    series: "기동전사 건담 (UC 0079)",
    pilot: "샤아 아즈나블",
    image: "https://i.namu.wiki/i/vd8QRNgAfGrrsbt2uMb61v6Xb4zqTnadgiZZ8r_o7cG7lD01Wa92ZA7BscGNfgpVxj3rol9znC5J4breDqyOSw.webp"
  },
  {
    name: "RX-0 유니콘 건담",
    series: "기동전사 건담 UC",
    pilot: "바나지 링크스",
    image: "https://i.namu.wiki/i/vwUPzmAx-5c_p1QWn1Iz7BNYJtPdJlESXy3-Tg9rjRkwAZ036TVhh3IDqyCZ4xWDhYDqpzitgeu5w6ipv0R2tw.webp"
  },
  {
    name: "GN-001 엑시아",
    series: "기동전사 건담 00",
    pilot: "세츠나 F 세이에이",
    image: "https://i.namu.wiki/i/PJZpGHZa9LfcVRNQKjFRckUb7KwAS6gM9TfgVcrdj7a0dEeUMpvU-m0o7NPcXUGs5XZ8Asfg3QRsOjIHbbCR5w.webp"
  },
  {
    name: "XXXG-00W0 윙 건담 제로",
    series: "신기동전기 건담W",
    pilot: "히이로 유이",
    image: "https://i.namu.wiki/i/CQcXDMZlKwM8Y9bg7ia_y8WsQLOvk6TqBNcOZ62S8Qw0JQ-Y5x-HFwX0v2RZltVBDGZeFYLBPT0ac1eZXfpjFA.webp"
  },
  {
    name: "MSN-04 사자비",
    series: "기동전사 건담 역습의 샤아",
    pilot: "샤아 아즈나블",
    image: "https://i.namu.wiki/i/owVREYnmRZtq4ksgHBe4q0Lgs5ybqTImBLQup6aFRLU4oxciU2o_qIzIBWj6s26yJYqP6Lmskn4wZb26CIz6Jg.webp"
  },
  {
    name: "RX-93 ν건담",
    series: "기동전사 건담 역습의 샤아",
    pilot: "아무로 레이",
    image: "https://i.namu.wiki/i/5Sf43KuGDFwTnmkN0uKLgUGwPGtVqHdxuxeHvBSL6_jZxJfCX4mM1fX2JGZYTNAqKtBQ7V1vCqLsh4KtL-yntQ.webp"
  },
  {
    name: "∀ 건담",
    series: "턴에이 건담",
    pilot: "로랑 세악",
    image: "https://i.namu.wiki/i/yPas79PjHdhh4m22H-ycVi2mQt7ejq5NfgfHRp4P5fbUM7oQ28p7-beqMihzZuEId-Ias-UL01B-_-KL5mY-qg.webp"
  }
];

document.getElementById("drawButton").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * mobileSuits.length);
  const suit = mobileSuits[randomIndex];

  Swal.fire({
    title: `🎉 ${suit.name}`,
    html: `
      <p class="text-lg font-semibold mb-1">시리즈: ${suit.series}</p>
      <p class="text-base text-gray-600 mb-2">조종자: ${suit.pilot}</p>
      <img src="${suit.image}" alt="${suit.name}" style="max-width:100%; border-radius: 12px; box-shadow: 0 0 10px rgba(0,0,0,0.2); margin-top:10px;">
    `,
    confirmButtonText: "다시 뽑기 🔁",
    background: "#f0f4ff",
    customClass: {
      popup: 'rounded-2xl p-4'
    }
  });
});
