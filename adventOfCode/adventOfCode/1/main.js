let total = 0;
let resultat;
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
                else if (number[car] == 'o' && number[car + 1] == 'n' && number[car + 2] == 'e')
                {
                    if (first == null)
                    {
                        first = '1'
                    }
                    else 
                    {
                        last = '1'
                    }
                }
                else if (number[car] == 't' && number[car + 1] == 'w' && number[car + 2] == 'o')
                {
                    if (first == null)
                    {
                        first = '2'
                    }
                    else 
                    {
                        last = '2'
                    }
                }
                else if (number[car] == 't' && number[car + 1] == 'h' && number[car + 2] == 'r' && number[car + 3] == 'e' && number[car + 4] == 'e')
                {
                    if (first == null)
                    {
                        first = '3'
                    }
                    else 
                    {
                        last = '3'
                    }
                }
                else if (number[car] == 'f' && number[car + 1] == 'o' && number[car + 2] == 'u' && number[car + 3] == 'r')
                {
                    if (first == null)
                    {
                        first = '4'
                    }
                    else 
                    {
                        last = '4'
                    }
                }
                else if (number[car] == 'f' && number[car + 1] == 'i' && number[car + 2] == 'v' && number[car + 3] == 'e')
                {
                    if (first == null)
                    {
                        first = '5'
                    }
                    else 
                    {
                        last = '5'
                    }
                }
                else if (number[car] == 's' && number[car + 1] == 'i' && number[car + 2] == 'x')
                {
                    if (first == null)
                    {
                        first = '6'
                    }
                    else 
                    {
                        last = '6'
                    }
                }
                else if (number[car] == 's' && number[car + 1] == 'e' && number[car + 2] == 'v' && number[car + 3] == 'e' && number[car + 4] == 'n')
                {
                    if (first == null)
                    {
                        first = '7'
                    }
                    else 
                    {
                        last = '7'
                    }
                }
                else if (number[car] == 'e' && number[car + 1] == 'i' && number[car + 2] == 'g' && number[car + 3] == 'h' && number[car + 4] == 't')
                {
                    if (first == null)
                    {
                        first = '8'
                    }
                    else 
                    {
                        last = '8'
                    }
                }
                else if (number[car] == 'n' && number[car + 1] == 'i' && number[car + 2] == 'n' && number[car + 3] == 'e')
                {
                    if (first == null)
                    {
                        first = '9'
                    }
                    else 
                    {
                        last = '9'
                    }
                }
                
            }
            if (last == null)
            {
                last = first
            }
            
            resultat = first + last;
            total = parseInt(resultat) + total;
            console.log(total);
            
        }
        document.getElementById('output').innerHTML = total;
    };

    reader.readAsText(file);
  };