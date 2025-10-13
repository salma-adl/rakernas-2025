import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, FileCheck } from "lucide-react";

const Registration = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
              Registrasi
            </h1>

            <Card className="shadow-elegant animate-fade-in mb-6">
              <CardHeader>
                <CardTitle>Biaya Kegiatan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Kegiatan ini dibiayai secara swadana dengan biaya sebagai berikut :
                </p>
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Rapat Kerja Nasional</h4>
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
                      <span>Poster : <b>Rp 150.000</b></span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Biaya penyelenggaraan sudah termasuk :</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>Biaya penginapan untuk 3 hari 2 malam (1 kamar untuk 2 orang) Konsumsi selama kegiatan</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-secondary/30 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Pendaftaran kegiatan</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>dilakukan paling lambat 31 Oktober 2025</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-fade-in mb-6" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-accent" />
                  Pembayaran Biaya Kegiatan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Pembayaran biaya kegiatan dilakukan dengan transfer ke rekening berikut :
                </p>
                <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg mt-4">
                  <p className="text-sm font-medium">
                    BRI 142901000093563 a.n APDFI REGIONAL 1
                  </p>
                </div>
              </CardContent>
            </Card>

            

            <Card className="shadow-elegant animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileCheck className="w-6 h-6 text-accent" />
                  Konfirmasi Pembayaran
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Setelah melakukan pembayaran, silakan kirimkan bukti pembayaran Anda melalui Google Form resmi yang tertaut di bawah ini. 
                  
                </p>
                <Button variant="gold" size="lg" className="w-full sm:w-auto">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScyzAZufOyHvhtImKN3QG22RBEeEPW7efv0bwx90RzU3ZhM9w/viewform">Submit Konfirmasi Pembayaran (Google Form)</a>
                </Button>
                <p className="text-xs text-muted-foreground">

                </p>
              </CardContent>
            </Card>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border">
              <h3 className="text-xl font-semibold mb-3">Need Assistance?</h3>
              <p className="text-muted-foreground mb-4">
                If you have any questions about registration or encounter any issues, please contact our team:
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Email:</span> apdfi.regional1@gmail.com
                </p>
                <p>
                  <span className="font-medium">Contact Persons:</span>
                </p>
                <ul className="ml-4 text-muted-foreground">
                  <li>• Ika Kurnia Sukmawati : 081324659355</li>
                  <li>• Rahmatul Qodriah : 08111131219</li>
                  <li>• Tantriska Wijanti : 081322193959</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Registration;
