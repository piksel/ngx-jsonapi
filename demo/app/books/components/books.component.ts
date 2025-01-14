import { Component } from '@angular/core';
import { Resource, DocumentCollection } from 'ngx-jsonapi';
import { BooksService, Book } from './../books.service';
import { AuthorsService } from './../../authors/authors.service';
import { PhotosService } from '../../photos/photos.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'demo-books',
    templateUrl: './books.component.html'
})
export class BooksComponent {
    public books: DocumentCollection<Book>;

    public constructor(
        private route: ActivatedRoute,
        protected authorsService: AuthorsService,
        protected booksService: BooksService,
        protected photosService: PhotosService
    ) {
        route.queryParams.subscribe(({ page }) => {
            booksService
                .all({
                    // eslint-disable-next-line id-blacklist
                    page: { number: page || 1 },
                    include: ['author', 'photos']
                })
                .subscribe(
                    books => {
                        this.books = books;
                        // console.info('success books controll', this.books);
                    },
                    (error): void => console.log('error books controll', error)
                );
        });
    }

    public getAll(remotefilter: any): void {
        // we add some remote filter
        remotefilter.date_published = {
            since: '1983-01-01',
            until: '2010-01-01'
        };

        let books$: Observable<DocumentCollection<Book>> = this.booksService.all({
            remotefilter: remotefilter,
            // eslint-disable-next-line id-blacklist
            page: { number: 1 },
            include: ['author', 'photos']
        });
        books$.subscribe(
            books => {
                this.books = books;

                console.log('success books controller', this.books);
            },
            error => console.log('error books controller', error)
        );
        books$.toPromise().then(success => console.log('books loaded PROMISE'));
    }

    public delete(book: Resource): void {
        this.booksService.delete(book.id);
    }
}
