let clearbtn = document.getElementById("clear")
let equal = document.getElementById("equal")
let result = document.getElementById("result")

//Clear Function
function clear() {
    let result = document.querySelector(".result")
    result.value = ''
}
clearbtn.addEventListener('click', clear)

// Answer Function
function result_ans() {
    if (result.value == '0/0') {
        result.value = 'Result is undefined'
    }
    else {
        let result_final = eval(result.value)
        result.value = result_final
        result_final = null
    }
}
equal.addEventListener('click', result_ans)
