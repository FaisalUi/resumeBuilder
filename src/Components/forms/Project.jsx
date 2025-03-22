import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProject, removeProject, updateProject } from '../../app/Reducers/projectSlice';

const Project = () => {
    const dispatch = useDispatch();
    const { projects, error } = useSelector((state) => state.projectList);
    const handleAddProject = () => {
        dispatch(addProject())
    }

    const handleRemoveProject = (index) => {
        dispatch(removeProject(index))
    };

    const handleProjectChange = (index, value) => {
        dispatch(updateProject({ index, value }))
    };
    return (
        <>
            <div className='mb-4'>
            <div className="project">
                <h5 className=''>Projects</h5> 
            </div>
            {projects.map((project, index) => (
                <div className="row" key={index}>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="text"
                                name={`project-${index}`}
                                className='form-control rounded-0'
                                placeholder='Add Project'
                                value={project || ''}
                                onChange={(e) => handleProjectChange(index, e.target.value)}
                            />
                        </div>
                    </div>
                    {index > 0 &&
                        <div className="col-3">
                            <div className="form-group">
                                <button className='btn btn-outline-danger d-flex' onClick={() => handleRemoveProject(index)}>
                                    <span className="material-symbols-outlined fs-5">
                                        close
                                    </span>
                                </button>
                            </div>
                        </div>
                    }
                </div>
            ))}
            {error && <div className="text-danger">{error}</div>}
            <button className='btn primary-outline-btn py-2' onClick={handleAddProject}>Add More</button>
            </div>
        </>
    )
}

export default Project