import SidebarMenu from './components/molecules/SidebarMenu/SidebarMenu';
import ListingPage from './components/pages/ListingPage/ListingPage';
import './App.scss';

function App() {
  return (
    <div className="app">
        <SidebarMenu />
        <ListingPage/>
    </div>
  );
}

export default App;
