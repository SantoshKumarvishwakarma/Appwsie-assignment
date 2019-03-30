import { ToastrService } from 'ngx-toastr';
import {HighlightService} from '../../service/highlight.service';
import {AfterViewInit, Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {DataTableDirective} from 'angular-datatables';
import {Subject} from "rxjs/index";
import { NgxSpinnerService } from 'ngx-spinner';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hightlight',
  templateUrl: './hightlight.component.html',
  styleUrls: ['./hightlight.component.scss'],
  providers: [NgbPaginationConfig] // add NgbPaginationConfig to the component providers

})
export class HightlightComponent implements OnInit {
  page = 4;
  dtOptions: { dom: string; "aLengthMenu": {}; };
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  data: any;
  errorMsg = '';

  constructor(private toastr: ToastrService, private highlightservice: HighlightService,private spinner: NgxSpinnerService,config: NgbPaginationConfig) {
    // customize default values of paginations used by this component tree
    config.size = 'sm';
    config.boundaryLinks = true;
  }

  ngOnInit() {
    this.dtOptions = {
      dom: 'l<"pull-right"B>frtip',
      'aLengthMenu': [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]]
    };
    this.getHightlightData();
  }
  getHightlightData() {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
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
    // this.spinner.hide();
  }

  // ngOnDestroy(): void {
  //   // Do not forget to unsubscribe the event
  //   this.dtTrigger.unsubscribe();
  // }

}
