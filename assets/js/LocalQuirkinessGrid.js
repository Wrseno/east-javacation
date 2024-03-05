import {dances, foods} from "./data.js";

let dancesHtml = document.querySelector("#grid-dances");
let foodsHtml = document.querySelector("#grid-foods");

dances.map((item) => {
  dancesHtml.innerHTML += `
        <div
              data-modal-target="${item.id}"
              data-modal-toggle="${item.id}"
              class="${
                item.size
              } image-wrapper relative overflow-hidden fade-in"
            >
              <img
                src=${item.image_url}
                alt=${item.title} 
                class="object-cover w-full h-full hover:scale-125 transition duration-300 cursor-pointer"
              />
              <div
                class="absolute bottom-0 p-4 bg-gradient-to-t from-mixed100 w-full"
              >
                <h3 class="text-lg md:text-2xl font-semibold text-white text-start">
                  ${item.title}
                </h3>
                <p class="text-white">${item.description.substring(0, 50)}..</p>
              </div>
            </div>
            <div
            id=${item.id}
            tabindex="-1"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-screen md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div class="relative p-4 w-full max-w-4xl max-h-full text-white">
            <div class="relative rounded-lg shadow shadow-white backdrop-blur">
                <div class="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <img
                    src=${item.image_url}
                    alt=${item.title}
                    loading="lazy"
                    class="object-cover w-full h-full"
                    />
                </div>
                <div class="p-6">
                    <h1 class="text-2xl">${item.title}</h1>
                    <p class="text-white mb-4">${item.city}</p>
                    <p>
                    ${item.description}
                    </p>
                </div>
                </div>
                <button
                data-modal-hide=${item.id}
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

foods.map((item) => {
  foodsHtml.innerHTML += `
        <div
              data-modal-target="${item.id}"
              data-modal-toggle="${item.id}"
              class="${
                item.size
              } image-wrapper relative overflow-hidden fade-in"
            >
              <img
                src=${item.image_url}
                alt=${item.title} 
                class="object-cover w-full h-full hover:scale-125 transition duration-300 cursor-pointer"
                loading="lazy"
              />
              <div
                class="absolute bottom-0 p-4 bg-gradient-to-t from-mixed100 w-full"
              >
                <h3 class="text-lg md:text-2xl font-semibold text-white text-start">
                  ${item.title}
                </h3>
                <p class="text-white">${item.description.substring(0, 50)}..</p>
              </div>
            </div>
            <div
            id=${item.id}
            tabindex="-1"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-screen md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div class="relative p-4 w-full max-w-4xl max-h-full text-white">
            <div class="relative rounded-lg shadow shadow-white backdrop-blur">
                <div class="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <img
                    src=${item.image_url}
                    alt=${item.title}
                    loading="lazy"
                    class="object-cover w-full h-full"
                    />
                </div>
                <div class="p-6">
                    <h1 class="text-2xl">${item.title}</h1>
                    <p class="text-white mb-4">${item.city}</p>
                    <p>
                    ${item.description}
                    </p>
                </div>
                </div>
                <button
                data-modal-hide=${item.id}
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
