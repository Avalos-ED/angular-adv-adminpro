import { Component, OnDestroy } from '@angular/core';
import { interval, map, Observable, retry, take, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() { 

    this.intervalSubs = this.retornaInvervalo()
                        .subscribe(
                          (valor) => console.log(valor)
                        );

    // this.retornoObservable().pipe(
    //   retry()
    // ).subscribe({
    //   next: (v) => console.log('Subs: ', v),
    //   error: (e) => console.warn("Error: ", e),
    //   complete: () => console.info('Obserbable terminado')
    // });

  } 
  
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaInvervalo(): Observable<number>{
    return interval(100)
            .pipe(
              // take(10),
              map(valor => {
                return valor +1;
              }),
              filter(valor => (valor % 2 === 0)? true:false),
            );
  }

  retornoObservable(): Observable<number>{
    let i = -1;
      const obs$ = new Observable<number>( observer => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if ( i === 4 ) {
          clearInterval(interval);
          observer.complete();
        }

        if ( i === 2 ) {
          observer.error('i llego al valor 2');
        }
      }, 1000 );
      
    });

    return obs$;
  }

}
