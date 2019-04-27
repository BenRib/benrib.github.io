export class Occasion {
    id: number;
    name: string;
    description: string;
    start: Date;
    finish: Date;
    imageSource: string;
    numberOfSpots: number;
    blueprint: Blueprint;
}

export class Blueprint {
    height: number;
    width: number;
    elements: BlueprintElement[];
}

export abstract class BlueprintElement {
    xFrom: number;
    xTo: number;
    yFrom: number;
    yTo: number;
}

export class Spot extends BlueprintElement {
    number: number;
}

export class Setting extends BlueprintElement {
    name: string;
}

export class Exhibitor {
    id: number;
    name: string;
    isActive: boolean;
}

export class Role {
    id: number;
    name: string;
    description: string;
    permissions: string[];
}

export class User {
    id: number;
    firstName: string;
    lastName: string;
    role: Role;
    email: string;
    login: string;
    isActive: boolean;
}