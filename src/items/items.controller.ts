import { Controller, Get, Body, Post } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll() {
        return this.itemsService.findAll();
    }

    @Post()
    create(@Body() createItemDto: any) {
        return this.itemsService.create(createItemDto);
    }
}
