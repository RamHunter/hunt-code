import { Route } from "@angular/router";

export const VIEW_ROUTES:Route[] = [
 { path:'js', loadChildren: ()=> import('../views/js-learn/js-learn.route').then((mod) => mod.JSLearn_ROUTES)}
];