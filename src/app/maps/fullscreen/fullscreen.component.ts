import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss']
})
export class FullscreenComponent implements OnInit {
  @ViewChild('map')
  map;

  lat = -33.4855814;
  lng = 146.4032773;
  zoom = 8;

  styles: any = [
    {
      featureType: 'all',
      stylers: [
        {
          saturation: -100
        }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          hue: '#2ECC71'
        },
        {
          saturation: 50
        }
      ]
    },
    {
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    }
  ];

  ngOnInit() {
    this.map.triggerResize();
  }
}
