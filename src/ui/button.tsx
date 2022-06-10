import MuiButton from '@mui/material/Button';



export interface ButtonProps {
    className?: string
    children?: React.ReactNode;
    disabled?: boolean,
    fullWidth?: boolean,
    size?: 'small' | 'medium' | 'large'
    variant?: 'contained' | 'outlined' | 'text'
}


const CustomButton = (props: ButtonProps) => (<MuiButton
    fullWidth={props.fullWidth}
    disabled={props.disabled}
    variant={props.variant}
    size={props.size}
    children={props.children}
    className={props.className}
/>)

export const Button = (props: ButtonProps) => {
    return <CustomButton
        {...props}
        size='medium'
        variant='text'
    />
}

export const FilledButton = (props: ButtonProps) => {
    return <CustomButton
        {...props}
        size='medium'
        variant='contained'
    />
}

export const OutlineButton = (props: ButtonProps) => {
    return <CustomButton
        {...props}
        size='medium'
        variant='outlined'
    />
}