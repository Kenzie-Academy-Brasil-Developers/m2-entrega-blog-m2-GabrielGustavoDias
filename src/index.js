class Api{
    static baseUrl = 'https://blog-m2.herokuapp.com'
    static token   = localStorage.getItem('@BlogKenzie:token') || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkdldGRlIiwiaWF0IjoxNjYxNDU2NzE3LCJleHAiOjE2NjE0Njc1MTd9.W6F7ZPxvSw_Q9Ro4lOrI0Ftd7N_XA4o22CtUaYXpBb4"
    static headers = {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${this.token}`
    }
    
    static async request(){
        const response = await fetch(`${this.baseUrl}/posts?page=1`,{
            method:'GET',
            headers:this.headers
        })
        .then((resp)=>resp.json())
        return response.data
    }
}

class Render{
    static async renderArticleList(){
        const array = await Api.request()
        const ul = document.querySelector('.post__list')

        array.forEach(element => {
            const card = Render.renderArticleCard(element)
            ul.appendChild(card)
        });
    }
    static renderArticleCard(article){
        const li        = document.createElement('li')
        const div       = document.createElement('div')
        const figure    = document.createElement('figure')
        const image     = document.createElement('img')
        const span      = document.createElement('span')
        const h2        = document.createElement('h2')
        const p         = document.createElement('p')

        image.src       = article.user.avatarUrl
        image.alt       = article.user.username
        h2.innerText    = article.user.username
        span.innerText  = article.createdAt
        p.innerText     = article.content

        if(article.user.id == 0 ){
            const btnRemove = document.createElement('button')
            const btnEditt  = document.createElement('button')
            btnEditt.innerText  = 'Editar'
            btnRemove.innerText = 'Remover'
            li.appendChild(btnEditt)
            li.appendChild(btnRemove)
        }

        li.appendChild(figure)
        figure.appendChild(image)
        li.appendChild(div)
        div.appendChild(h2)
        div.appendChild(p)
        li.appendChild(span)

        return li
    }
    static async renderHeader(){
        const array = Api.request()
        const figure = document.querySelector('.avatar__usuario')
        const image  = document.createElement('img')
        // receber a identificação do usuario fazer um loop e nele, fazer a verificação pelo id se for igual ao usuario logado retornar esse usuario

        // image.src      = data.user.avatarUrl
        // image.alt      = 'avatar do usuario'


    }
}

Render.renderArticleList()