export type FormData = {
  id?: string;
  inputs?: InputData[];
  buttons?: ButtonData[];
  NavBars?: NavBar[];
  allPhotos?: PhotoData[];
  pizzaPhotos?: PhotoData[];
  dessertPhotos?: PhotoData[];
  pastaPhotos?: PhotoData[];
  saladePhotos?: PhotoData[];
};

export type InputData = {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
};

export type ButtonData = {
  id?: string;
  name: string;
  type: string;
  textContent: string;
};
export type NavBar = {
  id?: string;
  name: string;
  type: string;
  textContent?: string;
  src?: string;
};

export interface PhotoData {
  id?: string;
  name: string;
  type: string;
  src: string;
  composition?: string;
}
/*
export interface User {
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}*/
