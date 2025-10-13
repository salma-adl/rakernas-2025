import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import rakernaLogo from "@/assets/rakernas-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-fast">
            <img src={rakernaLogo} alt="RAKERNAS 2025" className="h-12 w-12" />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary">RAKERNAS 2025</h1>
              <p className="text-xs text-muted-foreground">APDFI</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                className="font-medium"
              >
                Home
              </Button>
            </Link>

            {/* RAKERNAS Dropdown */}
            <div className="relative group">
              <Button
                variant="ghost"
                className="font-medium"
                onMouseEnter={() => setOpenDropdown("rakernas")}
              >
                RAKERNAS APDFI 2025
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              <div
                className="absolute top-full left-0 mt-1 w-56 bg-popover border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to="/about"
                  className="block px-4 py-3 hover:bg-secondary transition-fast rounded-t-lg"
                >
                  Deskripsi Kegiatan
                </Link>
                <Link
                  to="/committee"
                  className="block px-4 py-3 hover:bg-secondary transition-fast rounded-b-lg"
                >
                  Susunan Kepanitiaan
                </Link>
              </div>
            </div>

            {/* PROGRAM Dropdown */}
            <div className="relative group">
              <Button
                variant="ghost"
                className="font-medium"
                onMouseEnter={() => setOpenDropdown("program")}
              >
                Program
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              <div
                className="absolute top-full left-0 mt-1 w-56 bg-popover border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-smooth"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to="/materials"
                  className="block px-4 py-3 hover:bg-secondary transition-fast rounded-t-lg"
                >
                  Materi
                </Link>
                <Link
                  to="/publications"
                  className="block px-4 py-3 hover:bg-secondary transition-fast"
                >
                  Publikasi
                </Link>
                <Link
                  to="/mou"
                  className="block px-4 py-3 hover:bg-secondary transition-fast"
                >
                  MoU
                </Link>
                <Link
                  to="/competition"
                  className="block px-4 py-3 hover:bg-secondary transition-fast rounded-b-lg"
                >
                  Lomba Mahasiswa
                </Link>
              </div>
            </div>

            <Link to="/registration">
              <Button
                variant={isActive("/registration") ? "default" : "ghost"}
                className="font-medium"
              >
                Registrasi
              </Button>
            </Link>

            <Link to="/accommodation">
              <Button
                variant={isActive("/accommodation") ? "default" : "ghost"}
                className="font-medium"
              >
                Akomodasi
              </Button>
            </Link>

            <Link to="/registration">
              <Button variant="gold" size="lg" className="ml-4">
                Daftar Sekarang
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Home
                </Button>
              </Link>

              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-between"
                  onClick={() => toggleDropdown("rakernas-mobile")}
                >
                  RAKERNAS APDFI 2025
                  <ChevronDown className="h-4 w-4" />
                </Button>
                {openDropdown === "rakernas-mobile" && (
                  <div className="pl-4 mt-1 space-y-1">
                    <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Deskripsi Kegiatan
                      </Button>
                    </Link>
                    <Link to="/committee" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Susunan Kepanitiaan
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-between"
                  onClick={() => toggleDropdown("program-mobile")}
                >
                  Program
                  <ChevronDown className="h-4 w-4" />
                </Button>
                {openDropdown === "program-mobile" && (
                  <div className="pl-4 mt-1 space-y-1">
                    <Link to="/materials" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Materi
                      </Button>
                    </Link>
                    <Link to="/publications" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Publikasi
                      </Button>
                    </Link>
                    <Link to="/mou" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        MoU
                      </Button>
                    </Link>
                    <Link to="/competition" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-sm">
                        Lomba Mahasiswa
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/registration" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Registrasi
                </Button>
              </Link>

              <Link to="/accommodation" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Akomodasi
                </Button>
              </Link>

              <Link to="/registration" onClick={() => setIsMenuOpen(false)}>
                <Button variant="gold" className="w-full mt-4">
                  Daftar Sekarang
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
