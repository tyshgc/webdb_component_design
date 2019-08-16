/**
 * DestinationContainer
 */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createMergeProps } from "../../utils/createMergeProps";

// Redux
import {
  destinationSelectors,
  editDestinationSelectors
} from "../../redux/selectors";
import actions from "../../redux/actions";

// Components
import { Destination, DestinationEdit } from "../domain/objects";

// Types
import {
  typeName,
  typePostalCode,
  typeCityStreet,
  typePrefecture
} from "destination";
import { POSTALCODE_TYPE, NAME_TYPE } from "../../enums";

/**
 * DestinationContainer
 * 宛先のコンテナ
 */
export const DestinationContainer = () => {
  const name = useSelector(destinationSelectors.name);
  const postlCode = useSelector(destinationSelectors.postalCode);
  const address = useSelector(destinationSelectors.address);

  return (
    <Destination
      name={name.fullName}
      postalCode={postlCode!.all}
      address={address}
    />
  );
};

/**
 * DestinationEditContainer
 * 宛先編集（登録）のコンテナ
 */
export const DestinationEditContainer = () => {
  const dispatch = useDispatch();
  const name = createMergeProps({
    ...useSelector(editDestinationSelectors.name),
    onChanged: (
      name: typeName["firstName"] | typeName["lastName"],
      type: NAME_TYPE
    ) => {
      dispatch(actions.writeNameAction({ name, type }));
    }
  });

  const postalCode = createMergeProps({
    ...useSelector(editDestinationSelectors.postalCode),
    onChanged: (
      code: typePostalCode["upper"] | typePostalCode["lower"],
      type: POSTALCODE_TYPE
    ) => {
      dispatch(actions.writePostalCodeAction({ code, type }));
    }
  });

  const address = createMergeProps({
    prefecture: useSelector(editDestinationSelectors.prefecture),
    cityStreet: useSelector(editDestinationSelectors.cityStreet),
    onSelectedPrefecture: (choice: typePrefecture) => {
      dispatch(actions.selectPrefectureAction({ choice }));
    },
    onCityStreetChanged: (cityStreet: typeCityStreet) => {
      dispatch(actions.writeCityStreetAction({ cityStreet }));
    }
  });

  const onRegisted = () => {
    dispatch(actions.registDestinationAction());
  };

  return <DestinationEdit {...{ name, postalCode, address, onRegisted }} />;
};
