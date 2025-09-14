 const imageData = [
      {
        url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        text: "Explore the world"
      },
      {
        url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        text: "Wild Forest"
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
        text: "City on Winter"
      },
      {
        url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        text: "Mountain Cloud"
      },
      {
        url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        text: "Sunny Beach"
      }
    ];

    const container = document.querySelector('.container');

    // Build DOM using a fragment (efficient) and carefully set required attributes
    const frag = document.createDocumentFragment();

    imageData.forEach((item, i) => {
      const panel = document.createElement('div');

      // must have class "panel"
      panel.className = (i === 0) ? 'panel active' : 'panel';

      // must have ids panel-1, panel-2, ...
      panel.id = `panel-${i + 1}`;

      // background image — keep quotes to be consistent
      panel.style.backgroundImage = 'url("' + item.url + '")';

      // accessibility: role and tabindex so keyboard tests work
      panel.setAttribute('role', 'button');
      panel.setAttribute('tabindex', '0');
      panel.setAttribute('aria-label', item.text);

      // text element with required class "img-text"
      const textEl = document.createElement('h3');
      textEl.className = 'img-text';
      textEl.textContent = item.text;

      panel.appendChild(textEl);
      frag.appendChild(panel);
    });

    container.appendChild(frag);

    // Event delegation: single listener handles clicks on any panel
    container.addEventListener('click', (e) => {
      const panel = e.target.closest('.panel');
      if (!panel) return;
      setActive(panel);
    });

    // Keyboard support — activate on Enter or Space
    container.addEventListener('keydown', (e) => {
      const panel = e.target.closest('.panel');
      if (!panel) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setActive(panel);
      }
    });

    // Ensure only one active at a time
    function setActive(panel) {
      const panels = container.querySelectorAll('.panel');
      panels.forEach(p => {
        if (p === panel) p.classList.add('active');
        else p.classList.remove('active');
      });
    }