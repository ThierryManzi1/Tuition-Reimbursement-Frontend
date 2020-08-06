import { TuitionBudget } from './../reserved-tuitions/reserved-tuitions.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {ReserveTuitionService} from './../service/tuition/reserve-tuition.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reserve-tuition',
  templateUrl: './reserve-tuition.component.html',
  styleUrls: ['./reserve-tuition.component.css']
})
export class ReserveTuitionComponent implements OnInit {
  id:number
  //tuition :TuitionBudget
  constructor(
    private tuitionService : ReserveTuitionService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
  }

  ReserveTuitionForm = new FormGroup({
    school: new FormControl('',Validators.required),
    semester: new FormControl('',Validators.required)
  });

  
  reserve(){
    const tuitionFields = this.ReserveTuitionForm.value;
    
    const tuition = {
      school: tuitionFields.school,
      semester: tuitionFields.semester
    };
    if(this.id==-1){
      console.log(tuition)
      this.tuitionService.reserveTuition(tuition)
         .subscribe(()=>
         this.router.navigate(['reservedTuitions']),
         error =>  {
          console.log('error', error)
          this.router.navigate(['error'])  }
         )
    }else{
      console.log(tuition)
      this.tuitionService.updateReservedTuition(this.id,tuition)
         .subscribe(()=>
         this.router.navigate(['reservedTuitions']),
         error =>  {
          console.log('error', error)
          this.router.navigate(['error'])  }
         )
    }
   
  }

}
