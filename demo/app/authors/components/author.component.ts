import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from 'ngx-jsonapi';
import { PhotosService } from '../../photos/photos.service';
import { AuthorsService, Author } from '../authors.service';
import { BooksService } from '../../books/books.service';

@Component({
    selector: 'demo-author',
    templateUrl: './author.component.html'
})
export class AuthorComponent {
    public author: Author;
    public relatedbooks: Array<Resource>;

    public constructor(
        protected authorsService: AuthorsService,
        protected photosService: PhotosService,
        booksService: BooksService,
        private route: ActivatedRoute
    ) {
        route.params.subscribe(({ id }) => {
            authorsService.get(id, { include: ['books', 'photos'], ttl: 100 }).subscribe(
                author => {
                    this.author = author;
                },
                error => console.error('Could not load author.', error)
            );
        });
    }

    /*n
    Add a new author
    */
    public newAuthor(): void {
        let author: Author = this.authorsService.new();
        author.attributes.name = prompt('New author name:', 'John Doe');
        if (!author.attributes.name) {
            return;
        }
        author.attributes.date_of_birth = '2030-12-10';
        console.log('author data for save', author.toObject());
        author
            .save
            /* { include: ['book'] } */
            ()
            .subscribe(success => {
                console.log('author saved', author.toObject());
            });
    }

    /*
    Update name for actual author
    */
    public updateAuthor(): void {
        this.author.attributes.name = prompt('Author name:', this.author.attributes.name);
        console.log('author data for save with book include', this.author.toObject({ include: ['books'] }));
        console.log('author data for save without any include', this.author.toObject());
        this.author.save(/* { include: ['book'] } */).subscribe(success => {
            console.log('author saved', this.author.toObject());
        });
    }

    public removeRelationship(): void {
        this.author.removeRelationship('photos', '1');
        this.author.save();
        console.log('removeRelationship save with photos include', this.author.toObject());
    }
}
