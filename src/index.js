function decode(string){
    const morse={'.-':     'a', '-...':   'b', '-.-.':   'c', '-..':    'd',
    '.':      'e', '..-.':   'f', '--.':    'g', '....':   'h', '..':     'i',
    '.---':   'j', '-.-':    'k', '.-..':   'l', '--':     'm', '-.':     'n',
    '---':    'o', '.--.':   'p', '--.-':   'q', '.-.':    'r', '...':    's', '-': 't',
    '..-':    'u', '...-':   'v', '.--':    'w', '-..-':   'x', '-.--':   'y',
    '--..':   'z', '.----':  '1', '..---':  '2', '...--':  '3', '....-':  '4', '.....':  '5', '-....':  '6', '--...':  '7',
    '---..':  '8', '----.':  '9', '-----':  '0', ' ':' '}
    let separate_items=string.split('');
    let mass_two_items=[];
    let mass=[];
    while (separate_items.length>0){
        mass_two_items.push(separate_items.splice(0, 2))
    };
    while (mass_two_items.length>0){
        mass.push(mass_two_items.splice(0, 5))
    };
    let morse_string='';
    let morse_mass=[];
    let number_of_stars=0;
    for (let j=0; j<mass.length; j++){
      for (let i=0; i<=mass[j].length-1; i++){
        if (mass[j][i][0]==='1' && mass[j][i][1]==='1'){
            morse_string=morse_string+'-';
        }
        if (mass[j][i][0]==='1' && mass[j][i][1]==='0'){
            morse_string=morse_string+'.';
        }
        if (mass[j][i][0]==='*' && mass[j][i][1]==='*'){
            number_of_stars=number_of_stars+1;
        }
      }
      if (number_of_stars===5){
          morse_string=morse_string+' ';
          number_of_stars=0;
      }
      if (morse_string!==''){
            morse_mass.push(morse_string);
        }
        morse_string='';
    }
    let decoded_string='';
    for (let x=0; x<morse_mass.length; x++){
       decoded_string=decoded_string+morse[morse_mass[x]];
    }

    return decoded_string;
}

module.exports = {
    decode
}