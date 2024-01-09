//OPERAÇÕES CRUD

const { errorMonitor } = require('events')

const novosAnimes = 
[ 
    {
      "name": "gintama-the-semi-final",
      "rate": " 8.67",
      "src-img": "https://blkom.com/img/special/3732/gintama-the-semi-final-poster-3767.jpg",
      "description": "حلقات خاصة تمهيدا لأحداث الفيلم الثالث .",
      "episodes": [
        {
          "1": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/16016cca62425a"
            }
          ]
        },
        {
          "2": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/16016ccb09d13c"
            }
          ]
        }
      ]
    }, 
    { 
      "name": "dr-stone-stone-wars", 
      "rate": " 9.37",
      "src-img": "https://blkom.com/img/anime/3731/dr-stone-stone-wars-poster-3766.jpg",
      "description": "الموسم الثاني .",
      "episodes": [
        {
          "1": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/16000683c925b1"
            }
          ]
        },
        {
          "2": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/16009a407e383c"
            }
          ]
        },
        {
          "3": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/16012db110baf8"
            }
          ]
        },
        {
          "4": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/1601c2695e16ca"
            }
          ]
        },
        {
          "5": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/160255456d0189"
            }
          ]
        },
        {
          "6": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/1602e93dad8bc5"
            }
          ]
        },
        {
          "7": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/16037c68bbe0c0"
            }
          ]
        },
        {
          "8": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/1604101fcade3f"
            }
          ]
        },
        {
          "9": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/1604a3d7b2012d"
            }
          ]
        },
        {
          "10": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/16053716c4c20a"
            },
            {
              "Server": "https://www.fembed.com/v/m06z3t56we3jn4k"
            }
          ]
        },
        {
          "11": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/1605ca618d3a32"
            }
          ]
        }
      ]
    }, 
    {
      "name": "log-horizon-entaku-houkai",
      "rate": " 8",
      "src-img": "https://blkom.com/img/anime/3729/log-horizon-entaku-houkai-poster-3764.jpg",
      "description": "الموسم الثالث .",
      "episodes": [
        {
          "1": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/15fff2389eeecd"
            }
          ]
        },
        {
          "2": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/160087a5b0ac6a"
            }
          ]
        },
        {
          "3": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/160118c0d875b2"
            }
          ]
        },
        {
          "4": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/1601ac72e6cb70"
            }
          ]
        },
        {
          "5": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/16023f7d7d5bd3"
            }
          ]
        },
        {
          "6": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/1602d7c3d8c737"
            }
          ]
        },
        {
          "7": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/16036878151b3a"
            }
          ]
        },
        {
          "8": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/1604111f12e817"
            }
          ]
        },
        {
          "9": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/16049042055d80"
            }
          ]
        },
        {
          "10": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/16054d750eb995"
            },
            {
              "Server": "https://www.fembed.com/v/z4dp1hj14mzxgg1"
            }
          ]
        },
        {
          "11": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/160649802af60f"
            }
          ]
        },
        {
          "12": [
            {
              "Blkom": "https://cdn2.vid4up.xyz/embedvideo/16064950574bdd"
            }
          ]
        }
      ]
    }
]

try {
    const jsonString = JSON.stringify(novosAnimes) 
    const fs = require('fs') //FileString
    fs.writeFileSync(__dirname + "/BD_animes.json", jsonString) //Write escrever, Read ler. Sobrescreve
}
catch (erro) {
    console.log("Ocorreu algum erro ao criar o arquivo: ", erro)
    return
}