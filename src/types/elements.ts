export interface iData {
  // input
  placeholder: string;
  currentUrl: string
  title: string | null
  isEditing: boolean
  url: string
  // time
  buttondisplay: Date | null
  // select
  selectedValues: number[]
  //table
  options: iOptions[],
  //table search
  dataTable: iDataTable[],
  fieldOptions: iOptions[],
}

export interface iOptions {
  label: string,
  value: number | string,
}

export interface iDataTable {
  name: string,
  age: number,
  city: string
}