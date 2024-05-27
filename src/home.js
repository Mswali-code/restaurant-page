import "./home.css";
import Firstimage from "./assets/cooking.jpg";
import Secondimage from "./assets/table-set.jpg";
import Thirdimage from "./assets/chairs.jpg";
import Fourthimage from "./assets/shrimp.jpg";
import Fifthimage from "./assets/food4.jpg";
import Sixthimage from "./assets/meat.jpg";
import Seventhimage from "./assets/smiling-woman.jpg";
import Eighthimage from "./assets/smiling-man.jpg";
import Ninthimage from "./assets/woman.jpg";
 
export default function(renderHome) {

    const homeContent = document.querySelector("#content");

    const homeDiv = document.createElement("div");
    homeDiv.classList.add("home-div");

    const sliderContainer = document.createElement("section");
    sliderContainer.classList.add("slider-container");

    const sliderCarousel = document.createElement("div");
    sliderCarousel.classList.add("slider-carousel");

    const imageContainer1 = document.createElement("div");
    imageContainer1.classList.add("images");
    const image1 = new Image();
    image1.src = Firstimage;
    image1.classList.add("nested-image");
    const imageText1 = document.createElement("div");
    imageText1.classList.add("image-text");
    
    const arrowButton1 = document.createElement("button");
    arrowButton1.classList.add("arrow-button");
    const downArrow1 = document.createElement("div");
    downArrow1.classList.add("down-arrow");
    arrowButton1.appendChild(downArrow1);
    arrowButton1.addEventListener("click", function() {
      popularFoodContainer.scrollIntoView({ behavior: 'smooth' });
    });

    imageText1.appendChild(arrowButton1);
    imageContainer1.appendChild(image1);
    imageContainer1.appendChild(imageText1);

    const imageContainer2 = document.createElement('div');
    imageContainer2.classList.add("images");
    const image2 = new Image();
    image2.src = Secondimage;
    image2.classList.add("nested-image");
    const imageText2 = document.createElement("div");
    imageText2.classList.add("image-text");

    const arrowButton2 = document.createElement("button");
    arrowButton2.classList.add("arrow-button");
    const downArrow2 = document.createElement("div");
    downArrow2.classList.add("down-arrow");
    arrowButton2.appendChild(downArrow2);
    arrowButton2.addEventListener("click", function() {
      popularFoodContainer.scrollIntoView({ behavior: 'smooth' }); 
    });

    imageText2.appendChild(arrowButton2);
    imageContainer2.appendChild(image2);
    imageContainer2.appendChild(imageText2);

    const imageContainer3 = document.createElement('div');
    imageContainer3.classList.add("images");
    const image3 = new Image();
    image3.src = Thirdimage;
    image3.classList.add("nested-image");
    const imageText3 = document.createElement("div");
    imageText3.classList.add("image-text");

    const arrowButton3 = document.createElement("button");
    arrowButton3.classList.add("arrow-button");
    const downArrow3 = document.createElement("div");
    downArrow3.classList.add("down-arrow");
    arrowButton3.appendChild(downArrow3);
    arrowButton3.addEventListener("click", function() {
      popularFoodContainer.scrollIntoView({ behavior: 'smooth' });
    });
    
    imageText3.appendChild(arrowButton3);
    imageContainer3.appendChild(image3);
    imageContainer3.appendChild(imageText3);

    const circleNavigation = document.createElement("div");
    circleNavigation.classList.add("circle-navigation");

    const circle1 = document.createElement("button");
    circle1.classList.add("circle");
    circle1.classList.add("active");
    circleNavigation.appendChild(circle1);

    const circle2 = document.createElement("button");
    circle2.classList.add("circle");
    circleNavigation.appendChild(circle2);

    const circle3 = document.createElement("button");
    circle3.classList.add("circle");
    circleNavigation.appendChild(circle3);

    let slideIndex = 0;
    showSlides();
    
    function showSlides(){
        let i;
        const slides = [imageContainer1, imageContainer2, imageContainer3];
        let circles = [circle1, circle2, circle3]

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        for (i = 0; i < circles.length; i++) {
            circles[i].className = circles[i].className.replace(" active", "");
          }
        slides[slideIndex-1].style.display = "block"; 
        circles[slideIndex-1].className += " active"; 
        setTimeout(showSlides, 6000);
      
    };

    sliderCarousel.appendChild(imageContainer1);
    sliderCarousel.appendChild(imageContainer2);
    sliderCarousel.appendChild(imageContainer3);
    sliderContainer.appendChild(sliderCarousel);
    sliderContainer.appendChild(circleNavigation);
    homeDiv.appendChild(sliderContainer);

    const popularFoodContainer = document.createElement("section");
    popularFoodContainer.classList.add("popular-food-container");

    const popularFoodTitle = document.createElement("h1");
    popularFoodTitle.classList.add("popular-food-title");
    popularFoodTitle.textContent = "Try Our Popular Menu";
    popularFoodContainer.appendChild(popularFoodTitle);

    const popularFoodDescription = document.createElement("p");
    popularFoodDescription.classList.add("popular-food-description");
    popularFoodDescription.textContent = "Discover our most celebrated dishes, handpicked by our chef and adored by our guests. These are a must-try that keeps everyone coming back for more. Don’t miss out!Culinary delights, customer favorites and among the heart and soul of our menu!";
    popularFoodContainer.appendChild(popularFoodDescription);

    const hr = document.createElement("hr");
    popularFoodContainer.appendChild(hr);

    const dishCardContainer = document.createElement("div");
    dishCardContainer.classList.add("dish-card-container");
    popularFoodContainer.appendChild(dishCardContainer);

    const dishes = [
        { 
          imgSrc: Fourthimage,
          name: "Scrumptious Shrimp Salad",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum gravida ipsum non volutpat.",
          rating: "&#9733;&#9733;&#9733;&#9733;&#9733;",
          price: "Ksh 800"
        },
        {
          imgSrc: Fifthimage,
          name: "Delicious Soup",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos eaque nostrum exercitationem sint consectetur nemo quae accusantium voluptate enim quam, maiores distinctio aliquam cum amet sed dolorem beatae vero!",
          rating: "&#9733;&#9733;&#9733;&#9733;&#9733;",
          price: "Ksh 1000"
        },
        { 
          imgSrc: Sixthimage,
          name: "Delicious Meat Stew",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos eaque nostrum exercitationem sint consectetur nemo quae accusantium voluptate enim quam, maiores distinctio aliquam cum amet sed dolorem beatae vero! ",
          rating: "&#9733;&#9733;&#9733;&#9733;&#9733;",
          price: "Ksh 1100"
        },
    ];

    dishes.forEach(dish => {

        const dishCard = document.createElement("div");
        dishCard.classList.add("dish-card");
    
        const dishImage = new Image();
        dishImage.src = dish.imgSrc;
        dishImage.classList.add("dish-image");
        dishImage.alt = dish.name;
    
        const dishContent = document.createElement("div");
        dishContent.classList.add("dish-content");
    
        dishContent.innerHTML = `
          <h3> ${dish.name} </h3>
          <p> ${dish.description} </p>
          <div class="ratings">
            <span class="star-rating">${dish.rating}</span>
            <span class="price">${dish.price}</span>
          </div>
        `;

        dishCard.appendChild(dishImage);
        dishCard.appendChild(dishContent);
    
        dishCardContainer.appendChild(dishCard);
    });    

    homeDiv.appendChild(popularFoodContainer);

    const customerReviews = [
      {
          imgSrc: Seventhimage,
          name: "Jane Doe",
          stars: "&#9733;&#9733;&#9733;&#9733;&#9733;",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dignissimos dolore, accusantium et quod possimus atque vel ipsum quidem nobis harum inventore repellat sapiente eum laboriosam tenetur!",
          date: "May 17, 2024"

      },
      {
          imgSrc: Eighthimage,
          name: "John Doe",
          stars: "&#9733;&#9733;&#9733;&#9733;&#9733;",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dignissimos dolore, accusantium et quod possimus atque vel ipsum quidem nobis harum inventore repellat sapiente eum laboriosam tenetur!",
          date: "May 10, 2024"
      },
      {
          imgSrc: Ninthimage,
          name: "Doe Jane",
          stars: "&#9733;&#9733;&#9733;&#9733;&#9733;",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dignissimos dolore, accusantium et quod possimus atque vel ipsum quidem nobis harum inventore repellat sapiente eum laboriosam tenetur!.",
          date: "April 30, 2024"
      }
    ];

    const restaurantReview = document.createElement("section");
    restaurantReview.classList.add("restaurant-review");

    const reviewTitle = document.createElement("h1");
    reviewTitle.classList.add("review-title");
    reviewTitle.textContent = "WHY CHOOSE US";
    restaurantReview.appendChild(reviewTitle);

    const chooseUsText = document.createElement("p");
    chooseUsText.classList.add("choose-us-text");
    chooseUsText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
    restaurantReview.appendChild(chooseUsText);

    const reviewhr = document.createElement("hr");
    restaurantReview.appendChild(reviewhr);

    const reviewContainer = document.createElement("div");
    reviewContainer.classList.add("review-container");
    restaurantReview.appendChild(reviewContainer);

    customerReviews.forEach(review => {
      const reviewCard = document.createElement("div");
      reviewCard.classList.add("review-card");

      const customerImage = new Image();
      customerImage.classList.add("customer-image");
      customerImage.src = review.imgSrc;

      const customerName = document.createElement("h3");
      customerName.classList.add("customer-name");
      customerName.textContent = review.name;

      const starRatings = document.createElement("span");
      starRatings.classList.add("ratings-star");
      starRatings.innerHTML = review.stars;

      const reviewParagraph = document.createElement("p");
      reviewParagraph.textContent = review.review;

      const reviewDate = document.createElement("h5");
      reviewDate.classList.add("review-date");
      reviewDate.textContent = review.date; 

      reviewCard.appendChild(customerImage);

      reviewCard.appendChild(customerName);
      reviewCard.appendChild(starRatings);
      reviewCard.appendChild(reviewParagraph);
      reviewCard.appendChild(reviewDate);

      reviewContainer.appendChild(reviewCard);
    });

    const moreReviews = document.createElement("button");
    moreReviews.classList.add("more-reviews-button");
    moreReviews.textContent = "LOAD MORE";
    restaurantReview.appendChild(moreReviews);

    homeDiv.appendChild(restaurantReview);

    const subscriptionSection = document.createElement("section");
    subscriptionSection.classList.add("subscription-section");

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");

    inputContainer.innerHTML = `
        <h2>Subscribe for Updates</h2>
        <p>Receive the latest dining updates directly to your inbox!</p>
        <form>
            <input type="text" id="name" name="name"  placeholder="Name"><br>
            <input type="email" id="email" name="email" placeholder="Email Address"><br>
            <input type="submit" value="Subscribe">
        </form>
    `;

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");


    infoContainer.innerHTML = `
        <h2>About Our Newsletter</h2>
        <p>Get the latest dining offers delivered straight to your inbox! From special promotions and happy hour deals to unique meal bundles and exclusive event invites, there's always something exciting on the menu. Enjoy loyalty rewards and seasonal specials that celebrate fresh, innovative flavors. Subscribe now and stay in the know!</p>
    `;

    subscriptionSection.append(inputContainer, infoContainer);

    homeDiv.appendChild(subscriptionSection);

    homeContent.appendChild(homeDiv);
};
