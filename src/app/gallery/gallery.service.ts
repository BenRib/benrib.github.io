import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Occasion } from './gallery.model';

@Injectable()
export class GalleryService {
    private occasions: Occasion[] = [
        {
            id: 0, name: '2018', images: [
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' },
                { url: 'http://projets-architecte-urbanisme.fr/images-archi/2012/11/tour-strasbourg-presqu-ile-malraux-demians.jpg', caption: 'Swans' },
                { url: 'https://pokaa.fr/wp-content/uploads/2018/06/Strasbourg-Malraux-Etoile-Bourse-Rivetoile-Architecture-Photographie-Argentique-Chlo%C3%A9-Moulin-1.jpg', caption: 'MUI' },
                { url: 'http://img.20mn.fr/d4we0X2qTDKNk8lqo0vpLg/2048x1536-fit_presquile-malraux-strasbourg-15-avril-2016.jpg', caption: 'Docks' },
                { url: 'http://img13.deviantart.net/4b01/i/2014/035/1/0/strasbourg_presqu__icirc_le_malraux_by_satourne-d754kqw.jpg', caption: 'By night' },
                { url: 'https://www.justacote.com/photos_entreprises/la-presqu-ile-malraux-strasbourg-147204462025.jpg', caption: 'Esplanade mediatheque' },
                { url: 'https://www.strasbourgphoto.com//wp-content/gallery/presquile-malraux/Presquile-malraux-(95).jpg', caption: 'Mediatheque' },
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' },
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' },
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' },
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' }
            ]
        },
        {
            id: 1, name: '2019', images: [
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' },
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' },
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' },
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' },
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' },
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' },
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' },
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' },
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' },
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' },
                { url: 'https://cdn-s-www.dna.fr/images/E201E75F-8BA0-436A-B8C9-549ED0D38299/DNA_v0_03/premier-quai-des-arts-1535139969.jpg', caption: 'Quai' }]
        }
    ];

    constructor(httpClient: HttpClient) { }

    getOccasions(): Observable<Occasion[]> {
        return of(this.occasions);
    }
}