import { createTheme } from "@mui/material/styles";
import paletteTheme from "./paletteTheme";
import {Theme} from '@mui/material/styles'
import componentTheme from "./componentTheme";
import typographyTheme from "./typographyTheme";

//PaletteOptions
export class BaseTheme {
    private _theme!: Theme
    
    constructor(
        private palette = paletteTheme,
         private components = componentTheme,
         private typography = typographyTheme ) {
        this.init()
    }

    private init() {
        let theme = createTheme({
            palette: this.palette.palette,
            components: this.components.components,
            typography: this.typography.typography
        })

        this._theme = theme
    }

    get theme() {
        return this._theme;
    }
}

export default new BaseTheme()