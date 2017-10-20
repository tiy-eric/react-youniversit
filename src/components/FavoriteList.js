import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import { Link } from 'react-router';
import { School } from '../models/School'
import "./FavoriteList.css"

let userListID="";

function onRowSelect(row, isSelected, e, rowIndex) {
    let rowStr = '';
    let schoolInfo = new School();
    
    for (const prop in row) {
      rowStr += prop + ': "' + row[prop] + '"';
      switch(prop){
        
                case 'id': {schoolInfo.schoolApiId = row[prop] } break;
                case 'name':{schoolInfo.schoolName = row[prop]} break;
                case 'netCost':{schoolInfo.avgNet = row[prop]} break;
                case 'inState':{schoolInfo.inState = row[prop]} break;
                case 'outState':{schoolInfo.outState = row[prop]} break;
                case 'location':{schoolInfo.schoolLocation = row[prop]} break;
                case 'size':{schoolInfo.size = row[prop]} break;
                case 'state':{schoolInfo.state = row[prop]} break;
                case 'admission':{schoolInfo.admission = row[prop]} break;
                case 'ownership':{schoolInfo.ownership = row[prop]} break;
                case 'highestDegree':{schoolInfo.highestDegree = row[prop]} break;
                case 'schoolUrl':{schoolInfo.schoolUrl = row[prop]} break;
                case 'comment':{schoolInfo.comment = row[prop]} break;
                case 'rank':{schoolInfo.rank = row[prop]} break;
            }
    }
    
  }
  
  
function onSelectAll(isSelected, rows) {
    alert(`is select all: ${isSelected}`);
    if (isSelected) {
        alert('Current display and selected data: ');
    } else {
        alert('unselect rows: ');
    }
    for (let i = 0; i < rows.length; i++) {
        alert(rows[i].id);
    }
}

const selectRowProp = {
    mode: 'checkbox',
    onSelect: onRowSelect,
    onSelectAll: onSelectAll
};

function formatFloat(cell, row) {
    return parseFloat(cell);
}




class FavoriteList extends Component {
    data = [];

    componentDidMount(){
        if(this.props.currentUser.id){
            let user = this.props.currentUser;
            userListID = user.schoolList.id;
        }
        
    }

    deleteFavoriteSchool = (event) => {
        // event.preventDefault ();
        let schoolToDelete = event.target.id
        console.log(schoolToDelete)
        console.log(userListID)

        this.props.deleteSchoolFromFavoriteList(userListID, schoolToDelete);

    }
    
    

    linkFormatter(cell, row) {
        return '<a href="http://'+cell+'" target="_blank">'+cell+'</a>';
    }

    internalLinkFormatter(cell, row) {
        return '<a href=schooldetails/'+cell+' target="_blank">Details</a>';
    }

    


    buttonFormatter = (cell, row) => {
        return <Button id={cell} bsStyle="danger" bsSize="xsmall" onClick={this.deleteFavoriteSchool} >Delete</Button>;
    }

    render() {
     

        if(this.props.currentUser.schoolList.schools){
            console.log("Here is the current school list")
            console.log(this.props.currentUser.schoolList.schools)
            this.data = this.props.currentUser.schoolList.schools.map(
              school => {
                let temp = parseInt(school.avgNet)
                let nameLink = school.schoolUrl
      
                return { 
                  id: school.schoolApiId,
                  favSchoolId: school.id,
                  name: school.schoolName,
                  netCost: temp,
                  inState: school.inState,
                  outState: school.outState,
                  location: school.schoolLocation,
                  size: school.size,
                  state: school.state,
                  admission: school.admission,
                  highestDegree: school.highestDegree,
                  ownership: school.ownership,
                  schoolUrl: nameLink
                }
              }
            )
          
      
          // return inside the if
          return (
            
            <div className="container favoriteTable">
              <BootstrapTable data={ this.data } search exportCSV={ true } pagination striped>
                {<TableHeaderColumn row='0' rowSpan='2' dataField='favSchoolId' width={'65'} dataFormat={this.buttonFormatter}></TableHeaderColumn>}
                {<TableHeaderColumn row='0' rowSpan='2' dataField='id' isKey={ true } width={'50'} dataFormat={this.internalLinkFormatter}></TableHeaderColumn>}
                <TableHeaderColumn row='0' colSpan='7'>Basic School Info</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='name' dataSort width={"300"} filter={ { type: 'TextFilter', delay: 400 } }>Name</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='size' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
                dataFormat={ formatFloat }>Size</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='location' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Location</TableHeaderColumn>
                <TableHeaderColumn id="state" row='1' dataField='state' dataSort width={"80"} filter={ { type: 'TextFilter', delay: 400 } }>ST</TableHeaderColumn>
                {<TableHeaderColumn row='1' dataField='admission' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Admission %</TableHeaderColumn>}
                <TableHeaderColumn row='1' dataField='highestDegree' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Highest Degree</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='schoolUrl' dataFormat={this.linkFormatter} dataSort filter={ { type: 'TextFilter', delay: 400 } }>School URL</TableHeaderColumn>
                <TableHeaderColumn row='0' colSpan='3'>School Cost Information</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='inState' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
                dataFormat={ formatFloat }>In-State</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='outState' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
                dataFormat={ formatFloat }>Out-of-State</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='netCost' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
                dataFormat={ formatFloat }>Avg Net</TableHeaderColumn>
              </BootstrapTable>
              <script src="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.min.js" />
            </div>
      
          );
        }
      
        //return outside the if for when we have no favorites list
        return (
        <div>
            <h1>There are currently no schools in your favorites list</h1>
        </div>
        )
        
    }
}

export default FavoriteList;
