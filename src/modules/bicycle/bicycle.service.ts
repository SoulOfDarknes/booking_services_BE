import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Bicycle } from '@modules/bicycle/interfaces/bicycle.interface';
import { CreateBicycleDto } from './dto/create-bicycle.dto';
import { UpdateBicycleDto } from './dto/update-bicycle.dto';

@Injectable()
export class BicycleService {
    constructor(@InjectModel('Bicycle') private bicycleModel: Model<Bicycle>) { }

    async findAll(): Promise<Bicycle[]> {
        try {
            return await this.bicycleModel.find().exec();
        } catch (error) {
            throw error;
        }
    }


    async create(createBicycleDto: CreateBicycleDto): Promise<Bicycle> {
        const newBicycle = new this.bicycleModel(createBicycleDto);
        return newBicycle.save();
    }

    async findOne(id: string): Promise<Bicycle | null> {
        try {
            const bicycle = await this.bicycleModel.findById(id).exec();
            if (!bicycle) {
                throw new NotFoundException(`Bicycle with ID ${id} not found`);
            }
            return bicycle;
        } catch (error) {
            throw error;
        }
    }

    async update(id: string, updateBicycleDto: UpdateBicycleDto): Promise<Bicycle> {
        try {
            const updatedBicycle = await this.bicycleModel.findByIdAndUpdate(id, updateBicycleDto, { new: true }).exec();
            if (!updatedBicycle) {
                throw new NotFoundException(`Bicycle with ID ${id} not found`);
            }
            return updatedBicycle;
        } catch (error) {
            throw error;
        }
    }

    async remove(id: string): Promise<any> {
        try {
            const result = await this.bicycleModel.findByIdAndDelete(id).exec();
            if (!result) {
                throw new NotFoundException(`Bicycle with ID ${id} not found`);
            }
            return result;
        } catch (error) {
            throw error;
        }
    }


    async getStatistics(): Promise<any> {
        const totalCount = await this.bicycleModel.countDocuments().exec();
        const availableCount = await this.bicycleModel.countDocuments({ status: 'available' }).exec();
        const busyCount = await this.bicycleModel.countDocuments({ status: 'busy' }).exec();
        const avgPrice = await this.bicycleModel.aggregate([
            { $group: { _id: null, avgPrice: { $avg: "$price" } } }
        ]);

        return {
            totalCount,
            availableCount,
            busyCount,
            averagePrice: avgPrice.length > 0 ? avgPrice[0].avgPrice : 0
        };
    }

}
