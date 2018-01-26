/*
Copyright 2017 Super Adventure Developers
See the NOTICE file at the top-level directory of this distribution and at
https://github.com/nafundi/super-adventure/blob/master/NOTICE.

This file is part of Super Adventure. It is subject to the license terms in
the LICENSE file found in the top-level directory of this distribution and at
https://www.apache.org/licenses/LICENSE-2.0. No part of Super Adventure,
including this file, may be copied, modified, propagated, or distributed
except according to the terms contained in the LICENSE file.
*/

// TODO: Without this, PhantomJS throws an error indicating that Symbol is not
// defined. Is Babel not defining Symbol? Should we switch to Headless Chrome
// over PhantomJS?
import 'babel-polyfill';
import Vue from 'vue';

import { router } from '../lib/setup';
import { MockLogger, mockRouteForRouter } from './util';

Vue.prototype.$logger = new MockLogger();

// eslint-disable-next-line import/prefer-default-export
export const mockRoute = mockRouteForRouter(router);