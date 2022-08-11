// Step 1 - Create an object of XHR
const xhr = new XMLHttpRequest();
// console.log(`Ready State Log 1 - ${xhr.readyState}`)

const source =
    "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";

// Step 2 - Open the portal of communication b/w client and the server
xhr.open("GET", source, false);

// Step 3 - Perform a function when your readyState is in transition
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        // console.log(response);
        let output = "";

        for (let i = 0; i < response.length; i++) {
            console.log(response[i]);

            output += `<div class="col-sm-4 ml-1 mb-2">
        <div class="card">
          <div class="card-body">
            <img class="img-fluid rounded-circle mb-3" src="assets/images/male-profile.png" alt="..." width="100" />
            <h3 class="card-title">${response[i].name}</h3>
            <table class="table table-borderless">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Email</th>
                    <td>${response[i].email}</td>
                    </tr>
                    <tr>
                    <th scope="row">Phone</th>
                    <td>${response[i].phone}</td>
                    </tr>
                    <tr>
                    <th scope="row">Company</th>
                    <td>${response[i].company.name}</td>
                    </tr>

                    <tr>
                    <th scope="row">Address</th>
                    <td>${response[i].address.suite}, ${response[i].address.street}, ${response[i].address.city}, ${response[i].address.zipcode}</td>
                    </tr>
                </tbody>
            </table>
            <a href="${response[i].website}" class="btn btn-primary">Go to Website</a>
          </div>
        </div>
      </div>`;
        }
        document.querySelector("#userData").innerHTML = output;
    }
};

// Step 4 - Send the request
xhr.send();
