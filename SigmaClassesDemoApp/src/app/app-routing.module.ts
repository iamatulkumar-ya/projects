import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  
import {routeConfig} from  './shared/appConstants/route.constant';
import { PageNotFoundComponent } from '../app/components/layoutComponents/pageNotFound.component';

// service
import { AuthenticationService } from './services/authentication.service';
import { GlobalConst } from './shared/appConstants/globalConstants'; 
 
const routes: Routes = GetRoute(); 
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


function GetRoute(): Routes {
  const _route : Routes = [];
  const _adminChildRoute : Routes = [];
  const employeeRouteLink = 'EmployeeData';
  
  // pushing default value
   _route.push({path:'', component: routeConfig.find((i)=>i.routeLink==='Login')?.routeComponent , pathMatch: 'full'})
 
  
   // adding main menu path except admin path and making child path in same loop
  routeConfig.map(_item=>
    {

      switch(_item.showIn)
      {
      // adding menu routes without canActivate
      case GlobalConst.appMenuShowIn_menu:  case GlobalConst.appMenuShowIn_employeeMenu: case GlobalConst.appMenuShowIn_login:
        _route.push({path: _item.routeLink, component: _item.routeComponent, canActivate: [AuthenticationService]});
        break;

      // adding admin child routes in same loop
      case GlobalConst.appMenuShowIn_employeeChild: 
      _adminChildRoute.push({path: _item.routeLink, component: _item.routeComponent, canActivate: [AuthenticationService]}) 
      break;
     }
     
  })


 // now adding admin path:
 _route.push({
   path:employeeRouteLink,
   component: routeConfig.find((i)=>i.routeLink===employeeRouteLink)?.routeComponent , 
   canActivate: [AuthenticationService],
  children: _adminChildRoute})
 
    


  // Login Mechanism
 // const loginRouterLink = 'Login';
  // _route.push({path:'', component: routeConfig.find((i)=>i.routeLink===loginRouterLink)?.routeComponent , pathMatch: 'full'})
 
  // routeConfig.map(_item=>
  //   {
  //     if(_item.routeLink !== loginRouterLink){
  //     _route.push({path: _item.routeLink, component: _item.routeComponent, canActivate: [AuthenticationService]}) 
  //     }
  //     else {
  //       _route.push({path: _item.routeLink, component: _item.routeComponent}) 
  //     }
  // })
 
    _route.push({path:'**', component:PageNotFoundComponent})
    
 return _route;
}

