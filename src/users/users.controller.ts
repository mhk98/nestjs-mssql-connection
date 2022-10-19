import { Controller, Get, Res, HttpStatus, Param, Body, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { usertbl } from "./usertbl.entity";



@Controller('usertbl')
export class UsersController{

    constructor(private readonly usersService: UsersService) {
    }

    @Post()
    async createusertbl(@Res() response, @Body()Usertbl: usertbl) {
        const newusertbl = await this.usersService.createusertbl(Usertbl);
        return response.status(HttpStatus.CREATED).json({
            newusertbl
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const Usertbls = await this.usersService.findAll();
        return response.status(HttpStatus.OK).json({
           Usertbls
        })
    }

    @Get('/:User_ID')
    async findById(@Res() response, @Param('User_ID') User_ID) {
        const Usertbl = await this.usersService.findOne(User_ID);
        return response.status(HttpStatus.OK).json({
            Usertbl
        })
    }
} 