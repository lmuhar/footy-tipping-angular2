import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SortPipe } from "./utils/pipes/sort.pipe";
import { HumanizePipe } from "./utils/pipes/humanize.pipe";
import { ReverseSortPipe } from "./utils/pipes/reverse-sort.pipe";

@NgModule({
  declarations: [SortPipe, HumanizePipe, ReverseSortPipe],
  exports: [SortPipe, HumanizePipe, ReverseSortPipe],
  imports: [CommonModule],
  providers: []
})
export class CommonPipesModule {}
