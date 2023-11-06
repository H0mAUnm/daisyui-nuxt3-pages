<script setup>
const route = useRoute()
</script>

<template>
  <NuxtExampleLayout repo="nuxt/examples" example="routing/pages">
    <NuxtLoadingIndicator />
    <NuxtPage />

    <template #nav>
      <nav class="flex gap-4 p-4 align-center">
        <NuxtLink to="/" class="btn">
          Home
        </NuxtLink>
        <NuxtLink to="/about" class="btn">
          About
        </NuxtLink>
        <NuxtLink to="/parent" class="btn">
          Parent (index)
        </NuxtLink>
        <NuxtLink to="/parent/b" class="btn">
          Parent (b)
        </NuxtLink>
        <button class="btn" @click="$router.push(`/parent/reload-${(Math.random() * 100).toFixed()}`)">
          Keyed child
        </button>
        <button class="btn" @click="$router.push(`/parent/static-${(Math.random() * 100).toFixed()}`)">
          Non-keyed child
        </button>
      </nav>
    </template>

    <template #footer>
      <div class="p-4 text-center op-50">
        Current route: <code>{{ route.path }}</code>
      </div>
    </template>
  </NuxtExampleLayout>
</template>
