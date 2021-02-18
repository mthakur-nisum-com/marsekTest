
export const renderCards=(list=[],elemSelector='') => {
    const rootContainer = document.querySelectorAll(elemSelector);
    const fragment = new DocumentFragment();
    const elemWrapper= document.createElement('ul');
    elemWrapper.className='grid-list'
    if(rootContainer) {
        for(const elem of list) {
            const cardElem = document.createElement('li');
            cardElem.className=`grid-item grid-item-${elem}`
            cardElem.innerText=elem;
            fragment.appendChild(cardElem);
            
        }
        elemWrapper.appendChild(fragment);
        rootContainer[0].children[0].innerHTML='';
        rootContainer[0].children[0].appendChild(elemWrapper);
    }
}