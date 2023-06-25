// header 

let header = document.createElement('header');
let logo = document.createElement("h1");
let text = document.createTextNode('Anwar Tarek');
let ul = document.createElement('ul');
let list = [];
for(let i = 0; i<4 ; i++)
{   
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href','#')
    li.appendChild(a);
    list.push(a)
    ul.appendChild(li);
    li.style.cssText='list-style-type:none ; padding-left:50px; cursor:pointer;font-size:20px'
}
header.appendChild(logo);
logo.appendChild(text)
header.appendChild(ul);
document.body.append(header);
let call_li =document.querySelector('li');
call_li.firstElementChild.innerHTML='Home'
call_li.nextElementSibling.firstElementChild.innerHTML='About';
call_li.nextElementSibling.nextElementSibling.firstElementChild.innerHTML='Services';
call_li.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerHTML='Contact';
header.style.cssText='display: flex; background-color:#eee; padding:20px';
let call_ul =document.querySelector('ul');
call_ul.style.cssText='display:flex ; flex:1 ; justify-content : flex-end ; margin-right:50px';

for(let j=0;j<list.length;j++)
{
    list[j].style.cssText='text-decoration : none'
}
logo.style='color:red; margin-left:50px ; font-size:20px ;display:inline'
//////////////////////////////////////////////////////////////////////////////

// Content 

let container = document.createElement('section');
container.style.cssText=' display:grid; \
grid-template-columns: repeat(9,1fr) ;\
grid-template-rows: 200px 200px 200px 200px 200px ; \
grid-template-areas: "number0 number0 number0  number1 number1 number1  number2 number2 number2 "\
"number3 number3 number3  number4 number4 number4  number5 number5 number5 " \
"number6 number6 number6  number7 number7 number7  number8 number8 number8 " \
"number9 number9 number9  number10 number10 number10  number11 number11 number11 "\
"number12 number12 number12  number13 number13 number13  number14 number14 number14 ";background-color:red;grid-gap:15px ; padding:15px;background-color:#eee'
let array_section = [];
for(let i = 0 ; i<15; i++)
{
    let div = document.createElement('div');
    array_section.push(div);
    container.appendChild(div)
    document.body.append(container)
}
for(let l = 0 ; l< array_section.length ; l++)
{
   array_section[l].innerHTML=`product  ${l+1}`;  
   array_section[l].setAttribute('class',`number${l}`);
}
let div_one = document.querySelector('.number0');
div_one.style.cssText='grid-area: number0; text-align:center; font-size:20px; color:green; background-color:#ddd;display:flex; justify-content:center; align-items:center'


let div_two = document.querySelector('.number1');
div_two.style.cssText='grid-area: number1;text-align:center; font-size:20px; color:green; background-color:#ddd;display:flex; justify-content:center; align-items:center'

let div_three = document.querySelector('.number2');
div_three.style.cssText='grid-area: number2;text-align:center; font-size:20px; color:green ; background-color:#ddd;display:flex; justify-content:center; align-items:center'

let div_four = document.querySelector('.number3');
div_four.style.cssText='grid-area: number3;text-align:center;  font-size:20px; color:green ; background-color:#ddd;display:flex; justify-content:center; align-items:center'

let div_five = document.querySelector('.number4');
div_five.style.cssText='grid-area: number4;text-align:center;  font-size:20px; color:green;background-color:#ddd;display:flex; justify-content:center; align-items:center'

let div_six = document.querySelector('.number5');
div_six.style.cssText='grid-area: number5;text-align:center;  font-size:20px; color:green;background-color:#ddd;display:flex; justify-content:center; align-items:center'

let div_seven = document.querySelector('.number6');
div_seven.style.cssText='grid-area: number6;text-align:center;  font-size:20px; color:green;background-color:#ddd;display:flex; justify-content:center; align-items:center'

let div_eight = document.querySelector('.number7');
div_eight.style.cssText='grid-area: number7;text-align:center;  font-size:20px; color:green;background-color:#ddd;display:flex; justify-content:center; align-items:center'

let div_nine = document.querySelector('.number8');
div_nine.style.cssText='grid-area: number8;text-align:center; font-size:20px; color:green;background-color:#ddd;display:flex; justify-content:center; align-items:center'

let div_ten = document.querySelector('.number9');
div_ten.style.cssText='grid-area: number9;text-align:center; font-size:20px; color:green;background-color:#ddd;display:flex; justify-content:center; align-items:center'


let div_eleven = document.querySelector('.number10');
div_eleven.style.cssText='grid-area: number10;text-align:center; font-size:20px; color:green;background-color:#ddd;display:flex; justify-content:center; align-items:center'

 
let div_tweleve = document.querySelector('.number11');
div_tweleve.style.cssText='grid-area: number11;text-align:center; font-size:20px; color:green;background-color:#ddd;display:flex; justify-content:center; align-items:center'
 


let div_threteen = document.querySelector('.number12');
div_threteen.style.cssText='grid-area: number12;text-align:center; font-size:20px; color:green;background-color:#ddd;display:flex; justify-content:center; align-items:center'
 

let div_fourteen = document.querySelector('.number13');
div_fourteen.style.cssText='grid-area: number13;text-align:center; font-size:20px; color:green;background-color:#ddd;display:flex; justify-content:center; align-items:center'
 

let div_fiveteen = document.querySelector('.number14');
div_fiveteen.style.cssText='grid-area: number14;text-align:center; font-size:20px; color:green;background-color:#ddd;display:flex; justify-content:center; align-items:center'
 
// Footer 
let foot = document.createElement('footer');
let text_footer= document.createTextNode('Directed by/ anwar');
foot.appendChild(text_footer);
document.body.appendChild(foot);
foot.style.cssText='background-color:black; padding:20px ; color:white; font-size:20px;text-align:center';

// button to scroll

let btn = document.createElement('button');
btn.innerHTML='^';
document.body.appendChild(btn);
btn.style.cssText='color:red ; text ;text-align: center;padding: 5px 7px;border: none;box-shadow: 2px 2px 7px 3px black;background-color: white;color: black; position:fixed;cursor:pointer; right:10px; bottom:15px'

document.onscroll=function(){
    if(window.scrollY >= 100)
    {
        btn.style.display='block'
    }
    else{
        btn.style.display='none'
    }
}
btn.onclick=()=>{
   window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
   })
}