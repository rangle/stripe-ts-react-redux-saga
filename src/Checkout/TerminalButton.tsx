import React, { MouseEvent } from "react";
import {useDispatch} from "react-redux";
import {paymentConfirmStartedAction} from "./actions/paymentActions";

const TerminalButton: React.FC = () => {

    return <button>Simulate Tap card to terminal</button>
}

export default TerminalButton;
