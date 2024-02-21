import { Card, CardBody, Form, FormGroup, Input, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import { useState } from "react";

const tableData = [
  {
    id:'sdfsdfsdf',
    avatar: user1,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    status:false,
    verified:false
  },
  {
    id:'sdfsddsfsdfsdfsdffsdf',
    avatar: user2,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    status:true,
    verified:true
  },
  {
    id:'sdfsdf343sdfsdfsdsdf',
    avatar: user3,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Elite React",
    status:true,
    verified:false
  },
  {
    id:'sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf',
    avatar: user4,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status:true,
    verified:true
  },
  {
    id:'sdfsdfsdfsdfsdfsdfsdddddddddddddddddddddfsdf',
    avatar: user5,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Ample React",
    status:false,
    verified:false
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Id</th>
                <th>User</th>
                <th>Status</th>
                <th>Verified</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => <TableRow key={index} item={item}/>)}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

const TableRow = ({item})=>{
  const [isOpen,setIsOpen] = useState(item?.status);
  return <tr className="border-top">
    <td style={{maxWidth:'150px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{item?.id}</td>
      <td>
        <div className="d-flex align-items-center p-2">
          <img
            src={item?.avatar}
            className="rounded-circle"
            alt="avatar"
            width="45"
            height="45"
          />
          <div className="ms-3">
            <h6 className="mb-0">{item?.name}</h6>
            <span className="text-muted">{item?.email}</span>
          </div>
        </div>
      </td>
      <td>
        <Form>
          <FormGroup switch={true}>
            <abbr title={isOpen?"Deactive":'Active'}>
              <Input type="switch" role="switch" checked={isOpen} onChange={()=>setIsOpen(prev=>!prev)}/>
            </abbr>
          </FormGroup>
        </Form>
      </td>
      <td>
        <abbr title={item?.verified==1?"Verified":'Not Verified yet'}>
          {
            item?.verified ?<span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>:<span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
          }
        </abbr>
      </td>
    </tr>
}

export default ProjectTables;
