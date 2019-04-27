export class Occasion {
    id: number;
    name: string;
    blueprint: Blueprint;
}

export class Blueprint {
    elements: BlueprintElement[];
}

export abstract class BlueprintElement {
}

export class Spot extends BlueprintElement {
    number: number;
    assignedExhibitorId: number;
    assignedExhibitor: Exhibitor;
}

export class Exhibitor {
    id: number;
    name: string;
}