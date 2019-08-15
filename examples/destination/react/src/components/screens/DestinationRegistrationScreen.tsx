/**
 * 宛先登録画面
 * DestinationRegistration Screen
 */
import React from "react";

// Components
import { DestinationEditContainer } from "../containers";
import { ScreenWrapper } from "../gui/parts";

export const DestinationRegistrationScreen = () => (
  <ScreenWrapper pageTitle="宛先登録">
    <DestinationEditContainer />
  </ScreenWrapper>
);
