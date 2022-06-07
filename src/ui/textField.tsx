import TextField from '@mui/material/TextField';
// OverridableStringUnion

export interface TextFieldProps {
    onChange?: (e: any) => void,
    id?: string,
    hint?: string,
    disabled?: boolean,
    focused?: boolean,
    multiline?: boolean,
    fullWidth?: boolean,
    textHelper?: string,
    classes?: object
    variant?: 'filled' | 'outlined' | 'standard'
}

const defaultValues: Partial<TextFieldProps> = {
    disabled: false,
    focused: false,
    multiline: false,
    fullWidth: false,
    variant: 'standard'
}

const CustomTextField = (props: TextFieldProps) => {
    const styleWithDefault = { ...defaultValues, ...props }
    return (<TextField
        variant={styleWithDefault.variant}
        id={styleWithDefault.id}
        placeholder={styleWithDefault.hint}
        helperText={styleWithDefault.textHelper}
        fullWidth={styleWithDefault.fullWidth}
        multiline={styleWithDefault.multiline}
        disabled={styleWithDefault.disabled}
        autoFocus={styleWithDefault.focused}
        onChange={styleWithDefault.onChange}
        classes={styleWithDefault.classes}
    />)
}
export default CustomTextField