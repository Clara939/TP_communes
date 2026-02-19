// liste des departement
async function getDepartementData(){
    let httpReponse = await fetch('https://geo.api.gouv.fr/departements?fields=nom,code,codeRegion')

    if (httpReponse.status === 200 && httpReponse.ok){
        return await httpReponse.json();
    }else {
        return [];
    }
}
async function displayDepartement(){
    let data = await getDepartementData();
    const select = document.getElementById('departements');
    select.innerHTML = '<option value="">- Département -</option>';

    for (const departement of data){
        const option = document.createElement('option');
        option.value = departement.code;
        option.textContent = departement.nom;
        select.appendChild(option);
    }


}
// liste des communes
document.getElementById('departements').addEventListener('change', async function(){
    const deptCode = this.value;
    const selectCommunes = document.getElementById('communes');

    selectCommunes.innerHTML = '<option>- Communes -</option>';

    if (deptCode){
        let response = await fetch(`https://geo.api.gouv.fr/departements/${deptCode}/communes?&fields=nom,code`);
        let communes = await response.json();

        selectCommunes.innerHTML = '<option value="">- Commune -</option>';
        for (const commune of communes){
            const option = document.createElement('option');
            option.value = commune.code;
            option.textContent = commune.nom;
            selectCommunes.appendChild(option);
        }
    } else{
        selectCommunes.innerHTML = '<option>- Communes -</option>';
    }
})
// détail de la commune
document.getElementById('communes').addEventListener('change',async function(){
    const communeCode = this.value;
    const infoDiv = document.getElementById('info');

    infoDiv.innerHTML = '';

    if (communeCode){
        try {
            let response = await fetch(`https://geo.api.gouv.fr/communes/${communeCode}?fields=nom,code,codeDepartement,codeRegion,population,codesPostaux,centre,contour,departement,region`);
            if (response.ok){
                const commune = await response.json();
                infoDiv.innerHTML =`
                    <h3>${commune.nom}</h3>
                <p><strong>Département :</strong> ${commune.departement.nom}</p>
                <p><strong>Code postal :</strong> ${commune.codesPostaux}</p>
                <p><strong>Population :</strong> ${commune.population || 'Non disponible'}</p>
                ${commune.centre ? `<p><strong>Coordonnées :</strong> ${commune.centre.coordinates[1].toFixed(4)}, ${commune.centre.coordinates[0].toFixed(4)}</p>` : ''}
                `;
            }
            else {
                infoDiv.innerHTML = '<p>Erreur lors du chargement des informations</p>';
            }
        }
        catch (error){
            infoDiv.innerHTML = '<p>Erreur réseau. vérifiez votre connexion</p>';
        }
    }
})


// /communes/{code}      renvoit les information d'une commune

displayDepartement();