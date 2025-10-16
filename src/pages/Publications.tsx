import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Presentation, BookOpen, Newspaper } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Publications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
              Publikasi Ilmiah
            </h1>

            <Card className="shadow-elegant animate-fade-in mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  Juknis Presentasi Oral dan Poster
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="bg-secondary/30 p-4 rounded-lg space-y-3">
                  Kami mengundang semua anggota APDFI yang tertarik untuk mempresentasikan karyanya di
                  bidang farmasi dan anafarma, termasuk - namun tidak terbatas - pada kategori berikut:<br></br>
                  <ul>• Farmakologi, Toksikologi dan Farmakoterapi (FT)</ul>
                  <ul>• Farmasi Klinis, Farmasi Pendidikan, Farmakoekonomi dan Farmasi Sosial Administratif termasuk penggunaan teknologi informasi dan komunikasi (FK)</ul>
                  <ul>• Farmasetika dan Teknologi Farmasi (TF) </ul>
                  <ul>• Kimia Medisinal, Biologi Molekuler, dan Bioteknologi (KM)</ul>
                  <ul>• Farmakognosi, Fitokimia, Fitofarmasi, Produk Bahan Alam / Herbal (OH)</ul>
                  <ul>• Analisis obat, obat bahan alam, makanan, kosmetik, dan alat kesehatan (ANA)</ul>

                </p>
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
                      Batas akhir penerimaan abstrak pemakalah oral dan poster
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold mb-1">27 - 31 Oktober 2025</h4>
                    <p className="text-sm text-muted-foreground">
                      Proses penelaahan
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold mb-1">1 - 2  November 2025</h4>
                    <p className="text-sm text-muted-foreground">
                      Pengumuman penerimaan abstrak
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold mb-1">8 November 2025</h4>
                    <p className="text-sm text-muted-foreground">
                      Pengumuman jadwal presentasi oral / poster
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold mb-1">10 November 2025</h4>
                    <p className="text-sm text-muted-foreground">
                      Batas akhir pengiriman file presentasi (pemakalah oral)
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h4 className="font-semibold mb-1">11 – 13 November 2025</h4>
                    <p className="text-sm text-muted-foreground">
                      Pelaksanaan RAKERNAS APDFI 2025
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="abstract" className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                <TabsTrigger value="abstract">Abstrak</TabsTrigger>
                <TabsTrigger value="oral">Oral</TabsTrigger>
                <TabsTrigger value="poster">Poster</TabsTrigger>
                <TabsTrigger value="journal">Jurnal</TabsTrigger>
              </TabsList>

              {/* Abstract Tab */}
              <TabsContent value="abstract">
                <Card className="shadow-elegant animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-accent" />
                      Abstrak
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Bacalah Ketentuan Pengiriman dan Penulisan Abstrak dan download Templatenya pada tombol di bawah:
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold">Ketentuan Pengiriman dan Penulisan Abstrak:</h4>
                      <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                        <li>1. Peserta merupakan dosen maupun tenaga kependidikan di Institusi anggota APDFI.</li>
                        <li>2. Peserta yang telah mengirimkan abstrak dinyatakan menyetujui dan berkomitmen penuh
                          untuk berpartisipasi dalam kegiatan RAKERNAS APDFI 2025. Peserta dimohon untuk
                          membaca tata cara pengiriman dan penulisan abstrak di bawah ini.</li>
                        <li>3. Abstrak mengikuti format dan template yang telah ditetapkan panitia. Ukuran abstrak
                          adalah A4 dengan maksimal 300 kata. Abstrak ditulis menggunakan Bahasa Indonesia dengan kualitas ejaan dan tata bahasa yang sesuaiuntuk publikasi. </li>
                        <li>4. Nama penulis yang akan bertindak sebagai pemakalah diberi garis bawah (underline) dan
                          dicetak tebal pada template abstrak yang dikirimkan.</li>
                        <li>5. Penulis mengunggah abstrak melalui <a href="https://bit.ly/AbstrakAPDFI2025" target="_blank"><b> https://bit.ly/AbstrakAPDFI2025</b></a>. Saat mengunggah abstrak, peserta wajib memilih salah
                          satu topik yang sesuai.</li>
                        <li>6. Setiap pemakalah dapat mengunggah paling banyak 1 (satu) abstrak dan hanya dapat
                          mengikuti satu kategori presentasi saja (oral atau poster).</li>
                        <li>7. Abstrak yang telah dikirimkan kepada panitia tidak dapat direvisi, ditarik kembali, dibatalkan 
                          atau diganti kecuali dengan pemberitahuan terlebih dahulu kepada panitia melalui <b> email: apdfi.regional1@gmail.com</b></li>
                        <li>8. Batas akhir penerimaan abstrak adalah tanggal 26 Oktober 2025.</li>
                        <li>9. Karya tulis belum pernah dipresentasikan atau dipublikasikan dalam jurnal manapun. Apabila penelitian tersebut telah dipublikasikan maka tetap boleh dikirimkan dan
                          dipresentasikan namun tidak dapat dilanjutkan sebagai publikasi ilmiah pada jurnal.</li>
                        <li>10. Panitia memiliki hak untuk menolak abstrak yang telah dikirimkan bila dianggap tidak
                          memenuhi persyaratan administratif, tidak memenuhi kualitas makalah atau tidak relevan
                          dengan topik RAKERNAS APDFI 2025.</li>
                        <li>11. Abstrak yang dikirimkan untuk pendaftaran adalah abstrak yang akan digunakan untuk
                          menilai kelayakan peserta mengikuti sesi presentasi oral/poster di RAKERNAS APDFI 2025.
                          Format abstrak untuk publikasi ilmiah artikel di jurnal akan mengikuti ketentuan masing-
                          masing jurnal.</li>
                        <li>12. Panitia menyediakan Sertifikat Pemakalah Oral/Poster dan Abstract Book yang dapat
                          diunduh oleh peserta sebagai bukti dukung pelaksanaan kegiatan.</li>
                      </ul>
                    </div>
                    <a href="https://docs.google.com/document/d/186RCkPHGK6pQg0hsbibO5AipBPmyuPXd/edit?usp=sharing&ouid=107147833834694597523&rtpof=true&sd=true" target="_blank">
                      <Button variant="gold">
                        <Download className="mr-2 h-4 w-4" />
                        Download Template Abstrak
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Oral Tab */}
              <TabsContent value="oral">
                <Card className="shadow-elegant animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Presentation className="w-6 h-6 text-accent" />
                      Presentasi Oral
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Peserta dapat mempresentasikan penelitiannya dalam kategori presentasi oral atau presentasi poster. 
                      Peserta presentasi oral dan poster dapat mempulikasikan hasil penelitiannya setelah
                      menerima LoA sebagai pemakalah oral ataupun poster.
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold">Ketentuan Presentasi Oral</h4>
                      <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                        <li>1. Panitia tidak menyediakan template PowerPoint, sehingga pemakalah dipersilakan menggunakan format presentasi masing-masing.</li>
                        <li>2. Pemakalah menyajikan makalah secara daring (online melalui Zoom meeting) pada hari kedua (12 November 2025) RAKERNAS APDFI 2025 berlangsung.</li>
                        <li>3. Waktu presentasi adalah 7 menit, dilanjutkan dengan tanya jawab 2–3 menit. Total alokasi waktu 10 menit per pemakalah.</li>
                        <li>4. Pemakalah wajib mematuhi alokasi waktu. Moderator dapat memberikan peringatan, dan presentasi akan dihentikan jika melewati batas waktu.</li>
                        <li>5. Presentasi wajib disampaikan sendiri oleh pemakalah yang terdaftar dan tidak dapat diwakilkan. Apabila pemakalah berhalangan hadir, waktu akan dialihkan ke pemakalah berikutnya.</li>
                        <li>6. Presentasi dilakukan menggunakan Bahasa Indonesia.</li>
                        <li>7. Slide presentasi diserahkan kepada panitia paling lambat tanggal <b>10 November 2025.</b>10 November 2025.</li>
                        <li>8. Panitia berhak mengambil foto dan melakukan perekaman untuk kepentingan dokumentasi, pendidikan, serta publikasi kegiatan.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Poster Tab */}
              <TabsContent value="poster">
                <Card className="shadow-elegant animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-accent" />
                      Presentasi Poster
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Peserta dapat mempresentasikan penelitiannya dalam kategori presentasi oral atau presentasi poster. 
                      Peserta presentasi oral dan poster dapat mempulikasikan hasil penelitiannya setelah
                      menerima LoA sebagai pemakalah oral ataupun poster.
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold">Ketentuan Presentasi Poster</h4>
                      <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                        <li>1. Panitia tidak menyediakan template Poster, sehingga pemakalah dipersilakan
                          menggunakan format presentasi masing-masing.</li>
                        <li>2. Poster dibuat dalam ukuran X-Banner (umumnya 60 cm x 160 cm), yang dicetak dan
                          dipasang secara mandiri oleh pemakalah pada lokasi yang ditentukan oleh panitia saat
                          kegiatan berlangsung.</li>
                        <li>3. Sebuah poster dapat terdiri dari teks, tabel, gambar, foto, dan alat bantu visual lainnya, yang
                        berkaitan dengan topik yang ditetapkan dengan teks terbatas dan informasi visual yang lebih
                        dominan.</li>
                        <li>4. Poster ditulis dengan mengikuti kaidah ilmiah, singkat, dan jelas.</li>
                        <li>5. Poster dibuat dalam format satu halaman penuh, dengan dimensi dan ukuran yang dapat
                          dibaca dengan jelas oleh peserta. Panitia menyarankan gambar/grafik/skema dalam
                          kualitas resolusi tinggi (High Quality Image).</li>
                        <li>6. Susunan poster terdiri dari Judul, Penulis dan afiliasi penulis, Pendahuluan, Metode, Hasil
                          dan Pembahasan, Kesimpulan, Referensi, dan Ucapan Terima Kasih.</li>
                        <li>7. Poster dipasang di ruangan yang telah disediakan panitia dan ditampilkan pada hari kedua
                           (12 November 2025) RAKERNAS berlangsung. Poster dapat dipasang oleh peserta sejak pukul 08.00 WIB. 
                           Panitia akan membantu mengatur jalannya kegiatan.</li>
                        <li>8. Poster akan dinilai langsung oleh dewan juri berdasarkan kualitas isi dan tampilan. Tidak ada sesi presentasi dari pemakalah.</li>
                      </ul>
                    </div>

                    <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                      <h4 className="font-semibold mb-2">Catatan</h4>
                        <p className="text-sm text-muted-foreground">
                          Untuk pemakalah poster, poster dibawa dan dipasang oleh peserta pada hari pelaksanaan RAKERNAS APDFI 2025
                        </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Journal Tab */}
              <TabsContent value="journal">
                <Card className="shadow-elegant animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Newspaper className="w-6 h-6 text-accent" />
                      Publikasi
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Daftar Jurnal Mitra Publikasi RAKERNAS APDFI 2025:
                    </p>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold">Jurnal Ilmu Kefarmasian Indonesia (JIFI) Universitas Pancasila, Sinta 2</h4>
                      <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                        <li>Biaya: Rp. 1.250.000,-</li>
                        <li>http://jifi.farmasi.univpancasila.ac.id/index.php/jifi</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold">Jurnal Riset Kefarmasian Indonesia (APDFI), Sinta 4</h4>
                      <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                        <li>Biaya: Rp. 450.000,-</li>
                        <li>https://jurnalfarmasi.or.id/index.php/jrki</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/30 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold">Jurnal Farmasi Galenika Universitas Bhakti Kencana, Sinta 4</h4>
                      <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                        <li>Biaya: Rp. 0,-</li>
                        <li>https://journal.bku.ac.id/jfg/index.php/jfg/index</li>
                      </ul>
                    <br></br></div>
                    <a href="https://drive.google.com/file/d/1XHFBguVBCnf9QfmNF9Fvh_cE4ubwlJ2b/view?usp=sharing" target="_blank">
                    <Button variant="gold">
                      <Download className="mr-2 h-4 w-4" />
                      Download Guidelines for Authors
                    </Button>
                    </a>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            
            <Card className="shadow-elegant animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle>Biaya</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-muted/40 to-muted/10 p-6 rounded-lg text-center border">
                    <p className="font-semibold mb-1">Biaya Kepesertaan Presenter Poster</p>
                    <div className="text-2xl font-bold text-muted-foreground mb-2">Rp. 150.000 / pemakalah</div>
                  </div>
                  <div className="bg-gradient-to-br from-muted/40 to-muted/10 p-6 rounded-lg text-center border">
                    <p className="font-semibold mb-1">Biaya Kepesertaan Presenter Oral</p>
                    <div className="text-2xl font-bold text-muted-foreground mb-2">Rp. 200.000 / pemakalah</div>
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
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0AIp_jbv1n1BWh6e3BEXvV-tY-J_cE8xp29HCmmrNLTAMeg/viewform" target="_blank">
                <Button variant="gold" size="xl">
                  DAFTAR PRESENTASI ORAL/POSTER
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

export default Publications;
