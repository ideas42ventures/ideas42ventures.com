function openMobileMenu() {
  var menu = document.getElementById("banner__mobile");
  menu.style.display = "block";

  var content = document.getElementById("content");
  content.style.display = "none";

  menu.focus();
}

function closeMobileMenu() {
  var menu = document.getElementById("banner__mobile");
  menu.style.display = "none";

  var content = document.getElementById("content");
  content.style.display = "block";

  content.focus();
}

window.addEventListener("DOMContentLoaded", () => {
  function showFormSuccess(form, msgEl, text) {
    form.reset();
    msgEl.innerHTML = text;
    msgEl.classList.remove("hidden");
  }

  function showFormError(msgEl, text) {
    msgEl.innerHTML = text;
    msgEl.classList.remove("hidden");
  }

  function toggleFormBtn(btn, state = "on") {
    if (state === "off") {
      btn.classList.add("btn--disabled");
      btn.innerText = "Subscribing....";
      return;
    }
    btn.classList.remove("btn--disabled");
    btn.innerText = "Subscribe";
  }

  [...document.querySelectorAll(".newsletter-form")].forEach((form) => {
    const msgEl = form.querySelector(".form__msg");
    const btn = form.querySelector("button[type=submit]");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const url = form.getAttribute("action");
      const body = new URLSearchParams(new FormData(form)).toString();

      toggleFormBtn(btn, "off");

      fetch(url, {
        method: "post",
        body,
      })
        .then((res) => {
          toggleFormBtn(btn);
          return res.json();
        })
        .then((data) => {
          if (data.statusCode === 400) {
            throw new Error(data.message);
          }
          showFormSuccess(form, msgEl, data.message);
          return;
        })
        .catch((err) => {
          if (err instanceof SyntaxError) {
            showFormError(
              msgEl,
              "Sorry, something went wrong on our end. Please try again"
            );
          } else {
            showFormError(msgEl, err);
          }
        });
    });
  });

  try {
    [...document.querySelectorAll("a[data-fathom-goal]")].forEach((a) => {
      a.addEventListener("click", (e) => {
        const goalId = e.target.getAttribute("data-fathom-goal");
        if (window.fathom) {
          window.fathom.trackGoal(goalId, 0);
        }
      });
    });
  } catch (err) {
    console.warning(
      "Hit a JavaScript programming error trying to add Fathom goal tracking."
    );
  }
});
