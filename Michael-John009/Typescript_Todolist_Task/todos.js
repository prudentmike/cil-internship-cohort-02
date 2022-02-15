"use strict";
const addBtn = document.querySelector('#add');
const clearBtn = document.querySelector('#delete');
let i = 0;
addBtn.addEventListener("click", () => {
    const input = document.querySelector("input");
    const value = input.value;
    const key = value.split(" ")[0];
    localStorage.setItem(i + "/" + key, value);
    i++;
    location.reload();
});
const landing = () => {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (typeof key === 'string') {
            const value = localStorage.getItem(key);
            if (value) {
                const arr = value.split("/").join();
                const ul = document.querySelector(".list");
                const li = document.createElement("li");
                ul.appendChild(li);
                const removebtn = document.createElement("button");
                removebtn.setAttribute("class", "complete");
                removebtn.setAttribute("id", key);
                removebtn.innerText = "\u00d7";
                li.innerText = arr;
                li.insertBefore(removebtn, null);
            }
        }
    }
    ;
};
landing();
clearBtn.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});
const completeBtn = document.querySelectorAll(".complete");
for (const btn of completeBtn) {
    btn.addEventListener('click', () => {
        const key = btn.getAttribute('id');
        if (key) {
            localStorage.removeItem(key);
            location.reload();
        }
    });
}
;
