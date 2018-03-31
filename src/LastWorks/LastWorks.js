import React from 'react';
import { observer } from 'mobx-react';
import './LastWorks.css';

@observer
class LastWorks extends React.Component {
  
  componentWillMount() {
    this.props.store.fetchData();
}

  render() {
	  const {images} = this.props.store;
	  const data = images.filter(image => image.tags.indexOf("nails") !== -1).slice(0,6);
	  
    return (
	<div className="last_works">
	<h3>МОИ ПОСЛЕДНИЕ РАБОТЫ</h3>
      <ol>
          {data.map(item => 
				<li key={item.caption.id}>
					<i>	{new Date(parseInt(item.created_time,10)*1000).getDate()}
							.{new Date(parseInt(item.created_time,10)*1000).getMonth()}
							.{new Date(parseInt(item.created_time,10)*1000).getFullYear()}
					</i><br/>
				  <a href={item.link} target='_blank'><img src={item.images.thumbnail.url} alt='nails'/></a>
				  <p>
					  <span className='float-left'>❤ {item.likes.count}</span>
					  <span className='float-left'>{item.caption.text.indexOf('\n')!==-1? item.caption.text.slice(item.caption.text.indexOf('\n')+1) :''}</span>
					  <span className='float-right'>✉ {item.comments.count}</span>
				  </p>
				</li>
				)
		  }
      </ol>
	  <button>Показать все работы</button>
	  </div>
    );
  }
}

export default LastWorks;