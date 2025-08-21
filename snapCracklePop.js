function snapCracklePop(k, p, a=3, b=5 ) {
    if (k<1 || a< 1 || b< 1) {
        return "Don't do that!" 
    }
    let gameOutputs = [] 
    for (let number = 1; number <=k; number ++) {
        let gameOutPut= "Snap! Crackle!"
        if (number % a==0 && number % b==0) {
            gameOutPut="Snap! Crackle!" 
        } else if ( number % a ==0) {
            gameOutPut="Snap!" 
        }
         else if (number % b==0) {
             gameOutPut="Crackle!" 
         }
        else { 
            gameOutPut=number
        }
        if (number.toString().includes(p.toString())) {
            gameOutPut= "POP!" 
        }
        gameOutputs.push(gameOutPut)
    } return gameOutputs
}
console.log(snapCracklePop(15,1))