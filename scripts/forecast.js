const key = 'd99b73d1f049b4f31700890f10c840b0';

const getData = async () => {
    const base = 'http://api.exchangeratesapi.io/v1/';
    const query = `latest?access_key=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data;
}

getData()
    .then(data => console.log(data))
    .catch(err => console.log(err));