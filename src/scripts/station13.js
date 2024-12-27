function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const checkbox = e.target; // チェックボックス要素
  if (checkbox.checked) {
    document.getElementById("text").style.backgroundColor = 'red'; // チェックされた場合
  } else {
    document.getElementById("text").style.backgroundColor = "white"; // チェックが外された場合
  }
}
