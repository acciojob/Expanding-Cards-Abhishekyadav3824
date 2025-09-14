//your JS code here. If required.
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

    const container = document.querySelector(".container");

    imageData.forEach((data, index) => {
      const div = document.createElement("div");
      div.classList.add("panel");
      if (index === 0) {
        div.classList.add("active"); // first one expanded by default
      }
      div.id = `panel-${index + 1}`;
      div.style.backgroundImage = `url(${data.url})`;

      const textDiv = document.createElement("div");
      textDiv.classList.add("img-text");
      textDiv.innerText = data.text;

      div.appendChild(textDiv);
      div.addEventListener("click", () => setActivePanel(div));

      container.appendChild(div);
    });

    function setActivePanel(activeDiv) {
      const panels = document.querySelectorAll(".panel");
      panels.forEach(panel => panel.classList.remove("active"));
      activeDiv.classList.add("active");
    }
