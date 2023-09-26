import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/items.interfaces'
import { Model } from 'mongoose';
import { createItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private ItemModel: Model<Item>) { }

    async findAll(): Promise<Item[]> {
        return await this.ItemModel.find();
    }

    async createItem(item: Item): Promise<Item> {
        const newItem = new this.ItemModel(item)
        return await newItem.save()
    }

    async findById(id: string): Promise<Item> {
        return await this.ItemModel.findById(id)
    }

    async updateItem(item: Item, id: string): Promise<Item> {
        return await this.ItemModel.findByIdAndUpdate(id, item, { new: true })
    }

    async deleteItem(id: string): Promise<Item> {
        return await this.ItemModel.findByIdAndRemove(id)
    }

}
