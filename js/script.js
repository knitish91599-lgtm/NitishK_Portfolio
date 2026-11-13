document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Hero photo fallback ---------- */
const profileImg = document.getElementById('profile-img');
const heroPhoto = document.getElementById('hero-photo');
function showNoPhoto() {
  profileImg.remove();
  heroPhoto.classList.add('no-photo');
}
if (profileImg.complete && profileImg.naturalWidth === 0) {
  showNoPhoto();
} else {
  profileImg.addEventListener('error', showNoPhoto, { once: true });
}

/* ---------- Mobile nav toggle ---------- */
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ---------- Project data ----------
   EDIT THIS LIST to change the project cards.
   Each project:
     title     – project name
     icon      – emoji shown when there's no screenshot
     image     – path to a screenshot in assets/ (e.g. 'assets/my-project.png'), or null to show the icon
     status    – 'live' (shows "Code available") or 'soon' (shows "Repo coming soon")
     tags      – tech used
     desc      – 2–3 sentence description
     highlight – one standout result or metric
     github    – repo URL, or null if not public yet
   Add a project by copying one { ... } block; remove one by deleting its block.
------------------------------------ */
const projects = [
  {
    title: 'Project One',
    icon: '📊',
    image: null,
    status: 'live',
    tags: ['Python', 'Tool', 'Tool'],
    desc: 'What this project does, how it works, and what problem it solves. Two or three sentences is ideal.',
    highlight: 'One standout result — a number, a metric, or what makes it interesting.',
    github: 'https://github.com/your-username/project-one'
  },
  {
    title: 'Project Two',
    icon: '🛠️',
    image: null,
    status: 'live',
    tags: ['Tool', 'Tool', 'Tool'],
    desc: 'What this project does, how it works, and what problem it solves. Two or three sentences is ideal.',
    highlight: 'One standout result — a number, a metric, or what makes it interesting.',
    github: 'https://github.com/your-username/project-two'
  },
  {
    title: 'Project Three',
    icon: '🧠',
    image: null,
    status: 'soon',
    tags: ['Tool', 'Tool', 'Tool'],
    desc: 'A project you are still working on. Describe the idea and the approach.',
    highlight: 'What you are aiming for, or an early result.',
    github: null
  },
  {
    title: 'Project Four',
    icon: '🎯',
    image: null, // e.g. 'assets/project-four.png'
    status: 'live',
    tags: ['Tool', 'Tool', 'Tool'],
    desc: 'What this project does, how it works, and what problem it solves. Two or three sentences is ideal.',
    highlight: 'One standout result — a number, a metric, or what makes it interesting.',
    github: 'https://github.com/your-username/project-four'
  }
];

const grid = document.getElementById('projects-grid');
grid.innerHTML = projects.map(p => `
  <div class="project-card reveal">
    <div class="project-media ${p.image ? '' : 'placeholder'}">
      ${p.image ? `<img src="${p.image}" alt="${p.title} screenshot" loading="lazy">` : p.icon}
    </div>
    <div class="project-body">
      <div class="project-top-row">
        <h3>${p.title}</h3>
        <span class="project-badge ${p.status === 'live' ? 'badge-live' : 'badge-soon'}">
          ${p.status === 'live' ? 'Code available' : 'Repo coming soon'}
        </span>
      </div>
      <p class="project-desc">${p.desc}</p>
      <p class="project-highlight">${p.highlight}</p>
      <div class="tag-row">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="project-links">
        ${p.github
          ? `<a href="${p.github}" target="_blank" rel="noopener">View on GitHub ↗</a>`
          : `<span>Source pending publish</span>`}
      </div>
    </div>
  </div>
`).join('');

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));