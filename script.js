const textareaTag=document.querySelector(".textarea");
const buttonTag=document.querySelector(".btn");
const textContainerTag=document.querySelector(".textContainer");
buttonTag.addEventListener("click",()=>{
  // console.log("hey");

  const textareaText=textareaTag.value;
  // console.log(textareaText);\
  if(textareaText.length===0){
    return;
  }
  const textTag=document.createElement("div");
  textTag.classList.add("textTag");
  textTag.append(textareaText);
  textContainerTag.append(textTag);
});