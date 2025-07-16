import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { AppStateService } from '@core/services/app-state.service';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  @Input() query: string = '';

  private _searchSubject: Subject<string> = new Subject<string>();
  private _destroy = new Subject<void>();

  constructor(private _appStateService: AppStateService) {}

  ngOnInit(): void {
    this._searchSubject
      .pipe(debounceTime(1000), takeUntil(this._destroy))
      .subscribe((value) => {
        this.query = value;
        this._appStateService.updateSearchQuery(value);
      });
  }

  onInputChange(value: string) {
    this.query = value;
    this._searchSubject.next(value);
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }
}
