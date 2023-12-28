import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

import { BicycleService } from './bicycle.service';
import { CreateBicycleDto } from './dto/create-bicycle.dto';
import { UpdateBicycleDto } from './dto/update-bicycle.dto';

@Controller('bicycle')
export class BicycleController {
    constructor(private readonly bicycleService: BicycleService) { }

    @Get()
    async getAllBicycles() {
        return this.bicycleService.findAll();
    }

    @Get(':id')
    async getBicycle(@Param('id') id: string) {
        return this.bicycleService.findOne(id);
    }

    @Post()
    async addBicycle(@Body() createBicycleDto: CreateBicycleDto) {
        return this.bicycleService.create(createBicycleDto);
    }

    @Put(':id')
    async updateBicycle(@Param('id') id: string, @Body() updateBicycleDto: UpdateBicycleDto) {
        return this.bicycleService.update(id, updateBicycleDto);
    }

    @Delete(':id')
    async deleteBicycle(@Param('id') id: string) {
        return this.bicycleService.remove(id);
    }

}
