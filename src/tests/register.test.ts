const URL_REGISTER:string = "http://localhost:3000/api/register"


let newRegister = {
    nome: "danilo",
    email: "daniloalmeida@gmail.com",
    senha: "123",
    
}
 
test("POST: /register = 201", async () => {
    const res = await fetch(URL_REGISTER, {
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(newRegister)
    })
    expect(res.status).toBe(200);
    
    const json = await res.json();
    console.log(json);
})