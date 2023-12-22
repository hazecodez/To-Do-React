import './App.css'

function App() {
  return (
    <div className="container">
        <div className="to-do">
            <h2>To-Do-List</h2>
            <div className="row">
                <input type="text" id="inputBox" placeholder="Add your text"/>
                <button>Add</button>
            </div>
            <ul id="list-container"></ul>
        </div>

    </div>
  );
}

export default App;
