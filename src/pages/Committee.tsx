import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Committee = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
              Susunan Kepanitiaan
            </h1>

            <Card className="shadow-elegant animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Susunan Kepanitiaan RAKERNAS 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Berikut ini adalah susunan kepanitian Rakernas 2025
                </p>


                <div className="bg-secondary/30 p-6 rounded-lg">
                  <table className="text-muted-foreground mb-6">
                  <tbody>
                    <tr>
                      <td>Pelindung </td>
                      <td> : Dra.apt.Yusmaniar, M.Biomed</td>
                    </tr>
                    <tr>
                      <td>Penanggung Jawab </td>
                      <td> : Dr.apt. Leonov Rianto, S.Si., M.Farm</td>
                    </tr>
                    <tr>
                      <td>Pengarah </td>
                      <td> : Dr.apt. Andri Priyoherianto, M.Si</td>
                    </tr>
                    <tr>
                      <td>Ketua </td>
                      <td> : Dr.apt. Entris Sutrisno, MH.Kes</td>
                    </tr>
                    <tr>
                      <td>Sekretaris dan Kesekretariatan </td>
                      <td> : 1. Dr.apt. Rahmatul Qodriah, M.Farm</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>   2. apt. Tantriska Wijanti, M.Si</td>
                    </tr>
                    <tr>
                      <td>Bendahara </td>
                      <td> : 1. apt. Indri Astuti Handayani, M.Farm</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>   2. Dr.apt. Ika Kurnia Sukmawati, M.Si</td>
                    </tr>
                    <tr>
                      <td>Seksi Acara </td>
                      <td> : 1. apt. Nuri Handayani, M.Farm</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>   2. Dr.apt. Yenni Puspita Tanjung, M.Farm</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>   3. apt. Ani Anggriani, M.Si</td>
                    </tr>
                    <tr>
                      <td>Seksi Perlengkapan </td>
                      <td>   1. Dr.apt. Umil Mahfudin, MM.Kes</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>   2. apt. Aulia Nurfazri Istiqomah, M.Farm</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>   3. apt. Melinda Januarti, M.Si</td>
                    </tr>
                    <tr>
                      <td>Seksi Danus, Humas, dan Kerjasama </td>
                      <td>   : 1. Dr.apt. Wardiyah, M.Si</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>     2. apt. Ulya Safrina, M.Si</td>
                    </tr>
                    <tr>
                      <td>Seksi Publikasi dan IT </td>
                      <td>   : 1. apt. Yugo Susanto, S.Si., M.Pd., M.Farm</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>     2. apt. Bayu Dwi Handono, M.Farm</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>     3. apt. Nurul, M.Farm</td>
                    </tr>
                    <tr>
                      <td>Seksi Seminar dan Kegiatan Ilmiah</td>
                      <td>   : 1. apt. MH Roseno, M.Si</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>     2. apt. Widyastiwi, S.Farm., M.Si</td>
                    </tr>
                  </tbody>

                </table>

                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Committee Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <div>
                        <p className="font-medium">Ms. Ika</p>
                        <p className="text-sm text-muted-foreground">Contact: +62 XXX-XXXX-XXXX</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <div>
                        <p className="font-medium">Ms. Tantriska</p>
                        <p className="text-sm text-muted-foreground">Contact: +62 XXX-XXXX-XXXX</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <div>
                        <p className="font-medium">Ms. Rahma</p>
                        <p className="text-sm text-muted-foreground">Contact: +62 XXX-XXXX-XXXX</p>
                      </div>
                    </div>
                  </div>
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

export default Committee;
