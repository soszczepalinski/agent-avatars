# Nudny biznes: „Zaległe” — automatyczne odzyskiwanie należności dla małych firm

> Robocza nazwa. Domenę i znak towarowy trzeba sprawdzić przed startem.

## 1. Pomysł w jednym zdaniu

Usługa SaaS, która sama pobiera wystawione faktury z KSeF, dopasowuje je do wyciągu bankowego,
a niezapłacone grzecznie, ale konsekwentnie przypomina klientom: mail → SMS → wezwanie do zapłaty
→ nota z rekompensatą 40/70/100 EUR → przygotowanie pozwu w EPU. Właściciel firmy nic nie robi,
dostaje tylko pieniądze i raport w poniedziałek.

## 2. Dlaczego to dobry „nudny” biznes

| Cecha | Dlaczego się zgadza |
|---|---|
| Ból jest prawdziwy i powtarzalny | Zatory płatnicze to stały problem małych firm. Nikt nie lubi dzwonić po pieniądze. |
| Moment rynkowy | KSeF jest obowiązkowy od 2026 r., więc faktury wszystkich firm są w jednym API. Nie trzeba integrować kilkudziesięciu programów do fakturowania. |
| Usługa sama się spłaca | Ustawa o przeciwdziałaniu nadmiernym opóźnieniom pozwala doliczyć rekompensatę 40 EUR (do 5 tys. zł), 70 EUR (5–50 tys. zł) lub 100 EUR (powyżej 50 tys. zł) za każdą spóźnioną fakturę B2B. Jedna odzyskana rekompensata ≈ miesiąc abonamentu. |
| Nikt o tym nie mówi na konferencjach | Mało konkurencji „z hype'u”. Programy do faktur mają przypomnienia, ale proste i ręczne. |
| Kanał dotarcia już istnieje | Biura rachunkowe obsługują tysiące małych firm i szukają usług dodatkowych dla klientów. |
| Abonament + niski churn | Jak już działa i odzyskuje pieniądze, nikt go nie wyłącza. |

## 3. Klient

- **Klient główny:** firma B2B, 1–20 osób, 20–300 faktur miesięcznie, płatności przelewem z terminem
  (hurtownie, transport, usługi IT, budowlanka, agencje, serwisy).
- **Kanał:** biura rachunkowe (program partnerski: 20–30% prowizji dożywotnio albo konto biura
  z wieloma klientami).
- **Nie celujemy (na start):** B2C, windykacja na zlecenie (licencje, ryzyko), duże firmy z własnym działem.

## 4. Produkt — zakres MVP (tylko to, nic więcej)

1. **Podłączenie KSeF** — token/certyfikat firmy, pobieranie faktur sprzedażowych co kilka godzin.
2. **Podłączenie banku** — na start import wyciągu (CSV / MT940) mailem lub uploadem; później Open Banking (AIS) przez agregatora.
3. **Dopasowanie płatności** — po numerze faktury w tytule, kwocie, NIP/rachunku kontrahenta; niejasne przypadki do ręcznego kliknięcia.
4. **Scenariusz przypomnień** (domyślny, edytowalny):
   - D-3: „przypominamy o terminie” (mail),
   - D+3: uprzejme przypomnienie (mail),
   - D+10: przypomnienie + SMS,
   - D+21: wezwanie do zapłaty PDF + nota obciążeniowa z rekompensatą i odsetkami,
   - D+35: paczka dokumentów do EPU / zgłoszenia do biura informacji gospodarczej (przez partnera).
5. **Wysyłka z adresu klienta** (własna domena / SPF/DKIM) — dłużnik widzi wierzyciela, nie nas.
6. **Panel** — lista zaległości, kto ile wisi, ile odzyskano; cotygodniowy raport mailem.
7. **Przycisk „wstrzymaj”** dla kontrahenta, z którym właściciel chce pogadać sam.

Poza MVP: Open Banking, dzwonienie głosem, scoring kontrahentów, integracje z programami księgowymi, aplikacja mobilna.

## 5. Model przychodów

| Plan | Cena netto / mies. | Limit |
|---|---|---|
| Start | 49 zł | do 30 faktur/mies. |
| Firma | 129 zł | do 200 faktur/mies., SMS w cenie |
| Biuro rachunkowe | 39 zł za firmę-klienta | panel wielu firm, rabat od 20 firm |

Dodatkowo (później): opłata za przygotowanie dokumentów do EPU, prowizja od partnera BIG.

**Cel 12 miesięcy:** 300 płacących firm × ~90 zł średnio ≈ **27 tys. zł MRR**.
Koszty stałe na start: hosting, bramka SMS, mailing, księgowość, ubezpieczenie OC, prawnik — rząd 2–4 tys. zł/mies.

## 6. Plan wdrożenia

### Tydzień 0–2: Walidacja (zero kodu)
- [ ] 20 rozmów z właścicielami małych firm B2B i 10 z biurami rachunkowymi. Pytania: ile macie przeterminowanych należności, kto dziś przypomina, ile byście zapłacili.
- [ ] Landing page z cennikiem i przyciskiem „zapisz się na wczesny dostęp”, 500–1000 zł na reklamy (Facebook/LinkedIn, grupy przedsiębiorców).
- [ ] **Przedsprzedaż:** 10 firm płaci za pierwsze 3 miesiące z góry albo podpisuje list intencyjny.
- [ ] Konsultacja z prawnikiem: RODO (powierzenie przetwarzania), treść wezwań, czy działamy jako narzędzie wierzyciela (tak) a nie firma windykacyjna.
- **Kryterium stop:** mniej niż 5 przedsprzedaży po 3 tygodniach → zmieniamy segment albo pomysł.

