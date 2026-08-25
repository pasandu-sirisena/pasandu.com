import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import contour from "@/assets/contour.png.asset.json";
import l3logo from "@/assets/l3harris.png.asset.json";
import cibcLogo from "@/assets/cibc.jpg.asset.json";
import mcmasterLogo from "@/assets/mcmaster.jpg.asset.json";
import { WaveDivider } from "@/components/WaveDivider";
import { useScrollY } from "@/hooks/use-scroll-y";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pasandu Sirisena, Computer Engineering @ McMaster" },
      {
        name: "description",
        content:
          "4th year Computer Engineering student at McMaster University focused on digital logic design, FPGA development and low-level firmware for embedded systems.",
      },
      { property: "og:title", content: "Pasandu Sirisena, Computer Engineering @ McMaster" },
      {
        property: "og:description",
        content:
          "Digital logic design, FPGA development and high-performance compute architectures. Verilog, C/C++ and embedded systems projects.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const LINKS = {
  github: "https://github.com/pasandu-sirisena",
  linkedin: "https://www.linkedin.com/in/sirisenp/",
  email: "mailto:pasandu2sirisenad@gmail.com",
};

const NAV = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const experience = [
  {
    role: "Hardware/Software Test Engineering Intern",
    org: "L3Harris WESCAM",
    place: "Hamilton, ON",
    period: "May 2026 - Present",
    logo: l3logo.url,
    points: [
      "Wrote low-level C/C++ unit test software to validate custom cables, electronic hardware and development kits, debugging across the hardware/software boundary.",
      "Deployed automated scripts and performance analysis tooling to systematically test MX series electro-mechanical camera turrets.",
      "Worked directly with hardware and systems teams to build physical test infrastructure, integrating discrete circuit elements with embedded software features.",
    ],
    tags: ["C++", "Test Automation", "Hardware Validation"],
  },
  {
    role: "Software Development & IT Project Management Intern",
    org: "CIBC",
    place: "Toronto, ON",
    period: "May 2025 - Aug 2025",
    logo: cibcLogo.url,
    points: [
      "Built and tested critical Java/Spring Boot microservices with JUnit 5 and Mockito, cutting regression bugs by over 40%.",
      "Tracked financial resources for $1M+ in technology infrastructure projects using Agile methodologies and Jira.",
      "Led a $25K Azure server migration, upgrading critical RHEL systems across development, testing and production environments.",
    ],
    tags: ["Java", "Spring Boot", "Azure", "JUnit"],
  },
];

