import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [task, setTask] = useState("");
  const checkedTask = {
    textDecoration: "line-through",
  };
  return (
    <div className="container">
      <div className="to-do">
        <h2>To-Do-List</h2>
        <div className="row">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            id="inputBox"
            placeholder="Add your text"
          />
          <button
            onClick={() => {
              setToDos([
                ...toDos,
                { id: Date.now(), value: task, status: false },
              ]);
              setTask("");
            }}
          >
            Add
          </button>
        </div>
        <div className="toDos">
          {toDos.map((obj) => {
            return (
              <div className="toDo">
                <div className="left">
                  <input
                    onChange={(e) => {
                      setToDos(
                        toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = !obj.status;
                          }
                          return obj2;
                        })
                      );
                    }}
                    checked={obj.status}
                    type="checkbox"
                  />

                  <p style={obj.status ? checkedTask : null}>{obj.value}</p>
                </div>
                <div className="right">
                  <i
                    onClick={() => {
                      setToDos(toDos.filter((obj2) => obj2.id !== obj.id));
                    }}
                    className="fa-solid fa-circle-xmark"
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
