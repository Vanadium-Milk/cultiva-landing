import { Download } from "lucide-react"
import Navbar from "../components/navbar"

export default function Downloads() {
    return (
        <>
            <Navbar links={[
                {link: "/", name: "Inicio"}
            ]}/>
            <section style={{margin: "100px"}}>
                <h1 style={{marginBottom: "30px"}}>Descargas</h1>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '20px'}}>
                    <div className="glass-card">
                        <h2>Applicación para computadora de huerto</h2>
                        <p>Descarga el paquete e instala con sudo dpkg -i cultiva_v1.0.0-beta_amd64.deb <br/>
                            Si tienes dependencias faltantes ejecuta: <br/>
                            sudo apt-get -f install</p>
                        <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap', marginTop: '20px'}}>
                            <a href="https://github.com/Vanadium-Milk/cultiva-client/releases/download/Debian/cultiva_v1.0.0-beta_amd64.deb" className="btn btn-primary">
                                Descargar en amd64 <Download size={18} />
                            </a>
                            <a href="https://github.com/Vanadium-Milk/cultiva-client/releases/download/Debian/cultiva_v1.0.0-beta_arm64.deb" className="btn btn-secondary">
                                Descargar en arm64 <Download size={18} />
                            </a>
                        </div>
                    </div>
                    <div className="glass-card" style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <h2>Applicación móvil Android</h2>
                        <p>Descarga el APK y ejecutalo, tu teléfono se encargará del resto <br/>
                            Aún estamos trabajando para publicar en la Play store y App store
                        </p>
                        <a href="https://github.com/Vanadium-Milk/Cultiva-mobile/releases/download/Beta/cultiva-app_v1.0.0-beta.apk" className="btn btn-primary">
                            Descargar APK <Download size={18} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}