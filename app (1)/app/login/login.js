const users = new Array(["Admin", "admin101", "spu@example.com"]);

function Login() {
    let getUser = document.getElementById('login_u').value;
    let getPass = document.getElementById('login_p').value;

    if (!getUser || !getPass) {
        Swal.fire({
            title: "โปรดกรอกข้อมูลให้ครบ",
            icon: "error",
            timer: 2000,
            heightAuto: false, 
            
        })
        return false;
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i][0] === getUser && users[i][1] === getPass) {
           Swal.fire({
            title: `ยินดีต้อนรับ ${users[i][0]}`,
            icon: "success",
            timer: 2000,
            backdrop: true,
            heightAuto: false, 
           }).then(() => {
            window.location.href = "/index.html";
            return true;
           })
          
        }
    }
    Swal.fire({
      title: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
      icon: "error",
      timer: 2000,
      backdrop: true,
      heightAuto: false, 
    })
    clearLogin();
    return false;
}

function signupMain() {
  let getUser = document.getElementById("sign_t").value;
  let getPass = document.getElementById("sign_p").value;
  let getPass2 = document.getElementById("sign_cp").value;
  let getEmail = document.getElementById("sign_e").value;

  if (!getUser || !getPass || !getPass2 || !getEmail) {
    Swal.fire({
      title: "โปรดกรอกข้อมูลให้ครบ",
      icon: "error",
      heightAuto: false, 
      timer: 2000,
    })
   
    return false;
  }

  if (getPass !== getPass2) {
    Swal.fire({
      title: "รหัสผ่านไม่ตรงกัน",
      icon: "error",
      heightAuto: false, 
      timer: 1500,
    });
    return false;
  }

  Swal.fire({
    title: "สมัครสมาชิกสําเร็จ",
    icon: "success",
    heightAuto: false, 
    timer: 2000,
  })
  users.push([getUser, getPass, getEmail]);
  clearSignup();
  login();
}

document.getElementById("BoxSignup").style.display = "none";

function login() {
  document.getElementById("BoxSignup").style.display = "none";
  document.getElementById("BoxLogin").style.display = "block";
}

function signup() {
  document.getElementById("BoxLogin").style.display = "none";
  document.getElementById("BoxSignup").style.display = "block";
}

function clearLogin() {
  document.getElementById("login_u").value = "";
  document.getElementById("login_p").value = "";
}

function clearSignup() {
  document.getElementById("sign_t").value = "";
  document.getElementById("sign_p").value = "";
  document.getElementById("sign_cp").value = "";
  document.getElementById("sign_e").value = "";
}


