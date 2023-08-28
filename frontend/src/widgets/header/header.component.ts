import { Component, HostListener } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerVisible = true

  @HostListener('window:scroll', [])
  onWindowScroll (): void {
    const scrollTop = window.scrollY
    const offset = window.innerHeight / 2
    const range = 200
    const calc = 1 - (scrollTop - offset + range) / range

    this.headerVisible = calc > 0 && calc <= 1
  }
}
