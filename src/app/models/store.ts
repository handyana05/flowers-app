import { Flower } from "./flower";
import { FlowerDetail } from "./flower-detail";

export interface FlowersState {
  flowers: Flower[];
  flowerDetails: FlowerDetail[];
}

export const initialDataState: FlowersState = {
	flowers: [],
  flowerDetails: []
};
