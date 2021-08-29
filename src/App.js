// components
import Nav from './sections/nav'
import About from './sections/about'
import AdsSection from './sections/ads'
import Products from './sections/products'
import HowToGetYourPrints from './sections/how-to-get-your-prints'
import Testimonials from './sections/testimonials'
import Trustees from './sections/trustees'
import Footer from './sections/footer'

// styles
import { Wrapper } from './style'

const App = () => {
  return (
    <>
      <Wrapper className="App">
        <Nav />
        <About />
        <AdsSection />
        <Products />
        <HowToGetYourPrints />
        <Testimonials />
        <Trustees />
      </Wrapper>
    <Footer />
    </>
  );
}

export default App;
