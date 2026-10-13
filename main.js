document.querySelector('button').addEventListener('click', getNinja)

function getNinja(){
    const ninjas = document.querySelector('input').value
    const url = `/api/${ninjas}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#name').innerText = data.name
        document.querySelector('#ninjaName').innerText = data.signatureAbility
        document.querySelector('#age').innerText = data.age
        document.querySelector('#village').innerText = data.village
    })
}
