<template>
  <i class="loader"></i>
</template>

<style>
.loader {
  border: 16px solid #f3f3f3;
  border-top: 20px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  display: inline-block;
  position: relative;
  left: 50%;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
