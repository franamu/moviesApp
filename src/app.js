import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import API from '../utils/api';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list';
import Movie from './screens/containers/movie';
import Search from './sections/containers/search';

class AppLayout extends Component {
	//este componente se ejecta despues q se haya montado tdoo el DOM
    async componentDidMount() {
        const suggestionList = await API.getSuggestion(10);
        const categoryList = await API.getMovies();
        /*this.setState({
            suggestionList: movies,
            categoryList: categories
        })*/
        this.props.dispatch({
            type: 'SET_SEGGESTION_LIST',
            payload: {
                suggestionList
            }
        })

        this.props.dispatch({
            type: 'SET_CATEGORY_LIST',
            payload: {
                categoryList
            }
        })
    }
	render(){
		if(this.props.selectedMovie) {
			return <Movie />
		}

		return (
			<Home>
                <Header />
                <Search />
                <CategoryList />
                <SuggestionList />
            </Home>
		)
	}
}

function mapStateToProps(state) {
	return {
		selectedMovie: state.selectedMovie,
	}
}

export default connect(mapStateToProps)(AppLayout);