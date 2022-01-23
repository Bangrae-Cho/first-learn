const log = document.getElementById('log');
const log1 = document.getElementById('tab');
const editable = document.querySelector('div[contenteidtable]');
const editable2 = document.querySelector('table[contentediable]';)
editable.addEventListener('input', logInputType);
editable2.addEventListener('input', logInputType);
function logInputType(envet){
    log.textcontent = 'input type: ${event.inputType}';
}
function logInputType(event){
    log.textcontent = 'input type: ${event.inputType}';
}