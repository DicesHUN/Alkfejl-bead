# Alkfejl-bead DOKUMENTÁCIÓ
# PC BUILDER

## 1.Követelményanalízis
###Funkcionális követelmények
+  -vendégként az oldal megköveteli a regisztrációt
  
+  -felhasználóként szeretnék tudni bejelentkezni az oldalra
+  -felhasználóként szeretnék tudni alkatrészek között böngészni 
+  -felhasználóként szeretnék komponenseket adni a kiválasztott komponenseim listájára
+  -felhasználóként szeretném a komponenseim listáját módosítani vagy törölni annak elemeit egyesével
  
###Nem funkcionális követelmények
+  -Legyen az oldal ergonomikus elrendezésű és modern kinézetű
+  -Legyen felhasználóbarát az oldal
+  -Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés
  
##1.2. Használatieset-modell, funkcionális követelmények

+ Vendég: Csak a publikus oldalakat éri el

+ -Bejelentkezés
+ -Regisztráció

+ Bejelentkezett felhasználó: A publikus oldalak elérésén felül egyéb funkciókhoz is hozzáfér.

+ -Alkatrészek listájának megtekintése
+ -Új alkatrész felvétele az oldal alkatrészeihez
+ -Összeállított alkatrészek listájának megtekintése / módosítása
+ -Meglévő alkatrész a kiv. listáról törlése
 
 ![GitHub Logo](/images/use_case.png)

+ Vegyünk példának egy egyszerű folyamatot:

  + Meglévő alkatrészek közül válogatás:

+ A felhasználó az oldalra érkezve, bejelentkezik vagy regisztrál
+ Regisztráció után megtekintheti az alkatrészek listáját , ahol kiválaszthatja a szerkeszteni kívánt alkatrészt hibás név esetén.
+ Megnyomja a „szerkesztés” gombot, ami egy kék ceruza jelű gomb
+ Szerkesztés oldalon felviszi az új adatokat
+ Submit gombra kattintva elmenti a változásokat
   

## 2. Tervezés

### Oldaltérkép
![GitHub Logo](/images/Oldaltérkép.png)

### Végpontok
+ 1.GET/főoldal
+ 2.GET/loginSignUp
+ 3.POST/login
+ 4.POST/register
+ 5.GET/logout
+ 6.GET/alk
+ 7.GET/parts
+ 8.GET/alk/:id
+ 9.GET/addPart/:id
+ 10.GET/search
+ 11.POST/addCategory  "moderátori" eléréssel (kódban engedélyezni kell)
+ 12.GET/createAlk
+ 13.POST/createAlk
+ 14.GET/editAlk/:id
+ 15.POST/editAlk/:id
+ 16.POST/editCategory/:id   "moderátori" eléréssel (kódban engedélyezni kell)
+ 17.GET/deleteAlk/:id       "moderátori" eléréssel (kódban engedélyezni kell)
+ 18.GET/deletePart/:id
+ 19.GET/deleteCategory/:id  "moderátori" eléréssel (kódban engedélyezni kell)

### Felhasználói felület

 ![GitHub Logo](/images/Alk1-3.PNG)

 ![GitHub Logo](/images/alk1.png)

 ![GitHub Logo](/images/Alk1-1.PNG)

 ![GitHub Logo](/images/alk2.png)

 ![GitHub Logo](/images/Alk1-2.PNG)

 ![GitHub Logo](/images/alk3.png)

 ![GitHub Logo](/images/alk5.png)


### Adatmodell

 ![GitHub Logo](/images/adatmodell.png)

### Implementáció

+ Webes IDE: GitHub
  +   Github account szükséges
  +   Belépés után új repository létrehozása
  +   Ezután elkezdhetjük a kód írását
  +   git add paranccsal kiválaszthatunk egy fájlt verzionálásra, vagy git add . paranccsal az összes fájlt kiválaszthatjuk
  +   git commit -m "commit" paranccsal feltehetjük a fájlokat a cloud9 helyi tárolójába. Az így megjelölt verziókhoz a későbbiekben          visszatérhetünk, különbségüket megtekinthetjük.
  +   git push origin master paranccsal a lokális tárolóból feltölthetjük a tartalmat a Github-ra.
  +   Végezetül a Github oldalán leellenőrizhetjük a munkánkat.
  
### Könyvtárstruktúra


 ![GitHub Logo](/images/k1.png)
+ Folytatás:
 ![GitHub Logo](/images/k2.png)
+ Folytatás:
 ![GitHub Logo](/images/k3.png)
  
  + (a többi specifikációt a repo. bead1 mappa tárolja)



## 3. Progresszív fejlesztés ( a javascript használata )

+ Funkciók:
  
  +  **Ajax-os:**
      +   createAlk()       : új alkatrész létrehozása
      +   editAlk(id)       : alkatrész szerkesztése
      +   deleteCategory(id): kategória törlése
      +   deleteAlk(id)     : alkatrész törlése
      +   search            : alkatrész(ek) keresése
  
