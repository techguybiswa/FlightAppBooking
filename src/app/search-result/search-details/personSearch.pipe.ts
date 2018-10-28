import {Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'personSearch'
})
export class PersonSearchPipe implements PipeTransform {
    transform(items: Array<any>, nameSearch: string, price: string, duration: string){
        console.log(Array);
        console.log(nameSearch);
        if (items && items.length){
            return items.filter(item =>{
                item.Price = String(item.Price);
                // console.log("Val of item.Airline is " + item.Airline);
                // console.log("Val of item.Price is " + item.Price);

                // console.log("Val of item.Airline.indexOf is " + item.Airline.indexOf(nameSearch));
                // console.log("Val of item.Airline.indexOf is " + item.Price.indexOf(price));

                console.log("Val of item.Duration is " + item.Duration);
                console.log("Val of item.Duration is " + item.Duration);

                if (nameSearch && item.Airline.indexOf(nameSearch) === -1){
                    return false;
                }
                // if (price && item.Price.indexOf(price) === -1){
                //     return false;
                // }
                // if (duration && item.Duration.indexOf(duration) === -1){
                //     return false;
                // }

                // if (emailSearch && item.email.toLowerCase().indexOf(emailSearch.toLowerCase()) === -1){
                //     return false;
                // }
                // if (companySearch && item.company.toLowerCase().indexOf(companySearch.toLowerCase()) === -1){
                //     return false;
                // }
                return true;
           })
        }
        else{
            return items;
        }
    }
}