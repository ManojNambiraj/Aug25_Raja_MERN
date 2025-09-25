import "./App.css";
import NewBtn from "./NewBtn";

function MultiButtons() {
  const handleBtn = (values) => {
    alert(values);
  };

  return (
    <div className="App">
      <h1>Welcome to ReactJS</h1>

      <NewBtn userName="Music" btnColor="orange" handleBtn={handleBtn} />
      <NewBtn userName="Dance" btnColor="green" handleBtn={handleBtn} />
      <NewBtn userName="Mixes" btnColor="red" handleBtn={handleBtn} />
      <NewBtn userName="Books" btnColor="blue" handleBtn={handleBtn} />
      <NewBtn userName="Cars" btnColor="Pink" handleBtn={handleBtn} />
      <NewBtn userName="Toys" btnColor="Yellow" handleBtn={handleBtn} />
      <NewBtn userName="Bikes" btnColor="Violet" handleBtn={handleBtn} />
      <NewBtn userName="House" btnColor="crimson" handleBtn={handleBtn} />
    </div>
  );
}

export default MultiButtons;
