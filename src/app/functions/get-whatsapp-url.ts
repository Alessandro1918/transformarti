export function getWhatsappUrl(message: string):string {
  const whatsappPhone = process.env.WHATSAPP_PHONE || "5511965745577"
  const whatsappText = message
  const whatsappEncodedText = encodeURIComponent(whatsappText)
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappPhone}&text=${whatsappEncodedText}`
  return whatsappUrl
}
