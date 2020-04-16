import { Component } from '@angular/core';
import { IGrocery } from './grocery';

@Component({
    selector: 'app-groceries',
    templateUrl: 'groceries-list.component.html',
    styleUrls: ['groceries-list.component.css']
})

export class GroceryListComponent{
    pageTitle: string = 'Groceries List Component';

    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "cart";

    groceries: IGrocery[] = [
        {   
            "groceryID": 1, 
            "groceryName": "Brocolli",
            "groceryCode": "BRC-024",
            "quantity": 2,
            "price": 5.99,
            "gotIt": true,
            "imageUrl": "assets/images/broccoli.png"    
        },
        {
            "groceryID": 2, 
            "groceryName": "Slice of Cake",
            "groceryCode": "SLC-001",
            "quantity": 6,
            "price": 1.99,
            "gotIt": false,
            "imageUrl": "assets/images/cake-slice.png"    
        },
        {
            "groceryID": 3, 
            "groceryName": "Watermelon",
            "groceryCode": "WTM-102",
            "quantity": 1,
            "price": 8.99,
            "gotIt": false,
            "imageUrl": "assets/images/watermelon.png"   
        }
    ];

    toggleImage(){
        this.showImage = !this.showImage;
    }
}