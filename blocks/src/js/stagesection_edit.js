// https://raquelmsmith.com/blog/how-to-create-nested-blocks-for-gutenberg/

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

import '../scss/stagesection_edit.scss';
import '../scss/stagesection_block.scss';

registerBlockType ( 
  'poeticplaylite/stagesection', 
  {
    title: __('STAGE SECTION'),
    icon: 'id-alt',
    category: 'poeticplaylite',
    attributes: {},
    edit({ 
      className
    }) {

      return (
        <div className = { className }>
          <h3>STAGE SECTION</h3>
          <InnerBlocks allowedBlocks={['poeticplaylite/stagepart']}/>
        </div>
      );
    }, 
    save({ 
      className
    }) {

      return ( 
        <div className = { className }>
          <h3>STAGE SECTION</h3>
          <InnerBlocks.Content />
        </div>
      );
    }
  }
);