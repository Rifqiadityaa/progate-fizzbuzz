const btn = document.getElementById('btn')

btn.addEventListener('click', function () {
    const output = document.getElementById('outputs')
    let input = document.getElementById('input').value

    let result = convert(input)

    //setiap button di click akan membuat element 'p' baru, lalu element 'p' itu akan diisi dengan result hasil convert dan akan di append ke parent element div dengan id 'outputs'
    const p = document.createElement('p')
    p.innerHTML = String(result)
    output.appendChild(p)
})

function convert(input){
    let result = ""

    if (input === "" || input === "0"){
        result = "invalid input"
    }
    else if (input % 5 === 0 && input % 3 === 0){
        result = "FizzBuzz!"
    }
    else if (input % 5 === 0){
        result = "Buzz!"
    }
    else if (input % 3 === 0){
        result = "Fizz!"
    }
    else{
        result = input
    }

    return result
}