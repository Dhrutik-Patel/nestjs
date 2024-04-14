import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true,
})
class ProductSchema {
    @Prop({ required: true, unique: true }) // Decorator to define a property
    name: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    quantity: number;

    @Prop({
        required: true,
        enum: ['Electronics', 'Clothing', 'Books'],
        immutable: true, // Prevents updates to the property
    })
    category: string;
}

export default SchemaFactory.createForClass(ProductSchema); // Create a Mongoose schema
