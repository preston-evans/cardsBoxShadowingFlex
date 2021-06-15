const btn = document.querySelectorAll('button').forEach(btn => btn.addEventListener('click', function () {
    const aray = ['Shit','Fuck','Son','Of','A','Bitch']
    btn.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
    btn.innerText = aray[Math.floor(Math.random()*aray.length)]
}))

const btnhvr = document.querySelectorAll('button')
.forEach(btn => btn.addEventListener('mouseover', function () {
        btn.style.textDecoration = 'underline'; 
}))

const btnout = document.querySelectorAll('button').forEach(btn => btn.addEventListener('mouseout', function () {
    btn.style.textDecoration = 'none'; 
}))

document.querySelector('h1').classList.toggle