const projects = [
  {
    title: "Custom RV32IM System-on-Chip",
    year: "August 2026",
    repo: "https://github.com/pasandu-sirisena/rv32i-tang-primer",
    blurb:
      "This project centers on the development of a custom RISC-V processor architecture implemented on a Gowin Tang Primer 20K FPGA. The system integrates a soft-core processor with a standalone memory controller configured as a memory-mapped peripheral. The hardware logic was designed using Verilog to ensure precise control over instruction execution and data routing. This architecture allows for efficient memory access and instruction fetching tailored to the RISC-V specification. The resulting hardware provides a flexible platform for executing low-level firmware and managing custom digital signal processing workloads.",
    tags: ["Verilog", "RISC-V", "FPGA", "Computer Architecture"],
  },
  {
    title: "FPGA-Based Wi-Fi Spatial Sensor",
    year: "April 2026",
    repo: "https://github.com/pasandu-sirisena/wifi-spatial-scanner",
    blurb:
      "This hardware system captures and analyzes wireless channel state information to map spatial environments. An ESP32 microcontroller serves as the radio frequency front-end to extract raw Wi-Fi telemetry data. This data is transmitted via a high-speed UART serial connection to a Sipeed Tang Primer 20K FPGA. The FPGA runs custom digital signal processing logic alongside a RISC-V orchestrator to calculate signal power and detect spatial disturbances. The hardware-accelerated pipeline allows for rapid processing of high-bandwidth radio frequency data without overwhelming a standard microcontroller.",
    tags: ["Verilog", "C/C++", "Python", "ESP32", "FPGA", "Signal Processing"],
  },
  {
    title: "Real-Time Software-Defined Radio (SDR)",
    year: "March - April 2026",
    repo: "https://github.com/pasandu-sirisena/software-defined-radio",
    blurb:
      "This software-defined radio processes frequency-modulated mono and stereo audio streams in real time. The system runs on a Raspberry Pi 4 and utilizes a C++ multithreading architecture with a producer-consumer pipeline to manage high-speed data from radio frequency hardware. Incoming signals undergo block-based decimation and polyphase resampling to step down the sample rates efficiently. The stereo processing path implements a phase-locked loop to synchronize a numerically controlled oscillator with the 19 kilohertz pilot tone. These optimizations allow the hardware to continuously output clear audio while adhering to strict computational constraints.",
    tags: ["C++", "Python", "DSP", "Raspberry Pi", "Multithreading"],
  },
  {
    title: "AI Optimal Pathfinder",
    year: "2025",
    repo: "https://github.com/pasandu-sirisena/ai-optimal-pathfinder",
    blurb:
      "This Java application functions as an autonomous graph routing engine and real-time simulation. The software converts procedurally generated grid environments into weighted directed acyclic graphs. The system computes the optimal trajectory using multiple search algorithms, including Dijkstra and Bellman-Ford. The environment utilizes a custom objective function where the routing engine must maximize score rewards while minimizing penalty weights. The simulation animates a digital agent navigating the calculated optimal path in real time within a terminal interface.",
    tags: ["Java", "Algorithms", "Graph Theory", "Simulation"],
  },
  {
    title: "FPGA-Based Image Decompressor",
    year: "Oct - Nov 2025",
    blurb:
      "This hardware design implements an image decompression algorithm directly at the logic gate level to maximize processing throughput. The decompression pipeline is written in Verilog and synthesized for a field-programmable gate array. By utilizing parallel processing blocks, the hardware decodes compressed image frames faster than a sequential software implementation. Memory controllers are used to buffer the incoming compressed bitstream and output the reconstructed pixel data to external display interfaces. This project highlights the performance benefits of translating software algorithms into custom digital logic.",
    tags: ["SystemVerilog", "FPGA", "Digital Logic", "Verification", "VGA"],
  },
  {
    title: "3D Spatial Mapping System (ToF Sensor)",
    year: "March - April 2025",
    repo: "https://github.com/pasandu-sirisena/3d-spatial-mapping-system",
    blurb:
      "This embedded spatial scanner uses a Time-of-Flight laser rangefinder to construct three-dimensional environmental meshes. The core hardware features an ARM Cortex-M4F microcontroller that drives a stepper motor and interfaces with the sensor using the inter-integrated circuit protocol. The sensor captures radial distance measurements at discrete angular intervals to generate cross-sectional data slices. This data is transmitted over a serial connection to a host computer running a Python application. The host software applies trigonometric transformations to convert the polar data into Cartesian coordinates and renders an interactive point cloud using the Open3D library.",
    tags: ["C/C++", "Microcontrollers", "Python", "Open3D", "I2C"],
  },
  {
    title: "Vital-E: ESP32 Autonomous Hospital Robot",
    year: "Feb 2025",
    repo: "https://github.com/Kurtis24/UtraHacks",
    blurb:
      "Vital-E is an autonomous robotic platform built around the ESP32 microcontroller to monitor patient health in low-resource clinical settings. The robot relies on a color sensor and line-following logic to navigate hospital corridors and reach patient bedsides. Once in position, the system lowers an articulated arm equipped with a heart rate sensor to capture physiological readings. A proximity sensor ensures the hardware aligns safely with the patient during data collection. The ESP32 then wirelessly transmits the acquired vital signs to a secure web dashboard for continuous monitoring by medical staff.",
    tags: ["ESP32", "C/C++", "Embedded Systems", "Sensors", "Web Dashboard"],
  },
];



const skills = [
  {
    group: "Languages & frameworks",
    items: ["C/C++", "Verilog", "Python", "Java", "JavaScript", "SQL", "Spring Boot", "React.js"],
  },
  {
    group: "Embedded systems & hardware",
    items: [
      "VHDL",
      "FPGAs",
      "Digital Logic Design",
      "Circuit Design",
      "PCB Design",
      "Microcontrollers",
      "ESP32",
      "Raspberry Pi",
      "Digital Signal Processing",
      "Multithreading",
    ],
  },
  {
    group: "Tools & technologies",
    items: [
      "JUnit",
      "Mockito",
      "Git",
      "Azure",
      "Jira",
      "Confluence",
      "Simulink",
      "Quartus",
      "LTspice",
    ],
  },
];

const education = [
  {
    school: "McMaster University",
    degree: "Bachelor of Engineering, Computer Engineering (Co-op)",
    place: "Hamilton, ON",
    period: "Sep 2023 - May 2028",
    logo: mcmasterLogo.url,
    points: [
      "Currently in 4th year, expected to graduate in 2028.",
      "Coursework across digital logic design, microelectronics, embedded systems and computer architecture.",
    ],
  },
];

function SocialButtons() {
  const base =
    "group inline-flex items-center gap-2 rounded-full border border-sand/30 bg-sand/5 px-5 py-3 text-base font-medium text-sand backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-sand hover:text-navy-deep";
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href={LINKS.github} target="_blank" rel="noreferrer" className={base}>
        <Github className="h-4 w-4" /> GitHub
      </a>
      <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className={base}>
        <Linkedin className="h-4 w-4" /> LinkedIn
      </a>
      <a href={LINKS.email} className={base}>
        <Mail className="h-4 w-4" /> Email
      </a>
    </div>
  );
}

function TopBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sand/10 bg-navy-deep/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-3">
        <span className="eyebrow text-sand">Computer Engineer</span>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="link-underline text-sm font-medium text-sand/70 transition-colors hover:text-sand"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function LogoBadge({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width={56}
      height={56}
      loading="lazy"
      className="h-14 w-14 shrink-0 rounded-xl border border-border object-cover"
    />
  );
}

