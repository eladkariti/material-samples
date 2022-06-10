
import { Components } from '@mui/material/styles'
import { grey } from '@mui/material/colors'


export class ComponentTheme {
    private _components!: Components

    constructor() {
        this.init()
    }

    private init() {
        this._components = {
            MuiDivider:{
                defaultProps:{
                    color: grey[200]
                }
            },
            MuiButton:{
                styleOverrides:{
                    root:{
                        fontWeight: 400
                    }
                }
            }
        }
    }

    get components() {
        return this._components
    }
}


export default new ComponentTheme()