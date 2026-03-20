import { Activity, ArrowRight, Brain, CheckSquare, Cpu, Database, Download, Droplets, FileText, Menu, Package, Plug, Power, RotateCcw, Server, Terminal, Usb, User, Wifi, Wrench, X, Sun } from 'lucide-react';
import {useState } from 'react';
import './styles.css';
import { Logo } from './components/logo';

/*
CONFIG Y DATOS DEL PROYECTO
*/
const PROJECT_INFO = {
  repoUrl: "https://github.com/Vanadium-Milk/cultiva-client",
  authors: ["Leah Valentina Castro Moreno", "José Ignacio Contreras Méndez", "Octavio García Celaya"],
  advisor: "MC Christian Ríos Chavarría",
  videoApp: "/app-demo.mp4" 
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Logo/>
          
          <div className="nav-links">
            <a href="#hero" className="nav-link">Inicio</a>
            <a href="#architecture" className="nav-link">Sistema</a>
            <a href="#features" className="nav-link">Innovación</a>
            <a href="#guias" className="nav-link">Guías</a>
            <a href="#results" className="nav-link">Resultados</a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <a href="#hero" className="nav-link" onClick={() => setIsOpen(false)}>Inicio</a>
        <a href="#architecture" className="nav-link" onClick={() => setIsOpen(false)}>Sistema</a>
        <a href="#features" className="nav-link" onClick={() => setIsOpen(false)}>Innovación</a>
        <a href="#guias" className="nav-link" onClick={() => setIsOpen(false)}>Guías</a>
        <a href="#results" className="nav-link" onClick={() => setIsOpen(false)}>Resultados</a>
        <a href={PROJECT_INFO.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{justifyContent: 'center'}}>
            <img src="/icons/github.svg" height={18}/> GitHub Repo
        </a>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="container hero">
      <div className="hero-content">
        
        <h1>Sistema Embebido Autónomo con IA Multimodal</h1>
        
        <p style={{fontSize: '1.1rem'}}>
          Agricultura urbana inteligente de bajo costo ({'< $2,500 MXN'}). 
          Integra <strong>Arduino</strong>, <strong>Raspberry Pi</strong> y modelos de lenguaje <strong>(LLM)</strong> para gestionar cultivos sin intervención humana.
        </p>
        
        <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '20px'}}>
          <a href="#architecture" className="btn btn-primary">
            Ver Arquitectura <ArrowRight size={18} />
          </a>
          <a href={PROJECT_INFO.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <img src="/icons/github.svg" height={18}/> Código Fuente
          </a>
        </div>
      </div>

      <div className="hero-mockup-container">
        <div className="phone-frame">
          <div className="mockup-screen">
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                <h3 style={{color: '#145a32', margin: 0, fontSize: '1rem'}}>CULTIVA App</h3>
                <div style={{fontSize: '0.65rem', background: '#d5f5e3', padding: '2px 8px', borderRadius: '10px', color: '#145a32', fontWeight: 'bold'}}>ONLINE</div>
            </div>
            
            <div style={{width: '100%', aspectRatio: '4/3', background: '#2c3e50', borderRadius: '12px', marginBottom: '15px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src='cam.jpg'/>
                <div style={{position: 'absolute', top: '10px', right: '10px', width: '8px', height: '8px', background: 'red', borderRadius: '50%', boxShadow: '0 0 5px red'}}></div>
                <div style={{position: 'absolute', bottom: '10px', left: '10px', color: 'white', fontSize: '0.6rem', background: 'rgba(0,0,0,0.6)', padding: '4px 8px', borderRadius: '4px', backdropFilter: 'blur(4px)'}}>
                    CAM-1 | HORTALIZAS
                </div>
            </div>

            <div style={{width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px'}}>
              <div className="glass-card" style={{padding: '12px 8px', textAlign: 'center', borderRadius: '12px', background: 'rgba(255,255,255,0.5)', border: 'none'}}>
                <Droplets size={18} color="#3498db" style={{marginBottom: '5px'}}/>
                <div style={{fontSize: '0.9rem', fontWeight: '800', color: '#2c3e50'}}>65%</div>
                <div style={{fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Humedad</div>
              </div>
              <div className="glass-card" style={{padding: '12px 8px', textAlign: 'center', borderRadius: '12px', background: 'rgba(255,255,255,0.5)', border: 'none'}}>
                <Sun size={18} color="#f1c40f" style={{marginBottom: '5px'}}/>
                <div style={{fontSize: '0.9rem', fontWeight: '800', color: '#2c3e50'}}>318 lx</div>
                <div style={{fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Luz</div>
              </div>
              <div className="glass-card" style={{padding: '12px 8px', textAlign: 'center', borderRadius: '12px', background: 'rgba(255,255,255,0.5)', border: 'none'}}>
                <Activity size={18} color="#e74c3c" style={{marginBottom: '5px'}}/>
                <div style={{fontSize: '0.9rem', fontWeight: '800', color: '#2c3e50'}}>25.3°C</div>
                <div style={{fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>Temp</div>
              </div>
              <div className="glass-card" style={{padding: '12px 8px', textAlign: 'center', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.2), rgba(255,255,255,0.6))', border: '1px solid rgba(46, 204, 113, 0.3)'}}>
                <Brain size={18} color="#145a32" style={{marginBottom: '5px'}}/>
                <div style={{fontSize: '0.65rem', fontWeight: '800', color: '#145a32'}}>IA ACTIVA</div>
                <div style={{fontSize: '0.55rem', color: '#145a32'}}>DeepSeek-R</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Architecture = () => {
  return (
    <section id="architecture" className="container architecture">
      <div className="glass-card">
        <h2>Arquitectura de 3 Capas</h2>
        <p style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto'}}>
          Un diseño distribuido que cierra el ciclo sensor-decisión-actuación de forma local, 
          garantizando privacidad y autonomía.
        </p>
        
        <div className="arch-grid">
          <div className="arch-item">
            <div className="arch-icon-wrapper"><Cpu size={32} /></div>
            <h3>1. Capa Física</h3>
            <p style={{fontSize: '0.85rem', color: '#145a32', fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase'}}>Arduino / Sensores</p>
            <p style={{fontSize: '0.85rem', lineHeight: '1.5'}}>Lectura de variables ambientales y ejecución física de comandos. <strong>No piensa, solo actúa</strong> bajo órdenes estrictas.</p>
          </div>
          <div className="arch-item">
            <div className="arch-icon-wrapper"><Server size={32} /></div>
            <h3>2. Capa Lógica</h3>
            <p style={{fontSize: '0.85rem', color: '#145a32', fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase'}}>Raspberry Pi 5</p>
            <p style={{fontSize: '0.85rem', lineHeight: '1.5'}}>El cerebro operativo. API REST, transmisión de imágenes en vivo y gestión IO del microcontrolador.</p>
          </div>
          <div className="arch-item">
            <div className="arch-icon-wrapper"><Brain size={32} /></div>
            <h3>3. Capa Cognitiva</h3>
            <p style={{fontSize: '0.85rem', color: '#145a32', fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase'}}>IA Multimodal (LLM)</p>
            <p style={{fontSize: '0.85rem', lineHeight: '1.5'}}>Integra <strong>DeepSeek</strong>. Analiza imágenes del cultivo y datos históricos para tomar decisiones agronómicas complejas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Innovations = () => {
  return (
    <section id="features" className="container" style={{padding: '60px 0'}}>
      <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Innovación e Ingeniería</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
        <div className="glass-card" style={{textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px'}}>
            <div style={{background: '#d5f5e3', padding: '10px', borderRadius: '12px'}}><Wifi size={24} color="#2ecc71"/></div>
            <h3 style={{fontSize: '1.2rem', margin: 0}}>Socket.IO</h3>
          </div>
          <p style={{fontSize: '0.9rem', flex: 1}}>Supera las restricciones de CG-NAT en redes domésticas utilizando Socket.IO (WebSockets). Mantiene un canal bidireccional abierto para telemetría instantánea y envío de comandos sin necesidad de abrir puertos.</p>
        </div>
        <div className="glass-card" style={{textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px'}}>
            <div style={{background: '#d5f5e3', padding: '10px', borderRadius: '12px'}}><Database size={24} color="#2ecc71"/></div>
            <h3 style={{fontSize: '1.2rem', margin: 0}}>Bajo Costo y Reciclaje</h3>
          </div>
          <p style={{fontSize: '0.9rem', flex: 1}}>Costo total<strong> adaptable </strong>a la necesidad de cada usuario. Estructura con PVC sanitario y materiales reutilizados.</p>
        </div>
        <div className="glass-card" style={{textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px'}}>
            <div style={{background: '#d5f5e3', padding: '10px', borderRadius: '12px'}}><Activity size={24} color="#2ecc71"/></div>
            <h3 style={{fontSize: '1.2rem', margin: 0}}>Seguridad Operativa</h3>
          </div>
          <p style={{fontSize: '0.9rem', flex: 1}}>El usuario puede monitorear pero <strong>no interfiere</strong> en las decisiones críticas de la IA. Barrera de seguridad para evitar errores.</p>
        </div>
      </div>
    </section>
  );
};

const GUIDE_STEPS = [
  { id: 1, title: "Preparar el hardware", desc: `Consigue cualquier computadora con arquitectura x86_64 o arm64.

Requisitos mínimos:
    - RAM 512MB
    - Procesador 1 GHz single-core
    - Almacenamiento 25GB
    - Dos puertos USB (puede usarse adaptador)
    - Conectividad por Wifi o ethernet (preferible ethernet)`, icon: <Server size={24}/> },
  { id: 2, title: "Instalar el Sistema Operativo", desc: "Instalar Debian 13 (incluido con la Raspberry Pi). No se necesita entorno gráfico.", icon: <Terminal size={24}/> },
  { id: 3, title: "Descargar los archivos", desc: `Descargar los archivos de instalación en la computadora.

Para sesiones SSH o terminal emulada copia y ejecuta el siguiente comando:
wget https://github.com/Vanadium-Milk/cultiva-client/releases/download/Debian/cultiva_v1.0.0-beta_amd64.deb
  
(reemplaza 'amd64' por la arquitectura de tu procesador si hace falta)`, icon: <Download size={24}/> },
  { id: 4, title: "Instalar el paquete", desc: `Instala el paquete usando el comando:
sudo dpkg -i cultiva_v1.0.0-beta_amd64.deb

Si tienes dependencias faltantes ejecuta:
sudo apt-get -f install

Una vez instalado se podrán usar las utilidades incluidas:
    - 'sudo cultiva-cli configure' para iniciar la configuración
    - 'sudo cultiva-cli compile' para compilar código directo al Arduino.`, icon: <Package size={24}/> },
  { id: 5, title: "Conectar la placa", desc: "Conectar una placa Arduino por medio de USB (recomendación: Arduino UNO).", icon: <Usb size={24}/> },
  { id: 6, title: "Conectar los sensores", desc: `Conecta los sensores y actuadores que se vayan a instalar haciendo uso los puertos recomendados:
    - DHT11 y DHT22 - Digital 2
    - Sensor de humedad de suelos - Analog 0
    - Sensor de luminosidad - Analog 1
    - Sensor de Co2 - SCL y SCA (Intefaz I2C)
    - Sensores de PH aún no tienen soporte

Contáctanos si necesitas integración con hardware adicional`, icon: <Plug size={24}/> },
  { id: 7, title: "Utilidades CLI", desc: `Inicia la configuración guiada con el comando 'sudo cultiva-cli configure' (necesitas privilegios de administrador)
Sigue el proceso tal como se indica `, icon: <Wrench size={24}/> },
  { id: 8, title: "Iniciar Sesión", desc: "Una vez que se ejecute la utilidad de configuración, seguir los pasos e iniciar sesión con la cuenta.\nEn caso de no contar con una, puedes realizar el registro dentro de la configuración guiada.", icon: <User size={24}/> },
  { id: 9, title: "Seleccionar componentes", desc: "En la configuración guiada, seleccionar los sensores y actuadores que se hayan conectado.", icon: <CheckSquare size={24}/> },
  { id: 10, title: "Compilación automática", desc: `Dejar que el proceso termine y compile el código automáticamente en el Arduino.

Usamos librerías y utilidades de terceros de código abierto, debes permitir la instalación de estas para continuar el proceso`, icon: <Cpu size={24}/> },
  { id: 11, title: "Resolución de problemas", desc: `Estos son algunos de los problemas más comunes:
    - Si existe algún problema en el proceso de compilación, repetirlo ejecutando 'sudo cultiva-cli compile'.
    - Algunas placas Arduino de imitación no se detectan automáticamente, por lo que debes escribir manualmente su FQBN, algunos de los más comunes son: 'arduino:avr:uno', 'arduino:avr:nano', 'arduino:avr:mega', utiliza el más similar
    - Si necesitas editar un parámetro de configuración esta se guarda en /etc/cultiva/settings.toml, edita el texto o repite el proceso para cambiarlo.`, icon: <RotateCcw size={24}/> },
  { id: 12, title: "Reiniciar", desc: "Una vez terminado el proceso habilita el servicio usando 'sudo systemctl enable --now cultiva.service'.", icon: <Power size={24}/> },
  { id: 13, title: "Comprobar los logs", desc: "Puede comprobar los logs usando: 'sudo journalctl -xeu cultiva.service'.", icon: <FileText size={24}/> }
];

const Guides = () => {
  return (
    <section id="guias" className="container guides-section">
      <div className="glass-card">
        <h2>Guías de Instalación y Uso</h2>
        <p style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto'}}>
          Aprende cómo ensamblar el hardware, configurar el entorno lógico y poner en marcha tu propia instancia de CULTIVA paso a paso.
        </p>

        <div className="guides-grid">
          {GUIDE_STEPS.map((step) => (
            <div key={step.id} className="guide-step">
              <div className="guide-step-content">
                <div className="guide-icon">
                  {step.icon}
                </div>
                <div>
                  <h3 style={{fontSize: '1.2rem', marginBottom: '8px'}}>{step.id}. {step.title}</h3>
                  <p style={{fontSize: '0.95rem', margin: 0}}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  return (
    <section id="results" className="container results">
      <div className="glass-card" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(213, 245, 227, 0.6) 100%)', border: '1px solid rgba(46, 204, 113, 0.2)'}}>
        <h2>Resultados Validados</h2>
        <p style={{textAlign: 'center', marginBottom: '40px', opacity: 0.8, fontSize: '0.95rem'}}>Pruebas realizadas durante 8 semanas continuas con tasa de éxito del 100% en ejecución física.</p>
        <div className="stats-container">
          <div className="stat-card" style={{border: 'none', background: 'transparent', boxShadow: 'none'}}>
            <div style={{background: 'white', padding: '15px', borderRadius: '50%', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}><Droplets size={32} color="#27ae60" /></div>
            <div>
              <div className="stat-number">50%</div>
              <p style={{margin: 0, fontSize: '0.9rem', color: '#566573'}}>Ahorro de agua vs. Riego Manual</p>
            </div>
          </div>
          <div className="stat-card" style={{border: 'none', background: 'transparent', boxShadow: 'none'}}>
            <div style={{background: 'white', padding: '15px', borderRadius: '50%', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}><Server size={32} color="#27ae60" /></div>
            <div>
              <div className="stat-number">100%</div>
              <p style={{margin: 0, fontSize: '0.9rem', color: '#566573'}}>Autonomía Operativa</p>
            </div>
          </div>
          <div className="stat-card" style={{border: 'none', background: 'transparent', boxShadow: 'none'}}>
            <div style={{background: 'white', padding: '15px', borderRadius: '50%', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'}}><Brain size={32} color="#27ae60" /></div>
            <div>
              <div className="stat-number">+1,344</div>
              <p style={{margin: 0, fontSize: '0.9rem', color: '#566573'}}>Decisiones IA ejecutadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h3 style={{color: '#145a32', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px'}}>
          <Logo></Logo>
        </h3>
        <div style={{borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '20px 0', margin: '20px 0'}}>
            <div style={{fontSize: '0.85rem', color: '#566573', lineHeight: '1.6'}}>
                <strong>Autores:</strong> <br/>
                {PROJECT_INFO.authors.map((author, index) => (
                    <span key={index}>{author}{index < PROJECT_INFO.authors.length - 1 ? ' • ' : ''}</span>
                ))}
                <br/>
                <strong>Asesor:</strong> {PROJECT_INFO.advisor}
            </div>
        </div>
        <div className="footer-links">
          <a href={PROJECT_INFO.repoUrl} target="_blank" rel="noopener noreferrer" className="footer-link"><img src='icons/github.svg' height={18}/></a>
          <a href="https://www-gnu-org.translate.goog/licenses/gpl-3.0.html?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc" target="_blank" rel="noopener noreferrer" className="footer-link">Licencia GPL v3</a>
        </div>
        <p style={{fontSize: '0.75rem', marginTop: '30px', opacity: 0.6}}>© 2026 Proyecto CULTIVA. Open Source.</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Architecture />
      <Innovations />
      <Guides />
      <Results />
      <Footer />
    </>
  );
};

export default App;