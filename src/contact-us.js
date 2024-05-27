import "./contact-us.css";
import Mapimage from "./assets/map-screenshot.png";

export default function renderContact() {
    const contactContent  = document.querySelector("#content");

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-div");

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    contactContainer.innerHTML = `
        <div class="contact-wrapping">
            <h1>Contact Us</h1>
            <div class="contact-text">
                <h3>Opening hours</h3>
                <ul class="opening-hours-ul">
                    <li><span>&#x23F0;</span> Monday - Friday: 9am - 10pm</li>
                    <li><span>&#x23F0;</span> Saturday - Sunday: 10am - 11pm</li>
                </ul>
                <h3>Location</h3>
                <p class="location-paragraph">&#x1F4CD; Moi Avenue, Nairobi Kenya</p>
                <h3>Call Us</h3>
                <p class="contact-number">&#x260E; 123-456-7890</p>
                <h3>Email Address</h3>
                <p>&#x1F4E9; info@restaurant.com</p>
                <p>https.//fake-deliciare.com</p>
            </div>
        </div>    

        <div class="contact-message">
            <h1>Leave A Message</h1>
            <p>Ready to help you</p>
            <form class="contact-form">
                <input type="text" id="name" name="name" placeholder="Full Name">
            
                <input type="text" id="email" name="email" placeholder="Email Address">

                <textarea name="message" id="message" cols="30" rows="10" minlength="5" maxlength="20" placeholder="Type your message here..."></textarea>

                <button class="submit-button">Submit</button>
            </form>
        </div>
    `;
    contactDiv.appendChild(contactContainer);

    const mapContainer = document.createElement("div");
    mapContainer.classList.add("map-container");
    const image = new Image();
    image.src = Mapimage;
    image.classList.add("map-image");
    mapContainer.appendChild(image);
    contactDiv.appendChild(mapContainer);

    contactContent.appendChild(contactDiv);
};
