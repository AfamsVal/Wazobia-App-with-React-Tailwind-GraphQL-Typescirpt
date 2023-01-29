export interface IInputField {
  boxWidth: string;
  label: string;
  placeholder: string;
  type: string;
  name?: string;
  errorMsg: string;
  value?: any;
  onChange?: React.ChangeEvent<HTMLInputElement> | any;
  children?: React.ReactNode;
}

export interface IButton {
  label: string;
  type?: "submit" | "button";
  width: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ILogin {
  email?: string;
  password?: string;
}
