const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImages = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);
    imgPopup.style.cssText = `
        justify-content: center;
        align-items: center;
        display: none;
    `;
    imgPopup.appendChild(bigImages);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if ( target && target.classList.contains('preview') ) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImages.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    })
};

export default images;