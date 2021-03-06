import { useState,useEffect,Dispatch,SetStateAction,useCallback } from 'react';
import { AxiosPromise } from 'axios'
interface BaseAPI<T>{
    data:T
}

export type Trigger<T extends Array<any> = any[]> = (...args: T) => void

export function useFetch<T = any, U extends Array<any> = any[]>(
    func: (...args: U) => AxiosPromise<BaseAPI<T>>
): [T | undefined, Trigger<U>, Dispatch<SetStateAction<T>>]

export function useFetch<T = any, U extends Array<any> = any[]>(
    func: (...args:U) => AxiosPromise<BaseAPI<T>>,
    defaultVal:T
): [T,Trigger<U>,Dispatch<SetStateAction<T>>]

export function useFetch<T = any, U extends Array<any> = any[]>(
    func: (...args:U) => AxiosPromise<BaseAPI<T>>,
    defaultVal:T,
    options?:{
        defaultParams?:U,
        handle?:Function
    }
): [T,Trigger<U>,Dispatch<SetStateAction<T | undefined>>] {

    const [data,setData] = useState(defaultVal);
    const [destroyed,destroy] = useState<boolean>(false);
    const fetchData = async(...args: U)=>{
        await func(...args).then(res=>{
            if(res.status === 200){
                !destroyed && setData(res.data.data)
            }else{
                options && options.handle && options.handle(res)
            }
        })
    }
    useEffect(()=>{
        const args:U = (options && options.defaultParams) || []
        fetchData.apply(null,args).then()
        return () => {
            destroy(true);
        }
    },[])

    const trigger = useCallback((...args:U)=>{
        fetchData.apply(null,args)
    },[])

    return [data,trigger,setData]
}


// 样例
// const [shops] = useFetch<Shop[]>(getShopList, [])
// const [positions, fetchPositionList] = useFetch(getPositionList, [], {
//   defaultParams: ['1']
// })