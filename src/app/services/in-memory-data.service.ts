import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const appselector = [
      { id: '0071001', obj: [ "physician", "facility", "hybrid"] },
      { id: '1081901', obj: [ "admin", "physician", "facility", "hybrid"] },
    
    ];

    const payloads = [
      { id: '0071001', obj: {
        userData: {
          username: "Katrina Doe",
          role: "USER",
          facility: "Saber sub facility, MD 55333",
        },
        componentData: [
          "app-contracts",   
          "app-education",      
        ],
      } },{ id: '1081901', obj: {
        userData: {
          username: "Adam Doe",
          role: "ADMIN",
          facility: "Saber Healthcare, OH 44122",
        },
        componentData: [
          "app-contracts",
          "app-reports",
          "app-education",
          "app-chatbot",
        ],
      } }
     
    ];
    return {payloads,appselector};
  }

  
  genId(payloads: any): number {
    return payloads.length > 0 ? Math.max(...payloads.map((payload: { id: any; }) => payload.id)) + 1 : 11;
  }
  
}