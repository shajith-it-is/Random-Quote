let i=2;

function next() {
    i++;
    loader();
    const imageElement = document.querySelector('#image img');
    imageElement.setAttribute("src",`./assets/2 (${i}).jpg`);
}

function previous() {
    i--;
    loader();
    const imageElement = document.querySelector('#image img');
    imageElement.setAttribute("src",`./assets/2 (${i}).jpg`);
}

function loader() {
    const loader = document.querySelector('.loader');
    const div = document.querySelector('#image');
    div.style.display = 'none';
    loader.style.display = 'block';
    document.querySelector('body').classList.add('modal-screen');
    
    setTimeout(() => {
        loader.style.display = 'none';
        div.style.display = 'block';
        document.querySelector('body').classList.remove('modal-screen');
    }, 1200);
}