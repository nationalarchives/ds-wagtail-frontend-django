// Note: this script will need to be transpiled before being used in production.

const submit = document.querySelector('.results-options .results-options__submit');

submit.hidden = true;

const results_options_form = document.querySelector('.results-options form');

results_options_form.addEventListener('change', () => {

    clear_existing_messages();

    const target = document.querySelector('.results-options');
    target.setAttribute('aria-live', 'polite');

    const loading_message = document.createElement('div');
    loading_message.id = "message";
    loading_message.classList.add("results-options__loading-message");

    const text_element = document.createTextNode("Loading sorted results...");
    loading_message.appendChild(text_element);

    target.appendChild(loading_message);

    setTimeout(() => {

        clear_existing_messages();

        const random_number = Math.floor(Math.random() * 10);

        if (random_number < 5) {

            const target = document.querySelector('.results-options');

            const failure_message = document.createElement('div');
            failure_message.classList.add("results-options__failure-message");

            const text_element = document.createTextNode("Sorted results didn't load. Refresh the page and try again.");
            failure_message.appendChild(text_element);

            target.appendChild(failure_message);
        }
    }, 3000);

});

const clear_existing_messages = () => {
    const els = document.querySelectorAll('.results-options__failure-message, .results-options__loading-message'); // Get a NodeList of 'li' elements
    Array.prototype.forEach.call(els, function (item) {
        item.remove();
    });
};
