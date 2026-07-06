const express = require("express")
const app = express()

app.get("/filmes", (req, res) => {
    res.json ([{
    nome: "Tropa de Elite",
    descricao: "O filme acompanha o Capitão Nascimento (Wagner Moura), um capitão do BOPE que busca um substituto enquanto tenta equilibrar a brutal rotina de combate ao tráfico no Rio de Janeiro",
    data_lancamento:"5 de outubro de 2007"
    },
        {
            nome: "Cidade de Deus",
            descricao:"retrata a transformação da comunidade homônima no Rio de Janeiro entre os anos 1960 e 1980",
            data_lancamento:"30 de agosto de 2002"
        },
        {
            nome: "Como treinar o seu dragão",
            descricao:"O filme Como Treinar o Seu Dragão (2010) acompanha Soluço, um jovem viking desajeitado que vive na ilha de Berk, onde caçar dragões é um estilo de vida. Ao capturar um raro Fúria da Noite, ele o solta e faz amizade com a criatura, descobrindo que os dragões não são monstros",
            lancamento:"26 de março de 2010"
        }
])
})

app.get("/filme_favorito", (req, res) => {
    res.json({
        nome:"Scooby-Do 1",
        descricao:"A Mistério S.A. se desfaz após uma briga. Dois anos depois, os detetives são chamados individualmente para investigar eventos sobrenaturais na Ilha do Espanto (Spooky Island). Eles precisam superar suas diferenças e desvendar uma antiga maldição que ameaça os visitantes do resort",
        ano_lancamento: "14 de junho de 2002."

    })
})

app.get ("/series", (req, res) =>{
    res.json([{
        nome:"Gravity falls",
        descricao: "A história segue os irmãos gêmeos Dipper e Mabel Pines, que passam as férias na misteriosa cidade de Gravity Falls, no Oregon, ajudando o excêntrico Tivô Stan na Cabana do Mistério. A trama gira em torno da descoberta de um diário secreto repleto de enigmas e criaturas sobrenaturais.",
        nota:"10/10"
    },
    {
        nome:"The Rookie",
        descricao: "Série policial",
        nota:"8.5/10"
    },
    {
        nome:"Friends",
        descricao: "A série acompanha a vida, os relacionamentos e as aventuras diárias de seis jovens adultos — Rachel, Monica, Phoebe, Joey, Chandler e Ross — que vivem no bairro de Greenwich Village, em Nova York.",
        nota:"7.5/10"
    }
        
])
})

app.listen(3000, ()=> {
    console.log("Servidor Rodando!")
})
