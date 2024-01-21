import React from 'react';

import Layout from '../../components/layout/Layout';
import UserCard from '../../components/home/UserCard';

interface HomeProps {
  // Add type annotations for props
}

interface UserData {
  id: number;
  name: string;
  lastName: string;
  age: number;
  description: string;
}

const Home: React.FC<HomeProps> = () => {
  const data: UserData[] = [
    {
      id: 1,
      name: 'John',
      lastName: 'Doe',
      age: 25,
      description: 'Lorem ipsum',
    },
    {
      id: 2,
      name: 'Jane',
      lastName: 'Smith',
      age: 30,
      description: 'Lorem ipsum',
    },
    {
      id: 3,
      name: 'Bob',
      lastName: 'Johnson',
      age: 35,
      description: 'Lorem ipsum',
    },
    {
      id: 4,
      name: 'Alice',
      lastName: 'Williams',
      age: 40,
      description: 'Lorem ipsum',
    },
    {
      id: 5,
      name: 'Mike',
      lastName: 'Brown',
      age: 45,
      description: 'Lorem ipsum',
    },
  ];

  const [counter, setCounter] = React.useState<number>(data.length);

  const sum = () => {
    if (counter < data.length) {
      setCounter(counter + 1);
    }
  };

  const rest = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const reset = () => setCounter(data.length);

  return (
    <>
      <Layout>
        <section className="section">
          <div className="container mb-4">
            <h1 className="title">Contador</h1>
            <span>Numero de cards a enseñar: {counter} </span>
            <div>
              <button className="button is-primary mr-1 ml-1" onClick={sum}>
                Sumar
              </button>
              <button className="button is-warning mr-1 ml-1" onClick={reset}>
                Resetear
              </button>
              <button className="button is-danger mr-1 ml-1" onClick={rest}>
                Restar
              </button>
            </div>
          </div>
          <div className="container">
            <div className="columns is-multiline is-centered">
              {data.slice(0, counter).map(user => (
                <div className="column is-4 p-3">
                  <UserCard
                    key={user.id}
                    name={user.name}
                    lastName={user.lastName}
                    description={user.description}
                    age={user.age}
                  ></UserCard>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
