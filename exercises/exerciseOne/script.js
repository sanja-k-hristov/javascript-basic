
const inputNum = prompt('Enter a number');
const string = inputNum.toString();
const result = [string[0]];
  
for(let i=1; i < string.length; i++)
  {
    if((string[i-1]%2 === 0)&&(string[i]%2 === 0))
     {
      result.push('-', string[i]);
     }
    else
     {
      result.push(string[i]);
     }
  }
console.log(result.join(''));