# ✨ MiracleDex Project Report

  

**Student Name:** Jacob Mondarez

**Course:** CSCI 270 – Web/Mobile App Development

**Project Title:** MiracleDex

**Submission Date:** 6/14/2025

**GitHub Repo:** https://github.com/JacobMon7507/Project1WebDev.git

**Live Site (GitHub Pages):** [https://jacobmon7507.github.io/Project1WebDev/](https://jacobmon7507.github.io/Project1WebDev/)

  

---

  

## 🔷 Part 1 — HTML/CSS Layout and Responsive Design

  

### ✅ Requirements Addressed

- [x] Landing page created with heading and container

- [x] Used Flexbox or Grid layout

- [x] Mobile-friendly design with media queries

- [x] Elegant, reverent styling with a Google Font

- [x] External CSS file used

  

### 📸 Screenshots

#### Desktop
![enter image description here](https://i.postimg.cc/15xTdktd/Screenshot-2025-06-14-204249.png)

  #### Mobile
![enter image description here](https://cdn.discordapp.com/attachments/1293060304313516064/1383612753347874836/IMG_7677.png?ex=684f6d4a&is=684e1bca&hm=2883d3eb8b7d39b81fe24a3a57d4bf8788328cbdf269d1620f38b7356f95144e&)

### 🔍 Code Snippets
#### HTML
```
<!DOCTYPE html>  
<html lang="en">  
<head>  
 <meta charset="UTF-8">  
 <title>MiracleDex</title>  
 <link rel="stylesheet" href="style.css">  
</head>  
<body>  
 <header> <div class="logo">  
 <div class="left">  
 <img src="https://www.thedivinemercy.org/sites/default/files/field/image/600x400vilnius.jpg">  
 </div> <div class="center">  
 <h1>MiracleDex</h1>  
 <p>" He performs wonders that cannot be fathomed, miracles that cannot be counted." - Job 5:8-9</p>  
 </div> <div class="right">  
 <img src="https://www.johnsoncitychristianchurch.com/wp-content/uploads/2022/01/AdobeStock_298003333-1024x591.jpeg">  
 </div> </div> </header> <main> <section id="card-grid"></section>  
 <div class="buttons">  
 <button id="load-more">Load</button>  
 </div> </main>  
 <div class="modal-container" id="modal-container">  
 <div class="modal" id="modal">  
 <h1 id="modal-title">Welcome to MiracleDex</h1>  
 <p id="modal-details"></p>  
 <p id="modal-category"></p>  
 <p id="modal-type"></p>  
 <button id="close-modal">Close</button>  
 </div> </div> <script src="script.js"></script>  
</body>  
</html>
```
#### CS
 ```
 @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');  
  
body {  
   background-color: #DCC9B6;  
    font-family: "Oswald", sans-serif;  
    font-size: 16px;  
}  
  
@media (max-width: 600px) {  
    body {  
        font-size: 14px;  
    }  
}  
  
.logo {  
    margin: auto;  
    align-content: center;  
    background: #FFF5E1;  
    padding: 30px;  
    display: grid;  
    grid-template-columns: 1fr 2fr 1fr;  
    gap: 10px;  
    max-height: 100px;  
    max-width: 800px;  
    border-radius: 5px;  
}  
  
#card-grid {  
    padding-top: 20px;  
    display: grid;  
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));  
    gap: 10px;  
}  
  
.buttons {  
    text-align: center;  
    padding-top: 10px;  
}  
  
button {  
    background-color: #0038A8;  
    color: white;  
}  
  
.card {  
    background: #FFF5E1;  
    border-radius: 5px;  
    padding: 5px;  
}  
  
.modal {  
    background: #FFF5E1;  
    display: grid;  
    width: 600px;  
    max-width: 100%;  
    padding: 30px 50px;  
    text-align: center;  
    border-radius: 5px;  
}  
  
.modal-container {  
    opacity: 0;  
    pointer-events: none;  
    background-color: rgba(0, 0, 0, 0.4);  
    display: flex;  
    align-items: center;  
    justify-content: center;  
    position: fixed;  
    top: 0;  
    left: 0;  
    height: 100%;  
    width: 100%;  
}  
  
.modal-container.show {  
    pointer-events: auto;  
    opacity: 1;  
}  
  
.close-modal {  
    display: flex;  
    align-items: center;  
}  
  
.left, .center, .right {  
    max-width: 100%;  
    max-height: 100%;  
    display: grid;  
    align-items: center;  
    justify-content: center;  
    text-align: center;  
}  
  
img {  
    max-width: 100%;  
    max-height: 100%;  
    object-fit: contain;
 ```

### 🖋️ Reflection

What challenges did you face in designing a responsive layout? What did you learn about structuring HTML/CSS for real-world use?
One of the main challenges I faced was getting the images to scale correctly on the website. I had trouble placing everything in the correct position. It was also hard to get the whole site to readjust itself based on the size of the page.
  

---

  

## 🔷 Part 2 — JavaScript + DOM + JSON Integration

  

### ✅ Requirements Addressed

- [x] Fetched data from:

`https://gist.githubusercontent.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70/raw/miracles.json`

- [x] Rendered miracle title, location, year, summary

- [x] Used `fetch()` and `async/await`

- [x] Implemented "Load More" or pagination

- [x] Added modal or expandable section with full miracle details

  

### 📸 Screenshots

> Show your miracle cards and one expanded view or modal.

![enter image description here](https://media.discordapp.net/attachments/1293060304313516064/1383621207827546143/image.png?ex=684f752a&is=684e23aa&hm=bbd9fd48bed6c52e935c7897fe9b13d131c1e5ae9a8007538c26237d2a737e9b&=&format=webp&quality=lossless&width=1769&height=800)
  
![enter image description here](https://cdn.discordapp.com/attachments/1293060304313516064/1383621395061276692/image.png?ex=684f7557&is=684e23d7&hm=96d3d2ab9a831f53f8c799ef08fdeeea18f1e8879caec0323b76da36ee713366&)
### 🔍 Code Snippets

> Include the function you used to fetch the data, render the cards, and handle interaction.
```
const batchSize = 6;  
let num_loaded = 0  
  
const button = document.getElementById("load-more");  
const grid = document.getElementById("card-grid");  
const modal_container = document.getElementById("modal-container");  
const close_modal = document.getElementById("close-modal");  
  
async function loadMiracles() {  
    const res = await fetch("https://gist.githubusercontent.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70/raw/miracles.json");  
    const data = await res.json();  
    renderMiracles(data);  
}  
  
function renderMiracles(data) {  
    const batch = data.slice(num_loaded, num_loaded + batchSize);  
    for (let i = 0; i < batch.length; i++) {  
        const card = document.createElement('div');  
        card.classList.add("card");  
  
        const title = document.createElement('h3');  
        title.textContent = batch[i].title;  
  
        const location = document.createElement('p');  
        location.textContent = batch[i].location;  
  
        const year = document.createElement('p');  
        year.textContent = batch[i].year;  
  
        const summary = document.createElement('p');  
        summary.textContent = batch[i].summary;  
  
        card.appendChild(title);  
        card.appendChild(location);  
        card.appendChild(year);  
        card.appendChild(summary);  
  
        card.addEventListener('click', () => {  
            modal_container.classList.add("show");  
            displayModal(batch[i]);  
        })  
  
        grid.appendChild(card);  
    }  
}  
  
function displayModal(card) {  
    document.getElementById("modal-title").textContent = card.title;  
    document.getElementById("modal-details").textContent = card.details;  
    document.getElementById("modal-category").textContent = card.category;  
    document.getElementById("modal-type").textContent = card.type;  
}  
  
button.addEventListener("click", loadMiracles);  
close_modal.addEventListener("click", () => {  
    modal_container.classList.remove("show");  
})  
  
loadMiracles();
```
  

### 🖋️ Reflection

What did you learn about asynchronous JavaScript? What debugging techniques did you use or discover?
I learned an optimal way for javascript to run in tandem with other functions. Most of my debugging was done through running the program numerous times and using small changes to see how it affected the program.

---

  

## 🔷 Part 3 — GitHub Repository and Documentation

  

### ✅ Requirements Addressed

- [x] GitHub repo created and pushed

- [x] GitHub Pages deployed

- [ ] `README.md` contains project description, instructions, and screenshots

  

### 📎 Links

-  **GitHub Repo:** https://github.com/JacobMon7507/Project1WebDev.git

-  **Live GitHub Pages Site:** https://jacobmon7507.github.io/Project1WebDev/

  

### 🖋️ Reflection

How did using GitHub affect your development process? What new Git or GitHub skills did you gain?

It took some time to get the github to work, but ultimately, I think that this has been a very informative experience. I also learned about GitHub pages, which allowed me to host the website I programmed.
  

---

  

## 🧠 Final Reflection

  

Imagine you're explaining this project to a friend who doesn’t code. What does your app do? What are you most proud of? What was the hardest part to get working?

My app presents miracles that are stored online in a readable way. I am most proud with how a rendered the cards themselves and the header. It took me a while to get both of these to work.
  

Reflect on both the technical and the spiritual aspects of building a project about Catholic miracles.

This is an important project not just because it demonstrates how to fetch data. It also shows how programming can be used to better yourself and the people around you.
  

---

# References
Chatgpt was used for debugging the javascript, researching modals, and finding colors.


  

<sub>Assignment created by Dr. Trevor Tomesh with assistance from ChatGPT. All source miracle data provided from public JSON: https://gist.github.com/trevortomesh/7bbf97b2fbae96639ebf1a254b6a7a70</sub>