const URL_base:string = "http://localhost:3000/api/login"
 
let newLogin = {
    email: "joao.silva@email.cm",
    senha: "senha123"
}
 
test("POST: /login = 201", async () => {
    const res = await fetch(URL_base, {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(newLogin)
    })
    expect(res.status).toBe(200);
    
    const json = await res.json();
    console.log(json);
});

test("POST: /create = 201", async () => {
    const res = await fetch(URL_base + "/Cadastro", {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(
            {nome: "nomeTeste",
            email: "teste@gmail.com",
            senha: "senha123",
            telefone: "123123123",
            cpf: "131313113"}
        )
    })
    expect(res.status).toBe(200);

});