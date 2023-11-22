import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  SetMetadata,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductTransitionService } from './productTransition.service';
import { mapProductTransitionInterfaceToDto } from './serializers/productTransition.serializer';
import { CreateProductTransitionDto } from './dto/productTransition.dto';
import { getEmptySuccessMessage } from '../../common/helpers/emptySuccessMessage';
import { JwtAuthGuard } from '../../authentication/guards/jwt-auth.guard';
import { RoleGuard } from '../../common/guards/role.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('transition')
@UsePipes(new ValidationPipe())
@Controller('/transition')
export class ProductTransitionController {
  constructor(private productTransitionService: ProductTransitionService) {}
  @Get()
  async findAll() {
    const transitions = await this.productTransitionService.findAll();
    return transitions.map(mapProductTransitionInterfaceToDto);
  }

  @Get('/:sourceId/:targetId')
  async findOne(
    @Param('sourceId', new ParseIntPipe()) sourceId: number,
    @Param('targetId', new ParseIntPipe()) targetId: number,
  ) {
    const transition = await this.productTransitionService.findOne({
      sourceProduct: {
        id: sourceId,
      },
      targetProduct: {
        id: targetId,
      },
    });
    return mapProductTransitionInterfaceToDto(transition);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @SetMetadata('role', 'admin')
  @Post()
  async addOne(@Body() createProductTransitionDto: CreateProductTransitionDto) {
    const transition = await this.productTransitionService.addOne(
      createProductTransitionDto,
    );

    return mapProductTransitionInterfaceToDto(transition);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @SetMetadata('role', 'admin')
  @Put('/:sourceId/:targetId')
  async updateOne(
    @Param('sourceId', new ParseIntPipe()) sourceId: number,
    @Param('targetId', new ParseIntPipe()) targetId: number,
    @Body() edited: Partial<CreateProductTransitionDto>,
  ) {
    const transition = await this.productTransitionService.editOne(
      {
        sourceProduct: {
          id: sourceId,
        },
        targetProduct: {
          id: targetId,
        },
      },
      edited,
    );

    return mapProductTransitionInterfaceToDto(transition);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RoleGuard)
  @SetMetadata('role', 'admin')
  @Delete('/:sourceId/:targetId')
  async deleteOne(
    @Param('sourceId', new ParseIntPipe()) sourceId: number,
    @Param('targetId', new ParseIntPipe()) targetId: number,
  ) {
    await this.productTransitionService.deleteOne({
      sourceProduct: {
        id: sourceId,
      },
      targetProduct: {
        id: targetId,
      },
    });

    return getEmptySuccessMessage();
  }
}
