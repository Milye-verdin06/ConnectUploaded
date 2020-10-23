import { Component, OnDestroy} from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnDestroy {

  public titulo: string;
  public tituloSubs$: Subscription;

  constructor(private router:Router, private route: ActivatedRoute) {
    this.tituloSubs$ = this.getArgumentosRuta().subscribe(({titulo}) =>{
      this.titulo = titulo;
      document.title = `Connect v5 - ${titulo}`;
    });
    }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentosRuta(){
     return this.router.events
     .pipe(
        filter(event => event instanceof ActivationEnd),
        filter ((event: ActivatedRoute) => event.snapshot.firstChild === null),
        map((event: ActivatedRoute) => event.snapshot.data)
     );
  }

}
