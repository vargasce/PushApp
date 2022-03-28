import { Injectable } from '@angular/core';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';

@Injectable({
    providedIn: 'root'
})
export class PushService {

    constructor(
        private _oneSignal: OneSignal
    ){ 

    }

    public configuracionInicial(){

        this._oneSignal.startInit( '2834da09-3d1a-499b-9a55-af2c5635b4b3', '819178354762' );

        this._oneSignal.inFocusDisplaying( this._oneSignal.OSInFocusDisplayOption.InAppAlert );

        this._oneSignal.handleNotificationReceived().subscribe( ( noti ) => {
            // Accion cuando se recibe la notificacion
            console.log( 'Notificacion recibida', noti );
        });

        this._oneSignal.handleNotificationOpened().subscribe( ( noti ) => {
            // Accion cuando se abro la notificacion
            console.log( 'Notificacion Abierta', noti );
        });

        this._oneSignal.endInit();

    }

}
