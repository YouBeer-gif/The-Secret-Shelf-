const post = [
  {
    title: "หนังสือแนะนำจากทางร้าน",
    img: "./img/img-box-2-index1.png",
    date: "1 ชั่วโมงที่แล้ว",
  },
  {
    title: "โปรโมชั่นต้อนรับปีใหม่",
    img: "./img/img-box-2-index3.png",
    date: "2 ชั่วโมงที่แล้ว",
  },
  {
    title: "TOPP OF THE TOP ฝันให้ไกล ไปให้สุดทาง",
    img: "./img/img-box-2-index2.png",
    date: "3 ชั่วโมงที่แล้ว",
  },
];

const book = [
  {
    title: "มุมมองนักอ่านพระเจ้า เล่ม 1",
    author: "sing N song",
    publisher: "Levon",
    description:
      "คิมดกจา หนุ่มพนักงานออฟฟิศธรรมดาๆ เขาเป็นเเฟนคลับของนักเขียนคนหนึ่งซึ่งนิยายออนไลน์เรื่องนี้ดำเนินเรื่องมาสิบปีแล้ว และแฟนๆก็เลิกติดตามเลิกอ่านนิยายเรื่องนี้ไปแล้ว แต่มีเขาเพียงคนเดียวที่ยังติดตามนิยายเรื่องนี้อยู่ ระหว่างที่กำลังอยู่บนรถไฟฟ้านักเขียนได้อัปเดตนิยายและแจ้งว่าเขาจะลงตอนจบของนิยาย หลังจากที่คิมดกจาได้อ่านตอนจบแล้วนักเขียนก็ส่งข้อความมาหาตัวเขา ซึ่งคือสามวิธีเอาตัวรอดในโลกนิยายของนักเขียน หลังจากนั้นรถไฟที่คิมดกจานั่งก็ทะลุมิติข้ามไปในโลกนิยายเรื่องนี้ ดังนั้นการเอาตัวรอดในโลกที่กำลังล่มสลายจึงเริ่มขึ้น",
    image: "../Product/Fantasy/img/orv1.png",
    price: 295.0,
  },
  {
    title: "The Nature Timeline Wallbook",
    author: "What on Earth",
    publisher: "Bounce",
    description:
      "The Astonishing Natural History of the Earth, from the Dawn of Life to the Present Day.",
    image: "../Product/Foreignbooks/img/1000198742_front_XXL.jpg",
    price: 769.5,
  },
  {
    title: "The Psychology of Money : จิตวิทยาว่าด้วยเงิน",
    author: "Morgan Housel",
    publisher: "ลีฟ ริช / Live Rich",
    description:
      "บทเรียนเหนือกาลเวลาเรื่องความมั่งคั่ง ความโลภ และความสุข ที่คุณไม่ควรพลาด หนึ่งในหนังสือการเงินที่ดีที่สุดและสดใหม่ที่สุดในรอบหลายปี",
    image: "../Product/investment/img/10.jpg",
    price: "247.00",
    rating: 4.5,
  },
  {
    title : "นกก้อนหิน",
    autohor : "บินหลา สันกาลาคีรี",
    publisher : "banglumpoo",
    description : "นกก้อนหิน หนุ่มสาว พวกเธอเชื่อจริงหรือว่าเข้าใจคำว่ารักแท้จริงความรักนั้นเปี่ยมสุข ความรักนั้นเป็นนิรันดร์ ความรักอยู่เหนือทุกสิ่ง เคยสงสัยไหม ทำไมหลายครั้งความรักถึงนำไปสู่ความเจ็บปวด ทำไมหลายครั้งความรักถึงเต็มไปด้วยความผิดหวัง เคยสงสัยไหมว่าถึงอย่างนั้นแล้ว ทำไมเราถึงยังรัก....?ชายหนุ่มเงียบขรึมช่างทำรองเท้าหนังแห่งอำเภอห่างไกลและหญิงสาวเมืองกรุง ที่ต้องผจญภัยร่วมกันในพื้นที่อันตรายแต่มีผู้หญิงอีกคนรออยู่ในใจของเค้า นิยายไม่สดใส ในใจใครหลายคน",
    image : "../Product/Investigative/img/o.jpg",
    price : "350"
},
];




const PostNew = (document.getElementById("post-new").innerHTML = post
  .map(
    (item, index) => `
    <a href="" class="flex items-center space-x-4 p-4 border-b hover:bg-gray-100 transition-colors duration-300 group rounded" key=${index}>
                <div class="flex-shrink-0">
                  <img src="${item.img}" alt="${item.title}" class="w-20 h-16 rounded-lg object-cover transition-transform transform group-hover:scale-105">
                </div>
                <div class="flex-grow">
                  <h5 class="text-lg font-semibold text-gray-700 leading-snug">
                    ${item.title}
                  </h5>
                  <div class="flex items-center text-gray-500 text-sm mt-2">
                    <i class="far fa-clock mr-2"></i>
                    <span>${item.date}</span>
                  </div>
                </div>
              </a>`
  )
  .join(""));
const PostNew2 = (document.getElementById("post-new2").innerHTML = book
  .map(
    (item) => `
      <div class="bg-white rounded-lg shadow-md p-4 flex flex-col">
  <a href="#" class="block overflow-hidden">
    <img 
      src="${item.image}" 
      alt="${item.title}" 
      class="w-full h-60 object-cover rounded transform transition duration-500 hover:scale-105"
    />
  </a>
  <div class="mt-3 flex-shrink-0">
    <a href="#" class="text-xl font-semibold text-gray-700 hover:underline">
      ${item.title}
    </a>
  </div>
  <div class="mt-2 text-gray-600 text-sm">
    ${item.description.slice(0,60)}
  </div>
 
  <div class="flex items-center text-gray-500 text-sm mt-auto">
    <span class="mr-2 text-xs">
      <i class="fas fa-clock"></i>
    </span>
    <span>5 ชั่วโมงที่แล้ว</span>
  </div>
</div>

    `
  )
  .join(""));


