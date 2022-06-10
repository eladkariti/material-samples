
import Typography from '@mui/material/Typography';
import {Variant} from '@mui/material/styles/createTypography'



export interface TextProps {
    className?: string
    children?: React.ReactNode;
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}


const CustomText = (props: TextProps & {variant: Variant} ) => (<Typography
    variant={props.variant}
    align={props.align}
    children={props.children}
    display='inline'
    className={props.className}
/>)


export const Title = (props: TextProps) => {
    return (
        <CustomText {...props}  variant='h1'/>
    )
}

export const Subtitle = (props: TextProps) => {
    return (
        <CustomText {...props} variant='h2'/>
    )
}

export const DisclaimerText = (props: TextProps) => {
    return (
        <CustomText {...props} variant='h6'/>
    )
}