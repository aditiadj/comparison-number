/*First Version*/

console.log('-----Level 0-----')

var A = 500
var B = 600

if (A > B) {
  console.log(`A lebih besar dari B`)
} else {
  console.log(`A lebih kecil dari B`)
}

console.log('-----Level 1-----')

var haveLearnJS = false;
feedback = haveLearnJS ? 'Thats good' : 'No Problem, lets learn';
console.log(feedback)

var haveLearnJS2 = true;
feedback = haveLearnJS2 ? 'Thats good' : 'No Problem, lets learn';
console.log(feedback)

console.log('-----Level 2-----')

var lulus = 80
var tidakLulus = 50

if (lulus > tidakLulus) {
  result = `Selamat Anda Lulus`
} else {
  result = `Maaf Anda Tidak Lulus`
}
result = tidakLulus < lulus ? `Maaf Anda Tidak Lulus` : `Selamat Anda Lulus` //opposite
console.log(result)

console.log('-----Level 3-----')

function sleep(sleepingTime) {
  if (sleepingTime <= 5 && sleepingTime <= 8) {
    return console.log("Kamu kurang tidur");
  } else {
    return console.log("Kamu kelebihan tidur");
  }
}
sleep(4);

console.log('-----Level 4-----')

function sleeping(sleepingTime, bedTime) {
  if (sleepingTime >= 5 && bedTime >= 12) {
    return console.log("Kamu kurang tidur");
  } else {
    return console.log("Kamu kelebihan tidur");
  }
}
sleeping(12);

console.log('-----Level 5-----')

/*Second Version*/
//---------LEVEL 0------------

function compare() {
  var numberA = parseFloat(document.getElementById('input-one').value)
  var numberB = parseFloat(document.getElementById('input-two').value)

  if (numberA < numberB) {
    document.getElementById('result').innerHTML = numberA + ' smaller than  ' + numberB
  } else if (numberA > numberB) {
    document.getElementById('result').innerHTML = numberA + ' bigger than ' + numberB
  } else {
    document.getElementById('result').innerHTML = numberA + ' = ' + numberB
  }
}
document.getElementById('result-one').addEventListener('click', compare)