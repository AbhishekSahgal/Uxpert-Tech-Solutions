"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    revealElements.forEach((element) => observer.observe(element));

    const anchors = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    );
    const handlers = anchors.map((anchor) => {
      const onClick = (event: Event) => {
        event.preventDefault();
        const targetSelector = anchor.getAttribute("href");
        if (!targetSelector) return;
        const target = document.querySelector(targetSelector);
        if (target) {
          window.scrollTo({
            top: (target as HTMLElement).offsetTop - 64,
            behavior: "smooth",
          });
        }
      };
      anchor.addEventListener("click", onClick);
      return { anchor, onClick };
    });

    return () => {
      observer.disconnect();
      handlers.forEach(({ anchor, onClick }) =>
        anchor.removeEventListener("click", onClick)
      );
    };
  }, []);

  return (
    <div className="uxpert-page bg-[#f7f9fb] text-[#191c1e]">
      <nav className="fixed top-0 z-[100] w-full border-b border-[#c6c6cd] bg-[#f7f9fb]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
          <div className="flex cursor-pointer items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#0f172a] font-black text-white">
              U
            </div>
            <span className="text-xl font-bold tracking-tight">Uxpert Tech Solutions</span>
          </div>
          <div className="hidden gap-8 md:flex">
            <a className="text-sm font-medium text-[#45464d] hover:text-[#0f172a]" href="#projects">Solutions</a>
            <a className="text-sm font-medium text-[#45464d] hover:text-[#0f172a]" href="#about">About</a>
            <a className="text-sm font-medium text-[#45464d] hover:text-[#0f172a]" href="#tech">Stack</a>
            <a className="text-sm font-medium text-[#45464d] hover:text-[#0f172a]" href="#process">Process</a>
          </div>
          <Link
            href="/start-project"
            className="rounded bg-[#0f172a] px-5 py-2 text-sm font-semibold text-white transition-all hover:opacity-90"
          >
            Start Your Project
          </Link>
        </div>
      </nav>

      <header className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f9fb] pt-16">
        <div className="grid-pattern absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="max-w-4xl">
            <div className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-[#c6c6cd] bg-[#f2f4f6] px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0f172a]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#45464d]">Available for new projects</span>
            </div>
            <h1 className="reveal mb-8 text-[clamp(40px,7vw,80px)] font-bold leading-[1.05] tracking-tight">
              Building <br />
              <span className="text-gradient">Scalable Products</span> <br />
              For Modern Startups
            </h1>
            <p className="reveal mb-12 max-w-xl text-lg leading-relaxed text-[#45464d] md:text-xl">
              High-performance apps, SaaS platforms, and premium digital experiences engineered to scale from initial concept to global millions.
            </p>
            <div className="reveal flex flex-wrap gap-4" style={{ transitionDelay: "0.2s" }}>
              <Link
                href="/start-project"
                className="rounded bg-[#0f172a] px-8 py-4 font-bold text-white"
              >
                Start Your Project
              </Link>
              <button className="technical-card rounded bg-white px-8 py-4 font-bold">View Portfolio</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center opacity-20">
          <div className="flex h-8 w-5 justify-center rounded-full border-2 border-black/40 p-1">
            <div className="h-2 w-1 rounded-full bg-black" />
          </div>
        </div>
      </header>

      <section className="border-y border-[#c6c6cd] bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {[
              ["2+", "Years Experience"],
              ["30+", "GitHub Repos"],
              ["2+", "Published Apps"],
              ["100%", "Code Quality"],
            ].map(([value, label], idx) => (
              <div className="reveal" key={label} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="mb-2 text-4xl font-black text-[#0f172a]">{value}</div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#45464d]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fb] py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal mb-20">
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f172a]">Expertise</h2>
            <h3 className="text-4xl font-bold tracking-tight text-[#191c1e] md:text-5xl">
              Full-Cycle Digital <br />
              Product Engineering
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["SaaS Platforms", "Multi-tenant architectures built for infinite horizontal scalability and security."],
              ["Mobile Apps", "Native-performance experiences using React Native and Flutter frameworks."],
              ["UI/UX Design", "Modern, precision-engineered interfaces with focus on user psychology and flow."],
            ].map(([title, body], idx) => (
              <div key={title} className="reveal technical-card group rounded-lg bg-white p-10" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded border border-[#c6c6cd] bg-[#f2f4f6] transition-colors group-hover:bg-[#0f172a] group-hover:text-white">
                  <span className="material-symbols-outlined">
                    {idx === 0 ? "cloud_queue" : idx === 1 ? "smartphone" : "palette"}
                  </span>
                </div>
                <h4 className="mb-4 text-xl font-bold">{title}</h4>
                <p className="leading-relaxed text-[#45464d]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fb] py-32" id="projects">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal mb-10">
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f172a]">Selected Work</h2>
            <h3 className="text-4xl font-bold tracking-tight md:text-5xl">Crafting Excellence</h3>
          </div>
          <div className="bento-grid">
            <div className="reveal technical-card group relative col-span-12 h-[600px] overflow-hidden rounded-2xl bg-white p-8 md:p-12 lg:col-span-8">
              <img
                alt="Target GATE"
                className="absolute inset-0 h-full w-full object-cover opacity-10 transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKoV2G_ZA3vm1HI8cTBLgxfQmbT-QIGmzpI8jrfvo6UnKL7M6vNHkN0fZ32RrhI5yh9iRAGDJe44HVobGTE7ii-yZ5Qu1dPGoB6mSOU6olGH4PWhroyUOw68y-3XpAdAC29Aiud03TmHAQXc6j5KGch6g-qqlSU6C4oobVvfqpxLW8eVlXCyePGz9tVIWJzMZelq9jLHuPT1E1ZuV-udbqLoTXy0wbjjpshzpbL4znThWIr6jcL5ahafUTPlTvb7RNGAxf2Vx4WXrK"
              />
              <div className="relative z-10 flex h-full flex-col justify-end">
                <span className="mb-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0f172a]">
                  EDTECH MOBILE APP
                </span>
                <h4 className="mb-6 max-w-md text-4xl font-bold text-[#191c1e]">Target GATE Prep Ecosystem</h4>
                <div className="flex gap-2">
                  <span className="rounded border border-[#c6c6cd] bg-white px-3 py-1 text-[10px] font-medium">
                    React Native
                  </span>
                  <span className="rounded border border-[#c6c6cd] bg-white px-3 py-1 text-[10px] font-medium">
                    Firebase
                  </span>
                </div>
              </div>
            </div>
            <div className="reveal technical-card group relative col-span-12 h-[600px] overflow-hidden rounded-2xl bg-white p-8 md:p-10 lg:col-span-4" style={{ transitionDelay: "0.1s" }}>
              <img
                alt="Fable"
                className="absolute inset-0 h-full w-full object-cover opacity-10 transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBci-m9SI6ZoLGq5S4x3_dKMJP98yWVWobspPK1-h40Dzdi4uIVaWuAhpmsUrjVqeR1C8-rhOdtrM3u4AtI7-NXPWQyiEx_b_cBOtOZ4KePeh94K9IPKlvmCvY9rdgAPmCZXlFKHSDiI_QAvgkG8iqk8fKA6XlPD4JLSRtwVspHwF-oatWisrvzbSX72Z7KUR10BmhvvNdE3AVk9O1PGAy5Qhwip57A0scHovj5woDOMy4Bru0XGxikrzkdWJ5TfWKVH7eFRa1kcW48"
              />
              <div className="relative z-10 flex h-full flex-col justify-end">
                <span className="mb-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0f172a]">
                  SAAS PLATFORM
                </span>
                <h4 className="mb-6 text-3xl font-bold text-[#191c1e]">Fable eBook Reader</h4>
                <div className="flex gap-2">
                  <span className="rounded border border-[#c6c6cd] bg-white px-3 py-1 text-[10px] font-medium">
                    Vue.js
                  </span>
                  <span className="rounded border border-[#c6c6cd] bg-white px-3 py-1 text-[10px] font-medium">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
            <div className="reveal technical-card group relative col-span-12 h-[450px] overflow-hidden rounded-2xl bg-white p-8 md:p-10 lg:col-span-6" style={{ transitionDelay: "0.2s" }}>
              <img
                alt="Butterfly"
                className="absolute inset-0 h-full w-full object-cover opacity-10 transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMdf5vUhk0uORaEnNAClphmfPNteDJ2c1PxzV4mh1NKfcgIOr08dt3bngCj309wipQ8wne897sSi216nBJh_yRDQrXWI45Yvcpi0GZHL9m68O2S1ZEVVT9VD_ajevPDQlvsnQrzRYW4Ok0K7MiaInd6EusBt4e96eG0C8elA5b1fA2IAkkWg95G6UEE0IZi5cuBezv3qpo7pv_7ClGi-endXpxh1hMuLVqydQePuc0Oj7Ko_RX85kWZZL7prJvwIDPJ-NKbsAB427G"
              />
              <div className="relative z-10 flex h-full flex-col justify-end">
                <span className="mb-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0f172a]">REAL ESTATE</span>
                <h4 className="text-3xl font-bold text-[#191c1e]">Butterfly Living</h4>
              </div>
            </div>
            <div className="reveal technical-card group relative col-span-12 h-[450px] overflow-hidden rounded-2xl bg-white p-8 md:p-10 lg:col-span-6" style={{ transitionDelay: "0.3s" }}>
              <img
                alt="Sanctuary"
                className="absolute inset-0 h-full w-full object-cover opacity-10 transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_KpqpCG12NJaA-caD_OPf8EBvtLrE2VmdFVAIoTFAVa-jU_xjoagaW4UNn--9C7Ztahg1rwkpffPeBd4AKoFfyy8HVHF0jNl9Fk_0t583IlX5AwSkH3H4ho2plSAsdb4w8A_J2q3eHFYqqiC8sBD2FcyRGAWyeN9KQSnl_3uAQlYSM3NE4WEOQeORvfOUSaCL8X13bW8lKquF4zw0gSjUwhdM1ZtFbIlbulI4hs1IzDRRlqSaCcplLAWulz7PABpEv_q-OMyzMmMS"
              />
              <div className="relative z-10 flex h-full flex-col justify-end">
                <span className="mb-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0f172a]">ENTERPRISE OS</span>
                <h4 className="text-3xl font-bold text-[#191c1e]">Sanctuary Ecosystem</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-32" id="about">
        <div className="mx-auto grid w-full max-w-7xl gap-24 px-6 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="relative z-10 aspect-square overflow-hidden rounded-lg border border-[#c6c6cd] bg-[#eceef0]">
              <img
                alt="Abhay Sahgal"
                className="h-full w-full object-cover grayscale brightness-105 transition-all duration-700 hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2u0n7qscfotZHkOhilsPj7mYZlsyH9OsiSpsvDCAAV4jwLX_lWfNTq7LTmzfR8X1nc9PCZ0WWlG6r9EvDbiOXtWUd6AlZTXV8MrH00wqhc2jXycOnbRK9lZaXtm9EnJcZ_FgMiAg10GUuJTzi8iL3msDApxQq6xy34VwXDFroGtRM4HdXetwBgXh4MNctP6SYRFDftkyTyOZKINFbNHFJG2paQ3Yz705Mf2GzfRNP-NvwvNPak9ZzBHTIjmMIrse1K4PgnzQny0zZ"
              />
            </div>
            <div className="absolute -left-12 -top-12 h-48 w-48 bg-[#0f172a]/5 blur-[100px]" />
          </div>
          <div className="reveal">
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f172a]">Lead Architect</h2>
            <h3 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">Abhay Sahgal</h3>
            <p className="mb-10 text-xl leading-relaxed text-[#45464d]">
              Based in India, I lead Uxpert Tech Solutions with a singular mission: to bring clean architecture and premium user experience to every project. My expertise in React Native allows me to bridge the gap between complex engineering and intuitive design.
            </p>
            <div className="grid gap-4">
              {[
                ["verified", "Architectural Excellence Guaranteed"],
                ["location_on", "Headquartered in India"],
                ["code_off", "Zero-Legacy Codebase Policy"],
              ].map(([icon, text]) => (
                <div key={text} className="flex items-center gap-4 rounded border border-[#c6c6cd] bg-white p-4">
                  <span className="material-symbols-outlined text-[#0f172a]">{icon}</span>
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eceef0] py-32" id="tech">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal mb-14 text-center">
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f172a]">Infrastructure</h2>
            <h3 className="text-4xl font-bold tracking-tight md:text-5xl">Our Core Technology Stack</h3>
          </div>
          <div className="reveal flex flex-wrap justify-center gap-4">
            {[
              ["terminal", "React Native"],
              ["security", "TypeScript"],
              ["dns", "Node.js"],
              ["api", "NestJS"],
              ["database", "Firebase"],
              ["draw", "Figma"],
              ["flutter_dash", "Flutter"],
            ].map(([icon, item]) => (
              <div key={item} className="technical-card flex items-center gap-3 rounded-lg bg-white px-8 py-4 text-sm font-semibold">
                <span className="material-symbols-outlined text-[#0f172a]">{icon}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fb] py-32" id="process">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="reveal mb-20 text-center">
            <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f172a]">Methodology</h2>
            <h3 className="text-4xl font-bold tracking-tight md:text-5xl">The Path to Deployment</h3>
          </div>
          <div className="grid gap-8 lg:grid-cols-4">
            {[
              [
                "Discovery",
                "In-depth requirement gathering and user journey mapping.",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB11-Os1lh_rd4nopdCwTpCb8za1HqxaZJXoT53PjP9hz0jaQVTl7ExGABhXxW3W25Lojt2ec1jHhTuHmvz5EimjAenIxM2B6TZXb72igt29fpnUZUjLmiUbHbIWVHL9WQhks8qMSW_iKN3LULQDafZWcXL2lcHMVYwVB7NdIoMQXfKnt2Hv1HgrNTGCtMWBxykV9ZorcRfgsS3sslMAg_O39PPVwIun-exOUZ7SXefcZtkmWE3r0T40rrTGYrBwMe2qQ0PeTHFq29z",
              ],
              [
                "Architecture",
                "Technical planning of scalable cloud infrastructure.",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDa8d3Orchr8zuIqFI3KcoMh8IDQ2mrnoR4elpRU9-2pTJkqZXdhSI5iQMcpRUqxJhhBZeu1tO_3bwLZTeb4CNS7ArsZV1A1FUeIfDj8SrD5QrXeGuXesQwUoBnx8A2vrOTjtfOiMk2Zie2RHP6iz-I2IucCgPf1vduR2vKOmcVuKDp6MqTCZEX0iY8fOCdT5cqV7Fa0Fm0ZFC4nzD9fkcqm0rux_UlgtoEgd9TZhfmPS2qG5fOnDX-Sog2q7H37ObmWZDNtfEHA2Xx",
              ],
              [
                "Development",
                "Agile sprints with 100% test coverage and clean code.",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCPBlkpqgiktaluzI8hcT4Bf5LJfO3oLpS5Jy-b7CAjVTyka5NVv5qzeYfgSoSJqOTk4ob3vQJPIDAf9NkBWJKZ70AkgHOM9Yi9AlWY5OLHNtEBY61IEOvd2fTc5DQKYMI0TXBb3jMqWgnlDjpXsVvSDF1bfSeTVr1QWgavR-LEVjCBRYRRzS_FtnK-__qTqd32MS5T5qCNKRA_PZtZZc57tzRbOMhCGKn7ChNUDslWaAddyCmCywPnqBY4sOJ110jdIWaCazkOkyh8",
              ],
              [
                "Launch",
                "Continuous deployment and post-launch monitoring.",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBpyZDWYxTH8qD4a9qbWXnItPKVNx3QtcCYl8Mi5r0yfOXz_D06Dl1CYWwbV17vUnTpwnjvyUgmvg4CaFnU9vQhavjgoQ5QTjPmS3zhUGOl8GfY0rQIgxfGwQVy-wCsgznGNw29hnkLurpR3T4gwDsw4g_hMvk5ZpGFrpzvveyxZMhUApUGMw66iVEzrKBGC9UuA4SIOEdHxqp3tx1u05vCv5O1eIJ778y-UivYBzCO9UVcDWrd1GEhB4eBAx5Nw7B7QdF7aXvrVIaW",
              ],
            ].map(([step, description, image], idx) => (
              <div className="reveal group relative" key={step} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="absolute -left-4 -top-8 text-7xl font-black text-[#c6c6cd] opacity-20">{`0${idx + 1}`}</div>
                <div className="relative pt-12">
                  <h4 className="mb-4 text-xl font-bold">{step}</h4>
                  <p className="mb-6 text-sm text-[#45464d]">{description}</p>
                  <div className="technical-card aspect-video overflow-hidden rounded">
                    <img
                      alt={step}
                      className="h-full w-full object-cover grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                      src={image}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eceef0] py-32">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {[
              [
                "Uxpert Tech delivered our MVP in record time without compromising on code quality. The React Native expertise Abhay brought to the table was exactly what we needed.",
                "Sneha Verma",
                "Founder, Butterfly Real Estate",
                "SV",
              ],
              [
                "The attention to detail in the UI and the robustness of the backend architecture surpassed our expectations. Truly a premium experience working with this team.",
                "Rohit Sharma",
                "Product Lead, Target App",
                "RS",
              ],
            ].map(([quote, name, role, initials], idx) => (
              <div key={name} className="reveal technical-card flex flex-col justify-between rounded-2xl bg-white p-12" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="mb-8 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={`${name}-star-${i}`} className="material-symbols-outlined fill-current text-lg text-[#0f172a]">
                      star
                    </span>
                  ))}
                </div>
                <p className="mb-12 text-2xl italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded border border-[#c6c6cd] bg-[#eceef0] font-bold text-[#0f172a]">
                    {initials}
                  </div>
                  <div>
                    <div className="font-bold">{name}</div>
                    <div className="text-sm text-[#45464d]">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f9fb] py-32" id="contact">
        <div className="grid-pattern absolute inset-0 opacity-40" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
          <div className="technical-card rounded-2xl bg-white p-8 md:p-16">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="reveal">
                <h2 className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-[#0f172a]">Get In Touch</h2>
                <h3 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">Ready to build something extraordinary?</h3>
                <p className="mb-12 text-xl leading-relaxed text-[#45464d]">
                  Tell us about your vision and let&apos;s craft a digital product that stands out in the modern market.
                </p>
                <div className="space-y-6">
                  <div className="group flex cursor-pointer items-center gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded border border-[#c6c6cd] transition-colors group-hover:bg-[#0f172a] group-hover:text-white">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase text-[#45464d]/60">Email Us</div>
                      <div className="text-lg font-bold">hello@uxpert.tech</div>
                    </div>
                  </div>
                  <div className="group flex cursor-pointer items-center gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded border border-[#c6c6cd] transition-colors group-hover:bg-[#0f172a] group-hover:text-white">
                      <span className="material-symbols-outlined">public</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase text-[#45464d]/60">Location</div>
                      <div className="text-lg font-bold">Remote / India (IST)</div>
                    </div>
                  </div>
                </div>
              </div>
              <form className="reveal space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#45464d]">Name</label>
                    <input className="w-full rounded border border-[#c6c6cd] bg-[#f2f4f6] px-6 py-4 outline-none transition-all placeholder:text-[#45464d]/40 focus:border-[#0f172a]" placeholder="John Doe" type="text" />
                  </div>
                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#45464d]">Email</label>
                    <input className="w-full rounded border border-[#c6c6cd] bg-[#f2f4f6] px-6 py-4 outline-none transition-all placeholder:text-[#45464d]/40 focus:border-[#0f172a]" placeholder="john@company.com" type="email" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#45464d]">Project Type</label>
                  <select className="w-full appearance-none rounded border border-[#c6c6cd] bg-[#f2f4f6] px-6 py-4 outline-none transition-all focus:border-[#0f172a]">
                    <option>Mobile App (React Native)</option>
                    <option>SaaS Platform</option>
                    <option>UI/UX Design</option>
                    <option>Enterprise Software</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[#45464d]">Message</label>
                  <textarea className="w-full rounded border border-[#c6c6cd] bg-[#f2f4f6] px-6 py-4 outline-none transition-all placeholder:text-[#45464d]/40 focus:border-[#0f172a]" placeholder="Tell us about your project goals..." rows={5} />
                </div>
                <button className="w-full rounded bg-[#0f172a] py-5 font-bold text-white transition-all hover:shadow-xl">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#c6c6cd] bg-white py-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 px-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#0f172a] text-[10px] font-black text-white">U</div>
              <span className="text-xl font-bold tracking-tight">Uxpert Tech Solutions</span>
            </div>
            <p className="text-sm text-[#45464d]">© 2024 Uxpert Tech Solutions. Precise engineering for the future.</p>
          </div>
          <div className="flex gap-8 text-sm font-medium text-[#45464d]">
            <a className="transition-opacity hover:text-[#0f172a]" href="#">LinkedIn</a>
            <a className="transition-opacity hover:text-[#0f172a]" href="#">GitHub</a>
            <a className="transition-opacity hover:text-[#0f172a]" href="#">Twitter</a>
            <a className="transition-opacity hover:text-[#0f172a]" href="#">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
