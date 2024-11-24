let count = 0;
function submit() {
  let un = document.getElementById("userName").value;
  let cm = document.getElementById("review-text").value;
  let dcm = document.getElementById("comment");
  let dun = document.getElementById("username");
  dun.innerHTML += un;
  dcm.innerText += cm;
  document.getElementById("point").innerHTML =
    count + ' <i style="color: #ffc400;" class="ri-star-line"></i>';
}

function getStar(num) {
  switch (num) {
    case 1:
      document.getElementById("star star1").style.color = "#ffc400";
      document.getElementById("star star2").style.color = "#504f4b";
      document.getElementById("star star3").style.color = "#504f4b";
      document.getElementById("star star4").style.color = "#504f4b";
      document.getElementById("star star5").style.color = "#504f4b";
      break;
    case 2:
      document.getElementById("star star1").style.color = "#ffc400";
      document.getElementById("star star2").style.color = "#ffc400";
      document.getElementById("star star3").style.color = "#504f4b";
      document.getElementById("star star4").style.color = "#504f4b";
      document.getElementById("star star5").style.color = "#504f4b";
      break;
    case 3:
      document.getElementById("star star1").style.color = "#ffc400";
      document.getElementById("star star2").style.color = "#ffc400";
      document.getElementById("star star3").style.color = "#ffc400";
      document.getElementById("star star4").style.color = "#504f4b";
      document.getElementById("star star5").style.color = "#504f4b";

      break;
    case 4:
      document.getElementById("star star1").style.color = "#ffc400";
      document.getElementById("star star2").style.color = "#ffc400";
      document.getElementById("star star3").style.color = "#ffc400";
      document.getElementById("star star4").style.color = "#ffc400";
      document.getElementById("star star5").style.color = "#504f4b";

      break;
    case 5:
      document.getElementById("star star1").style.color = "#ffc400";
      document.getElementById("star star2").style.color = "#ffc400";
      document.getElementById("star star3").style.color = "#ffc400";
      document.getElementById("star star4").style.color = "#ffc400";
      document.getElementById("star star5").style.color = "#ffc400";

      break;
  }
  return (count = num);
}

const params = new URLSearchParams(window.location.search);
const book = {
  title: params.get("title"),
  author: params.get("author"),
  publisher: params.get("publisher"),
  description: params.get("description"),
  image: params.get("image"),
  price: params.get("price"),
};
const bookContainer = (document.getElementById("book-detail").innerHTML = `
        <div class="section00">           
            <div class="bigbox">
                <img src="${book.image}" id="image" alt="ปกหนังสือ">
                <div class="section02">
                    <p id="book">${book.title}</p>
                    <p class="info">ผู้เขียน: ${book.author}</p>
                    <p class="info">สำนักพิมพ์: ${book.publisher}</p>
                    <p>แชร์ : <i class="ri-facebook-circle-fill"></i> <i class="ri-line-fill"></i> <i class="ri-links-fill"></i></p>
                    <h2 id="info">รายละเอียดหนังสือ</h2>
                    <p>#${book.description}</p>
                    <hr>
                    <p id="he">รายละเอียดสินค้า</p>
                    <p><i class="ri-book-open-line"></i> จำนวนหน้า :</p>
                    <p><i class="ri-git-repository-line"></i> ประเภทสินค้า :</p>
                    <p><i class="ri-health-book-line"></i> น้ำหนัก :</p>
                    <hr>
                </div>
                    
                <div class="amount">
                    <p class="info2">ราคา: ${book.price} บาท</p>
                    <p><label for="">จำนวนหนังสือ</label></p>
                    <input type="number" id="bookQuantity" min="1" value="1">
                    <button id="buy" onclick="Buy()">ซื้อสินค้า</button>
                </div>
            </div>
        </div>
        <div class="minibox">
            <div id="info3">
                รีวิว
            </div>
    
            <div class="review">
    
            </div>
            <div class="star-box">
                <button onclick="getStar(1)">
                    <i id="star star1" class="ri-star-line"></i>
                </button>
                <button onclick="getStar(2)">
                    <i id="star star2" class="ri-star-line"></i>
                </button>
                <button onclick="getStar(3)">
                    <i id="star star3" class="ri-star-line"></i>
                </button>
                <button onclick="getStar(4)">
                    <i id="star star4" class="ri-star-line"></i>
                </button>
                <button onclick="getStar(5)">
                    <i id="star star5" class="ri-star-line"></i>
                </button>
            </div> 
            <div class="box">
                <textarea name="" id="userName" placeholder="กรอกชื่อผู้ใช้"></textarea>
                <textarea id="review-text" rows="4" cols="80" name="review" placeholder="เขียนรีวิวของคุณ"></textarea>
            </div>
            <button onclick="submit()" id="submit">ส่งรีวิว</button>
            <hr>
            <div class="comment">
                <label style="font-size: 35px;" for="" id="username"></label>
                <label id="point"></label>
                <label for="" id="comment"></label>
            </div>
        </div>   
`);
function Buy(){
  const bookQuantity  = document.getElementById("bookQuantity").value
  if(bookQuantity>0){
    alert(`จำนวนหนังสือที่สั่ง ${bookQuantity} เล่ม`)
  }else{
    alert("กรุณากรอกจำนวนที่ถูกต้อง");
  }
}