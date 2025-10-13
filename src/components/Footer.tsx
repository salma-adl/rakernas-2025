import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">RAKERNAS APDFI 2025</h3>
            <p className="text-primary-foreground/80 text-sm">
              Penguatan Pendidikan Vokasi Farmasi Menuju Lulusan Kompeten dan Berdaya Saing Global
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">apdfi.regional1@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>Ika Kurnia Sukmawati : 081324659355</p>
                  <p>Rahmatul Qodriah : 08111131219</p>
                  <p>Tantriska Wijanti : 081322193959</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">Harris Hotel & Convention Bandung</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Link Terkait</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">
                  Deskripsi Kegiatan
                </a>
              </li>
              <li>
                <a href="/materials" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">
                  Materi Kegiatan
                </a>
              </li>
              <li>
                <a href="/registration" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">
                  Registrasi
                </a>
              </li>
              <li>
                <a href="/accommodation" className="text-primary-foreground/80 hover:text-primary-foreground transition-fast">
                  Akomodasi
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 RAKERNAS APDFI  — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