function Index() {
  const scrollY = useScrollY();

  return (
    <main className="bg-background">
      <TopBar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-deep">
        <img
          src={contour.url}
          alt=""
          width={1573}
          height={1047}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40"
          style={{ transform: `translate3d(0, ${scrollY * 0.25}px, 0) scale(1.15)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/55 to-navy-deep" />


        <div className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-6 py-28">
          <h1 className="rise-in text-5xl font-medium leading-[1.02] text-sand sm:text-7xl">
            Pasandu
            <br />
            Sirisena
          </h1>
          <p className="eyebrow rise-in mt-5 text-sand-muted">Toronto, ON</p>
          <p className="rise-in mt-6 max-w-2xl text-xl leading-relaxed text-sand/80">
            4th year computer engineering student at McMaster University, with a passion for digital
            logic design, FPGA development, and high-performance compute architectures. I specialize
            in bridging the gap between hardware architecture and low-level firmware to build
            efficient embedded systems.
          </p>
          <div className="rise-in mt-10">
            <SocialButtons />
          </div>
        </div>

        <WaveDivider fillClassName="text-background" className="absolute bottom-0 left-0" />
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-20 bg-background">
        <div className="mx-auto max-w-5xl px-6 pb-16 pt-24">
          <h2 className="text-4xl font-medium sm:text-5xl">Experience</h2>
          <p className="eyebrow mt-2 text-muted-foreground">Where I've worked</p>

          <div className="mt-10 space-y-4">
            {experience.map((e) => (
              <article
                key={e.role + e.org}
                className="rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-navy-soft/40"
              >
                <div className="flex items-start gap-4">
                  <LogoBadge src={e.logo} alt={`${e.org} logo`} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-2xl font-medium">{e.role}</h3>
                      <p className="text-sm text-muted-foreground">{e.period}</p>
                    </div>
                    <p className="mt-1 text-base text-muted-foreground">
                      {e.org} · {e.place}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 max-w-3xl space-y-1.5">
                  {e.points.map((pt) => (
                    <li
                      key={pt}
                      className="relative pl-4 text-base leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-navy-soft/50"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 bg-background">
        <div className="mx-auto max-w-5xl px-6 pb-24 pt-8">
          <h2 className="text-4xl font-medium sm:text-5xl">Projects</h2>
          <p className="eyebrow mt-2 text-muted-foreground">Selected works</p>

          <div className="mt-10 space-y-4">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-navy-soft/40"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-2xl font-medium">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.year}</p>
                </div>
                <ul className="mt-3 max-w-3xl space-y-1.5">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="relative pl-4 text-base leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-navy-soft/50"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-20 bg-background">
        <div className="mx-auto max-w-5xl px-6 pb-24">
          <h2 className="text-4xl font-medium sm:text-5xl">Skills</h2>
          <p className="eyebrow mt-2 text-muted-foreground">What I work with</p>

          <div className="mt-10 space-y-6">
            {skills.map((s) => (
              <div key={s.group} className="border-t border-border pt-5">
                <h3 className="text-xl font-medium">{s.group}</h3>
                <ul className="mt-3 flex flex-wrap gap-2.5">
                  {s.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-full border border-border bg-card px-5 py-2 text-base text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-sm hover:bg-navy-deep hover:text-sand"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-20 bg-background">
        <div className="mx-auto max-w-5xl px-6 pb-24">
          <h2 className="text-4xl font-medium sm:text-5xl">Education</h2>
          <p className="eyebrow mt-2 text-muted-foreground">Where I study</p>

          <div className="mt-10 space-y-4">
            {education.map((ed) => (
              <article
                key={ed.school}
                className="rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-navy-soft/40"
              >
                <div className="flex items-start gap-4">
                  <LogoBadge src={ed.logo} alt={`${ed.school} logo`} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-2xl font-medium">{ed.school}</h3>
                      <p className="text-sm text-muted-foreground">{ed.period}</p>
                    </div>
                    <p className="mt-1 text-base text-muted-foreground">
                      {ed.degree} · {ed.place}
                    </p>
                  </div>
                </div>
                <ul className="mt-4 max-w-3xl space-y-1.5">
                  {ed.points.map((pt) => (
                    <li
                      key={pt}
                      className="relative pl-4 text-base leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-navy-soft/50"
                    >
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <WaveDivider fillClassName="text-navy-deep" />
      </section>

      {/* Contact */}
      <footer id="contact" className="scroll-mt-20 bg-navy-deep">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="max-w-2xl text-4xl font-medium text-sand sm:text-5xl">
            Currently looking for future opportunities in design verification and AI chip workflows.
          </h2>
          <p className="eyebrow mt-3 text-sand-muted">Let's connect!</p>
          <p className="mt-4 max-w-xl text-lg text-sand/75">
            Always glad to talk hardware, low-level software, or anything in between.
          </p>

          <div className="mt-8">
            <SocialButtons />
          </div>

          <div className="mt-20 border-t border-sand/15 pt-6 text-sm text-sand/55">
            <span>© {new Date().getFullYear()} Pasandu Sirisena</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
