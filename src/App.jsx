import { Activity, ArrowRight, BookOpen, Brain, CheckSquare, Cpu, Database, Download, Droplets, FileText, Github, Leaf, Menu, Package, Plug, Power, RotateCcw, Server, Sprout, Sun, Terminal, Usb, User, Wifi, Wrench, X } from 'lucide-react';
import { useState } from 'react';

/* ========================================
    ESTILOS CSS (Inyectados para la vista previa)
    ========================================
*/
const styles = `
  :root {
    --primary-green: #2ecc71;
    --dark-green: #145a32;
    --accent-green: #d5f5e3;
    --text-main: #1c2833;
    --text-light: #566573;
    --glass-bg: rgba(255, 255, 255, 0.65);
    --glass-border: rgba(255, 255, 255, 0.4);
    --glass-shadow: 0 8px 32px 0 rgba(31, 135, 60, 0.1);
    --nav-bg: rgba(235, 250, 240, 0.85);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: linear-gradient(135deg, #e8f8f5 0%, #d4efdf 50%, #a9dfbf 100%);
    background-attachment: fixed;
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
  }

  .container { width: 90%; max-width: 1200px; margin: 0 auto; padding: 0 15px; }

  .glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--glass-border);
    border-top: 1px solid rgba(255, 255, 255, 0.8);
    border-left: 1px solid rgba(255, 255, 255, 0.8);
    box-shadow: var(--glass-shadow);
    border-radius: 24px;
    padding: 24px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .glass-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px 0 rgba(31, 135, 60, 0.15);
  }

  h1, h2, h3 { color: var(--dark-green); font-weight: 700; letter-spacing: -0.02em; }
  h2 { font-size: 2rem; margin-bottom: 1rem; text-align: center; }
  p { color: var(--text-light); margin-bottom: 1rem; }

  .btn {
    display: inline-flex; align-items: center; justify-content: center;
    padding: 12px 24px; border-radius: 50px; font-weight: 600;
    text-decoration: none; transition: all 0.3s ease; cursor: pointer;
    border: none; gap: 8px;
  }
  .btn-primary { background: var(--primary-green); color: white; box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4); }
  .btn-primary:hover { background: var(--dark-green); transform: scale(1.02); }
  .btn-secondary { background: rgba(255, 255, 255, 0.5); color: var(--dark-green); border: 1px solid var(--primary-green); }
  .btn-secondary:hover { background: rgba(255, 255, 255, 0.8); }

  /* NAVBAR */
  .navbar {
    position: fixed; top: 0; left: 0; width: 100%; height: 70px;
    background: var(--nav-bg); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3); z-index: 1000;
    display: flex; align-items: center; transition: all 0.3s ease;
  }
  .nav-container { display: flex; justify-content: space-between; align-items: center; width: 90%; max-width: 1200px; margin: 0 auto; }
  .logo { font-size: 1.5rem; font-weight: 800; color: var(--dark-green); display: flex; align-items: center; gap: 8px; text-decoration: none; }
  .nav-links { display: none; }
  .mobile-menu-btn { background: none; border: none; cursor: pointer; color: var(--dark-green); }

  /* Mobile Drawer */
  .mobile-drawer {
    position: fixed; top: 70px; left: 0; width: 100%;
    background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px);
    padding: 20px; display: flex; flex-direction: column; gap: 20px;
    transform: translateY(-150%); transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999; border-bottom: 1px solid rgba(0,0,0,0.05);
  }
  .mobile-drawer.open { transform: translateY(0); }
  .nav-link { text-decoration: none; color: var(--text-main); font-weight: 500; font-size: 1.1rem; text-align: center; transition: color 0.3s; }
  .nav-link:hover { color: var(--primary-green); }

  /* HERO */
  .hero { padding-top: 120px; padding-bottom: 60px; min-height: 90vh; display: flex; flex-direction: column; justify-content: center; text-align: center; }
  .hero-content { margin-bottom: 40px; }
  .hero h1 { font-size: 3rem; line-height: 1.1; margin-bottom: 16px; background: -webkit-linear-gradient(45deg, var(--dark-green), var(--primary-green)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  .hero-mockup-container { position: relative; width: 100%; max-width: 350px; margin: 0 auto; aspect-ratio: 9/16; }
  .phone-frame { width: 100%; height: 100%; background: rgba(255,255,255,0.2); border: 2px solid rgba(255,255,255,0.6); border-radius: 40px; backdrop-filter: blur(10px); box-shadow: 0 20px 50px rgba(0,0,0,0.1); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; }
  .mockup-screen { width: 90%; height: 95%; background: linear-gradient(180deg, #d4efdf 0%, #ffffff 100%); border-radius: 32px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; }

  /* ARCHITECTURE & INNOVATIONS */
  .architecture { padding: 80px 0; }
  .arch-grid { display: grid; grid-template-columns: 1fr; gap: 20px; margin-top: 40px; }
  .arch-item { text-align: center; }
  .arch-icon-wrapper { width: 60px; height: 60px; background: rgba(46, 204, 113, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; color: var(--dark-green); }

  /* GUIDES SECTION */
  .guides-section { padding: 60px 0; }
  .guides-grid { display: flex; flex-direction: column; gap: 25px; }
  .guide-step { 
    display: flex; 
    flex-direction: column;
    gap: 20px; 
    background: rgba(255, 255, 255, 0.4); 
    padding: 24px; 
    border-radius: 16px; 
    border: 1px solid rgba(255, 255, 255, 0.5);
    transition: transform 0.3s ease;
  }
  .guide-step:hover {
    background: rgba(255, 255, 255, 0.6);
    transform: translateY(-3px);
  }
  .guide-step-content {
    display: flex;
    gap: 15px;
    align-items: flex-start;
  }
  .guide-icon { 
    background: var(--primary-green); 
    color: white; 
    padding: 12px; 
    border-radius: 12px; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    flex-shrink: 0; 
    box-shadow: 0 4px 10px rgba(46, 204, 113, 0.3);
  }
  .guide-image-wrapper {
    width: 100%;
    aspect-ratio: 16/9;
    background: rgba(0, 0, 0, 0.03);
    border: 2px dashed rgba(46, 204, 113, 0.4);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }
  .guide-image-wrapper::after {
    content: attr(data-filename);
    position: absolute;
    color: var(--dark-green);
    font-weight: bold;
    font-family: monospace;
    font-size: 1.2rem;
    opacity: 0.5;
    z-index: 1;
  }
  .guide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: 2;
  }

  /* RESULTS */
  .results { padding: 80px 0; }
  .stats-container { display: flex; flex-direction: column; gap: 15px; }
  .stat-card { display: flex; align-items: center; gap: 15px; }
  .stat-number { font-size: 2rem; font-weight: 800; color: var(--primary-green); }

  /* FOOTER */
  .footer { background: var(--glass-bg); backdrop-filter: blur(20px); border-top: 1px solid var(--glass-border); padding: 40px 0; text-align: center; position: relative; z-index: 10; }
  .footer-links { margin-top: 20px; display: flex; justify-content: center; gap: 20px; }
  .footer-link { color: var(--dark-green); transition: color 0.3s; text-decoration: none; }
  .footer-link:hover { color: var(--primary-green); }

  /* MEDIA QUERIES */
  @media (min-width: 768px) {
    h1 { font-size: 4rem; }
    .nav-links { display: flex; gap: 30px; }
    .mobile-menu-btn { display: none; }
    .mobile-drawer { display: none; }
    .hero { flex-direction: row; align-items: center; text-align: left; justify-content: space-between; }
    .hero-content { width: 50%; }
    .hero-mockup-container { width: 40%; margin: 0; }
    .arch-grid { grid-template-columns: repeat(3, 1fr); }
    .stats-container { flex-direction: row; justify-content: space-around; }
    .stat-card { flex-direction: column; text-align: center; padding: 30px; }
    .guide-step { flex-direction: row; align-items: stretch; }
    .guide-step-content { flex: 1; }
    .guide-image-wrapper { flex: 1; max-width: 50%; aspect-ratio: auto; min-height: 250px; }
  }
`;

