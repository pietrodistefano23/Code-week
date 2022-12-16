import { c, q ,GET } from "./utils.js";
const oggiEl = q(".oggi");
const futuriEl = q(".future");
const passatiEl = q(".past");

const date = new Date();
const today = parseInt(date.getDate());

const totalValue = document.getElementById("totalValue");
const todayValue = document.getElementById("todayValue");
const doneValue = document.getElementById("doneValue");

const Cardcreated = (data) =>{
    const cardEl = c ("div");
    const nameEl = c("span");
    const dataEl = c("span");
    const rateEl = c("span");

    cardEl.className = "card";
    nameEl.className = "name";
    dataEl.className = "data";
    rateEl.className = "rate";

    nameEl.textContent = data.title.slice(0,20);
    dataEl.textContent = data.data;
    rateEl.textContent = "Codice: " + data.rate;
    switch(data.rate){
        case 1:
            rateEl.style = "background-color: #4eb553";
            break;
        case 2:
            rateEl.style = "background-color: #fde910";
            break;   
        case 3:
            rateEl.style = "background-color: #ffa500";
            break;
        case 4:
            rateEl.style = "background-color: #e24836";
            break;
        default:
            rateEl.style = "background-color: #FCF7DE";              
        }
cardEl.append(nameEl,rateEl,dataEl)
    if(parseInt(dataEl.textContent.slice(0,2)) === today){
        oggiEl.append(cardEl);
    }
    if(parseInt(dataEl.textContent.slice(0,2)) > today){
        futuriEl.append(cardEl);
    }
    else if(parseInt(dataEl.textContent.slice(0,2)) < today){
        passatiEl.append(cardEl);
    }



    
}


const getData = ()=>{
let giorno = Math.floor(Math.random()*31)+1;
let mese = 12;
let anno = 2022;
const completeData =`${giorno.toString().length > 1 ? giorno : '0'+ giorno}/${mese}/${anno}`;
return completeData;
};
const getRate = () => {
    let rate = Math.floor(Math.random()*4)+1;
    return rate;
}



const url = "https://jsonplaceholder.typicode.com/todos";
let appuntamenti =[];
window.onload = GET(url)
.then(res=>{
    return res.filter(el => el.id <101);
})
.then(response=> {
    response.forEach(element => {
    element.data = getData();
    element.rate = getRate();
    appuntamenti.push(element);
})
    appuntamenti.map(item=> Cardcreated(item))
    totalValue.textContent = oggiEl.children.length + futuriEl.children.length + passatiEl.children.length
    todayValue.textContent = oggiEl.children.length;
    doneValue.textContent = passatiEl.children.length;
}
)







    







  