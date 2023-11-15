
const contact_modal = document.querySelector('#contact-modal');
const contact_modal_close = document.querySelector('#contact-modal-close');
contact_modal_close.addEventListener('click', closeContactModal);

const contact_form = document.querySelector( '#contact-form' );

contact_form.addEventListener( 'submit', submit_form );

async function submit_form(e) {
    
    e.preventDefault();
    showContactModal();
    
    const formData = new URLSearchParams( new FormData( contact_form ) );
    const route = document.querySelector('#route').value;
    const client_id = `Uh7dL&&f$w8P&kwhjCQsuP8ysTf$ut12-${route}`;
    const api_endpoint = 'https://api.paladinwebgroup.com/';
    fetch( api_endpoint, {
        method:'POST',
        headers: {
            "Client-Id": client_id
        },
        body: formData 
    })
    // debug
    // .then( response => console.log(response.text()) ) 
    // .then( data => console.log(data))
    .catch( err => console.log(err) )

}

async function showContactModal(){
    contact_modal.classList.toggle('show');
    setTimeout(()=> {
        contact_modal.classList.toggle('show-animate');
        contact_modal_close.focus();
    },3);
}

function closeContactModal(){
    contact_modal.classList.toggle('show');
    contact_modal.classList.toggle('show-animate');
    contact_form.reset();
}