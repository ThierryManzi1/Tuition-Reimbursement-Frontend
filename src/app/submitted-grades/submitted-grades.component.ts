import { SubmitGradeService } from './../service/grade/submit-grade.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

export class Grade{
  constructor(
    public id : number,
    public mark: string,
    public fileName: string,
    public fileType : string,
    public data : BlobPart
  ){}
}


@Component({
  selector: 'app-submitted-grades',
  templateUrl: './submitted-grades.component.html',
  styleUrls: ['./submitted-grades.component.css']
})
export class SubmittedGradesComponent implements OnInit {
  grade:Grade
  grades : Grade[];
  constructor(private router: Router, private gradeService:SubmitGradeService) { }

  ngOnInit(): void {
    this.getGrades();
  }

  getGrades(){
    this.gradeService.getAllGrades().subscribe(
      data=>{
        this.grades =data;
      } )
  }

  downloadFile(id){
    this.gradeService.downloadTranscript(id).subscribe(
        res=>{
          // It is necessary to create a new blob object with mime-type explicitly set
            // otherwise only Chrome works like it should
          var newBlob = new Blob([res],{ type: "application/pdf" });
          
          // IE doesn't allow using a blob object directly as link href
            // instead it is necessary to use msSaveOrOpenBlob
          if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            window.navigator.msSaveOrOpenBlob(newBlob);
            return;
        }

        // For other browsers: 
            // Create a link pointing to the ObjectURL containing the blob.
        const data = window.URL.createObjectURL(newBlob);

            var link = document.createElement('a');
            link.href = data;
            link.download = "transcript";
            // this is necessary as link.click() does not work on the latest firefox
            link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

            setTimeout(function () {
                // For Firefox it is necessary to delay revoking the ObjectURL
                window.URL.revokeObjectURL(data);
                link.remove();
            }, 100);
        });
        }
      
    

      // const file = new Blob([res], {
      //   type: 'application/pdf',
      // })
    deleteGrade(id){
      this.gradeService.deleteGrade(id)
                    .subscribe(
                      response=>{
                        console.log(`delete grade ${id} was successfull`);
                        this.getGrades();
                      },
                      error =>  {
                        console.log('error', error)
                        this.router.navigate(['error'])  }
                      

                    )
    }

    submitGrade(){
      this.router.navigate(['grade',-1])
    }
    updateGrade(id){
      console.log(`update ${id}`);
      this.router.navigate(['grade',id])
      
      }
  

}
