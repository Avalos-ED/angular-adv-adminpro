import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy  {

  public titulo: string = '';
  public tituloSubs$?: Subscription;

  constructor( private router: Router) { 
    this.tituloSubs$ = this.gatArgumentosRuta()
                      .subscribe( ({ titulo }) => {
                        this.titulo = titulo;
                        document.title = `AdminPro - ${titulo}`;
                      });
  }
  ngOnDestroy(): void {
    this.tituloSubs$?.unsubscribe();
  }

  gatArgumentosRuta() {
    return this.router.events
      .pipe(
        filter( (event): event is ActivationEnd => event instanceof ActivationEnd),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
        map( (evento: ActivationEnd) => evento.snapshot.data)
      );
  }


}
