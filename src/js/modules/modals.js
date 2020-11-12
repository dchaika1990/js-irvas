const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector)
        const modal = document.querySelector(modalSelector)
        const close = document.querySelector(closeSelector)

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) e.preventDefault();
                modal.style.display = 'block';
                document.body.classList.add('modal-open');
            })
        })

        const closeFoo = (modal) => {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }

        close.addEventListener('click', () => {
            closeFoo(modal);
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeFoo(modal);
        })

    }

    function showModalByTime(selector, time) {
        setTimeout(()=>{
            document.querySelector(selector).style.display = 'block';
            document.body.classList.add('modal-open');
        }, time);
    }

    bindModal(
        '.popup_engineer_btn',
        '.popup_engineer',
        '.popup_engineer .popup_close'
    );
    bindModal(
        '.phone_link',
        '.popup',
        '.popup .popup_close'
    );
    showModalByTime('.popup', 3000)
};

export default modals;