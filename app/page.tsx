import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Datasets from '../components/Datasets';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Datasets/>
    </main>
    <Footer/>
    </div>
  );
}
