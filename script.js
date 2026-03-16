async function callAI(prompt){

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

return data.candidates?.[0]?.content?.parts?.[0]?.text || "AI không phản hồi";

}