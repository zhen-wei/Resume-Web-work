"use strict"
function img_enlarge(obj) {
    if (document.body.clientWidth > 846) {
        //建立元素 (div)
        let cover = document.createElement("div");
        //元素id設定 (OS:為啥ID屬性可以onclick不行...)
        cover.id = "cover";
        //元素屬性增加(修改) (正規作法?)
        cover.setAttribute("onclick", "deldiv(this)");
        //元素樣式增加(修改)
        cover.style.position = "fixed";
        cover.style.zIndex = "2"
        cover.style.top = "0";
        cover.style.width = "100vw";
        cover.style.height = "100vh";
        cover.style.backgroundColor = "rgba(0,0,0,0.8)";
        cover.style.cursor = "zoom-out";


        //在body中新增元素
        document.body.appendChild(cover);

        let img = document.createElement("img");
        img.id = "image";
        img.src = obj.src;
        img.style.maxWidth = "90vw"
        img.style.maxHeight = "90vh"
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
        img.style.right = "0";
        img.style.bottom = "0";
        img.style.margin = "auto";
        img.style.zIndex = "3";
        img.style.cursor = "zoom-out";
        img.style.clipPath = "none";
        document.getElementById("cover").appendChild(img);

        // 禁用滾動條 (頁面文本的樣式的Y軸修剪與無滾動條)
        document.documentElement.style.overflowY = 'hidden';

    }
}
function deldiv(obj) {
    //移除元素
    document.body.removeChild(obj);
    // 啟用滾動條 (頁面文本的樣式的Y軸顯示所有內容與滾動條)
    document.documentElement.style.overflowY = 'auto';
}


let moveLoop = 0;
function move_top() {
    // roll = 當前頁面滾動條頂部距離
    
    const roll = document.documentElement.scrollTop;
    if (roll === 0) {
        cancelAnimationFrame(moveLoop)
    } else {
        // 移動速度
        const speed = Math.floor(-roll / 5);
        // 滾動條距離
        document.documentElement.scrollTop = roll + speed;
        moveLoop = requestAnimationFrame(move_top);
    }
    
}
