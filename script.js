async function callAI(prompt){
    async function generateDescription(){

const name = document.getElementById("productName").value;
const feature = document.getElementById("productFeature").value;
const keyword = document.getElementById("productKeyword").value;

const prompt = `
Viết mô tả sản phẩm chuẩn SEO.

Tên sản phẩm: ${name}
Tính năng: ${feature}
Từ khóa SEO: ${keyword}

Viết chuyên nghiệp, hấp dẫn.
`;

const result = await callAI(prompt);

document.getElementById("resultText").innerText = result;

}

const response = await fetch("/api/ai",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
parts:[
{text:prompt}
]
}
]
})
});

const data = await response.json();

return data.candidates[0].content.parts[0].text;

}