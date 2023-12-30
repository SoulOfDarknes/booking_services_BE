import { IsString, IsNumber, IsOptional, MinLength, IsEnum, IsNotEmpty } from 'class-validator';

import { BicycleColors } from '@common/enums/bicycle-colors.enum';
import { BicycleStatus } from '@common/enums/bicycle-status.enum';

export class UpdateBicycleDto {
    @IsString()
    @IsNotEmpty()
    readonly id: string;

    @IsString()
    @IsOptional()
    @MinLength(5)
    readonly name?: string;

    @IsString()
    @IsOptional()
    readonly type?: string;

    @IsString()
    @IsOptional()
    @IsEnum(BicycleColors)
    readonly color?: BicycleColors;

    @IsNumber()
    @IsOptional()
    readonly wheelSize?: number;

    @IsNumber()
    @IsOptional()
    readonly price?: number;

    @IsString()
    @IsOptional()
    @MinLength(5)
    readonly description?: string;

    @IsString()
    @IsOptional()
    @IsEnum(BicycleStatus)
    readonly status?: BicycleStatus;
}
