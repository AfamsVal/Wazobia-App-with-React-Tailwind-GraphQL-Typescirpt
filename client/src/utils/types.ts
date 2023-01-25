export interface IInputField {
  boxWidth: string;
  label: string;
  placeholder: string;
  type: string;
  errorMsg: string;
  children?: React.ReactNode;
}

export interface IButton {
  label: string;
  type?: "submit" | "button";
  width: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
