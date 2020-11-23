import checkNumInputs from './checkNumImputs';
import closeAllModals from './closeAllModals';
import clearState from './cleareState';

const forms = (state) => {
    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо!',
        failure: 'что-то пошло не так'
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading
        let res = await fetch(url, {
            method: 'post',
            body: data
        });

        return await res.text()
    }

    const clearInputs = () => {
        inputs.forEach( item => item.value = '' )
    }

    form.forEach( item => {

        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage)

            const formData = new FormData(item);

            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key])
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    statusMessage.textContent = message.success
                })
                .catch(error => {
                    statusMessage.textContent = message.failure
                })
                .finally(() => {
                    clearInputs();
                    clearState(state);
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 5000)
                    setTimeout(() => {
                        closeAllModals();
                    }, 6000)
                })
        })
    } )
};

export default forms;