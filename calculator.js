let input=document.getElementById("inputBox");
let buttons=document.querySelector("button");
let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            try{
            string=eval(string);
            input.value=string;
        }catch{
            input.value="Error";}
        }
        else if(e.target.innerHTML=="AC"){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=="C"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            console.log(e.target);
            string+=e.target.innerHTML;
            input.value=string;
        }
    })
});
