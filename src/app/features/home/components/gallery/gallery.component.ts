import { Component, OnInit } from '@angular/core';
import { Gallery } from '../../models/home';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  public gallery!: Gallery;
  constructor() {
    this.gallery = {
      title: "Galería de Alimentos Probioticos y Prebioticos",
      imageGallery: [
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642542236/Angular/yogures_bitgh7.jpg",
          alt: "kefir"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642542214/Angular/chucrut_nygksh.jpg",
          alt: "Chucrut"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642542221/Angular/te_de_kombucha_coiam2.jpg",
          alt: "Kombucha"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642609300/Angular/91A1KRsPKnL._AC_SL1500__qbwkoq.jpg",
          alt: "Ajo negro"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642609253/Angular/alga_espirulina_n3uit1.jpg",
          alt: "Espirulina"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642609248/Angular/tempeh_u8pmj5.jpg",
          alt: "Tempeh"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642609272/Angular/conservas_atbynu.jpg",
          alt: "Conservas"
        },
        {
          src: "https://res.cloudinary.com/dtaz65dmf/image/upload/v1642609261/Angular/411qHJ8yEyL._AC__spsfn8.jpg",
          alt: "Queso"
        }
       
      ]
    }
  }

  ngOnInit(): void {
  }

}