  // usei o express pra criar e configurar meu servidor
  const express = require("express")
  const server = express()

  const ativos = [
      {
          simbolo: "IBOV", 
          titulo: "Ibovespa",
          preco: 73428.78, 
          variacao: -0.0551, 
      },
    {
        simbolo: "DolFut20", 
        titulo: "Dolar", 
        preco: 5.10, 
        variacao: 0.02, 
    },
    {
        simbolo: "PETR3",
        titulo: "Petrobras", 
        preco: 13.03, 
        variacao: -0.1075, 
    },
    {
        simbolo: "VALE3",
        titulo: "VALE S.A.",
        preco: 40.10,
        variacao: -0.1090,
    }
]

server.get("/", function(req, res) {
    res.render("ativos.html", { ativos: ativos})
})


// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

//configuracão do nunjunks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
  express: server, 
  noCache: true, // boolean
})



// liguei meu servidor na porta 3000
server.listen(3000)  
    