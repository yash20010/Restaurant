document.querySelector('#menu-bar').addEventListener('click', onClickMenu)

function onClickMenu(){
    document.getElementById('menu-bar').classList.toggle('change')
    document.getElementById('nav').classList.toggle('change-btn')
}
