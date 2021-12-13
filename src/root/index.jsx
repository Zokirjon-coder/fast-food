import Sidebar from '../components/sidebar/Sidebar';
import Main from '../components/main/Main';
import { Container } from '../components/style/styled';

function App() {
  return (
    <div className="App">

      <Container>
        <Sidebar />
        <Main />
      </Container>

    </div>
  );
}

export default App;
