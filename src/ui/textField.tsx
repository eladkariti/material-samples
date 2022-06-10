import MuiTextField from '@mui/material/TextField';

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
    label?: string
    variant?: 'filled' | 'outlined' | 'standard',
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
    type?: 'password' | 'text'
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
    return (<MuiTextField
        label={styleWithDefault.label}
        variant={styleWithDefault.variant}
        id={styleWithDefault.id}
        placeholder={styleWithDefault.hint}
        helperText={styleWithDefault.textHelper}
        fullWidth={styleWithDefault.fullWidth}
        multiline={styleWithDefault.multiline}
        disabled={styleWithDefault.disabled}
        autoFocus={styleWithDefault.focused}
        onChange={styleWithDefault.onChange}
        InputLabelProps={{
            inputMode: props.inputMode,
        }}
        inputProps={{
            type: props.type
        }}

    />)
}
export const TextField = (props: TextFieldProps) => {
    return (<CustomTextField
        {...props}
        variant='standard'
    />)
}

export const OutlineTextField = (props: TextFieldProps) => {
    return (<CustomTextField
        {...props}
        variant='outlined'
    />)
}


export const FilledTextField = (props: TextFieldProps) => {
    return (<CustomTextField
        {...props}
        variant='filled'
    />)
}