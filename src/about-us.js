import "./about-us.css";
import founder from "./assets/smiling-woman2.jpg";
import chef from "./assets/chef.jpg";
import chef2 from "./assets/chef2.jpg";
import chef3 from "./assets/chef3.jpg";

export default function renderAbout() {

    const aboutContent = document.querySelector("#content");

    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("about-div");

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const aboutNestedContainer = document.createElement("div");
    aboutNestedContainer.classList.add("about-nested-container");
    const aboutTitle = document.createElement("h1");
    aboutTitle.classList.add("about-title");
    aboutTitle.textContent = "About Us";
    aboutNestedContainer.appendChild(aboutTitle);
    const abouthr = document.createElement("hr");
    abouthr.classList.add("about-hr");
    aboutNestedContainer.appendChild(abouthr);
    const aboutParagraph = document.createElement("p");
    aboutParagraph.classList.add("about-paragraph");
    aboutParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? ";
    aboutNestedContainer.appendChild(aboutParagraph);
    aboutContainer.appendChild(aboutNestedContainer);
    const founderInfoContainer = document.createElement("div");
    founderInfoContainer.classList.add("founder-info-container");
    const founderImage = new Image();
    founderImage.src = founder;
    founderImage.alt = "Smiling woman";
    founderImage.classList.add("founder-image");
    founderInfoContainer.appendChild(founderImage);
    const founderContent = document.createElement("div");
    founderContent.innerHTML = `Founder <span>Jane Doe</span> , 2007`;
    founderContent.classList.add("founder-content");
    founderInfoContainer.appendChild(founderContent);
    aboutContainer.appendChild(founderInfoContainer);

    aboutDiv.appendChild(aboutContainer);

    const staffContainer = document.createElement("div");
    staffContainer.classList.add("staff-container");

    const staffTitle = document.createElement("h1");
    staffTitle.classList.add("staff-title");
    staffTitle.textContent = "Chef Spotlight";
    staffContainer.appendChild(staffTitle);

    const chefContainer = document.createElement("div");
    chefContainer.classList.add("chef-container");

    const chef1Container = document.createElement("div");
    chef1Container.classList.add("chef1-container");
    const chef1Image = new Image();
    chef1Image.src = chef;
    chef1Image.classList.add("chef-image");
    const chef1Content = document.createElement("div");
    chef1Content.classList.add("chef-content");
    chef1Content.innerHTML = `
        <h4 class="chef-h4"> (Head Chef) </h4>
    `;
    chef1Container.append(chef1Image, chef1Content);

    const chef2Container = document.createElement("div");
    chef2Container.classList.add("chef2-container");
    const chef2Image = new Image();
    chef2Image.src = chef2;
    chef2Image.classList.add("chef-image");
    const chef2Content = document.createElement("div");
    chef2Content.classList.add("chef-content");
    chef2Content.innerHTML = `
        <h4 class="chef-h4"> (Sous Chef) </h4>
    `;
    chef2Container.append(chef2Image, chef2Content);

    const chef3Container = document.createElement("div");
    chef3Container.classList.add("chef3-container");
    const chef3Image = new Image();
    chef3Image.src = chef3;
    chef3Image.classList.add("chef-image");
    const chef3Content = document.createElement("div");
    chef3Content.classList.add("chef-content");
    chef3Content.innerHTML = `
        <h4 class="chef-h4"> (Chef de Partie) </h4>
    `;
    chef3Container.append(chef3Image, chef3Content);

    chefContainer.append(chef1Container, chef2Container, chef3Container);
    staffContainer.appendChild(chefContainer);

    aboutDiv.appendChild(staffContainer);

    const storyContainer = document.createElement("div");
    storyContainer.classList.add("story-container");

    const storyTitle = document.createElement("h1");
    storyTitle.classList.add("story-title");
    storyTitle.textContent = "Our Story";
    const storyParagraph = document.createElement("p");
    storyParagraph.classList.add("story-paragraph");
    const storyhr = document.createElement("hr");
    storyhr.classList.add("story-hr");
    storyParagraph.textContent = " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. ";
    storyContainer.append(storyTitle, storyhr, storyParagraph);

    aboutDiv.appendChild(storyContainer);

    aboutContent.appendChild(aboutDiv);
};