import { Injectable } from "@angular/core";

import { WORKDATA } from "../constants/work-data";
import type { WorkData } from "../types/work-data";
import type { Response } from "../types/response";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor() {}

  getWorkData() {
    return new Promise<Response<WorkData>>((resolve, reject) => {
      return resolve(WORKDATA);
    });
  }
}
