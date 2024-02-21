

import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap';

import ProjectTables from "../components/dashboard/ProjectTable";

const Users = () => {
  return (
    <div>
        {/* --------------------------------------------------------------------------------*/}
        <Card>
            <CardTitle tag="h4" className="border-bottom p-3 mb-0">
                <i className="bi bi-people"> </i> Users
            </CardTitle>
            <CardBody className="">
            <div className="mt-3">
                <ProjectTables/>
            </div>
            </CardBody>
        </Card>
        {/* --------------------------------------------------------------------------------*/}
    </div>
  )
}


export default Users

