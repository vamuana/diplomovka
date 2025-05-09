<template>
  <div class="wrapper">
    <section id="section1" class="section intro">
        <div  style="  position: relative;
  z-index: 1; text-align: center;
  animation: fadeInUp 0.6s ease-out both;">
          <p style="color: white; font-size: 1.5rem">Nauč sa programovať so zvieratkami z lesa!</p>
          <h1>Prírodní bádatelia</h1>
          <p style="color: white">Diplomová práca</p>
          <a href="/pdfs/zadaniePrace.pdf" download class="btn">Bc. Vanesa Šoošová</a>
        </div>
    </section>

    <section id="section2" class="section project">
      <div class="card">
        <h2>O projekte</h2>
        <p>
          Vzdelávacia aplikácia pre deti v predškolskom veku a 1.-3. ročník
          ZŠ, ktorá spája prírodu, lesné zvieratká a základy algoritmického mysleni, učí základné koncepty informatiky a programovania prostredníctvom
          interakcie tým, že kombinuje vizuálne programovanie, príbeh a hru. Deti sa učia programovať
          hravou formou pomocou lesných príbehov a postavičiek. Deti
          plnia rôzne úlohy, pričom spoznávajú rôzne informatické koncepty, akými
          sú sekvencie, cykly a podmienky. Tieto koncepty sú prezentované hravou
          formou, pri zostavovaní programov sa využíva ťahanie príkazov. Okrem spätnej
          väzby v podobe animácií a primeranej prezentácie chýb prostredie poskytuje
          aj priestor na experimentovanie a pre kreativitu. Súčasťou práce je výskum
          zameraný na použiteľnosť aplikácie v školskom prostredí.
        </p>
        <a href="/pdfs/zadaniePrace.pdf" download class="btn">Stiahnuť zadanie práce</a>
      </div>
    </section>

    <section id="section3" class="section goals">
      <div class="card">
        <h2>Ciele projektu</h2>
        <div class="goals__grid">
          <div>Rozvíjať logické a algoritmické myslenie</div>
          <div>Vzbudzovať záujem o prírodu</div>
          <div>Motivovať deti pomocou hier a príbehov</div>
          <div>Prepojiť hravosť s edukáciou</div>
          <div>Použiteľnosť v (pred)školskom prostredí</div>
          <div>Porovnanie znalostí detí pred a po používaní aplikácie</div>
        </div>
      </div>
    </section>

    <section id="section4" class="section calendar">
      <div class="card">
        <h2>Kalendár úloh</h2>
        <div class="list-group">
          <h3>Splnené úlohy</h3>
          <ul>
            <li>01.03 – Naštudovanie prvotnej literatúry</li>
            <li>01.04 – Návrh hlavných postáv</li>
            <li>30.04 – Návrh hier a herných módov</li>
            <li>10.05 – Namodelované postavy</li>
            <li>12.05 – Tvorba storyboardov</li>
            <li>15.05 – Pripavenie Unity úvodného rozhrania</li>
          </ul>
        </div>
        <div class="list-group">
          <h3>Plánované úlohy</h3>
          <ul>
            <li>15.06 – Implementácia 1. módu - Líška</li>
            <li>30.06 – Implementácia 2. módu - Veverička</li>
            <li>15.07 – Implementácia 3. módu - Zajac</li>
            <li>30.07 – Implementácia 4. módu - Medveď</li>
            <li>15.08 – Implementácia 5. módu - Sova</li>
            <li>?30.10 – Prvé testovanie s deťmi</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="section5" class="section downloads">
      <div class="card">
        <h2>Verzie na stiahnutie</h2>
        <table>
          <thead>
          <tr>
            <th>Verzia</th>
            <th>Popis</th>
            <th>Dátum</th>
            <th>Súbor</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>v1.0</td>
            <td>Prvé modely zvierat - Blender</td>
            <td>09.05.2025</td>
            <td><a href="/downloads/v1.0.pdf">Stiahnuť zip</a></td>
          </tr>
         <!-- <tr>
            <td>v1.1 (beta)</td>
            <td>Opravené chyby, nové úlohy</td>
            <td>20.04.2025</td>
            <td><a href="/downloads/v1.1.pdf">Stiahnuť PDF</a></td>
          </tr>-->
          </tbody>
        </table>
      </div>
    </section>
  </div>
  <nav class="nav-dots">
    <a href="#section1"></a>
    <a href="#section2"></a>
    <a href="#section3"></a>
    <a href="#section4"></a>
    <a href="#section5"></a>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const observer = ref<IntersectionObserver | null>(null)
