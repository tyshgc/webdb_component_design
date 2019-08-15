/**
 * 登録ボタン
 * Resgistration Button
 * @onRegisted 登録する際のイベント
 */
import React from "react";

//Components
import { Button } from "../../gui/parts";

interface Props {
  onRegisted?: () => void;
}
export const RegistrationButton = (props: Props) => {
  const { onRegisted } = props;
  return (
    <>
      <Button label="登録する" onPushed={onRegisted} />
    </>
  );
};
