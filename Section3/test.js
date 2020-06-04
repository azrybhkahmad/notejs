const name = 'kobe';
function testConstant(value){
    const name = value;
    console.log(`hello my ${name}`);
}

let lastName = 'Bryani';
function testLet(value){
    lastname = value;
    console.log(`hello my name is ${lastName}`);
}

console.log(testConstant(`kobe`), testLet(`Bryani`));