{let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
    childsAllowance = 10;
} else {
    childsAllowance = 5;
}
childsAllowance;
}
{
    const select = document.querySelector('select');
    const para =document.querySelector('p');
    const temperature = document.querySelector('temp');

    temperature.addEventListener('change', setWeather);

    function setWeather() {
        const choice = select.value;
        if (choice === 'sunny') {
            if (temperature < 86){
                para.textContent = 'It is' + temperature + 'degrees outside - nice na d sunny. Let\'s og out to the beach, or the park, and get an ice cream.';
            } else if (remperature > 86) {
                para.textContent = ' It is ' + temperature + 'degrees outside - Really Hot! If you want to go outside, amke sure to put some suncream on.';
            }
            para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get and ice cream.';
        } else if (choice === 'rainy') {
            para.textContent ='Rain is falling outside; take a rain coat and brolly, and dont\'t stay out for too long.';
        } else if (choice === 'snowing') {
            para.textContent ='The snow is coming down - it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
        } else if (choice === 'overcast') {
            para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
        } else {
            para.textContent = '';
        }
    }
}
{let cheese = 'Cheddar';

if (cheese) {
    console.log('Yay! Cheese available for  making cheese in toast.');
} else {
    console.log('No cheese on toast for tuo today.');
}
}
{
    let shoppingDone = false;
    let childsAllowance;

    if (shoppingDone) {
        childsAllowance = 10;
    } else {
        childsAllowance =5;
    }
}
