import React, { MouseEvent } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import { Algorithm } from '../models/Algorithm'

interface AlgorithmSelectProps {
    algorithms: Algorithm[];
    selectedAlgorithm: Algorithm;
    onSelect: (algorithm: Algorithm) => void;
}

export function AlgorithmSelect(props: AlgorithmSelectProps) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    const handleOpenMenu = (event: MouseEvent<HTMLElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = (): void => {
        setAnchorEl(null);
    };

    const handleSelectValue = (algorithm: Algorithm): void => {
        props.onSelect(algorithm);
        handleCloseMenu();
    };

    return (
        <>
            <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpenMenu}>
                Select algorithm
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
            >
                {props.algorithms.map(algorithm => (
                    <MenuItem onClick={() => handleSelectValue(algorithm)} key={algorithm.id}>
                        {algorithm.id === props.selectedAlgorithm.id && <Check />} {algorithm.name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
}
