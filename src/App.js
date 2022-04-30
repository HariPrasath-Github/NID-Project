import "./App.css";

function App() {
  return (
    <div className="container">
      <form>
        <h1>Upload Credit Card Dataset</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>File Name</label>
            <input
              type="text"
              name="username"
            />
          </div>
          <div className="field">
            <label>Upload Credit Card Dataset File</label>
            <input
              type="file"
            />
          </div>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
