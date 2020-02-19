import webapi from 'xrm-webapi-client'

export class WebApiUtils {
    static RunAction<T = Parameters>(actionName: string, target?: Target | null, params?: Parameters, async?: boolean | null): Promise<T> | any {
        const request = new webapi.Requests.Request();
        request.bound = !!target;
        request.method = "POST";
        request.payload = params;
        request.name = actionName;
        request.async = async == undefined ? true : !!async;
        if (target) {
            request.entityId = target.id;
            request.entityName = target.entityName;
        }
        return webapi.Execute(request);
    }
}

type ParameterType = string | any | number | boolean | null | { "@odata.type": string, [id: string]: string  }; //TODO extend
interface Parameters {
    [key: string]: ParameterType;
}
interface Target {
    entityName: string;
    id: string;
}