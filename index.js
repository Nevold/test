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
  return console.log(await rensponce.json());
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
// getCar(9);

// deleteCar(6);
// getCars(1);
// updateCar(9, {
//   name: 'BMW444',
//   color: '#fede00',
// });
// startEngineCar(1);
// stopEngineCar(5);
// driveCar(1);
