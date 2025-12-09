# 🎯 Setup Rapido Google Drive - 30 Secondi

## Per Utenti Normali 👤

### 3 Passi:

1. **Apri l'app** → vai su "☁️ Google Drive Auto-Backup"
2. **Click** su "🚀 Connetti Google Drive (Setup Rapido)"
3. **Autorizza** nel popup di Google

### ✅ Fatto!

Ora **ogni volta che chiudi l'app**, viene creato automaticamente un backup su Google Drive.

---

## Funzionalità Disponibili

### Backup Automatico
- Si attiva quando chiudi l'app
- Conserva gli ultimi 10 backup
- Zero configurazione richiesta

### Backup Manuale
- Pulsante "💾 Backup Manuale" quando connesso
- Crea un backup istantaneo quando vuoi

### Ripristino
- Pulsante "📥 Ripristina Backup"
- Scegli da quale backup ripristinare
- Vedi la lista con data e ora di ogni backup

---

## Per Utenti Avanzati 🔧

Se vuoi usare il TUO progetto Google Cloud personale:

### Perché?
- Controllo completo sulle quote API
- Non dipendere dal CLIENT_ID condiviso
- Privacy aggiuntiva

### Come?

1. Nell'app, click su "⚙️ Configurazione Avanzata"
2. Segui le istruzioni nella [Guida Completa](GDRIVE-SETUP.md)
3. Incolla il tuo CLIENT_ID
4. Connetti

---

## Domande Frequenti

**Q: È sicuro?**  
A: Sì! Il token di autorizzazione è salvato solo nel tuo browser (localStorage) e i backup sono salvati nel TUO Google Drive personale.

**Q: Quanto spazio usa?**  
A: Pochissimo! Ogni backup è un file JSON di pochi KB. Con 10 backup conservati, usi meno di 100 KB.

**Q: Posso usarlo offline?**  
A: L'app funziona offline, ma il backup su Google Drive richiede connessione internet.

**Q: Cosa succede se supero i 10 backup?**  
A: L'app elimina automaticamente i backup più vecchi, conservando sempre gli ultimi 10.

**Q: Posso tornare alla modalità semplice dopo aver usato quella avanzata?**  
A: Sì! Basta disconnettere e riconnettersi con il Setup Rapido.

---

## Risoluzione Problemi Rapida

| Problema | Soluzione |
|----------|-----------|
| Popup non si apre | Abilita i popup per questo sito |
| Errore "redirect_uri_mismatch" | Stai usando modalità avanzata? Verifica gli URI nella Google Cloud Console |
| Backup non si crea | Verifica di essere connesso (vedi checkmark verde ✓) |
| Non vedo i miei backup | Click su "📥 Ripristina Backup" per vedere la lista |

Per problemi più complessi, consulta la [Guida Completa](GDRIVE-SETUP.md).
