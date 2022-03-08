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

export const getEntry = () => {
    return fetch(`${baseUrl}/statistics`)
        .then(res => res.json())
        .catch(e => console.log(e));
}
