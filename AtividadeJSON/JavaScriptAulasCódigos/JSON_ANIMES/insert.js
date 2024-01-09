//OPERAÇÕES CRUD

const { json } = require("stream/consumers");

const novoAnime = 
{
    "name": "tensei-shitara-slime-datta-ken-2nd-season",
    "rate": " 9.76",
    "src-img": "https://blkom.com/img/anime/3711/tensei-shitara-slime-datta-ken-2nd-season-poster-3746.jpg",
    "description": "الموسم الثاني .",
    "episodes": [
        {
        "1": [
            {
            "Blkom": "https://cdn2.vid4up.xyz/embedvideo/15ffdcc7c86eaa"
            },
            {
            "Blkom": "https://cdn2.vid4up.xyz/embedvideo/15ff6ae1355dd5"
            }
        ]
        },
        {
        "2": [
            {
            "Blkom": "https://cdn2.vid4up.xyz/embedvideo/1600706949a800"
            }
        ]
        },
        {
        "3": [
            {
            "Blkom": "https://cdn2.vid4up.xyz/embedvideo/160103f733b6f7"
            }
        ]
        },
        {
        "4": [
            {
            "Blkom": "https://cdn2.vid4up.xyz/embedvideo/16019809b86249"
            }
        ]
        },
        {
        "5": [
            {
            "Blkom": "https://cdn2.vid4up.xyz/embedvideo/16022b7a69a0f8"
            }
        ]
        },
        {
        "6": [
            {
            "Blkom": "https://cdn2.vid4up.xyz/embedvideo/1602bf49f04fc2"
            }
        ]
        },
        {
        "7": [
            {
            "Blkom": "https://cdn2.vid4up.xyz/embedvideo/1603528a2c62a3"
            }
        ]
        },
        {
        "8": [
            {
            "Blkom": "https://cdn2.vid4up.xyz/embedvideo/1603e69264ffbb"
            }
        ]
        },
        {
        "9": [
            {
            "Blkom": "https://cdn2.vid4up.xyz/embedvideo/160479f607d2af"
            }
        ]
        },
        {
        "10": [
            {
            "Blkom": "https://cdn2.vid4up.xyz/embedvideo/16050ca63cfb1c"
            },
            {
            "Server": "https://www.fembed.com/v/k7w4pf35667ylpp"
            }
        ]
        },
        {
        "11": [
            {
            "Blkom": "https://cdn2.vid4up.xyz/embedvideo/1605a090556d03"
            }
        ]
        },
        {
        "12": [
            {
            "Blkom": "https://cdn2.vid4up.xyz/embedvideo/1606341c976633"
            }
        ]
        }
    ]
}

let jsonString;
try {
    const fs = require("fs")
    jsonString = fs.readFileSync(__dirname + "/BD_animes.json")
    console.log("Arquivo lido com sucesso.")
    //CONVERTENDO DE JSON STRING PARA ARRAY OBJETO (MANIPULÁVEL)
    const listaAnimes = JSON.parse(jsonString)

    listaAnimes.push(novoAnime)
    console.log(listaAnimes)

    const novaListaAnimes = JSON.stringify(listaAnimes)
    fs.writeFileSync(__dirname + "/BD_animes.json", novaListaAnimes)

}
catch (erro) {
    console.log("Erro: ", erro)
    return
}

