

const marquee = (selector, speed) => {
    let list = document.querySelector(selector);

    let i = 0;

    setInterval(() => {
        list.style.marginLeft = `-${i}px`;

        // clientWidth me devuelve el ancho total de list
        if(i>list.clientWidth){
            i = 0
        }

        i += speed

    }, 0);


}

marquee(".marquee__list", 0.2);