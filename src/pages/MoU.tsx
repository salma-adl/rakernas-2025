import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileSignature, Handshake } from "lucide-react";

const MoU = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
              Memorandum of Understanding
            </h1>

            <Card className="shadow-elegant animate-fade-in mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Handshake className="w-6 h-6 text-accent" />
                  Cooming Soon
                </CardTitle>
              </CardHeader>
            </Card>



            {/* 
            <Card className="shadow-elegant animate-fade-in mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Handshake className="w-6 h-6 text-accent" />
                  MoU Program
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  RAKERNAS 2025 facilitates partnership and collaboration opportunities between academic
                  institutions, research centers, and industry partners through Memorandum of Understanding
                  agreements.
                </p>
                <div className="bg-secondary/30 p-6 rounded-lg space-y-4">
                  <h4 className="font-semibold text-lg">Benefits of MoU Partnership:</h4>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Establish formal collaboration frameworks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Facilitate research partnerships and joint projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Enable student and faculty exchange programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Share resources and best practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span>Promote curriculum development initiatives</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileSignature className="w-6 h-6 text-accent" />
                  MoU Template & Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Download the official MoU template for RAKERNAS 2025. The template includes all
                  necessary sections and legal requirements for partnership agreements.
                </p>

                <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg space-y-3">
                  <h4 className="font-semibold">Template Contents:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                    <li>• Standard agreement framework</li>
                    <li>• Scope of collaboration</li>
                    <li>• Rights and obligations of parties</li>
                    <li>• Duration and renewal terms</li>
                    <li>• Confidentiality clauses</li>
                    <li>• Dispute resolution mechanisms</li>
                  </ul>
                </div>

                <Button variant="gold" className="w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Download MoU Template
                </Button>

                <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <h4 className="font-semibold mb-2">MoU Signing Ceremony</h4>
                  <p className="text-sm text-muted-foreground">
                    A special MoU signing ceremony will be held during the conference. Interested
                    institutions should contact the organizing committee at least 2 weeks before the event
                    to arrange participation in the ceremony.
                  </p>
                </div>

                <div className="mt-4 p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-semibold mb-2">Contact for MoU Inquiries:</h4>
                  <p className="text-sm text-muted-foreground">
                    For questions about MoU partnerships or to schedule a consultation, please contact:
                  </p>
                  <p className="text-sm font-medium mt-2">Email: mou@rakernas2025.id</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant animate-fade-in mt-6" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Fee Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  MoU partnership opportunities are available as part of the conference program.
                  Fee details and partnership packages are outlined in the official RAKERNAS 2025 proposal.
                </p>
                <div className="bg-secondary/30 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    Please refer to page 5 of the RAKERNAS 2025 proposal for complete fee structure
                    and partnership package options.
                  </p>
                </div>

         
              </CardContent>
            </Card>
            */}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MoU;
