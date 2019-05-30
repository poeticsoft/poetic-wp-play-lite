// https://wordpress.org/gutenberg/handbook/designers-developers/developers/tutorials/block-tutorial/creating-dynamic-blocks/
// https://wordpress.org/gutenberg/handbook/designers-developers/developers/packages/packages-data/

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;

import '../scss/dynamic_edit.scss';
import '../scss/dynamic_block.scss';

registerBlockType (
  'poeticplaylite/dynamic', 
  {
    title: __('DYNAMIC'),
    icon: 'id-alt',
    category: 'poeticplaylite',    
    edit: withSelect(function(select) {
      return {
          posts: select('core').getEntityRecords('postType', 'post')
      };
    })(function(props) {

      if (! props.posts) {
          return 'Loading...';
      }

      if (props.posts.length === 0) {
          return 'No posts';
      }

      var className = props.className;
      return props.posts.map(post => {
 
        return <div className="Post">
          <a className={ className }
                  href={ post.link }>
            { post.title.rendered }
          </a>
        </div>
      });      
    }),
    save({ attributes }) {
      
      return (null);
    }
  }
);