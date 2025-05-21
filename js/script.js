const login=document.querySelector("#login");
const senha=document.querySelector("#senha");
const btn_entrar=document.querySelector("#btn_entrar");

function handleEnter(e){
    e.preventDefault();
    alert(login.value);
}

btn_entrar.addEventListener("click",handleEnter)

