// Step 1 - Create an object of XHR
const xhr = new XMLHttpRequest()
// console.log(`Ready State Log 1 - ${xhr.readyState}`)

const source = 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09'

// Step 2 - Open the portal of communication b/w client and the server
xhr.open('GET', source, false)

// Step 3 - Perform a function when your readyState is in transition
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText)
        // console.log(response);
        let output = ''

        for(let i=0; i < response.length; i++) {
            // console.log(response[i]);
            output += `<div class="col-lg-4">
            <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <a href="${response[i].website}"><img class="img-fluid rounded-circle mb-3" src="assets/images/male-profile.png" alt="..." width="200" /></a>
                <h5>${response[i].name}</h5>
                <p class="font-weight-light mb-0"></p>
            </div>
        </div>`
        }
        document.querySelector('#userData').innerHTML = output
    }
}

// Step 4 - Send the request
xhr.send()