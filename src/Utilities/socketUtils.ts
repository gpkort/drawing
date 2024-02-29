import { IPose, IImageData } from "../geometry"
import { assertEquals } from 'typia'

export async function getPose(url: string, 
                              port:number, 
                              uri: string): Promise<IPose>  
{
    const response = await window.fetch(`${url}:${port}/${uri}`, {
      method: 'GET'
    });
    
    const data = await response.json();
    
    return assertEquals<IPose>(data);
};

export async function getImage(
    url: string, 
    port:number, 
    uri: string): Promise<IImageData>  
{
    console.log(`Get Image Data from ${url}:${port}/${uri}`)
    const response = await window.fetch(`${url}:${port}/${uri}`, {
        method: 'GET'
    });

    const data = await response.json(); 

    return assertEquals<IImageData>(data);
};



