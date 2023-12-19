function games(victory, defeat){
    let result = victory - defeat
    return result
}
function ranking(){
    let resultranking = games(191, 11)
    let nivel = ""
    if (resultranking <= 10){
        nivel = "Ferro"
    } else if (resultranking <= 20){
        nivel = "Bronze"
    } else if (resultranking <= 50){
        nivel = "Prata"
    } else if (resultranking <= 80){
        nivel = "Ouro"
    } else if (resultranking <= 90){
        nivel = "Diamante"
    } else if (resultranking <= 100){
        nivel = "Lendário"
    } else if (resultranking => 101){
        nivel = "Imortal"
    }
    return `O Herói tem de saldo de ${resultranking} vitórias e está no nível de ${nivel}`
    }
    console.log(ranking())
     

