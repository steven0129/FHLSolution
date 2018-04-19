import STR from './str/ns'
import './net/ns'
import { NET } from './net/ns'
import './FhlUrlParameter'
import FhlUrlParameter from './FhlUrlParameter';
import './constant/ns'
import CONSTANT from './constant/ns';
import Enumerable from '../../node_modules/linq/linq';

// namespace in fhl directory
let FHL = {
    CONSTANT,
    NET,
    STR,
    FhlUrlParameter,
};

console.log(Enumerable.from(CONSTANT).orderBy(a1=>a1.value).toArray());

export default FHL;