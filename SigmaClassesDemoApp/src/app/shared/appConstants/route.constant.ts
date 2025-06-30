 
import { HomeComponent } from '../../components/layoutComponents/home.Component'; 
import { AdmissionComponent } from '../../components/appComponents/admission.component';
import { ManagementComponent } from '../../components/appComponents/management.component';
import { ResultsComponent } from '../../components/appComponents/results.component';
import { LoginComponent } from 'src/app/components/appAuthComponents/login.component';

import { EmployeeHomeComponent } from 'src/app/components/employee/employeeHome.component';
import { GetAccountDetailsComponent } from '../../components/employee/getAccountDetails.component';
import { AddChequeComponent } from 'src/app/components/employee/addCheque.component';
import { GenerateReportComponent } from 'src/app/components/employee/generateReport.component';
import { AddEmployeeDataComponent } from 'src/app/components/employee/addEmployeeData.component';


import { GlobalConst } from './globalConstants';
// Define the value of showIn  as  'menu', 'none'..... to identify where we have to show the link

 
/**
 * Import this const object to get the route details. 
 * showIn: use this filter to get the specific required routes, possible values: 'menu', 'none'
 */
export const routeConfig =[

     
    { 
        routeLink: 'Home',
        routeLinkText:'Home',
        routeComponent: HomeComponent,
        showIn:  GlobalConst.appMenuShowIn_menu
    },

    // { 
    //     routeLink: 'Admission',
    //     routeLinkText:'Admission',
    //     routeComponent: AdmissionComponent,
    //     showIn: GlobalConst.appMenuShowIn_menu
    // },

    // { 
    //     routeLink: 'Results',
    //     routeLinkText:'Results',
    //     routeComponent:ResultsComponent,
    //     showIn: GlobalConst.appMenuShowIn_menu
    // },

    // { 
    //     routeLink: 'Management',
    //     routeLinkText:'Management',
    //     routeComponent:ManagementComponent,
    //     showIn: GlobalConst.appMenuShowIn_menu
    // },
    
    { 
        routeLink: 'Login',
        routeLinkText:'Login',
        routeComponent:LoginComponent,
        showIn:  GlobalConst.appMenuShowIn_login
    },
    { 
        routeLink: 'EmployeeData',
        routeLinkText:'Employee Data',
        routeComponent:EmployeeHomeComponent,
        showIn:  GlobalConst.appMenuShowIn_employeeMenu
    },
    { 
        routeLink: 'AddEmployeeData',
        routeLinkText:'Add Employee Data',
        routeComponent:AddEmployeeDataComponent,
        showIn:  GlobalConst.appMenuShowIn_employeeChild
    },
    { 
        routeLink: 'AddCheque',
        routeLinkText:'Add Cheque',
        routeComponent:AddChequeComponent,
        showIn:GlobalConst.appMenuShowIn_employeeChild
    },
    { 
        routeLink: 'GetAccountDetails',
        routeLinkText:'Get Account Details',
        routeComponent: GetAccountDetailsComponent,
        showIn: GlobalConst.appMenuShowIn_employeeChild
    },
    { 
        routeLink: 'GenerateReport',
        routeLinkText:'Generate Report',
        routeComponent:GenerateReportComponent,
        showIn: GlobalConst.appMenuShowIn_employeeChild
    }






       

]