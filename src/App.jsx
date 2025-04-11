import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
function App() {


  return (
    <>

      <div className="container">
        <Header />
        <Banner />
        
        <ProductList />
        
        <Footer />
      </div>
    </>
  );
}

export default App;
