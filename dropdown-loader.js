fetch('nav-dropdown.html')
  .then(res => res.text())
  .then(html => {
    const container = document.getElementById('dropdown-placeholder');
    container.innerHTML = html;

    const input = container.querySelector("#combo-search");
    const listbox = container.querySelector("#combo-list");

    function renderOptions(query = "") {
      const value = query.toLowerCase();
      listbox.innerHTML = "";
      listbox.style.display = "block";

      const filtered = window.siteLintPages.filter(p =>
        p.label.toLowerCase().includes(value)
      );

      filtered.forEach((page, index) => {
        const li = document.createElement("li");
        li.id = "option-" + index;
        li.role = "option";
        li.textContent = page.label;
        li.tabIndex = 0;
        li.dataset.href = page.value;
        li.addEventListener("click", () => {
          window.location.href = page.value;
        });
        listbox.appendChild(li);
      });
    }

    input?.addEventListener("input", () => {
      renderOptions(input.value);
    });

    input?.addEventListener("keydown", (e) => {
      const options = listbox.querySelectorAll('[role="option"]');
      if (e.key === "ArrowDown") {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % options.length;
        updateActiveOption(options);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + options.length) % options.length;
        updateActiveOption(options);
      } else if (e.key === "Enter" && currentIndex >= 0) {
        e.preventDefault();
        options[currentIndex].click();
      }
    });

    input?.addEventListener("focus", () => {
      renderOptions();
    });

    input?.addEventListener("blur", () => {
      setTimeout(() => {
        listbox.style.display = "none";
      }, 150); // Delay to allow click events to register
    });

    function updateActiveOption(options) {
      options.forEach((opt, idx) => {
        if (idx === currentIndex) {
          opt.setAttribute("aria-selected", "true");
          input.setAttribute("aria-activedescendant", opt.id);
          opt.focus();
        } else {
          opt.removeAttribute("aria-selected");
        }
      });
    }

    let currentIndex = -1;
    listbox.style.display = "none";
  });