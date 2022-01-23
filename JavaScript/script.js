function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
buttons[i].addEventListener('click', createParagraph);
}
{
    var list = document.querySelector('.output ul');
    console.log(list);
    list.innerHTML = '';
    var greetings = ['Happy Birthday!', 'Merry Christmas', 'A happy Christmas to all ther family','You\'re all I want for Christmas','Get well soon'];

    for (var i = 0; i < greetings.length; i++) {
        var input = greetings[i];
        if( greetings[i].indexOf('Christmas') !== -1) {
            var result = input;
            var listItem = document.createElement('li');
            listItem.textContent = result;
            list.appendChild(listItem);
        }

    }
}
{
   var list = document.querySelector('.output1 ul') ;
   list.innerHTML = "";

   var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
   for (var i = 0; i < cities.length; i++) {
       var input = cities[i];
        var lower = input.toLowerCase();
        var firstLetter = lower.slice(0,1);
        var capitalized = lower.replace(firstLetter, firstLetter.toUpperCase());
       var result = capitalized;
       var listItem = document.createElement('li');
       listItem.textContent = result;
       list.appendChild(listItem);
   }
}
{
    var list = document.querySelector('.output2 ul');
    list.innerHTML = "";
    var stations =['MAN675847583748sjt567654;Manchester Piccadilly',
        'GNF576746573fhdg4737dh4;Greenfield',
        'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
        'SYB4f65hf75f736463;Stalybridge',
        'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
    for (var i =0; i < stations.length; i++) {
        var input = stations[i];
        var code = input.slice(0,3);//station array의 첫번째 Data의 첫번째 글자부터 3번째 글짜까지 Code 변수에 저장
        var semiC = input.indexOf(';');//문자열에서 semicolone의 위치를 number로 반환
        var name = input.slice(semiC + 1);//첫번째 data에서 semicolon의 위치 이후의 문자를 name 변수에 저장
        var final = code + ';' + name;//앞의 3개 문자에 semicolon을 더한 뒤 semicolon 이후의 문자를 더해 final 변수에 저장
        var result = final;//최종 결합된 문자열을 가진 final의 값을 result변수에 저장
        var listItem = document.createElement('li');//html에 'li' tag를 만들고 값은 listItem 변수를 사용
        listItem.textContent = final;//result에 있는 모든 연산자를 제외하고 오로지 문자만 listItem에 저장
        list.appendChild(listItem);//list의 마지막에 listItem을 저장함
    }
}
//Array
{
    var shopping= ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
    shopping;
    var sequence = [1, 1, 2, 3, 5, 8, 13];
    var random = ['tree', 795, [0, 1, 2]];
    shopping[0];
    shopping[0] = 'tahini';
    shopping[0];
    sequence.length;
    for (var i = 0; i < sequence.length; i++) {
        console.log(sequence[i]);
    }
    var myData = 'Manchester,London,Liverpool,Leese,Calisle';
    var myArray = myData.split(',');
   console.log(myArray, myArray.length, myArray[1], myArray[2], myArray[myArray.length-1]);
    myArray.length;
    var myString = myArray.join(',');
    console.log(myString);
    //push와 pop의 기능
    myArray.push('Cardiff');//array에 새로운 Data를 추가하는 기능
    console.log(myArray);
    myArray.push('Bradford', 'Brighton');
    console.log(myArray);
    var newLenght = myArray.push('Bristol');
    console.log(myArray);
    console.log(newLenght);
    myArray.pop();//Array의 마지막 Data를 제거하는 기능
    var removedItem = myArray.pop();
    console.log(myArray);
    console.log(removedItem);
    //unshift와 shift의 기능
    //push와 pop은 Array의 마지막에 data를 추가하거나 마지막 Data를 제거하는 기능이라면 unshift와 shift는 처음에 추가하거나 처음 것을 제거하는 기능
    myArray.unshift('Edinburgh');//배열의 처음에 데이터를 추가
    console.log(myArray);
    var removedItem1 = myArray.shift();//배열의 첫 데이터를 제거
    console.log(myArray);
    console.log(removedItem1);
}
{
    //상품들 출력하기
    var list = document.querySelector('.output3 ul');
    var totalBox = document.querySelector('.output3 p');
    var total = 0;
    list.innerHTML = '';
    totalBox.textContent ='';
    var number1 = ['Underpants:6.99', 'Socks:5.99','T-shirt:14.99','Trousers:31.99', 'Shoes:23.99'];
    for (var i =0; i < number1.length; i++){
        // var semiC = number1[i].indexOf(':');
        // var name = number1[i].slice(0, semiC);
        // var item = [];
        // item.push();
        // var price = number1[i].slice(semiC+1);
        // var itemPrice = [];
        // itemPrice.push()
        // 
        var subArray = number1[i].split(':');//세미콜론을 기준으로 값을 분리
        console.log(subArray);
        var name = subArray[0];//subArray에 분리된 값의 앞부분인 Product의 이름 값 저장
        console.log(name);
        var price = Number(subArray[1]);//SubArray에 분리된 값은 뒷부분인 price를 저장
        total += price;//저장된 Price를 적산 total = total + price와 같은 Code
        itemText = name + '--$' + price;//itemText에 이름과 '--$' 뒤에 Price 저장
        var listItem = document.createElement('li');//listItem 변수를 선언하고 HTML에 <li> tag 생성
        listItem.textContent = itemText;//생성된 <li> tag에 itemText 기록
        list.appendChild(listItem);
    }
    var result = document.createElement('p');
    totalBox.textContent = 'Total: $' + total.toFixed(2);//html에 해당 문자와 값을 표시

}
{
    var list =document.querySelector('.output4 ul');
    var searchInput = document.querySelector('.output4 input');
    var searchBtn = document.querySelector('.output4 button');

    list.innerHTML = '';
    var myHistory = [];
    searchBtn.onclick = function() {
        if (searchInput.value !== '') {
            myHistory.unshift(searchInput.value);
            list.innerHTML = '';
            for (var i =0; i < myHistory.length; i++) {
                itemText = myHistory[i];
                var listItem = document.createElement('li');
                listItem.textContent = itemText;
                list.appendChild(listItem);
            }
        if (myHistory.length >=5) {
            myHistory.pop();
        }
        searchInput.value = '';
        searchInput.focus();
        }
    }
}