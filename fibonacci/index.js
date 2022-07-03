const fiboContainer = document.getElementById('container');
var colorsUsed = [];

function fiboSequence(n){
    let squence = [0, 1];
    n = n-2;
    while(n--) squence.push(squence.slice(-1)[0] + squence.slice(-2)[0]);
    return squence;
}

function createFibo(sequence){
    const elem = document.createElement('div');
    let x = sequence.pop();
    elem.style.width = 20 * x+"px";
    elem.style.background = randColor();
    elem.classList.add('fibo');
    if(sequence.length > 0) elem.appendChild(createFibo(sequence));
    colorsUsed = [];
    return elem;
}

function randColor() {
    let c = `hsl(${Math.floor(Math.random() * 8) * 45}, 100%, 60%)`;
    while(colorsUsed.includes(c)) c = `hsl(${Math.floor(Math.random()*11)*30}, 100%, 60%)`;
    colorsUsed.push(c);
    return c;
};

const fibo = createFibo(fiboSequence(7));
fiboContainer.appendChild(fibo);
const elems = document.getElementsByClassName("fibo");

[].forEach.call(elems, function (item) {
    item.addEventListener("click", function(event){
        if(event.target != this) return;
        const flag = event.target.classList.value.includes("rotate");
        let children = event.target.parentElement.getElementsByClassName("fibo") ;
        [].forEach.call(children, function (child) {
            child.style.background = randColor();
            if(flag) child.classList.remove('rotate');
            else child.classList.add('rotate');
        });
        colorsUsed = [];        
    })
});