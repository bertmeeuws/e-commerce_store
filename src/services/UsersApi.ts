import Axios from "axios";
import { ClothingItem, RequestInterface } from "@/interfaces/ClothingItem";

export abstract class ClothingApi {
  private static usersAxios = Axios.create();
  static async getAllClothing(): Promise<ClothingItem[]> {
    const response = await this.usersAxios.get<RequestInterface>("/data.json");
    return response.data.data;
  }
}
