import "./menu.css";
import Firstimage from "./assets/shrimp.jpg";
import Secondimage from "./assets/food4.jpg";
import Thirdimage from "./assets/meat.jpg";
import Fourthimage from "./assets/special-mix.jpg";

export default function renderMenu() {

    const menuContent = document.querySelector("#content");

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-div");

    const dishCardContainer = document.createElement("div");
    dishCardContainer.classList.add("dish-card-container");

    const dishes = [
        {
            imgSrc: Firstimage,
            name: "Scrumptious Shrimp Salad",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum gravida ipsum non volutpat.",
            order: "Order Now",
            price: "Ksh 800"
        },
        {
            imgSrc: Secondimage,
            name: "Delicious Soup",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos eaque nostrum exercitationem sint consectetur nemo quae accusantium voluptate enim quam, maiores distinctio aliquam cum amet sed dolorem beatae vero!",
            order: "Order Now",
            price: "Ksh 1000"
        },
        { 
            imgSrc: Thirdimage,
            name: "Delicious Meat Stew",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos eaque nostrum exercitationem sint consectetur nemo quae accusantium voluptate enim quam, maiores distinctio aliquam cum amet sed dolorem beatae vero! ",
            order: "Order Now",
            price: "Ksh 1100"
        },
        {
            imgSrc: Fourthimage,
            name: "Chef's special",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos eaque nostrum exercitationem sint consectetur nemo quae accusantium voluptate enim quam, maiores distinctio aliquam cum amet sed dolorem beatae vero! ",
            order: "Order Now",
            price: "Ksh 1200"
        },
        {
            imgSrc: Firstimage,
            name: "Scrumptious Shrimp Salad",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum gravida ipsum non volutpat.",
            order: "Order Now",
            price: "Ksh 800"
        },
        {
            imgSrc: Secondimage,
            name: "Delicious Soup",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos eaque nostrum exercitationem sint consectetur nemo quae accusantium voluptate enim quam, maiores distinctio aliquam cum amet sed dolorem beatae vero!",
            order: "Order Now",
            price: "Ksh 1000"
        },
        { 
            imgSrc: Thirdimage,
            name: "Delicious Meat Stew",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos eaque nostrum exercitationem sint consectetur nemo quae accusantium voluptate enim quam, maiores distinctio aliquam cum amet sed dolorem beatae vero! ",
            order: "Order Now",
            price: "Ksh 1100"
        },
        {
            imgSrc: Fourthimage,
            name: "Chef's special",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos eaque nostrum exercitationem sint consectetur nemo quae accusantium voluptate enim quam, maiores distinctio aliquam cum amet sed dolorem beatae vero! ",
            order: "Order Now",
            price: "Ksh 1200"
        },
        {
            imgSrc: Firstimage,
            name: "Scrumptious Shrimp Salad",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum gravida ipsum non volutpat.",
            order: "Order Now",
            price: "Ksh 800"
        },
        {
            imgSrc: Secondimage,
            name: "Delicious Soup",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos eaque nostrum exercitationem sint consectetur nemo quae accusantium voluptate enim quam, maiores distinctio aliquam cum amet sed dolorem beatae vero!",
            order: "Order Now",
            price: "Ksh 1000"
        },
        { 
            imgSrc: Thirdimage,
            name: "Delicious Meat Stew",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos eaque nostrum exercitationem sint consectetur nemo quae accusantium voluptate enim quam, maiores distinctio aliquam cum amet sed dolorem beatae vero! ",
            order: "Order Now",
            price: "Ksh 1100"
        },
        {
            imgSrc: Fourthimage,
            name: "Chef's special",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos eaque nostrum exercitationem sint consectetur nemo quae accusantium voluptate enim quam, maiores distinctio aliquam cum amet sed dolorem beatae vero! ",
            order: "Order Now",
            price: "Ksh 1200"
        },      
    ];

    dishes.forEach(dish => {

        const dishCard = document.createElement("div");
        dishCard.classList.add("menu-dish-card");
    
        const dishImage = new Image();
        dishImage.src = dish.imgSrc;
        dishImage.classList.add("dish-image");
        dishImage.alt = dish.name;
    
        const dishContent = document.createElement("div");
        dishContent.classList.add("dish-content");
    
        dishContent.innerHTML = `
          <h3> ${dish.name} </h3>
          <p> ${dish.description} </p>
          <div class="more-dish-info">
            <button class="order-button">${dish.order}</button>
            <span class="price">${dish.price}</span>
          </div>
        `;

        dishCard.appendChild(dishImage);
        dishCard.appendChild(dishContent);
    
        dishCardContainer.appendChild(dishCard);
    }); 

    menuDiv.appendChild(dishCardContainer);

    menuContent.appendChild(menuDiv);
};