const x = document.getElementById('navl')
const y = document.getElementById('bur')
const z = document.getElementById('body')
const a = document.getElementById('btnid')

 function fun() {
    if (x.className=="nav-list") {
        x.className += ' toggle'
        z.className = 'pop'
        a.className += ' tempbtn'
        document.getElementById('imgtoggle').src = 'images/icon-close.svg'
    }
    else {
        x.className='nav-list'
        z.className = ''
        a.className = 'btnself'
        document.getElementById('imgtoggle').src = 'images/icon-hamburger.svg'
    }

}

y.addEventListener('click', fun)