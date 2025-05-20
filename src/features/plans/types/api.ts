export interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export interface PlansResponse {
  list: Plan[];
}
