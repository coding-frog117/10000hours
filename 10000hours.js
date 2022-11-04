const inpWannabe=document.querySelector(".wannabe_blank");
const inpHours=document.querySelector(".hours_blank");
const btnExc=document.querySelector(".btn-exc");
const btnGo=document.querySelector(".btn-go");
const btnShare=document.querySelector(".btn-share");
const txtResult=document.querySelector(".wannabe_result");
const timeResult=document.querySelector(".hours_result");


btnExc.addEventListener("click",function(){
    if (inpWannabe.value===''||inpHours.value===''){
        alert("올바른 접근이 아닙니다");}
    
    txtResult.innerText=inpWannabe.value;
    timeResult.innerText=parseInt(10000/parseInt(inpHours.value));
    // const txtWannabe=document.querySelector(".txt-wannabe");
    // const txtTime=document.querySelector(".txt-time");
    // // txtWannabe.classList.remove("blind");
    // // txtTime.classList.remove("blind");
    }
)


