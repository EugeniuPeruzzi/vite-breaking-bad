import { reactive } from 'vue'

export const store = reactive({
    // il link che ho trovato tramite postman
    apiUrl: 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?per=35',
    // array vuoto da popolare
    pokeDex: [],
    myUrl: '',
    loading: true,
    pokeType: '',
    allTypes: [
        "Bug",
        "Dark",
        "Dragon",
        "Electric",
        "Fairy",
        "Fighting",
        "Fire",
        "Flying",
        "Ghost",
        "Grass",
        "Ground",
        "Ice",
        "Normal",
        "Poison",
        "Psychic",
        "Rock",
        "Steel",
        "Water"
    ]
});