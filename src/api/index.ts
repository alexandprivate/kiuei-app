import axios, { AxiosResponse } from 'axios';
import { QueryClient } from '@tanstack/react-query';

export interface UserResponse extends User {
  org: Org;
  tests: Test[];
}

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      staleTime: 10 // 5 minutes
    }
  }
});

const baseUrl = import.meta.env.VITE_API_URL;
const routes = {
  user: '/user',
  org: '/org',
  test: '/test',
  commands: '/commands',
  suite: '/suite',
  comment: '/comment',
  run: '/run',
  screenshot: '/screenshot'
};

export const org = {
  read: (id: string) => axios.get(`${baseUrl}${routes.org}/${id}`).then((res) => res.data),
  create: (data: Org) => axios.post(`${baseUrl}${routes.org}`, data).then((res) => res.data),
  update: (id: string, data: Org) =>
    axios.put(`${baseUrl}${routes.org}/${id}`, data).then((res) => res.data),
  delete: (id: string) => axios.delete(`${baseUrl}${routes.org}/${id}`).then((res) => res.data)
};

export const test = {
  read: (id: string) =>
    axios
      .get(`${baseUrl}${routes.test}/${id}`)
      .then((res: AxiosResponse<{ test: Test }>) => res.data),
  create: (data: Test) => axios.post(`${baseUrl}${routes.test}`, data).then((res) => res.data),
  update: (id: string, data: Test) =>
    axios.put(`${baseUrl}${routes.test}/${id}`, data).then((res) => res.data),
  delete: (id: string) => axios.delete(`${baseUrl}${routes.test}/${id}`).then((res) => res.data)
};

export const suite = {
  read: (id: string) => axios.get(`${baseUrl}${routes.suite}/${id}`).then((res) => res.data),
  create: (data: Suite) => axios.post(`${baseUrl}${routes.suite}`, data).then((res) => res.data),
  update: (id: string, data: Suite) =>
    axios.put(`${baseUrl}${routes.suite}/${id}`, data).then((res) => res.data),
  delete: (id: string) => axios.delete(`${baseUrl}${routes.suite}/${id}`).then((res) => res.data)
};

export const user = {
  read: (id: string) =>
    axios
      .get(`${baseUrl}${routes.user}/${id}`)
      .then((res: AxiosResponse<{ user: UserResponse }>) => res.data),
  create: (data: User) => axios.post(`${baseUrl}${routes.user}`, data).then((res) => res.data),
  update: (id: string, data: User) =>
    axios.put(`${baseUrl}${routes.user}/${id}`, data).then((res) => res.data),
  delete: (id: string) => axios.delete(`${baseUrl}${routes.user}/${id}`).then((res) => res.data),
  invite: (args: { userEmail: string; orgId: string }) =>
    axios
      .post(`${baseUrl}/invite`, {
        userEmail: args.userEmail,
        orgId: args.orgId
      })
      .then((res) => res.data)
};

export const commands = {
  read: () => axios.get(`${baseUrl}${routes.commands}/ui`).then((res) => res.data)
};
