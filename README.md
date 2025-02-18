## **Technologické požadavky**  
- **React**  
- Použití **Typescriptu** je výhodou  
- **[Leaflet](https://react-leaflet.js.org/)** pro zobrazení mapy  
- **Seznam API** pro vyhledávání lokalit ([jak začít](https://developer.mapy.cz/rest-api/jak-zacit/), [dotazy a data](https://developer.mapy.cz/rest-api/funkce/geokodovani/dotazy-a-data/))
- **[React-leaflet-markercluster](https://www.npmjs.com/package/react-leaflet-markercluster)** pro groupování markerů  
- Možnost použití **state managementu** (např. Redux)  
- Možnost stylování pomocí **SCSS**, TailwindCSS nebo **CSS-in-JS**  
- **Namockování dat** pro reklamní plochy

## **Funkcionality mapy

### **Zobrazení mapy a navigace**  
- Zobrazení mapy s možností:  
  - Pohybu po mapě  
  - Zoomování  
- Na mapě se zobrazují reklamní plochy pomocí jednoho bodu, nebo více bodů spojených pomocí polyline která se při oddálení změní na marker
- **Groupování markerů** do clusterů při větším množství bodů  

### **Vyhledávání pomocí Seznam API**  
- Vyhledávací pole s automatickým našeptáváním lokalit (např. "Kaufland Plzeň", "Kaufland Rokycany")  
- Výsledky vyhledávání se zobrazují v seznamu i na mapě  
- Po kliknutí na výsledek se mapa přesune na vybranou lokalitu a zobrazí se **marker s radiusem**  

### **Interakce s reklamní plochou**  
- Kliknutím na marker/polyline se zobrazí **popup okno** s informacemi:  
  - **Typ plochy** ("metro", "billboard", "vlak" atd.)  
  - **Lokace**  
  - **Dostupnost plochy** (volná / obsazená)  

### **Editace reklamních ploch**  
- **Button pro editaci plochy** → otevře **modal** s možnostmi:  
  - **Výběr způsobu zobrazení** (jeden bod nebo více bodů propojených polyline)  
  - **Výběr typu plochy** (filtrování ploch podle kategorie)  
  - **Výběr konkrétní plochy**  
  - **Při výběru typu plochy se automaticky vyfiltrují plochy k výběru podle zvoleného typu plochy**
- Po potvrzení editace:  
  - **Mód editace bodů** → výběr jednoho nebo více bodů na mapě  
  - **Pro plochu s více body možnost krok zpět, zrušení módu nebo potvrzení změn**  

### **Přidání a úprava radiusu**  
- **Button pro přidání radiusu** → otevře **modal** pro zadání poloměru (v km)  
- Po potvrzení se modal zavře a po kliknutí na mapu se vytvoří radius  
- Kliknutím na radius se zobrazí **modal pro úpravu**, kde lze:  
  - **Změnit poloměr**  
  - **Odstranit radius**  
  - **Změnit lokaci radiusu**  
  - **Zobrazit souřadnice**  

### **Přidání a úprava polyline**  
- **Button pro přidání polyline** → přepne do "polyline módu"  
- Možnost postupným klikáním vytvářet polyline na mapě  
- **Možnosti ovládání:**  
  - **Vrátit poslední bod**  
  - **Začít znovu**  
  - **Zrušit mód polyline**  
  - **Potvrdit vytvořenou polyline**  
-  Kliknutím na polyline se zobrazí **modal pro úpravu**, kde lze:  
  - **Znovu naklikat body pro polyline**  
  - **Odstranit polyline**

### **Dobrovolná funkcionalita: Vytvoření screenshotu mapy**
- **Button pro vytvoření screenshotu**
- Po kliknutí se otevře **modal** s mapou, kde lze:
 - Pohybovat se a zoomovat
 - Udělat screenshot
 - Zrušit akci
- Po pořízení screenshotu se **modal zavře a automaticky se stáhne fotka**


Pro lepší představu je zde návrh jak by aplikace mohla vypadat, není však nutné se řídit tímto návrhem při tvorbě UI:
![[Wireframe - 1 1.png]]