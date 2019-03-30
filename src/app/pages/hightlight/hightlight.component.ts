import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {HighlightService} from '../../service/highlight.service';

@Component({
  selector: 'app-hightlight',
  templateUrl: './hightlight.component.html',
  styleUrls: ['./hightlight.component.scss']
})
export class HightlightComponent implements OnInit {
  data: any;
  errorMsg = '';

  constructor(private toastr: ToastrService, private highlightservice: HighlightService) {}

  ngOnInit() {
    this.getHightlightData();
  }
  getHightlightData() {
    this.highlightservice.getHighlight().subscribe(result => {
        this.data = result as object [];
        console.log(this.data);
        // this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        //   dtInstance.destroy();
        //   this.dtTrigger.next();
        // });
      },

      error => {
        this.errorMsg = error.statusText
        this.toastr.error('Something Went wrong!', 'Something Wrong!');
      });
  }
}
