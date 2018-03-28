import { Pipe, PipeTransform } from '@angular/core';

import * as _ from 'lodash';

@Pipe({
    name: 'humanize'
})

export class HumanizePipe implements PipeTransform {
    transform(value: String) {
        return _.startCase(value);
    }
}
