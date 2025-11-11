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
              Materi
            </h1>
            
            <div className="space-y-6">
              {
              <Card className="shadow-elegant animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-accent" />
                    Topic 1
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Permendiktisaintek No 39 2025 (Penjaminan mutu Pendidikan Tinggi) Dr. Eng. Pipit Anggraeni, S.T., M.T., M.Sc.Eng.
                  </p>
                  <Button variant="gold">
                    <Download className="mr-2 h-4 w-4" />
                      <a href="https://drive.google.com/file/d/1Mo1E4mGGJzfWwpnAG3t8_5-b_5N5qRA9/view?usp=sharing" target="_blank">Download Materi</a>
                  </Button>
                </CardContent>
              </Card>
              }

              {
              <Card className="shadow-elegant animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-accent" />
                    Topic 2
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Kurikulum Vokasi : Desutama Rachmat Bugi Prayogo, S.T., M.T.
                  </p>
                  <Button variant="gold">
                    <Download className="mr-2 h-4 w-4" />
                      <a href="https://drive.google.com/file/d/1SK5UkJYkDKAAkBV09wJkdiWGEGJYYv_x/view?usp=sharing" target="_blank">Download Materi</a>
                  </Button>
                </CardContent>
              </Card>
              }

               {
              <Card className="shadow-elegant animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-accent" />
                    Topic 3
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Memahami Instrumen Akreditasi 8 Kriteria: Langkah Praktis Menuju Terakreditasi Unggul Dra.apt.Titiek Martati, M.Si
                  </p>
                  <Button variant="gold">
                    <Download className="mr-2 h-4 w-4" />
                      <a href="https://drive.google.com/file/d/16dbOLgc6hfIPTwNwJVrDjoivqQPya9RU/view?usp=sharing" target="_blank">Download Materi</a>
                  </Button>
                </CardContent>
              </Card>
              }

              {
              <Card className="shadow-elegant animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-accent" />
                    Topic 4
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Expert Lecture:Strategies of Pharmacy Vocational Students in Facing Global Health Challenges + Discussion : Prof. Dr. Mogana Sundari Rajagopal : UCSI
                  </p>
                  <Button variant="gold">
                    <Download className="mr-2 h-4 w-4" />
                      <a href="https://drive.google.com/file/d/1E6JWntFiXcLMpWtWY6QoDe87E7UGOJpi/view?usp=sharing" target="_blank">Download Materi</a>
                  </Button>
                </CardContent>
              </Card>
              }

              {
              <Card className="shadow-elegant animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-accent" />
                    Topic 5
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Managing knowledge into publishable academic journal : Prof. Ts.Dr. Nangkula Utaberta
                  </p>
                  <Button variant="gold">
                    <Download className="mr-2 h-4 w-4" />
                      <a href="https://drive.google.com/file/d/1q1BHnG2KIITwmdQYaybY79t517yiarQR/view?usp=sharing" target="_blank">Download Materi</a>
                  </Button>
                </CardContent>
              </Card>
              }

              {
              <Card className="shadow-elegant animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-accent" />
                    Topic 6
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Community service: Rational Self-Medication Practices in Malaysia + Discussion : apt. Enti Hariadha, MSc.(Clin.Pharm) : UCSI
                  </p>
                  <Button variant="gold">
                    <Download className="mr-2 h-4 w-4" />
                      <a href="https://drive.google.com/file/d/1AUqECmX63C5QddbpLDtnl7LtLnC-ToBd/view?usp=sharing" target="_blank">Download Materi</a>
                  </Button>
                </CardContent>
              </Card>
              }

              {
              <Card className="shadow-elegant animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-accent" />
                    Topic 7
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Community Service: Optimizing the Use of Traditional Medicine to Improve Community Health Status apt. Awal Prichatin Kusumadewi., M.Sc.
                  </p>
                  <Button variant="gold">
                    <Download className="mr-2 h-4 w-4" />
                      <a href="https://drive.google.com/file/d/1gpW3GHxJI7KqjY9xzKGhh6TY8kB0z3A6/view?usp=sharing" target="_blank">Download Materi</a>
                  </Button>
                </CardContent>
              </Card>
              }
              
            </div>
          </div>
          

        </div>
        
        
      </main>

      <Footer />
    </div>
    
  );
};

export default Materials;

