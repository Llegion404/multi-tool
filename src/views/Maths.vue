<script setup lang="ts">
import GradientBorder from "@/components/GradientBorder.vue";
import { onlyAllowNumber } from "@/composables/UserInput";
import {
  NButton,
  NConfigProvider,
  NFlex,
  NFormItem,
  NGradientText,
  NInputNumber,
  NSpace,
  type GlobalThemeOverrides,
} from "naive-ui";
import { ref } from "vue";

const mathTheme: GlobalThemeOverrides = {
  common: {
    primaryColor: "#168AAD",
    primaryColorHover: "#52B69A",
  },
  Form: {
    labelFontSizeTopMedium: "16px",
  },
  Input: {
    fontSizeMedium: "14px",
    textColor: "white",
    fontWeight: 500,
    border: "1px solid #168AAD",
  },
  Button: {
    textColorPrimary: "white",
    textColorHoverPrimary: "white",
    textColorFocusPrimary: "white",
  },
};

const data = [
  { num1: 876, num2: 453, ans: 0 },
  { num1: 1023, num2: 389, ans: 0 },
  { num1: 45, num2: 12, ans: 0 },
  { num1: 144, num2: 12, ans: 0 },
  { num1: 876, num2: 453, ans: 0 },
];

const firstNumber = ref(null);
const secondNumber = ref(null);
const answer = ref(null);
const tasksNumber = ref(0);
</script>

<template>
  <section class="h-screen relative">
    <div class="container z-20 pt-10">
      <h1>Do some <NGradientText type="success"> Maths </NGradientText></h1>
      <NConfigProvider :theme-overrides="mathTheme">
        <main class="pt-5">
          <NSpace align="center" justify="space-between">
            <NSpace>
              <NFlex vertical>
                <div class="flex gap-3">
                  <NFormItem label="First number" feedback="Digits in number">
                    <NInputNumber
                      :allow-input="onlyAllowNumber"
                      placeholder="873..."
                      :show-button="false"
                      v-model:value="firstNumber" />
                  </NFormItem>
                  <NFormItem label="Second number" feedback="Digits in number">
                    <NInputNumber
                      :allow-input="onlyAllowNumber"
                      placeholder="4..."
                      v-model:value="secondNumber"
                      :show-button="false" />
                  </NFormItem>
                </div>
                <NGradientText type="success" v-if="firstNumber && secondNumber"
                  >Output: {{ firstNumber }} + {{ secondNumber }} =
                  ?</NGradientText
                >
              </NFlex>
              <NFormItem label="Quantity">
                <NInputNumber
                  :default-value="10"
                  v-model="tasksNumber"
                  step="5"
                  max="50"
                  status="warning" />
              </NFormItem>
            </NSpace>
            <NButton strong type="primary" size="large">Create</NButton>
          </NSpace>
          <section class="pt-20 flex flex-col wrap justify-between">
            <NFlex
              class="mb-5 w-max"
              v-for="task in data"
              :key="task.num1"
              align="center"
              justify="space-between">
              <GradientBorder class="px-5 pb-1">
                {{ task.num1 }}
              </GradientBorder>
              +
              <GradientBorder class="px-5 pb-1">
                {{ task.num2 }}
              </GradientBorder>
              =
              <NInputNumber
                class="w-20"
                v-model.number="answer"
                :show-button="false"
                :bordered="false"
                placeholder="???"
                round />
            </NFlex>
          </section>
        </main>
      </NConfigProvider>
    </div>
    <div
      class="absolute h-full w-full -z-50 opacity-5 top-0 bg-[url('https://i.pinimg.com/originals/55/0c/80/550c80a326b9d687b038b5f5f72b0724.jpg')]"></div>
  </section>
</template>
