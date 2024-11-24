const book = [
    {
        title: "ถอดรหัสลับสมองเงินล้าน",
        author: "T.Harv Eker (ที ฮาร์ฟ เอคเคอร์)",
        publisher: "วีเลิร์น (WeLearn)",
        description: "แกะรอยวิธีคิดของคนรวยในหนังสือเล่มนี้ Secrets of the Millionaire Mind ว่าเขาหาเงิน เก็บเงิน และใช้เงินอย่างไร ถึงได้มีเงินเหลือเป็นล้าน",
        image: "./img/1.jpg",
        price: "152.00",
        rating: 4.5,
    },
    {
        title: "Topp of the Top ฝันให้ไกล ไปให้สุดทาง",
        author: "จิรายุส ทรัพย์ศรีโสภา",
        publisher: "Adap Creation",
        description: "ผมอยากให้หนังสือเล่มนี้นำพาผู้อ่านไปพบกับแรงบันดาลใจที่จะสร้างตัวเราให้แตกต่างจากคนอื่นกล้าเดินหน้าไปสู่เป้าหมายที่อยากทำ รวมทั้งการตัดสินใจสร้างธุรกิจของตัวเองให้ประสบความสำเร็จซึ่งคนที่บ้าพอจะกล้าลงมือเปลี่ยนแปลงตัวเองหรือทำอะไรสักอย่างที่ยิ่งใหญ่เกินฝันมีน้อยมากแต่ถ้าเชื่อในสิ่งที่คนส่วนใหญ่ไม่เชื่อกระทั่งทำให้เป็นความจริงให้ได้ในสักวันแน่นอนว่าความสำเร็จย่อมเกิดขึ้นได้แม้คุณจะเป็นคนตัวเล็กแค่ไหนก็ตาม จิรายุส ทรัพย์ศรีโสภา",
        image: "./img/2.jpg",
        price: "315.00",
        rating: 4.6,
    },
    {
        title: "เศรษฐีชี้ทางรวย (The Richest Man in Babylon, Millionaire’s Edition)",
        author: "George s.Clason (จอร์จ ซามูเอล คลาสัน)",
        publisher: "ซีเอ็ดยูเคชั่น/se-ed",
        description: "การจัดการค่าใช้จ่ายต่าง ๆ ดูเหมือนจะเป็นเรื่องยากสำหรับใครหลาย ๆ คน เพราะเรามักโดนหลอกระหว่างความต้องการในสิ่งที่จำเป็นจริง ๆ และความปรารถนาในสิ่งสวยงามล่อใจ สุดท้าย ความปรารถนาก็ดึงเงินมากมายออกจากกระเป๋าเราโดยไม่รู้ตัว ทุก ๆ เดือนจึงไม่มีเงินเก็บ หนำซ้ำยังมีหนี้สินอีก",
        image: "./img/3.jpg",
        price: "256.50",
        rating: 4.7,
    },
    {
        title: "ศาสตร์แห่งบัฟเฟตต์ Buffettology",
        author: "แมรี บัฟเฟตต์ และเดวิด คลาร์ก",
        publisher: "เนชั่นบุ๊คส์/NationBooks",
        description: "ในโลกแห่งการลงทุนนั้น ชื่อของวอร์เรน บัฟเฟตต์ มีความหมายเทียบเท่ากับคำว่าความสำเร็จและความร่ำรวยมั่งคั่ง เขาเริ่มต้นจากศูนย์ ทว่าด้วยการเลือกสรรและลงทุนอย่างชาญฉลาดและระมัดระวัง ผลที่ได้กลับมา คือ ความมั่งคั่งร่ำรวยมหาศาลที่ทำให้เขาเป็นมหาเศรษฐีที่ทั่วโลกรู้จักกันดีในขณะนี้",
        image: "./img/4.jpg",
        price: "355.50",
        rating: 4.8,
    },
    {
        title: "Layered Money:พีระมิดเงินซ้อนชั้น",
        author: "Nik Bhatia",
        publisher: "ซีเอ็ดยูเคชั่น/se-ed",
        description: "จะพาคุณดำดิ่งไปกับประวัติศาสตร์วิวัฒนาการของระบบการเงินทั่วทั้งโลก เดินทางย้อนกลับไปยังจุดที่ระบบการเงินพัฒนากลายเป็นระบบ ซ้อนชั้น อธิบายถึงคำดังกล่าว แล้วพาย้อนรอยวิวัฒนาการของทองคำตั้งแต่ยังเป็นเพียงแร่ทอง จนกลางมาเป็นเหรียญทอง และตั๋วแลกทองที่ออกโดยธนาคารในที่สุด มุมมองการวิเคราะห์ พีระมิดซ้อนชั้น ที่แปลกใหม่ไม่เหมือนใครของบาเทีย ชวนให้ผู้อ่านทั่วไปสามารถทำความเข้าใจตลาดการเงินได้อย่างง่ายดาย",
        image: "./img/5.jpg",
        price: "242.00",
        rating: 4.0,
    },
    {
        title: "MONEY MINDSET",
        author: "จักรพงษ์ เมษพันธุ์",
        publisher: "ซีเอ็ดยูเคชั่น/se-ed",
        description: "ความรู้เรื่องเงินเป็นสิ่งสำคัญ แต่ ความคิด ที่ถูกต้องเกี่ยวกับการเงินนั้นสำคัญกว่า! หลักคิดเล็กๆ ที่ผลักดันให้เกิดการกระทำอย่างสม่ำเสมอ จะสร้างผลลัพธ์ที่ยิ่งใหญ่ ความยากของการจัดการการเงิน คือ การที่เราต้องตัดสินใจเกี่ยวกับมันทุกวัน หลายครั้งรู้ว่าไม่ควรทำอย่างนั้น เพราะเคยรู้เคยเรียนมา แต่พอถึงเวลา เรากลับทำตรงกันข้าม ความสำเร็จทางการเงินจึงอาศัยแค่ความรู้อย่างเดียวไม่ได้ ต้องคิดให้ถูก และคิดให้เป็นด้วย เชื่อมั่นว่า...เรื่องราวชวนคิดเล็กคิดน้อยเกี่ยวกับเงิน 51 เรื่องในเล่มนี้ จะเป็นประโยชน์และเปลี่ยนแปลงชีวิตการเงินของทุกคนไปในทางที่ดีขึ้น",
        image: "./img/6.jpg",
        price: "336.00",
        rating: 4.1,
    },
    {
        title: "คิดแล้วรวย : Think & Grow Rich",
        author: "นโปเลียน ฮิลล์ (Napoleon Hill)",
        publisher: "ซีเอ็ดยูเคชั่น/se-ed",
        description: "ความสำเร็จไม่ต้องการคำอธิบาย ความล้มเหลวไม่ต้องการคำแก้ตัว ความคิดไม่มีขีดจำกัด เว้นแต่เราจะยอมรับว่ามันมี ทั้งความยากจนและความร่ำรวย ล้วนเป็นผลพวงของ ความคิด คุณต้องการสิ่งใดมากที่สุด?",
        image: "./img/7.jpg",
        price: "370.00",
        rating: 4.2,
    },
    {
        title: "พ่อรวยสอนลูก ฉบับครบรอบ 25 ปี",
        author: "Robert T. Kiyosaki (โรเบิร์ต คิโยซากิ)",
        publisher: "ซีเอ็ดยูเคชั่น/se-ed",
        description: " พ่อรวยสอนลูก ความคลาสสิกที่ยืนหยัดเหนือกาลเวลา หนังสือการเงินส่วนบุคคลอันดับ #1 ตลอดกาล การศึกษาหาความรู้จากหนังสือเป็นอีกหนึ่งปรัชญาของพ่อรวย เพื่อให้คุณอ่าน ถก และอภิปราย จากนั้นลองทำ แล้วมาพูดคุยแลกเปลี่ยนประสบการณ์กันอีกครั้ง พ่อรวยสอนลูก ฉบับครบรอบ 25 ปี มีการเพิ่ม 9 บทเรียน สำหรับแลกเปลี่ยนเรียนรู้ เพื่อให้คุณใช้เป็นแนวทางในการอ่าน อ่านซ้ำและพูดคุยแลกเปลี่ยนเพื่อศึกษาความรู้ทางการเงินกับเพื่อน เพื่อนร่วมงาน และครอบครัว",
        image: "./img/8.jpg",
        price: "310.50",
        rating: 4.3,
    },
    {
        title: "Money Mastery มั่งคั่งทั้งชีวิต",
        author: "ภัทรพล ศิลปาจารย์ (พอล)",
        publisher: "ไอแอมเดอะเบสท์/I AM THE BEST",
        description: "เงินหายมหาศาลเพราะขาดความรู้ด้านการเงินถ้านำเงิน 100,000 บาท ไปลงทุนใช้เวลา 30 ปีได้รับผลตอบแทนอัตราที่ต่างกัน แต่ที่เหลือเหมือนกันหมด เงินที่ได้จะต่างกันมากนะครับ",
        image: "./img/9.jpg",
        price: "254.00",
        rating: 4.4,
    },
    {
        title: "The Psychology of Money : จิตวิทยาว่าด้วยเงิน",
        author: "Morgan Housel",
        publisher: "ลีฟ ริช / Live Rich",
        description: "บทเรียนเหนือกาลเวลาเรื่องความมั่งคั่ง ความโลภ และความสุข ที่คุณไม่ควรพลาด หนึ่งในหนังสือการเงินที่ดีที่สุดและสดใหม่ที่สุดในรอบหลายปี",
        image: "./img/10.jpg",
        price: "247.00",
        rating: 4.5,
    },
];

