import * as React from "react";
import styled from "styled-components";
import { Switcher, OptionLabel } from "./components";

interface Props {
  heading?: string;
}
interface States {
  display: boolean;
}

// クラスコンポーネント
export class DisplaySwitchClass extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = { display: false };
  }

  render() {
    const toggleEvent = this.onChanged.bind(this);
    return (
      <>
        <StyledHeading>{this.props.heading}</StyledHeading>
        <OptionLabel text="表示" onClicked={toggleEvent} />
        <Switcher toggle={this.state.display} onChanged={toggleEvent} />
      </>
    );
  }

  onChanged() {
    this.setState({ display: !this.state.display });
  }
}

const StyledHeading = styled.h1`
  font-size: 16px;
`;
