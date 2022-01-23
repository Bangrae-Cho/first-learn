const para = document.querySelector('p');
// HTML 요소 중 p태그 선택
para.addEventListener('click', updateName);
// para에 저장된 객체가 클릭되었을 때 updateName 함수를 실행
function updateName() {
    const name = prompt('enter a new name');
    // 'Enter a new name'과 입력란 출력하여 입력받은 값을 name에 저장
    para.textContent = `Player 1: ${name}`;
    // Para(p 태그)에 새로운 문자열 저장
}