onMounted(() => {
  const sections = document.querySelectorAll<HTMLElement>('.section')
  const dots     = document.querySelectorAll<HTMLAnchorElement>('.nav-dots a')
  observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            dots.forEach(dot =>
                dot.classList.toggle('active', dot.getAttribute('href') === `#${id}`)
            )
          }
        })
      },
      {
        root:      document.querySelector('.wrapper'),
        threshold: 0.6,
      }
  )
  sections.forEach(sec => observer.value!.observe(sec))
})
</script>


<style>
html, body, #__nuxt {
  height: 100%; margin: 0; overflow: hidden;
  font-family: 'Inter', sans-serif;
}
.wrapper {
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overscroll-behavior-y: contain;
}
.section {
  position: relative;
  height: 100vh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  transition: filter 0.8s ease-out;
}
.section::before {
  content: ''; position: absolute; inset: 0;
  background: rgba(0,0,0,0.25); pointer-events: none;
}
.section:not(.intro) { justify-content: flex-end; }
.intro     { background-image: url('/forest-background.png'); }
.project   { background-image: url('/bg-project.png'); }
.goals     { background-image: url('/bg-goals.png'); }
.calendar  { background-image: url('/bg-calendar.png'); }
.downloads { background-image: url('/bg-downloads.png'); }
.card {
  z-index: 1;
  max-width: 600px; width: 100%;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(8px);
  padding: 2rem; border-radius: 1rem;
  box-shadow: 0 12px 32px rgba(0,0,0,0.12);
  animation: fadeInUp 0.6s ease-out both;
}
@keyframes fadeInUp {
  from { opacity:0; transform: translateY(30px) }
  to   { opacity:1; transform: translateY(0) }
}
h1 { font: 800 6rem/1 'Inter', sans-serif; color:#fff; text-shadow:2px 2px 8px rgba(0,0,0,0.6); margin-bottom:.5rem }
h2 { font: 600 2.25rem/1 'Inter', sans-serif; color:#38a169; margin-bottom:1rem }
.section h3 { font:600 1.125rem 'Inter', sans-serif; color:#276749; margin-bottom:.5rem }
.card p, .card li, .card td { font-size:1rem; line-height:1.6; color:#2d3748 }
.goals__grid {
  display:grid; grid-template-columns:repeat(auto-fit, minmax(220px,1fr));
  gap:1rem; margin-top:1rem;
}
.goals__grid>div {
  background:#f0fff4; padding:1rem; border-radius:.5rem;
  box-shadow:0 6px 18px rgba(0,0,0,0.1);
}
.list-group { margin-bottom:1.5rem }
.list-group ul { list-style:none; padding-left:1.25rem }
.list-group li {
  position:relative; margin-bottom:.5rem; padding-left:1.25rem
}
.list-group li::before {
  content:'•'; position:absolute; left:0; color:#38a169
}
table {
  width:100%; border-collapse:collapse; border-radius:.5rem;
  overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,0.1)
}
thead { background:#c6f6d5 }
th, td { padding:.75rem 1rem; text-align:left }
tbody tr:nth-child(even) { background:#f7fafc }
tbody tr:hover { background:#e6fffa }
.btn {
  display:inline-block; margin-top:1rem;
  background:#ed8936; color:#fff; padding:.75rem 1.75rem;
  border-radius:9999px; font-weight:600; text-decoration:none;
  box-shadow:0 6px 18px rgba(0,0,0,0.15);
  transition:transform .2s, background .2s
}
.btn:hover {
  background:#dd6b20; transform:translateY(-2px)
}
.nav-dots {
  position:fixed; top:50%; right:1rem;
  transform:translateY(-50%);
  display:flex; flex-direction:column; gap:.75rem;
  z-index:3;
}
.nav-dots a {
  width:.75rem; height:.75rem;
  border-radius:50%;
  background:rgba(255,255,255,.6);
  transition:background .2s;
}
.nav-dots a:hover,
.nav-dots a.active {
  background:#ed8936;
}
</style>
