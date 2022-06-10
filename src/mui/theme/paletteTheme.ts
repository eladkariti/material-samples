
import { PaletteOptions } from '@mui/material/styles'
import { red, common, grey, orange  } from '@mui/material/colors'


export class PaletteTheme {
    private _palette!: PaletteOptions

    constructor() {
        this.init()
    }

    private init() {
        this._palette = {
            primary: {
                main: orange[500],
            },
            secondary: {
                main: common.white,
            },
            action: {
                focus: "#aaaa11",
                active: "#e3e3",
                hover: red[800],
            },
            text:{
                primary: common.black,
                secondary: grey[600],
                disabled:"#1112aa",
            }
            
        }
    }

    get palette() {
        return this._palette
    }
}


export default new PaletteTheme()