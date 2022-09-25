const  cat_result = document.getElementById('cat');
const  dog_result = document.getElementById('dog');
const  cat_btn = document.getElementById('cat-btn');
const  dog_btn = document.getElementById('dog-btn');
cat_btn.addEventListener('click',getRandomcat)
dog_btn.addEventListener('click',getRandomdog)
function getRandomcat(){
    fetch('https://aws.random.cat/meow')
    .then(res => res.json())
    .then(data => {
cat.innerHTML = `<img src="${data.file}"/>`
    })
}



function getRandomdog(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
dog.innerHTML = `<img src="${data.url}"/>`
    })
}






















