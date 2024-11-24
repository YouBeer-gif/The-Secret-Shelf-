let index = 1; // เริ่มต้นที่ 1

function id_1() {
    if (index < 9) { 
        index++; 
        document.getElementById('input').innerText = index; 
    }else {
        alert("เกิน9เเล้วนะจ้ะ");
    }
}
    