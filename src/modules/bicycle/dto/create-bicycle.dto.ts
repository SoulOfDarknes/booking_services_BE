import { IsString, IsNumber, MinLength, IsEnum, IsNotEmpty } from 'class-validator';

import { BicycleColors } from '@common/enums/bicycle-colors.enum';

export class CreateBicycleDto {
    @IsString()
    @IsNotEmpty()
    readonly id: string;

    @IsString()
    @MinLength(5)
    readonly name: string;

    @IsString()
    @MinLength(5)
    readonly type: string;

    @IsEnum(BicycleColors)
    readonly color: BicycleColors;

    @IsNumber()
    readonly wheelSize: number;

    @IsNumber()
    readonly price: number;

    @IsString()
    @MinLength(5)
    readonly description: string;
}
