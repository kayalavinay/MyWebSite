import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  photos = [
    { url: 'assets/lap1.jpg', alt: 'Photo 1' },
    { url: 'assets/lap3.jpg', alt: 'Photo 2' },
    { url: 'assets/lap5.jpg', alt: 'Photo 3' },
    { url: 'assets/lap3.jpg', alt: 'Photo 4' },
    { url: 'assets/lap4.jpg', alt: 'Photo 5' },
    { url: 'assets/lap2.jpg', alt: 'Photo 6' },
    { url: 'assets/lap5.jpg', alt: 'Photo 7' },
    { url: 'assets/lap1.jpg', alt: 'Photo 8' },
    { url: 'assets/lap4.jpg', alt: 'Photo 9' },

    // Add more photos here
  ];
}
