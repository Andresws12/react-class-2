import React from 'react';

import Layout from '../../components/layout/Layout';
import UserCard from '../../components/home/UserCard';

interface HomeProps {
  // Add type annotations for props
}

const Home: React.FC<HomeProps> = props => {
  const data = [
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

  console.log(props);

  return (
    <>
      <Layout>
        <section className="section">
          <div className="container columns is-multiline is-centered">
            {data.map(user => (
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
        </section>
      </Layout>
    </>
  );
};

export default Home;
