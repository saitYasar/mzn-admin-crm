import {
  CreateParams,
  CreateResult,
  DataProvider,
  DeleteManyParams,
  DeleteManyResult,
  DeleteParams,
  DeleteResult,
  GetListParams,
  GetListResult,
  GetManyParams,
  GetManyReferenceParams,
  GetManyReferenceResult,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  Identifier,
  RaRecord,
  UpdateManyParams,
  UpdateManyResult,
  UpdateParams,
  UpdateResult,
} from "react-admin";
// import { useHistory } from "react-router-dom";
const baseURL = "https://api.mznekip.com";

const headers = {
  "Content-Type": "application/json",
  authorization: "Bearer " + localStorage.getItem("access_token"),
  "ngrok-skip-browser-warning": "69420",
};

// Helper function to handle fetch requests and check for errors
const fetchWithErrorHandling = async (url: string, options: any) => {
  console.log(options);
  
  const res = await fetch(url, options);
  console.log(res);
  
  if (res.status === 500) {
    // Redirect to login page on 500 error
    // window.location.href = "/#/login"; // Adjust the login route as necessary
    throw new Error("Server error. Redirecting to login.");
  }
  return res.json();
};

const distedavimDataProvider: DataProvider = {
  getList: async function <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: GetListParams
  ): Promise<GetListResult<RecordType>> {
    const url = `${baseURL}/${resource}/list?page=${[
      params.pagination.page,
      params.pagination.perPage,
    ]}&sort=${[params.sort.field, params.sort.order]}&filter=${JSON.stringify(
      params.filter
    )}`;
    const data = await fetchWithErrorHandling(url, {
      method: "GET",
      headers: headers,
    });
    console.log(data);
    
    return data ;
  },
  getOne: async function <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: GetOneParams<RecordType>
  ): Promise<GetOneResult<RecordType>> {
    const { id } = params;
    const url = `${baseURL}/${resource}/find?id=${id}`;
    const data = await fetchWithErrorHandling(url, {
      method: "GET",
      headers: headers,
    });
    return { data: data };
  },
  getMany: async function <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: GetManyParams
  ): Promise<GetManyResult<RecordType>> {
    const url = `${baseURL}/${resource}/findMany?ids=${params.ids}`;
    const data = await fetchWithErrorHandling(url, {
      headers: headers,
    });
    console.log(data);
    
    return { data:  data };
  },
  getManyReference: async function <
    RecordType extends RaRecord<Identifier> = any
  >(
    resource: string,
    params: GetManyReferenceParams
  ): Promise<GetManyReferenceResult<RecordType>> {
    const url = `${baseURL}/${resource}/list?page=${[
      params.pagination.page,
      params.pagination.perPage,
    ]}&sort=${[params.sort.field, params.sort.order]}&filter=${JSON.stringify(
      { ...params.filter, [params.target]: params.id }
    )}`;
    const data = await fetchWithErrorHandling(url, {
      method: "GET",
      headers: headers,
    });
    return data;
  },
  update: async function <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: UpdateParams<any>
  ): Promise<UpdateResult<RecordType>> {
    const { ...rest } = params.data;
    const id = params.id;
    const url = `${baseURL}/${resource}/update?id=${id}`;
    const data = await fetchWithErrorHandling(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(rest),
    });
    return { data: data };
  },
  updateMany: async function <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: UpdateManyParams<any>
  ): Promise<UpdateManyResult<RecordType>> {
    const url = `${baseURL}/${resource}/updateMany?ids=${params.ids}`;
    const data = await fetchWithErrorHandling(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(params.data),
    });
    return { data: data };
  },
  create: async function <
    RecordType extends Omit<RaRecord<Identifier>, "id"> = any,
    ResultRecordType extends RaRecord<Identifier> = RecordType & {
      id: Identifier;
    }
  >(
    resource: string,
    params: CreateParams<any>
  ): Promise<CreateResult<ResultRecordType>> {
    const url = `${baseURL}/${resource}/create`;
    const data = await fetchWithErrorHandling(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify( params.data),
    });
    return { data: data };
  },
  delete: async function <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: DeleteParams<RecordType>
  ): Promise<DeleteResult<RecordType>> {
    const url = `${baseURL}/${resource}/delete?id=${params.id}`;
    const data = await fetchWithErrorHandling(url, {
      method: "POST",
      headers: headers,
    });
    return { data: data };
  },
  deleteMany: async function <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: DeleteManyParams<RecordType>
  ): Promise<DeleteManyResult<RecordType>> {
    const url = `${baseURL}/${resource}/deleteMany?ids=${params.ids}`;
    const data = await fetchWithErrorHandling(url, {
      method: "POST",
      headers: headers,
    });
    return { data: data };
  },
};

export default async (type: string, resource: string, params: any) => {
  let source = resource.replace("dt", "").replace("dis_", "");
  const index = source.indexOf("_");
  if (index !== -1) {
    source = [source.slice(0, index), source.slice(index + 1)].join("/");
  }

  switch (type) {
    case "UPDATE":
      return distedavimDataProvider.update(source, params);
    case "CREATE":
      return distedavimDataProvider.create(source, params);
    case "DELETE":
      return distedavimDataProvider.delete(source, params);
    case "DELETE_MANY":
      return distedavimDataProvider.deleteMany(source, params);
    case "GET_LIST":
      return distedavimDataProvider.getList(source, params);
    case "GET_ONE":
      return distedavimDataProvider.getOne(source, params);
    case "GET_MANY":
      return distedavimDataProvider.getMany(source, params);
    case "GET_MANY_REFERENCE":
      return distedavimDataProvider.getManyReference(source, params);
    case "UPDATE_MANY":
      return distedavimDataProvider.updateMany(source, params);
    default:
      return distedavimDataProvider.getList(source, params);
  }
};
