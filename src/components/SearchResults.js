import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import { Link } from 'react-router';
import { School } from '../models/School'
import './SearchResults.css';

let userListID="";
let userListSize="";

  
  






class SearchResults extends Component {
    data = [];


    componentDidMount(){
        if(this.props.currentUser.id){
            let user = this.props.currentUser;
            console.log(user);
            userListID = user.schoolList.id;
            userListSize = user.schoolList.schools.length;
            // console.log(`list id ${userListID} and list size ${userListSize}`)
            this.props.getSchools(user.preferences.location, user.preferences.major)
        }
        
    }

    afterTabChanged() {
        this.refs.searchResultTable.forceUpdate();
    }

    linkFormatter(cell, row) {
        //console.log(cell)
        return '<a href="http://'+cell+'" target="_blank">'+cell+'</a>';
    }

    internalLinkFormatter(cell, row) {
        //console.log(cell)
        return '<a href=schooldetails/'+cell+' target="_blank">Details</a>';
    }

    onRowSelect = (row, isSelected, e, rowIndex) => {
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
        }//create school item to pass to add method
        //get user list ID number
        console.log(`List ID: ${userListID} School Info: ${schoolInfo.schoolName} List Size: ${userListSize}`)
        console.log(this.props);//undefined props
        this.props.addSchoolToFavoriteList(userListID, schoolInfo);
      }

      onSelectAll(isSelected, rows) {
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

    formatFloat(cell, row) {
        return parseFloat(cell);
    }

    selectRowProp = {
        mode: 'checkbox',
        // clickToSelect: true, --> use this for favorite list to pull up details. this will allow you to click row to select it.
        onSelect: this.onRowSelect,
        onSelectAll: this.onSelectAll
    };


    render() {
        
        const getDegree = {
            0: 'Non-Degree-Granting',
            1: 'Certificate',
            2: 'Associate',
            3: "Bachelor's",
            4: 'Graduate'
        }
        
        const getOwnership = {
            1: "Public",
            2: "Private N-P",
            3: "Private F-P"
        }
      
        const getLocale = {
            11:"City: 250k+",
            12:"City: 100-250k",
            13:"City: <100k",
            21:"Suburb: 250k+",
            22:"Suburb: 100-250k",
            23:"Suburb: <100k",
            31:"Town: Fringe",
            32:"Town: Distant",
            33:"Town: Remote",
            41:"Rural: Fringe",
            42:"Rural: Distant",
            43:"Rural: Remote"
        }

        if(this.props.searchResults && Array.isArray(this.props.searchResults)){
            this.data = this.props.searchResults.map(
              school => {
                let temp = parseInt(school['2015.cost.avg_net_price.public'])
                let nameLink = school['school.school_url']
      
                return { 
                  id: school.id,
                  name: school['school.name'],
                  netCost: temp,
                  inState: school["2015.cost.tuition.in_state"],
                  outState: school["2015.cost.tuition.out_of_state"],
                  location: getLocale[school["school.locale"]],
                  size: school["2015.student.size"],
                  state: school["school.state"],
                  admission: school["2015.admissions.admission_rate.overall"],
                  highestDegree: getDegree[school["school.degrees_awarded.highest"]],
                  ownership: getOwnership[school["school.ownership"]],
                  schoolUrl: nameLink
                }
              }
            )
          
      
          // return inside the if
          return (
            <div className="container searchTable">
              <BootstrapTable ref="searchResultTable" data={ this.data } selectRow={ this.selectRowProp } search exportCSV={ true } pagination striped>
                {<TableHeaderColumn row='0' rowSpan='2' dataField='id' isKey={ true } width={'50'} dataFormat={this.internalLinkFormatter}></TableHeaderColumn>}
                <TableHeaderColumn row='0' colSpan='7'>Basic School Info</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='name' dataSort width={"300"} filter={ { type: 'TextFilter', delay: 400 } }>Name</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='size' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
                dataFormat={ this.formatFloat }>Size</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='location' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Location</TableHeaderColumn>
                <TableHeaderColumn id="state" row='1' dataField='state' dataSort width={"80"} filter={ { type: 'TextFilter', delay: 400 } }>ST</TableHeaderColumn>
                {<TableHeaderColumn row='1' dataField='admission' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Admission %</TableHeaderColumn>}
                <TableHeaderColumn row='1' dataField='highestDegree' dataSort filter={ { type: 'TextFilter', delay: 400 } }>Highest Degree</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='schoolUrl' dataFormat={this.linkFormatter} dataSort filter={ { type: 'TextFilter', delay: 400 } }>School URL</TableHeaderColumn>
                <TableHeaderColumn row='0' colSpan='3'>School Cost Information</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='inState' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
                dataFormat={ this.formatFloat }>In-State</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='outState' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
                dataFormat={ this.formatFloat }>Out-of-State</TableHeaderColumn>
                <TableHeaderColumn row='1' dataField='netCost' dataSort filter={ { type: 'NumberFilter', delay: 400, numberComparators: [ '=', '>', '<' ] } }
                dataFormat={ this.formatFloat }>Avg Net</TableHeaderColumn>
              </BootstrapTable>
              <script src="https://npmcdn.com/react-bootstrap-table/dist/react-bootstrap-table.min.js" />
            </div>
      
          );
        }
      
        //return outside the if for when we are waiting for the data
        return (<div>loading...</div>)
        
    }
}

export default SearchResults;
