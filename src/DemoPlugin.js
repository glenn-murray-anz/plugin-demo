import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';

import {Menu, useMenuState, MenuButton, MenuItem} from '@twilio-paste/core/menu';

const PLUGIN_NAME = 'DemoPlugin';

const MenuExample = () => {
  const menu = useMenuState();
  return (
    <div>
      <MenuButton {...menu} variant="primary">
        Actions you can take
      </MenuButton>
      <Menu {...menu} aria-label="Actions">
        <MenuItem {...menu}>Call your representatives</MenuItem>
        <MenuItem {...menu}>Support black-owned businesses</MenuItem>
        <MenuItem {...menu}>Vote in national, state, and local elections</MenuItem>
      </Menu>
    </div>
  );
};

export default class DemoPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    flex.MessagingCanvas.defaultProps.autoInitChannel = true;

    flex.TaskCanvas.Content.add(
      <MenuExample key='chat-resolve-buttons' />
    );
  }
}
