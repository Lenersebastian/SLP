import './App.css';
import placeholder_png from './placeholder.png'; 


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Ambulances />
      <Contact />
      <Footer />
    </div>
  );
}

const scrollTo = id => e => {
  e.preventDefault();
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

function Header() {
  return (
    <header className="header">
      <nav>
        <button type="button" onClick={scrollTo('sluzby')}>Služby</button>
        <button type="button" onClick={scrollTo('ambulancie')}>Ambulancie</button>
        <button type="button" onClick={scrollTo('kontakt')}>Kontakt</button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <h2>Váš psychický komfort, naša starostlivosť</h2>
      <p>
        SL Psychiatria s.r.o. poskytuje odbornú psychiatrickú starostlivosť a liečbu.
      </p>
      <button
        type="button"
        className="btn"
        onClick={scrollTo('kontakt')}
      >
        Objednajte sa
      </button>
    </section>
  );
}

const AboutUs = () => (
  <section id="about" className="about">
    <h2>MUDr. Slávka Lenerová</h2>
    <img src={placeholder_png} alt="MUDr. Slávka Lenerová" className="placeholder-image" />
    <p>
      MUDr. Slávka Lenerová je skúsená psychiatrička s viac než 15-ročnou praxou v starostlivosti o duševné zdravie.
      Špecializuje sa na diagnostiku a liečbu úzkostných porúch, depresie a psychosomatických ťažkostí.
    </p>
    <p>
      Počas svojej kariéry viedla desiatky skupinových terapií, poskytla stovky individuálnych konzultácií
      a pravidelne sa vzdeláva na domácich aj medzinárodných konferenciách.
    </p>
    <p>
      V ambulancii kladie dôraz na empatický prístup, holistické riešenia a dlhodobú podporu svojich pacientov.
      Každý liečebný plán prispôsobuje individuálnym potrebám a životnému štýlu klienta.
    </p>
  </section>
);

function Services() {
  return (
    <section id="sluzby" className="services">
      <h2>Naše služby</h2>
      <ul>
        <li> 
          <p>Psychiatrické vyšetrenie a diagnostika</p>
          <img src={placeholder_png} alt="MUDr. Slávka Lenerová" className="placeholder-image" />
        </li>
        <li>
          <p>Individuálna a skupinová terapia</p>
          <img src={placeholder_png} alt="MUDr. Slávka Lenerová" className="placeholder-image" />
        </li>
        <li>
          <p>Dlhodobá ambulantná starostlivosť</p>
          <img src={placeholder_png} alt="MUDr. Slávka Lenerová" className="placeholder-image" />
        </li>
      </ul>
    </section>
  );
}

function Ambulances() {
  return (
    <section id="ambulancie" className="ambulances">
      <h2>Naše ambulancie</h2>
      <ul>
        <li>
          <h3>MUDr. Slávka Lenerová – Stupava</h3>
          <p>
            Špecialista na úzkostné poruchy a depresie.
          </p>
          <p><em>Otvorené: Po–Pi 8:00–16:00</em></p>
      <p>Zdravotnícka 952/1, 900 32 Stupava</p>
        </li>
        <li>
          <h3>MUDr. Slávka Lenerová – Malacky</h3>
          <p>
            Odborník na psychiatrickú liečbu adolescentov.
          </p>
          <p><em>Otvorené: Po–Pi 9:00–17:00</em></p>
          <p>Ľudovíta Fullu 5274, 901 01 Malacky</p>
        </li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="contact">
      <h2>Kontaktujte nás</h2>
      <p>Telefón: +421 907 808 677</p>
      <p>Email: s.lenerova@centrum.sk</p>
      <form>
        <input type="text" placeholder="Meno a priezvisko" />
        <input type="email" placeholder="Emailová adresa" />
        <textarea placeholder="Vaša požiadavka"></textarea>
        <button type="submit">Odoslať správu</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 SL Psychiatria s.r.o. Všetky práva vyhradené.</p>
    </footer>
  );
}

export default App;
