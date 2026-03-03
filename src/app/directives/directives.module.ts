import { NgModule } from "@angular/core";
import { FeaturesDirective } from "./features.directive";

const DIRECTIVES = [FeaturesDirective];

@NgModule({
    declarations: [...DIRECTIVES],
    exports: [...DIRECTIVES]
})
export class DirectivesModule {}