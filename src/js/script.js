const container = document.getElementById("container")

fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {
        console.log(data.results[0])
        
        data.results.forEach(element => {
            const card = document.createElement("div")
            card.className = "card-character"
            card.innerHTML = `
                 <div class="img-character">
                    <img id="image-character" src="${element.image}" alt="${element.name}" loading="lazy">
                </div>
                <h3 id="name-character">${element.name}</h3>
                <div class="conteiner-info-character">
                    <div class="info-character">
                        <img src="./src/assets/images/iconAlien.svg" alt="Icone cabeça alien" loading="lazy">
                        <span id="specie-character">${element.species}</span>
                    </div>
                    <div class="info-character">
                        <img src="./src/assets/images/mingcute_heartbeat-line.svg" alt="Icone linha batimento cardiaco" loading="lazy">
                        <span id="status-character">${element.status}</span>
                    </div>
                    <div class="info-character">
                        <div>
                            <img src="./src/assets/images/iconPlanet.svg" alt="Icone planeta" loading="lazy">
                        </div>
                        <span id="planet-character">${element.origin.name}</span>
                    </div>
                </div>
            `
            container.appendChild(card)
        });
    })
