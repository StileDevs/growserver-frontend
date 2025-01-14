<template>
  <canvas id="character" width="256" height="256"></canvas>
  <ColorPicker v-model="skinColor" />
  {{ skinColor }}
</template>

<script lang="ts" setup>
import ColorPicker from "primevue/colorpicker";
import { hexToRgb } from "@/utils";
import { onMounted, ref, watch } from "vue";
const skinColor = ref("#ffffff");

let baseImage: HTMLImageElement | null = null;
let spriteImage: HTMLImageElement | null = null;

const applyTint = () => {
  const charEl = document.getElementById("character") as HTMLCanvasElement;
  const char = charEl.getContext("2d", { willReadFrequently: true })!;

  if (baseImage && spriteImage) {
    char.clearRect(0, 0, charEl.width, charEl.height); // Clear the canvas
    char.drawImage(baseImage, 0, 0);

    const imageData = char.getImageData(0, 0, charEl.width, charEl.height);
    const data = imageData.data;
    const { r, g, b } = hexToRgb(skinColor.value);

    for (let i = 0; i < data.length; i += 4) {
      const alpha = data[i + 3] / 255;
      data[i] *= (r / 255) * alpha;
      data[i + 1] *= (g / 255) * alpha;
      data[i + 2] *= (b / 255) * alpha;
    }

    char.putImageData(imageData, 0, 0);
    drawSpriteImage(char, spriteImage, 5, 0);
  }
};

const loadImage = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
  });
};

const drawSpriteImage = (
  char: CanvasRenderingContext2D,
  img: HTMLImageElement,
  x: number,
  y: number,
) => {
  char.drawImage(img, x * 32, y * 32, 32, 32, 64, 64, 128, 128);
};

onMounted(async () => {
  baseImage = await loadImage("/assets/growtopia/character/body/head.23.png");
  spriteImage = await loadImage("/assets/growtopia/game/player_faceitem.png");
  applyTint();
});

watch(skinColor, () => {
  applyTint();
});
</script>
