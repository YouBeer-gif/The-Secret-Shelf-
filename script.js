let index = 1; // เริ่มต้นที่ 1

function id_1() {
    if (index < 9) { 
        index++; 
        document.getElementById('input').innerText = index; 
    }else {
        alert("สินค้าไม่เกิน 9 ต่อ 1 บิน");
    }
}
function onclickimg() {
    document.getElementById('test').style.display = 'none';
}
