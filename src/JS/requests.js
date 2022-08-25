export class apiRequests {
    static baseUrl = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem("@kenzieBlog:token") || ""
    static headers = {
        "Content-type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async login(body) {
        const userLogin = await fetch(`${this.baseUrl}/users/login`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            localStorage.setItem("@kenzieBlog:token", res.token)
            localStorage.setItem("@kenzieBlog:User_id", res.userId)
        })
        .catch(err => console.log(err))
        return userLogin
    }
}

// apiRequests.login()
