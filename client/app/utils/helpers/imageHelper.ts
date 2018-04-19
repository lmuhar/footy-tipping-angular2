import { TeamNameConstant } from '../teamNameConstants';
import * as _ from 'lodash';

export class ImageHelper {
    public static returnAssetUrl(name) {
        const value = TeamNameConstant[_.replace(_.toUpper(name), /[\. ,:-]+/g, '')];
        return `/assets/team-logos/${value}.png`;
    }

    public static returnUserImage(name) {
        return `/assets/user-logos/${name}.png`;
    }
}
