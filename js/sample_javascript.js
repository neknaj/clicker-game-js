
function addscore(lv) {
    const score_view = document.getElementById("score");
    a = a + lv;
    // console.log(a);
    score_view.innerText = Math.ceil(a);
}
function click_up(){
    const click = document.getElementById("clicklevel");
    click_level += 1;
    click.innerText = "クリックレベルLv." + click_level;
}
function auto_click() {
    const autoclick = document.getElementById("autoclick");
    let autoclick_lv = parseInt(autoclick.innerText.split(".")[1]);
    autoclick_lv *= 1.1;
    autoclick.innerText = "オートクリックLv." + autoclick_lv;
    ps = ps + 0.01;
}
