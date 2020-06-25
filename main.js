let que = document.getElementById("que");
let res = document.getElementById("res");
let logo = document.getElementById("logo");
let maru = document.getElementById("maru");
let batsu = document.getElementById("batsu");
let cnt = 20;
let sco = 0;
let flag = true;
//タイマー処理1秒間に実行する
let time = setInterval(() => {
  if (cnt > 0) {
    cnt--;
    res.textContent = "スコア：" + sco + " | 時間：" + cnt + "秒";
  } else {
    res.style.color = "red";
    res.textContent = "スコア：" + sco + " | 終了";
    que.textContent = "時間切れ！";
    flag = false;
    clearInterval(time);
    //時間切れになったら終わり
  }
}, 1000);
//setTimeからここまでをtimeに代入

let num = 0;
let max = 10;
let name = new Array(max);
name = [
  "grsk",
  "生命活動している",
  "富樫先生は生きてる",
  "BAKEMONO",
  "MONEY",
  "天さん",
  "黄色",
  "BAKEMONO",
  "HDMI",
  "すし",
];
let seikai = new Array(max);
seikai = ["×", "×", "○", "○", "○", "×", "×", "○", "○", "×"];
//○をクリックしたとき
maru.addEventListener("click", () => {
  if (flag) {
    console.log("maru");

    if (seikai[num] == "○") {
      console.log("正解");
      que.textContent = "問題" + (num + 1) + "　正解";
      sco++;
      res.textContent = "スコア：" + sco + " | 時間：" + cnt + "秒";
    } else {
      console.log("不正解");
      que.textContent = "問題" + (num + 1) + "　不正解";
    }
    num++;
    //0.5秒後に一度だけ{}を実行
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1) + " " + name[num];
        logo.src = "img/logo" + num + ".png";
      }, 500);
    } else {
      que.textContent = "問題の回答終了！";
      clearInterval(time);
      if (sco == max) {
        que.textContent = "全問正解！すっげぇ！(ﾟ∀ﾟ)";
        logo.src = "img/clear.png";
      }
    }
  }
});
//☓をクリックしたとき
batsu.addEventListener("click", () => {
  if (flag) {
    console.log("batsu");

    if (seikai[num] == "×") {
      //×のとき
      console.log("正解");
      que.textContent = "問題" + (num + 1) + "　正解";
      sco++;
      res.textContent = "スコア：" + sco + " | 時間：" + cnt + "秒";
    } else {
      console.log("不正解");
      que.textContent = "問題" + (num + 1) + "　不正解";
    }
    num++;
    if (num < max) {
      setTimeout(() => {
        que.textContent = "問題" + (num + 1) + " " + name[num];
        logo.src = "img/logo" + num + ".png";
      }, 500);
    } else {
      que.textContent = "問題の回答終了！";
      clearInterval(time);
      if (sco == max) {
        que.textContent = "全問正解！すっげぇ！(ﾟ∀ﾟ)";
        logo.src = "img/clear.png";
      }
    }
  }
});