const bookContainer = document.getElementById("book-container");
bookContainer.innerHTML = book
  .map(
    (item, index) => `
    <div key="${index}" class="border rounded-lg shadow-lg bg-white px-4 py-2 h-full flex flex-col justify-between mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <div class="flex justify-center">
            <img class="object-cover w-32 h-40 sm:w-40 sm:h-52 md:w-48 md:h-60 rounded-lg mb-4" src="${
              item.image
            }" alt="${item.title}">
        </div>
        <div class="px-2 ">
            <p class="text-primary font-bold text-md sm:text-lg mb-1 hover:underline cursor-pointer" onclick="showDetails(${index})">${
      item.title
    }</p>
            <p class="text-xs sm:text-sm text-gray-600 mb-2">${item.author}</p>
            <p class="text-gray-800 text-xs sm:text-sm mb-2">${item.description.slice(
              0,
              60
            )}...</p>
            <div class="flex items-center mb-2">
                <i class="ri-star-fill text-yellow-500"></i>
                <p class="text-primary text-xs sm:text-sm ml-2">(${
                  item.rating
                })</p>
            </div>
            <p class="text-primary font-semibold text-sm sm:text-lg mb-2">ราคา ${
              item.price
            } บาท</p>
        </div>
        <div class="flex flex-col space-y-2">
            <div class="flex justify-center space-x-2 mt-2">
                <button 
                onclick="addToCart(${index})"
                class="bg-primary text-white rounded-full px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm flex items-center hover:bg-purple-700 transition-colors duration-200">
                    <i class="ri-shopping-cart-fill mr-1"></i> เพิ่มลงตะกร้า
                </button>
                <div class="flex items-center cursor-pointer text-primary hover:text-red-500 transition-colors duration-200">
                    <i class="ri-heart-line text-base sm:text-lg mr-1"></i>
                    <p class="text-xs sm:text-sm">เพิ่มลงรายการโปรด</p>
                </div>
            </div>
        </div>
    </div>
`
  )
  .join("");

function showDetails(index) {
  const bookDetail = book[index];

  const params = new URLSearchParams({
    title: bookDetail.title,
    author: bookDetail.author,
    publisher: bookDetail.publisher,
    description: bookDetail.description,
    image: bookDetail.image,
    price: bookDetail.price,
  });
  const Url = `detail.html?${params}`;
  window.location.href = Url;
}