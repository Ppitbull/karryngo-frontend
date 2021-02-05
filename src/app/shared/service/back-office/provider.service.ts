import { Injectable } from '@angular/core';
import { ServiceOfProvider } from '../../entity/provider';

@Injectable({
    providedIn: 'root'
  })
export class ProviderService
{
    private currentSelectedProvider:ServiceOfProvider=null;
    setCurrentSelectedProvider(selectedProvider)
    {
        this.currentSelectedProvider=selectedProvider;
    }
}