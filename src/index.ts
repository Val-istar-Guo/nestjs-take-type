import { Type } from '@nestjs/common'
import { IntersectionType, PartialType, PickType } from '@nestjs/swagger'


export function TakeType<T, RequiredKeys extends(keyof T)[], OptionalKeys extends (keyof T)[]>(classRef: Type<T>, requiredKeys: RequiredKeys, optionalKeys: OptionalKeys): Type<Partial<Pick<T, OptionalKeys[number]>> & Pick<T, RequiredKeys[number]>> {
  return IntersectionType(
    PartialType(PickType(classRef, optionalKeys)),
    PickType(classRef, requiredKeys),
  )
}

