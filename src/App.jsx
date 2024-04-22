import './App.css'
import HeaderNavLeft from './HeaderNavLeft';
import HeaderNavRight from './HeaderNavRight';
import MainImage from './MainImage';
import SearchInput from './SearchInput';
import ButtonsDiv from './ButtonsDiv';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header>
        <HeaderNavLeft />

        <HeaderNavRight />
      </header>

      <main>
        <MainImage />

        <SearchInput />

        <ButtonsDiv />
      </main>

      <Footer />

    </div>
  )
}

export default App;
