var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const items = document.querySelectorAll(".accordion-item");

items.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

header.addEventListener("click", () => {
  items.forEach((i) => i.classList.remove("active"));
  item.classList.add("active");
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: { value: "#00bcd4" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false },
    },
    size: {
      value: 5,
      random: true,
      anim: { enable: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#a6efff",
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      straight: false,
      out_mode: "bounce",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

function openModal(title, content) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalContent").innerHTML = content;

  const modal = new bootstrap.Modal(document.getElementById("cardModal"));
  modal.show();
}
function showFeatureCard() {
  openModal(
    "Feature Ownership",
    `<ul>
        <li>Delivered DCN Filter Features</li>
        <li>Zero post-deployment bugs</li>
        <li>Owned full lifecycle</li>
      </ul>`,
  );
}
function showFeatureCard1() {
  openModal(
    "Internship – Full Stack Development",
    `<ul>
        <li>Built backend validation logic using .NET C# and developed an OAuth testing server with Node.js & Express.js</li>
        <li>Designed and developed Angular UI for a 3P Payload Validator tool</li>
        <li>Implemented authentication using Azure Entra ID (B2C) for secure access</li>
        <li>Gained exposure to multiple enterprise products</li>
        <li>Presented project outcomes to stakeholders, strengthening communication and collaboration skills</li>
        </ul>`,
  );
}

function showFeatureCard2() {
  openModal(
    "UI Automation using Testcafe",
    `<ul>
        <li>Designed and implemented end-to-end UI automation using TestCafe for critical product workflows including reporting and asset management modules</li>
        <li>Single-handedly automated 3–4 major features, covering complex UI flows, multi-step interactions, and validation scenarios</li>
        <li>Improved test coverage from ~80% to ~95–100% by automating high-priority P1/P2 scenarios</li>
        <li>Built robust validation scripts for UI behaviors including selection constraints, tooltips, visibility rules, and state changes</li>
        <li>Stabilized automation pipelines across multiple environments by fixing failures and improving test reliability</li>
        <li>Actively monitored CI/CD pipelines, identified issues, and ensured consistent test health</li>
        <li>Enhanced QA visibility by contributing to dashboards tracking SLA breaches, defects, and quality metrics</li>
        </ul>`,
  );
}

function showFeatureCard3() {
  openModal(
    "Technical Foundations & Upskilling during initial onboarding phase.",
    `<ul>
        <li>Strengthened JavaScript fundamentals including OOP, control flow, and DOM handling</li>
        <li>Built Angular mini-projects with API integration, observables, and state management concepts</li>
        <li>Developed a mock backend using Node.js & Express for API testing and UI integration</li>
        <li>Gained hands-on experience in TestCafe automation, selectors, and test utilities</li>
        <li>Refreshed Git workflows including branching, merge conflict resolution, and version control</li>
        </ul>`,
  );
}

function showFeatureCard4() {
  openModal(
    "UI Development using Angular",
    `<ul>
        <li>Designed and developed a reusable Month Picker library from enabling scalable and consistent date-based interactions</li>
        <li>Contributed to UI development by fixing bugs and enhancing features across various asset management modules</li>
        <li>Implemented complex UI workflows including validation, filtering logic, and dynamic user interactions</li>
        <li>Delivered features involving state management and store-based architecture, ensuring predictable UI behavior</li>
        <li>Improved code quality by maintaining zero lint issues and ensuring >90% unit test coverage</li>
        <li>Ensured pipeline stability by fixing failing unit tests and maintaining build reliability</li>
        </ul>`,
  );
}

function showFeatureCard5() {
  openModal(
    "Continuous Learning & Upskilling",
    `<ul>
        <li>Completed courses in Angular (NgRx, HTTP, Unit Testing) and TypeScript</li>
        <li>Gained hands-on experience in end-to-end testing using TestCafe and Playwright</li>
        <li>Strengthened backend and cloud fundamentals with AWS services (RDS, EC2, IAM, Lambda)</li>
        <li>Completed Web Development Bootcamp and advanced frontend concepts</li>
        <li>Practiced real-world implementations including API integration, observables, and error handling</li>
      </ul>`,
  );
}
function showFeatureCard6() {
  openModal(
    "Professional Impact & Collaboration",
    `<ul>
        <li>Active contributor in agile ceremonies and team delivery</li>
        <li>Maintained high code quality and >90% test coverage</li>
        <li>Delivered consistently with ~8 story points per sprint</li>
        <li>Supported QA and cross-team initiatives</li>
        <li>Participated in hackathons and won a team poster design event</li>
      </ul >`,
  );
}
