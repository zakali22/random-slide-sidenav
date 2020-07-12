const mainContent = document.querySelector('main')
const navContent = document.querySelector('nav')
const menuIcon = mainContent.querySelector('main > .menu-icon')
const body = document.querySelector('body')
const option1MenuIcon = document.querySelector('.option1-menu-icon')

// Nav or main slide control - depending on option provided
function slideControl(option){
    console.log(option)
    let menuIconEvent = (option === 1 ? option1MenuIcon : menuIcon)
    if(option === 1){
        body.classList.add('option1')
        mainContent.classList.add('option1')
        option1MenuIcon.style.display = 'flex'
        menuIcon.style.display = 'none'

    } else if(option === 2){
        body.classList.add('option2')
        navContent.classList.add('option2')
    }
    
    menuIconEvent.addEventListener('click', (event) => {
        event.preventDefault();
        switch(option){
            case 2:
                toggleOpenClass(mainContent)
                toggleOpenClass(navContent)
                break;
            default: 
                toggleOpenClass(mainContent)
        }
        
        console.log(option)
        changeMenuIcon(option)
    })
}

// Change content of menu icon
const changeMenuIcon = (option) => {
    if(option === 1){
        if(mainContent.classList.contains('open')){
            console.log("Opened")
            option1MenuIcon.innerHTML = `<img src="/assets/images/close.svg" alt="Close"/> <span>Close</span>`;
            option1MenuIcon.classList.add('open')
        } else {
            console.log("Closed")
            option1MenuIcon.innerHTML = `<img src="/assets/images/menu.svg" alt="Menu"/> <span>Menu</span>`;
            option1MenuIcon.classList.remove('open')
        }
    } else {
        if(mainContent.classList.contains('open')){
            menuIcon.innerHTML = `<img src="/assets/images/close.svg" alt="Close"/>
                                  <span>Close</span>`
        } else {
            menuIcon.innerHTML = `<img src="/assets/images/menu.svg" alt="Menu"/>
                                  <span>Menu</span>`
        }
    }
}

// Add class of open toggle helper function
const toggleOpenClass = (element) => {
    element.classList.toggle('open')
}

export default slideControl;

