import { Injectable } from '@angular/core';
import { ServiceOfProvider } from '../../entity/provider';
import { ApiService } from '../api/api.service';

@Injectable({
    providedIn: 'root'
  })
export class ProviderService
{
    
    constructor(private api: ApiService){}

    getProfilProvider()
    {

    }
}