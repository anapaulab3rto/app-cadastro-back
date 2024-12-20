import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
    private readonly items = [];

    findAll() {
        return this.items;
    }

    create(item) {
        this.items.push(item);
        return item;
    }
}
