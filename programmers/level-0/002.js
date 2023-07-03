// 두 수의 나눗셈
function solution(num1, num2) {
  const answer = parseInt((num1 / num2) * 1000);
  return answer;
}

// 숫자 비교하기
function solution(num1, num2) {
    let answer;
    return answer = (num1 == num2) ? 1 : -1;
}

// 분수의 덧셈
function solution(numer1, denom1, numer2, denom2) {
    const answer = [];
    let hap_numer = numer1 * denom2 + numer2 * denom1;
    let hap_denom = denom1 * denom2;
    
    if (denom1 == denom2) {
        hap_denom = denom1;
        hap_numer = numer1 + numer2;
    } else {
        if(denom2 % denom1 == 0) {
            hap_denom = (denom2 / denom1) * denom1;
            hap_numer = (denom2 / denom1) * numer1 + numer2;
        } else {
            hap_denom = denom1 * denom2;
            hap_numer = (denom1 * numer2) + (denom2 * numer1);
        }
        return [hap_numer, hap_denom];
    }
}

// 1. 분모 덧셈
// 2. 분자분모의 최대공약소로 나누기
// 2-1. 분자분모 중 작은 수 찾기
// 2-2. 작은 수를 분자분모로 나누기
// 2-2-1. 나누어 떨어지면 나눈 수가 최대공약수
// 2-2-2. 나누어 떨이지지 않으면 작은 수를 1 줄이고 2-2로 돌아가기
