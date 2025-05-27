const login = document.querySelector("#login");
const senha = document.querySelector("#senha");
const btn_entrar = document.querySelector("#btn_entrar");

function limparErros() {
    login.classList.remove("is-invalid");
    senha.classList.remove("is-invalid");
}

function validarSenha() {
    if (senha.value.length < 6) {
        senha.classList.add("is-invalid");
        alert("A senha deve ter no mínimo 6 caracteres.");
        return false;
    }
    return true;
}

function validarLogin() {
    if (login.value.trim() === "") {
        login.classList.add("is-invalid");
        alert("O campo de login não pode estar vazio.");
        return false;
    }
    return true;
}

function handleEnter(e) {
    e.preventDefault();
    limparErros();

    const loginValido = validarLogin();
    const senhaValida = validarSenha();

    if (loginValido && senhaValida) {
        console.log("Login:", login.value);
        console.log("Senha:", senha.value);
        alert("Login bem-sucedido!");
    }
}

btn_entrar.addEventListener("click", handleEnter);
