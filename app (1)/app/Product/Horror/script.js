const book = [
  {
    title: "ธี่หยด...แว่วเสียงครวญคลั่ง",
    autohor: "กฤตานนท์",
    publisher: "แพรวสำนักพิมพ์",
    description:
      " ไม่เคยมีที่ไหนเอากระทู้ดังจากพันทิพมาทำเป็นนิยายแบบนี้มาก่อน และเชื่อได้ว่าเป็นเรื่องจริงที่ผู้เขียนได้รับการถ่ายทอดจากคนที่ได้พบประสบการณ์นี้โดยตรง ท่ามกลางความหนาวและลมพัดหวีดหวิว  แว่วเสียงครวญ “ธี่หยด...ธี่หยด...” ",
    image: "./img/teeyod1.jpg",
    price: 395.00 ,
  },
  {
    title: " ธี่หยด...สิ้นเสียงครวญคลั่ง ",
    autohor: "กฤตานนท์",
    publisher: "แพรวสำนักพิมพ์",
    description:
      "ห้าปีผ่านไป ยักษ์ยังคงออกตามหาปอบที่ฆ่าน้องสาวตลอดเวลา แตก็คว้านํ้าเหลวทุกครั้ง จนกระทั่ง นํ้าเพชรพบเอกสารโบราณชิ้นหนึ่ง ซึ่งเป็นเบาะแสสําคัญให้ยักษ์เข้าใกล้ปอบตนนั้นเป็นครั้งแรก ประกอบกับมีชาวบ้านเสียชีวิตแบบผิดปกติหลายรายใกล้เคียงกับสถานที่ในบันทึกเก่า ยักษ์จึงตัดสินใจออกตามล่ามันอีกครั้ง",
    image: "./img/teeyod2.jpg",
    price: 365.00 ,
  },
  {
    title: "สมิงเขาขวาง",
    autohor: "กฤตานนท์",
    publisher: " แพรวสำนักพิมพ์",
    description:
      "  สมิงเขาขวาง อาถรรพ์ของสมิงร้ายแห่งป่าลึก และการผจญภัยเสี่ยงตายของจ่ามหันต์ เรื่องราวชวนขนหัวลุกก่อนธี่หยด...แว่วเสียงครวญคลั่ง ",
    image: "./img/tiger.jpg",
    price: 225.00 ,
  },
  {
    title: "Rain สายฝนมรณะ",
    autohor: "ปองวุฒิ",
    publisher: "แพรวสำนักพิมพ์",
    description: "Rain สายฝนมรณะ",
    image: "./img/rain.jpg",
    price: 145.00 ,
  },
  {
    title: "Winter เหมันต์สาบสูญ",
    autohor: "ปองวุฒิ",
    publisher: "แพรวสำนักพิมพ์",
    description: " Winter เหมันต์สาบสูญ ",
    image: "./img/winter.jpg",
    price: 145.00 ,
  },
  {
    title: " อิท (IT) เล่ม 1-2 โดย สตีเฟน คิง (Stephen King)",
    autohor: "สตีเวน คิง (Stephen King)",
    publisher: "แพรวสำนักพิมพ์",
    description: "  “หวัดดี จอร์จี้...นี่เพนนีไวส์เอง”",
    image: "./img/it.jpg",
    price: 990.00 ,
  },
  {
    title: "Summer เกาะชะตาฆาต ",
    autohor: " ปองวุฒิ",
    publisher: "แพรวสำนักพิมพ์",
    description:
      " อาถรรพ์แห่งเกาะพี่ครวญถูกปลุกขึ้นมาอีกครั้ง เมื่อ 'อาทิตย์' นักศึกษามหาวิทยาลัยแห่งหนึ่งเดินทางไปยังเกาะดังกล่าวเพื่อทำกิจกรรมกับค่ายอาสาพัฒนาชุมชน เกิดเหตุฆาตกรรมสยองขวัญขึ้นอย่างต่อเนื่องภายในเกาะอีกครั้งอย่างไม่มีใครคาดคิด",
    image: "./img/summer.jpg",
    price: 165.00 ,
  },
  {
    title: "โรงเรียนหลอน ซ่อนผี",
    autohor: "R.L. Stine",
    publisher: "559 พับลิชชิ่ง",
    description: "โรงเรียนหลอน ซ่อนผี  its the first Day of School…forever! ",
    image: "./img/school.jpg",
    price: 220.00 ,
  },
  {
    title: "คนเล่นของ",
    autohor: " ว.ไสยเวท",
    publisher: "รักษ์",
    description:
      "เป็นหนังสือที่รวมเรื่องสั้นแนวเร้นลับสั่นประสาทที่น่าจับตา คนเล่นของ  มาเก็บไว้ในเล่ม",
    image: "./img/konk.jpg",
    price: 170.00 ,
  },
  {
    title: " ผาโหงพราย",
    autohor: "จินตวีร์ วิวัธน์ จินตนา ปิ่นเฉลียว",
    publisher: " กรู๊ฟ พับลิชชิ่ง",
    description: "ผาโหงพราย E-Book",
    image: "./img/pong.jpg",
    price: 329.00 ,
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