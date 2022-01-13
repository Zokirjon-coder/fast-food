import Sidebar from '../components/sidebar/Sidebar';
import { Container, MAIN } from '../components/style/styled';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { dataSidebar } from '../utils/dataSidebar';

function App() {
  return (
    <div className="App">

      <Router>
        <Container>
          <Sidebar />
          <MAIN>

            <Routes>
              {
                dataSidebar.map(({ pathname, id, component: Page }) => <Route key={id} path={pathname} element={<Page title={pathname} />} />)
              }
              <Route path='*' element={<h1>page not found</h1>} />
            </Routes>
            
          </MAIN>
        </Container>
      </Router>

    </div>
  );
}

export default App;
