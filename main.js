const inputBox = document.getElementById('input-box')
const inputBtn = document.getElementById('btn')
const listContainer = document.getElementById('list-container')

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = ''
    saveData()
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        saveData()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()

inputBtn.addEventListener("click", ()=>{
    addTask();
})

inputBox.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // код клавиши Enter
        inputBtn.click();
    }
});

