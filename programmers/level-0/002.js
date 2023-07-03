// * 두 수의 나눗셈
function solution(num1, num2) {
  const answer = parseInt((num1 / num2) * 1000);
  return answer;
}

// * 숫자 비교하기
function solution(num1, num2) {
    let answer;
    return answer = (num1 == num2) ? 1 : -1;
}

// * 분수의 덧셈
function minNumber(a, b) {
  // 유클리드 알고리즘 사용
  if (b === 0) {
    return a;
  }
  return minNumber(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    const hapNumer = numer1 * denom2 + numer2 * denom1
    const hapDenom = denom1 * denom2

  // 분자분모의 최대공약수로 나누기
  const minValue = minNumber(hapNumer, hapDenom);
  const numerValue = hapNumer / minValue;
  const denomValue = hapDenom / minValue;

  return [numerValue, denomValue];
}

// * 배열 두 배 만들기
function solution(numbers) {
  const answer = numbers.map((num) => num * 2);
  return answer;
}
