function showAlertFromInput() {
    let input = document.getElementById('message-box-input')
    let message = input.value;
    //append into a div in the document
    let div = document.getElementById('output')
    div.innerHTML = div.innerHTML + `<div>${message}</div>`
}