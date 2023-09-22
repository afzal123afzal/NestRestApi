import { Controller, Get, Post, Delete, Put, Body, Param, Req, Res } from '@nestjs/common';
import { createItemDto } from './dto/create-item.dto';
@Controller('items')
export class ItemsController {

    @Get()
    findAll(): string {
        return 'Hey Mhan'
    }
    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `${id}`
    }

    @Post()
    create(@Body() createItemDto: createItemDto): string {
        return `My name is ${createItemDto.name} and password is ${createItemDto.password}`
    }

    @Put(':id')
    update(@Body() updateItemDto: createItemDto, @Param('id') id): string {
        return `Updated ${id} Name:${updateItemDto.name}`
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete ${id}`
    }
}
