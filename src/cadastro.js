const options = {method: "POST"}

export class ApiRequest {
    static baseUrl = "https://blog-m2.herokuapp.com/"    
  static async cadastro(body){
    const userRegister = await fetch("${this.baseUrl}users/register",
   {    method: "POST",
        headers: this.headers,
        body: Json.stringify(body)
        })
        .then(response => response.json())
       // .then(response =>{ 
         //   window.location.assign()   
    // })
    return response
    .catch(error => console.error(error))
    
    return userRegister
}

}

