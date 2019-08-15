/**
 * ダッシュボード
 * Dashboard Domain Object Component
 */
import React from "react";
import { Link } from "react-router-dom";

// Components
import { Heading } from "../../gui/parts";

export const Dashboard = () => (
  <>
    <Heading text="宛先" />
    <ul>
      <li>
        <Link to="/reference">確認</Link>
      </li>
      <li>
        <Link to="/registration">登録</Link>
      </li>
    </ul>
  </>
);
