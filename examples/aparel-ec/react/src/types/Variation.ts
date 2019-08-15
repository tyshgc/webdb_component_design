import { typeSKU } from "./SKU";

// バリエーションに関する型
export interface typeVariation {
  id: number; // バリエーションID
  name: string; //バリエーション名
  sku: typeSKU; //在庫情報
}

export type typeVariations = Array<typeVariation> | undefined;
