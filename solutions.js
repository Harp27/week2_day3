function setAlarm(employed, vacationing) {
    if (employed && !vacationing) {
        return "Alarm is set";
    } else {
        return "Alarm is not set";
    }
}

console.log(setAlarm(false, true))

function oddNumberCount(num) {
    if (num < 1) {
        return 0;
    }
    return Math.floor(num / 2);
}

console.log(oddNumberCount(7))

function trollsBeGone(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (!'aeiouAEIOU'.includes(char)) {
        result += char;
      }
    }
    return result;
  }
  console.log(trollsBeGone("This website is for losers LOL"))

  const bankInfo = { 
    savings: 1000,
    checking: 2000,
    moneyMarket: 9000,
    creditCard: 2000
  };

  const bankAccountSummary = (bankInfo) => {
    let total = 0;
    for(let account in bankInfo) {
        total+= bankInfo[account];
    }
    return total;
  }

  console.log(bankAccountSummary(bankInfo))

  const inTheRed = (total) => {
    return total < 0;
  }
  console.log(inTheRed(bankInfo))
  