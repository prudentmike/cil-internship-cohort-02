const addBtn = document.querySelector('#add') as HTMLButtonElement;
const clearBtn = document.querySelector('#delete') as HTMLButtonElement;
let i : number = 0;
addBtn.addEventListener("click", () : void=>{
    const input = document.querySelector("input") as HTMLInputElement;
    const value : string = input.value;
    const key : string = value.split(" ")[0];
    localStorage.setItem(i+"/"+key, value);
    i++;
    location.reload();
});
const landing = () : void => {
    for(let i=0; i<localStorage.length; i++){
        const key : string | null = localStorage.key(i);
        if(typeof key === 'string'){
            const value = localStorage.getItem(key);
            if(value){
                const arr = value.split("/").join();
                const ul = document.querySelector(".list") as Element;
                const li = document.createElement("li") as HTMLLIElement
                ul.appendChild(li);
                const removebtn : HTMLButtonElement = document.createElement("button");
                removebtn.setAttribute("class", "complete");
                removebtn.setAttribute("id", key);
                removebtn.innerText="\u00d7";
                li.innerText = arr;
                li.insertBefore(removebtn, null);
            }
        }

    };
};
landing();
clearBtn.addEventListener("click", () : void =>{
    localStorage.clear();
    location.reload();
  })
  const completeBtn : NodeListOf<Element> = document.querySelectorAll(".complete");
  for(const btn of completeBtn){
    btn.addEventListener('click', () : void=>{
      const key : string | null = btn.getAttribute('id');
      if(key){
        localStorage.removeItem(key);
        location.reload();  
      }
    })
  };