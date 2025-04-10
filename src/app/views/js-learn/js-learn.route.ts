import { Route } from '@angular/router';
import { ArrayMethodComponent } from './array-method/array-method.component';
import { JsLoopMethodComponent } from './js-loop-method/js-loop-method.component';
import { TimeLearnComponent } from './time-learn/time-learn.component';

export const JSLearn_ROUTES:Route[] = [
    { path:'jslearn', component: ArrayMethodComponent, data: { title: 'js learn' }, },
    { path:'jsloop', component: JsLoopMethodComponent, data: { title: 'js loop' }, },
    { path:'timelearn', component: TimeLearnComponent, data: { title: 'time learn' }, },
];