import { Advice } from "../../entity/Advice";
import HttpClient from "./HttpClient";

type Slip = {
  id: number,
  advice: string
}

export default class FetchAdapter implements HttpClient {
  async get(url: string): Promise<Advice> {
    const response = await fetch(url);
    const { slip } = await response.json() as { slip: Slip };
    return new Advice(slip.id, slip.advice);
  }
}
