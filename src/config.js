// Central place for business info — update here and it changes everywhere on the site.
export const BUSINESS = {
  name: 'LS Detailing',
  phoneDisplay: '(787) 932-8915',
  phoneHref: 'tel:+17879328915',
  smsHref: 'sms:+17879328915',
  address: '364 Grant Avenue #36B',
  cityStateZip: 'Junction City, KS 66441',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=364+Grant+Avenue+%2336B%2C+Junction+City%2C+KS+66441',
  facebookUrl: 'https://www.facebook.com/search/top?q=luis%20detailing',
  instagramUrl: 'https://www.instagram.com/',
  serviceAreas: ['Junction City', 'Fort Riley', 'Manhattan', 'Grandview Plaza', 'Ogden'],

  // Quote-form automation (FormSubmit — free, no account needed):
  // 1. Put Luis's real email below.
  // 2. Submit the form once; FormSubmit sends a confirmation email — click the link in it.
  // 3. Every quote request after that lands in his inbox automatically.
  // Until a real email is set, the form falls back to opening a pre-filled text
  // message to the shop phone, so no lead is ever lost.
  quoteEmail: 'REPLACE_ME@example.com',
}

export const isQuoteEmailConfigured = () =>
  !BUSINESS.quoteEmail.includes('REPLACE_ME')
