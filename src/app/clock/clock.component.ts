import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core'

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements AfterViewInit {
  @ViewChild('clockCanvas')
  clockCanvas: ElementRef<HTMLCanvasElement>

  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D

  constructor() {}

  ngAfterViewInit() {
    this.canvas = this.clockCanvas.nativeElement as HTMLCanvasElement
    this.context = this.canvas.getContext('2d')!
    this.draw()
  }

  private draw() {
    this.drawText();
  }

  private drawText() {
    this.context.font = '100px sans-serif';
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';
    this.context.fillStyle = '#ee9'
    const x = this.canvas.width / 2;
    const y = this.canvas.height / 2;
    this.context.fillText('Clock', x, y);
  }
}

