const booksList = [
    {
        title: "ถอดรหัสลับสมองเงินล้าน",
        author: "T.Harv Eker (ที ฮาร์ฟ เอคเคอร์)",
        publisher: "วีเลิร์น (WeLearn)",
        description: "แกะรอยวิธีคิดของคนรวยในหนังสือเล่มนี้ Secrets of the Millionaire Mind ว่าเขาหาเงิน เก็บเงิน และใช้เงินอย่างไร ถึงได้มีเงินเหลือเป็นล้าน",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/201408/145458/1000162661_front_XXXL.jpg?imgname=%E0%B8%96%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%99-(%E0%B8%9B%E0%B8%81%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88)",
        price: "152.00",
    },
    {
        title: "Topp of the Top ฝันให้ไกล ไปให้สุดทาง",
        author: "จิรายุส ทรัพย์ศรีโสภา",
        publisher: "Adap Creation",
        description: "ผมอยากให้หนังสือเล่มนี้นำพาผู้อ่านไปพบกับแรงบันดาลใจที่จะสร้างตัวเราให้แตกต่างจากคนอื่นกล้าเดินหน้าไปสู่เป้าหมายที่อยากทำ รวมทั้งการตัดสินใจสร้างธุรกิจของตัวเองให้ประสบความสำเร็จซึ่งคนที่บ้าพอจะกล้าลงมือเปลี่ยนแปลงตัวเองหรือทำอะไรสักอย่างที่ยิ่งใหญ่เกินฝันมีน้อยมากแต่ถ้าเชื่อในสิ่งที่คนส่วนใหญ่ไม่เชื่อกระทั่งทำให้เป็นความจริงให้ได้ในสักวันแน่นอนว่าความสำเร็จย่อมเกิดขึ้นได้แม้คุณจะเป็นคนตัวเล็กแค่ไหนก็ตาม จิรายุส ทรัพย์ศรีโสภา",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202403/607897/1000270952_front_XXXL.jpg?imgname=Topp-of-the-Top-%E0%B8%9D%E0%B8%B1%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B9%84%E0%B8%81%E0%B8%A5-%E0%B9%84%E0%B8%9B%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%97%E0%B8%B2%E0%B8%87",
        price: "315.00",
    },
    {
        title: "เศรษฐีชี้ทางรวย (The Richest Man in Babylon, Millionaire’s Edition)",
        author: "George s.Clason (จอร์จ ซามูเอล คลาสัน)",
        publisher: "ซีเอ็ดยูเคชั่น/se-ed",
        description: "การจัดการค่าใช้จ่ายต่าง ๆ ดูเหมือนจะเป็นเรื่องยากสำหรับใครหลาย ๆ คน เพราะเรามักโดนหลอกระหว่างความต้องการในสิ่งที่จำเป็นจริง ๆ และความปรารถนาในสิ่งสวยงามล่อใจ สุดท้าย ความปรารถนาก็ดึงเงินมากมายออกจากกระเป๋าเราโดยไม่รู้ตัว ทุก ๆ เดือนจึงไม่มีเงินเก็บ หนำซ้ำยังมีหนี้สินอีก",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202308/588046/1000264124_front_XXXL.jpg?imgname=%E0%B9%80%E0%B8%A8%E0%B8%A3%E0%B8%A9%E0%B8%90%E0%B8%B5%E0%B8%8A%E0%B8%B5%E0%B9%89%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%A7%E0%B8%A2-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87-(The-Richest-Man-in-Babylon-Millionaire%E2%80%99s-Edition)--",
        price: "256.50",
    },
    {
        title: "ศาสตร์แห่งบัฟเฟตต์ Buffettology",
        author: "แมรี บัฟเฟตต์ และเดวิด คลาร์ก",
        publisher: "เนชั่นบุ๊คส์/NationBooks",
        description: "ในโลกแห่งการลงทุนนั้น ชื่อของวอร์เรน บัฟเฟตต์ มีความหมายเทียบเท่ากับคำว่าความสำเร็จและความร่ำรวยมั่งคั่ง เขาเริ่มต้นจากศูนย์ ทว่าด้วยการเลือกสรรและลงทุนอย่างชาญฉลาดและระมัดระวัง ผลที่ได้กลับมา คือ ความมั่งคั่งร่ำรวยมหาศาลที่ทำให้เขาเป็นมหาเศรษฐีที่ทั่วโลกรู้จักกันดีในขณะนี้",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202309/590139/1000264894_front_XXXL.jpg?imgname=%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%9F%E0%B9%80%E0%B8%9F%E0%B8%95%E0%B8%95%E0%B9%8C-Buffettology-%E0%B8%9B%E0%B8%81%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88",
        price: "355.50",
    },
    {
        title: "Layered Money:พีระมิดเงินซ้อนชั้น",
        author: "Nik Bhatia",
        publisher: "ซีเอ็ดยูเคชั่น/se-ed",
        description: "จะพาคุณดำดิ่งไปกับประวัติศาสตร์วิวัฒนาการของระบบการเงินทั่วทั้งโลก เดินทางย้อนกลับไปยังจุดที่ระบบการเงินพัฒนากลายเป็นระบบ ซ้อนชั้น อธิบายถึงคำดังกล่าว แล้วพาย้อนรอยวิวัฒนาการของทองคำตั้งแต่ยังเป็นเพียงแร่ทอง จนกลางมาเป็นเหรียญทอง และตั๋วแลกทองที่ออกโดยธนาคารในที่สุด มุมมองการวิเคราะห์ พีระมิดซ้อนชั้น ที่แปลกใหม่ไม่เหมือนใครของบาเทีย ชวนให้ผู้อ่านทั่วไปสามารถทำความเข้าใจตลาดการเงินได้อย่างง่ายดาย",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202301/570221/1000258228_front_XXXL.jpg?imgname=Layered-Money:%E0%B8%9E%E0%B8%B5%E0%B8%A3%E0%B8%B0%E0%B8%A1%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99%E0%B8%8B%E0%B9%89%E0%B8%AD%E0%B8%99%E0%B8%8A%E0%B8%B1%E0%B9%89%E0%B8%99",
        price: "242.00",
    },
    {
        title: "MONEY MINDSET",
        author: "จักรพงษ์ เมษพันธุ์",
        publisher: "ซีเอ็ดยูเคชั่น/se-ed",
        description: "ความรู้เรื่องเงินเป็นสิ่งสำคัญ แต่ ความคิด ที่ถูกต้องเกี่ยวกับการเงินนั้นสำคัญกว่า! หลักคิดเล็กๆ ที่ผลักดันให้เกิดการกระทำอย่างสม่ำเสมอ จะสร้างผลลัพธ์ที่ยิ่งใหญ่ ความยากของการจัดการการเงิน คือ การที่เราต้องตัดสินใจเกี่ยวกับมันทุกวัน หลายครั้งรู้ว่าไม่ควรทำอย่างนั้น เพราะเคยรู้เคยเรียนมา แต่พอถึงเวลา เรากลับทำตรงกันข้าม ความสำเร็จทางการเงินจึงอาศัยแค่ความรู้อย่างเดียวไม่ได้ ต้องคิดให้ถูก และคิดให้เป็นด้วย เชื่อมั่นว่า...เรื่องราวชวนคิดเล็กคิดน้อยเกี่ยวกับเงิน 51 เรื่องในเล่มนี้ จะเป็นประโยชน์และเปลี่ยนแปลงชีวิตการเงินของทุกคนไปในทางที่ดีขึ้น",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202209/561939/1000254973_front_XXXL.jpg?imgname=MONEY-MINDSET",
        price: "336.00",
    },
    {
        title: "คิดแล้วรวย : Think & Grow Rich",
        author: "นโปเลียน ฮิลล์ (Napoleon Hill)",
        publisher: "ซีเอ็ดยูเคชั่น/se-ed",
        description: "ความสำเร็จไม่ต้องการคำอธิบาย ความล้มเหลวไม่ต้องการคำแก้ตัว ความคิดไม่มีขีดจำกัด เว้นแต่เราจะยอมรับว่ามันมี ทั้งความยากจนและความร่ำรวย ล้วนเป็นผลพวงของ ความคิด คุณต้องการสิ่งใดมากที่สุด?",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202409/623662/1000275513_front_XXXL.jpg?imgname=%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%A3%E0%B8%A7%E0%B8%A2-:-Think---Grow-Rich-(%E0%B8%9B%E0%B8%81%E0%B9%81%E0%B8%82%E0%B9%87%E0%B8%87)",
        price: "370.00",
    },
    {
        title: "พ่อรวยสอนลูก ฉบับครบรอบ 25 ปี",
        author: "Robert T. Kiyosaki (โรเบิร์ต คิโยซากิ)",
        publisher: "ซีเอ็ดยูเคชั่น/se-ed",
        description: " พ่อรวยสอนลูก ความคลาสสิกที่ยืนหยัดเหนือกาลเวลา หนังสือการเงินส่วนบุคคลอันดับ #1 ตลอดกาล การศึกษาหาความรู้จากหนังสือเป็นอีกหนึ่งปรัชญาของพ่อรวย เพื่อให้คุณอ่าน ถก และอภิปราย จากนั้นลองทำ แล้วมาพูดคุยแลกเปลี่ยนประสบการณ์กันอีกครั้ง พ่อรวยสอนลูก ฉบับครบรอบ 25 ปี มีการเพิ่ม 9 บทเรียน สำหรับแลกเปลี่ยนเรียนรู้ เพื่อให้คุณใช้เป็นแนวทางในการอ่าน อ่านซ้ำและพูดคุยแลกเปลี่ยนเพื่อศึกษาความรู้ทางการเงินกับเพื่อน เพื่อนร่วมงาน และครอบครัว",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202408/619576/1000274485_front_XXXL.jpg?imgname=%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B8%A3%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%AD%E0%B8%99%E0%B8%A5%E0%B8%B9%E0%B8%81-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%9A%E0%B8%A3%E0%B8%AD%E0%B8%9A-25-%E0%B8%9B%E0%B8%B5",
        price: "310.50",
    },
    {
        title: "Money Mastery มั่งคั่งทั้งชีวิต",
        author: "ภัทรพล ศิลปาจารย์ (พอล)",
        publisher: "ไอแอมเดอะเบสท์/I AM THE BEST",
        description: "เงินหายมหาศาลเพราะขาดความรู้ด้านการเงินถ้านำเงิน 100,000 บาท ไปลงทุนใช้เวลา 30 ปีได้รับผลตอบแทนอัตราที่ต่างกัน แต่ที่เหลือเหมือนกันหมด เงินที่ได้จะต่างกันมากนะครับ",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202304/576827/1000260379_front_XXXL.jpg?imgname=Money-Mastery-%E0%B8%A1%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%84%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%97%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95",
        price: "254.00",
    },
    {
        title: "The Psychology of Money : จิตวิทยาว่าด้วยเงิน",
        author: "Morgan Housel",
        publisher: "ลีฟ ริช / Live Rich",
        description: "บทเรียนเหนือกาลเวลาเรื่องความมั่งคั่ง ความโลภ และความสุข ที่คุณไม่ควรพลาด หนึ่งในหนังสือการเงินที่ดีที่สุดและสดใหม่ที่สุดในรอบหลายปี",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202204/547327/1000248314_front_XXXL.jpg?imgname=The-Psychology-of-Money-:-%E0%B8%88%E0%B8%B4%E0%B8%95%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%87%E0%B8%B4%E0%B8%99",
        price: "247.00",
    },
];

