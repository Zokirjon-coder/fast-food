import Sidebar from '../components/sidebar/Sidebar';
import { useState, useEffect } from 'react';
import { Container, MAIN } from '../components/style/styled';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { dataSidebar } from '../utils/dataSidebar';
import Loader from '../components/loader'
import PageNotFound from '../pages/PageNotFound'

function App() {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoader(false), 1000)
  }, []);

  return (
    <div className="App">
      { loader ? <Loader /> : null }
      <Router>
        <Container>
          <Sidebar />
          <MAIN>

            <Routes>
              {
                dataSidebar.map(({ pathname, id, component: Page }) => <Route key={id} path={pathname} element={<Page title={pathname} />} />)
              }
              <Route path='*' element={<PageNotFound />} />
            </Routes>
            
          </MAIN>
        </Container>
      </Router>

    </div>
  );
}

export default App;
