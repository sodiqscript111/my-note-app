import "./App.css";
import writing from "./assets/writing.svg";
import takeNote from "./assets/Google Keep-10.svg";
import cancel from "./assets/Google Keep-2.svg";

function App() {
  // Sample notes data
  const categories = [
    { id: 1, name: "Personal Note", content: "Add notes" },
    { id: 2, name: "Educational", content: "Add notes" },

    // Add more categories as needed
  ];

  const hideNote = () => {};

  return (
    <>
      <div className="heading">
        <h1>All notes</h1>
        <img className="writing" src={writing} alt="" />
      </div>

      <div className="noteCategories">
        {categories.map(({ id, name, content }) => {
          return (
            <div className="category" key={id}>
              {" "}
              {name} <p>{content}</p>
            </div>
          );
        })}
      </div>
      <div className="takeNote">
        <img src={takeNote} className="svg-icon" />
      </div>

      <div className="container">
        <div className="centered-div">
          <div className="toppart">
            <h1 className="text">Choose categories</h1>
            <img src={cancel} className="notePad" />
          </div>

          <div className="btns">
            {categories.map(({ id, name }) => (
              <div key={id}>
                <button className="btn" type="button">
                  {name}
                </button>
              </div>
            ))}
          </div>

          <form className=".form-control">
            <input
              type="text"
              name=""
              id=""
              placeholder="Category"
              className="input input-alt"
            />
            <span className="input-border input-border-alt"></span>

            <input type="text" name="" id="" placeholder="Write note here" />
            <span className="input-border input-border-alt"></span>
          </form>

          <button type="submit" className="button1">
            Done
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
