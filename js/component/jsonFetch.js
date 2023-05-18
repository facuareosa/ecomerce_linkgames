export function JSONfetch() {
    return fetch("games.json")
        .then(res => res.json())
        .then(data => {
        return data;
    });
}