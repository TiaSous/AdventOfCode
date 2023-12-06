let total = 0;

document.getElementById('file').onchange = function () {
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function (progressEvent) {
        let lines = this.result.split(/\r\n|\n/);

        for (let line = 0; line < lines.length; line++) {
            let number = lines[line].split('');
            let idGame;
            let red = 0;
            let blue = 0;
            let green = 0;
            
            //get id
            for (let car = 0; car < number.length; car++) {
                if (number[car] >= '0' && number[car] <= '9' && car == 5) {
                    idGame = number[car];
                    if (number[car + 1] >= '0' && number[car + 1] <= '9') {
                        idGame += number[car + 1];
                        if (number[car + 2] >= '0' && number[car + 2] <= '9') {
                            idGame += number[car + 2];
                        }
                    }
                    
                }
            }

            for (let car = 0; car < number.length; car++) {
                if (getNumberColor('r', number, car) != null)
                {
                    if (red < parseInt(getNumberColor('r', number, car)))
                    {
                        red = parseInt(getNumberColor('r', number, car))
                    }
                }   
                else if (getNumberColor('g', number, car) != null)
                {
                    if (green < parseInt(getNumberColor('g', number, car)))
                    {
                        green = parseInt(getNumberColor('g', number, car))
                    }
                }
                else if (getNumberColor('b', number, car) != null)
                {
                    if (blue < parseInt(getNumberColor('b', number, car)))
                    {
                        blue = parseInt(getNumberColor('b', number, car))
                    }
                }
            }
            
            if (red <= 12 && green <= 13 && blue <= 14)
            {
                console.log(idGame)
                console.log(red, green, blue)
                total += parseInt(idGame)
            }
       
        }
        console.log(total);
        
    }
    reader.readAsText(file);

    function getNumberColor(color, number, car) {
        let valeur = null
        if (number[car] == color) {
            if (number[car - 2] >= '0' && number[car - 2] <= '9') {
                valeur = number[car - 2]
                if (number[car - 3] >= '0' && number[car - 3] <= '9') {
                    valeur = number[car - 3] + valeur
                }
            }
        }
        return valeur;
    }
}
