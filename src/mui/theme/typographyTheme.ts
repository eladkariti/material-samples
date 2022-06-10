
import { TypographyOptions } from '@mui/material/styles/createTypography'


export class TypographyTheme {
    private _typography!: TypographyOptions

    constructor() {
        this.init()
    }

    private init() {
        this._typography = {
            'h1':{
                fontSize: 40,
            },
            'h2':{
                fontSize: 30,
            },
            'h6':{
                fontSize: 12,
                fontWeight: 100,
            }
        }
    }

    get typography() {
        return this._typography
    }
}


export default new TypographyTheme()