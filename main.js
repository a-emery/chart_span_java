function convert() {
    var ip = document.getElementById('ipInput').value; // Get ip address from input
    var ipArray = ip.split('.').reverse();  // Split the ip address into arrays in reverse order to make it easier to add zeros later
    var binaryArray = []; // Create an array to story the array of binary chunks
    var answer = 0;
    var ipArrayLength = ipArray.length; // Slightly faster than calculating everytime for loop is hit
    for(i = 0; i < ipArrayLength; i++) { // Go into each chunk of the ipAddress
        binaryArray[i] = []; // Create an index in the binaryArray to store data about this chunk
        for(j = 7; j >= 0; j--) {
            if(ipArray[i] >= Math.pow(2, j)) { // If ipArray[i] is larger than 2^j, add a 1 to that chunks index of the binaryArray and subtract 2^j from ipArray[i]
                binaryArray[i].push(1);
                ipArray[i] -= Math.pow(2, j);
            } else { // Otherwise, add a 0 and keep ipArray[i] as it
                binaryArray[i].push(0);
            }
        }
        for(k = 8 * i; k > 0; k--) { // Add necessary 0's to the end of each chunk of the ip
            binaryArray[i].push(0);
        }
        for(l = 0; l < binaryArray[i].length; l++) {
            if(binaryArray[i][l] === 1) { // Add powers of 2 to answer as they appear in binaryArray
                answer += Math.pow(2, (binaryArray[i].length - 1 - l));
            }
        }
    }
    document.getElementById('result').innerHTML = ip + ' as an integer is: ' + answer;
}


function convertEasy() {
    var ip = document.getElementById('ipInput2').value;
    var ipArray = ip.split('.').reverse();
    var answer = 0;
    var ipArrayLength = ipArray.length; // Slightly faster than calculating everytime for loop is hit
    for(i = 0; i < ipArrayLength; i++) {
        ipArray[i] = Number(ipArray[i]).toString(2);
        for(k = 8 * i; k > 0; k--) {
            ipArray[i] += 0;
        }
        ipArray[i] = parseInt(ipArray[i], 2);
        answer += ipArray[i];
    }
    document.getElementById('result2').innerHTML = ip + ' as an integer is: ' + answer;
}
