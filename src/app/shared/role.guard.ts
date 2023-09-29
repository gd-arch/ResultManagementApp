import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  { 
    return this.isAuthorised(route);
  }
  private isAuthorised(route:ActivatedRouteSnapshot):boolean{
    const currentRole=localStorage.getItem("userType");
   
    const expectedRoles=route.data['expectedRoles'];
    //console.log("current role=",currentRole,"\n expected role",expectedRoles);
    for(let role of expectedRoles){
      if(currentRole===role) return true;
    }
    alert("You are not authorised to access this resource")
  this.router.navigate(['home']);
    return false;
  }
  
}