## 4. Felhasználói dokumentáció 

  + Tetszőleges operációs rendszeren futtatható az alkalmazás, bár Windows operációs rendszerrel készült.
  + Internet böngésző + javascript telepítése ajánlott
  + Node.js + Adonis.js telepítése
  + sqlite3 és expressadmin telepítése

  + A program használata
  
  + 1. CMD-ben írjuk be a következő parancsot: npm i
  + 2. Ugyan ide írjuk be ezután: npm run dev
  + 3. A böngészőben nyissuk meg az oldalt, amit a: localhost:3333 címen érünk el.
  + 4. Jelentkezzünk be, mert csak így használhatjuk az oldal különböző funkcióit.
  + 5. Ha még nem vagyunk regisztrálva, ezt megtehetjük ugyanitt.
  + 6. Ezen lépések után a főoldalon kezdünk, ahol le van írva a teendő, és egyéb érdekes információk, amik használatot segítik.
  + 7. 3 lényeges menüpont:
      + Főoldal
      + Alkatrészek
          + (ennek almenüje: ) Alkatrész Hozzáadása
      + Saját összeállítás 
  + 8. Ezen kívül van keresés funkciónk, és a jobb felső sarokban található a kijelentkezés/bejelentkezés gomb.
  
#### Funkciók


  +   1.) Az Alkatrészek oldalon található kategóriákat egyből törölni is tudjuk a Kategória törlése gombbal.
  +   2.) Ugyan ezen az oldalon a kategóriánkénti alkatrészeket is törölni, de akár módosítani is tudjuk azok nevének és kategórájának megváltoztatásával.
  +   3.) Szintén ugyan ezen az oldalon a Kategórianév módosítása gombra kattintva megváltoztathatjuk a Kategória nevét
  +   4.) Az Alkatrészek navigációs gomb almenüjére kattintva egy új oldalra lépünk, ahol új kategóriát és új alkatrészt adhatunk az Alkatrészek oldalhoz.
  +   5.) A Saját összeállítás navigációs gombra kattintva megnézhetjük eddigi saját válogatásunkat, és új elemeket is adhatunk KATEGÓRIÁNKÉNT az összeállításhoz az Alkatrész választása gombbal.
  +   6.) Ez is egy új oldalra vezet minket, ahol a kategória összes alkatrészéből választhatjuk ki a számunkra megfelőeket.
  +   7.) A Saj. össz. oldalon tudunk törölni a kis kuka ikonnal alkatrészeket, amik többé nem illenek az összeállításunkba.
  +   8.) A  keresősávba írva megalálhatjuk az általunk keresett alkatrészt, ám ha üresen kattintunk a keresés gombra, akkor az összes alkatrészt megmutatja nekünk a kereső.
  +   9.) Ha végeztünk a böngészéssel, akkor a jobb felső sarokban található kijelentkezés gombbal kijelentkezhetünk az oldalról.
  
  
## 5. Selenium IDE tesztelések

  +   **Telepítés/használat**
  
    +   Először is telepítenünk kell a Selenium IDE firefox plug-in -t.
    +   Miután ezt megtettük, nyissuk meg a Selenium IDE-t.
    +   Nyissuk meg a teszteseteket, amelyeket a "Selenium test" mappában találunk
    +   A 2. kis zöld lejátszás gombra kattintva egyesével futtathatjuk a kiválasztott automata teszteseteket.
    +   Miután lefutott lépjünk a következő tesztesetre és futtassuk, és így tovább, míg véget nem ért az összes.
    
  +   **Tesztesetek**
  
    +   Először a regisztráció tesztelése: 
      +   Egy random névvel, e-mail címmel, és jelszóval elláttam a kitöltendő mezőket és létrehoztam a felhasználót.
    
    +   Utána az éppen létrehozott felhasználóval: 
      +   eléptem, majd az alkatrészek kategóriájához adtam egy új kategóriát, abba mindjárt egy új alkatrészt.
      +   Utána a Saját összeállítás oldalon feltöltöttem a kategóriákat alkatrészekkel, majd cseréltem új alkatrészeket, és kidobtam a             régebben kiválasztottakat.
      +   Ezután kijelentkeztem.
    
    +   A beadandó írása alatt is használt felhasználóval belépek, módosítgatok az alkatrészeken, majd a saját összeállításoko, és                kilépek. 
    +   Hasonlóan belépek egy felhasználóval és módosításokat végzek.

## 6. Irodalomjegyzék

  + http://webprogramozas.inf.elte.hu/alkfejl.
  
  + http://webprogramozas.inf.elte.hu/alkfejl/A_dokumentacio_felepitese.
  
  + http://ade.web.elte.hu/wabp/
