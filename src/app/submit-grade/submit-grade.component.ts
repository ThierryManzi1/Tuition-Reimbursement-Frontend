import { SubmitGradeService } from './../service/grade/submit-grade.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submit-grade',
  templateUrl: './submit-grade.component.html',
  styleUrls: ['./submit-grade.component.css']
})
export class SubmitGradeComponent implements OnInit {
  id:number;
  files: any;
  constructor(
    private gradeService: SubmitGradeService,
    private router : Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
  }
  SubmitGradeForm = new FormGroup({
    mark: new FormControl('', Validators.required),
    transcript: new FormControl('',Validators.required)
  })

  fileUpload(event){
    
    this.files = event.target.files[0];
    console.log(this.files)
  }

  submitGrade(){
    const gradeFields = this.SubmitGradeForm.value
    // const grade ={
    //   grade : gradeFields.grade,
    //   file :gradeFields.transcript
    // }
    const data = new FormData();
    var grade = gradeFields.mark;
    var file =gradeFields.transcript;
    
    
    data.append('grade', grade)
    data.append('file', this.files, this.files.name)
    
    if(this.id==-1){
      this.gradeService.submitGrade(data)
        .subscribe(
          response=>{console.log('success',response)
                    this.router.navigate(['submittedGrades'])
                  },
           error =>  {
             console.log('error', error)
             this.router.navigate(['error'])  }

        );
    }else{
      this.gradeService.updateGrade(this.id, data)
      .subscribe(
        response=>{console.log('success',response)
                  this.router.navigate(['submittedGrades'])
                },
         error =>  {
           console.log('error', error)
           this.router.navigate(['error'])  }

      );
    }
    

  }


}
