import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


@Schema()
export class Item {
    @Prop()
    name: string;

    @Prop()
    qty: number;

    @Prop()
    description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);