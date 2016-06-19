function convert() {
    var ip = document.getElementById('ipInput').value;
    var ipArray = ip.split('.').reverse();
    var decimal = [[], [], [], []];
    var answer = 0;
    for(i = 0; i < ipArray.length; i++) {
        var number = ipArray[i];
        for(j = 7; j >= 0; j--) {
            if(number >= Math.pow(2, j)) {
                decimal[i].push(1);
                number = number - Math.pow(2, j);
            } else {
                decimal[i].push(0);
            }
        }
        for(k = 8 * i; k > 0; k--) {
            decimal[i].push(0);
        }
        console.log(decimal[i]);
        for(l = 0; l < decimal[i].length; l++) {
            if(decimal[i][l] === 1) {
                answer = answer + Math.pow(2, (decimal[i].length - l - 1));
            }
        }
    }
    document.getElementById('result').innerHTML = ip + ' as an integer is: ' + answer;
}
