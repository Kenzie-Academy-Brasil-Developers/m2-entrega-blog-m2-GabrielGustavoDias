import { apiRequests } from "./requests.js"
class LoginPage {
    static renderLoginPage() {
        const token = localStorage.getItem("@kenzieBlog:token")
        // if(token) {
        //     window.location.assign(".src/pages/dashboard.html")
        // }
        const emailInput = document.getElementById("emailInput")
        const passwordInput = document.getElementById("passwordInput")
        const btnLogin = document.getElementById("btnLogin")
        
        btnLogin.addEventListener("click", async (event)=>{
            console.log("ok")
            event.preventDefault()
            const data = {
                email: emailInput.value,
                password: passwordInput.value
            }
            const rqst = await apiRequests.login(data)
            console.log(rqst)
        })
    }
}

LoginPage.renderLoginPage()