/* ========================================
    CONFIGURACIÓN Y DATOS DEL PROYECTO
    ========================================
*/
const PROJECT_INFO = {
  repoUrl: "https://github.com/Vanadium-Milk/cultiva-client",
  fipi: "DUR-SI-1833",
  university: "Universidad Politécnica de Durango",
  authors: ["Leah Valentina Castro Moreno", "José Ignacio Contreras Méndez", "Octavio García Celaya"],
  advisor: "MC Christian Ríos Chavarría"
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="logo">
            <Sprout size={28} color="#2ecc71" />
            CULTIVA
          </a>
          
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
            <Github size={18} /> GitHub Repo
        </a>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="container hero">
      <div className="hero-content">
        <div style={{ display:'inline-block', padding: '5px 15px', background: 'rgba(46, 204, 113, 0.15)', borderRadius: '20px', color: '#145a32', fontWeight: '600', fontSize: '0.8rem', marginBottom: '15px', border: '1px solid rgba(46, 204, 113, 0.3)' }}>
          Proyecto FIPI: {PROJECT_INFO.fipi}
        </div>
        
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
            <Github size={18} /> Código Fuente
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
                <Leaf size={40} color="#555" />
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
            <p style={{fontSize: '0.85rem', color: '#145a32', fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase'}}>Raspberry Pi 4</p>
            <p style={{fontSize: '0.85rem', lineHeight: '1.5'}}>El cerebro operativo. Aloja la API REST, servidor de streaming y gestiona el orquestador en Python.</p>
          </div>
          <div className="arch-item">
            <div className="arch-icon-wrapper"><Brain size={32} /></div>
            <h3>3. Capa Cognitiva</h3>
            <p style={{fontSize: '0.85rem', color: '#145a32', fontWeight: 'bold', marginBottom: '8px', textTransform: 'uppercase'}}>IA Multimodal (LLM)</p>
            <p style={{fontSize: '0.85rem', lineHeight: '1.5'}}>Integra <strong>DeepSeek-Reasoner</strong>. Analiza imágenes del cultivo y datos históricos para tomar decisiones agronómicas complejas.</p>
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
            <h3 style={{fontSize: '1.2rem', margin: 0}}>Bypassing CG-NAT</h3>
          </div>
          <p style={{fontSize: '0.9rem', flex: 1}}>Usa <strong>Tunneling (Ngrok)</strong> para exponer servicios locales sin requerir IP pública fija en redes domésticas mexicanas.</p>
        </div>
        <div className="glass-card" style={{textAlign: 'left', display: 'flex', flexDirection: 'column', height: '100%'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px'}}>
            <div style={{background: '#d5f5e3', padding: '10px', borderRadius: '12px'}}><Database size={24} color="#2ecc71"/></div>
            <h3 style={{fontSize: '1.2rem', margin: 0}}>Bajo Costo y Reciclaje</h3>
          </div>
          <p style={{fontSize: '0.9rem', flex: 1}}>Costo total inferior a <strong>$2,500 MXN</strong>. Estructura con PVC hidráulico y materiales reutilizados.</p>
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

/* ========================================
    NUEVA SECCIÓN: GUÍAS DE INSTALACIÓN
    ========================================
*/
const GUIDE_STEPS = [
  { id: 1, title: "Prepara el hardware", desc: "Consigue cualquier computadora con arquitectura soportada (x86_64 o aarch64 por lo pronto).", icon: <Server size={24}/> },
  { id: 2, title: "Instala el Sistema Operativo", desc: "Instala Debian 13 (incluido con la Raspberry Pi). No se necesita entorno gráfico.", icon: <Terminal size={24}/> },
  { id: 3, title: "Descarga los archivos", desc: "Descarga los archivos de instalación en esa compu (les pones un link o no sé).", icon: <Download size={24}/> },
  { id: 4, title: "Instala el paquete", desc: "Ejecuta: sudo dpkg -i _nombre del archivo_", icon: <Package size={24}/> },
  { id: 5, title: "Utilidades CLI", desc: "Una vez instalado podrás usar las utilidades incluidas: 'sudo cultiva-cli configure' para iniciar la configuración y 'sudo cultiva-cli compile' para compilar código directo a tu Arduino.", icon: <Wrench size={24}/> },
  { id: 6, title: "Conecta la placa", desc: "Conecta una placa Arduino por medio de USB (recomendación: Arduino UNO).", icon: <Usb size={24}/> },
  { id: 7, title: "Inicia Sesión", desc: "Una vez que ejecutes la utilidad de configuración, sigue los pasos e inicia sesión con tu cuenta (si no tienes, puedes registrarte ahí mismo).", icon: <User size={24}/> },
  { id: 8, title: "Conecta los sensores", desc: "Conecta los sensores y actuadores que tengas disponibles utilizando los puertos recomendados (ahorita te digo cuáles).", icon: <Plug size={24}/> },
  { id: 9, title: "Selecciona componentes", desc: "En la configuración guiada, selecciona los sensores y actuadores que hayas conectado.", icon: <CheckSquare size={24}/> },
  { id: 10, title: "Compilación automática", desc: "Deja que el proceso continúe y compile el código automáticamente en el Arduino.", icon: <Cpu size={24}/> },
  { id: 11, title: "Resolución de problemas", desc: "Si tienes algún problema en el proceso de compilación, puedes repetirlo ejecutando 'sudo cultiva-cli compile'.", icon: <RotateCcw size={24}/> },
  { id: 12, title: "Reinicia", desc: "Una vez terminado el proceso, reinicia la computadora.", icon: <Power size={24}/> },
  { id: 13, title: "Comprueba los logs", desc: "Puedes comprobar los logs usando: 'sudo journalctl -xeu cultiva.service'.", icon: <FileText size={24}/> }
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
              
              <div className="guide-image-wrapper" data-filename={`${step.id}.jpg`}>
                <img 
                  src={`${step.id}.jpg`} 
                  alt={`Captura del paso ${step.id}`} 
                  className="guide-image"
                  onError={(e) => {
                    // si imagen rota, oculta y pone placeholder
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div style={{textAlign: 'center', marginTop: '40px'}}>
          <a href={PROJECT_INFO.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <BookOpen size={18} /> Leer Documentación Completa
          </a>
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
              <div className="stat-number">1,344</div>
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
          <Sprout size={24} /> CULTIVA
        </h3>
        <div style={{borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '20px 0', margin: '20px 0'}}>
            <p style={{fontWeight: 'bold', color: '#145a32', marginBottom: '10px'}}>{PROJECT_INFO.university}</p>
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
          <a href={PROJECT_INFO.repoUrl} target="_blank" rel="noopener noreferrer" className="footer-link"><Github size={18} /></a>
          <a href={PROJECT_INFO.repoUrl} target="_blank" rel="noopener noreferrer" className="footer-link">Documentación Técnica</a>
          <a href={PROJECT_INFO.repoUrl} target="_blank" rel="noopener noreferrer" className="footer-link">Licencia GPL v3</a>
        </div>
        <p style={{fontSize: '0.75rem', marginTop: '30px', opacity: 0.6}}>© 2026 Proyecto CULTIVA. Open Source.</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <style>{styles}</style>
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