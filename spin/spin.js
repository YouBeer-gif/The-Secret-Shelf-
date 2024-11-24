
let userPermission = {
    canSpin: true,        
    spinsRemaining: 2,    
    lastSpinTime: null,
    isSpinning: false     
};


let container = document.querySelector(".container");
let btn = document.getElementById("spin");


function getRandomSection() {
    return Math.floor(Math.random() * 8) + 1;
}


function calculateDegrees(section) {
    const sectionDegrees = (section - 1) * 45;
    return 1800 + (360 - sectionDegrees);
}


function getSectionValue(section) {
    const values = {
        1: "บ้านพร้อมหนี้สิน",
        2: "ที่ดิน50ไร่",
        3: "ดินสอสีน้ำเงิน",
        4: "ส่วนลด5%",
        5: "ไม้กั้นรถไฟ",
        6: "หนูแฮมเตอร์",
        7: "ส่วนลดราคา30%",
        8: "หนังสือฟรียกร้าน"
    };
    return values[section];
}


function checkSpinPermission() {
    if (userPermission.isSpinning) {
        alert("กรุณารอให้วงล้อหยุดหมุนก่อน");
        return false;
    }

    if (!userPermission.canSpin) {
        alert("คุณไม่มีสิทธิ์ในการหมุนวงล้อ");
        return false;
    }

    if (userPermission.spinsRemaining <= 0) {
        alert("คุณใช้สิทธิ์หมุนครบแล้ว");
        return false;
    }

    if (userPermission.lastSpinTime) {
        const timeDiff = Date.now() - userPermission.lastSpinTime;
        const cooldownTime = 1 * 60 * 1000; 
        
        if (timeDiff < cooldownTime) {
            const remainingTime = Math.ceil((cooldownTime - timeDiff) / 1000);
            alert(`กรุณารอ ${remainingTime} วินาที ก่อนหมุนครั้งต่อไป`);
            return false;
        }
    }

    return true;
}


function updateSpinStatus() {
    userPermission.spinsRemaining--;
    userPermission.lastSpinTime = Date.now();
    userPermission.isSpinning = false;  
}


btn.onclick = function() {
    if (checkSpinPermission()) {
        userPermission.isSpinning = true;  
        

        btn.disabled = true;
        btn.style.opacity = "0.5";
        btn.style.cursor = "not-allowed";


        const section = getRandomSection();
        const degrees = calculateDegrees(section);
        
  
        container.style.transform = `rotate(${degrees}deg)`;

        setTimeout(() => {
            const result = getSectionValue(section);
            alert(`🎉 ยินดีด้วย! คุณได้รับ ${result}! 🎉`);
            
            updateSpinStatus();
            alert(`เหลือสิทธิ์ในการหมุนอีก ${userPermission.spinsRemaining} ครั้ง`);

            btn.disabled = false;
            btn.style.opacity = "1";
            btn.style.cursor = "pointer";
        }, 5000);  
    }
}