const baseUrl = 'http://localhost:3300';

export const postOneEntry = (entry) => {
    return fetch(`${baseUrl}/entry`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(entry)
    })
        .then(res => res.json())
        .catch(e => console.log(e));
}

// 1. retrieving data from db and display it on the statistics page
// 2. organize the data and make the pie chart 
// export const getEntry