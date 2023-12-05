let total = 0

document.getElementById('file').onchange = function(){
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function(progressEvent) {
        let lines = this.result.split(/\r\n|\n/);

        for(let line = 0; line < lines.length - 1; line++)
        {
            let number = lines[line].split('');
            let idGame;
            for(let car = 0; car < number.length; car++)
            {
                if(number[car] >= '0' && number[car] <= '9' && car == 6)
                {
                    idGame = number[car];
                    if(number[car+1] >= '0' && number[car+1] <= '9')
                    {
                        idGame += number[car+1];
                    }
                    console.log(idGame)
                }
            }
        }
    }
    reader.readAsText(file);
}
