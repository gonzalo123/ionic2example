import {Pipe} from "@angular/core";

@Pipe({
    name: 'mapToIterable'
})

export class MapToIterable {
    transform(map:{}, args:any[] = null):any {
        if (!map)
            return null;
        return Object.keys(map)
            .map((key) => ({'key': key, 'value': map[key]}));
    }
}