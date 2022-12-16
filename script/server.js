"use strict"
const result=document.getElementById("results");
const filter=document.getElementById("filter");
const listItems= [];

getData();

async function getData(){
    const res=await fetch ("https://randomuser.me/api/?results=8")
    const {results}=await res.json()

   result.innerHTML=" "

   results.forEach(doctors => {
    const li=document.createElement("li")
    listItems.push(li)
    li.innerHTML=`
    <img src="${doctors.picture.large}" alt=${doctors.name.first}"
    <div class="doctors-info">
    <h4>${doctors.name.first} ${doctors.name.last}</h4>
    </div>
    `
    result.appendChild(li)
   });
}

function filterData(searchItem){
    listItems.forEach(item =>{
        if(item.innerText.toLowerCase().includes(searchItem.toLowerCase())){
            item.classList.remove("hide")
        }else{
            item.classList.add("hide")
        }
    })
}
filter.addEventListener("keyup",(element) =>filterData(element.target.value))