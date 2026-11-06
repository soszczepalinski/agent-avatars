# Nudny biznes #2: „Akcept” — akceptacje i kontrola kreacji dla agencji reklamowych

> Robocza nazwa. Domenę i znak towarowy trzeba sprawdzić przed startem.

## 1. Pomysł w jednym zdaniu

Jedno miejsce, w którym klient agencji akceptuje kreacje (banery, wideo, posty, teksty), a system przed
wysyłką sprawdza je pod kątem wymogów platform i przepisów (wymiary, limity tekstu, oznaczenie
„reklama”, RRSO w reklamach kredytów, oznaczenie treści z AI) i trzyma archiwum: kto, co i kiedy zaakceptował.

Koniec z mailami „final_v7_POPRAWIONY_ostateczny.jpg” i sporami „przecież tego nie akceptowaliśmy”.

## 2. Dlaczego to dobry „nudny” biznes

| Cecha | Dlaczego się zgadza |
|---|---|
| Ból codzienny | Każda agencja akceptuje dziesiątki–setki kreacji miesięcznie mailem, na WhatsAppie i w komentarzach w PDF-ach. Gubią się wersje i uwagi. |
| Spory kosztują | Gdy kampania pójdzie z błędem (zła cena, brak dopisku prawnego), wygrywa ten, kto ma dowód akceptacji. Archiwum to polisa agencji. |
| Moment rynkowy | Generatywne AI zwielokrotniło liczbę wariantów kreacji (więcej do akceptacji). Do tego obowiązki przejrzystości z AI Act (art. 50, stosowane od sierpnia 2026), wytyczne UOKiK o oznaczaniu reklam u influencerów, wymogi dla reklam kredytów i suplementów. |
| Lokalna przewaga | Zagraniczne narzędzia do proofingu są drogie, po angielsku i nie znają polskich przepisów. My robimy polskie listy kontrolne i polski interfejs dla klienta. |
| Abonament, niski churn | Gdy klienci agencji przyzwyczają się do linku akceptacyjnego, agencja go nie wyłącza. Archiwum też trzyma. |
| Klient płaci chętnie | Agencja może doliczyć to klientowi jako „bezpieczny proces akceptacji”. |

## 3. Klient

- **Główny:** agencje reklamowe, social media i performance, 3–50 osób, wielu klientów naraz.
- **Drugi:** działy marketingu firm z regulowanych branż (finanse, farmacja/suplementy, alkohol, deweloperzy), które współpracują z kilkoma agencjami.
- **Kanał:** bezpośrednio do właścicieli agencji, grupy i stowarzyszenia branżowe, partnerstwo z kancelariami od prawa reklamy (one dostarczają listy kontrolne, my klientów).

## 4. Produkt — zakres MVP

1. **Link akceptacyjny dla klienta** — bez zakładania konta: klient widzi kreację, klika na niej, zostawia uwagę albo „akceptuję”.
2. **Wersjonowanie** — v1, v2, v3 obok siebie, widać co się zmieniło i które uwagi zostały poprawione.
3. **Automatyczna kontrola przed wysyłką** do klienta:
   - specyfikacje platform (wymiary, długość wideo, waga pliku, strefy bezpieczne, limity znaków),
   - pisownia i literówki w tekstach,
   - lista kontrolna branży: np. kredyt → czy jest przykład reprezentatywny z RRSO; influencer → czy jest oznaczenie reklamy; treść z AI → czy jest oznaczenie, gdy jest wymagane,
   - wynik: „OK / do sprawdzenia” z wyjaśnieniem. **Narzędzie wspiera, nie jest poradą prawną.**
4. **Archiwum dowodowe** — zaakceptowana wersja, kto, kiedy, z jakiego adresu, eksport do PDF.
5. **Powiadomienia i przypomnienia** — „czekamy na akceptację od 2 dni” (mail/Slack).
6. **Panel agencji** — co czeka na klienta, co na grafika, co poszło na produkcję.

Poza MVP: integracje z Meta/Google Ads (wysyłka zaakceptowanej kreacji prosto do kampanii), wtyczka do Figmy, akceptacje wideo z kodem czasowym, raporty czasu akceptacji per klient.

## 5. Model przychodów

| Plan | Cena netto / mies. | Dla kogo |
|---|---|---|
| Studio | 199 zł | do 5 użytkowników agencji, 5 klientów |
| Agencja | 499 zł | do 20 użytkowników, bez limitu klientów, listy kontrolne branż |
| Agencja+ | 999 zł | bez limitu, archiwum 5 lat, własna domena i logo |

Klienci agencji (akceptujący) zawsze za darmo — to oni nas rozsyłają dalej.
Dodatkowo (później): płatne pakiety list kontrolnych przygotowane z kancelarią, wersja dla działów marketingu firm.

**Cel 12 miesięcy:** 120 agencji × ~400 zł średnio ≈ **48 tys. zł MRR**.

## 6. Plan wdrożenia

### Tydzień 0–2: Walidacja (zero kodu)
- [ ] 20 rozmów z właścicielami/account managerami agencji. Pytania: ile kreacji akceptujecie miesięcznie, gdzie, ile rund poprawek, kiedy ostatnio był spór o akceptację, czym dziś to robicie.
- [ ] 5 rozmów z marketingiem firm z branż regulowanych i 2 z kancelariami od prawa reklamy.
- [ ] Landing z cennikiem i nagraniem 60 s „jak to wygląda dla klienta”.
- [ ] **Przedsprzedaż:** 8 agencji płaci za 3 miesiące z góry (rabat dla pierwszych).
- **Kryterium stop:** mniej niż 5 przedsprzedaży po 3 tygodniach → zmieniamy segment lub pomysł.

