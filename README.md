# Stomme för Casinoprojektet

### Katalogstruktur:

```sh

assets/  # De resurser som behövs för sidan
    css/    # Alla CSS-filer 
        main.css # Site-wide CSS, ha allmän styling här
        ssp.css  # Exempel på sidspecifik CSS-fil för sidan ssp.html 

    images/ # Bilder här (skapa underkataloger enligt behov)

    js/     # Alla JavaScript-filer
        main.js # Site-wide JS, ha sån js som ska funka överallt här
        ssp.js # JS för Sten, sax & påse

pages/  # Alla undersidor till index.html 
    ssp.html # Exempel på undersida, skapa nya liknande enligt behov

index.html  # Huvudsidan
README.md   # Den fil du läser just nu

```
- Hur lägger jag till en ny sida?
    - Skapa en ny sida under `pages/` t.ex. genom att kopiera exemplet `ssp.html`.
    - Om sidan behöver JS och/eller CSS som inte ska vara _site-wide_, skapa då egna filer för detta och importera i din nya html-fil.
    - Kom ihåg att lägga till länk till sidan i huvudmenyn

- Det är tillåtet att ändra på strukturens uppbyggnad,  men projektet bör vara uppbyggt logiskt och konsekvent. Fritt fram att t.ex. byta namn på kataloger.
