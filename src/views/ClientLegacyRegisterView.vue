<template>
  <Toast></Toast>

  <div
    class="flex justify-center absolute top-1/2 left-1/2 mr-[-%50] -translate-x-1/2 -translate-y-1/2"
  >
    <div class="w-[400px] h-auto bg-surface-800 rounded-md">
      <div class="text-center mt-8 mb-4">
        <div class="font-bold text-2xl">Legacy Register</div>
      </div>

      <div class="flex justify-center flex-row">
        <Form
          v-slot="$form"
          :resolver="resolver"
          :initialValues="initialValues"
          @submit="onFormSubmit"
          class="w-full px-8"
        >
          <div class="p-4">
            <div class="mb-4">
              <label for="growId" class="block text-sm font-medium text-surface-200">
                GrowID
              </label>
              <InputText
                id="growId"
                name="growId"
                v-model="initialValues.growId"
                type="text"
                class="mt-1 block w-full rounded-md"
              />
              <Message
                v-if="$form.growId?.invalid"
                severity="error"
                size="small"
                variant="simple"
                >{{ $form.growId.error?.message }}</Message
              >
            </div>

            <div class="mb-4">
              <label for="password" class="block text-sm font-medium text-surface-200">
                Password
              </label>
              <InputText
                id="password"
                name="password"
                v-model="initialValues.password"
                type="password"
                class="mt-1 block w-full rounded-md"
              />
              <Message
                v-if="$form.password?.invalid"
                severity="error"
                size="small"
                variant="simple"
                >{{ $form.password.error?.message }}</Message
              >
            </div>

            <div class="mb-4">
              <label for="confirmPassword" class="block text-sm font-medium text-surface-200">
                Confirm Password
              </label>
              <InputText
                id="confirmPassword"
                name="confirmPassword"
                v-model="initialValues.confirmPassword"
                type="password"
                class="mt-1 block w-full rounded-md"
              />
              <Message
                v-if="$form.confirmPassword?.invalid"
                severity="error"
                size="small"
                variant="simple"
                >{{ $form.confirmPassword.error?.message }}</Message
              >
            </div>

            <div class="flex justify-center">
              <button
                type="submit"
                class="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 w-full rounded-md"
              >
                Register
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Form, type FormSubmitEvent } from "@primevue/forms";
import Message from "primevue/message";
import InputText from "primevue/inputtext";
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";
import Toast from "primevue/toast";
import { postSignup } from "@/helpers/fetch-post";

const toastSubmit = useToast();

const zObj = z
  .object({
    growId: z
      .string()
      .min(5, { message: "GrowID must be at least 5 characters." })
      .max(20, { message: "GrowID is too long." })
      .refine((v) => !/[!@#$%^&*(),.?":{}|<> ]/.test(v), {
        message: "GrowID contains special characters.",
      }),
    password: z.string().min(5, {
      message: "Password must contain at least 5 characters.",
    }),
    confirmPassword: z.string().min(5, {
      message: "Password must contain at least 5 characters.",
    }),
  })
  .refine((v) => v.password === v.confirmPassword, {
    message: "Passwords must match!",
    path: ["confirmPassword"],
  });

const initialValues = ref<z.infer<typeof zObj>>({
  growId: "",
  password: "",
  confirmPassword: "",
});

const resolver = ref(zodResolver(zObj));

const onFormSubmit = async (event: FormSubmitEvent) => {
  if (event.valid) {
    const [data, err] = await postSignup<{ token: string }, string>(initialValues.value);

    if (err !== null) {
      toastSubmit.add({ severity: "error", summary: err, life: 2000 });
      return;
    } else {
      const token = data?.token;

      toastSubmit.add({
        severity: "success",
        summary: "Successfully registered new account!",
        life: 2000,
      });
      toastSubmit.add({
        severity: "info",
        summary: "Redirecting to growtopia shortly...",
        life: 3000,
      });

      setTimeout(() => {
        window.location.href = `/player/growid/login/validate?token=${token}`;
      }, 3000);
    }
  }
};
</script>
