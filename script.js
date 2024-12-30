documents.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit'. (e) => {
        e.preventDefault()
        const name = form.querySelector('input[type="text"]').value; 
        const email = form.querySelector('input[type="email"]').value;
        
        if (name && email) {
            alert('Спасибо, ${name}! Ваше сообщение отправленO.');
            form.reset();
        } else {
            alert('Пожалуйста заполните все поля.');
        }
        });
     });
