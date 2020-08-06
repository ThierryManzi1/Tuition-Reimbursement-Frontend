import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReserveTuitionService } from '../service/tuition/reserve-tuition.service';

export class TuitionBudget{
  constructor(
    public id: number,
    public school: string,
    public semester: string
  ){}

}


@Component({
  selector: 'app-reserved-tuitions',
  templateUrl: './reserved-tuitions.component.html',
  styleUrls: ['./reserved-tuitions.component.css']
})
export class ReservedTuitionsComponent implements OnInit {
  tuitions : TuitionBudget[]
  constructor(private tuitionService: ReserveTuitionService, private router :Router) { }

  ngOnInit(): void {
    this.getReservedTuitions()
  }

  getReservedTuitions(){
    this.tuitionService.getAllReservedTuitions()
    .subscribe(
      data=>{
        console.log(data);
        this.tuitions = data;
      },
      error =>  {
        console.log('error', error)
        this.router.navigate(['error'])  })
    
  }

  reserveTuition(){
    this.router.navigate(['tuition',-1])
  }

  updateTuition(id){
    console.log(`update ${id}`);
    this.router.navigate(['tuition',id])
    
    }

    deleteTuition(id){
      this.tuitionService.deleteReservedTuition(id)
                      .subscribe(
                        response=>{
                          console.log(`delete tuition ${id} was successfull`);
                          this.getReservedTuitions()
                        },
                        error =>  {
                          console.log('error', error)
                          this.router.navigate(['error'])  }
                      )
    }
    // deleteTodo(id){
    //   console.log(`delete todo ${id}`)
    //   this.todoService.deleteTodo('in28minutes', id).subscribe(
    //     response=>{
    //       console.log(response)
    //       this. message=`Delete Todo Successful ${id} successful`   
    //       this.getTodos();
    //     }
    //   )
    // }
 
}
