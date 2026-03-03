import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ApiConfig } from "./api.config";

@NgModule({
    imports: [HttpClientModule],
    providers: [ApiConfig]
})
export class ConfigModule {}