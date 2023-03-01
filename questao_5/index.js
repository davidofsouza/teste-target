

function inverteString (string){
    let final = "";
    for(let i = string.length-1; i >= 0; i--){
        final += string[i];
    }

    return console.log(`A palavra digitada foi ${string} e invertendo fica ${final}`)

}

inverteString("target")