import Divider from '@mui/material/Divider'

type Orientation = 'horizontal' | 'vertical'

const CustomDivider = ({ orientation }: { orientation: Orientation }) => {
    return (<Divider orientation={orientation} />)
}


export const TransparentVerticalDivider = (props: {width: number}) => {
    return (
        <div style={{ width: props.width, height: 1 }} />
    )
}



export const VerticalDivider = () => {
    return (
        <CustomDivider orientation={'vertical'} />
    )
}

export const HorizontalDivider = () => {
    return (
        <CustomDivider orientation='horizontal' />
    )
}