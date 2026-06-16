let math = prompt("Nhập điểm môn Toán:");
let physics = prompt("Nhập điểm môn Lý:");
let chemistry = prompt("Nhập điểm môn Hóa:");

let average = (Number(math) + Number(physics) + Number(chemistry)) / 3;

console.log("Điểm trung bình là: " + average);