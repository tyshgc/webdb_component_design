<template>
  <div @click="onTransition">
    <layout :has-margin="hasBottomMargin">
      <list-thumbnail-image :image="image" />
    </layout>
    <layout :has-margin="hasBottomMargin">
      <list-title :title="title" />
    </layout>

    <slot />
  </div>
</template>

<script>
/**
 * ListItemのグループ
 * ListItemGroup GUI Group Component
 * @title リストのタイトル
 * @image 画像のURL
 * @onClicked リストをクリックした際のイベント
 */

// Components
import { Layout } from "@/components/layouts";
import { ListThumbnailImage, ListTitle } from "@/components/gui/parts/";


export default {
  name: "ListItemGroup",
  props: {
    title: String,
    image: String,
    onClicked: Function
  },
  computed: {
    hasBottomMargin() {
      return { bottom: true };
    }
  },
  methods: {
    onTransition() {
      if(!this.onClicked) return;
      this.onClicked();
    }
  },
  components: {
    Layout,
    ListThumbnailImage, 
    ListTitle
  }
}
</script>