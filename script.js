let index = 1; // เริ่มต้นที่ 1

function id_1() {
    if (index < 9) { 
        index++; 
        document.getElementById('input').innerText = index; 
    }else {
        alert("เกิน9เเล้วนะจ้ะ");
    }
}

function onclickimg() {
    document.getElementById('open').style.display = 'block'; 
    document.getElementById('promotions').style.display = 'none';
}
function openimgbox2_1() {
    document.getElementById('open').style.display = 'none'; 

}
function openimgbox2_2() {

    document.getElementById('open').style.display = 'none';

    let promotionsDiv = document.getElementById('promotions');
    promotionsDiv.style.display = 'block';
    
    let newContent = `
   <div class="text-center" id="promotions">
        <p class="mt-5 fs-1">new year's</p>
        <img class="rounded-4 img-fluid" src="/img/img-books/img-box-2/img-box-2-index3.png" alt="">
        <div class="d-flex justify-content-center fs-5">
            <p>● ลดเพิ่ม </p><p style="color:#861BA9 ;">20    .- </p> ใช้โค้ด <p style="color: #861BA9;"> SECRET20 </p>เมื่อซื้อสินค้า</p>
        </div>
        <div class="d-flex justify-content-center fs-5">
            <p>● ลดเพิ่ม </p><p style="color:#861BA9 ;">100    .- </p> ใช้โค้ด <p style="color: #861BA9;"> SECRET100 </p>เมื่อซื้อสินค้า</p>
        </div>
        <div class="d-flex justify-content-center fs-5">
            <p>● ลดเพิ่ม </p><p style="color:#861BA9 ;">250    .- </p> ใช้โค้ด <p style="color: #861BA9;"> SECRET250 </p>เมื่อซื้อสินค้า</p>
        </div>
        <div class="d-flex justify-content-center fs-5">
            <p>● ลดเพิ่ม </p><p style="color:#861BA9 ;">500    .- </p> ใช้โค้ด <p style="color: #861BA9;"> SECRET500 </p>เมื่อซื้อสินค้า</p>
        </div>
     </div>
    `;
    promotionsDiv.innerHTML = newContent;
}   