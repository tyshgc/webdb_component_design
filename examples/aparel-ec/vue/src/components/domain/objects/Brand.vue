<template>
  <h1>{{brandNameString}}</h1>
</template>

<script>
/**
 * 任意ブランド
 * Brand Domain Object
 * @name ブランド名
 */
export default {
  name: "Brand",
  props: {
    name: String
  },
  computed: {
    brandNameString() {
      return this.name || "ブランド名不明"
    }
  }
}
</script>