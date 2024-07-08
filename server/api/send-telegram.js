export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();
  async function sendTelegram(data) {
    const token = config.TELEGRAM_BOT_TOKEN;
    const idChat = config.TELEGRAM_CHAT_ID;

    // Объект для перевода ключей
    const translations = {
      name: "Имя",
      phone: "Телефон",
      email: "Электронная почта",
      type: "Тип заявки",
      accept: "Согласие на обработку персональных данных",
    };

    const translateKey = (key) => translations[key] || key;

    let text = Object.entries(data)
      .map(([key, value]) => `${translateKey(key)}: ${value}`)
      .join("\n");

    text = encodeURIComponent(text);
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${idChat}&text=${text}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to send message to Telegram");
      }
      return true;
    } catch (error) {
      console.error("Error sending to Telegram:", error);
      throw error;
    }
  }

  try {
    await sendTelegram(body);
    return { success: true, message: "Message sent to Telegram" };
  } catch (error) {
    return { success: false, message: error.message };
  }
});
