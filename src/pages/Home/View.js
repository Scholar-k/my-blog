import React, { Component } from 'react'
import { List, Avatar } from 'antd';
import { connect } from 'react-redux'
import { getChangeListAction } from './actionCreator'
import { Link } from 'react-router'

class Home extends Component {

	render() {
		return (
      <div class="pics">
        <ul>
          <li><a href="/"><img src="images/t01.jpg"></a><span>这组图片中的静物等非常的日系</span></li>
          <li><a href="/"><img src="images/t02.jpg"></a><span>这组图片中的静物等非常的日系</span></li>
          <li><a href="/"><img src="images/t03.jpg"></a><span>这组图片中的静物等非常的日系</span></li>
        </ul>
      </div>
			<List
        style={{marginTop: '20px'}}
        bordered={true}
        itemLayout="horizontal"
        dataSource={this.props.list}
        renderItem={ item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<Link to={item.link}>{item.title}</Link>}
              description={'[' + item.category + '] ' + item.pubdate}
            />
          </List.Item>
        )}
      />
  		)
	}

  componentDidMount() {
    this.getHomeInfo()
  }

  getHomeInfo() {
    if (!this.props.list.length) {
      fetch('/api/home.json')
        .then((res) => res.json())
        .then(this.props.changeList)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.home.list
  }
}

const mapDistpatchToProps = (dispatch) => {
  return {
    changeList(res) {
      const action = getChangeListAction(res.data.list)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDistpatchToProps)(Home)