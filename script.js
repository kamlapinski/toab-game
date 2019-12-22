const logoMove = () => {
    setInterval(() => {
        document.querySelector('h1').classList.toggle('h1move');
    }, 300);
};
window.addEventListener('load', logoMove);




const game = new Game(200);