import "./styles.css";
import { useContext, createContext, useState } from "react";

export default function App() {
  const UserContext = createContext();

  function Component1() {
    const [userName, setUserName] = useState("");

    return (
      <div>
        <input onChange={(e) => setUserName(e.target.value)} />
        <UserContext.Provider value={userName}>
          <Component2 />
        </UserContext.Provider>
      </div>
    );
  }

  function Component2() {
    const name = useContext(UserContext);
    return <div>Name is : {name}</div>;
  }

  return (
    <div className="App">
      <Component1 />
    </div>
  );
}
