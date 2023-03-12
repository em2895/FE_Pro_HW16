const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(amount, symb) {
    let str = '';

    for (let i = 0; i < amount; i++) {
        str+= symb.charAt(Math.random() * symb.length);
    };

    return str;
}


const key = generateKey(16, characters);

console.log(key);