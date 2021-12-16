import Sidebar from '../components/sidebar/Sidebar';
import { Container, MAIN } from '../components/style/styled';
import HeaderBar from '../components/header/HeaderBar';
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
            <HeaderBar />
            <Routes>
              {
                dataSidebar.map(({pathname, id, component: Page}) => {
                  return <>
                    <Route key={id} path={pathname} element={<Page title={pathname} />} />
                  </>
                })
              }
            </Routes>
          </MAIN>
        </Container>
      </Router>

    </div>
  );
}

export default App;
