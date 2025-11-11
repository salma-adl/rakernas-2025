import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, FileCheck } from "lucide-react";


type Schedule = {
  day: string;
  time: string;
  schedule: string;
  description: string;
};

const scheduleData: Schedule[] = [
  {
    day: "Day 1",
    time: "12:00 - 13:00",
    schedule: "Registrasi Peserta (Makan siang di Hotel)",
    description: "Dresscode: Batik",
  },
  {
    day: "Day 1",
    time: "13:00 - 13:05",
    schedule: "Opening and reading of the agenda by MC",
    description: "Al-Fira Putriyanti, M.Farm | Asriadi Prhandika W, S.Tr,Kes (an)",
  },
  {
    day: "Day 1",
    time: "13:05 - 13:10",
    schedule: "Reciting verses from the Holy Quran",
    description: "apt. Abdul Mulki Irfani, M.Farm | apt. Nurul, M.Farm",
  },
  {
    day: "Day 1",
    time: "13:10 - 13:15",
    schedule: "Prayer recitation",
    description: "Dr. apt. Umil Mahfudin, M.Mkes",
  },
  {
    day: "Day 1",
    time: "13:15 - 13:20",
    schedule: "Sing the national anthem of Indonesia Raya",
    description: "Dirigen : apt. Melinda Januarti, M.Si",
  },
  {
    day: "Day 1",
    time: "13:20 - 13:30",
    schedule: "Traditional dance performance, Jaipong dance",
    description: "LSS Universitas Bakti Kencana",
  },
  {
    day: "Day 1",
    time: "13:30 - 13:40",
    schedule: "Sambutan ketua Pelaksana Rakernas 2025",
    description: "Dr. apt. Entris Sutrisno, MHKes",
  },
  {
    day: "Day 1",
    time: "13:40 - 13:50",
    schedule: "Sambutan Ketua APDFI",
    description: "apt.Dra.Yusmaniar, M.Biomed",
  },
  {
    day: "Day 1",
    time: "13:50 - 14:00",
    schedule: "Sambutan Ketua DPD / MPR RI 2024-2029",
    description: "apt. Destita Khairilisani, S.Farm., M.S.M.",
  },
  {
    day: "Day 1",
    time: "14:00 - 14:10",
    schedule: "Sambutan Walikota Bandung",
    description: "Muhammad Farhan, S.E., M.Si",
  },
  {
    day: "Day 1",
    time: "14:10 - 14:30",
    schedule: "Performing Traditional Arts : Angklung",
    description: "AKSI (Angklung Farmasi) : Poltekkes Kemenkes Bandung",
  },
  {
    day: "Day 1",
    time: "14:30 - 15:00",
    schedule: "Penandatangan MoU antara industri dan APDFI",
    description: "MoU Industri : 1. BCrobes; 2. PT Nanotech Global Indonesia; Tbk 3. SR12",
  },
  {
    day: "Day 1",
    time: "15:00 - 16:20",
    schedule: "Topic 1 : Permendiktisaintek No 39 2025 (Penjaminan mutu Pendidikan Tinggi) Dr. Eng. Pipit Anggraeni, S.T., M.T., M.Sc.Eng.",
    description: "Moderator : Dr. apt. Leonov Rianto.,S.Si.,M.Farm.,Apt | PIC : apt.Nuri Handayani,M.Farm",
  },
   {
    day: "Day 1",
    time: "16:20 - 17:50",
    schedule: "Topic 2 : Kurikulum Vokasi : Desutama Rachmat Bugi Prayogo, S.T., M.T.",
    description: "Moderator : Dr. apt. Fef Rukminingsih, M.Sc | PIC : apt. Ani Anggriani, M.Si",
  },
  {
    day: "Day 1",
    time: "17:50 - 19:00",
    schedule: "ISHOMA",
    description: "Istirahat, Sholat, Makan",
  },
  {
    day: "Day 1",
    time: "19:00 - 19:30",
    schedule: "Signing of the MoU and MoA International",
    description: "PJ : Dr. apt. Wardiyah, M.Si ; apt. Ulya Safrina, M.Si Dress code : Bebas",
  },
  {
    day: "Day 1",
    time: "19:30 - 20:00",
    schedule: "Sosialisasi Obat Apps",
    description: "apt. Syaiful Rabbani, S.Farm., MBA",
  },
  {
    day: "Day 1",
    time: "20:00 - 21:30",
    schedule: "Topik 3 : Memahami Instrumen Akreditasi 8 Kriteria: Langkah Praktis Menuju Terakreditasi Unggul Dra.apt.Titiek Martati, M.Si",
    description: "Moderator : apt.Yugo Susanto, S.Si.,M.Pd.,M.Farm | PIC : Dr.apt. Rahmatul Qodriah, M.Farm",
  },
  {
    day: "Day 2",
    time: "08:00 - 09:30",
    schedule: "Topic 4 : Expert Lecture:Strategies of Pharmacy Vocational Students in Facing Global Health Challenges + Discussion : Prof. Dr. Mogana Sundari Rajagopal : UCSI Sasaran Peserta : Mahasiswa (Online Zoom)",
    description: "Modertor : apt.Nooryza Martihandini,M.Farm | PIC : Dr.apt. Rahmatul Qodriah, M.Farm | Dress code : Kaos Rakernas 2025 (Akan dibagikan ketika registrasi hari pertama)",
  },
  {
    day: "Day 2",
    time: "08.00 - 09:30",
    schedule: "Topik 5 : Managing knowledge into publishable academic journal : Prof. Ts.Dr. Nangkula Utaberta",
    description: "Moderator + PIC : Dr. apt. Wardiyah, M.Si",
  },
  {
    day: "Day 2",
    time: "09:30 - 09:45",
    schedule: "Coffee Break",
    description: "-",
  },
  {
    day: "Day 2",
    time: "09:45 - 11:00",
    schedule: "Topik 6 : Community service: Rational Self-Medication Practices in Malaysia + Discussion : apt. Enti Hariadha, MSc.(Clin.Pharm) : UCSI",
    description: "Target peserta : Peserta rakernas, mahasiswa dan masyarakat | Moderator : apt. Ulya Safrina, M.Si | PIC : Dr. apt. Ika Kurnia Sukmawati, M.Si",
  },
  {
    day: "Day 2",
    time: "11:00 - 12:30",
    schedule: "Topik 7 : Community Service: Optimizing the Use of Traditional Medicine to Improve Community Health Status apt. Awal Prichatin Kusumadewi., M.Sc.",
    description: "Target peserta : Peserta rakernas, mahasiswa dan masyarakat | Moderator : apt. Indri Astuti,S.Si, M.Farm. | PIC : Dr. apt. Yenni Puspita Tanjung, M.Farm.",
  },
  {
    day: "Day 2",
    time: "08:00 - 12:30",
    schedule: "Poster/Oral Presentation",
    description: "Tempat : Meeting room | PJ : pt. MH Roseno M.Si ; apt. Widyastiwi, S.Farm., M.Si",
  },
  {
    day: "Day 2",
    time: "12:30 - 13:30",
    schedule: "ISHOMA",
    description: "-",
  },
  {
    day: "Day 2",
    time: "13:30 - 16:00",
    schedule: "RAKERNAS APDFI",
    description: "Dress code : Seragam ciri khas masing-masing institusi",
  },
  {
    day: "Day 2",
    time: "13:30 - 14:45",
    schedule: "Diskusi masing-masing regional",
    description: "Ketua regional",
  },
  {
    day: "Day 2",
    time: "14:15 - 15:15",
    schedule: "Presentasi masing-masing regional",
    description: "Ketua regional",
  },
  {
    day: "Day 2",
    time: "15:15 - 17:00",
    schedule: "Diskusi",
    description: "Moderator : Dr. apt. Leonov Rianto.,S.Si.,M.Farm.,Apt",
  },
  {
    day: "Day 2",
    time: "17:00 - 18:30",
    schedule: "Persiapan Gala Dinner",
    description: "Istirahat dan Sholat",
  },
  {
    day: "Day 2",
    time: "18:30 - 22:00",
    schedule: "Gala Dinner (Contest announcement, and gathering)+Coffee",
    description: "Dress Code : Pakaian bertema pahlawan nasional RI",
  },
  {
    day: "Day 3",
    time: "08:00 - 09:00",
    schedule: "Follow-up plan",
    description: "Dress code : Bebas",
  },
  {
    day: "Day 3",
    time: "09:30 - Selesai",
    schedule: "Closing",
    description: "-",
  },
];

