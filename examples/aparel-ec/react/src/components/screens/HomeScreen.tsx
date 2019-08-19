/**
 * ホーム画面
 * Home Screen
 */
import React from "react";

// Comonents
import { Navigation } from "../domain/objects/Navigation";
import { ScreenWrapper } from "../gui/parts";

export const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <Navigation />
    </ScreenWrapper>
  );
};
