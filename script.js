const container = document.createElement('div');
const body = document.body;
body.append(container);
container.id = "container";
document.documentElement.style.height="100%";
body.style.height="100%";
body.style.margin="0";



container.style.margin="0";
let array = new Array();
// let div1 = document.createElement('div');
// container.append(div1);
// div1.style.background="green";
// div1.style.width="7%";
// div1.style.height="7%";
// let div2 = document.createElement('div');
// container.append(div2);
// div2.style.background="blue";
// div2.style.width="7%";
// div2.style.height="7%";
// array.push(div1);
// console.log(array[0]);
let input = 0;
const button =  document.createElement('button');
button.innerText="Click";
button.addEventListener('click', () => {
    container.innerHTML= "";
     input = prompt("Amount of squares(max. 100): ");
     paint(input);
})
body.append(button);
function paint(input) {


    for(let i = 0 ; i< input*input; i++ ){
        if(i==0){
    
        }
        let size = 100/input;
        let div1 = document.createElement('div');
        div1.style.width= size + "%";
        div1.style.height=size + "%";
       
         let color = Math.floor(Math.random()*255);
         let color2 = Math.floor(Math.random() * 255);
         div1.style.background= "rgb(" + color + ",0," + color2 + ")";
        
        // array.push(div1);
        div1.addEventListener('mouseenter', () => {
            div1.style.background = "rgb(" + color2 + "," + Math.floor(Math.random()*255) + "," + color + ")";
        })
        div1.addEventListener("mouseleave", () => {
            setTimeout(function(){
                div1.style.background= "rgb(" + color + ",22," + color2 + ")";
            },500);
            
        })
        container.append(div1);
    }
}
