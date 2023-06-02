import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    fav: Todo[] = [];
    todoList: Todo[] = [
        {
            id: 1,
            title: 'Cumparaturi',
            iscompleted: false,
            isFavorite: false,
            date: new Date('4-15-2020')
        },
        {
            id: 2,
            title: 'Masina la Service',
            iscompleted: false,
            isFavorite: false,
            date: new Date('5-15-2020')
        },
        {
            id: 3,
            title: 'Pick Alexia de la bunica',
            iscompleted: false,
            isFavorite: false,
            date: new Date('6-15-2020')
        },
        {
            id: 4,
            title: 'Ridicat costum curatatorie',
            iscompleted: false,
            isFavorite: false,
            date: new Date('6-15-2020')
        },
    ];

    constructor(private toastrService: ToastrService) { }

    deleteTodo(item: Todo) {
        let index = this.todoList.indexOf(item);
        this.todoList.splice(index, 1);
    }

    addTodo(title: string) {
        let id = this.todoList.length + 2;

        const item: Todo = {
            id: id,
            iscompleted: false,
            isFavorite: false,
            date: new Date(),
            title: title
        };

        this.todoList.unshift(item);
    }

    updateFav() {
        this.fav = JSON.parse(localStorage.getItem('favorite') || '[]');
    }
}
