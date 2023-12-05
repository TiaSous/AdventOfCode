let total
let resultat
document.getElementById('file').onchange = function() {
    var file = this.files[0];
    var reader = new FileReader();

    reader.onload = function(progressEvent) {
        let lines = this.result.split(/\r\n|\n/);

        for (var line = 0; line < lines.length - 1; line++) {
            console.log(lines[line]);
            let number = lines[line].split('');
            let first = null
            let last = null

            for (var car = 0; car < number.length; car++){
                if (number[car] >= '0' && number[car] <= '9')
                {
                    if (first == null)
                    {
                        first = number[car]
                    }
                    else 
                    {
                        last = number[car]
                    }
                }
            }
            if (last == null)
            {
                last = first
            }
            
            resultat = first + last;
            total = Number(resultat) + Number(total);
            console.log(typeof(resultat));
            console.log(resultat)
            console.log(total)
            
        }
        document.getElementById('output').innerHTML = total;
    };

    reader.readAsText(file);
  };