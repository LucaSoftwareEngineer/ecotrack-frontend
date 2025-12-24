import axios from 'axios';
import { ILoginRequest } from "./ILoginRequest.ts";
import { ILoginResponse } from "./ILoginResponse.ts";
import { API } from '../../api.config.ts';

const LoginService = (props:ILoginRequest) => {

  return axios.post<ILoginResponse>(API.login, props);

};

export default LoginService;