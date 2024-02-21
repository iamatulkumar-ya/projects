import { Component, NgModule, OnInit} from "@angular/core";

import { routeConfig } from "src/app/shared/appConstants/route.constant";
import { GlobalConst } from "src/app/shared/appConstants/globalConstants";

@Component({
selector:'employeeHome-page',
templateUrl:'./employeeHome.component.html'

})

export class EmployeeHomeComponent implements OnInit{
    
    constructor() {}
 
    routeConfigData : any = []; 

    ngOnInit(): void {
            // we have to filter it with which is applicable for 'admin' only
        this.routeConfigData = routeConfig.filter(_r=> _r.showIn === GlobalConst.appMenuShowIn_employeeChild);

        console.log(this.routeConfigData )
    }

}