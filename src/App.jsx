// Bringing in the required import from 'react-router-dom'
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

function App() {
  const currentPage = useLocation().pathname;

  const renderContent = () => {
    if (currentPage === '/About' || currentPage === '/Resume' || currentPage === '/Portfolio' || currentPage === '/Contact') {
      return null;
    }
    else {
      return (
        <section className='Homepage'>
          <row className="Homepage_Row">
            <div className='Homepage_About' onClick={() => { window.location.href = './About' }}>
              <h2>
                Learn about Me
              </h2>
            </div>

            <div className='Homepage_Portfolio' onClick={() => { window.location.href = './Portfolio' }}>
              <h2>
                See my Portfolio
              </h2>
            </div>
          </row>
          <row className="Homepage_Row">
            <div className='Homepage_Resume' onClick={() => { window.location.href = './Resume' }}>
              <h2>
                See my Resume
              </h2>
            </div>
            <div className='Homepage_Contact' onClick={() => { window.location.href = './Contact' }}>
              <h2>
                Contact Me
              </h2>
            </div>
          </row>
        </section>

      )
    }
  }
  return (
    <>
      <Header />
      <Nav />
      <main>
        {renderContent()}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
