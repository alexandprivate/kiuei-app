import axios, { AxiosResponse } from 'axios';

const baseUrl = import.meta.env.VITE_API_URL;

export const org = {
  read: (id: string) => axios.get(`${baseUrl}/org/${id}`).then((res) => res.data),
  create: (data: Org) => axios.post(`${baseUrl}/org`, data).then((res) => res.data),
  update: (id: string, data: Org) =>
    axios.put(`${baseUrl}/org/${id}`, data).then((res) => res.data),
  delete: (id: string) => axios.delete(`${baseUrl}/org/${id}`).then((res) => res.data)
};

export const test = {
  read: (id: string) => axios.get(`${baseUrl}/test/${id}`).then((res) => res.data),
  create: (data: Test) => axios.post(`${baseUrl}/test`, data).then((res) => res.data),
  update: (id: string, data: Test) =>
    axios.put(`${baseUrl}/test/${id}`, data).then((res) => res.data),
  delete: (id: string) => axios.delete(`${baseUrl}/test/${id}`).then((res) => res.data)
};

export const suite = {
  read: (id: string) => axios.get(`${baseUrl}/suite/${id}`).then((res) => res.data),
  create: (data: Suite) => axios.post(`${baseUrl}/suite`, data).then((res) => res.data),
  update: (id: string, data: Suite) =>
    axios.put(`${baseUrl}/suite/${id}`, data).then((res) => res.data),
  delete: (id: string) => axios.delete(`${baseUrl}/suite/${id}`).then((res) => res.data)
};

export const user = {
  read: (id: string) => axios.get(`${baseUrl}/user/${id}`).then((res) => res.data),
  create: (data: User) => axios.post(`${baseUrl}/user`, data).then((res) => res.data),
  update: (id: string, data: User) =>
    axios.put(`${baseUrl}/user/${id}`, data).then((res) => res.data),
  delete: (id: string) => axios.delete(`${baseUrl}/user/${id}`).then((res) => res.data)
};

export const commands = {
  read: () =>
    axios.get(`${baseUrl}/commands`).then((res: AxiosResponse<Record<string, Command>>) => res.data)
};
