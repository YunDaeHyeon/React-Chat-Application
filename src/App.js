import './App.css';

function App() {
  return (
    <div className="App">
      <header className='main'>
        <div>
            <h4>TEAMIO</h4>
            <button>Sign up now</button>
        </div>
      </header>
      <div>
        <figure>
            <div>이미지 들어갈 자리</div>
        </figure>
        <section>
            <div>
                <h2>Bring you work<br/>& team together</h2>
                <p>Work fast and flexible by communicating effectively.</p>
                <button>Sign up now</button>
            </div>
        </section>
      </div>
      <section>
        <div>
            <p>테스트 문구</p>
            <image src="./a.png" alt="테스트"/><p>테스트 이름</p>
        </div>
      </section>
      <footer>
        <div>
        </div>
        <div>
            <h4>테스트</h4>
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
