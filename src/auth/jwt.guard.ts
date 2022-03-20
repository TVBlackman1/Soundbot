import {AuthGuard} from '@nestjs/passport';
import {ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import {Reflector} from '@nestjs/core';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt-user') {}
