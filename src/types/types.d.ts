interface IFeedback {
  id: number;
  rating: number;
  text: string;
}

type NewFeedback = {
  id?: number;
  text: string;
  rating: number;
};

type ChangeInput = React.ChangeEvent<HTMLInputElement>;
type Submit = React.FormEvent<HTMLFormElement>;
type ButtonType = 'button' | 'submit' | 'reset' | undefined;
