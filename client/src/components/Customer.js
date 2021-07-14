import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import CustomerDelete from "./CustomerDelete";

function Customer(props) {
    return (
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell>
                <img src={props.image} alt="profile" />
            </TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
            <TableCell>
                <CustomerDelete
                    stateRefresh={props.stateRefresh}
                    id={props.id}
                />
            </TableCell>
        </TableRow>
    );
}

export default Customer;
