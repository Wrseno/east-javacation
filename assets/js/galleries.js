import destinations from "./data.js";

let gallery = document.querySelector("#grid-gallery");

destinations.map((item) => {
  gallery.innerHTML += `
        <div
              data-modal-target="${item.id}"
              data-modal-toggle="${item.id}"
              class="${item.size} image-wrapper relative overflow-hidden"
            >
              <img
                src=${item.image}
                alt=${item.description} 
                class="w-full h-full rounded hover:rounded transition duration-300 cursor-pointer fade-in"
              />
              <div
                class="absolute bottom-0 p-4 bg-gradient-to-t from-mixed100 w-full"
              >
                <h3 class="text-sm md:text-md font-semibold text-white text-start">
                  ${item.description}
                </h3>
              </div>
            </div>
            <div
              id="${item.id}"
              tabindex="-1"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative p-4 w-full max-w-4xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div class="text-center">
                    <img
                      src=${item.image}
                      alt=${item.description}
                      class="w-full h-full rounded"
                    />
                    <div
                      class="absolute bottom-0 p-4 bg-gradient-to-t from-mixed100 w-full"
                    >
                      <h3
                        class="text-sm md:text-md font-semibold text-white text-start"
                      >
                        ${item.description}
                      </h3>
                    </div>
                    <button
                      data-modal-hide="${item.id}"
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
            </div>
    `;
});
