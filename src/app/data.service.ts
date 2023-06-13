import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn: 'root'
})


export class DataService {

    //dataEmitter = new EventEmitter<boolean>();

    dataEmitter = new Subject<boolean>();
    dataEmitterLegal = new Subject<boolean>();

    raiseDataEmitterEvent(data: boolean) {
        this.dataEmitter.next(data);
    }

    raiseDataEmitterEventLegal(data: boolean) {
        this.dataEmitterLegal.next(data);
    }

}