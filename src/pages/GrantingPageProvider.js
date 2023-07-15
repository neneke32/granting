import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { actions } from './AppProvider';

import { GrantingPage } from 'pages/GrantingPage'

/**
 * Komponenta, ktera je zaclenena ve strukture s Providerem, tedy se store, importuje si akce a poskytuje je podrizenym komponentam
 * @param {*} param0 
 * @returns 
 */
export const GrantingPageProvider = ({id}) => {

    const programs = useSelector(state => state.programs)
    const selectedId = useSelector(state => state.programs.selectedId)
    const program = programs[id]

    useEffect(
        () => {
            actions.programFetch(id)           
        }, [id, selectedId]
    )

    if (program) {
        return (
            <GrantingPage program={program} actions={actions}/>
        )
    } else {
        return (
            <div>Loading... {id}, {program}</div>
        )
    }
}