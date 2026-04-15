interface PropertyImage {
    url: string;
    publicId: string;
    order: number;
    width: number;
    height: number;
    format: string;
}
export declare function savePropertyImages(propertyId: string, images: PropertyImage[]): Promise<any>;
export {};
