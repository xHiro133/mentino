import { Component } from "@angular/core";
import { ControlType, MyForm } from "../../models/form.model";
import { Themes } from "../../models/themes.model";
import { ThemesService } from "../../services/themes.service";
import { LanguageCode } from "../../models/language.model";
import { TranslateService } from "../../services/translate.service";
import { of, switchMap } from "rxjs";

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {

    languageForm: MyForm = {
        controls: [
            {
                selector: 'language',
                type: ControlType.RADIO,
                required: true,
                options: [
                    { value: LanguageCode.ENGLISH, label: 'language.languages.english' },
                    { value: LanguageCode.ITALIAN, label: 'language.languages.italian' }
                ],
                defaultValue: localStorage.getItem('language') || Themes.LIGHT
            }
        ]
    };
    themeForm: MyForm = {
        controls: [
            {
                selector: 'theme',
                type: ControlType.RADIO,
                required: true,
                options: [
                    { value: Themes.LIGHT, label: 'theme.themes.light' },
                    { value: Themes.DARK, label: 'theme.themes.dark' },
                    { value: Themes.CUSTOM, label: 'theme.themes.custom' }
                ],
                defaultValue: localStorage.getItem('theme') || Themes.LIGHT
            }
        ]
    };

    constructor(private _translateService: TranslateService, private _themesService: ThemesService) {}

    changeLanguage() {
        const language = this.languageForm.value?.['language'];

        this._translateService.getCurrentLanguage()
            .pipe(
                switchMap((currentLanguage) => {
                    if (currentLanguage.code !== language) {
                        return this._translateService.setLanguage(language);
                    }

                    return of(null);
                })
            )
            .subscribe((data) => {
                if (data) {
                    location.reload();
                }
            });
    }

    changeTheme() {
        const theme = this.themeForm.value?.['theme'];
        this._themesService.changeTheme(theme).subscribe();
    }

}