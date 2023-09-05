import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { createItemDto } from './dto/create-item.dto';
@Controller('items')
export class ItemsController {

    @Get()
    findAll(): string {
        return 'Hey Mhan'
    }

    @Get(':id')
    findById(@Param('id') id): string {
        return `Item is ${id}`
    }

    @Post()
    create(@Body() createItemDto: createItemDto): string {
        return `Name:${createItemDto.name} Password:${createItemDto.password}`
    }


}
