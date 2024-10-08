const projects = [
    {
        name: "Nelleison Store",
        link: "https://webdevent.github.io/Nelloesion-store/",
        image: "./pictures/nell-web.jpg",
        message: "This was an Websites project for a friend clothing brand to help him get more sales this was also the frist big website i did on my own from this i widen my knowlege base and learn new ways of doing html."
    },
    {
        name: "Dragon Slayer RPG",
        link: "https://webdevent.github.io/RPG/",
        image: "./pictures/Dragon-fight.jpg",
        message: "This website was an project from Free Coding Camp which i add more to it, to make it more fun to play and more challenging to, to make it more fun alot of time and effort went into doing this project but you can view the out come your self by clicking the image."
    },
    {
        name: "CaluWage",
        link: "https://webdevent.github.io/CalcuWage/",
        image: "./pictures/wage.jpg",
        message: "A Calculator App that can Calculate your pay by subtracting taxes all you have to do is enter your pay per hour, your hours worked and the country and the Calculator will do the rest."
    },
    {
        name: "TIMO",
        link: "https://webdevent.github.io/Timo/",
        image: "./pictures/timo.jpg",
        message: "Timo is a time app that includes a todo list and a stopwatch, a timer as well currently not working timo is still a working progress. "
    },
    {
        name: "WellWash",
        link: "https://webdevent.github.io/Application/index.html",
        image: "./pictures/demoapp.PNG",
        message: "This is a Job Application website for a fake company called Wellwash"
    },
    {
        name: "Weather App",
        link: "https://webdevent.github.io/Weather-App/",
        image: "./pictures/weather app image.PNG",
        message: "Weather App this app will use the city you enter and tell you the weather condition of the area"
    },
    {
        name: "APIYA",
        link: "https://webdeventapiya.netlify.app/",
        image: "./pictures/apiya-img.png",
        message: "The website displays three different API pokemon API, weather API, and two different movie APIs using react js."
    },
    {
        name: "Spotify",
        link: "https://webdevenspotify.netlify.app/",
        image: "./pictures/spotify-img.png",
        message: "The website displayed before you is a Spotify clone based on the original Spotify website this website allows you to stream music of 12 artists."
    },
    {
        name: "Netflix Clone",
        link: "https://webdevnetclone.netlify.app/",
        image: "./pictures/netflix-clone.PNG",
        message: "The website displayed before you is a Netflix clone based on the original Netflix website this website allows you to watch trailers and search through movies on Netflix."
    },
]


function displayProjects() {
    const deck = document.getElementById('deck');
    projects.map((project) => {
        const projectLink = document.createElement('a');
        projectLink.href = project.link;
        projectLink.target = "_blank";
        projectLink.addEventListener('mouseover', () => {
            projectMessage.style.height = "100%";
        })
        projectLink.addEventListener('mouseout', () => {
        projectMessage.style.height = "0";
        })
        const card = document.createElement('li');
        card.classList.add('card');
        projectLink.appendChild(card);
        const projectImg = document.createElement('img');
        projectImg.src = project.image;
        projectImg.alt = project.name;
        projectImg.classList.add('project-img');
        card.appendChild(projectImg);
        const projectMessage = document.createElement('p');
        projectMessage.innerText = project.message;
        projectMessage.classList.add('project-text');
        card.appendChild(projectMessage);
        deck.appendChild(projectLink);
    })
        
}
displayProjects();
