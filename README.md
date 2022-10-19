# @miaooo/nestjs-take-type

[![version](https://img.shields.io/npm/v/@miaooo/nestjs-take-type.svg?style=flat-square)](https://www.npmjs.com/package/@miaooo/nestjs-take-type)
[![downloads](https://img.shields.io/npm/dm/@miaooo/nestjs-take-type.svg?style=flat-square)](https://www.npmjs.com/package/@miaooo/nestjs-take-type)
[![license](https://img.shields.io/npm/l/@miaooo/nestjs-take-type.svg?style=flat-square)](https://www.npmjs.com/package/@miaooo/nestjs-take-type)
[![dependencies](https://img.shields.io/librariesio/github/Val-istar-Guo/nestjs-take-type.svg?style=flat-square)](https://www.npmjs.com/package/@miaooo/nestjs-take-type)
[![coveralls](https://img.shields.io/coveralls/github/Val-istar-Guo/nestjs-take-type.svg?style=flat-square)](https://coveralls.io/github/Val-istar-Guo/nestjs-take-type)



<!-- description -->
NestJS helper function that combined PartialType and PickType,
reduce duplicate definitions of parameters in dto.<!-- description -->

## Usage

<!-- usage -->
```typescript
// my-entity.entity.ts
import { Entity, Column, PriamryGeneratedColumn } from 'typeorm'
import { IsString, IsNumber } from 'class-transformer'

@Entity()
export class MyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  type: string;

  @IsNumber()
  @Column()
  age: number;
}
```

```typescript
// my-entity.filter.dto.ts
import { TakeType } from '@miaooo/nestjs-take-type'
import { IsString, IsNumber } from 'class-transformer'

export class MyEntityFilerDTO extends TakeType(
  MyEntity,
  // required params
  ['type'],
  // optional params
  ['age'],
)  {}

// this is equal to
export class MyEntityFilerDTO {
  @IsString()
  type!: string;

  @IsOptional()
  @IsNumber()
  age?: number;
}
```
<!-- usage -->

<!-- addition --><!-- addition -->


## Contributing & Development

If there is any doubt, it is very welcome to discuss the issue together.
Please read [Contributor Covenant Code of Conduct](.github/CODE_OF_CONDUCT.md) and [CONTRIBUTING](.github/CONTRIBUTING.md).
