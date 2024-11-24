document.getElementById("view-all-link").addEventListener("click", function () {
    const extraBooks = document.getElementById("extra-books");
    if (extraBooks.style.display === "none") {
        extraBooks.style.display = "flex"; // เปลี่ยนเป็น flex เพื่อให้รองรับการจัดเรียงแถว
        extraBooks.style.flexWrap = "wrap"; // จัดเรียงแถวแบบอัตโนมัติ
        this.textContent = "ซ่อนหนังสือ";
    } else {
        extraBooks.style.display = "none";
        this.textContent = "ดูหนังสือทั้งหมด";
    }
});
document.getElementById("fantasy-view-all-link").addEventListener("click", function () {
    const extraBooks = document.getElementById("fantasy-extra-books");
    
    if (extraBooks.style.display === "none" || extraBooks.style.display === "") {
        extraBooks.style.display = "flex"; // แสดงหนังสือที่ซ่อนอยู่
        extraBooks.style.flexWrap = "wrap"; // จัดเรียงแถวให้ยืดหยุ่น
        this.textContent = "ซ่อนหนังสือ"; // เปลี่ยนข้อความในลิงก์
    } else {
        extraBooks.style.display = "none"; // ซ่อนหนังสือ
        this.textContent = "ดูหนังสือทั้งหมด"; // เปลี่ยนข้อความกลับ
    }
});

