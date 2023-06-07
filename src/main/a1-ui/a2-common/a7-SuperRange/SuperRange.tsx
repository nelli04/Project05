import React from 'react'
import {Slider, SliderProps, SliderThumb} from '@mui/material'
import {styled} from '@mui/material/styles';

const SuperRange: React.FC<SliderProps> = (props) => {

    const AirbnbSlider = styled(Slider)(({theme}) => ({
        color: '#00CC22',
        height: 3,
        padding: '13px 0',
        '& .MuiSlider-thumb': {
            height: 27,
            width: 27,
            backgroundColor: '#fff',
            border: '1px solid currentColor',
            '&:hover': {
                boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
            },
            '& .airbnb-bar': {
                height: 9,
                width: 9,
                backgroundColor: 'currentColor',
                marginLeft: 1,
                marginRight: 1,
                borderRadius: '50%'
            },
        },
        '& .MuiSlider-track': {
            height: 3,
        },
        '& .MuiSlider-rail': {
            color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
            opacity: theme.palette.mode === 'dark' ? undefined : 1,
            height: 3,
        },
    }));

    interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}

    function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
        const {children, ...other} = props;
        return (
            <SliderThumb {...other}>
                {children}
                <span className="airbnb-bar"/>
            </SliderThumb>
        );
    }

    return (
        <AirbnbSlider
            slots={{thumb: AirbnbThumbComponent}}
            getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
            defaultValue={[20, 40]}
            {...props}
        />
    )
}

export default SuperRange
