import Http from "@/http/http";
import type {
  editJsonList,
  JsonListData,
} from "@/api/microMain/model/microModel";

enum Api {
  UNI_JSONLISTDETAIL = "/api/uni/jsonListDetail/",
}
export const GetJsonListDetail = (id: number) =>
  Http.get<JsonListData>(`${Api.UNI_JSONLISTDETAIL}${id}/`);

export const PatchJsonListDetail = (params: editJsonList, id: number) =>
  Http.patch<JsonListData>(`${Api.UNI_JSONLISTDETAIL}${id}/`, params);

export const DeleteJsonListDetail = (id: number) =>
  Http.delete<JsonListData>(`${Api.UNI_JSONLISTDETAIL}${id}/`);
