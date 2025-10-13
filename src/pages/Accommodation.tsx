import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Navigation, Building2 } from "lucide-react";

const Accommodation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
              Akomodasi 
            </h1>

            <Card className="shadow-elegant animate-fade-in mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-accent" />
                  Jadwal Kegiatan RAKERNAS 2025
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  RAKERNAS APDFI 2025 Akan diselenggarakan pada 11 - 13 November 2025, yang berlokasi di :
                </p>
                <div className="bg-secondary/30 p-6 rounded-lg space-y-4">
                  <h4 className="font-semibold text-lg">Tempat Kegiatan</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">HARRIS Hotel & Conventions Festival Citylink Bandung</p>
                        <p className="text-sm text-muted-foreground">
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Jl. Peta No.241, Pasir Koja, Bandung</p>
                        <p className="text-sm text-muted-foreground">
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-fade-in mb-6" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-accent" />
                  Lokasi & Map
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  The conference hotel is strategically located with easy access to major transportation
                  hubs and local attractions.
                </p>

                {/* Google Maps Embed */}
                <div className="w-full h-96 bg-secondary/30 rounded-lg flex items-center justify-center border">
                  <div className="text-center p-6">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-3" />
                    <p className="font-semibold mb-2">Google Maps Location</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6734360028945!2d107.5865762!3d-6.929580800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8a7fddd64a7%3A0x64ba7b7fc2d6f270!2sHarris%20Hotel%20%26%20Conventions%20Festival%20Citylink%20Bandung!5e0!3m2!1sen!2sid!4v1760272430002!5m2!1sen!2sid" width="300" height="150" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </p>
                    <Button variant="gold">
                      <a href="https://maps.app.goo.gl/Ge9H8W9LMCHBue7g9">Open in Google Maps</a>
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">From Airport</h4>
                    <p className="text-sm text-muted-foreground">
                      Approximately 15-20 minutes by taxi or airport shuttle service
                    </p>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">From Train Station</h4>
                    <p className="text-sm text-muted-foreground">
                      Approximately 10-20 minutes by taxi or ride-sharing service
                    </p>
                  </div>
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

export default Accommodation;
