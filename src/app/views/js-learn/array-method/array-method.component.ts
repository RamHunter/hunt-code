import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-array-method',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './array-method.component.html',
  styleUrl: './array-method.component.scss'
})
export class ArrayMethodComponent {


  sortMethod(){
      const productListing = [
        {
            "ProductGuid": "6a6465c1-7127-41a1-a252-9da26bb36775",
            "Name": "FOOT CARE CREAM",
            "SKU": "120",
        "Price": "210.00",
        "SalesType": 3,
        },
        {
            "ProductGuid": "dad51f10-22df-4479-a2f9-7731a04bd52f",
            "Name": "FORSSIGHT",
            "SKU": "105",
        "Price": "100.00",
        "SalesType": 1,
        },
        {
            "ProductGuid": "fe802d4c-1a99-4be3-9141-017ad93978bf",
            "Name": "GEL WASH (500ML)",
            "SKU": "112",
        "Price": "300.00",
        "SalesType": 2, 
        },
        {
            "ProductGuid": "cbd9befb-21b2-4aee-a7a7-2507cc73b0cc",
            "Name": "GLOWSSA MARINE COLLAGEN POWDER",
            "SKU": "127",
        "Price": "1000.00",
        "SalesType": 3, 
        },
        {
            "ProductGuid": "b3ba7651-aa5c-4f01-913c-cc301f011c51",
            "Name": "GREEN GRAM FACE WASH",
            "SKU": "123",
        "Price": "30.00",
        "SalesType": 1,  
        },
        {
            "ProductGuid": "4807430a-6a56-4261-ab90-4ec67d7b086d",
            "Name": "HAND WASH (300ML)",
            "SKU": "115",
        "Price": "3000.00",
        "SalesType": 1,        
        },
    ];
    
    console.log('data', this.convert(productListing, 'asc'));
    }

  convert(data:any, type:any){
    let convertArr = [2,1,3];
      if(type == 1){
            return data.sort((a:any, b:any) => {
            return convertArr.indexOf(a.SalesType) - convertArr.indexOf(b.SalesType);
          });
      } 
      else if(type == 'dsc'){
            return data.sort((a:any, b:any) => {
            return parseFloat(a.Price) - parseFloat(b.Price);
          });
      }
      else if(type == 'asc'){
            return data.sort((a:any, b:any) => {
            return parseFloat(b.Price) - parseFloat(a.Price);
          });
      }
    }
}