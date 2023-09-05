import "./App.css";
function App() {
  return (
    <div>
      <header>
        <h1>Task 5 for CSS Styling</h1>
      </header>
      <main>
      <div className="my-container">
      <h1 className="my-title">Hello, Box!</h1>
      <p className="my-text">This is a styled component. CSS provides a structured way to control the layout, design, and visual presentation of web content, allowing developers to apply colors, fonts, margins, padding, borders, and other styling properties to HTML elements.</p>
    </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
            <div className="left-content">
                <a href="www.google.com" >Home </a>
                <a href="www.facebook.com">About US  </a>
                <a href="www.react.com">Services  </a>
            </div>
        </div>
        <p>2023 Your Website</p>
    </footer>
    </div>
  );
}

export default App;


