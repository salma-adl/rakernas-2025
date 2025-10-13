import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Users, Calendar, Award, Underline } from "lucide-react";

const Competition = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
              Kompetisi Ilmiah Mahasiswa
            </h1>

            <Card className="shadow-elegant animate-fade-in mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-accent" />
                  Lomba Inovasi Produk Mahasiswa RAKERNAS APDFI 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Tema lomba inovasi produk adalah:
                  “Eksplorasi Bahan Alam Indonesia untuk Pengembangan Kosmetika, Skincare,
                  atau Kosmetika Hybrid Inovatif”
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-secondary/30 p-4 rounded-lg text-center">
                    <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="font-semibold">Kelompok</p>
                    <p className="text-sm text-muted-foreground">Maks. 3 Orang per-tim</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg text-center">
                    <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="font-semibold">Batas akhir Pendaftaran</p>
                    <p className="text-sm text-muted-foreground">26 Oktober 2025</p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg text-center">
                    <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="font-semibold">Juara</p>
                    <p className="text-sm text-muted-foreground">Hadiah dan Sertifikat</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-fade-in mb-6" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>Tanggal Penting</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold mb-1">26 Oktober 2025</h4>
                    <p className="text-sm text-muted-foreground">
                      Batas Akhir Pendaftaran Lomba Inovasi Produk
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold mb-1">2 November 2025</h4>
                    <p className="text-sm text-muted-foreground">
                      Batas akhir upload video inovasi produk
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold mb-1">11-13 November 2025</h4>
                    <p className="text-sm text-muted-foreground">
                      Pengumuman Lomba pada RAKERNAS APDFI 2025
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-fade-in mb-6" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Ketentuan Umum</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-secondary/30 p-6 rounded-lg space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Peserta merupakan mahasiswa dalam kelompok beranggotakan maksimal 3 orang</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Produk inovasi ditampilkan dalam video berdurasi maksimal 10 menit yang menampilkan komponen berikut.
                          <ul>a. Nama produk dan kandungan zat aktif </ul>
                          <ul>b. Latar belakang pengembangan produk</ul>
                          <ul>c. Proses pengembangan Produk</ul>
                          <ul>d. Keunggulan produk dibandingkan produk kompetitor di pasaran</ul>
                          <ul>e. Potensi pengembangan bisnis</ul>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Pengumuman pemenang diinformasikan pada kegiatan RAKERNAS APDFI 2025 di Kota Bandung pada 11-13 November 2025.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-fade-in mb-6" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Mekanisme Perlombaan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-secondary/30 p-6 rounded-lg space-y-4">
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Ketua tim peserta melakukan pendaftaran pada tautan berikut: <a href="https://forms.gle/cqdTiK55yNRiQT6R7">https://forms.gle/cqdTiK55yNRiQT6R7</a>
                          <ul>(pada saat pendaftaran, peserta hanya diminta untuk men-submit judul produk inovasi yang akan diikutsertakan untuk kompetisi). </ul>
                      </span>
                          
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Pendaftaran dilakukan paling lambat tanggal <b>26 Oktober 2026</b>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>
                        Setelah pendaftaran, peserta dapat bergabung pada group whatsapp peserta lomba. 
                        Informasi lebih lanjut terkait teknis perlombaan akan diinformasikan pada group whatsapp.
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>
                        Peserta mengupload link video inovasi produk pada form yang disediakan oleh
                        panitia. Upload video produk dapat dilakukan paling lambat pada tanggal <b>2 November 2025</b>.
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Video penelitian produk inovasi dinilai oleh dewan juri.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Pemenang lomba akan diumumkan pada saat RAKERNAS APDFI 2025.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle>Biaya Lomba</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-muted/40 to-muted/10 p-6 rounded-lg text-center border">
                    <p className="font-semibold mb-1">Biaya Kepesertaan</p>
                    <div className="text-2xl font-bold text-muted-foreground mb-2">Rp. 150.000 / Team</div>
                  </div>
                  <div className="bg-gradient-to-br from-muted/40 to-muted/10 p-6 rounded-lg text-center border">
                    <p className="font-semibold mb-1">Pembayaran dilakukan ke Rekening:</p>
                    <div className="text-2xl font-bold text-muted-foreground mb-2"> BRI 142901000093563 a.n APDFI REGIONAL 1</div>
                  </div>
                </div>
                <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mt-4">
                  <p className="text-sm text-muted-foreground">
                    NARAHUBUNG :
                    <ul>Widyastiwi (WA: 085720380968)</ul>
                    <ul>MH Roseno (WA: 082121756429)</ul>
                    <ul>Email: apdfi.regional1@gmail.com</ul>
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <a href="https://forms.gle/cqdTiK55yNRiQT6R7">
                <Button variant="gold" size="xl">
                  DAFTAR LOMBA INOVASI PRODUK
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Competition;
