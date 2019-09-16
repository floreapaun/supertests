
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';





/**
*@Loader service : for managing the Loader
* @method show : for showing loader and triggering ,
* @Param value : Boolean flag for show/hide
                                  * the Observable where We will Subscribe the loader
* at root component
*  Use ` root component   ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.loader = val;
    })
  }

 ngOnDestroy() {
    this.loaderService.status.unsubscribe();
  }
 in html
 <router-outlet>
 <div class="loader" *ngIf="loader">
 <div class="img-loader">
 <img src="../../../assets/images/nsf_loader.gif" />
 </div>
 </div>
 </router-outlet>`
 --------------for Mobile in Native script--------------
 <AbsoluteLayout>
    <GridLayout class="upper-grid" height="100%"  width="100%"  >
        <page-router-outlet></page-router-outlet>
    </GridLayout>
    <GridLayout class="lower-grid" height="100%"  width="100%" *ngIf="isBusy">
        <ActivityIndicator row="1" #activityIndicator busy="true"  width="100" height="100"></ActivityIndicator>
    </GridLayout>
</AbsoluteLayout>
*/

@Injectable({
    providedIn: 'root',
})
export class LoaderService {

    public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    //public statusBS: BehaviorSubject<boolean> = new BehaviorSubject<boolean>({});
    public statusBSObser = this.status.asObservable();
    currentStatus:boolean = false;
    constructor() {}


    /**
     * @ngdoc method
     * @name show
     * @methodOf LoaderService
     * @description
     * This method is show/ hide loader using observable
     * @ Param value - setting the true or false based on observer
     */
    show(value: boolean) {
        this.status.next(value);
        this.currentStatus = value;
       // this.statusBS.next({})
    }

    // showNew () {
    //     this.currentStatus = value;
    //     this.statusBS.next(value: boolean)
    // }
  
}
