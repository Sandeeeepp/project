import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private router:Router) { }
  
  
  
  login(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(()=>{
      localStorage.setItem('email',email)
      localStorage.setItem('token','true');
      this.router.navigate(['create'])
    },err=>{
      alert(err.message);
      this.router.navigate(['/login'])
    })
  }

  register(email:string,password:string){
    
    this.fireauth.createUserWithEmailAndPassword(email,password).then(()=>{
      alert("registration successful")
      this.router.navigate(['/login'])
    },err=>{
      alert(err.message);
      this.router.navigate(['/register'])
    }
    )
  }
  logout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
    },err=>{
      alert(err.message)

    })
  }



  
 messageSource=new BehaviorSubject<string[]>([])
 
 msgSource=new BehaviorSubject<string[]>([])

 messageSrc=new BehaviorSubject<string[]>([])
}
