const champions = [
    "AATROX", "AHRI", "AKALI", "AKSHAN", "ALISTAR", 
    "AMUMU", "ANNIE", "ASHE", "AURELION_SOL", "BARD", 
    "BELVETH", "BLITZCRANK", "BRAND", "BRAUM", "CAITLYN", 
    "CAMILLE", "CASSIOPEIA", "CHO'GATH", "DARIUS", "DIANA", 
    "DR. MUNDO", "DRAVEN", "EKKO", "ELISE", "EVELYNN", 
    "FIDDLESTICKS", "FIORA", "FIZZ", "GALIO", "GANGPLANK", 
    "GAREN", "GNAR", "GRAGAS", "GRAVES", "GWEN", 
    "HECARIM", "HEIMERDINGER", "ILLAOI", "IRELIA", "JAX"
];
const championsContainer = document.getElementById('champions');

champions.forEach(champion => {
    const championDiv = document.createElement('div');
    championDiv.classList.add('champion-option');
    championDiv.innerHTML = `
        <img src="ảnh/${champion}.webp" alt="${champion}">
        <p>${champion}</p>
    `;
    championsContainer.appendChild(championDiv);
});
