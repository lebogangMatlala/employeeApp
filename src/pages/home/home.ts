import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Employee } from './Employee';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  listEmployee=[];


  addEmployee(name,surname,role,id)
  {
      let objectEm = new Employee(name,surname,role,id)


      if(objectEm != null && objectEm !=null)
      {
        this.listEmployee.push(objectEm);
        console.log(objectEm);
      }

  }

  deleteEmployee(b)
  {
    this.listEmployee.splice(this.listEmployee.indexOf(b),1,);
  
  }

  updateEmployee(a,fname,lname,roleEmp,idEmp){

    let newName =this.listEmployee[a].name;
    let newSurname=this.listEmployee[a].surname;
    let newRole = this.listEmployee[a].role;
    let newId = this.listEmployee[a].id;

   if(fname != '' && fname!= null && lname != ''  && lname != null && roleEmp != ''  && roleEmp != null && idEmp != ''  && idEmp != null )
    {
        let objct= new Employee(fname,lname,roleEmp,idEmp);
        this.listEmployee.splice(a,1,objct);
        console.log(objct);
    }
    else if(fname != '' && fname!= null && lname != ''  && lname != null && roleEmp != ''  && roleEmp != null)
    {

      let objct= new Employee(fname,lname,roleEmp,newId);
      this.listEmployee.splice(a,1,objct);
      console.log(objct);
    }
    else if(fname != '' && fname!= null && lname != ''  && lname != null && idEmp != ''  && idEmp != null )
    {

      let objct= new Employee(fname,lname,newRole,idEmp);
      this.listEmployee.splice(a,1,objct);
      console.log(objct);
    }
    else if(fname != '' && fname!= null && idEmp != ''  && idEmp != null  && roleEmp != ''  && roleEmp != null)
    {

      let objct= new Employee(fname,newSurname,roleEmp,idEmp);
      this.listEmployee.splice(a,1,objct);
      console.log(objct);
    }
    else if( lname != ''  && lname != null && roleEmp != ''  && roleEmp != null && idEmp != ''  && idEmp != null )
    {

      let objct= new Employee(newName,lname,roleEmp,idEmp);
      this.listEmployee.splice(a,1,objct);
      console.log(objct);
    }
 
  
  else if(fname != '' && fname!= null)
  {
    let objct= new Employee(fname,newSurname,newRole,newId);
    this.listEmployee.splice(a,1,objct);
  }
  else if(lname != ''  && lname != null)
  {
    let objct= new Employee(newName,lname,newRole,newId);
    this.listEmployee.splice(a,1,objct);
  }
  else if(roleEmp != ''  && roleEmp != null)
  {
    let objct= new Employee(newName,newSurname,roleEmp,newId);
    this.listEmployee.splice(a,1,objct);
  }
  else if(idEmp != ''  && idEmp != null)
  {
    let objct= new Employee(newName,newSurname,newRole,idEmp);
    this.listEmployee.splice(a,1,objct);
  }

  }
  constructor(public navCtrl: NavController) {

  }

}
