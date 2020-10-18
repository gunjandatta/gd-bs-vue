import { Components } from "gd-bs";
import { Base } from "./base";
export declare class Carousel extends Base<Components.ICarousel> {
    enableControls: boolean;
    enableCrossfade: boolean;
    enableIndicators: boolean;
    id: string;
    items: Array<Components.ICarouselItem>;
    options: Components.ICarouselOptions;
    constructor();
}
