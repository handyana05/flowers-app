export interface FilterState {
  category: string;
  text: string;
}

export const initialFilterState: FilterState = {
  category: '',
  text: ''
}
