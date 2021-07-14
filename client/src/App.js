import React, { Component } from "react";
import "./App.css";
import Customer from "./components/Customer";
import CustomerAdd from './components/CustomerAdd';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    withStyles,
    Paper,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import CircularStatic from "./components/MyProgress"

const styles = (theme) => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto",
    },
    table: {
        minWidth: 1080,
    }
});

class App extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            customers: '',
            completed: 0
        });
    }

    stateRefresh = () => {
        this.setState({
            customers: "",
            completed: 0
        });
        this.callApi()
            .then((res) => this.setState({ customers: res }))
            .catch((err) => console.log(err));        
    }

    componentDidMount() {
        this.callApi()
            .then((res) => this.setState({ customers: res }))
            .catch((err) => console.log(err));
    }

    callApi = async () => {
        const response = await fetch("/api/customers");
        const body = await response.json();
        return body;
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>번호</TableCell>
                                <TableCell>이미지</TableCell>
                                <TableCell>이름</TableCell>
                                <TableCell>생년월일</TableCell>
                                <TableCell>성별</TableCell>
                                <TableCell>직업</TableCell>
                                <TableCell>설정</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.customers ? (
                                this.state.customers.map((c) => {
                                    return (
                                        <Customer
                                            stateRefresh={this.stateRefresh}
                                            id={c.id}
                                            image={c.image}
                                            name={c.name}
                                            birthday={c.birthday}
                                            gender={c.gender}
                                            job={c.job}
                                            key={c.id}
                                        />
                                    );
                                })
                            ) : (
                                <TableRow>
                                    <TableCell colSpan="6" align="center">
                                        <CircularProgress>
                                            <CircularStatic />
                                        </CircularProgress>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Paper>
                <CustomerAdd stateRefresh={this.stateRefresh} />
            </div>
        );
    }
}

export default withStyles(styles)(App);
