const base = 'http://127.0.0.1:3000';

const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

const getCars = async (page, limit = 7) => {
  const rensponce = await fetch(`${garage}?_page${page}&_limit=${limit}`);
  return console.log({ item: await rensponce.json(), count: rensponce.headers.get('X-Total-Count') });
};

const getCar = async (id) => {
  return console.log(await (await fetch(`${garage}/${id}`)).json());
};

// getCar(2);
// const createCar = async () => {
//   const rensp = await fetch(`${garage}`);
//   return console.log(JSON.stringify());
// };
// createCar();
const deleteCar = async (id) => {
  const a = await (await fetch(`${garage}/${id}`)).json();
  console.log(a);
  // return (await fetch(`${garage}/${id}`), { method: 'DELETE' }).json();
};
deleteCar(3);
getCars(1, 4);
