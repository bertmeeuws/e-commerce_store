import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { HttpJwtGuard, GqlJwtGuard } from './jwt.guard';
import { GqlRolesGuard, HttpRolesGuard } from './roles.guard';

export function HttpJwtRoleRequired(...roles: string[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(HttpJwtGuard, HttpRolesGuard),
  );
}

//Functie wordt opgeroepen juist onder onze resolver
export function GraphQLJwtRoleRequired(...roles: string[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(GqlJwtGuard, GqlRolesGuard),
  );
}
