import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
    let service: TodoService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TodoService] // Add TodoService to providers
        });
        service = TestBed.inject(TodoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
