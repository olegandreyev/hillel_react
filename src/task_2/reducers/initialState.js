import { images, sliderOptions } from "../data/data";

export const initialState = {
    slider: {
        id: 'slider',
        options: { ...sliderOptions },
        images: [...images]
    }
}