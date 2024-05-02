let campoIdade;
let campoFantasia;
let campoAventura;
let campoAção;
let campoComédia;
let campoDrama;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes Dos 8 anos aos 18 anos");
  createSpan("Sua idade:");
  campoIdade = createInput("8");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
  campoAção = createCheckbox("Gosta de ação?");
  campoComédia = createCheckbox("Gosta de comédia?");
  campoDrama = createCheckbox("Gosta de drama?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeAção = campoAção.checked();
  let gostaDeComédia = campoComédia.checked();
  let gostaDeDrama = campoDrama.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura, gostaDeAção, gostaDeComédia, gostaDeDrama);
  
  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}
 
function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura, gostaDeAção, gostaDeComédia, gostaDeDrama){
  
   if (idade >= 9){
    if (idade >= 10){
     if (idade >= 11){
       if (idade >= 12){
         if (idade >= 13){
           if (idade >= 14){
             if (idade >= 15){
               if (idade >= 16){
                 if (idade >= 17){
                   if (idade >= 18){
                     
                     if(gostaDeAventura){
                       return "Interestelar"
                     }
                     if(gostaDeFantasia){
                       return "Star Wars"
                     }
                     if(gostaDeAção){
                       return "Guerra Civil"
                     }
                     if(gostaDeComédia){
                       return "Tudo em Todo O Lugar ao Mesmo Tempo"
                     }
                     if(gostaDeDrama){
                       return "Duna: Parte 2"
                     }
                   }
                    if(gostaDeAventura){
                      return "Homem-Aranha: Através do Aranhaverso"
                    }
                    if(gostaDeFantasia){
                      return "Vingadores: Ultimato"
                    }
                    if(gostaDeAção){
                      return "007: Operação Skyfall"
                    }
                    if(gostaDeComédia){
                      return "Trem-Bala"
                    }
                    if(gostaDeDrama){
                      return "Divertida Mente"
                    }
              }        
               if(gostaDeAventura){
                 return "Os Vingadores"
               }
               if(gostaDeFantasia){
                 return "Uma Noite no Museu"
               }
               if(gostaDeAção){
                 return "Velozes e Furiosos 10"
               }
               if(gostaDeComédia){
                 return "Alerta Vermelho"
               }
               if(gostaDeDrama){
                 return "O Menino do Pijama Listrado"
               }
             } 
              if(gostaDeAventura){
                return "O Espetacular Homem-Aranha"
              }
              if(gostaDeFantasia){
                return "Thor: O Mundo Sombrio"
              }
              if(gostaDeAção){
                return "Adão Negro"
              }
              if(gostaDeComédia){
                return "Escola de Rock"
              }
              if(gostaDeDrama){
                return "Titanic"
              }
            } 
             if(gostaDeAventura){
               return "Jumanji: Bem-Vindo à Selva"
             }
             if(gostaDeFantasia){
               return "Red: Crescer é uma Fera"
             }
             if(gostaDeAção){
               return "Quarteto Fantástico"
             }
             if(gostaDeComédia){
               return "As Branquelas"
             }
             if(gostaDeDrama){
               return "Branca de Neve e o Caçador"
             }
           }
           if(gostaDeAventura){
             return "Soul"
           }
           if(gostaDeFantasia){
             return "A Bela e a Fera 2017"
           }
           if(gostaDeAção){
             return "Monstros vs. Alienígenas"
           }
           if(gostaDeComédia){
             return "Vovó... Zona 2"
           }
           if(gostaDeDrama){
             return "Pocahontas: O Encontro de Dois Mundos"
           }
         }
         if(gostaDeAventura){
           return "O Lar das Crianças Peculiares"
         }
         if(gostaDeFantasia){
           return "Wonka"
         }
         if(gostaDeAção){
           return "O Último Mestre Do Ar"
         }
         if(gostaDeComédia){
           return "Os Pinguins De Madagascar"
         }
         if(gostaDeDrama){
           return "Extraordinário"
         }
       }
       if(gostaDeAventura){
         return "Robôs"
       }
       if(gostaDeFantasia){
        return "Barbie: Moda e Magia" 
       }
       if(gostaDeAção){
         return "Karatê Kid"
       }
       if(gostaDeComédia){
         return "Kung Fu Panda 2"
       }
       if(gostaDeDrama){
         return "Cinderela"
       }
        }
      if(gostaDeAventura){
        return "Madagascar"
        }
       if(gostaDeAção){
         return "Os Incríveis"
        }  if(gostaDeFantasia){
        return "Como Treinar o Seu Dragão"
        } 
      if(gostaDeComédia){
        return "A Era do Gelo"
      }
      if(gostaDeDrama){
        return "Meu Primeiro Amor"
      }
    }
     
     
     return "O Segredo Dos Animais"
   } else {
     return "Shrek: Para Sempre"
   }
}