// https://www.ibenic.com/enable-inner-blocks-gutenberg

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import '../scss/stagepart_edit.scss';
import '../scss/stagepart_block.scss';

registerBlockType (
  'poeticplaylite/stagepart', 
  {
    title: __('STAGE PART'),
    icon: 'id-alt',
    category: 'poeticplaylite',
    parent: [ 'poeticplaylite/stagesection' ],
    attributes: {}, 
    edit({ 
      className
    }) {

      return (
        <div className={ className }> 
          STAGEPART EDIT
        </div>
      );
    },
    save({ 
      className 
    }) {

      return ( 
        <div className={ className }>
          STAGEPART SAVE
        </div>
      );
    }
  }
);