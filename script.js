(function () {
    const months = ['January', 'June', 'July'];
    console.log(1, months);
})();

(function() {
    const joys = [];
    for (let i = 0; i < 700; i++)
        joys.push('joy');
    console.log(2, joys);
})();

(function() {
    const sevens = [];
    for (let i = 0; i < 500; i++)
        sevens.push(7);
    console.log(3, sevens);
})();

(function() {
    const decimals = [];
    for (let i = 0; i < 5000; i++)
        decimals.push(Math.random() * 100);
    console.log(4, decimals);
})();

(function() {
    const decimals = [];
    for (let i = 0; i < 300; i++)
        decimals.push(Math.random() * 40);
    console.log(5, decimals);
})();

(function() {
    const multiples = [];
    for (let i = 20; i <= 800; i += 4)
        multiples.push(i);
    console.log(6, multiples);
})();

(function() {
    const numbers = [];
    for (let i = 100; i >= 10; i -= 2)
        numbers.push(i);
    console.log(7, numbers);
})();

(function() {
    let colorStr = "red,orange,yellow,green,blue,indigo,violet";
    const names = colorStr.split(',');
    console.log(8, names);
})();

(function() {
    let citiesStr = "Edmonton;Calgary;Vancouver;Saskatoon;Winnipeg";
    const names = citiesStr.split(';');
    console.log(9, names);
})();

(function() {
    const names = [];

    while (true) {
        const input = prompt('Enter a name:');
        if (input === 'done')
            break;
        names.push(input);
    }

    console.log(10, names);
})();
