import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Countdown from "@/components/Countdown";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBg from "@/assets/hero-bg.jpg";
import { Calendar, Users, Award, BookOpen } from "lucide-react";

const Home = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "National Seminar",
      description: "Quality Assurance in Higher Education and Vocational Curriculum",
    },
    {
      icon: Users,
      title: "International Expert",
      description: "Learn from renowned international speakers and experts",
    },
    {
      icon: Award,
      title: "Student Competition",
      description: "Showcase your skills and compete with peers nationwide",
    },
    {
      icon: BookOpen,
      title: "Publications",
      description: "Submit your research through abstracts, papers, and journals",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[600px] md:h-[700px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              RAKERNAS 2025
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-white/90">
              Asosisasi Pendidikan Diploma Farmasi Indonesia (APDFI)
            </p>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              Penguatan Pendidikan Vokasi Farmasi menuju Lulusan Kompeten & Berdaya Saing Global
            </p>
            <div className="mb-12">
              <Countdown />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
                <Button variant="gold" size="xl" className="w-full sm:w-auto">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScyzAZufOyHvhtImKN3QG22RBEeEPW7efv0bwx90RzU3ZhM9w/viewform"
                  target="_blank">
                    Register Now
                  </a>
                </Button>
       
              <Link to="/about">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                >
                  Activity Description
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Conference Highlights
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-elegant transition-smooth animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Welcome to RAKERNAS APDFI 2025
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join us for the premier national conference bringing together educators, researchers, and
              industry leaders to discuss the future of higher education quality assurance and vocational
              curriculum development. Share knowledge, network with peers, and contribute to shaping the
              future of education in Indonesia.
            </p>
            <Link to="/about">
              <Button variant="default" size="lg">
                View Full Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Join Us?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to be part of Indonesia's leading conference on higher education.
            Register today and secure your spot!
          </p>
            <Button variant="gold" size="xl" className="shadow-gold-glow">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScyzAZufOyHvhtImKN3QG22RBEeEPW7efv0bwx90RzU3ZhM9w/viewform"
              target="_blank">
                Register for RAKERNAS 2025
              </a>
            </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
