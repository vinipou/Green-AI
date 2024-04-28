import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '@shared';

@Component({
  selector: 'app-Webpage',
  templateUrl: './Webpage.component.html',
  styleUrls: ['./Webpage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PageHeaderComponent],
})
export class WebpageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
