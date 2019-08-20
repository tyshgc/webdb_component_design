<template>
  <layout-list v-if="hasProduct">
    <layout-list-item v-for="(product, key, index) in products" :key="index">
      <product-list-item 
        :title="product.title" 
        :brand-name="product.brand? product.brand.name : undefined" 
        :price-label="product.priceLabel" 
        :thumbnail="product.thumbnail" />
    </layout-list-item>
  </layout-list>
  
  <not-found-message v-else />
</template>

<script>
/**
 * 商品一覧
 * Products Domain Object
 * @products 商品
 */

// Components
import { LayoutList, LayoutListItem } from "@/components/layouts";
import { ProductListItem } from "@/components/domain/elements";
import { NotFoundMessage } from "@/components/gui/parts";


export default {
  name: "Products",
  props: {
    products: Array
  },
  computed: {
    hasProduct() {
      if(!this.products) return false;
      return this.products.length > 0
    }
  },
  components: {
    LayoutList, 
    LayoutListItem,
    ProductListItem,
    NotFoundMessage
  }
}
</script>