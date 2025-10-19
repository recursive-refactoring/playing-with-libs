export interface MessagesOptionsI {
  required?: string;
  ref?: string;
  min?: string;
  max?: string;
  matches?: string;
  email?: string;
  positive?: string;
  integer?: string;
}

export interface DependsOnI {
  field: string | string[];
  is: any;
  then?: ValidatorOptionsI;
  otherwise?: ValidatorOptionsI;
}

export type ValidatorOptionsI = {
  type?: string;
  required?: boolean;
  email?: boolean;
  min?: number | Date | string;
  max?: number | Date | string;
  matches?: RegExp;
  nullable?: boolean;
  positive?: boolean;
  integer?: boolean;
  ref?: string;
  strip?: boolean;
  messages?: MessagesOptionsI;
  label?: string;
  dependsOn?: DependsOnI;

  field?: any;
};
