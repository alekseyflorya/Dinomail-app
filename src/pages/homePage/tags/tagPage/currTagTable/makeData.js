import React from 'react';
import { faker } from '@faker-js/faker';

const Person = {
  firstName: '',
  lastName: '',
  age: '',
  visits: '',
  progress: '',
  status: 'relationship' | 'complicated' | 'single',
  subRows: Person ? Person : null
};

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = ()=> {
  return {
    firstName: faker.name.firstName('female'),
    lastName: faker.name.lastName('female'),
    age: faker.datatype.age('40'),
    visits: faker.datatype.visits('1000'),
    progress: faker.datatype.progress('100'),
    status: faker.helpers.shuffle([
      'relationship',
      'complicated',
      'single',
    ])[0],
  };
};

const makeData = (...lens) => {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
};

const PersonComponent = ({ person }) => {
  return (
    <div>
      <h3>{person.firstName} {person.lastName}</h3>
      <p>Age: {person.age}</p>
      <p>Visits: {person.visits}</p>
      <p>Progress: {person.progress}</p>
      <p>Status: {person.status}</p>
      {person.subRows && (
        <ul>
          {person.subRows.map((subPerson, index) => (
            <li key={index}>
              <PersonComponent person={subPerson} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const Table = () => {
  const data = makeData(3, 4, 2); // Example usage
  return (
    <div>
      {data.map((person, index) => (
        <PersonComponent key={index} person={person} />
      ))}
    </div>
  );
};