document.getElementById('alert-box').style.display = "none";
let idCounter = 0;


function del(num2) {
    document.getElementById('alert-box').style.display = "block";
    document.getElementById('alert-box').dataset.itemId = num2;
}


function delete_2(itemId) {
    const itemToDelete = document.getElementById('fav-item-'+itemId);

    
    if (itemToDelete) {
        itemToDelete.remove();
        document.getElementById('alert-box').style.display = "none";
    }
}


function lalala(num) {
    const alertBox = document.getElementById('alert-box');
    switch(num) {
        case 1:
            alertBox.style.display = "none";
            break;

        case 2:
            const itemId = alertBox.dataset.itemId;
            delete_2(itemId);
            break;
    }
}


function addFav() {
    const BoxItems = document.getElementById('fav-sec');
    const NewItems = document.createElement('div');
    NewItems.className = 'fav-item';

    const NewId = genId();
    NewItems.id = 'fav-item-'+NewId;

    const book = booksList[NewId];

    NewItems.innerHTML = `
        <div class="img">
            <a href="${book.image}"><img id="img-book" src="${book.image}" alt="Book Image"></a>
        </div>

        <div class="detail">
            <div id="name-pro">
                <a id="link-to-shop" href="#">${book.title}</a>
            </div>
            <p id="des-book">${book.description}</p>
        </div>

        <div class="price">
            <span>&#3647;</span>
            <p id="price-book">${book.price}</p>
        </div>

        <a href="#" class="cart"><i id="cart" onclick="" class="ri-shopping-cart-2-fill"></i></a>

        <i id="btn-del-fav" class="ri-delete-bin-6-line" onclick="del(${NewId})"></i>
    `;

    BoxItems.appendChild(NewItems);
}


function genId() {
    return idCounter++;
}