# BarakahBoost Next.js App

Dit is de Next.js 14 (App Router) implementatie van de **BarakahBoost** website. Het project is voorzien van een premium glass design en is geoptimaliseerd voor SEO, snelheid en responsiviteit op mobiel.

---

## 🛠️ Technologieën

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animaties**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [Web3Forms API](https://web3forms.com/)
- **Calendars**: [Cal.com](https://cal.com/)

---

## ⚙️ Environment Variables (Gevoelige Gegevens)

Alle gevoelige gegevens en contactinformatie zijn verplaatst naar omgevingsvariabelen (`environment variables`). 

### 1. Setup
Kopieer de template `.env.example` naar `.env.local`:
```bash
cp .env.example .env.local
```

### 2. Configureer `.env.local`
Vul de juiste waarden in:
- `NEXT_PUBLIC_CONTACT_EMAIL`: Het e-mailadres voor de contactlinks (bijv. `info@barakahboost.nl`).
- `NEXT_PUBLIC_CONTACT_PHONE`: Het opgemaakte telefoonnummer (bijv. `+31 6 85546310`).
- `NEXT_PUBLIC_CONTACT_PHONE_RAW`: Het telefoonnummer zonder spaties voor `tel:` links (bijv. `+31685546310`).
- `NEXT_PUBLIC_CONTACT_PHONE_WHATSAPP`: Het WhatsApp-telefoonnummer in internationaal formaat (zonder `+` of `00`, bijv. `31685546310`).
- `NEXT_PUBLIC_CONTACT_KVK`: Het KvK-nummer.
- `NEXT_PUBLIC_CONTACT_ADDRESS_STREET`: De straatnaam en het huisnummer (bijv. `Parkweg 226 B`).
- `NEXT_PUBLIC_CONTACT_ADDRESS_CITY`: Postcode en plaatsnaam (bijv. `3119 CR Schiedam`).
- `NEXT_PUBLIC_CAL_LINK`: Jouw Cal.com weblink (bijv. `username/meeting-slug`).
- `NEXT_PUBLIC_CAL_NAMESPACE`: De namespace voor Cal.com (meestal de slug, bijv. `15min`).
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`: De Access Key van Web3Forms voor het contactformulier.

> [!WARNING]
> Voeg `.env.local` **nooit** toe aan git. Dit bestand bevat gevoelige productie-gegevens. Het is al uitgesloten in `.gitignore`.

---

## 🚀 Aan de slag

### Development Server starten
Installeer de dependencies en start de lokale server:
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in je browser om het resultaat te bekijken.

### Productie Build maken
Om de applicatie lokaal te compileren en te testen voor productie:
```bash
npm run build
npm run start
```
Dit genereert een statisch geoptimaliseerde build in de `.next` map.
