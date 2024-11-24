function moreDetail(book) {
    // ดึง elements ที่ต้องการอัพเดท
    const mainBox = document.getElementById('MainBox');
    const bookImage = document.getElementById('img');
    const bookName = document.getElementById('nameBook');
    const bookWriter = document.getElementById('writer');
    const bookDesc = document.getElementById('description');

    // อัพเดทข้อมูล
    bookImage.src = book.querySelector('img').src;
    bookName.textContent = book.querySelector('p').textContent;
    bookWriter.textContent = 'ผู้เขียน: ' + getWriter(book.querySelector('p').textContent);
    bookDesc.textContent = getDescription(book.querySelector('p').textContent);

    // แสดงกล่องรายละเอียด
    mainBox.style.display = 'block';
}

function getWriter(bookTitle) {
    // ฟังก์ชันสำหรับกำหนดชื่อผู้เขียนตามชื่อหนังสือ
    const writers = {
        'คู่ป่วนไขปริศนาคดีฆาตรกรรม เล่ม 2': 'Park Ha Ik',
        'รากษสโฮเต็ล': 'ภาคินัย',
        'เจโตพิสดารธาตุ': 'กรกานท์',
        'คดีปริศนากับนัยน์ตาสืบวิญญาณ': 'ชาครียา',
        'ศพใต้เตียง': 'วินทร์ เลียววาริณ',
        'มุมมองนักอ่านพระเจ้า เล่ม 1': 'Sing Shong',
        // เพิ่มชื่อผู้เขียนตามต้องการ
    };
    return writers[bookTitle] || 'ไม่ระบุผู้เขียน';
}

function getDescription(bookTitle) {
    // ฟังก์ชันสำหรับกำหนดคำอธิบายตามชื่อหนังสือ
    const descriptions = {
        'คู่ป่วนไขปริศนาคดีฆาตรกรรม เล่ม 2': 
            'เรื่องราวของนักสืบมัธยมที่ต้องไขคดีฆาตกรรมสุดลึกลับ ในภาคต่อที่จะพาคุณดำดิ่งไปกับปริศนาที่ซับซ้อนยิ่งขึ้น',
        'รากษสโฮเต็ล': 
            'โรงแรมลึกลับที่ซ่อนความลับสยองขวัญ เมื่อแขกที่เข้าพักต้องเผชิญกับเหตุการณ์ประหลาดที่ไม่มีคำอธิบาย',
        'เจโตพิสดารธาตุ':
            'เรื่องราวสืบสวนสอบสวนผสมผสานกับความเชื่อและไสยศาสตร์ไทย',
        'คดีปริศนากับนัยน์ตาสืบวิญญาณ':
            'นักสืบสาวผู้มีความสามารถพิเศษในการมองเห็นวิญญาณ กับการไขคดีที่เกี่ยวพันกับโลกของคนตาย',
        'ศพใต้เตียง':
            'คดีฆาตกรรมสุดสยองที่เริ่มต้นจากการค้นพบศพใต้เตียงในโรงแรมเก่า',
        'มุมมองนักอ่านพระเจ้า เล่ม 1':
            'เรื่องราวของ คิม ดกจา ที่รู้เรื่องราวทั้งหมดของโลกผ่านนิยายเว็บที่เขาเป็นผู้อ่านเพียงคนเดียว เมื่อโลกเปลี่ยนเป็นฉากในนิยาย',
        // เพิ่มคำอธิบายตามต้องการ
    };
    return descriptions[bookTitle] || 'ไม่มีคำอธิบายเพิ่มเติม';
}

function closeDetails() {
    document.getElementById('MainBox').style.display = 'none';
}

// เพิ่ม event listeners สำหรับปุ่มแสดง/ซ่อนหนังสือ
document.addEventListener('DOMContentLoaded', function() {
    // สำหรับหมวดสืบสวนสอบสวน
    document.getElementById("view-all-link").addEventListener("click", function() {
        const extraBooks = document.getElementById("extra-books");
        if (extraBooks.style.display === "none" || extraBooks.style.display === "") {
            extraBooks.style.display = "flex";
            extraBooks.style.flexWrap = "wrap";
            this.textContent = "ซ่อนหนังสือ";
        } else {
            extraBooks.style.display = "none";
            this.textContent = "ดูหนังสือทั้งหมด";
        }
    });

    // สำหรับหมวดแฟนตาซี
    document.getElementById("fantasy-view-all-link").addEventListener("click", function() {
        const extraBooks = document.getElementById("fantasy-extra-books");
        if (extraBooks.style.display === "none" || extraBooks.style.display === "") {
            extraBooks.style.display = "flex";
            extraBooks.style.flexWrap = "wrap";
            this.textContent = "ซ่อนหนังสือ";
        } else {
            extraBooks.style.display = "none";
            this.textContent = "ดูหนังสือทั้งหมด";
        }
    });

    // เพิ่ม event listeners สำหรับการคลิกที่หนังสือ
    const bookCards = document.querySelectorAll('.book-card');
    bookCards.forEach(card => {
        card.onclick = function() {
            moreDetail(this);
        };
    });
});