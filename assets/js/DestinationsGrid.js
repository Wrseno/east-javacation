import {destinations} from "./data.js";
console.log(destinations);

let destinationsGrid = document.querySelector("#destinations-grid");

destinations.map((item) => {
  destinationsGrid.innerHTML += `
        <div data-modal-target=${item.modal} data-modal-toggle=${item.modal} 
        class="${item.size} relative overflow-hidden image-wrapper fade-in ">
            <img
            src=${item.image}
            alt=${item.title}
            loading="lazy"
            class="object-cover w-full h-full hover:scale-125 transition duration-300 cursor-pointer"
            />
            <div
            class="absolute bottom-0 p-4 bg-gradient-to-t from-mixed100 w-full"
            >
            <h3
                class="text-sm md:text-md lg:text-lg font-semibold text-white text-start"
            >
                ${item.title}
            </h3>
            <p class="text-white">${item.city}</p>
            </div>
        </div>
        <div
            id=${item.modal}
            tabindex="-1"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-screen md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div class="relative p-4 w-full max-w-4xl max-h-full text-white">
            <div class="relative rounded-lg shadow shadow-white backdrop-blur-lg">
                <div class="grid grid-cols-1 lg:grid-cols-4">
                <div class="col-span-2">
                    <img
                    src=${item.image}
                    alt=${item.title}
                    loading="lazy"
                    class="object-cover w-full h-full"
                    />
                </div>
                <div class="p-6 col-span-2">
                    <h1 class="text-2xl">${item.title}</h1>
                    <p class="text-white mb-4">${item.city}</p>
                    <p>
                    ${item.description}
                    </p>
                    <div class="w-1/2 text-center bg-gradient-to-r from-primary to-secondary p-2 my-2 rounded">
                      <a href=${item.gmaps_url} target=_blank>See on Gmaps</a>
                    </div>
                </div>
                </div>
                <button
                data-modal-hide=${item.modal}
                type="button"
                class="absolute top-0 right-0 p-4"
                >
                <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                </button>
            </div>
            </div>
        </div>
    `;
});

function scrollToModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.scrollIntoView({behavior: "smooth", block: "center"});
  }
}

// Function to open the modal based on the query parameter
function openModalFromUrl() {
  var urlParams = new URLSearchParams(window.location.search);
  var openModalId = urlParams.get("openModal");
  if (openModalId) {
    var modal = document.getElementById(openModalId);
    if (modal) {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      modal.setAttribute("aria-modal", "true");
      modal.setAttribute("role", "dialog");
      document.body.classList.add("overflow-hidden");
      var bg = document.getElementById("bg-modal");
      if (bg) {
        bg.classList.remove("hidden");
        bg.classList.add(
          "bg-gray-900/50",
          "dark:bg-gray-900/80",
          "fixed",
          "inset-0",
          "z-40"
        );
        bg.setAttribute("modal-backdrop", "");
      }
      scrollToModal(openModalId);
    }
  }
}

// Function to close the modal
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    var bg = document.getElementById("bg-modal");
    if (bg) {
      bg.remove();
    }
  }
}

// Close the modal when the close button is clicked
var closeBtns = document.querySelectorAll("[data-modal-hide]");
closeBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var modalId = this.getAttribute("data-modal-hide");
    closeModal(modalId);
  });
});

// Open the modal specified in the URL when the page loads
window.addEventListener("load", function () {
  openModalFromUrl();
});