### Tydzień 3–6: MVP „concierge”
- [ ] Część rzeczy ręcznie (dopasowanie płatności, wysyłka wezwań), automaty tylko tam, gdzie to proste.
- [ ] Integracja z API KSeF (środowisko testowe → produkcyjne), import CSV z 3 najpopularniejszych banków.
- [ ] Silnik scenariuszy przypomnień + szablony maili/SMS/PDF.
- [ ] Prosty panel i raport tygodniowy.
- [ ] Umowa powierzenia, regulamin, polityka prywatności.
- [ ] 10 firm z przedsprzedaży na produkcji.

### Tydzień 7–12: Automatyzacja i pierwsze liczby
- [ ] Automatyczne dopasowanie płatności (cel: >85% bez ręcznego kliknięcia).
- [ ] Nota z rekompensatą i odsetkami generowana automatycznie.
- [ ] Mierzymy: odzyskana kwota, średni czas zapłaty przed/po (DSO), churn.
- [ ] Case study z 2–3 firm („skrócili czas zapłaty z 41 do 19 dni”).
- [ ] Start programu partnerskiego dla biur rachunkowych — 5 pierwszych biur.

### Miesiąc 4–6: Skalowanie kanału
- [ ] Panel dla biur rachunkowych (wiele firm, zbiorczy raport).
- [ ] Open Banking przez licencjonowanego agregatora zamiast CSV.
- [ ] Treści SEO: „jak wystawić notę z rekompensatą 40 euro”, „wzór wezwania do zapłaty”, kalkulator odsetek — darmowe narzędzia jako lejek.
- [ ] Cel: 100 płacących firm, 20 biur partnerskich.

### Miesiąc 7–12: Dowożenie
- [ ] Paczka do EPU, partnerstwo z biurem informacji gospodarczej.
- [ ] Integracje z popularnymi programami do faktur (dla firm, które chcą statusy płatności z powrotem).
- [ ] Cel: 300 płacących firm, ~27 tys. zł MRR, churn < 3% miesięcznie.

## 7. Stack technologiczny (nudny, celowo)

- Backend: jeden monolit (np. Python/Django albo TypeScript/Node), PostgreSQL, kolejka zadań (cron + worker).
- Mail: dostawca transakcyjny z obsługą domen klientów (SPF/DKIM). SMS: polska bramka SMS.
- PDF: szablony HTML → PDF.
- Hosting: jeden serwer w UE + backupy; dane finansowe szyfrowane w spoczynku.
- Monitoring: logi błędów + alert, gdy KSeF albo import banku przestanie działać.

## 8. Podział pracy (nasi agenci)

| Agent | Odpowiada za |
|---|---|
| **Mrs. Thinker** | walidacja, rozmowy z klientami, decyzje go/no-go, cennik |
| **Mr. Builder** | integracja KSeF, import banku, silnik przypomnień, panel |
| **Mr. Tester** | testy dopasowania płatności, scenariusze brzegowe (częściowe wpłaty, korekty, kompensaty), środowisko testowe KSeF |
| **Miss Optimizer** | skuteczność przypomnień (A/B treści, godziny wysyłki), koszty SMS/maili, wydajność |
| **Mr. Talker** | landing, treści SEO, program partnerski z biurami rachunkowymi, onboarding |
| **Designer** | panel, szablony wezwań i maili, raport tygodniowy |
| **Mr. Balance** | finanse, cashflow firmy, umowy, RODO, ryzyka prawne |

## 9. Ryzyka i co z nimi robimy

| Ryzyko | Odpowiedź |
|---|---|
| Programy do fakturowania dodadzą to samo | Wygrywamy głębią (dopasowanie bankowe, rekompensaty, EPU) i kanałem biur rachunkowych, które obsługują firmy na różnych programach. |
| Klienci boją się „straszyć” kontrahentów | Łagodne domyślne treści, przycisk „wstrzymaj”, pokazywanie, że to standardowa praktyka. |
| Zmiany w API KSeF / przesunięcia terminów | Moduł KSeF izolowany, import CSV/XML faktur jako plan B. |
| RODO i bezpieczeństwo danych | Umowa powierzenia, serwery w UE, szyfrowanie, minimalny zakres danych, regularne kopie. |
| Granica z działalnością windykacyjną | Zawsze działamy w imieniu wierzyciela jako narzędzie; nie przejmujemy wierzytelności i nie prowadzimy windykacji na zlecenie. Potwierdzić z prawnikiem w tygodniu 0–2. |

## 10. Liczby, które śledzimy co tydzień

1. Płacące firmy i MRR
2. Kwota odzyskana dla klientów (najważniejszy argument sprzedażowy)
3. Średni czas zapłaty (DSO) przed / po
4. % płatności dopasowanych automatycznie
5. Churn i powód odejścia

## 11. Pierwsze 72 godziny („robimy, nie śpimy”)

1. **Dziś:** lista 50 firm B2B i 20 biur rachunkowych do kontaktu; skrypt rozmowy (5 pytań).
2. **Jutro:** landing z cennikiem i formularzem; 10 pierwszych rozmów umówionych.
3. **Pojutrze:** prototyp — skrypt, który z pliku faktur i wyciągu CSV wypluwa listę zaległości i gotowe maile. Pokazujemy go na rozmowach zamiast slajdów.
