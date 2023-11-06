<script setup>
const route = useRoute()
import './app.css'
</script>

<template>
  <nav class="gap-2 navbar bg-base-300">
    <NuxtLink to="/" class="text-xl normal-case btn btn-ghost">
      Home
    </NuxtLink>
    <NuxtLink to="/about" class="text-xl normal-case btn btn-ghost">
      About
    </NuxtLink>
    <NuxtLink to="/parent" class="text-xl normal-case btn btn-ghost">
      Parent (index)
    </NuxtLink>
    <NuxtLink to="/parent/b" class="text-xl normal-case btn btn-ghost">
      Parent (b)
    </NuxtLink>
    <button class="text-xl normal-case btn btn-ghost"
      @click="$router.push(`/parent/reload-${(Math.random() * 100).toFixed()}`)">
      Keyed child
    </button>
    <button class="text-xl normal-case btn btn-ghost"
      @click="$router.push(`/parent/static-${(Math.random() * 100).toFixed()}`)">
      Non-keyed child
    </button>
  </nav>

  <div class="p-4 bg-base-200">
    <NuxtPage />
  </div>

  <div class="p-4 text-center op-50">
    Current route: <code>{{ route.path }}</code>
  </div>
</template>
