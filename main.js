// const apple = prompt("Ehtyoriy son kriting")


// let apples = ""

// for(let i = apple.length -1; i >=0; i--){
//     apples += apple[i]
// }

// console.log(apples);


// console.log(apple.split("").reverse().join(""));


// const mainFunction = (x) =>{
//     document.querySelector(`${x}`)
// }
// console.log(mainFunction);


// let funcsion = (array) =>{

//     array.array.forEach(element => {

//     });
// }
// console.log(funcsion());
// let func = ([0.3,3.2, 2.2]);

const elForm =  document.querySelector(".form-js");
const elFormInput =  document.querySelector(".input-js");
const elFormList =  document.querySelector(".list");
const elBtn = document.querySelector(".btn-js");

let array = []


elForm.addEventListener("submit", (evt) =>{
    evt.preventDefault();
    let obj = {
        number:"",
        textt:elFormInput.value
    }
    elForm.reset()
    elFormList.textContent = "";
    
    array.push(obj)

    for (let i = 0; i < array.length; i++) {
        
        const item = document.createElement("li");
        item.classList.add("flex", "bg-[#fff]", "px-3", "mr-4","py-2","items-center", "md:max-w-[420px]","mt-5", "w-full", " .")
        
        array[i].number = i + 1
        const number = document.createElement("span");
        number.textContent = array[i].number++
        number.classList.add("mr-2")
        item.appendChild(number)
        
        const chekd = document.createElement("input");
        chekd.setAttribute("type", "checkbox")
        chekd.setAttribute("name", "checkbox")
        item.appendChild(chekd)
        
        const text = document.createElement("p");
        text.textContent = array[i].textt
        text.classList.add("mx-2")
        item.appendChild(text)
        
        const btnAdd = document.createElement("button");
        btnAdd.textContent = "Add"
        btnAdd.classList.add("mr-2","rounded", "p-2", "text-white","bg-green-700")
        item.appendChild(btnAdd)
        
        const btnDelete = document.createElement("button");
        btnDelete.textContent = "Delete"
        btnDelete.classList.add("bg-red-500", "rounded", "p-2", "text-white")
        item.appendChild(btnDelete)
        elFormList.appendChild(item);
        
        // btnDelete.addEventListener( "click", () =>{
        //     item.classList.add("hidden")
        //
        // })
        // btnAdd.addEventListener("click" , () =>{
        //     elBtn
        // })
    }
})



