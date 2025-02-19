/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import { render } from '@testing-library/react';
import React from 'react';
import { MOCK_DATA } from '../../../../test/mocks/mockData';
import { notificationServiceMock } from '../../../../test/mocks/serviceMock';
import { ChannelCard } from '../components/NotificationsTable/Flyout/ChannelCard';
import { TableFlyout } from '../components/NotificationsTable/Flyout/TableFlyout';

describe('<TableFlyout /> spec', () => {

  it('renders the component', () => {
    const utils = render(
      <TableFlyout
        notificationItem={MOCK_DATA.notifications.items[0]}
        onClose={() => {}}
        services={notificationServiceMock}
      />
    );
    expect(utils.container.firstChild).toMatchSnapshot();
  });

  it('clicks card link', () => {
    const channel = MOCK_DATA.notifications.items[0].status_list[0]
    const onClose = jest.fn();
    const utils = render(
      <ChannelCard channel={channel} onClose={onClose} />
    );
    utils.getByText(channel.config_name).click();
    expect(onClose).toBeCalled();
  });
});
