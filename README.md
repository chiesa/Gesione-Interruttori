# Struttura impanto
L'impianto si basa su 1 Raspberry pi connesso a dei relè bipolari che hanno la funzione di deviatori. 
Ad oggi nella casa sono presenti 2 blocchi di relè: 
1) è composto da 2 relè: controlla il bagno e la sala ed è nella dietro la scatola del bagno;
2) è composto da 4 relè: controlla il corridoio (con un invertitore fatto con 2 relè), la camera ed la cucina.

Il Raspberry è connesso in rete locale al cellulare (non è esposto al esterno) e ha come IP statico 192.168.43.15.

# Pin
Per connettere i Raspberry sono stati utilizzati i seguenti GDPO:
- bagno: 17 (pin 11)
- camera: 6 (pin 31)
- corridoio: 25 (pin 22)
- cucina: 26 (pin 37)
- sala: 27 (pin 13)

# Come eseguire il server
Il server si basa su node JS ed è stato impostato l'auto avvio nel momento in cui parte il raspberry, per farlo partire indipendentement bisogna: 

Installa le dipendenze

```
npm i
```

Avvia il server

```
npm start
```

# autoboot server
l'avvio automatico del server è fatto dall'utente root attraverso il comando: 
```
su root -c '/usr/bin/node /home/juole/server/index.js < /dev/null &'
```
nel file: 
```
/etc/rc.local
``` 

