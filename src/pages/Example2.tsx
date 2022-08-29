import { useState } from 'react';

export function Example2() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Bento', age: 2 },
    { id: 2, name: 'Bozo', age: 6 },
    { id: 3, name: 'Leticinha', age: 5 },
    { id: 4, name: 'Dirceu', age: 7 },
  ]);

  console.log('🖨 render: Example2');

  const [selectedUserIndex, setSelectedUserIndex] = useState<number>();

  const selectedUser = users[selectedUserIndex!];

  function selectUser(id: number) {
    console.log('>>> selectUser');
    setSelectedUserIndex(users.findIndex((user) => user.id === id));
  }

  function incrementAge(id: number) {
    setUsers((curr) => {
      return curr.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  }

  return (
    <div className="App">
      <>
        <h3>
          Selected User:{' '}
          {selectedUser == null
            ? 'None'
            : `${selectedUser.name} is ${selectedUser.age}`}
        </h3>

        {users.map((user) => (
          <div key={user.id}>
            {user.name} is {user.age} years old
            <button onClick={() => incrementAge(user.id)}>Increment</button>
            <button onClick={() => selectUser(user.id)}>Select</button>
          </div>
        ))}
      </>
    </div>
  );
}
