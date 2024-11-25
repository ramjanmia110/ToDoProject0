let nameInput =document.getElementById("name_input");
let areaBox =document.getElementById("textArea");
let addButton =document.getElementById("add_btn");
let updateButton =document.getElementById("update_btn");
let textDisplay =document.getElementById("text_display");

let ArrayBox =[];
let indexBox1 ;


addButton.addEventListener('click',()=>{
    
    ArrayBox.push({
        name :nameInput.value,
        caption:areaBox.value,
    })

    textDisplay.innerHTML ="";
    nameInput.value ="";
    areaBox.value ="";
    display()

    
})

updateButton.addEventListener('click',()=>{
    ArrayBox[indexBox1].name =nameInput.value;
    ArrayBox[indexBox1].caption =areaBox.value;
    nameInput.value ="";
    areaBox.value ="";
    textDisplay.innerHTML ="";
    updateButton.style.display ="none";
        addButton.style.display ="block";
    display()
  
  
})

function display(){
    ArrayBox.map((item)=>{
        console.log(item.name)
        
        textDisplay.innerHTML+=`
                  <div class="text_Area">
                        <h2>${item.name}</h2>
                        <p>${item.caption}</p>
    
                        <div class="button_box">
                            <button id="edit_btn">Edit</button>
                            <button id="delet_btn">Delete</button>
                        </div>
                    </div>
        `
    })

   let deleButton =document.querySelectorAll("#delet_btn");
   let arrayDelete =Array.from(deleButton);
   arrayDelete.map((item,index)=>{
    item.addEventListener('click',()=>{
        ArrayBox.splice(index,1)
        textDisplay.innerHTML ="";
        display()
    })
   })


   let editButton =document.querySelectorAll("#edit_btn");
   let arrayEdit =Array.from(editButton);

   arrayEdit.map((item,index)=>{
    item.addEventListener('click',()=>{
        nameInput.value =ArrayBox[index].name;
        areaBox.value =ArrayBox[index].caption;
        updateButton.style.display ="block";
        addButton.style.display ="none";
         indexBox1 =index;

       
        
    })
   })
    
}