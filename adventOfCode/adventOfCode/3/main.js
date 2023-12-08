let total = 0;
let temp

document.getElementById('file').onchange = function() {
    var file = this.files[0];
    var reader = new FileReader();

    reader.onload = function(progressEvent) {
        let lines = this.result.split(/\r\n|\n/);

        for (let line = 0; line < lines.length; line++)
        {
            let number = lines[line].split('');
            for(let car = 0; car < number.length; car++)
            {
                
                if(!(number[car] == '.' || parseInt(number[car]) <= 9 || parseInt(number[car]) >= 0))
                {
                    let ligneMoinsUn = lines[line-1].split('');
                    let lignePlusUn = lines[line+1].split('');
                    for(let i = -1; i < 2; i++)
                    {
                        verifyIfNumber(ligneMoinsUn, car, i);
                    }
                    temp = 0;
                    for(let i = -1; i < 2; i++){
                        verifyIfNumber(number, car, i);
                    }
                    temp = 0;
                    for(let i = -1; i < 2; i++){
                        verifyIfNumber(lignePlusUn, car, i);
                    }
                    temp = 0;
                }
            }

        }
        console.log(total)
    }
    reader.readAsText(file);
}
function verifyIfNumber(ligne, car, i){
    let nombre = ""
    if(parseInt(ligne[car+i]) <= 9 || parseInt(ligne[car+i]) >= 0)
    {
        if(parseInt(ligne[car+i-1]) <= 9 || parseInt(ligne[car+i-1]) >= 0)
        {
            if (parseInt(ligne[car+i-2]) <= 9 || parseInt(ligne[car+i-2]) >= 0)
            {
                nombre += ligne[car+i-2]
            }
            nombre += ligne[car+i-1]
        }

        nombre += ligne[car+i]
        if(parseInt(ligne[car+i+1]) <= 9 || parseInt(ligne[car+i+1]) >= 0)
        {
            nombre += ligne[car+i+1]
            if (parseInt(ligne[car+i+2]) <= 9 || parseInt(ligne[car+i+2]) >= 0)
            {
                nombre += ligne[car+i+2]
            }
        }
        
        if (!(temp == nombre))
        {
            console.log(nombre)
            total += parseInt(nombre)
        }
        temp = nombre;
    }
}