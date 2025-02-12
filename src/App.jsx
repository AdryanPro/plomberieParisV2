import './App.css'
import plombier from "./assets/PlombierAPropos.png"
import { Wrench, Droplet,  Flame, Toilet, ShowerHead as Shower, AlertCircle, PhoneCall, Clock } from 'lucide-react';

function App() {
  const services = [
    {
      title: "Réparation de fuite de plomberie",
      Icon: Droplet
    },
    {
      title: "Débouchage des canalisations",
      Icon: Wrench
    },
    {
      title: "Installation, dépannage de votre chauffe-eau ou ballon d'eau chaude",
      Icon: Flame
    },
    {
      title: "Pose et réparation de tous type d'éviers et de lavabos",
      Icon: Wrench
    },
    {
      title: "Pose de WC",
      Icon: Toilet
    },
    {
      title: "Pose et remplacement du siphon",
      Icon: Wrench
    },
    {
      title: "Mise en place de votre robinetterie",
      Icon: Shower
    },
    {
      title: "Vidanges fosses septiques",
      Icon: Droplet
    }
  ];
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / 10).toFixed(2);
    const rotateY = (-(x - centerX) / 10).toFixed(2);
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    card.style.transition = 'none';
  };
  
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    e.currentTarget.style.transition = 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)';
  };
  return (
    <div className='mainWrapper'>
      <nav>
        <h1>Paris - Plomberie</h1>
      </nav>
      <header>
        <div className='leftSideHeader'>
          <h2 className='h2Titlte'>Plomberie 24/24 - 7/7</h2>
          <p className='text'>Bienvenue chez Paris - Plomberie, votre plombier de confiance à Paris. Nous sommes fiers de fournir des services de qualité en matière de dépannage, d’urgence et de réparation de plomberie. </p>
          <button className='btnContactezNous btnHeader'>
            <a href="tel:+33769084998" class="a">Appelez-nous</a>
          </button>
          <div className="stats">
            <h3 className='nombresGras'>1200+ <br /> <span className='smallUnderText'>Clients satisfaits</span></h3>
            <h3 className='nombresGras'>600 + <br /> <span className='smallUnderText'>Travaux terminés</span></h3>
          </div>
        </div>
        <div className='rigthSideHeader'>
          <h3 className='h3Titlte'><span className='orange-dot'></span>Comment ça fonctionne</h3>
          <p className='smallUnderTextForH3'>nous vous accompagnons au mieux</p>
          <ul>
            <li>contactez nous</li>
            <li>identification</li>
            <li>prise de rendez-vous</li>
            <li>réparation</li>
          </ul>
        </div>
        <div className='headerBottomLine'></div>
      </header>

      <section className="aPropos">
        <img src={plombier} alt="plombier qui travaille" />
        <div className="aProposContent">
          <p className='smallUnderText underTxtAPropos'>à propos</p>
          <h2 className='h2Titlte h2aPropos'>Votre partenaire <br /> Plomberie</h2>
          <div className="about-item">
            <div>
              <h3 className='h3aPropos'>10 ans d’expérience</h3>
              <p className='aProposTxt'>Depuis une décennie, nous mettons notre expertise au service de vos installations sanitaires.</p>
            </div>
          </div>
          <div className="about-item">
            <div>
              <h3 className='h3aPropos'>Service rapide</h3>
              <p className='aProposTxt'>Besoin d’une intervention immédiate ? Nous vous garantissons un service rapide, réactif et fiable pour tous vos besoins.</p>
            </div>
          </div>
          <div className="about-item">
            <div>
              <h3 className='h3aPropos'>Prix abordable</h3>
              <p className='aProposTxt'>Profitez d’un service fiable et professionnel à un tarif juste et transparent.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
      <section className="section">
        <div className="section-content">
          <h2 className="titleService">
            Nos Services
          </h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index}
                className="card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="icon-container">
                  <div className="icon">
                    <service.Icon size={40} />
                  </div>
                </div>
                <h3 className="card-title">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default App