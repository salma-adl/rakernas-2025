import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Check, Building2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
              Deskripsi Kegiatan
            </h1>

            <Card className="mb-8 shadow-elegant animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">RAKERNAS 2025</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Rapat Kerja Nasional (RAKERNAS) Asosisasi Pendidikan Diploma Farmasi Indonesia 
                  tahun 2025 mengusung tema <b>Penguatan Pendidikan Vokasi Farmasi Menuju Lulusan Kompeten dan Berdaya saing Global</b>
                </p>

                <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg space-y-3">
                  <h4 className="font-semibold">Kegiatan:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                    <li>• Rapat Kerja Nasional APDFI</li>
                    <li>• Seminar Nasional : Permendiktisaintek No.39 2025 (Penjaminan Mutu Pendidikan Tinggi)</li>
                    <li>• Seminar Nasional : Kurikulum Vokasi</li>
                    <li>• Kuliah Pakar International (Expert Lecture) Strategies of Pharmacy Vocational Students in Facing Global Health Challenges</li>
                    <li>• Community service activity: "Healthy Community Movement Through Traditional Medicine Education and Rational Swamedication" </li>
                    <li>• Poster Presentation dan Lomba Poster Ilmiah Dosen </li>
                    <li>• Oral Poster</li>
                    <li>• Publikasi di Jurnal Nasional (selected paper will be published)</li>
                    <li>• Kompetisi Ilmiah Mahasiswa (Lomba Produk Farmasi)</li>
                    <li>• MoU/MoA International</li>
                  </ul>
                </div>
              </CardContent>
              </Card>


              <Card className="shadow-elegant animate-fade-in mb-6">
              <CardHeader>
                <CardTitle>Pembiayaan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Pendaftaran s.d 15 Oktober 2025 : <b>Rp 2.850.000</b></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>pendaftaran setelah 15 Oktober 2025 : <b>Rp 3.000.000</b></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Lomba Mahasiswa : <b>Rp 150.000</b></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Oral Presentasi : <b>Rp 200.000</b></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Poster : <b>Rp 150.000</b></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Memorandum of Understanding(MoU) : <b>Rp 750.000</b></span>
                    </li><li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Memorandum of Agreement(MoA) : <b>Rp 100.000</b></span>
                    </li>
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-semibold mb-2">Transfer</h4>
                  <p className="text-sm text-muted-foreground">
                    BRI 142901000093563 a.n APDFI REGIONAL 1
                  </p>
                </div>
                
              </CardContent>
            </Card>


                <Card className="shadow-elegant animate-fade-in mb-6" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Narahubung RAKERNAS 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For any inquiries or assistance, please contact our coordinators:
                </p>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-5 rounded-lg border">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">Ika Kurnia Sukmawati</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4" />
                          <span>0813-2465-9355</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-5 rounded-lg border">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">Rahmatul Qodriah</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4" />
                          <span>081-1113-1219</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-5 rounded-lg border">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">Tantriska Wijanti</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4" />
                          <span>0813-2219-3959</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-accent" />
                    <span className="font-semibold">Email Inquiries</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    apdfi.regional1@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>

          

                
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
