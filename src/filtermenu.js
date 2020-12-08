import {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

class FilterMenu extends Component {
    /* defines menu of sort, filter by subject, and filter by format*/

    render() { return (
        <div className="menu">
            {/* sort dropdown */}
            <FormControl className="dropdown">
                <InputLabel>sort by: </InputLabel>
                <Select id="sorter" onChange={this.props.handleSort} value={this.props.sort}>
                    <MenuItem value="featured"><em>featured</em></MenuItem>
                    <MenuItem value="date (newest)">date (newest)</MenuItem>
                    <MenuItem value="date (oldest)">date (oldest)</MenuItem>
                </Select>
            </FormControl>

            {/* filter by subject dropdown */}
            <FormControl className="dropdown">
                <InputLabel>filter subject: </InputLabel>
                <Select id="filterer1" onChange={this.props.handleFilterSubject} value={this.props.subject}>
                    <MenuItem value="all"><em>all</em></MenuItem>
                    <MenuItem value="UI/UX">UI/UX</MenuItem>
                </Select>
            </FormControl>

            {/* filter by format dropdown */}
            <FormControl className="dropdown">
                <InputLabel>filter format: </InputLabel>
                <Select id="filterer2" onChange={this.props.handleFilterFormat} value={this.props.format}>
                    <MenuItem value="all"><em>all</em></MenuItem>
                    <MenuItem value="website">website</MenuItem>
                    <MenuItem value="interactive prototype">interactive prototype</MenuItem>
                    <MenuItem value="case study">case study</MenuItem>
                </Select>
            </FormControl>
        </div>
    )}
}

export default FilterMenu