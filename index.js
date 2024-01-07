const api = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=> {
    let input = document.getElementById("input").value;
   
    fetch(`${api} ${input}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `
            <div class="new-content">
            <div class="word">
            <h3>${input}</h3></div> <br>

            <div class="details1">
            <p> ${data[0].meanings[0].partOfSpeech} </p>
            </div>

            <div class="details2">
            <p> Synonyms: ${data[0].meanings[0].synonyms.slice(0,5)} </p>
            <hr>
            <p> Definition: ${data[0].meanings[0].definitions[0].definition} </p>
            <hr>
            
            <p> Example: ${data[0].meanings[0].definitions[0].example} </p>
            </div>
            </div>
            `
    })
    .catch(() => {
      result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    });        
     input.value = "";
})