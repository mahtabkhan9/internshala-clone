
import Header from './components/Header';
import SearchPage from './components/SearchPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      <Header />
      <main>
        <SearchPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
