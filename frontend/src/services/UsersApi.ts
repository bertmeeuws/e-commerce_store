import Axios from "axios";
import type {
  ClothingItem,
  RequestInterface,
} from "@/interfaces/ClothingItem.types";

export abstract class ClothingApi {
  private static usersAxios = Axios.create();
  static async getAllClothing(): Promise<ClothingItem[]> {
    const response = await this.usersAxios.get<ClothingItem[]>("/data.json");
    
    return response.data;
  }
}