### Tydzień 3–6: MVP
- [ ] Upload kreacji, link akceptacyjny, komentarze na obrazku, wersje, przycisk „akceptuję”.
- [ ] Kontrola specyfikacji dla Meta, Google, TikTok, LinkedIn (wymiary, wagi, długości, znaki).
- [ ] 3 pierwsze listy kontrolne: influencer marketing, reklama kredytu, treści generowane przez AI.
- [ ] Archiwum z eksportem PDF.
- [ ] Regulamin, umowa powierzenia (RODO), zastrzeżenie „to nie porada prawna”.
- [ ] 8 agencji z przedsprzedaży na produkcji.

### Tydzień 7–12: Dopracowanie i liczby
- [ ] Przypomnienia mail/Slack, panel „kto na kogo czeka”.
- [ ] Mierzymy: liczba rund poprawek, czas od wysłania do akceptacji, błędy złapane przed publikacją.
- [ ] 2–3 case study („akceptacja z 4 dni do 1 dnia”, „złapane 12 braków oznaczeń w miesiącu”).
- [ ] Partnerstwo z 1–2 kancelariami: współtworzone listy kontrolne + wspólne webinary.

### Miesiąc 4–6: Kanał i głębia
- [ ] Akceptacje wideo z kodem czasowym, wtyczka do Figmy.
- [ ] Białe etykiety (logo i domena agencji) w planie Agencja+.
- [ ] Treści SEO i darmowe narzędzia: „sprawdzarka wymiarów kreacji”, „jak oznaczyć reklamę u influencera”, „wzór akceptacji kreacji”.
- [ ] Cel: 50 płacących agencji.

### Miesiąc 7–12: Rozszerzenie
- [ ] Wysyłka zaakceptowanych kreacji prosto do Meta/Google Ads.
- [ ] Wersja dla działów marketingu firm (wiele agencji pod jednym kontem).
- [ ] Cel: 120 agencji, ~48 tys. zł MRR, churn < 3% miesięcznie.

## 7. Stack technologiczny (nudny, celowo)

- Jeden monolit (np. TypeScript/Node albo Python/Django), PostgreSQL, magazyn plików S3-kompatybilny w UE.
- Podgląd obrazów, PDF i wideo w przeglądarce; komentarze jako współrzędne na obrazku/klatce.
- Kontrola specyfikacji: proste reguły (wymiary, wagi, znaki). Kontrola treści: reguły + model językowy jako „drugi czytelnik”, zawsze z wynikiem „do sprawdzenia”, nigdy „zgodne z prawem”.
- Archiwum: niezmienialne wpisy (hash pliku, znacznik czasu, adres akceptującego).

## 8. Podział pracy (nasi agenci)

| Agent | Odpowiada za |
|---|---|
| **Mrs. Thinker** | rozmowy z agencjami, wybór branż do list kontrolnych, cennik, go/no-go |
| **Designer** | widok akceptacji dla klienta (musi być prostszy niż mail), panel, eksport PDF |
| **Mr. Builder** | upload, wersje, komentarze, archiwum, kontrola specyfikacji |
| **Mr. Tester** | testy na prawdziwych kreacjach, przypadki brzegowe (warianty, karuzele, wideo), poprawność reguł |
| **Miss Optimizer** | czas akceptacji, liczba rund, szybkość podglądu dużych plików, koszty przechowywania |
| **Mr. Talker** | landing, webinary z kancelariami, społeczność agencji, onboarding |
| **Mr. Balance** | finanse, umowy, RODO, granica „narzędzie vs porada prawna” |

## 9. Ryzyka i co z nimi robimy

| Ryzyko | Odpowiedź |
|---|---|
| Istniejące narzędzia do proofingu | Polski rynek, polskie przepisy, prostszy widok dla klienta, niższa cena za agencję, nie za użytkownika. |
| Odpowiedzialność za błędną kontrolę prawną | Wynik zawsze „do sprawdzenia”, jasne zastrzeżenia w regulaminie, listy kontrolne współtworzone z kancelarią, ubezpieczenie OC. |
| Agencje nie chcą zmieniać nawyków | Klient nie zakłada konta i nic nie instaluje; pierwszy projekt wgrywamy za agencję. |
| Przepisy się zmieniają | Listy kontrolne wersjonowane, aktualizowane z partnerem prawnym; to też argument za abonamentem. |
| Poufność kreacji przed premierą | Serwery w UE, linki z wygasaniem, uprawnienia, logi dostępu. |

## 10. Liczby, które śledzimy co tydzień

1. Płacące agencje i MRR
2. Kreacje przesłane do akceptacji (aktywność)
3. Średni czas do akceptacji i liczba rund poprawek
4. Błędy złapane przez kontrolę przed publikacją
5. Churn i powód odejścia

## 11. Pierwsze 72 godziny

1. **Dziś:** lista 40 agencji (social, performance, małe full-service) + 10 firm z branż regulowanych; skrypt rozmowy (5 pytań).
2. **Jutro:** landing z cennikiem i makietą widoku akceptacji; 8 rozmów umówionych.
3. **Pojutrze:** klikalny prototyp: wgrywasz baner, dostajesz raport specyfikacji i link akceptacyjny. Pokazujemy go na rozmowach.

## Alternatywy, gdyby walidacja nie wyszła

- **Rozliczenia mediowe dla agencji** — dopasowanie faktur z Meta/Google do budżetów klientów, alarm przekroczenia budżetu, refaktura bez wycieku marży.
- **Raporty kampanii dla klientów agencji** — automatyczny miesięczny raport po polsku z komentarzem; rynek zatłoczony, więc tylko z wąską niszą (np. deweloperzy, kliniki).
