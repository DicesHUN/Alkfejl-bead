# Alkfejl-bead DOKUMENTÁCIÓ
# PC BUILDER

## 1.Követelményanalízis
###Funkcionális követelmények
  -vendégként az oldal megköveteli a regisztrációt
  
  -felhasználóként szeretnék tudni bejelentkezni az oldalra
  -felhasználóként szeretnék tudni alkatrészek között böngészni 
  -felhasználóként szeretnék komponenseket adni a kiválasztott komponenseim listájára
  -felhasználóként szeretném a komponenseim listáját módosítani vagy törölni annak elemeit egyesével
  
###Nem funkcionális követelmények
  -Legyen az oldal ergonomikus elrendezésű és modern kinézetű
  -Legyen felhasználóbarát az oldal
  -Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés
  
##1.2. Használatieset-modell, funkcionális követelmények

Vendég: Csak a publikus oldalakat éri el

*Bejelentkezés
*Regisztráció
Bejelentkezett felhasználó: A publikus oldalak elérésén felül egyéb funkciókhoz is hozzáfér.

*Alkatrészek listájának megtekintése
*Új alkatrész felvétele az oldal alkatrészeihez
*Összeállított alkatrészek listájának megtekintése / módosítása
*Meglévő alkatrész a kiv. listáról törlése
 
 ![GitHub Logo](/images/use_case.png)

Vegyünk példának egy egyszerű folyamatot:

Meglévő alkatrészek közül válogatás:

A felhasználó az oldalra érkezve, bejelentkezik vagy regisztrál
Regisztráció után megtekintheti az alkatrészek listáját , ahol kiválaszthatja a szerkeszteni kívánt alkatrészt hibás név esetén.
Megnyomja a „szerkesztés” gombot, ami egy kék ceruza jelű gomb
Szerkesztés oldalon felviszi az új adatokat
Submit gombra kattintva elmenti a változásokat
   

## 2. Tervezés

### Oldaltérkép
![GitHub Logo](/images/Oldaltérkép.png)

### Végpontok
GET/főoldal
GET/loginSignUp
POST/login
POST/register
GET/logout
GET/alk
GET/parts
GET/alk/:id
GET/addPart/:id
GET/search
//POST/addCategory  "moderátori" eléréssel (kódban engedélyezni kell)
GET/createAlk
POST/createAlk
GET/editAlk/:id
POST/editAlk/:id
//POST/editCategory/:id   "moderátori" eléréssel (kódban engedélyezni kell)
//GET/deleteAlk/:id       "moderátori" eléréssel (kódban engedélyezni kell)
GET/deletePart/:id
//GET/deleteCategory/:id  "moderátori" eléréssel (kódban engedélyezni kell)

### Felhasználói felület

 ![GitHub Logo](/images/Alk1-3.png)

 ![GitHub Logo](/images/alk1.png)

 ![GitHub Logo](/images/Alk1-1.png)

 ![GitHub Logo](/images/alk2.png)

 ![GitHub Logo](/images/Alk1-2.png)

 ![GitHub Logo](/images/alk3.png)

 ![GitHub Logo](/images/alk5.png)


### Adatmodell

 ![GitHub Logo](/images/adatmodell.png)

## Implementáció

Webes IDE: GitHub
  Github account szükséges
  Belépés után új repository létrehozása
  Ezután elkezdhetjük a kód írását
  git add paranccsal kiválaszthatunk egy fájlt verzionálásra, vagy git add . paranccsal az összes fájlt kiválaszthatjuk
  git commit -m "commit" paranccsal feltehetjük a fájlokat a cloud9 helyi tárolójába. Az így megjelölt verziókhoz a későbbiekben          visszatérhetünk, különbségüket megtekinthetjük.
  git push origin master paranccsal a lokális tárolóból feltölthetjük a tartalmat a Github-ra.
  Végezetül a Github oldalán leellenőrizhetjük a munkánkat.
  
### Könyvtárstruktúra


 ![GitHub Logo](/images/k1.png)
Folytatás:
 ![GitHub Logo](/images/k2.png)
Folytatás:
 ![GitHub Logo](/images/k3.png)
  
  (a többi specifikációt a repo. bead1 mappa tárolja)
