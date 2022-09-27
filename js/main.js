//! Requests
//? старая версия запросов
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://rickandmortyapi.com/api/character');
// xhr.send();
// xhr.onload = function() {
//     console.log(JSON.parse(xhr.response));
// };

//? fetch()
// fetch('https://rickandmortyapi.com/api/character')
//     .then(result => result.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// console.log('hello');


// ====================================== mini mini project ==========================================
function render(count = 50) {
    let container = document.querySelector('.container');
    container.innerHTML = '';
    fetch(`https://meme-api.herokuapp.com/gimme/${count}`)
        .then(result => result.json())
        .then(data => data.memes.forEach(item => {
            container.innerHTML += `
                <div class="card" style="width: 18rem;">
                <img src="${item.url}" class="card-img-top meme-img" alt="...">
                <div class="card-body">
                <h5 class="card-title">Author: ${item.author}</h5>
                <a href="${item.postLink}" target="_blank" class="btn btn-primary">Detail</a>
                </div>
                </div>
            `; 
        }))
}

render();

let updatePageBtn = document.querySelector('#update-btn');
updatePageBtn.addEventListener('click', () => {
    render();
});

let selectCount = document.querySelectorAll('.dropdown-item');
selectCount.forEach(item => {
    item.addEventListener('click', (event) => {
        render(event.target.innerText);
    })
})




