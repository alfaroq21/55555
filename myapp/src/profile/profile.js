export default function Profile(prop) {
    return (
      <div className="App">
        <h1>{prop.alfaroq} </h1>
        <h2>{prop.fn}</h2>
        <img className='photo' src={prop.Photo} alt="img in src" style={{}} />
        <p></p>
        <button onClick={prop.alert}>success</button>
      </div>
    );
  }
  
  Profile.defaultProps = {
    Bio: "this the default data",
    age: "20"
  };
  