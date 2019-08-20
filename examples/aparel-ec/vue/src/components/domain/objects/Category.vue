<template>
  <h1>{{categoryNameString}}</h1>
</template>

<script>
/**
 * 任意カテゴリ
 * Category Domain Object
 * @name カテゴリ名
 */
export default {
  name: "Category",
  props: {
    name: String
  },
  computed: {
    categoryNameString() {
      return this.name || "カテゴリ名不明"
    }
  }
}
</script>