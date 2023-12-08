// Part 1
//let total = 0
// let siNumGagnant = true
// let numGagnant = []
// let combienNumGagnant = 0
// let chiffre = ""
// let point = 0

// document.getElementById('file').onchange = function() {
//     var file = this.files[0];
//     var reader = new FileReader();

//     reader.onload = function(progressEvent) {
//         let lines = this.result.split(/\r\n|\n/);
//         for (let line = 0; line < lines.length; line++)
//         {
//             combienNumGagnant = 0
//             numGagnant = []
//             siNumGagnant = true
//             point = 0
//             let number = lines[line].split('');
//             for(let car = 8; car < number.length; car++)
//             {
//                 chiffre = ""
//                 if (number[car] == '|')
//                 {
//                     siNumGagnant = false;
//                 }
//                 if(siNumGagnant)
//                 {
//                     if(parseInt(number[car]) <= 9 || parseInt(number[car]) >= 0)
//                     {
//                         chiffre += number[car];
//                         if(parseInt(number[car+1]) <= 9 || parseInt(number[car+1]) >= 0)
//                         {
//                             car += 1;
//                             chiffre += number[car];
                            
//                         }
//                         numGagnant[combienNumGagnant] = chiffre;
//                         combienNumGagnant += 1;
//                     }
//                 }
//                 else if ((parseInt(number[car]) <= 9 || parseInt(number[car]) >= 0) && siNumGagnant == false)
//                 {
//                     chiffre += number[car];
//                     if(parseInt(number[car+1]) <= 9 || parseInt(number[car+1]) >= 0)
//                     {
//                         car += 1;
//                         chiffre += number[car];
//                     }
//                     for(let i = 0; i < numGagnant.length; i++)
//                     {
//                         if(numGagnant[i] == chiffre)
//                         {
                            
//                             if (point == 0)
//                             {
                                
//                                 point = 1;
//                             }
//                             else{
//                                 point *= 2;
//                             }
//                         }
//                     }
                    
//                 }
//             }
//             total += point;
//         }
//         console.log(total)
//     }
//     reader.readAsText(file);
// }





//part 2

// let total = 0
// let siNumGagnant = true
// let numGagnant = []
// let combienNumGagnant = 0
// let chiffre = ""
// let point = []
// let fois = 0

// document.getElementById('file').onchange = function() {
//     var file = this.files[0];
//     var reader = new FileReader();

//     reader.onload = function(progressEvent) {
//         let lines = this.result.split(/\r\n|\n/);
//         for(let line = 0; line < lines.length; line++)
//         {
//             point[line] = 1;
//         }
//         for (let line = 0; line < lines.length; line++)
//         {
//             combienNumGagnant = 0
//             fois = 0
//             numGagnant = []
//             siNumGagnant = true
//             let number = lines[line].split('');
//             for(let car = 8; car < number.length; car++)
//             {
//                 chiffre = ""
//                 if (number[car] == '|')
//                 {
//                     siNumGagnant = false;
//                 }
//                 if(siNumGagnant)
//                 {
//                     if(parseInt(number[car]) <= 9 || parseInt(number[car]) >= 0)
//                     {
//                         chiffre += number[car];
//                         if(parseInt(number[car+1]) <= 9 || parseInt(number[car+1]) >= 0)
//                         {
//                             car += 1;
//                             chiffre += number[car];
                            
//                         }
//                         numGagnant[combienNumGagnant] = chiffre;
//                         combienNumGagnant += 1;
//                     }
//                 }
//                 else if ((parseInt(number[car]) <= 9 || parseInt(number[car]) >= 0) && siNumGagnant == false)
//                 {
//                     chiffre += number[car];
//                     if(parseInt(number[car+1]) <= 9 || parseInt(number[car+1]) >= 0)
//                     {
//                         car += 1;
//                         chiffre += number[car];
//                     }
//                     for(let i = 0; i < numGagnant.length; i++)
//                     {
//                         if(numGagnant[i] == chiffre)
//                         {
//                             fois += 1;
//                             point[line + fois] += point[line]
//                         }
//                     }
                    
//                 }
//             }
//         }
//         for(let i = 0; i < point.length; i++)
//         {
//             total += point[i]
//         }
//         console.log(total)
//     }
//     reader.readAsText(file);
// }