interface IFeedback {
  id: number;
  rating: number;
  text: string;
}

type ChangeInput = React.ChangeEvent<HTMLInputElement>;
type ButtonType = 'button' | 'submit' | 'reset' | undefined;
