/**
 * アパレルECのナビゲーション
 * Navigation Domain Object Component
 */
import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <>
      <h1>メニュー</h1>
      <ul>
        <li>
          <Link to="/product">商品</Link>
        </li>
        <li>
          <Link to="/category">カテゴリ</Link>
        </li>
        <li>
          <Link to="/brand">ブランド</Link>
        </li>
      </ul>
    </>
  );
};
