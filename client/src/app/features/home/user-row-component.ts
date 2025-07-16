import { Component
, Input, Output, EventEmitter
 } from "@angular/core";


 @Component({
    selector: "user-row-component",
    templateUrl: "./user-row-component.html",   
    styleUrls   : ["./user-row-component.scss"],
    standalone: true,
 })
 export class UserRowComponent {
    @Input() user: any;
    @Output() userSelected = new EventEmitter<any>();
    @Output() userDeleted = new EventEmitter<any>();

    onUserSelected() {
        this.userSelected.emit(this.user);
    }

    onUserDeleted() {
        this.userDeleted.emit(this.user);
    }

    
 }