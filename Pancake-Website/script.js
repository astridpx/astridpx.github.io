// Object of an array
const products = [
  {
    id: 1,
    title: "Kimchi pancakes",
    category: "breakfast",
    price: 20.99,
    img: "./images/pancake1.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Chocolate pancakes",
    category: "breakfast",
    price: 12.99,
    img: "./images/pancake2.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 3,
    title: "Ube pancakes",
    category: "breakfast",
    price: 13.99,
    img: "./images/pancake3.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 4,
    title: "Spelt pancakes",
    category: "breakfast",
    price: 17.99,
    img: "./images/pancake4.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 5,
    title: "Blueberry pancakes",
    category: "breakfast",
    price: 16.99,
    img: "./images/pancake5.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 6,
    title: "Buttermilk pancakes",
    category: "breakfast",
    price: 10.99,
    img: "./images/pancake6.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 7,
    title: "Japanese Soufle",
    category: "breakfast",
    price: 25.99,
    img: "./images/pancake7.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 8,
    title: "Mini-Butter pancakes",
    category: "breakfast",
    price: 13.99,
    img: "./images/pancake8.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 9,
    title: "American pancakes",
    category: "breakfast",
    price: 18.99,
    img: "./images/pancake9.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 10,
    title: "Chocolate Jaffa ",
    category: "breakfast",
    price: 20.99,
    img: "./images/pancake10.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
];

//  Variables
const card = document.querySelector(".card");
const box = document.querySelector(".box");

window.addEventListener("DOMContentLoaded", function () {
  // Display The products in Browser
  displayProducts(products);
  displayMenuButtons();
});

// display product function
function displayProducts(menuItems) {
  //  item will access the products object
  let displayMenu = menuItems.map(function (item) {
    // console.log(item.title);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });

  displayMenu = displayMenu.join("");
  // console.log(displayMenu);
  // display in dom
  box.innerHTML = displayMenu;
}

let btnFix = document.querySelector("#button-wrapper");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  scroll >= 700
    ? btnFix.classList.add("button-wrapper")
    : btnFix.classList.remove("button-wrapper");
});

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
