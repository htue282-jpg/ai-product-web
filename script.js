async function generateDescription(){

const name = document.getElementById("prodName").value;
const features = document.getElementById("prodFeatures").value;
const keywords = document.getElementById("prodKeywords").value;

const resultText = document.getElementById("resultText");
const genBtn = document.getElementById("genBtn");

if(!name){
alert("Vui lòng nhập tên sản phẩm");
return;
}

genBtn.innerText = "ĐANG PHÂN TÍCH SEO...";
genBtn.disabled = true;

const prompt = `
Viết mô tả bán hàng hấp dẫn khoảng 150 chữ.

Tên sản phẩm: ${name}
Tính năng: ${features}
Từ khóa SEO: ${keywords}
`;

try{

const result = await callAI(prompt);

resultText.innerText = result;

}catch(err){

resultText.innerText = "Có lỗi khi gọi AI";

}

genBtn.innerText = "Tạo mô tả ngay";
genBtn.disabled = false;

}