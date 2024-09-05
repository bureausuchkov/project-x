import { ref } from "vue";

export default function useSendForm(type) {
  const success = ref(false);

  async function sendForm(form) {
    const { data } = await useFetch("/api/send", {
      method: "POST",
      body: { type: type, ...form },
    });

    if (data.value?.success) {
      success.value = true;
    } else {
      alert("Произошла ошибка. Попробуйте ещё раз");
    }

    return success.value;
  }

  return {
    success,
    sendForm,
  };
}
