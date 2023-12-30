import * as mongoose from 'mongoose';

import { BicycleStatus } from '@common/enums/bicycle-status.enum';
import { BicycleColors } from '@common/enums/bicycle-colors.enum';

export const BicycleSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: String,
    type: String,
    color: {
        type: String,
        enum: Object.values(BicycleColors),
        required: true
    },
    wheelSize: Number,
    price: Number,
    description: String,
    status: {
        type: String,
        enum: Object.values(BicycleStatus),
        default: BicycleStatus.AVAILABLE,
    },
});
