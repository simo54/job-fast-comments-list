# Task-comments-page

Di seguito condivido alcune riflessioni dopo questa interessante "challenge".

Tengo a precisare che il mio desiderio era quello di terminare il task nel tempo prefissato, nonostante i vari impegni giornalieri e il poco tempo libero a disposizione, senza usare proroghe di vario tipo.

---

### Stack usato

    "axios": "^0.27.2",
    "bootstrap": "^5.2.0",
    "react": "^18.2.0",
    "react-bootstrap": "^2.5.0",
    "react-bootstrap-typeahead": "^6.0.0-rc.3",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "sass": "^1.54.7",
    "typescript": "^4.8.2",

---

### Motivi

Considerando il tempo a disposizione, ho cercato una libreria incentrata sulla core feature richiesta (typeahead) in modo da massimizzare i tempi con le altre attivita' del progetto. Personalmente non sono un fan di bootstrap e del loro system design ma lo ritengo uno strumento valido quando si tratta di show-test, inoltre ho utilizzato anche react-bootstrap per avere dei componenti base gia' pronti che non richiedessero una "massiccia" dose di customizzazione.

--- 

### Script diponibili
- `npm start`: Inizia il progetto in locale, usando la porta standard `3000`
- `npm test`: Inizia tutti i test presenti nel progetto
- `npm build`: Crea una build pronta per il deploy in produzione
