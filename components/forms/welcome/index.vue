<template>
  <div class="relative pb-2">
    <div class="md:text-lg md:mb-[6.75rem] mb-10 pr-5">{{ title }}</div>
    <div
      class="flex items-center bg-black absolute inset-0 z-20 text-lg"
      v-if="success"
    >
      <span>
        Спасибо, ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.
      </span>
    </div>
    <form class="font-benzin" @submit.prevent="submitForm">
      <label class="block relative group">
        <input
          v-model="form.name"
          class="peer py-2.5 w-full md:text-lg text-sm bg-transparent placeholder:text-transparent transition-all outline-none border-b-2"
          type="text"
          placeholder="Имя*"
        />
        <span class="absolute left-0 bottom-0 w-full h-0.5 bg-white"></span>
        <span
          class="peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:top-[-1.625rem] peer-[&:not(:placeholder-shown)]:text-orange transition-all absolute left-0 top-0 md:text-lg text-sm pt-2.5 text-white/40 pointer-events-none"
        >
          Имя*
        </span>
      </label>
      <span
        v-if="!isFormCorrect && !v$.form.name.required.$response"
        class="text-sm text-red"
      >
        {{ v$.form.name.required.$message }}
      </span>
      <span
        v-else-if="!isFormCorrect && !v$.form.name.isValidString.$response"
        class="text-sm text-red"
      >
        {{ v$.form.name.isValidString.$message }}
      </span>
      <label class="block relative group md:mt-[3.75rem] mt-10">
        <input
          type="tel"
          v-model="form.phone"
          placeholder="Телефон*"
          v-maska="'+7 ### ### ## ##'"
          class="peer py-2.5 w-full md:text-lg text-sm bg-transparent placeholder:text-transparent transition-all outline-none border-b-2"
        />
        <span
          class="peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:top-[-1.625rem] peer-[&:not(:placeholder-shown)]:text-orange transition-all absolute left-0 top-0 md:text-lg text-sm pt-2.5 text-white/40 pointer-events-none"
        >
          Телефон*
        </span>
      </label>
      <div
        v-if="!isFormCorrect && !v$.form.phone.required.$response"
        class="text-sm text-red"
      >
        {{ v$.form.phone.required.$message }}
      </div>
      <div
        v-else-if="!isFormCorrect && !v$.form.phone.minLength.$response"
        class="text-sm text-red"
      >
        {{ v$.form.phone.minLength.$message }}
      </div>
      <div class="md:mt-10 mt-5">
        <label
          class="flex items-center flex-wrap gap-y-2 font-petrov cursor-pointer text-[0.75rem] md:text-[1rem]"
        >
          <span
            class="relative block md:w-5 w-[0.9375rem] md:h-5 h-[0.9375rem] border-2 mr-2.5"
          >
            <input
              v-model="form.accept"
              class="bg-transparent border-0 peer absolute opacity-0 pointer-events-none left-[-6250rem]"
              type="checkbox"
            />
            <span
              class="md:w-sm md:h-[0.75rem] w-full h-full absolute peer-checked:opacity-100 opacity-0 transition-all md:top-[0.125rem] md:left-[0.0625rem]"
            >
              <img
                src="/images/icons/white-check.svg"
                width="14"
                height="12"
                alt="Галочка"
              />
            </span>
          </span>
          Согласен с&nbsp;
          <a
            class="hover:no-underline underline"
            href="pdfs/policy.pdf"
            download
          >
            политикой конфиденциальности
          </a>
        </label>
        <span
          v-if="!isFormCorrect && !v$.form.accept.required.$response"
          class="text-sm text-red"
        >
          {{ v$.form.accept.required.$message }}
        </span>
      </div>
      <div class="md:mt-[3.75rem] mt-10">
        <button
          class="relative uppercase group md:text-lg text-sm"
          @click="$emit('confirm')"
        >
          отправить
          <span
            class="absolute -bottom-1 left-0 w-full h-0.5 bg-white transition duration-300 origin-right scale-x-100 group-hover:scale-x-0"
          ></span>
          <span
            class="absolute -bottom-1 left-0 w-full h-0.5 bg-white transition delay-300 duration-300 origin-left scale-x-0 group-hover:scale-x-100"
          ></span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { vMaska } from "maska/vue";
import useVuelidate from "@vuelidate/core";
import { required, minLength, helpers, maxLength } from "@vuelidate/validators";

const props = defineProps({
  title: {
    type: String,
    default: "Хотите узнать о нас больше? Напишите нам!",
  },
});

const isFormCorrect = ref(true);

const form = ref({
  name: "",
  phone: "",
  accept: "",
});

const isValidString = (string) => {
  const reg = /^[а-яА-ЯёЁa-zA-Z/\s]+$/;
  return reg.test(string);
};

const rules = computed(() => ({
  form: {
    name: {
      required: helpers.withMessage("Поле обязательно к заполнению", required),
      isValidString: helpers.withMessage(
        "Недопустимо использование цифр",
        isValidString
      ),
      maxLength: helpers.withMessage(
        "Максимальная длина поля 50 символов",
        maxLength(50)
      ),
    },
    phone: {
      required: helpers.withMessage("Поле обязательно к заполнению", required),
      minLength: helpers.withMessage(
        "Введите корректный номер телефона",
        minLength(16)
      ),
    },
    accept: {
      required: helpers.withMessage("Поле обязательно к заполнению", required),
    },
  },
}));

const v$ = useVuelidate(rules, { form });
const { success, sendForm } = useSendForm("Обратный звонок");
const submitForm = async () => {
  isFormCorrect.value = await v$.value.$validate();

  if (!isFormCorrect.value) return;

  await sendForm(form.value);
};
</script>

<style>
.t {
  color: #ff4a4a;
}
</style>
