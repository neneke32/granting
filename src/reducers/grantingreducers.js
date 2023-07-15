import { createSlice } from '@reduxjs/toolkit'

import { CreateItem, DeleteItem, ReplaceItem, UpdateItem, SelectItem } from './keyedreducers';

/**
 * Kompletni rez budocim store.
 * Obsluhuje skupiny
 */



export const ProgramSlice = createSlice({
    name: 'programs',
    initialState: {},
    reducers: {
        program_add: CreateItem,
        program_delete: DeleteItem,
        program_replace: ReplaceItem,
        program_update: UpdateItem,
        program_select: SelectItem,
        subject_delete: DeleteItem,
        subject_add: CreateItem,
        subject_delete: DeleteItem,
        subject_replace: ReplaceItem,
        subject_update: UpdateItem,
        subject_select: SelectItem,
        subject_remove: (state, action) => {
            // Create a copy of the state
            const newState = { ...state };
          
            // Go through all programs in the newState
            Object.values(newState).forEach(program => {
              // Check if the program has a 'subjects' array
              if (program.subjects) {
                // Filter out the subject to be deleted
                program.subjects = program.subjects.filter(subject => subject.id !== action.payload);
              }
            });
          
            // Return the modified newState
            return newState;
          }

        
       
    }
})

//z rezu odvozene akce
export const ProgramActions = {...ProgramSlice.actions}
//z rezu odvozeny stavovy automat
export const ProgramReducer = ProgramSlice.reducer