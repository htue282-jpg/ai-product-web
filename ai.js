async function callAI(prompt){

const response = await fetch("/api/ai",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
prompt:prompt
})

});

const data = await response.json();

return data.text;

}