# 🌐 LogopedCRM — Sotuvga Yo'naltirilgan Mustaqil Veb-sayt

Ushbu papka **LogopedCRM** boshqaruv tizimini boshqa logopedik va korreksion markazlarga sotish uchun yaratilgan **to'liq mustaqil, alohida veb-sayt (Landing Page)** hisoblanadi.

Bu sayt asosiy CRM tizimidan butunlay ajratilgan bo'lib, uni **Vercel** yoki boshqa istalgan xostingga 1 daqiqada bepul joylashtirishingiz (deploy qilishingiz) mumkin.

---

## 🚀 Vercel orqali Saytni Ishga Tushirish (Deploy qilish)

Saytni Vercel ga joylashtirishning **2 ta eng oson usuli** mavjud:

### 1-usul: GitHub + Vercel orqali (Tavsiya etiladi)
1. Ushbu `logopedcrm-sayt` papkasini yangi alohida GitHub repozitoriyga yuklang (masalan: `logopedcrm-website`).
2. [vercel.com](https://vercel.com) ga kiring va **"Add New Project"** tugmasini bosing.
3. GitHub dagi repozitoriyingizni tanlang.
4. Hech narsani o'zgartirmasdan **"Deploy"** tugmasini bosing.
5. Vercel sizga 10 soniyada tayyor domen (masalan: `https://logopedcrm.vercel.app`) beradi! Xohlasangiz o'z shaxsiy domeningizni ham ulashingiz mumkin.

### 2-usul: Vercel CLI orqali (Terminalda 1 ta buyruq bilan)
Terminalda ushbu papka ichiga kiring va buyruq bering:
```bash
npx vercel
```
Vercel avtomatik tarzda saytni internetga yuklaydi va sizga havolasini beradi.

---

## 🤖 Lidlar va Botlar Qanday Ulangan?

Saytda mijozlar arizasi qoldirilganda:
1. **Telegram Bot (@saytlogopedcity_bot)**:
   - Ariza yuborilgan soniyada mas'ul rahbar/menejerlarning Telegramiga yangi mijoz haqida to'liq xabar boradi (Markaz nomi, Ism, Telefon, Tanlangan tarif).
2. **Instagram Direct (@logoped_city)**:
   - Saytda to'g'ridan-to'g'ri Instagram Direct tugmasi joylashtirilgan.
   - Mijoz ushbu tugmani bosganda sizning `@logoped_city` Instagram akkauntingiz directiga o'tadi va mavjud Instagram AI botingiz uni avtomatik qabul qiladi.
3. **Logoped City CRM Boshqaruvi**:
   - Arizalar avtomatik ravishda CRM serverining `/api/leads` manziliga ham yuboriladi.

---

## 📁 Fayllar Strukturasi
* `index.html` — Barcha dizayn, kalkulyator, tariflar va bot integratsiyasini o'z ichiga olgan asosiy veb-sahifa.
* `vercel.json` — Vercel uchun xavfsizlik va yo'naltirish sozlamalari.
* `assets/` — Logotip va rasmlar.
