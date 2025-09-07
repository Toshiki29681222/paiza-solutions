https://paiza.jp/career/challenges/846
// 課題: 初期の所持ポイントを使って、７日間ポイントだけで買い物をします。いくつポイントを使ったかを求めます
// 入力1: 初期の所持ポイント
// 入力2: ポイント還元率
// 出力: 7日間の合計使用ポイント

// ７日間使ったポイントの計算関数
const getPointsLast7Days = (currentPoint, rate) => {
  // 7日間使った合計ポイント
  let total = 0;

  // ７日間使ったポイントの計算
  // info: 7日間分ループすることが決まっているためforループを使用します。
  for (let i = 0; i < 7; i++) {
    total += currentPoint;

    // ポイントは切り捨て
    currentPoint = Math.floor(currentPoint * (rate / 100));
  }
  return total;
};

const pointsLast7Days = getPointsLast7Days(1024, 50);
console.log(pointsLast7Days);
