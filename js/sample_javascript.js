
function addscore(lv) {
    const score_view = document.getElementById("score");
    a = a + lv;
    console.log(a);
    score_view.innerText = a;
}
function auto_click() {
    const autoclick = document.getElementById("autoclick");
    let autoclick_lv = parseInt(autoclick.innerText.split(".")[1])
    autoclick_lv += 1;
    autoclick.innerText = "オートクリックLv." + autoclick_lv
    lv = lv + 1
}