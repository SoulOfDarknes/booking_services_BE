import { IsString, IsNumber, MinLength, IsEnum } from 'class-validator';

import { BicycleColors } from '@common/enums/bicycle-colors.enum';

export class CreateBicycleDto {
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
