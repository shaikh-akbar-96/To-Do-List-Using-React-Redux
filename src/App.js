
import AppContent from './components/AppContent.jsx';
import AppHeader from './components/AppHeader.jsx';
import Pagetitle from './components/PageTitle.jsx';
import './styles/index.css'
function App() {
  return(
  <> 
  <div>
    <Pagetitle>TODO LIST</Pagetitle>
    <div className='app__wrapper'>

    <AppHeader/>
    <AppContent/>

    </div>
  </div>
  </>);
}

export default App;
