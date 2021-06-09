const base = 'http://127.0.0.1:3000';

const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

const getCars = async (page, limit = 7) => {
  const rensponce = await fetch(`${garage}?_page${page}&_limit=${limit}`);
  return console.log({ item: await rensponce.json(), count: rensponce.headers.get('X-Total-Count') });
};

const getCar = async (id) => {
  const rensponce = await fetch(`${garage}/${id}`);
  return rensponce.json();
  // const data = await rensponce.json();
  // return data;
};

const createCar = async (body) => {
  const rensponce = await fetch(`${garage}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
  return await rensponce.json();
};

const deleteCar = async (id) => {
  const rensponce = await fetch(`${garage}/${id}`, { method: 'DELETE' });
  return await rensponce.json();
};

const updateCar = async (id, body) => {
  const rensponce = await fetch(`${garage}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  });
  return await rensponce.json();
};

const startEngineCar = async (id) => {
  const rensponce = await fetch(`${engine}?id=${id}&status=started`);
  return console.log(await rensponce.json());
};

const stopEngineCar = async (id) => {
  const rensponce = await fetch(`${engine}?id=${id}&status=stopped`);
  return console.log(await rensponce.json());
};

const driveCar = async (id) => {
  const rensponce = await fetch(`${engine}?id=${id}&status=drive`).catch();
  return console.log(
    rensponce.status !== 200
      ? {
          success: false,
        }
      : await rensponce.json()
  );
};

getCar(1).then((obj) => {
  let { name: name, color: color } = obj;
  console.log(name, ' ', color);
});
(async () => {
  let { name: name, color: color } = await getCar(4);
  console.log(name, ' ', color);
})();

async function hello() {
  return 'Hello';
}
hello();
