## Consegna

📚 **UI Challenge: strong password validator**
nome repo: *****kata-strong-password-validator*
****

Il designer del sito a cui stai lavorando ci chiede di creare un’interfaccia avanzata per la validazione della password che rispetti i seguenti requisiti:

- almeno 9 caratteri
- almeno una maiuscola
- almeno un numero
- almeno un carattere speciale

La UX/UI è caratterizzata da una barra che rappresenta un indicatore della robustezza della password che si aggiorna istantaneamente in base a quanti requisiti vengono soddisfatti in fase di inserimento. 

I requisiti della password sono elencati sotto al campo di input.

✨ **Bonus:** i requisiti si colorano di verde e visualizzano un check ✔️ man mano che vengono soddisfatti.

Questa soluzione fornisce immediatamente un feedback visivo all’utente durante la digitazione dei caratteri.

Buona challenge! 🔐

## Suggerimenti

- Implementa una funzione separata per ciascun requisito di validazione rende il codice più modulare e facile da mantenere.
- E’ una best practice tenere separata la parte di logica dalla parte di manipolazione del DOM.
- Approfondisci gli eventi JavaScript per rilevare istantaneamente i cambiamenti nel campo di input.
- Extra: conosci le espressioni regolari (regex)? Potrebbero essere molto utili per verificare i requisiti della password come la presenza di maiuscole, numeri e caratteri speciali!