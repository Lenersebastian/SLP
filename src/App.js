import { useEffect, useRef, useState } from 'react';
import './App.css';
import {
  doctor,
  contact,
  locations,
  weekDays,
  patientInfo,
  specializations,
  insurers,
  pricing,
} from './content';

const NAV = [
  { id: 'o-lekarke', label: 'O lekárke' },
  { id: 'pracoviska', label: 'Pracoviská a ordinačné hodiny' },
  { id: 'pacienti', label: 'Pre pacientov' },
  { id: 'cennik', label: 'Cenník' },
  { id: 'kontakt', label: 'Kontakt' },
];

const scrollToSection = id => e => {
  e.preventDefault();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const behavior = reduce ? 'auto' : 'smooth';
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior, block: 'start' });
};

const mapUrl = loc =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${loc.street}, ${loc.zip}`
  )}`;

const ICONS = {
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  arrow: <path d="M7 17 17 7M7 7h10v10" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
};

function Icon({ name, size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a
          href="./"
          className="brand"
          onClick={e => {
            setOpen(false);
            scrollToSection('top')(e);
          }}
        >
          <span className="brand__text">
            <strong>SL Psychiatria s.r.o.</strong>
            <small>{doctor.name}</small>
          </span>
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Hlavné menu">
          {NAV.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={e => {
                setOpen(false);
                scrollToSection(item.id)(e);
              }}
            >
              {item.label}
            </a>
          ))}
          <a href={contact.phoneHref} className="btn btn--primary btn--sm nav__cta">
            <Icon name="phone" size={16} />
            {contact.phone}
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Zavrieť menu' : 'Otvoriť menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero__text">
          <h1>
            SL Psychiatria s.r.o.
            <span>Odborná psychiatrická starostlivosť</span>
          </h1>
          <div className="hero__actions">
            <a href={contact.phoneHref} className="btn btn--primary">
              <Icon name="phone" size={18} />
              Objednať sa telefonicky
            </a>
            <a href="#pracoviska" className="btn btn--ghost" onClick={scrollToSection('pracoviska')}>
              <Icon name="clock" size={18} />
              Ordinačné hodiny
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="o-lekarke" className="section">
      <div className="container">
        <Reveal className="about">
          <h2>{doctor.name}</h2>
          <p className="about__role">{doctor.title}</p>
          {doctor.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section id="pracoviska" className="section section--soft">
      <div className="container">
        <Reveal className="section__head">
          <h2>Pracoviská a ordinačné hodiny</h2>
        </Reveal>

        <div className="locations">
          {locations.map(loc => (
            <Reveal as="article" key={loc.id} className="card location">
              <div className="location__top">
                <span className="location__badge">{loc.city}</span>
              </div>
              <h3>Ambulancia {loc.city}</h3>
              <p className="location__address">
                <Icon name="pin" size={18} />
                <span>
                  {loc.street}
                  <br />
                  {loc.zip}
                </span>
              </p>
              <ul className="location__hours">
                {loc.hours.map(h => (
                  <li key={h.day}>
                    <span>{weekDays.find(d => d.day === h.day).name}</span>
                    <strong>{h.time}</strong>
                  </li>
                ))}
              </ul>
              <a
                className="link-arrow"
                href={mapUrl(loc)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Zobraziť na mape <Icon name="arrow" size={16} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PatientInfo() {
  return (
    <section id="pacienti" className="section">
      <div className="container info">
        <Reveal className="card info__card">
          <h2>Pred prvou návštevou</h2>
          <ul className="checklist">
            {patientInfo.map(item => (
              <li key={item}>
                <span className="checklist__icon">
                  <Icon name="check" size={16} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="insurers">
            <h3>Zmluvní partneri</h3>
            <ul>
              {insurers.map(name => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="card info__card info__card--accent">
          <h2>Diagnostika a liečba</h2>
          <ul className="spec-list">
            {specializations.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="cennik" className="section section--soft">
      <div className="container">
        <Reveal className="section__head">
          <h2>Cenník</h2>
          <p>Ostatné výkony sú hradené z verejného zdravotného poistenia.</p>
        </Reveal>

        <Reveal className="card pricing">
          <ul className="pricing__list">
            {pricing.items.map(item => (
              <li key={item.name}>
                <span>{item.name}</span>
                <strong>{item.price} €</strong>
              </li>
            ))}
          </ul>
          <div className="pricing__foot">
            <span>Platné od {pricing.validFrom}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="section">
      <div className="container">
        <Reveal className="section__head">
          <h2>Kontakt</h2>
        </Reveal>
        <Reveal className="contact">
          <ul className="contact__grid">
            {locations.map(loc => (
              <li key={loc.id}>
                <span className="contact__icon">
                  <Icon name="pin" />
                </span>
                <div>
                  <strong>{loc.city}</strong>
                  <span>{loc.street}</span>
                  <span className="contact__days">
                    {loc.hours
                      .map(h => weekDays.find(d => d.day === h.day).name)
                      .join(' a ')}
                    <br />
                    {loc.hours[0].time}
                  </span>
                </div>
              </li>
            ))}
            <li>
              <span className="contact__icon">
                <Icon name="phone" />
              </span>
              <div>
                <strong>Objednávanie</strong>
                <a href={contact.phoneHref} className="contact__phone">
                  {contact.phone}
                </a>
                <span>Termín vyšetrenia si dohodnete telefonicky.</span>
              </div>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong>{doctor.company}</strong>
          <span>{doctor.name} · psychiatrická ambulancia</span>
        </div>
        <div className="footer__addr">
          {locations.map(loc => (
            <span key={loc.id}>
              {loc.street}, {loc.zip}
            </span>
          ))}
        </div>
        <small>© {new Date().getFullYear()} {doctor.company} Všetky práva vyhradené.</small>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a href="#o-lekarke" className="skip-link" onClick={scrollToSection('o-lekarke')}>
        Preskočiť na obsah
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Locations />
        <PatientInfo />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
