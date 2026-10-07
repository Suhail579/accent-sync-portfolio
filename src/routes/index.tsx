import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown, Moon, Sun, Code2, MapPin, Mail, ChevronRight, GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Muhammed Suhail K.S | Python Full Stack Developer" },
    { name: "description", content: "Muhammed Suhail K.S, Python full stack developer in Kochi. Explore Django and React projects, technical skills, experience and education." },
    { property: "og:title", content: "Muhammed Suhail K.S | Developer Portfolio" },
    { property: "og:description", content: "Python, Django and React development. Explore Suhail’s projects and experience in Kochi, Kerala." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Portfolio,
});
const email = "suhailnasim579@gmail.com";
const skills = [
  { title: "Languages", items: ["Python", "JavaScript", "HTML5", "CSS", "SQL"] },
  { title: "Frameworks & libraries", items: ["Django", "React.js", "RESTful APIs", "MVT Architecture", "Bootstrap 5"] },
  { title: "Tools & platforms", items: ["Git", "GitHub", "VS Code", "PyCharm", "Postman", "PythonAnywhere"] },
  { title: "Databases & integrations", items: ["MySQL", "SQLite", "Razorpay API"] },
];
const projects = [
  { name: "C2C Marketplace", category: "Customer-to-Customer · Full Stack", summary: "A marketplace platform where users can register, log in, and list products for sale.", features: ["Cars, bikes, mobiles, electronics, furniture, fashion and books", "User authentication and OTP-based account verification"], type: "marketplace" },
  { name: "E-Commerce", category: "C2C · Full Stack", summary: "A complete e-commerce web application, from database design to front-end delivery.", features: ["Authentication, authorization, order processing and payments", "Responsive interfaces, deployed live on PythonAnywhere"], type: "commerce" },
];
const links = ["About", "Skills", "Experience", "Projects", "Contact"];
function Portfolio() {
  const [light, setLight] = useState(false);
  const [ready, setReady] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    setReady(true);
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <div className={`portfolio ${light ? "light" : "dark"}`}>
    <div className={`preloader ${ready ? "loaded" : ""}`} aria-hidden="true"><Code2 /></div>
    <header className="site-header"><div className="nav-inner">
      <a href="#home" className="wordmark" aria-label="Suhail home">suhail<span>.</span></a>
      <nav aria-label="Main navigation" className={menu ? "nav-links open" : "nav-links"}>{links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenu(false)}>{link}</a>)}</nav>
      <div className="nav-tools"><Button variant="ghost" size="icon" aria-label={light ? "Switch to dark theme" : "Switch to light theme"} title={light ? "Dark theme" : "Light theme"} onClick={() => setLight(!light)}>{light ? <Moon /> : <Sun />}</Button><Button className="mobile-menu" variant="ghost" size="icon" aria-label="Toggle navigation" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</Button></div>
    </div></header>
    <main>
      <section className="hero section-inner" id="home">
        <div className="hero-copy">
          <div className="eyebrow rise rise-1"><span className="status-dot" /> PYTHON FULL STACK DEVELOPER</div>
          <h1 className="rise rise-2">Muhammed<br/><span className="name-grad">Suhail K.S</span><span className="name-period">.</span></h1>
          <p className="hero-role rise rise-3">Software Developer</p>
          <p className="hero-summary rise rise-4">Building complete web platforms,<br className="desktop-break"/> from database design to front-end delivery.</p>
          <div className="hero-actions rise rise-5"><Button size="lg" asChild className="shine-btn bg-grad"><a href="#projects">Explore my work <ArrowUpRight /></a></Button><Button variant="outline" size="lg" asChild><a href={`mailto:${email}`}>Let’s connect <Mail /></a></Button></div>
          <div className="hero-chips rise rise-6">{["Python", "Django", "React.js"].map((s,i) => <span key={s} className={`chip-float d${i}`}><Code2 size={14}/>{s}</span>)}</div>
        </div>
        <div className="portrait-area rise rise-3"><div className="portrait-glow glow-anim"/><div className="portrait-frame portrait-float"><img src={portrait.url} alt="Muhammed Suhail K.S seated outdoors"/><div className="portrait-caption"><span className="status-dot"/><span>DEVELOPER. PROBLEM SOLVER.</span><ArrowUpRight size={18}/></div></div><span className="portrait-index">01 / THE DEVELOPER</span></div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={16}/></a>
      </section>
      <div className="intro-strip"><div className="section-inner strip-inner"><span><MapPin size={16}/> Kochi, Kerala</span><span>Python · Django · React.js</span><span>Full-stack development <ArrowUpRight size={16}/></span></div></div>
      <section className="section-inner content-section reveal" id="about"><div className="section-heading"><span className="section-number">01 / ABOUT</span><h2>A little about <span className="text-grad">me.</span></h2></div><div className="about-grid"><p className="about-lead">From the database<br/>to the details.</p><div><p>Python Full Stack Developer skilled in developing complete web platforms from database design through front-end delivery, including authentication, payment integration, and responsive UI.</p><p>Strong problem-solving ability and a track record of shipping and deploying live projects independently. Hands-on experience building and deploying database-driven web applications using Python, Django, React.js, and SQL.</p><div className="soft-skills">{["Communication", "Time management", "Creativity", "Research"].map(s => <span key={s}>{s}</span>)}</div></div></div></section>
      <section className="skills-band" id="skills"><div className="section-inner content-section reveal"><div className="section-heading"><span className="section-number">02 / SKILLS</span><h2>My development <span className="text-grad">toolkit.</span></h2></div><div className="skills-grid">{skills.map((group,i) => <div className="skill-group" key={group.title}><span className="skill-icon">0{i+1} <Code2 size={20}/></span><h3>{group.title}</h3><div className="skill-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>
      <section className="section-inner content-section reveal" id="experience"><div className="section-heading"><span className="section-number">03 / EXPERIENCE</span><h2>Learning by <span className="text-grad">building.</span></h2></div><div className="timeline"><div className="timeline-company"><span className="timeline-dot"/><p>Luminar Technolab</p><span><MapPin size={14}/> Kochi</span></div><div className="timeline-detail"><span className="small-label">INTERNSHIP</span><h3>Python Full Stack Developer Intern</h3><p>Working as a full-stack developer intern across Python, Django, React.js, JavaScript, REST APIs, and SQL.</p><p>Building functional, database-driven web applications as part of a collaborative development team.</p></div></div></section>
      <section className="section-inner content-section reveal" id="projects"><div className="section-heading"><span className="section-number">04 / PROJECTS</span><h2>Ideas turned into <span className="text-grad">applications.</span></h2></div><div className="project-grid">{projects.map((project,i) => <article className="project-card" key={project.name}><div className={`project-art ${project.type}`} aria-hidden="true"><div className="mini-window"><div className="mini-top"><i/><i/><i/><span>{project.type === "marketplace" ? "C2C / MARKETPLACE" : "C2C / COMMERCE"}</span></div><div className="mini-layout"><div className="mini-sidebar"><span/><span/><span/><span/></div><div className="mini-products">{[0,1,2].map(n => <div key={n}><div className={`product-shape shape-${n}`}/><span/><span/></div>)}</div></div></div><span className="project-art-label">FULL STACK / 0{i+1}</span></div><div className="project-content"><p className="small-label">{project.category}</p><h3>{project.name}</h3><p>{project.summary}</p><ul>{project.features.map(f => <li key={f}><ChevronRight size={14}/>{f}</li>)}</ul></div></article>)}</div></section>
      <section className="education-band"><div className="section-inner content-section reveal"><div className="section-heading"><span className="section-number">05 / EDUCATION</span><h2>The <span className="text-grad">foundation.</span></h2></div><div className="education-row"><GraduationCap size={32}/><div><h3>Diploma</h3><p>M.G University</p><p>State Board of Technical Education and Training</p></div><span>2024–25</span></div><div className="languages"><span className="small-label">LANGUAGES</span><span>English</span><span>Malayalam</span><span>Hindi</span></div></div></section>
      <section className="section-inner contact-section reveal" id="contact"><span className="section-number">06 / CONTACT</span><h2>Let’s build something<br/><span className="text-grad">together.</span></h2><a className="contact-email" href={`mailto:${email}`}>{email}<ArrowUpRight/></a><div className="contact-details"><span><MapPin size={16}/>Kochi, Kerala</span><span>+91 9746431691</span></div></section>
    </main>
    <footer className="section-inner footer"><a href="#home" className="wordmark">suhail<span>.</span></a><span>Muhammed Suhail K.S · Software Developer</span><a href="#home" className="back-top" aria-label="Back to top"><ArrowUpRight size={18}/></a></footer>
  </div>;
}
