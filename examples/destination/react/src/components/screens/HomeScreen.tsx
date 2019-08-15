/**
 * ホーム画面
 * Home Screen
 */
import React from "react";

// Components
import { Dashboard } from "../domain/objects";
import { ScreenWrapper } from "../gui/parts";

export const HomeScreen = () => (
  <ScreenWrapper pageTitle="HOME">
    <Dashboard />
  </ScreenWrapper>
);
