export interface ISwitchProps {
  isTile: boolean;
  toggleSwitch: () => void;
}

export interface IInputProps {
  [key: string]: string;
  error: string;
}

export interface IInputStyledProps {
  error: string;
}

export interface BottomTabProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export interface ItemWrapperProps {
  isTile: boolean;
}

export interface ItemProps {
  title: string;
  image: any;
  desc: string;
  date: string;
  isTile: boolean;
}

export interface UseFormProps {
  initialValues: {
    [key: string]: string;
  };
  onSubmit: (values: { [key: string]: string }) => void;
}

export interface FormValueProps {
  [key: string]: string;
}

export interface IField {
  label: string;
  placeholder: string;
  name: string;
  type: string;
  required: boolean;
}
