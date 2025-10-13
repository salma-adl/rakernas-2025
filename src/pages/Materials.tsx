import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Presentation, Video } from "lucide-react";

const Materials = () => {
  const materials = [
    {
      title: "PDF Proposal",
      description: "Download the complete RAKERNAS 2025 proposal document",
      icon: FileText,
      downloadLink: "#",
    },
    {
      title: "National Seminar Materials",
      items: [
        "Quality Assurance in Higher Education",
        "Vocational Curriculum Development",
        "Accreditation Sharing for 8-Criteria Diploma 3 Pharmacy & Anafarma Programs",
      ],
    },
    {
      title: "International Expert Lecture",
      description: "Materials from renowned international speakers",
      icon: Presentation,
    },
    {
      title: "Community Service Activity",
      description: "Guidelines and materials for community engagement programs",
      icon: Video,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
              Program Materials
            </h1>

            <div className="space-y-6">
              {/* PDF Proposal */}
              <Card className="shadow-elegant animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-accent" />
                    PDF Proposal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Download the complete RAKERNAS 2025 proposal document containing all conference
                    details, schedules, and guidelines.
                  </p>
                  <Button variant="gold">
                    <Download className="mr-2 h-4 w-4" />
                    Download Proposal
                  </Button>
                </CardContent>
              </Card>

              {/* National Seminar */}
              <Card className="shadow-elegant animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle>National Seminar Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        Quality Assurance in Higher Education
                      </h4>
                      <p className="text-sm text-muted-foreground ml-4">
                        Best practices and frameworks for ensuring educational quality
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        Vocational Curriculum Development
                      </h4>
                      <p className="text-sm text-muted-foreground ml-4">
                        Innovative approaches to designing industry-relevant curricula
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        Accreditation Sharing
                      </h4>
                      <p className="text-sm text-muted-foreground ml-4">
                        8-Criteria Diploma 3 Pharmacy & Anafarma Programs accreditation insights
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* International Expert Lecture */}
              <Card className="shadow-elegant animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Presentation className="w-6 h-6 text-accent" />
                    International Expert Lecture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Learn from internationally recognized experts in higher education quality assurance
                    and vocational training. Lecture materials will be available after the sessions.
                  </p>
                </CardContent>
              </Card>

              {/* Community Service */}
              <Card className="shadow-elegant animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Video className="w-6 h-6 text-accent" />
                    Community Service Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Participate in meaningful community engagement programs that bridge academia and
                    society. Guidelines and activity materials will be provided to all participants.
                  </p>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Registration for community service activities is included with conference registration.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Materials;
