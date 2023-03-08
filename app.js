let defaultInput = document.getElementById('defaultSize')
let convertInput = document.getElementById('convertEm')  

function result() {
    return convertInput.value / defaultInput.value
}

document.getElementById('convert').addEventListener('click', function(){
    // let result = convertInput.value / defaultInput.value
    if(defaultInput.value && convertInput.value) {
        document.getElementById('result').innerHTML = "Result: " + result() + "em"
    } 
})