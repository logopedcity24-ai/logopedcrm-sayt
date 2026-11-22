export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, center, plan } = req.body || {};

    const botToken = "8949553941:AAGqY-QlksXv5T4bbRzpGM49S-Y_-jT9hiA";
    const targets = ["6304747335", "7159728200"];

    const cleanPhone = String(phone || '').replace(/[^0-9+]/g, '');
    const escapeHtml = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const timeStr = new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' });

    const text = `🚀 <b>YANGI DEMO ARIZA — LogopedCRM!</b>\n\n` +
      `👤 <b>Mijoz:</b> ${escapeHtml(name)}\n` +
      `📞 <b>Telefon:</b> <a href="tel:${cleanPhone}">${escapeHtml(phone)}</a>\n` +
      `🏢 <b>Markaz / Shahar:</b> ${escapeHtml(center)}\n` +
      `📦 <b>Tanlangan Tarif:</b> ${escapeHtml(plan)}\n` +
      `🌐 <b>Manba:</b> LogopedCRM Vercel Sayti\n` +
      `📅 <b>Sana va Vaqt:</b> ${timeStr}\n\n` +
      `⚡️ <i>Tezroq bog'lanib demo hisob ochib bering!</i>`;

    const results = await Promise.all(
      targets.map(async (chatId) => {
        try {
          const resp = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatId,
              text: text,
              parse_mode: 'HTML'
            })
          });
          return await resp.json();
        } catch (e) {
          return { ok: false, error: e.message };
        }
      })
    );

    return res.status(200).json({ ok: true, results });
  } catch (error) {
    console.error('Lead API error:', error);
    return res.status(500).json({ ok: false, error: error.message });
  }
}
