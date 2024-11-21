# **Pagina Benchmark - Epicode**
Progetto del **Team 3**

## **Descrizione del Progetto**
Questo progetto prevede la creazione di una versione ricostruita della pagina del Benchmark di Epicode. In maniera più dettagliata abbiamo previsto la creazione di quattro pagine: **Welcome**, **Questions**, **Results** e **Feedback**

---

## **Pagine**
### 1. **Welcome**
Nella pagina Welcome sono presenti le regole introduttive per poter completare in modo corretto il test. All’ interno della pagina è inoltre necessario ‘spuntare’ la casella per poter accedere alla seconda pagina del progetto.

### 2. **Questions**
 La pagina Questions è la pagina che contiene le domande a cui dover rispondere. È formata da 10 domande random con ognuna 2 o 4 risposte a cui è necessario rispondere, dal momento che non viene data nessuna risposta il risultato sarà negativo. La domanda successiva arriva allo scadere del tempo o cliccando sul bottone ‘prossima domanda’.

### 3. **Results**
La pagina Results è quella dedicata alla memorizzazione delle risposte corrette e sbagliate. L’ utente in questa pagina può visionare il risultato del proprio test, vedendo più nel dettaglio le percentuali delle risposte giuste e delle risposte sbagliate. Inoltre, in questa pagina è possibile visionare un grafico che rappresenti il risultato del proprio test.

### 4. **Feedback**
Nella pagina feedback, l’utente ha la possibilità di dare un opinione su Epicode tramite il click su delle stelline azzurre presenti all’ interno della pagina. Successivamente nella pagina è possibile lasciare un commento scritto per potersi esprimere meglio il proprio giudizio

---
## **Funzionalità**
-La pagina Welcome tramite un javascript implementa un meccanismo di validazione per un modulo HTML che richiede all'utente di spuntare una casella di controllo (checkbox) prima di consentire l'invio.
-La pagina Questions tramite un JavaScript gestisce un'applicazione di quiz interattiva. Il quiz presenta 10 domande randomizzate con un timer per ogni domanda di 30 secondi che, quando scade rimanda alla domanda successiva. Le domande sono scelte casualmente da un array predefinito e ci troviamo davanti a domande con risposta multipla e con vero e falso. Le domande già mostrate vengono tracciate da un array in modo che non escano nuovamente. Le opzione di risposta sono presenti sotto forma di pulsanti e una volta che l’ utente seleziona una risposta, la risposta scelta viene confrontata con quella corretta e viene memorizzata in localStorage. Successivamente al salvataggio delle risposte, se la risposta è corretta viene aggiunto un punto a una serie di risposte salvate in LocalStorage.  Quando tutte le 10 domande sono state completate, l’ utente  viene reindirizzato a una pagina dei risultati (Results) dove verranno mostrati i risultati del test appena sostenuto dall’ utente.
-La pagina Results tramite un JavaScript gestisce la visualizzazione dei risultati di un quiz, utilizzando i dati salvati precedentemente in localStorage . Dopo il completamento del quiz, l'utente viene indirizzato a una pagina dei risultati dove può vedere le proprie prestazioni in modo dettagliato, sia in formato numerico che visivo. Quando la pagina dei risultati viene caricata, il codice esegue un controllo per recuperare le risposte salvate. Queste vengono memorizzate in un array che viene letto da localStorage. Se non ci sono dati salvati. L’array vieen inizializzato come vuoto. Sulla base di queste risposte, vengono calcolati il numero di risposte corrette, quelle sbagliate e le percentuali. Inoltre, all’ interno del grafico viene visualizzato un messaggio dinamico personalizzato: se l’ utente ha risposto correttamente ad almeno 5 domande, viene mostrato un messaggio di congratulazioni; in caso contrario, viene mostrato un messaggio che lo invita a riprovare. Alla fine, viene offerta all’ utente la possibilità di lasciare un feedback sulla sua esperienza tramite un pulsante apposito. 
-La pagina FeedBack tramite un javascript gestisce un sistema di valutazione con stelle interattive. L'utente può passare il mouse sopra le stelle per visualizzare una valutazione temporanea, cliccare su una stella per selezionarla, e spostare il mouse via per vedere il risultato finale. Quando l’ utente passa il mouse sopra le stelline l’evento viene automaticamente attivato e questo fa si che le stelle fino a quelle sopra cui è il cursore vengono illuminate temporaneamente.  Quando l’ utente clicca su una stella, questa diventa la sua selezione finale e automaticamente tramite il click si registra l’indice della stellina selezionata e cambia il colore delle stelle da attivare. In questo modo, la selezione rimane visibile e vengono contrassegnate come selezionate cambiando colore. È inoltre possibile lasciare un commento e tramite un bottone è possibile accedere alla pagina finale che ti ringrazia di aver svolto il test.


---

## **Processo di Sviluppo**
### **Lunedì**
- **Mattina:**
  - Creazione della repository GitHub.
  - Configurazione della struttura delle cartelle e dei file principali.
  - Studio della pagina di Epicode e progettazione delle quattro pagine.
- **Pomeriggio:**
  - Creazione collaborativa dell’HTML per la pagina Welcome, con decisione condivisa su ID e classi.
  - Implementazione del primo script JavaScript per la validazione del pulsante sulla pagina Welcome.
  - Prima versione del CSS per Welcome.
  - Inizio della creazione dell’HTML per la pagina Questions.

---

### **Martedì**
- **Mattina:**
  - Completamento dell’HTML per Questions, con particolare attenzione al contenuto del main.
  - Sviluppo iniziale del CSS per Questions.
  - Definizione delle variabili JavaScript necessarie per gestire timer e domande.
- **Pomeriggio:**
  - Implementazione del timer e delle domande tramite JavaScript.
  - Ulteriori miglioramenti al CSS per Questions.

---

### **Mercoledì**
- **Mattina:**
  - Funzionalità avanzate per Questions:
    - Gestione del local storage per salvare le risposte.
    - Salvataggio delle risposte corrette per l’utilizzo nella pagina Results.
  - Creazione dell’HTML per Results.
- **Pomeriggio:**
  - Implementazione del JavaScript per Results:
    - Analisi delle risposte salvate.
    - Calcolo della percentuale di successo.
    - Visualizzazione del messaggio "Passato" o "Non passato".
  - Ottimizzazione del CSS per Results.

---

### **Giovedì**
- **Mattina:**
  - Creazione dell’HTML per Feedback (header, main, footer).
  - Progettazione del sistema di valutazione a stelline tramite CSS.
  - Implementazione iniziale del JavaScript per la gestione del feedback.
- **Pomeriggio:**
  - Completamento del JavaScript per Feedback:
    - Gestione del punteggio basato sulle stelline selezionate.
  - Revisione e controllo generale del funzionamento di tutte le pagine.

---

## **Tecnologie Utilizzate**
- **HTML5**: struttura delle pagine.
- **CSS3**: stile e layout delle pagine.
- **JavaScript**: funzionalità interattive, salvataggio dei dati e analisi.
- **Git & GitHub**: gestione del versionamento e collaborazione.

---

## **Autori**
- [Domenico Della Ventura](https://github.com/Domy15)
- [Rachele Barberis](https://github.com/rachelebarberis)
- [Daniele Guicciardi Ferrusi](https://github.com/DanieleGuicciardi)
- [Giuseppe Pomo](https://github.com/ThePomo)
- [Miguel Angel Jano Salcedo](https://github.com/migueljano)
- [Alberto Antonio Savi](https://github.com/AlbertoSavi) 

