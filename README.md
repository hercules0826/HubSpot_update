# 🌿 SAGE — Senior Care Discovery Platform  
> Compassion-first platform helping families find the right senior care, fast.

SAGE guides families through a compassionate intake process, recommends local senior communities based on budget & care needs, and automates lead routing to advisors and care providers.

Families navigating memory care, dementia, or assisted living often feel overwhelmed. SAGE gives them clarity, warmth, and trusted guidance.

---

## ✨ Key Features

### 👨‍👩‍👧 Family Experience
- Guided senior-care questionnaire
- Modern UI w/ warm, calming design
- Personalized recommendations
- Google Map + card layout
- Mobile responsive

### 🏢 Community & Staff Platform
- Community listing submission
- Photos, amenities, pricing, care types
- Admin approval system
- Edit + moderation dashboard
- Analytics & insights dashboard

### 🧠 Automation & CRM
- HubSpot integration  
- Contacts + pipeline sync  
- Email + SMS alerts (Twilio + Nodemailer)
- Lead queue & advisor digest

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|-----------|
| Frontend | Next.js (App Router), TypeScript, Tailwind, Framer Motion |
| Auth | NextAuth (credentials + roles) |
| Maps | Google Maps JS API |
| CRM | HubSpot Private App API |
| Email | Nodemailer |
| SMS | Twilio |
| Hosting | Vercel (recommended) |

---

## 📂 Directory Structure

app/
 ├─ api/
 │   └─ submit-lead/      # HubSpot + email + SMS pipeline
 ├─ admin/                # Admin dashboard
 ├─ care-discovery/       # Questionnaire flow
 ├─ community/          # Dynamic community pages w/ SEO
 ├─ login                 # Auth page
 ├─ results               # Map + community cards
components/
 ├─ Header / Footer
 ├─ Buttons / Cards / Modals
lib/
 └─ auth.ts               # NextAuth config + roles



---

## 🔧 Environment Setup

Create `.env.local`:

```env
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000

# HubSpot
HUBSPOT_PRIVATE_APP_TOKEN=pat-xxxxx

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=xxxx

# Email
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM="SAGE Team <your@gmail.com>"

# SMS / Twilio
TWILIO_SID=ACxxxx
TWILIO_AUTH_TOKEN=xxxx
TWILIO_FROM=+15551234567
ADVISOR_PHONE=+15557654321

## 🚀 Local Development

git clone https://github.com/hercules0826/HubSpot_update.git
cd HubSpot_update
npm install
npm run dev
