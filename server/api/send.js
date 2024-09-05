export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();
  async function sendTelegram(data, leadId) {
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

    if (leadId) {
      text += `\n\nbitrixID: ${leadId}`;
    }

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
  async function sendWebhook(data) {
    const baseUrl =
      "https://portal.gsbk.ru/rest/4780/ybfnxycfrf1tofll/crm.lead.add";

    const encodeValue = (value) => (value ? encodeURIComponent(value) : "");

    const queryParams = new URLSearchParams({
      "fields[TITLE]": `Заявка c сайта: harizmi.ru, Тип: ${
        data.type || "Неизвестно"
      }`,
      "fields[WEB][0][VALUE]": "harizmi.ru",
      "fields[WEB][0][VALUE_TYPE]": "WORK",
      "fields[SOURCE_ID]": "9091902019",
    });

    // Добавляем поля только если они существуют
    if (data?.name) {
      queryParams.append("fields[NAME]", data.name);
    }

    if (data?.phone) {
      queryParams.append("fields[PHONE][0][VALUE]", data.phone);
      queryParams.append("fields[PHONE][0][VALUE_TYPE]", "WORK");
    }

    if (data?.email) {
      queryParams.append("fields[EMAIL][0][VALUE]", data.email);
      queryParams.append("fields[EMAIL][0][VALUE_TYPE]", "WORK");
    }
    const webhookUrl = `${baseUrl}?${queryParams.toString()}`;
    console.log("Webhook URL:", webhookUrl.toString());
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(
          `Failed to send data to webhook: ${response.statusText}`
        );
      }
      const responseData = await response.json();
      return responseData.result;
    } catch (error) {
      console.error("Error sending to webhook:", error);
      throw error;
    }
  }

  try {
    const leadId = await sendWebhook(body);
    await sendTelegram(body, leadId);

    return { success: true, message: "Message sent to Telegram" };
  } catch (error) {
    return { success: false, message: error.message };
  }
});
