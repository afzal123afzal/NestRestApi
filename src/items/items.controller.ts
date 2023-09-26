import { Controller, Get, Post, Delete, Put, Body, Param, Req, Res } from '@nestjs/common';
import { createItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/items.interfaces';
@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService) { }

    @Get()
    findAll(): Promise<Item[]> {
        return this.itemService.findAll()
    }
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Item> {
        return this.itemService.findById(id)
    }

    @Post()
    create(@Body() createItemDto: createItemDto): Promise<Item> {
        return this.itemService.createItem(createItemDto)
    }

    @Put(':id')
    update(@Body() updateItemDto: createItemDto, @Param('id') id): Promise<Item> {
        return this.itemService.updateItem(updateItemDto, id)
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item> {
        return this.itemService.deleteItem(id)
    }
}
