// Realizar la solicitud Fetch
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        // Mostrar los datos en la consola
        console.log(data);

        // Llenar la tabla con los datos
        const tableBody = document.querySelector('#dataTable tbody');
        data.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
