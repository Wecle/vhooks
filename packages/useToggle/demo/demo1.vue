<template>
    <div>
      <p>Effects: {{ state }}</p>
      <p>
        <button type="button" @click="toggle">toggle</button>
        <button type="button" @click="setLeft">setLeft</button>
        <button type="button" @click="setRight">setRight</button>
      </p>
    </div>
  </template>

  <script setup lang="ts">
  import useToggle from '..'

  const [state, { toggle, setLeft, setRight }] = useToggle()
  </script>

  <style scoped>
  </style>
