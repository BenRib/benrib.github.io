export class DrawingContainer {
    width: number;
    height: number;
    isEditable: boolean;
    elements: DrawingElement[];
}

export class DrawingElement {
    width: number;
    height: number;
    positionX: number;
    positionY: number;
    content: string;
    isEditable: boolean;
    isSelectable: boolean;
}