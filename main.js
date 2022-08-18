//! Increase Numbers On Scrolling
  // Vars
  let statsSection = document.querySelector('.stats');
  let nums = document.querySelectorAll('.number');
  let started = false; // Function Started ? No

  window.addEventListener('scroll', () => {
    if(window.scrollY >= statsSection.offsetTop) {
      if(!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }
  })

  // Functions
  function startCount(el) { // el stands for element
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
      el.textContent++;
      if(el.textContent == goal) {
        clearInterval(counter);
      }
    }, 2000 / goal);
  }

//! Animate Width On Scrolling
  // Vars
  let skillsSection = document.querySelector('.our-skills');
  let spans = document.querySelectorAll('.prog span');

  // Action
  window.addEventListener("scroll", () => {
    if(window.scrollY >= skillsSection.offsetTop - 700) {
      spans.forEach((span) => {
        span.style.width = span.dataset.progress;
      });
    }
  })