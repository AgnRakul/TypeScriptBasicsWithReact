import { useState } from "react";

const users = [
  { name: "John", age: 21 },
  { name: "Mathew", age: 34 },
  { name: "Rithi", age: 60 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  const onChange = () => {}

  return (
    <div>
      <h4>User Search</h4>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={onClick}>Find User</button>
      <br />
      <br />
      <div>
        Name: {user?.name}
        <br />
        Age: {user?.age}
      </div>
    </div>
  );
};

export default UserSearch;