const Rundown = () => {
  const [selectedDay, setSelectedDay] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredSchedule = useMemo(() => {
    let filtered = scheduleData;

    if (selectedDay !== "All") {
      filtered = filtered.filter((item) => item.day === selectedDay);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (item) =>
          item.schedule.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [selectedDay, searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const getDayBgColor = (day: string) => {
    return day === "Day 1" ? "bg-[hsl(var(--day1-bg))]" : "bg-[hsl(var(--day2-bg))]";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <motion.div
        className="container py-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl font-bold mb-2">📅 Event Rundown</h1>
          <p className="text-muted-foreground">
            RAKERNAS APDFI 2025 - 11 s.d 13 November 2025
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="p-6 shadow-lg rounded-2xl">
            <div className="space-y-6">
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3">
                {["All", "Day 1", "Day 2", "Day 3"].map((day) => (
                  <Button
                    key={day}
                    variant={selectedDay === day ? "default" : "outline"}
                    onClick={() => setSelectedDay(day)}
                    className="transition-all duration-300"
                  >
                    {day}
                  </Button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari jadwal atau deskripsi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Schedule Table */}
              <div className="rounded-lg border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[120px]">Day</TableHead>
                      <TableHead className="w-[150px]">Time</TableHead>
                      <TableHead>Schedule</TableHead>
                      <TableHead>Description</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSchedule.length > 0 ? (
                      filteredSchedule.map((item, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className={`${getDayBgColor(
                            item.day
                          )} transition-all duration-200 hover:brightness-95`}
                        >
                          <TableCell>
                            <Badge variant="secondary">{item.day}</Badge>
                          </TableCell>
                          <TableCell className="font-medium">{item.time}</TableCell>
                          <TableCell className="font-semibold">
                            {item.schedule}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {item.description}
                          </TableCell>
                        </motion.tr>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                          Tidak ada jadwal yang ditemukan
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
              <CardContent>
                <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg mt-4">
                  <p className="text-sm font-medium">
                    Keterangan : Kegiatan presentasi lomba dosen dilaksanakan paralel dengan kuliah pakar dan PkM.
                  </p>
                </div>
              </CardContent>
            </div>
          </Card>

          <div className="py-10" >
              <Card className="shadow-elegant animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileCheck className="w-6 h-6 text-accent" />
                    Petunjuk Teknis Kegiatan Gala Dinner
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Download the official JUKNIS for Gala Dinner RAKERNAS 2025.
                  </p>
                  <Button variant="gold" size="lg" className="w-full sm:w-auto">
                    <a href="https://drive.google.com/file/d/1RZ6ePqnHoMeGxeRW8TtRtHAOke1tsjMF/view?usp=sharing" target="_blank">JUKNIS Gala Dinner</a>
                  </Button>
                  <p className="text-xs text-muted-foreground"></p>
                </CardContent>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Tata Tertib Peserta RAKERNAS APDFI 2025
                  </p>
                  <Button variant="gold" size="lg" className="w-full sm:w-auto">
                    <a href="https://drive.google.com/file/d/1At8bn1VHt6T2LzF2G3DKR-QQgyD9lk5_/view?usp=sharing" target="_blank">Tata Tertib Peserta</a>
                  </Button>
                  <p className="text-xs text-muted-foreground"></p>
                </CardContent>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Rute Transportasi RAKERNAS APDFI
                  </p>
                  <Button variant="gold" size="lg" className="w-full sm:w-auto">
                    <a href="https://drive.google.com/file/d/1Nfz7mXmCgdinJAsDk1ao5jF2tPW934hr/view?usp=sharing" target="_blank">Rute Transportasi</a>
                  </Button>
                  <p className="text-xs text-muted-foreground"></p>
                </CardContent>
            </Card>
          </div>

        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Rundown;
