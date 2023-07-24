
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    titlec = title.value;
    descc = desc.value;
    localStorage.setItem('todo', [titlec, descc]);
    console.log(e)

    todo.innerHTML =`
    <h1>${titlec}</h1>
    <h2>${descc}</h2>`;

    title.value = ""
    desc.value = ""
})

deleteBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    localStorage.clear();
    todo.innerHTML = ""
    console.log(e)
})

